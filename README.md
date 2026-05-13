# AI Hackathon Template — agent + app

Single repo: **Next.js (App Router) + TypeScript + Ant Design + client-first Firebase Auth**, plus the existing **agent prompts** in `agents/` and the **Ant Design** example in `examples/`.

## Commands

| Command                | Purpose                                                     |
| ---------------------- | ----------------------------------------------------------- |
| `npm run dev`          | Dev server ([http://localhost:3000](http://localhost:3000)) |
| `npm run build`        | Production build                                            |
| `npm run lint`         | ESLint                                                      |
| `npm run format`       | Prettier write                                              |
| `npm run format:check` | Prettier check                                              |

Requires **Node 20+** (`package.json` `engines`).

## Quick start

1. `npm install`
2. Copy `.env.local.example` → `.env.local` and set `NEXT_PUBLIC_FIREBASE_*` from the Firebase console (Authentication → sign-in methods as needed).
3. `npm run dev`

Routes: `/` (marketing), `/login`, `/dashboard` (protected).

## Stack conventions

- **UI**: `antd` + `@ant-design/nextjs-registry` (`AntdRegistry` in `src/app/layout.tsx`, `ConfigProvider` in `src/app/providers.tsx`). Optional theming: see `examples/antd-config-provider-brand.example.tsx`.
- **Auth**: Firebase JS SDK only on the client (`src/lib/firebase/client.ts`); session via `AuthProvider` (`src/contexts/auth-context.tsx`). Protect routes with the pattern in `src/app/(app)/layout.tsx` — not middleware/cookies.
- **Env**: Only `NEXT_PUBLIC_*` for Firebase web config. Never commit `.env.local`.

## Cursor

- Index **Next.js** and **Ant Design** under Cursor Settings → Indexing & Docs.
- `@` this file or `AGENTS.md` when starting tasks.
- Add **Cursor Rules** under `.cursor/rules/*.mdc` or **commands** under `.cursor/commands/` when your team wants shared prompts (optional).

## Formatting

**Prettier** runs with default options (`npm run format`); add a **`.prettierrc`** or `"prettier"` key in `package.json` only when you want custom style. Ignore lists live in **`.prettierignore`**.

## Agents pipeline

Use the prompts in `agents/` in order: **brainstormer → analyst → architect** (see file headers).

## Documentation

If you maintain a `docs/` folder (e.g. `docs/cursor-ai-workflow.md`, `docs/ant-design.md`), keep it in sync with this README and link it here.
