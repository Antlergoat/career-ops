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

### Session 8 — June 21–22, 2026 (home machine, Claude Code / VS Code)

**Context:** Direct continuation of Session 7. Goal for the night: get Playwright verification working and land the first real application through the pipeline.

**Completed:**
- Installed the Playwright MCP server: added `.mcp.json` at the project root (`playwright` server via `npx -y @playwright/mcp@latest`). Chromium browser binary was already present locally — no download needed. Required a Claude Code session restart to load; confirmed working after restart (`browser_navigate` / `browser_snapshot` tools available).
- Re-ran `node scan.mjs` post-restart — 0 new offers (all 23 already queued were de-duped), same 8 stale ATS endpoints as Session 6 (not urgent).
- Screened three roles from the 23-offer queue before settling on one:
  - **Notion — Lifecycle Marketing Manager**: rejected without a formal report. Pure growth/MarTech ops role (reverse ETL, webhooks, A/B testing) reporting into Product, not Brand — a different discipline from Nate's background. Also hybrid onsite SF/NYC (Anchor Days Mon/Tue/Thu), not Sacramento-commutable. Comp was strong ($150K–$210K, published) but didn't offset the mismatch.
  - **Intercom (now branded "Fin") — Principal Product Marketing Manager**: rejected without a formal report. Explicit "7+ years in product marketing, solutions marketing, or competitive intelligence at a B2B SaaS company" requirement at a Principal/senior-IC bar — zero brand/design signal in the JD at all. Comp very strong ($200K–$240K base SF), but functional gap too wide.
  - **Anthropic — Art Director, Enterprise**: not evaluated. Nate explicitly declined to pursue Anthropic/Perplexity-tier roles tonight due to applicant volume concerns.
  - Neither Notion nor Intercom URLs were marked processed in `data/pipeline.md` — they remain in Pending since no formal report exists. The rejection reasoning above lives only in this entry; worth a quick re-read before re-evaluating either from scratch.
- **Evaluated ElevenLabs — Brand Marketing** — report `reports/003-elevenlabs-2026-06-21.md`, **Score: 3.9/5** (just under the 4.0 "good match" bar). Archetype: Brand Marketing Manager (primary) + AI-Forward overlay. Verified live via Playwright (Apply button active, Remote-global, Department: Growth).
  - Real gap identified: JD wants "5+ years in brand partnerships, activation marketing, or sponsorships at high-growth technology or SaaS companies" — Nate's closest analog is channel-partner enablement / trade-show work at Vulcan Vents, not a direct match. Also no formal budget-ownership metrics in `cv.md` to point to.
  - Comp estimate: ~$140K–$190K (no published range; estimated from market comps), at or above Nate's $130K–$180K target.
- Generated the CV PDF for the application: chose the **ATS-safe single-column template** (`cv-template-ats.html`) over the Canva two-column visual design, specifically because this was the first real application through the pipeline and minimizing ATS-parsing risk mattered more than visual branding. Output: `output/cv-nate-oliver-elevenlabs-2026-06-21.pdf` (2 pages). Base resume: `cv-creative-lead.md` per the Resume Routing table, tailored toward partnership/activation language.
- Drafted application form answers (Block H in the report) for the two free-text questions on ElevenLabs' actual Ashby application form. Went through several revisions — see Decisions below.
- Updated tracker (`data/applications.md`, entry #3) and `data/pipeline.md` (moved ElevenLabs from Pending to a new Processed section) via the normal TSV → `merge-tracker.mjs` flow.
- **Nate applied (2026-06-22).** Tracker status updated from `Evaluated` to `Applied` — first real application through the completed pipeline.
- Installed a new global skill, `anti-ai-writing-style` (`~/.claude/skills/anti-ai-writing-style/SKILL.md`), sourced from `github.com/Antlergoat/NCM-LLM-Wiki` at commit `b363cc3`. Baked an instruction into `modes/_profile.md` (new `## Writing Style — Anti-AI Tells` section) so it auto-applies to all candidate-facing prose (cover letters, form answers, LinkedIn outreach) going forward without needing manual invocation — placed in `_profile.md` rather than `_shared.md` specifically because `_shared.md` is system-layer and would get wiped on the next `update-system.mjs apply`.
- Researched LinkedIn outreach targets for the ElevenLabs application (`/career-ops contacto`): Luke Harries (Head of Growth — hiring manager, primary target, hook is his public "no PMs" growth philosophy), Gayathri Padmanabhan (Partnerships — peer, alternate), Becky Lee-Roche (Talent — recruiter, lower confidence, most "Talent @ ElevenLabs" people found were tagged Engineering-specific). Drafted all three messages; **not yet sent** — Nate's call.
- Regenerated `dashboard.html` mid-session: 3 applications, 22 pending, avg score 4.0.
- **Technical-credibility thread in the resume library** (prompted by Nate's discouragement at repeated "B2B SaaS experience" JD requirements not reflecting his real-but-old technical background): drafted a 4th resume variant, `cv-technical.md`, leading with the Xerox/ASC and Sutter Health builder history (SQL, JavaScript, DHTML, ColdFusion, Java). **Then deliberately abandoned it** after Nate's own review instinct caught the real problem — naming 2000s-era stack by name reads as technically *dated*, not current, which undersells ten real years of marketing leadership without actually fixing the SaaS-recency gap. Deleted `cv-technical.md`. Replaced with the better fix: added a `## Projects` section to all 4 base resumes (`cv.md`, `cv-creative-lead.md`, `cv-pmm.md`, `cv-stretch.md`) surfacing the Agentic Marketing Pipeline (ICM Methodology) and the Yelp Response Bot (in development) as concrete, *current* technical deliverables tied to real marketing outcomes — injecting AI-pipeline technical depth into the existing marketing narrative rather than building a separate engineering identity. The Xerox/Sutter Health jobs stay in Experience as-is, unembellished.
- Added a standing **Risk Tolerance** note to `modes/_profile.md`: keep surfacing B2B SaaS-tagged roles in scans/pipeline regardless of score — Nate has explicitly opted into applying to some sub-4.0 SaaS-adjacent roles as deliberate career-expansion risks, overriding the normal "discourage below-4.0" default.
- Added a third Projects entry ("Skill-Mapping Visualization Tool") to all 4 base resumes, sourced from a separate, unrelated repo Nate pointed to mid-session: `D:\AI\Projects\ai-fow\Ai Fog of War` — a design-phase personal project (5 architecture/spec docs + 3 working interactive HTML prototypes, main scanner/worldbuilder app not yet built). Per Nate's explicit instruction, the entry describes the underlying technical architecture and skills (data modeling, a scan-and-classify pipeline, PixiJS + React visualization engineering, procedural ID-seeded icon generation) **without naming the project or revealing its premise** (a game-styled "fog of war" skill-constellation map). Framed honestly as in-development, not a finished product. Note: `article-digest.md` was NOT updated to mirror this — the project lives only in the 4 resume files' Projects sections for now, intentionally kept low-key per the anonymization request.
- Added a 4th Projects entry ("Knowledge Infrastructure for AI Workflows") to all 4 base resumes, sourced from `D:\AI\Projects\NCM-LLM-Wiki` — Nate's real, currently-active knowledge-management system for New Cal Metals (structured markdown wiki, information-classification taxonomy, decision logs, session-continuity tooling; 20 wiki pages, last session 2026-06-19). This is the actual knowledge backbone behind the already-listed Agentic Marketing Pipeline. Unlike the Skill-Mapping tool, this one names the employer (New Cal Metals — already disclosed elsewhere in the resume) but, per the same instruction, does not name the specific tool/system or its internal classification details. Placed second in the Projects list, directly after the Agentic Marketing Pipeline entry.
- Generated a sample PDF to verify the new 4-entry Projects section renders correctly: `output/cv-nate-oliver-sample-creative-lead-2026-06-22.pdf` (from `cv-creative-lead.md`, ATS-safe template, no JD tailoring — generic Core Competencies). 2 pages, confirmed working.

**Decisions:**
- **Process incident — version drift on live form answers:** Block H went through three revisions in one sitting (anti-AI-writing-style pass → mission-accuracy research correction after Nate flagged it → a trim-down pass cutting regurgitated company history). Nate had the live Ashby form open in parallel and pasted an earlier draft (the anti-AI-writing-style version, before the mission-accuracy fix) before the later corrections landed, then submitted with his own small edits. The mission-accuracy fix never made it into the real application. Root cause: revisions were applied via file edit with a prose summary in chat, never re-printed as full copy-paste-ready text after each round, and no check-in on whether a draft had already been pasted. Saved as a feedback memory (`feedback_live_application_editing.md` in the cross-session memory store) so future live-form-editing sessions print the full final text in chat every round and check before revising again. Net impact on this application: minor — the submitted answer describes ElevenLabs' technology quality rather than their actual stated mission (accessibility — "any language, any voice," the Impact Program), which is a real but not disqualifying miss. Noted in the report for interview-prep awareness.
- Confirmed ElevenLabs' actual mission (via Help Center + About page, verified live): "to make content accessible in any language and in any voice" (2022 founding/dubbing-quality origin), with a current broader vision "to make communication and creation with technology seamless" and a concrete Impact Program (free licenses for accessibility needs and nonprofits). Worth remembering for any future ElevenLabs interview prep — see the note in report 003's Block H.
- Quick reads on Notion/Intercom (above) were deliberately not written up as formal reports — the goal was speed (one real application tonight), not exhaustive documentation of every reject. If either role becomes relevant again, re-verify rather than trusting old context to still hold.

**Carried forward:**
- LinkedIn outreach drafted for ElevenLabs but not sent (3 messages: Luke Harries primary, Gayathri Padmanabhan + Becky Lee-Roche alternates) — Nate's to send.
- 22 offers remain in `data/pipeline.md` Pending (23 minus ElevenLabs, now Processed). Notion Lifecycle Marketing Manager and Intercom Principal PMM are still technically Pending despite being informally screened out tonight (see Decisions) — no report exists for either.
- Anthropic Art Director, Enterprise and the other 5 Anthropic roles, all 4 Perplexity roles, 2 remaining ElevenLabs roles, 3 Notion roles, 2 Intercom roles, and all 3 Asana roles are completely untouched.
- ~~`.mcp.json` untracked, `.playwright-mcp/` not gitignored~~ — **done**, same session. Both committed in `e662919` along with SETUP-NOTES.md and the 3 resume variants (`cv-creative-lead.md`, `cv-pmm.md`, `cv-stretch.md`); `.playwright-mcp/` added to `.gitignore` rather than committed. Working tree clean, nothing pushed to GitHub.
- Template selection feature — still deferred (Session 8 showed a real-world need to choose ATS-safe vs. visual per application; the decision logic so far is manual/conversational, not automated).
- 8 stale ATS endpoints in `portals.yml` — still not urgent, unchanged since Session 6.
- Portfolio site traffic figure (10K shown, should be 12K) — still unfixed, Webflow not career-ops.

---

### Session 9 — June 26, 2026 (home machine, Claude Code / VS Code)

**Context:** New session, re-bootstrapped from this file. Found and fixed two stale claims left over from Session 8's final edit (`.mcp.json`/`.playwright-mcp/` had actually been resolved and committed in `e662919`, but the notes still said otherwise) — corrected in the Session 8 entry above. No other drift found.

**Completed:**
- Nate reported on the ElevenLabs LinkedIn outreach from Session 8: sent 2026-06-21 to Luke Harries (personalized in his own voice, not pasted verbatim — good outcome from the Session 8 version-drift lesson), no response as of 2026-06-26. Created `data/follow-ups.md` (referenced in `CLAUDE.md` but never actually created until now) and logged the entry.
- Ran `node followup-cadence.mjs` and discovered Meshy (Product Marketing Manager, 4.6/5 — Nate's highest-scored application) had been sitting at "Applied" for 36 days with zero follow-ups ever sent — flagged as more urgent than ElevenLabs' 6-day silence.
- Researched a Meshy contact (`/career-ops contacto`-style): **Hannah Zhou, Head of Product @ Meshy** — selected over VP of Growth and HR/People alternates because she'd publicly posted "we're hiring" content about 3D GenAI roles, giving a real hook instead of a guess.
- Nate sent the drafted follow-up to Hannah Zhou (2026-06-26), with his own added P.S. Logged in `data/follow-ups.md` (#2) and `data/applications.md`.
- **New proof point surfaced from the P.S.:** Nate is building an experimental, untested character-development pipeline (personal/side-team project) that uses Meshy's actual product (2D-to-3D AI conversion) for toy-prototyping of characters — tested successfully on one concept, not yet in production. This is a first-hand usage story of the exact product Meshy makes, which is rare and valuable. Added as an addendum to `reports/001-meshy-2026-06-04.md` for any future Meshy correspondence/interview prep.
- Added a 5th Projects entry ("Character Pipeline R&D") to all 4 base resumes, anonymized the same way as the Skill-Mapping tool — doesn't name "Meshy," the pipeline's actual name, or the side-team/character-IP specifics; describes only the generic technical shape (2D-to-3D AI generation stage feeding physical toy prototyping), framed honestly as experimental/pre-production.
- **Scanner audit, prompted by Nate's suspicion that the scanner was only surfacing "the most flooded AI tech companies in the world."** He was right. Root cause: `node scan.mjs` is zero-token (local parsers + Greenhouse/Ashby/Lever/Workable APIs only) and was silently skipping every `tracked_companies` entry tagged `scan_method: websearch` — `modes/scan.md` documents a full 4-level workflow (Level 0 zero-token → Level 1 Playwright-direct → Level 2 API → Level 3 WebSearch broad discovery), but Sessions 6 and 8 only ever ran Level 0 and called it a full scan. Confirmed via a scripted provider-resolution check: of 40 tracked companies, only 19 actually resolved to a working provider; the rest fell through silently.
- Ran the full Level 0–3 workflow for the first time via a background subagent (`general-purpose`, ~33 min, 239 tool calls) — see Decisions below for what it found vs. what it actually got the agent's report wrong about.
- **Closed two real implementation gaps in `providers/`** (not just a one-time manual pass — these fix future scans permanently):
  - `providers/workday.mjs` — Workday is documented in `modes/scan.md`'s Level 2 ATS table but no provider file existed for it. Wrote one (POST to the CXS `/wday/cxs/{company}/{site}/jobs` endpoint, paginated). Converts **NVIDIA** and **Autodesk** from permanently-skipped to zero-token. Verified against both live endpoints (40 jobs each).
  - `providers/ashby.mjs` — added an explicit `api:` override (mirroring the pattern `providers/greenhouse.mjs` already had), needed because `modes/scan.md`'s "always prefer the corporate careers_url over the raw ATS URL" rule means Ashby's own `jobs.ashbyhq.com/<slug>` auto-detect regex never fires once careers_url is the corporate page. Caught and fixed a regression in my own first pass — the override threw on every *other* provider's `api:` field (e.g. every existing Greenhouse `api:` entry) instead of silently declining; fixed to decline cleanly.
- Added `LinkedIn — Creative & Brand Marketing` / `LinkedIn — Product Marketing / GTM` / `LinkedIn — AI/3D Creative Tools` to `search_queries` in `portals.yml`, using `site:linkedin.com/jobs/view/` (not bare `/jobs`, which mostly returns LinkedIn's own aggregate landing pages, not real postings). Tested manually before adding: surfaced **thatgamecompany** (Journey, Sky, flOw — exceptional 3D/games fit) and **Mercury** (fintech PMM roles), both genuinely new and not previously tracked. Also surfaced a stale hit (Bifrost AI) that 404'd on the company's own real Ashby board — good live proof that every LinkedIn hit still needs independent verification, same as any other Level 3 result. Note: LinkedIn blocks anonymous Playwright navigation with an authwall, so I cannot verify LinkedIn job pages directly — verification has to go through the company's own career page/ATS instead.
- Added **thatgamecompany** and **Mercury** to `tracked_companies` (both zero-token: thatgamecompany via the Ashby `api:` override, Mercury via plain Greenhouse).
- **Recovered roles the background agent found but never committed** — the agent fixed several stale `careers_url` entries (Runway → Ashby, Luma AI → Gem, Cleo → revolutpeople.com) and confirmed real open roles during that process, but had no zero-token provider to extract/filter/dedup/append them through, so they were mentioned in its prose report but never reached `data/pipeline.md`. Manually verified and added: **Runway** (Creative Director, Senior/Staff PMM, Art Director, Communications Manager — recovered automatically once the `ashby.mjs` `api:` fix landed), **Luma AI** (Product Marketing Manager, SF Bay Area), **Cleo** (Creative Director, US remote).
- Fixed a casing bug in my own manual addition — typed `/Thatgamecompany/` (capital T) into `pipeline.md`/`scan-history.tsv` while the real Ashby URL is lowercase `/thatgamecompany/`, which would have defeated dedup on the next real scan and double-added the same role. Caught via a dry-run before any real write.
- Net result: zero-token coverage went 19 → 21 tracked companies; **pipeline grew from 22 → 45 pending offers**. Regenerated `dashboard.html` to reflect the new total (3 applications, 45 pending, avg score 4.0).

**Decisions:**
- Anonymization rule from Session 8 (don't name specific tools/projects in resume Project entries, describe the architecture/skill generically) was applied consistently to this new entry, including not naming Meshy itself — reasoning: this resume entry goes out to every company, not just Meshy, so naming a specific third-party AI tool by brand reads oddly out of context elsewhere, beyond the usual confidentiality reasons.
- The Meshy-specific version of this story (with the tool named, used directly with Meshy) lives in the report addendum, not the resume — the right level of specificity differs by audience.
- **Trust-but-verify on subagent reports, concretely:** the background scan agent's final prose summary claimed "5 new Pendientes" written to the pipeline; the actual file had 14 new entries from that run alone (confirmed by reading the file directly, not trusting the summary). Long-running multi-step agents (this one: 239 tool calls) can produce sloppy final summaries even when the underlying file work was correct — always verify ground truth in the actual files before reporting numbers to Nate.
- **Did not build custom scrapers for the ~19 companies with genuinely no public ATS API** (Adobe, Apple, Google, Disney, Rockstar, EA, Midjourney, Canva, Epic Games, Blizzard, Riot, DreamWorks, ILM, HubSpot, Meshy, Pika Labs, Miro, OpenAI, and Unity — see below). These will keep needing a manual or agent-driven Level 1 Playwright pass each time; there's no zero-token shortcut without per-company custom parsers, which is a much larger and more fragile undertaking than today's scope.
- **Unity Technologies is UNRESOLVED, not misconfigured:** the Greenhouse API (`unity3d`) returns valid jobs, but every job detail page on `unity.com/careers/positions/{id}` 404s — Unity's own careers site is mid-migration. Re-check in a future session rather than treating this as a config bug.
- **Known, unfixed filter loophole — flagged, not corrected without asking:** `location_filter`'s `always_allow` does a substring match on "Remote", so non-US "Remote" roles (e.g. thatgamecompany's Indonesia listing) slip through alongside legitimate US-remote roles. Left as-is since tightening it is a judgment call that affects every future scan, not just today's.
- **A long list of new, not-yet-tracked companies surfaced by the Level 3 broad-discovery pass was deliberately NOT added to `portals.yml`** — that's a "bigger net" conversation Nate raised mid-session and deserves a deliberate review, not an automatic bulk-add. Full list preserved in the subagent's report (not copied into this file to avoid duplicating a large, not-yet-actioned list — re-run a Level 3 scan or check the agent transcript if picking this up again): Nourish, Maven Clinic, Movement Strategy, Remote (remote.com), Lumimeds, MrBeast, Fresh Prints, Weedmaps, Aerospike, CodePath, Grafana Labs, Toast, Temporal Technologies, Circle.so, B12, Airtable, Constant Contact, Boulevard, PerfectServe, Seamless.ai, Maximus Health, Vidmob, Away, Tonal, Pair Eyewear, Close, TheyDo, Mento, Writer, Tiger Data, Turquoise Health, Lumos, Creative Force, Prime Therapeutics, Jerry, CrazyGames, Creative Chaos, Honeycomb, Pocket, Muzz, Superside, Encord, Bree. Note: "Jobgether" listings are a recruiting-agency aggregator, not a direct employer — treat with caution if it resurfaces.

**Carried forward:**
- Watching for replies from Hannah Zhou (Meshy) and Luke Harries (ElevenLabs).
- ElevenLabs' next scheduled follow-up touch (per cadence rules) lands 2026-06-28 (7-day mark) — separate channel from the LinkedIn DM already sent.
- Meshy follow-up cadence resets from 2026-06-26; second follow-up (if no response) would land ~2026-07-03 per the 7-day subsequent rule.
- **45 offers now pending in `data/pipeline.md`**, spanning Anthropic, Perplexity, ElevenLabs, Notion, Intercom, Asana, Figma, Unity, Webflow, Blizzard, Higgsfield AI, thatgamecompany, Mercury, Runway, Luma AI, Cleo. None of today's new finds have been evaluated yet — Notion Lifecycle Marketing Manager and Intercom Principal PMM are still technically Pending despite being informally screened out in Session 8 (see that session's Decisions) — no report exists for either.
- **The "bigger net" company list above** (42 names) — review and decide which to add to `portals.yml` in a future session.
- **Nothing from today's scan/provider work has been committed.** Uncommitted as of this writing: `SETUP-NOTES.md`, `cv-creative-lead.md`, `cv-pmm.md`, `cv-stretch.md`, `providers/ashby.mjs` (modified); `providers/workday.mjs`, `data/follow-ups.md` (new/untracked). `portals.yml`, `data/pipeline.md`, `data/scan-history.tsv`, `data/applications.md`, `cv.md`, `reports/001-meshy-2026-06-04.md` are all gitignored, as expected — only the provider code and resume/notes files need an explicit commit decision next session.
- Known, unfixed: `location_filter` always-allow substring loophole (international "Remote" roles can slip through); ~19 companies with no public ATS still need manual/agent-driven Playwright passes per scan (Adobe, Apple, Google, Disney, Rockstar, EA, Midjourney, Canva, Epic Games, Blizzard, Riot, DreamWorks, ILM, HubSpot, Meshy, Pika Labs, Miro, OpenAI); Unity Technologies UNRESOLVED (their own site 404s on job detail pages, not our config).
- All other carried-forward items from Session 8 (template selection feature, portfolio traffic figure) are unchanged.

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
| `data/pipeline.md` | ✅ Complete | Pending-URLs inbox; 45 offers pending, 1 processed (ElevenLabs) — see Session 9 |
| `.mcp.json` | ✅ Complete | Playwright MCP server config, project-scoped; committed in `e662919` |
| `reports/003-elevenlabs-2026-06-21.md` | ✅ Complete | First real evaluation+application; 3.9/5; Block H has live form answers + sourcing notes |
| `anti-ai-writing-style` skill | ✅ Installed (Session 8) | Global, `~/.claude/skills/`; auto-applies to candidate-facing prose via `modes/_profile.md` pointer |
| `data/follow-ups.md` | ✅ Complete (Session 9) | Follow-up history tracker; created for the first time, 2 entries (ElevenLabs, Meshy) |
| `providers/workday.mjs` | ✅ Added (Session 9) | Closes a documented-but-missing provider gap; zero-token-enables NVIDIA + Autodesk; uncommitted |
| `providers/ashby.mjs` | ✅ Updated (Session 9) | Added `api:` override (mirrors greenhouse.mjs); zero-token-enables Runway, thatgamecompany; uncommitted |
| `portals.yml` search_queries | ✅ Updated (Session 9) | 3 new LinkedIn `/jobs/view/` discovery queries; gitignored, not committable |

**Outstanding:**
1. Template selection feature (choose between visual templates) — deferred; Session 8 manually chose ATS-safe per-application, not automated
2. ~~First real application using the completed PDF pipeline~~ — **done.** ElevenLabs Brand Marketing, applied 2026-06-22
3. 45 queued offers in `data/pipeline.md` awaiting evaluation (Notion Lifecycle Marketing Manager and Intercom Principal PMM were informally screened out in Session 8 but not marked processed — see Session 8 notes before re-evaluating)
4. LinkedIn outreach drafted for ElevenLabs (3 messages); first message sent to Luke Harries 2026-06-21, no response yet; Meshy follow-up sent to Hannah Zhou 2026-06-26 — see Session 9
5. Portfolio site traffic figure (10K shown, should be 12K) — Webflow, not a career-ops file
6. **New (Session 9):** 42 untracked companies surfaced by Level 3 broad discovery, not yet reviewed for addition to `portals.yml` — full list in Session 9's Decisions
7. **New (Session 9):** `providers/workday.mjs` (new) and `providers/ashby.mjs` (modified) are uncommitted — decide on a commit next session
8. **New (Session 9):** Unity Technologies scan is UNRESOLVED (their own careers site 404s on job detail pages); `location_filter` always-allow substring loophole noted but not fixed

---

*Last updated: Session 9, June 27, 2026*
