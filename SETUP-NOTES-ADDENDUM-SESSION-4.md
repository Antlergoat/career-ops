## Session 4 Addendum — June 14, 2026 (home machine, Claude Code / VS Code)

### Session Context

Second home machine session. First session using Claude Code in VS Code (previous home session
used claude.ai). Placed downloaded handoff docs (SETUP-NOTES.md, addendum) into project
directory at session start. Picked up from Session 3 addendum recommendation: implement the
archetype table for `_shared.md`.

---

### Repo State Audit Findings

Confirmed the following were already complete (done between sessions, not documented):
- `config/profile.yml` — fully populated with roles, comp, geography, narrative, proof points
- `cv-creative-lead.md`, `cv-pmm.md`, `cv-stretch.md` — all three base resume variants in place
- `resumes/` — 3 PDFs placed (designer, PMM, PMM-3D)
- `modes/_profile.md` — exists with full adaptive framing table, comp targets, location policy,
  negotiation scripts, resume routing summary, and auto-add to portals rule
- `article-digest.md` — § Resume Routing section confirmed present (line 315)

One outstanding item identified during audit: `cv_base_library` block in `config/profile.yml`
is commented out. The routing logic exists in `article-digest.md` but the profile.yml activation
is not wired up yet.

---

### _shared.md — Archetype Table Implementation

Replaced the upstream AI/tech archetype detection table (6 rows: AI Platform/LLMOps, Agentic,
Technical AI PM, Solutions Architect, Forward Deployed, AI Transformation) with Nate's
marketing-specific archetype table.

**New table format:** 3-column (Archetype | Thematic axes / key JD signals | What they buy)

**7 archetypes implemented:**
1. Creative Marketing Lead / Manager
2. Brand Marketing Manager
3. Product Marketing Manager (PMM)
4. Senior Manager / Assistant Director
5. Marketing Manager (general)
6. AI-Forward Creative / Marketing ← new dedicated row
7. Stretch / Prestige (NVIDIA Rule)

**AI-Forward row:** Dual trigger — fires on JD signal keywords (generative AI, AI workflows,
Midjourney, etc.) OR on company type (Runway, Midjourney, ElevenLabs, Higgsfield, Anthropic,
OpenAI, Adobe Firefly, Figma AI, etc.).

**AI fluency overlay rule added** — explicit instruction not to replace primary marketing
archetype framing with AI framing. Nate is a marketer first; AI pipeline depth is the
differentiator that distinguishes him from other marketers at that level. This distinction
was caught in review and corrected before finalizing (original draft said "shift lead framing"
— corrected to "layer AI fluency as differentiator").

---

### article-digest.md — AI Skills Update

Added the following skills and proof points based on recent work:

**New skills added (Technical / AI section restructured):**
- **Agentic Marketing Pipeline** — 5-stage multi-LLM system: Research → Curation →
  Draft & Fact-Check → Final Writing → Image/Video + Salesforce rendering/display.
  Orchestrated across Claude, ChatGPT, and Copilot using context folder + markdown scaffolding.
  Applied to website content strategies, launch campaigns, and domain-specific campaign builds.
- **Power Automate + AI Builder / Copilot** — built inbox + calendar scraping flow with
  defined ruleset; AI Builder/Copilot node processes output; delivers personalized Daily
  Digest email prioritizing daily work. Separate SharePoint workflow automation also in place.
- **Multi-LLM orchestration** — Claude, ChatGPT, Copilot deployed in coordinated workflows
  across pipeline stages (not tool-switching — pipeline design across providers).
- **Yelp Response Bot (in development)** — autonomous response framework: Yelp + Zapier +
  Google Sheets + Claude + ICM. First autonomous agent deployment, built for HVAC small
  business client.

**Proof Points table updated:** AI fluency row renamed "Agentic marketing / AI fluency"
with all four proof points.

**"For AI / Tech Company Roles" positioning section rewritten** — now leads with specific
pipeline proof, names the multi-LLM orchestration distinction explicitly ("not tool-switching
— pipeline design across providers"), and includes the framing: "Most marketers who claim AI
fluency mean they prompt ChatGPT. This is multi-LLM orchestration with a defined methodology,
applied to real campaign outputs."

---

### Positioning Sanity Check (Important)

User raised the concern: "I don't want a 100% AI tech role — I just want my AI skills known."
This was the right call. The overlay rule as initially drafted was too aggressive. Corrected.

**The intended positioning:**
Nate is evaluated as a Creative Marketing Lead (or PMM, or Brand Manager) who happens to
have AI pipeline skills that most marketers in his peer group do not have. AI fluency is
a differentiator within his marketing identity — not a replacement for it.

**Skills claimed are real, not aspirational:**
- All pipelines described are built and in active use
- Yelp bot is correctly flagged as in-development
- "Agentic marketing" is Nate's own term for a real pipeline, not an industry buzzword claim

---

### Still Outstanding

1. **`cv-template.html` replacement** — Canva resume → HTML template project.
   Requires: Canva resume exported as PDF. Opening prompt is in SETUP-NOTES.md.

2. **Phone number** — blank in `config/profile.yml`. Fill when ready to apply.

**Note:** `cv_base_library` block in `config/profile.yml` is commented out — confirmed nothing
reads it (no references in any .mjs scripts or mode files). Routing is live through markdown
instructions in `article-digest.md` § Resume Routing and `_shared.md`. Not a work item.

---

*Created: June 14, 2026 | Home machine, Claude Code / VS Code session handoff*
