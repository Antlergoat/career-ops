# Install

## Repository-scoped install

Copy the folder into your project here:

```text
<repo-root>/.agents/skills/anti-ai-writing-style/SKILL.md
```

Codex scans `.agents/skills` from the current working directory up to the repo root.

## User-level install

Copy the folder here:

```text
$HOME/.agents/skills/anti-ai-writing-style/SKILL.md
```

Use this when you want the skill available across repositories.

## Invocation

You can call it explicitly with:

```text
$anti-ai-writing-style
```

It can also trigger implicitly when a prompt asks Codex to draft, edit, or review prose that should avoid generic AI-sounding writing.
