#!/usr/bin/env node
/**
 * dashboard-web.mjs
 * Generates dashboard.html — Interstellar-themed browser dashboard
 * Run: node dashboard-web.mjs
 */

import { readFileSync, writeFileSync, existsSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const ROOT = dirname(fileURLToPath(import.meta.url))

// ─── Parse tracker ────────────────────────────────────────────────────────────

function parseTracker() {
  const path = join(ROOT, 'data', 'applications.md')
  if (!existsSync(path)) return []

  const lines = readFileSync(path, 'utf8').split('\n')
  const headerIdx = lines.findIndex(l => /^\|\s*#/.test(l))
  if (headerIdx < 0) return []

  return lines
    .slice(headerIdx + 2)
    .filter(l => l.trim().startsWith('|'))
    .map(line => {
      const cols = line.split('|').slice(1, -1).map(c => c.trim())
      if (cols.length < 8) return null
      const linkMatch = (cols[7] || '').match(/\[([^\]]+)\]\(([^)]+)\)/)
      return {
        num:        cols[0],
        date:       cols[1],
        company:    cols[2],
        role:       cols[3],
        score:      cols[4],
        status:     cols[5],
        pdf:        cols[6],
        reportLink: linkMatch ? linkMatch[2] : null,
        notes:      cols[8] || ''
      }
    })
    .filter(Boolean)
}

// ─── Load report markdown ─────────────────────────────────────────────────────

function loadReports(apps) {
  const out = {}
  for (const app of apps) {
    if (!app.reportLink) continue
    // reportLink is relative to data/ e.g. ../reports/001-meshy-2026-06-04.md
    const p = join(ROOT, 'data', app.reportLink)
    if (existsSync(p)) out[app.num] = readFileSync(p, 'utf8')
  }
  return out
}

// ─── Stats ────────────────────────────────────────────────────────────────────

function computeStats(apps) {
  const scores = apps.map(a => parseFloat(a.score)).filter(s => !isNaN(s))
  return {
    total:     apps.length,
    applied:   apps.filter(a => ['Applied','Responded','Interview','Offer'].includes(a.status)).length,
    inProcess: apps.filter(a => ['Responded','Interview'].includes(a.status)).length,
    offers:    apps.filter(a => a.status === 'Offer').length,
    rejected:  apps.filter(a => a.status === 'Rejected').length,
    avgScore:  scores.length
      ? (scores.reduce((a, b) => a + b, 0) / scores.length).toFixed(1)
      : null
  }
}

// ─── HTML helpers ─────────────────────────────────────────────────────────────

const esc = s => String(s)
  .replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;')

const STATUS = {
  Applied:   { bg:'#1c1200', fg:'#f0c040', bd:'#7a5c00' },
  Evaluated: { bg:'#0c1828', fg:'#60a5fa', bd:'#1e40af' },
  Responded: { bg:'#160d28', fg:'#a78bfa', bd:'#5b21b6' },
  Interview: { bg:'#0a1f14', fg:'#34d399', bd:'#065f46' },
  Offer:     { bg:'#081a12', fg:'#6ee7b7', bd:'#047857' },
  Rejected:  { bg:'#200c0c', fg:'#f87171', bd:'#7f1d1d' },
  Discarded: { bg:'#141414', fg:'#6b7280', bd:'#374151' },
  SKIP:      { bg:'#0f0f0f', fg:'#4b5563', bd:'#1f2937' },
}

function badge(status) {
  const s = STATUS[status] || STATUS.SKIP
  return `<span class="badge" style="background:${s.bg};color:${s.fg};border:1px solid ${s.bd}">${esc(status)}</span>`
}

function scoreColor(str) {
  const n = parseFloat(str)
  if (isNaN(n)) return '#6b7280'
  if (n >= 4.5) return '#34d399'
  if (n >= 4.0) return '#e8b84b'
  if (n >= 3.5) return '#f59e0b'
  return '#f87171'
}

function statCard(label, value, color) {
  return `<div class="stat-card">
    <div class="stat-value" style="color:${color}">${value}</div>
    <div class="stat-label">${label}</div>
  </div>`
}

function tableRow(app) {
  const btn = app.reportLink
    ? `<button class="report-btn" onclick="openReport('${esc(app.num)}')">View</button>`
    : `<span class="dim">—</span>`
  return `<tr>
    <td class="c-num">${esc(app.num)}</td>
    <td class="c-date">${esc(app.date)}</td>
    <td class="c-company">${esc(app.company)}</td>
    <td class="c-role">${esc(app.role)}</td>
    <td class="c-score" style="color:${scoreColor(app.score)}">${esc(app.score)}</td>
    <td class="c-status">${badge(app.status)}</td>
    <td class="c-pdf">${app.pdf === '✅' ? '✅' : '<span class="dim">—</span>'}</td>
    <td class="c-report">${btn}</td>
    <td class="c-notes">${esc(app.notes)}</td>
  </tr>`
}

// ─── Full HTML ────────────────────────────────────────────────────────────────

function buildHTML(apps, stats, reports, ts) {
  const statsHtml = [
    statCard('Evaluated',  stats.total,                           '#60a5fa'),
    statCard('Applied',    stats.applied,                         '#e8b84b'),
    statCard('In Process', stats.inProcess,                       '#a78bfa'),
    statCard('Offers',     stats.offers,                          '#34d399'),
    statCard('Avg Score',  stats.avgScore ? `${stats.avgScore}/5` : '—', '#e8b84b'),
  ].join('\n')

  const rowsHtml = apps.map(tableRow).join('\n')

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>Career Ops — Nate Oliver</title>
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Space+Mono&display=swap" rel="stylesheet">
<style>
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}

:root{
  --bg:    #06060e;
  --bg2:   #0d1017;
  --bg3:   #111827;
  --bd:    #1e2d3d;
  --bd2:   #2a4060;
  --gold:  #e8b84b;
  --gold2: #f5d060;
  --text:  #d4c5a0;
  --dim:   #6b7280;
  --hi:    #f5eedc;
  --blue:  #60a5fa;
  --font:  'Space Grotesk',sans-serif;
  --mono:  'Space Mono',monospace;
}

html{scroll-behavior:smooth}
body{font-family:var(--font);background:var(--bg);color:var(--text);min-height:100vh;overflow-x:hidden}

/* starfield */
body::before{
  content:'';position:fixed;inset:0;pointer-events:none;z-index:0;
  background-image:
    radial-gradient(1px 1px at  5% 12%,rgba(255,255,255,.18) 0%,transparent 100%),
    radial-gradient(1px 1px at 18% 35%,rgba(255,255,255,.12) 0%,transparent 100%),
    radial-gradient(1px 1px at 32%  8%,rgba(255,255,255,.15) 0%,transparent 100%),
    radial-gradient(1px 1px at 45% 55%,rgba(255,255,255,.10) 0%,transparent 100%),
    radial-gradient(1px 1px at 58% 22%,rgba(255,255,255,.14) 0%,transparent 100%),
    radial-gradient(1px 1px at 70% 78%,rgba(255,255,255,.11) 0%,transparent 100%),
    radial-gradient(1px 1px at 82% 42%,rgba(255,255,255,.16) 0%,transparent 100%),
    radial-gradient(1px 1px at 92% 15%,rgba(255,255,255,.13) 0%,transparent 100%),
    radial-gradient(1px 1px at 12% 68%,rgba(255,255,255,.09) 0%,transparent 100%),
    radial-gradient(1px 1px at 25% 90%,rgba(255,255,255,.12) 0%,transparent 100%),
    radial-gradient(1px 1px at 38% 75%,rgba(255,255,255,.08) 0%,transparent 100%),
    radial-gradient(1px 1px at 52% 88%,rgba(255,255,255,.11) 0%,transparent 100%),
    radial-gradient(1px 1px at 65% 62%,rgba(255,255,255,.14) 0%,transparent 100%),
    radial-gradient(1px 1px at 78% 30%,rgba(255,255,255,.10) 0%,transparent 100%),
    radial-gradient(1px 1px at 88% 55%,rgba(255,255,255,.13) 0%,transparent 100%),
    radial-gradient(2px 2px at  7% 45%,rgba(232,184,75,.07)  0%,transparent 100%),
    radial-gradient(2px 2px at 55%  5%,rgba(96,165,250,.06)  0%,transparent 100%),
    radial-gradient(2px 2px at 95% 85%,rgba(232,184,75,.05)  0%,transparent 100%)
}

/* ambient wormhole glow */
body::after{
  content:'';position:fixed;top:-25%;left:50%;transform:translateX(-50%);
  width:55vw;height:55vw;pointer-events:none;z-index:0;
  background:radial-gradient(ellipse,rgba(232,184,75,.045) 0%,transparent 65%)
}

.wrap{position:relative;z-index:1;max-width:1440px;margin:0 auto;padding:0 2rem 5rem}

/* ── Header ── */
.hd{
  padding:2.5rem 0 2rem;
  border-bottom:1px solid var(--bd);
  display:flex;align-items:flex-end;justify-content:space-between;gap:1rem;flex-wrap:wrap
}
.hd-eyebrow{font-size:.65rem;font-weight:500;letter-spacing:.35em;text-transform:uppercase;color:var(--gold);margin-bottom:.4rem}
.hd-name{font-size:2rem;font-weight:700;color:var(--hi);letter-spacing:-.01em;line-height:1}
.hd-name em{color:var(--gold);font-style:normal}
.hd-meta{text-align:right;font-size:.72rem;color:var(--dim);font-family:var(--mono)}
.hd-meta span{display:block;margin-top:.2rem}

/* ── Stats ── */
.stats{display:flex;gap:1rem;padding:2rem 0;flex-wrap:wrap}
.stat-card{
  flex:1;min-width:110px;
  background:var(--bg2);border:1px solid var(--bd);border-radius:8px;
  padding:1.2rem 1.4rem;transition:border-color .2s
}
.stat-card:hover{border-color:var(--bd2)}
.stat-value{font-size:2rem;font-weight:700;font-family:var(--mono);line-height:1;margin-bottom:.4rem}
.stat-label{font-size:.65rem;font-weight:500;letter-spacing:.2em;text-transform:uppercase;color:var(--dim)}

/* ── Table ── */
.tbl-hd{display:flex;align-items:center;justify-content:space-between;margin-bottom:.9rem}
.tbl-title{font-size:.65rem;font-weight:600;letter-spacing:.25em;text-transform:uppercase;color:var(--dim)}
.tbl-count{font-size:.72rem;font-family:var(--mono);color:var(--dim)}
.tbl-wrap{overflow-x:auto;border:1px solid var(--bd);border-radius:10px}

table{width:100%;border-collapse:collapse;font-size:.875rem}
thead tr{background:var(--bg2);border-bottom:1px solid var(--bd)}
th{
  padding:.8rem 1rem;text-align:left;
  font-size:.6rem;font-weight:600;letter-spacing:.2em;text-transform:uppercase;
  color:var(--dim);white-space:nowrap
}
tbody tr{border-bottom:1px solid var(--bd);background:var(--bg);transition:background .15s}
tbody tr:last-child{border-bottom:none}
tbody tr:hover{background:var(--bg2)}
td{padding:.8rem 1rem;vertical-align:middle}

.c-num    {width:3rem;color:var(--dim);font-family:var(--mono);font-size:.72rem}
.c-date   {width:7rem;color:var(--dim);font-family:var(--mono);font-size:.75rem;white-space:nowrap}
.c-company{font-weight:600;color:var(--hi)}
.c-role   {color:var(--text);max-width:200px}
.c-score  {width:5rem;font-family:var(--mono);font-weight:600;text-align:center}
.c-status {width:7.5rem}
.c-pdf    {width:3.5rem;text-align:center}
.c-report {width:5rem}
.c-notes  {color:var(--dim);font-size:.78rem;max-width:280px}

.badge{
  display:inline-block;padding:.2rem .55rem;border-radius:4px;
  font-size:.68rem;font-weight:600;letter-spacing:.04em;white-space:nowrap
}

.report-btn{
  background:transparent;border:1px solid var(--bd);color:var(--blue);
  font-family:var(--font);font-size:.73rem;font-weight:500;
  padding:.22rem .55rem;border-radius:4px;cursor:pointer;transition:all .15s;white-space:nowrap
}
.report-btn:hover{border-color:var(--blue);background:rgba(96,165,250,.08)}
.dim{color:var(--dim)}

/* ── Modal ── */
.modal{
  display:none;position:fixed;inset:0;
  background:rgba(6,6,14,.9);backdrop-filter:blur(5px);
  z-index:200;align-items:center;justify-content:center;padding:2rem
}
.modal.open{display:flex}
.modal-box{
  background:var(--bg2);border:1px solid var(--bd2);border-radius:12px;
  width:100%;max-width:880px;max-height:90vh;
  display:flex;flex-direction:column;
  box-shadow:0 0 80px rgba(232,184,75,.07),0 30px 60px rgba(0,0,0,.7)
}
.modal-top{
  display:flex;align-items:center;justify-content:space-between;
  padding:1.1rem 1.5rem;border-bottom:1px solid var(--bd);flex-shrink:0
}
.modal-top-label{font-size:.7rem;font-weight:600;letter-spacing:.2em;text-transform:uppercase;color:var(--gold)}
.modal-x{
  background:none;border:none;color:var(--dim);font-size:1.5rem;
  cursor:pointer;line-height:1;padding:.1rem .35rem;border-radius:4px;transition:color .15s
}
.modal-x:hover{color:var(--hi)}
.modal-body{overflow-y:auto;padding:1.8rem 2rem;flex:1}

/* markdown inside modal */
.modal-body h1{font-size:1.35rem;color:var(--hi);margin-bottom:1rem;padding-bottom:.5rem;border-bottom:1px solid var(--bd)}
.modal-body h2{font-size:1rem;color:var(--gold);margin-top:1.8rem;margin-bottom:.6rem;font-weight:600}
.modal-body h3{font-size:.9rem;color:var(--hi);margin-top:1.2rem;margin-bottom:.4rem;font-weight:600}
.modal-body p{line-height:1.75;margin-bottom:.75rem}
.modal-body strong{color:var(--hi)}
.modal-body em{color:var(--gold);font-style:italic}
.modal-body hr{border:none;border-top:1px solid var(--bd);margin:1.4rem 0}
.modal-body ul,.modal-body ol{padding-left:1.5rem;margin-bottom:.75rem}
.modal-body li{margin-bottom:.3rem;line-height:1.65}
.modal-body code{font-family:var(--mono);font-size:.82em;background:var(--bg3);padding:.1em .35em;border-radius:3px;color:var(--blue)}
.modal-body pre{background:var(--bg3);border:1px solid var(--bd);border-radius:6px;padding:1rem;overflow-x:auto;margin:1rem 0}
.modal-body pre code{background:none;padding:0;color:var(--text)}
.modal-body blockquote{border-left:3px solid var(--gold);padding:.5rem 1rem;margin:1rem 0;color:var(--dim);background:rgba(232,184,75,.04);border-radius:0 4px 4px 0}
.modal-body table{width:100%;border-collapse:collapse;margin:1rem 0;font-size:.82rem}
.modal-body table th{background:var(--bg3);color:var(--dim);padding:.55rem .8rem;text-align:left;font-size:.6rem;letter-spacing:.15em;text-transform:uppercase;border:1px solid var(--bd)}
.modal-body table td{padding:.55rem .8rem;border:1px solid var(--bd);color:var(--text)}
.modal-body table tr:nth-child(even) td{background:var(--bg2)}

/* ── Footer ── */
.ft{
  margin-top:3rem;padding-top:1.4rem;border-top:1px solid var(--bd);
  display:flex;justify-content:space-between;align-items:center;flex-wrap:wrap;gap:.5rem;
  font-size:.7rem;color:var(--dim);font-family:var(--mono)
}
.ft code{color:var(--gold);background:var(--bg3);padding:.1em .4em;border-radius:3px}

/* scrollbar */
::-webkit-scrollbar{width:5px;height:5px}
::-webkit-scrollbar-track{background:var(--bg)}
::-webkit-scrollbar-thumb{background:var(--bd);border-radius:3px}
::-webkit-scrollbar-thumb:hover{background:var(--bd2)}
</style>
</head>
<body>
<div class="wrap">

  <header class="hd">
    <div>
      <div class="hd-eyebrow">Career Ops — Mission Control</div>
      <div class="hd-name">Nate <em>Oliver</em></div>
    </div>
    <div class="hd-meta">
      <div>${ts}</div>
      <span>Run <code style="font-family:var(--mono);font-size:.68rem;color:var(--gold);background:var(--bg3);padding:.1em .35em;border-radius:3px">node dashboard-web.mjs</code> to refresh</span>
    </div>
  </header>

  <div class="stats">
${statsHtml}
  </div>

  <section>
    <div class="tbl-hd">
      <span class="tbl-title">Applications Pipeline</span>
      <span class="tbl-count">${apps.length} entr${apps.length === 1 ? 'y' : 'ies'}</span>
    </div>
    <div class="tbl-wrap">
      <table>
        <thead><tr>
          <th>#</th><th>Date</th><th>Company</th><th>Role</th>
          <th>Score</th><th>Status</th><th>PDF</th><th>Report</th><th>Notes</th>
        </tr></thead>
        <tbody>
${rowsHtml}
        </tbody>
      </table>
    </div>
  </section>

  <footer class="ft">
    <span>career-ops · dashboard-web.mjs</span>
    <span>Open <code>dashboard.html</code> in any browser · reports load in-page</span>
  </footer>

</div>

<!-- Report modal -->
<div class="modal" id="modal" onclick="overlayClick(event)">
  <div class="modal-box">
    <div class="modal-top">
      <span class="modal-top-label" id="modalLabel">Evaluation Report</span>
      <button class="modal-x" onclick="closeModal()" title="Close (Esc)">×</button>
    </div>
    <div class="modal-body" id="modalBody"></div>
  </div>
</div>

<script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js"></script>
<script>
const REPORTS = ${JSON.stringify(reports)};

function openReport(num) {
  const md = REPORTS[num]
  const body = document.getElementById('modalBody')
  body.innerHTML = md
    ? marked.parse(md)
    : '<p style="color:#6b7280;padding:1rem">Report file not found.</p>'
  // use h1 text as label if available
  const h1 = body.querySelector('h1')
  document.getElementById('modalLabel').textContent = h1 ? h1.textContent : ('Report #' + num)
  document.getElementById('modal').classList.add('open')
  body.scrollTop = 0
}

function closeModal() {
  document.getElementById('modal').classList.remove('open')
}

function overlayClick(e) {
  if (e.target === document.getElementById('modal')) closeModal()
}

document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal() })
</script>
</body>
</html>`
}

// ─── Run ──────────────────────────────────────────────────────────────────────

const apps    = parseTracker()
const stats   = computeStats(apps)
const reports = loadReports(apps)
const ts      = new Date().toLocaleString('en-US', { dateStyle: 'medium', timeStyle: 'short' })
const html    = buildHTML(apps, stats, reports, ts)
const outPath = join(ROOT, 'dashboard.html')

writeFileSync(outPath, html, 'utf8')
console.log(`✅  dashboard.html written`)
console.log(`    ${apps.length} application(s)  ·  avg score: ${stats.avgScore ?? '—'}`)
console.log(`    Open: start dashboard.html`)
