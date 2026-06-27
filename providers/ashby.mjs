// @ts-check
/** @typedef {import('./_types.js').Provider} Provider */

// Ashby provider — hits the public posting-api endpoint.
// Auto-detects from careers_url pattern `https://jobs.ashbyhq.com/<slug>`.
//
// Ashby's public posting-api carries a ~10s+ server-side latency floor
// (response time is independent of board size) and rate-limits repeated
// unauthenticated hits. The global default timeout (10s, providers/_http.mjs)
// sits right on that floor, so requests race the timeout and abort. We give
// Ashby a longer timeout plus a backoff+jitter retry (the backoff spaces
// requests out to dodge rate-limiting).
// See .planning/codebase/ashby-scan-abort-diagnosis.md.
const ASHBY_TIMEOUT_MS = 30_000;
const ASHBY_RETRIES = 2;

// Explicit `api:` override (same convention as providers/greenhouse.mjs) — needed
// when careers_url points at a company's own corporate careers page (preferred
// per modes/scan.md) rather than the raw jobs.ashbyhq.com board, so detect() still
// has something to match on. Unlike greenhouse.mjs's assert-and-throw version,
// this silently declines (returns false) for a non-Ashby `api:` value instead of
// throwing — `api:` is a shared field across providers (a tracked_companies entry
// might be Greenhouse-backed with its own `api:` set), so every other provider
// must be able to fall through cleanly rather than erroring on each other's URLs.
function isAshbyApiUrl(url) {
  try {
    const parsed = new URL(url);
    return parsed.protocol === 'https:' && parsed.hostname === 'api.ashbyhq.com';
  } catch {
    return false;
  }
}

function resolveApiUrl(entry) {
  if (entry.api && isAshbyApiUrl(entry.api)) return entry.api;
  const url = entry.careers_url || '';
  const match = url.match(/jobs\.ashbyhq\.com\/([^/?#]+)/);
  if (!match) return null;
  return `https://api.ashbyhq.com/posting-api/job-board/${match[1]}?includeCompensation=true`;
}

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

/** @type {Provider} */
export default {
  id: 'ashby',

  detect(entry) {
    const apiUrl = resolveApiUrl(entry);
    return apiUrl ? { url: apiUrl } : null;
  },

  async fetch(entry, ctx) {
    const apiUrl = resolveApiUrl(entry);
    if (!apiUrl) throw new Error(`ashby: cannot derive API URL for ${entry.name}`);

    let lastErr;
    for (let attempt = 0; attempt <= ASHBY_RETRIES; attempt++) {
      if (attempt > 0) {
        // exponential backoff + jitter — spaces out retries to dodge Ashby rate-limiting
        const backoff = 1000 * 2 ** (attempt - 1) + Math.floor(Math.random() * 500);
        await sleep(backoff);
      }
      try {
        const json = await ctx.fetchJson(apiUrl, { timeoutMs: ASHBY_TIMEOUT_MS });
        const jobs = Array.isArray(json?.jobs) ? json.jobs : [];
        return jobs.map((j) => ({
          title: j.title || '',
          url: j.jobUrl || '',
          company: entry.name,
          location: j.location || '',
        }));
      } catch (e) {
        lastErr = e;
      }
    }
    throw lastErr;
  },
};
