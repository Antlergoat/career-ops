# Career-Ops Cheat Sheet

## 1 — Opening the Project in VS Code

1. Open VS Code
2. **File → Open Folder**
3. Navigate to `d:\AI\Projects\job-hunt\career-ops` and click **Select Folder**
4. VS Code reopens with the project loaded — Claude Code chat is in the left sidebar

---

## 2 — Opening a Terminal

`Ctrl + `` ` `` ` (the backtick key, top-left of keyboard, under Esc)

Or: **Terminal → New Terminal** from the top menu.

The terminal always opens at the project folder automatically.

**Verify Node is working:**
```
node --version
```
Should print something like `v24.16.0`. If you get an error, close VS Code fully and reopen it.

---

## 3 — Terminal Commands

These are typed into the VS Code terminal (the black panel at the bottom).

| Command | What it does |
|---------|-------------|
| `node dashboard-web.mjs` | Regenerate the browser dashboard |
| `start dashboard.html` | Open the dashboard in your browser |
| `node update-system.mjs check` | Check if career-ops has an update |
| `node verify-pipeline.mjs` | Health check — make sure tracker is clean |

**Typical sequence after adding new jobs:**
```
node dashboard-web.mjs
start dashboard.html
```

---

## 4 — Career-Ops Commands

These are typed in the **Claude Code chat panel** (not the terminal).

| What you type | What happens |
|---------------|-------------|
| Paste a job URL | Auto-evaluates the role — full A–G report, score, interview prep |
| Paste job description text | Same as above (use when no URL is available) |
| `/career-ops` | Show the full command menu |
| `/career-ops scan` | Scan 39 company portals for new matching roles |
| `/career-ops tracker` | Summary of your application pipeline |
| `/career-ops pdf` | Generate a tailored CV PDF for the last evaluated role |
| `/career-ops followup` | Check which applications need a follow-up |
| `/career-ops patterns` | Analyze what's working and what isn't |

---

## 5 — The Core Workflow

```
1. Find a job posting
        ↓
2. Paste the URL into Claude Code chat
        ↓
3. Review the evaluation (A–F blocks + legitimacy score)
        ↓
4. Decide: apply or skip
        ↓
5. If applying: Claude generates a tailored PDF
        ↓
6. Refresh dashboard:  node dashboard-web.mjs → start dashboard.html
```

---

## 6 — Key Files

| File | What it is |
|------|-----------|
| `data/applications.md` | Your application tracker (don't edit directly to add rows) |
| `reports/` | Full evaluation reports for each job |
| `cv.md` | Your master resume |
| `cv-pmm.md` | PMM / GTM-framed resume variant |
| `cv-creative-lead.md` | Creative director-framed resume variant |
| `cv-stretch.md` | Prestige/hybrid resume variant |
| `config/profile.yml` | Your comp targets, location, contact info |
| `dashboard.html` | Browser dashboard (regenerate with `node dashboard-web.mjs`) |
| `SETUP-NOTES.md` | Project journal — read this to restore context in a new session |

---

## 7 — When Things Go Wrong

**"node is not recognized"**
→ Close VS Code completely and reopen it. Node is installed, VS Code just needs a fresh start.

**"cannot find module"**
→ Run `npm install` in the terminal once. Only needed after a system update.

**Dashboard looks outdated**
→ Run `node dashboard-web.mjs` then reload the browser tab.

**Tracker has duplicate entries**
→ Run `node dedup-tracker.mjs`

**Something looks broken**
→ Run `node verify-pipeline.mjs` — it tells you exactly what's wrong.
