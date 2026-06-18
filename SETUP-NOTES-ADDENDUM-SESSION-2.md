## Session 2 Addendum — June 2026 (work machine, claude.ai)

### Plugin Scan Findings

Scanned `andrew-shwetzer/career-ops-plugin` for reusable marketing archetype content.
The repo lists Creative/Marketing as one of 15 industry archetypes but the actual skill
files are not publicly crawlable. Based on available documentation, the marketing archetype
appears to be a relabeled generic evaluation block rather than domain-specific content.
**Not worth borrowing wholesale — structural reference only.**

### More Interesting Find: `coreyhaines31/marketingskills`

A separate repo — Marketing skills for Claude Code and AI agents — surfaced during the
plugin scan. More substantive than the plugin for marketing domain vocabulary. Contains:

- `ops-stack-mapping.md` — marketing skills + MCPs mapped to AARRR stages
- `client-types.md` — archetype variations by business model (B2B SaaS, D2C, hardware,
  marketplace, dev tools, deep-tech)
- `measurement-framework.md` — north-star patterns, KPI patterns by quarter, kill criteria

Installed at work in the ICM/Claude Code environment for active marketing projects.
Useful as vocabulary reference when drafting marketing archetypes for career-ops.
**Do not install in career-ops repo — reference only.**

### Recommendation: Draft the Archetype Table

The most reliable source for `_shared.md` archetype customization is `article-digest.md`
combined with actual JD language from target roles — not borrowed repos. The plugin
gives naming convention; `marketingskills` gives domain vocabulary; the substance comes
from your own positioning work.

Suggested next step: in a chat session, draft the archetype table for `_shared.md` using
`article-digest.md` as source, then implement in VS Code. Format:

```
| Archetype          | Thematic axes                                    | What they buy                        |
|--------------------|--------------------------------------------------|--------------------------------------|
| Creative Marketing Lead | brand systems, visual craft, campaign architecture | full-stack creative leadership  |
| PMM                | GTM strategy, 0→1 launches, persona development  | market intelligence + launch execution |
```

---

*Created: June 2026 | Work session handoff*