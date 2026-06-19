# SETUP-NOTES.md
# Career-Ops Project — Session Handoff & Architecture Log

> This file is the project journal for Nate Oliver's career-ops setup.
> It is NOT a career-ops context file — do not include it in evaluation sessions.
> Reference it at the start of each work session to restore project state.
>
> **Single-file policy (since Session 7):** All session history lives in this one file.
> There are no separate addendum files — earlier per-session addendums were merged in
> during Session 7's cleanup and then deleted. Every session entry below follows the same
> structure: Context (if relevant) → Completed → Decisions (if any) → Carried forward (if any).

---

## Project Overview

Setting up a personalized instance of **santifer/career-ops** — an AI-powered job search
pipeline built on Claude Code — with custom training input, a multi-resume base library,
a JD routing system, and a custom HTML render template reverse-engineered from an existing
Canva resume design.

**Forked repo:** https://github.com/Antlergoat/career-ops (clone lives at `career-ops/` —
confirmed the only real git repo for this project; the parent `job-hunt/` folder is not
version-controlled)

**Reference repo (Cowork plugin variant, lower friction alternative):**
https://github.com/andrew-shwetzer/career-ops-plugin

---

## Session Log

### Session 1 — June 2026 (work machine, claude.ai)

**Completed:**
- Analyzed and compared both repos (santifer/career-ops vs. andrew-shwetzer/career-ops-plugin)
- Scoped the Canva resume → HTML template replacement project
- Made all targeting and role preference decisions (see Targeting Decisions section below)
- Decided on base resume library architecture
- Scoped JD routing logic (not yet written)
- Generated `article-digest.md`, `HANDOFF-PROMPT.md`, `SETUP-NOTES.md` — downloaded and brought to home machine

---

### Session 2 — June 4, 2026 (home machine, claude.ai)

**Context:** Used `HANDOFF-PROMPT.md` to brief home Claude. All core file creation happened this session (confirmed by file timestamps, ~7:55 PM – 10:31 PM).

**Completed:**
- `cv.md` — canonical master CV
- `cv-creative-lead.md`, `cv-pmm.md`, `cv-stretch.md` — base resume library
- `config/profile.yml` — roles, comp, geography, narrative, proof points
- `modes/_profile.md` — adaptive framing, negotiation scripts, location policy, routing summary
- `## Resume Routing` section added to `article-digest.md`
- 3 resume PDFs placed in `resumes/` directory

---

### Session 3 — June 2026 (work machine, claude.ai)

**Context:** Follow-up questions about `andrew-shwetzer/career-ops-plugin`. No career-ops files built directly — this session was research that fed Session 4.

**Completed:**
- Scanned `career-ops-plugin` for reusable marketing archetype content. Finding: the plugin lists Creative/Marketing as one of 15 industry archetypes, but the skill files aren't publicly crawlable, and based on available documentation the archetype appears to be a relabeled generic evaluation block rather than domain-specific content. **Not worth borrowing wholesale — structural reference only.**
- Discovered `coreyhaines31/marketingskills` — a separate repo of marketing skills for Claude Code / AI agents, more substantive than the plugin for domain vocabulary. Contains `ops-stack-mapping.md` (marketing skills + MCPs mapped to AARRR stages), `client-types.md` (archetype variations by business model), `measurement-framework.md` (north-star patterns, KPI patterns, kill criteria). Installed at work in the ICM/Claude Code environment for active marketing projects — **vocabulary reference only, not installed in career-ops.**

**Decisions:**
- The most reliable source for customizing `_shared.md`'s archetype table is `article-digest.md` combined with actual JD language from target roles — not borrowed repos. The plugin gives naming convention; `marketingskills` gives domain vocabulary; the substance comes from Nate's own positioning work.
- Recommended next step: draft the archetype table for `_shared.md` using `article-digest.md` as source, 3-column format (Archetype | Thematic axes | What they buy).

**Carried forward:**
- Draft and implement the archetype table in `modes/_shared.md` (became Session 4)

---

### Session 4 — June 14, 2026 (home machine, Claude Code / VS Code)

**Context:** First home-machine session using Claude Code in VS Code (previous home sessions used claude.ai). Picked up directly from Session 3's recommendation.

**Completed:**
- Full repo state audit — confirmed Sessions 1–3 items substantially complete. One gap found: `cv_base_library` block in `config/profile.yml` was commented out — confirmed nothing reads it (no references in any `.mjs` script or mode file); routing is fully handled by markdown instructions in `article-digest.md` and `_shared.md`, so this was not treated as a defect.
- Replaced the upstream AI/tech archetype table in `modes/_shared.md` with Nate's 7 marketing archetypes in a 3-column format (Archetype | Thematic axes / key JD signals | What they buy): Creative Marketing Lead/Manager, Brand Marketing Manager, Product Marketing Manager (PMM), Senior Manager/Assistant Director, Marketing Manager (general), AI-Forward Creative/Marketing, Stretch/Prestige (NVIDIA Rule)
- Added a dedicated **AI-Forward Creative / Marketing** archetype row with a dual trigger — fires on JD signal keywords (generative AI, AI workflows, Midjourney, etc.) OR on company type (Runway, Midjourney, ElevenLabs, Higgsfield, Anthropic, OpenAI, Adobe Firefly, Figma AI, etc.)
- Added an AI fluency overlay rule instructing the system to layer AI fluency as a differentiator on top of the primary marketing archetype, not replace it
- Updated `article-digest.md` Technical/AI skills section: elevated the Agentic Marketing Pipeline (5-stage — Research → Curation → Draft & Fact-Check → Final Writing → Image/Video + Salesforce rendering, orchestrated across Claude/ChatGPT/Copilot via context folder + markdown scaffolding), added Power Automate + AI Builder/Copilot Daily Digest automation, named the multi-LLM orchestration distinction explicitly, added the Yelp Response Bot as an in-progress proof point (Yelp + Zapier + Google Sheets + Claude + ICM, built for an HVAC small-business client — first autonomous agent deployment)
- Updated the Proof Points table — AI row expanded and renamed to "Agentic marketing / AI fluency"
- Updated the "For AI / Tech Company Roles" positioning section with the specific pipeline proof points and the framing line: "Most marketers who claim AI fluency mean they prompt ChatGPT. This is multi-LLM orchestration with a defined methodology, applied to real campaign outputs."
- Session ended with Nate opening the Canva resume PDF to begin the `cv-template.html` replacement project

**Decisions:**
- **Positioning sanity check:** Nate raised the concern "I don't want a 100% AI tech role — I just want my AI skills known." The AI fluency overlay rule, as initially drafted, said to "shift lead framing" toward AI — too aggressive. Corrected to "layer AI fluency as differentiator" instead. The intended positioning: Nate is evaluated as a Creative Marketing Lead (or PMM, or Brand Manager) who happens to have AI pipeline skills most marketers in his peer group don't have — AI fluency is a differentiator within his marketing identity, not a replacement for it.
- All AI skills claimed are real and in active use, not aspirational. The Yelp bot is correctly flagged as in-development. "Agentic marketing" is Nate's own term for a real pipeline, not an industry buzzword claim.

**Carried forward:**
- `cv-template.html` replacement project (became Session 5)
- Phone number still blank in `config/profile.yml`

---

### Session 5 — June 14, 2026 (home machine, Claude Code / VS Code)

**Context:** Continuation of Session 4, same evening. Focused entirely on the `cv-template.html` replacement project.

**Completed:**
- Read `career-ops/resumes/Nate-Oliver-PMM.pdf` directly via Claude Code's PDF vision and extracted the full Canva visual system: two-column layout (dark sidebar ~33% + white main panel ~67%), gold `#F5B81C` accent bars, dark navy `#1c1c28` sidebar background, white main panel, Space Grotesk (headings, uppercase) + DM Sans (body) — both fonts already present as local woff2 files, no new fonts needed, vertical timeline with line + circle markers for experience entries, gold continuation bar at the top of page 2 (Playwright/CSS handles pagination naturally)
- Rebuilt `templates/cv-template.html` as the Canva-matched two-column design. **All original `{{VARIABLE}}` injection slots preserved.** Layout mapping: header (name, contact row) → sidebar name block + contact list; Core Competencies, Skills, Education → sidebar; Professional Summary, Work Experience (with timeline), Projects, Certifications → main panel. `.competency-tag` restyled from pill tags to sidebar bullet list; `.job::before` uses a gold-bordered circle on dark fill for timeline markers; `break-inside: avoid` and `print-color-adjust: exact` preserved for correct dark-sidebar print rendering.
- Created `templates/cv-template-ats.html` — single-column layout using the same Space Grotesk + DM Sans fonts and gold `#F5B81C` accent color (not plain black-and-white — gold section underlines keep visual consistency while remaining single-column and ATS-safe). Standard header (name + tagline + horizontal gold rule + contact row), no sidebar, no photo.
- Added two new injection variables: `{{TAGLINE}}` (subtitle line below name, sourced from Nate's LinkedIn headline — "Brand Builder | Creative Marketing Strategist | AI Solutionist") and `{{PHOTO_URL}}` (headshot reference, `./images/headshot.png`)
- Updated `generate-pdf.mjs` — added base64 image embedding after the existing font-path-resolution block. Scans rendered HTML for `<img src="...">` where the src isn't already `data:`, `http://`, `https://`, or `file://`; resolves the path relative to `career-ops/templates/`, reads the file, encodes as a base64 data URI, and swaps it in before Playwright renders. Chosen over relative or absolute file paths because `generate-pdf.mjs` writes filled HTML to `/tmp/` before rendering, where relative paths break and absolute paths are machine-specific — base64 is self-contained and works anywhere.
- Wired `tagline` and `photo_url` into `config/profile.yml` under `candidate:`, and added `{{TAGLINE}}` / `{{PHOTO_URL}}` rows to the placeholder injection table in `modes/pdf.md`
- Created `templates/images/` directory; `headshot.png` placed by Nate
- Test render: `node generate-pdf.mjs output/cv-nate-oliver-test.html output/cv-nate-oliver-test.pdf --format=letter` → `output/cv-nate-oliver-test.pdf`, 2 pages, 1.8MB, photo rendered correctly, layout confirmed working

**Decisions:**
- Base64 image embedding chosen over a relative-path approach (initially suggested by Nate) for cleaner implementation with no path-resolution edge cases
- Template selection feature (letting the user choose between visual templates) explicitly deferred — get the initial mechanics working first
- ATS template keeps the gold accent color system rather than going plain black-and-white, to preserve some visual brand consistency while staying single-column and parser-safe

**Carried forward:**
- Phone number still blank in `config/profile.yml`
- Template selection feature — deferred, not built
- First real job evaluation — system fully configured, ready to paste a JD URL and run the full pipeline

---

### Session 6 — June 17–18, 2026 (home machine, Claude Code / VS Code)

**Context:** Picked up inside `career-ops/` without initially finding the Session 1–5 history — that history had been saved one level up at `d:\AI\Projects\job-hunt\` by mistake (likely a path slip during an earlier download/save). This session redid some Session 1–2 setup narratively (redundant but harmless) before the duplication was discovered and reconciled near the end of the session.

**Completed:**
- Built `dashboard-web.mjs` — generates `dashboard.html`, an Interstellar-themed browser dashboard with stats, an applications table, and an in-page report modal (marked.js). Run: `node dashboard-web.mjs` then `start dashboard.html`
- Added `dashboard.html` to `.gitignore`
- Created `CHEAT-SHEET.md` — VS Code startup, terminal commands, Claude Code slash commands, core workflow, key files, and common error fixes
- Evaluated **Meshy PMM** role (4.6/5, Applied 2026-05-22) — report `001-meshy-2026-06-04.md`
- Logged retroactive rejection: **Quick Quack Car Wash ACD** (3.5/5, Applied 2025-09-01, Rejected) — report `002-quick-quack-2025-09-01.md`
- Scanned the live portfolio at nateoliver.net — boutique, narrative-based, two case studies (Cloud Vapory + Vulcan Vents). Portfolio was NOT live during pre-system applications (e.g. Quick Quack).
- Updated `article-digest.md`: added the 12K monthly web visitors metric (Vulcan Vents), documented the Cloud Vapory two-number strategy ($100K year-one vs. $500K+ total — both intentional, different audiences/contexts), added a `## Portfolio — nateoliver.net` section
- Updated `config/profile.yml`: email corrected to `nate@nateoliver.net` (was mistakenly `noliver@newcalmetals.com`)
- **Reconciliation:** discovered the Session 1–5 history (`SETUP-NOTES.md` + 3 addendum files) had been saved to `d:\AI\Projects\job-hunt\` instead of `career-ops/`. Verified via direct file inspection that the Session 4/5 file changes (`modes/_shared.md` archetype table, `templates/cv-template.html` Canva rebuild, `generate-pdf.mjs` image embedding, `config/profile.yml` tagline/photo_url) were genuinely present in the real repo — nothing was lost, only the documentation was misplaced. Diffed both copies of `article-digest.md` to confirm the parent copy was a stale pre-Session-4 snapshot with no unique content. Moved the 3 addendum files into `career-ops/` and deleted the redundant parent-level copies.
- Set local git identity (`user.name`/`user.email`, scoped to this repo only) and committed all Session 4–6 work in one commit (`3d4ebc0`) — archetype table, Canva templates, base resume library, dashboard, `CHEAT-SHEET.md`, merged `SETUP-NOTES.md`. Working tree clean. Nothing pushed to GitHub.
- Filled in phone number in `config/profile.yml`: `+1 (916) 573-0050`
- Created `data/pipeline.md` (the pending-URLs inbox referenced in `CLAUDE.md` but never actually created) and ran `node scan.mjs` for the first time — zero-token scan hit Greenhouse/Ashby/Lever APIs for 19 tracked companies, found 1,098 total jobs, filtered to 23 new matches (Anthropic, Perplexity, ElevenLabs, Notion, Intercom, Asana). 8 companies 404'd (Runway, Figma, Webflow, Unity, Zendesk, Framer, Cleo, Luma AI) — their `portals.yml` ATS endpoints are stale.
- Extended `dashboard-web.mjs`: added a `parsePipeline()` reader for `data/pipeline.md`, a "Pending" stat card, and a "Pending Pipeline" table section (Company/Role/Open-link) above the Applications table
- Made both dashboard table sections collapsible — clickable header with rotating chevron, state persisted in browser `localStorage`

**Decisions:**
- The "agency background" gap initially flagged in the Quick Quack evaluation was wrong — Vulcan Vents (7+ years, national retail brand distributed through Home Depot/Lowe's) directly satisfies "7+ years agency or brand experience." Corrected mid-evaluation. The real blockers were comp ceiling (~$95–115K market for that role vs. Nate's $130K minimum) and portfolio aesthetic mismatch (Hollywood/technical portfolio vs. Quick Quack's friendly/consumer brand voice) — not experience depth.

**Carried forward:**
- Template selection feature — deferred
- First live evaluation through the now-complete pipeline (PDF render with photo/tagline tested but not yet used for a real application)
- 23 offers sitting in `data/pipeline.md`, ready for `/career-ops pipeline` evaluation whenever Nate wants to start working through them
- Portfolio site shows "10,000+ monthly web visitors" for Vulcan Vents (Webflow, not a career-ops file) — correct figure is 12,000+
- 8 tracked companies in `portals.yml` have stale ATS endpoints returning 404 — not urgent

---

### Session 7 — June 18, 2026 (home machine, Claude Code / VS Code)

**Context:** Direct continuation of Session 6. Nate noticed the addendum-file pattern was inconsistent with how Session 6 had been logged (inline, no separate file) and asked for uniform structure across all sessions.

**Completed:**
- Consolidated the 3 separate addendum files (`SETUP-NOTES-ADDENDUM-SESSION-2.md`, `-4.md`, `-5.md`) into this single file, applying a uniform per-session structure (Context → Completed → Decisions → Carried forward) to every session from 1 through 6
- Corrected a numbering error found during consolidation: `SETUP-NOTES-ADDENDUM-SESSION-2.md` was mislabeled — its content (the `career-ops-plugin` scan, `marketingskills` discovery) was actually Session 3's work per this file's own session log. Folded into Session 3, not Session 2.
- Deleted all 3 addendum files now that their content lives here
- Removed the "also read the addendum files" instruction from the top of this file since addendums no longer exist
- Confirmed `CHANGELOG.md` is correctly left untouched — it's auto-generated by `release-please` from santifer's upstream commits/PRs and only updates via `node update-system.mjs apply`; it has no relationship to user customization work

**Decisions:**
- Going forward, all session history lives in this one file — no more per-session addendum files. Rationale: the addendum pattern made sense when sessions happened in separate claude.ai chats with limited file-handling, but in Claude Code there's no constraint forcing that split, and the split itself caused the Session 6 misplacement incident. If this file ever gets unwieldy, archive old sessions into a separate `SETUP-NOTES-ARCHIVE.md` rather than reintroducing per-session files.

---

## Targeting Decisions (Locked)

### Role Type Preference (ranked)
1. **Creative Marketing Lead / Manager** — bull's-eye. Leads a creative team, owns brand
   narrative, bridges strategy and execution.
2. **PMM at a notable company** — strong fit when the product has a visual/creative/brand
   dimension. AI, creative tools, design platforms are primary targets.
3. **Assistant Director / Senior Manager** — leadership scope without full Director weight.
   Good step into a larger organization.
4. **Marketing Manager (general)** — viable if scope is substantive and company/industry
   is interesting. Lowest priority.

> Note: Director-level roles are NOT a current target. Current title is Marketing Director
> but Nate does not feel ready for a true Director role at a new company. Leadership scope
> yes — Director title no.

### Company Tier Weighting
**Balanced — role fit and company prestige matter equally.**
A strong role at a mid-tier company beats a weak role at a famous one. But prestige
is a legitimate factor and worth some role-title compromise.

### Stretch Role Policy — The NVIDIA Rule
When a tier-1 company (NVIDIA, Apple, Adobe, Figma, Google, Anthropic, OpenAI,
Pixar/Disney, Rockstar, EA, or similar) posts a role with a title that undersells the
scope (e.g. "PowerPoint Designer," "Content Coordinator"), **flag it as a stretch but
evaluate fully.** Do not penalize evaluation score for title mismatch alone. Look at
actual JD responsibilities, team signals, and growth trajectory. The brand association
from a single marquee-company role is a career asset that compounds.

---

## Architecture Decisions

### Problem: Single cv.md Is Insufficient
Career-ops's default assumption is one master `cv.md` that gets dynamically tailored
per job description. This works when the delta between roles is moderate. For Nate,
the *lead professional identity* changes depending on role type:

- Creative Marketing brain → brand builds, visual craft, Hollywood/games credibility
- PMM brain → GTM strategy, 0→1 launches, audience research, AI fluency
- Hybrid/stretch → prestige company, evaluate JD scope over title

Dynamic tailoring from a single source produces mediocre hybrids. The solution is a
**base resume library** — implemented Session 2, confirmed in place.

### Base Resume Library Structure (✅ Implemented)
```
career-ops/
├── article-digest.md          ← professional positioning canon
├── SETUP-NOTES.md             ← this file (project journal)
├── cv.md                      ← master / canonical (everything, source of truth)
├── cv-creative-lead.md        ← Version A, pre-positioned for creative marketing roles
├── cv-pmm.md                  ← Version B, pre-positioned for PMM roles
├── cv-stretch.md              ← Version C, prestige/hybrid roles
├── config/
│   └── profile.yml            ← comp, geography, remote preference, tagline, photo
├── templates/
│   ├── cv-template.html       ← Canva two-column visual render (Session 5)
│   └── cv-template-ats.html   ← single-column ATS-safe variant (Session 5)
```

### JD Routing Logic (✅ Implemented)
Lives in `article-digest.md` § Resume Routing and is enforced by `modes/_shared.md`'s
Archetype Detection table.

| JD Signal | Base Resume to Use |
|---|---|
| "brand," "creative," "design," "visual," "content," "campaign," "storytelling" | `cv-creative-lead.md` |
| "GTM," "go-to-market," "product marketing," "PMM," "launch," "personas," "positioning" | `cv-pmm.md` |
| Tier-1 company + narrow/junior title + substantive JD scope | `cv-stretch.md` |
| Mixed signals or unclear | `cv.md` (master) |

---

## Canva → HTML Template Project — ✅ COMPLETE (Session 5)

### Goal
Replace career-ops's existing `cv-template.html` render layer with a new template that
matches Nate's existing Canva resume visual system — typography, color palette, layout
structure, spacing rhythm — while preserving career-ops's ATS keyword injection variables.

### Result
Two-column dark sidebar + gold bar design (`templates/cv-template.html`) plus a
single-column ATS-safe variant (`templates/cv-template-ats.html`). Both preserve all
original `{{VARIABLE}}` injection slots. Headshot photo and LinkedIn tagline embed via
two new variables (`{{PHOTO_URL}}`, `{{TAGLINE}}`), with base64 image embedding added to
`generate-pdf.mjs` so renders are self-contained regardless of execution directory.

Test render confirmed working: `output/cv-nate-oliver-test.pdf` (2 pages, photo + layout
correct). Not yet used for a real application — that's the next milestone.

---

## Key Files Produced

| File | Status | Notes |
|---|---|---|
| `article-digest.md` | ✅ Complete | Resume routing, AI proof points, portfolio section — all current |
| `SETUP-NOTES.md` | ✅ Complete | This file — single canonical history, Session 7 |
| `config/profile.yml` | ✅ Complete | Roles, comp, geography, narrative, proof points, tagline, photo, phone, correct email |
| Base resume library | ✅ Complete | `cv.md`, `cv-creative-lead.md`, `cv-pmm.md`, `cv-stretch.md` |
| `modes/_shared.md` archetype table | ✅ Complete | 7 archetypes, AI fluency overlay rule |
| `modes/_profile.md` | ✅ Complete | Adaptive framing, comp, location, routing summary |
| `templates/cv-template.html` | ✅ Complete | Canva two-column design |
| `templates/cv-template-ats.html` | ✅ Complete | Single-column ATS variant |
| `generate-pdf.mjs` | ✅ Complete | Base64 image embedding |
| `dashboard-web.mjs` | ✅ Complete | Browser dashboard generator with pending pipeline + collapsible sections |
| `CHEAT-SHEET.md` | ✅ Complete | VS Code / terminal / Claude Code quick reference |
| `data/pipeline.md` | ✅ Complete | Pending-URLs inbox; 23 offers queued from first scan |

**Outstanding:**
1. Template selection feature (choose between visual templates) — deferred
2. First real application using the completed PDF pipeline
3. 23 queued offers in `data/pipeline.md` awaiting evaluation
4. Portfolio site traffic figure (10K shown, should be 12K) — Webflow, not a career-ops file
5. 8 stale ATS endpoints in `portals.yml` — not urgent

---

*Last updated: Session 7, June 18, 2026*
