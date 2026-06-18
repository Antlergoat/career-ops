# SETUP-NOTES.md
# Career-Ops Project — Session Handoff & Architecture Log

> This file is the project journal for Nate Oliver's career-ops setup.
> It is NOT a career-ops context file — do not include it in evaluation sessions.
> Reference it at the start of each work session to restore project state.
>
> **To restore full session context:** also read all `SETUP-NOTES-ADDENDUM-*.md` files
> in this directory (`career-ops/`), starting with the most recent. Each addendum contains
> detail on what was done, decisions made, and corrections noted that session — the summary
> in this file is not a substitute for the addendum.
>
> **Reconciliation note (Session 6):** This file was previously split across two locations —
> a more detailed copy at `d:\AI\Projects\job-hunt\` (the parent folder, not a git repo) and
> a thinner, partially-redundant recreation here in `career-ops/` (the actual git repo). Both
> were merged into this single canonical file during Session 6. The parent-level copies and
> their addendums were deleted after merge (verified via diff — nothing unique was lost).
> Going forward, this is the only SETUP-NOTES.md.

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
- Made all targeting and role preference decisions (see below)
- Decided on base resume library architecture
- Scoped JD routing logic (not yet written)
- Work Claude generated: `article-digest.md`, `HANDOFF-PROMPT.md`, `SETUP-NOTES.md` — downloaded and brought to home machine

---

### Session 2 — June 4, 2026 (home machine, claude.ai)

**Context:** Used `HANDOFF-PROMPT.md` to brief home Claude. All core file creation happened this session.

**Completed (confirmed by file timestamps, ~7:55 PM – 10:31 PM):**
- `cv.md` — canonical master CV
- `cv-creative-lead.md`, `cv-pmm.md`, `cv-stretch.md` — base resume library
- `config/profile.yml` — roles, comp, geography, narrative, proof points
- `modes/_profile.md` — adaptive framing, negotiation scripts, location policy, routing summary
- `## Resume Routing` section added to `article-digest.md`
- 3 resume PDFs placed in `resumes/` directory

---

### Session 3 — June 2026 (work machine, claude.ai)

**Context:** Follow-up questions about `andrew-shwetzer/career-ops-plugin`. No files built.

**Completed:**
- Scanned career-ops-plugin for reusable marketing archetype content (structural reference only)
- Discovered `coreyhaines31/marketingskills` repo — installed at work as vocabulary reference, not in career-ops
- Work Claude wrote `SETUP-NOTES-ADDENDUM-SESSION-2.md` with recommendation to draft archetype table

See `SETUP-NOTES-ADDENDUM-SESSION-2.md` for full detail.

---

### Session 4 — June 14, 2026 (home machine, Claude Code / VS Code)

**Completed:**
- Full repo state audit — confirmed Sessions 1–3 items substantially complete
- Replaced upstream AI/tech archetypes in `modes/_shared.md` with Nate's 7 marketing archetypes in expanded 3-column format (Archetype | Thematic axes | What they buy)
- Added dedicated `AI-Forward Creative / Marketing` archetype row with dual trigger (JD signals + company type)
- Added AI fluency overlay rule — framed as layering AI as differentiator, not replacing primary marketing identity (caught and corrected in review)
- Updated `article-digest.md` Technical/AI skills section: elevated Agentic Marketing Pipeline (5-stage, ICM methodology), added Power Automate + AI Builder Daily Digest, named multi-LLM orchestration, added Yelp response bot as in-progress proof point
- Updated `article-digest.md` Proof Points table — AI row expanded and renamed
- Updated `article-digest.md` "For AI / Tech Company Roles" positioning section
- Session ended with user opening Canva resume PDF to begin cv-template.html replacement project

See `SETUP-NOTES-ADDENDUM-SESSION-4.md` for full detail, including the positioning sanity check ("I don't want a 100% AI tech role — I just want my AI skills known").

---

### Session 5 — June 14, 2026 (home machine, Claude Code / VS Code)

**Context:** Continuation of Session 4 same evening. Focused entirely on cv-template.html replacement project.

**Completed:**
- Extracted visual system from `Nate-Oliver-PMM.pdf` — two-column layout, dark sidebar (#1c1c28), gold bars (#F5B81C), white main panel, timeline experience markers
- Rebuilt `templates/cv-template.html` as Canva-matched design — preserves all original `{{VARIABLE}}` injection slots; skills/competencies/education moved to sidebar; experience/projects/certifications in main panel
- Created `templates/cv-template-ats.html` — single-column ATS-safe variant using same gold + dark navy color palette
- Added two new injection variables: `{{TAGLINE}}` and `{{PHOTO_URL}}`, wired into `config/profile.yml` and `modes/pdf.md`
- Updated `generate-pdf.mjs` — added base64 image embedding so `<img>` paths render correctly regardless of where Playwright executes from
- Created `templates/images/` directory; `headshot.png` placed by user
- Successful test render: `output/cv-nate-oliver-test.pdf` — 2 pages, 1.8MB, photo rendered, layout confirmed working

See `SETUP-NOTES-ADDENDUM-SESSION-5.md` for full detail, including the CSS/layout mapping table.

**Carried forward at the time:**
1. Phone number still blank in `config/profile.yml`
2. Template selection feature (choosing between visual templates) — deferred, not built

---

### Session 6 — June 17, 2026 (home machine, Claude Code / VS Code)

**Context:** Picked up inside `career-ops/` without initially finding the Session 1–5 history — that history had been saved one level up at `d:\AI\Projects\job-hunt\` by mistake (likely a path slip during an earlier download/save). This session redid some Session 1–2 setup narratively (redundant but harmless) before the duplication was discovered and reconciled at the end of the session.

**Completed:**
- Built `dashboard-web.mjs` — generates `dashboard.html`, Interstellar-themed browser dashboard with stats, applications table, and in-page report modal (marked.js). Run: `node dashboard-web.mjs` then `start dashboard.html`
- Added `dashboard.html` to `.gitignore`
- Created `CHEAT-SHEET.md` — VS Code startup, terminal commands, Claude Code slash commands, core workflow, key files, and common error fixes
- Evaluated **Meshy PMM** role (4.6/5, Applied 2026-05-22) — report `001-meshy-2026-06-04.md`
- Logged retroactive rejection: **Quick Quack Car Wash ACD** (3.5/5, Applied 2025-09-01, Rejected) — report `002-quick-quack-2025-09-01.md`. Corrected mid-evaluation: the "agency background" gap was wrong — Vulcan Vents (7+ years, national retail brand) satisfies that requirement directly. Real blockers were comp ceiling and portfolio aesthetic mismatch.
- Scanned live portfolio at nateoliver.net — boutique, narrative-based, two case studies (Cloud Vapory + Vulcan Vents). Portfolio was NOT live during pre-system applications (e.g. Quick Quack).
- Updated `article-digest.md`: added 12K monthly web visitors metric (Vulcan Vents), documented Cloud Vapory two-number strategy ($100K year-one vs $500K+ total — both intentional, different audiences), added `## Portfolio — nateoliver.net` section
- Updated `config/profile.yml`: email corrected to `nate@nateoliver.net` (was mistakenly `noliver@newcalmetals.com` — application replies should never land in an employer's inbox)
- **Reconciliation:** Discovered the Session 1–5 history (`SETUP-NOTES.md` + 3 addendums) had been saved to `d:\AI\Projects\job-hunt\` instead of `career-ops/`. Verified the Session 4/5 file changes (`modes/_shared.md` archetype table, `templates/cv-template.html` Canva rebuild, `generate-pdf.mjs` image embedding, `config/profile.yml` tagline/photo_url) were genuinely present in the real repo — nothing was lost, only the documentation was misplaced. Diffed both copies of `article-digest.md` to confirm the parent copy was a stale pre-Session-4 snapshot with no unique content. Moved the 3 addendum files into `career-ops/`, merged the session logs into this single file, deleted the redundant parent-level copies.

**Known issue to fix on Webflow (not a career-ops file):**
- Portfolio site shows "10,000+ monthly web visitors" for Vulcan Vents — correct figure is 12,000+

**Not yet implemented — pick up here next session:**
- Phone number still blank in `config/profile.yml`
- Template selection feature (choosing between visual templates) — deferred
- First live evaluation through the now-complete pipeline (PDF render with photo/tagline has not yet been used for a real application)
- Commit the still-uncommitted Session 4/5 changes (`.gitignore`, `generate-pdf.mjs`, `modes/_shared.md`, `modes/pdf.md`, `templates/cv-template.html`) to git — confirmed present in the working tree but never committed

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
| `SETUP-NOTES.md` | ✅ Complete | This file — merged canonical history, Session 6 |
| `SETUP-NOTES-ADDENDUM-SESSION-2.md` | ✅ Complete | Plugin scan findings — moved here Session 6 |
| `SETUP-NOTES-ADDENDUM-SESSION-4.md` | ✅ Complete | Archetype table detail — moved here Session 6 |
| `SETUP-NOTES-ADDENDUM-SESSION-5.md` | ✅ Complete | Cv-template.html rebuild detail — moved here Session 6 |
| `config/profile.yml` | ✅ Complete | Roles, comp, geography, narrative, proof points, tagline, photo, correct email |
| Base resume library | ✅ Complete | `cv.md`, `cv-creative-lead.md`, `cv-pmm.md`, `cv-stretch.md` |
| `modes/_shared.md` archetype table | ✅ Complete | 7 archetypes, AI fluency overlay rule |
| `modes/_profile.md` | ✅ Complete | Adaptive framing, comp, location, routing summary |
| `templates/cv-template.html` | ✅ Complete | Canva two-column design |
| `templates/cv-template-ats.html` | ✅ Complete | Single-column ATS variant |
| `generate-pdf.mjs` | ✅ Complete | Base64 image embedding |
| `dashboard-web.mjs` | ✅ Complete | Browser dashboard generator (Session 6) |
| `CHEAT-SHEET.md` | ✅ Complete | VS Code / terminal / Claude Code quick reference (Session 6) |

**Outstanding:**
1. Phone number blank in `config/profile.yml`
2. Template selection feature (choose between visual templates) — deferred
3. First real application using the completed PDF pipeline
4. Commit Session 4/5's uncommitted file changes to git

---

*Last updated: Session 6, June 17, 2026*
