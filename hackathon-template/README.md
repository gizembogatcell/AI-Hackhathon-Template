# Hackathon Project Template

A lean, stack-agnostic project template powered by a simplified BMAD workflow.
Designed for hackathons: fast setup, structured thinking, AI-assisted execution.

---

## Quick Start

1. Copy this entire template into your new hackathon project folder
2. Open the project in Cursor
3. Start with **`#1 brainstorm`** — say `*ideate {your topic}`
4. After each `*handoff`, **manually** run the next numbered subagent (**#2** → **#3** → …). Subagents **do not** auto-spawn each other.

---

## Workflow

```
#1 … #6  (mandatory pipeline)     optional:  #7 BROWSER-E2E (Playwright / headed UI)
```

Each **core** phase has a subagent in `.cursor/agents/` (`#1` … `#6`). **`#7 browser-e2e`** is **optional** — only when you want real browser automation; it does **not** replace **#6** for lint/unit and AC sign-off.

| Phase        | Subagent (`name`) | Command to activate          | Output                     |
| ------------ | ----------------- | ---------------------------- | -------------------------- |
| Ideation     | `#1 brainstorm`   | say "act as #1 brainstorm"   | `docs/brainstorm-notes.md` |
| Requirements | `#2 analyst`      | say "act as #2 analyst"      | `docs/brief.md` + stories  |
| Architecture | `#3 architect`    | say "act as #3 architect"    | `docs/architecture.md`     |
| Frontend     | `#4 fe-dev`       | say "act as #4 fe-dev"       | Implemented UI             |
| Backend      | `#5 be-dev`       | say "act as #5 be-dev"       | Implemented API            |
| QA (code)    | `#6 tester`       | say "act as #6 tester"       | Lint/tests, AC evidence, bugs |
| Browser E2E (optional) | `#7 browser-e2e` | say "act as #7 browser-e2e" | Playwright reports / traces |

**#4** and **#5** are often parallel after **#3** finishes.

---

## File Structure

```
.cursor/
├── rules/               ← Always-on workflow + coding standards (not personas)
│   ├── 00-project-workflow.mdc    ← Always included (alwaysApply: true)
│   ├── 01-coding-standards.mdc   ← Included for src/ files
│   └── 02-fe-component-standards.mdc ← React/TS/JSX UI (#4 fe-dev + matching globs)
├── agents/              ← Numbered persona subagents (call order = filename order)
│   ├── 01-brainstorm.md   (#1 brainstorm)
│   ├── 02-analyst.md    (#2 analyst)
│   ├── 03-architect.md  (#3 architect)
│   ├── 04-fe-dev.md     (#4 fe-dev)
│   ├── 05-be-dev.md     (#5 be-dev)
│   ├── 06-tester.md     (#6 tester — code / lint / unit AC)
│   └── 07-browser-e2e.md (#7 browser-e2e — Playwright, optional)
├── prompts/             ← Quick single-purpose prompts (invoke with /)
│   ├── create-brief.md
│   ├── create-story.md
│   ├── create-architecture.md
│   └── create-test-plan.md
└── skills/              ← Complex multi-step workflows with supporting assets
    ├── brainstorm-session/
    │   ├── SKILL.md
    │   └── techniques.md
    ├── requirements-analysis/
    │   ├── SKILL.md
    │   └── brief-template.md
    ├── architecture-design/
    │   ├── SKILL.md
    │   └── adr-template.md
    ├── story-writing/
    │   ├── SKILL.md
    │   └── story-template.md
    └── playwright-e2e/
        └── SKILL.md          ← Playwright / headed runs (**#7 browser-e2e** *e2e / *smoke)

docs/
├── brainstorm-notes.md  ← #1 brainstorm
├── brief.md             ← #2 analyst
├── architecture.md      ← #3 architect
├── e2e-playwright.md    ← optional Playwright + headed Chrome setup
└── stories/             ← #2 analyst writes; #4 / #5 implement

e2e/                     ← optional; add specs after docs/e2e-playwright.md
└── README.md
```

---

## How to Use Each Subagent

### Phase 1 — `#1 brainstorm`

```
1. Run subagent #1 brainstorm in Cursor
2. Run: *ideate {your topic}
3. Follow the structured session
4. Run: *handoff  →  saves docs/brainstorm-notes.md, then start #2 analyst yourself
```

### Phase 2 — `#2 analyst`

```
1. Run subagent #2 analyst
2. Run: *create-brief  →  creates docs/brief.md
3. Run: *add-story {feature}  →  for each MVP feature
4. Run: *prioritize  →  to MoSCoW rank the stories
5. Run: *handoff  →  then start #3 architect yourself
```

### Phase 3 — `#3 architect`

```
1. Run subagent #3 architect
2. Run: *decide-stack  →  confirms tech stack
3. Run: *create-architecture  →  creates docs/architecture.md
4. Run: *handoff  →  then start #4 fe-dev and/or #5 be-dev yourself
```

### Phase 4 — `#4 fe-dev` or `#5 be-dev`

```
1. Run #4 fe-dev and/or #5 be-dev (parallel is OK)
2. Run: *story docs/stories/{n}.{title}.story.md
3. Run: *implement  →  implements task by task
4. Story status becomes "Ready for Review" when done
```

### Phase 5 — `#6 tester` (code correctness)

```
1. Run subagent #6 tester
2. *run-checks  →  lint + unit/integration (per package.json / architecture)
3. *validate-story docs/stories/{n}.{title}.story.md  →  AC vs test evidence
4. *bug-report  →  for any failures
5. Story status → Done when ACs satisfied
```

**#6** does **not** run Playwright. For headed browser E2E, use **`#7 browser-e2e`** below.

### Optional — `#7 browser-e2e` (Playwright)

When `e2e/` + Playwright are set up (`docs/e2e-playwright.md`):

```
1. Run subagent #7 browser-e2e
2. *e2e  or  *smoke  →  npx playwright test --headed (or npm run e2e:headed)
3. Share the summary with #6 if you need AC sign-off using browser evidence
```

`*validate-story` in **#6** uses **test logs and code-level proof**; **#7** adds **UI automation evidence** when you choose to run it.

## Quick Prompts (Slash Commands)

Type `/` in Cursor chat to access:

| Prompt                 | What it does               |
| ---------------------- | -------------------------- |
| `/create-brief`        | Interactive brief creation |
| `/create-story`        | Create a story file        |
| `/create-architecture` | Create architecture doc    |
| `/create-test-plan`    | Create a test plan         |

---

## Customization

- Add project-specific rules to `.cursor/rules/` with descriptive names
- Update `01-coding-standards.mdc` with your chosen stack's conventions
- Add shared utilities or patterns to `.cursor/skills/` as new skill folders
- Add or edit subagents under `.cursor/agents/` (YAML `name` + `description` + Markdown body)
- The `00-project-workflow.mdc` is the only always-applied rule — keep it lean
