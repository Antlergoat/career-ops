// @ts-check
/** @typedef {import('./_types.js').Provider} Provider */

// Workday provider — hits the public CXS jobs API.
// Auto-detects from careers_url pattern `https://<company>.<shard>.myworkdayjobs.com/[<locale>/]<site>`.
// Documented in modes/scan.md's Level 2 ATS table but never had an implementation
// until now — every tracked_companies entry on Workday (NVIDIA, Autodesk, etc.) was
// silently falling through to scan_method: websearch and getting skipped entirely
// by scan.mjs's zero-token pass.

const URL_RE = /^https?:\/\/([a-z0-9-]+)\.(wd\d+)\.myworkdayjobs\.com\/(?:([a-z]{2}-[A-Z]{2})\/)?([^/?#]+)/i;

function parseEntry(entry) {
  const url = entry.careers_url || '';
  const match = url.match(URL_RE);
  if (!match) return null;
  const [, company, shard, locale, site] = match;
  return { company, shard, locale, site };
}

function resolveApiUrl(entry) {
  const parsed = parseEntry(entry);
  if (!parsed) return null;
  const { company, shard, site } = parsed;
  return `https://${company}.${shard}.myworkdayjobs.com/wday/cxs/${company}/${site}/jobs`;
}

const PAGE_SIZE = 20;
const MAX_PAGES = 50; // safety cap — 1000 postings is far beyond any real career page

async function fetchAllPostings(apiUrl, ctx) {
  const postings = [];
  let offset = 0;
  for (let page = 0; page < MAX_PAGES; page++) {
    const json = await ctx.fetchJson(apiUrl, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ appliedFacets: {}, limit: PAGE_SIZE, offset, searchText: '' }),
    });
    const batch = Array.isArray(json?.jobPostings) ? json.jobPostings : [];
    postings.push(...batch);
    offset += PAGE_SIZE;
    const total = typeof json?.total === 'number' ? json.total : null;
    if (batch.length < PAGE_SIZE || (total !== null && offset >= total)) break;
  }
  return postings;
}

/** @type {Provider} */
export default {
  id: 'workday',

  detect(entry) {
    const apiUrl = resolveApiUrl(entry);
    return apiUrl ? { url: apiUrl } : null;
  },

  async fetch(entry, ctx) {
    const parsed = parseEntry(entry);
    if (!parsed) throw new Error(`workday: cannot derive API URL for ${entry.name}`);
    const apiUrl = resolveApiUrl(entry);
    const postings = await fetchAllPostings(apiUrl, ctx);
    const { company, shard, locale, site } = parsed;
    const base = `https://${company}.${shard}.myworkdayjobs.com${locale ? `/${locale}` : ''}/${site}`;
    return postings.map(j => ({
      title: j.title || '',
      url: j.externalPath ? `${base}${j.externalPath}` : base,
      company: entry.name,
      location: j.locationsText || (Array.isArray(j.bulletFields) ? j.bulletFields[0] : '') || '',
    }));
  },
};
