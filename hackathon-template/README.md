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
#1 BRAINSTORM  →  #2 ANALYST  →  #3 ARCHITECT  →  #4 FE-DEV + #5 BE-DEV  →  #6 TESTER
```

Each phase has a **Cursor subagent** in `.cursor/agents/`. The YAML `name` is prefixed **`#1` … `#6`** so call order matches the hackathon pipeline. Open the Subagents picker and choose by that name, or say e.g. “act as **#2 analyst**”.

| Phase        | Subagent (`name`) | Command to activate          | Output                     |
| ------------ | ----------------- | ---------------------------- | -------------------------- |
| Ideation     | `#1 brainstorm`   | say "act as #1 brainstorm"   | `docs/brainstorm-notes.md` |
| Requirements | `#2 analyst`      | say "act as #2 analyst"      | `docs/brief.md` + stories  |
| Architecture | `#3 architect`    | say "act as #3 architect"    | `docs/architecture.md`     |
| Frontend     | `#4 fe-dev`       | say "act as #4 fe-dev"       | Implemented UI             |
| Backend      | `#5 be-dev`       | say "act as #5 be-dev"       | Implemented API            |
| QA           | `#6 tester`       | say "act as #6 tester"       | Validated stories          |

**#4** and **#5** are often parallel after **#3** finishes.

---

## File Structure

```
.cursor/
├── rules/               ← Always-on workflow + coding standards (not personas)
│   ├── 00-project-workflow.mdc    ← Always included (alwaysApply: true)
│   └── 01-coding-standards.mdc   ← Included for src/ files
├── agents/              ← Numbered persona subagents (call order = filename order)
│   ├── 01-brainstorm.md   (#1 brainstorm)
│   ├── 02-analyst.md    (#2 analyst)
│   ├── 03-architect.md  (#3 architect)
│   ├── 04-fe-dev.md     (#4 fe-dev)
│   ├── 05-be-dev.md     (#5 be-dev)
│   └── 06-tester.md     (#6 tester)
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
    └── story-writing/
        ├── SKILL.md
        └── story-template.md

docs/
├── brainstorm-notes.md  ← #1 brainstorm
├── brief.md             ← #2 analyst
├── architecture.md      ← #3 architect
└── stories/             ← #2 analyst writes; #4 / #5 implement
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

### Phase 5 — `#6 tester`

```
1. Run subagent #6 tester
2. Run: *validate-story docs/stories/{n}.{title}.story.md
3. Run: *bug-report  →  for any failures
4. Story status becomes "Done" when all ACs pass
```

---

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
