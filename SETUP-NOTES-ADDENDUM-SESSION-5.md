# SETUP-NOTES-ADDENDUM-SESSION-5.md
# Session 5 — June 14, 2026 (home machine, Claude Code / VS Code)

Continuation of Session 4 same evening. Full focus on the cv-template.html replacement project.

---

## What We Did

### 1. PDF Visual Extraction
Read `career-ops/resumes/Nate-Oliver-PMM.pdf` directly via Claude Code's PDF vision.
Extracted the full Canva visual system:
- **Layout:** Two-column — dark sidebar (~33%) + white main panel (~67%)
- **Color palette:** Gold `#F5B81C` (accent bars), dark navy `#1c1c28` (sidebar bg), white `#ffffff` (main)
- **Sidebar contents:** Headshot photo, name + tagline, contact list with icon labels, skills/competencies as bullet lists, education
- **Main panel:** Summary, Experience with vertical timeline (line + circle markers), Projects, Certifications
- **Typography:** Space Grotesk (headings, uppercase) + DM Sans (body) — same fonts already in the existing template, no new font files needed
- **Page 2:** Gold continuation bar at top — Playwright/CSS handles pagination naturally; no special treatment needed for initial mechanics

### 2. cv-template.html — Full Rebuild
Replaced the upstream single-column teal/purple design with the Canva two-column design.

**All original `{{VARIABLE}}` injection slots preserved.** Two new variables added:
- `{{TAGLINE}}` — subtitle line below name ("Brand Builder | Creative Marketing Strategist | AI Solutionist")
- `{{PHOTO_URL}}` — headshot image reference (`./images/headshot.png`)

**Layout mapping from original → new:**
| Original location | New location |
|---|---|
| Header (name, contact row) | Sidebar (name block + contact list) |
| Core Competencies | Sidebar |
| Skills | Sidebar |
| Education | Sidebar |
| Professional Summary | Main panel |
| Work Experience | Main panel (with timeline) |
| Projects | Main panel |
| Certifications | Main panel |

**CSS decisions:**
- `.competency-tag` restyled from pill tags to sidebar bullet list (dark bg context)
- `.job::before` uses gold-bordered circle on dark fill for timeline markers
- `break-inside: avoid` preserved on all block elements
- `print-color-adjust: exact` retained for dark sidebar rendering

### 3. cv-template-ats.html — New File
Single-column layout using same Space Grotesk + DM Sans fonts and gold `#F5B81C` accent color.
Standard header (name + tagline + horizontal gold rule + contact row). All sections single-column, no sidebar, no photo. Safe for ATS parsers.

### 4. generate-pdf.mjs — Image Embedding
Added base64 image embedding after the existing font path resolution block.

**Why base64 instead of absolute path:**
generate-pdf.mjs writes filled HTML to `/tmp/` before Playwright renders it. Relative image paths break in that context. Absolute `file://` paths work but are machine-specific. Base64 embeds the image data directly in the HTML — self-contained, no path resolution, works anywhere.

**Implementation:** Scans HTML for `<img src="...">` where src doesn't start with `data:`, `http://`, `https://`, or `file://`. Resolves the path relative to `career-ops/templates/`, reads the file, encodes as base64 data URI, and swaps the src in-place before Playwright receives the HTML.

Pattern mirrors the existing font path resolution — same approach, different element type.

### 5. profile.yml — New Fields
Added under `candidate:`:
```yaml
tagline: "Brand Builder | Creative Marketing Strategist | AI Solutionist"
photo_url: "./images/headshot.png"  # relative to templates/; embedded as base64 by generate-pdf.mjs
```

Tagline sourced from Nate's LinkedIn profile headline.

### 6. modes/pdf.md — Placeholder Table Updated
Added `{{TAGLINE}}` and `{{PHOTO_URL}}` rows to the injection variable table so Claude knows to fill them from profile.yml during `/career-ops pdf` execution.

### 7. templates/images/headshot.png
Directory created by user. `headshot.png` placed by user. Confirmed present at `career-ops/templates/images/headshot.png`.

### 8. Test Render
Built `output/cv-nate-oliver-test.html` as a manually filled test file and ran it through `generate-pdf.mjs`.

```
node generate-pdf.mjs output/cv-nate-oliver-test.html output/cv-nate-oliver-test.pdf --format=letter
```

Result: `output/cv-nate-oliver-test.pdf` — 2 pages, 1.8MB, layout confirmed, photo rendered correctly.

---

## Decisions Made

- **Photo slot:** Use `{{PHOTO_URL}}` variable + base64 embedding in generate-pdf.mjs. User initially suggested relative path approach; we switched to base64 for cleaner implementation.
- **Template selection feature:** User wants to explore choosing between visual templates in future. Deferred — get initial mechanics working first.
- **Font files:** Kept existing Space Grotesk + DM Sans local woff2 files. No new fonts needed — they match the Canva design closely enough.
- **ATS template:** Same color system as visual template, not plain black-and-white. Gold accent on section underlines gives visual consistency while remaining single-column.

---

## Files Modified This Session

| File | Change |
|---|---|
| `templates/cv-template.html` | Full rebuild — two-column Canva design |
| `templates/cv-template-ats.html` | New file — single-column ATS variant |
| `generate-pdf.mjs` | Added base64 image embedding block |
| `config/profile.yml` | Added `tagline` and `photo_url` fields |
| `modes/pdf.md` | Added `{{TAGLINE}}` and `{{PHOTO_URL}}` to placeholder table |
| `output/cv-nate-oliver-test.html` | Test file — manually filled template |
| `output/cv-nate-oliver-test.pdf` | Test render output — confirmed working |

---

## Pending for Next Session

1. **Phone number** — `config/profile.yml` `candidate.phone` is blank. Fill in when ready to apply.
2. **Template selection** — Future feature: user wants ability to choose between visual templates. Architecture TBD.
3. **First real job evaluation** — System is now fully configured. Ready to paste a JD URL and run the full pipeline.

---

*Created: June 14, 2026 | Session 5*
