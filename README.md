# AI Hackathon Template — agent + app

Single repo: **Next.js (App Router) + TypeScript + Ant Design + Firebase Auth (Google + Email) + MongoDB Atlas**, plus the existing **agent prompts** in `agents/` and the **Ant Design** example in `examples/`.

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
2. Copy `.env.local.example` → `.env.local`:
   - **Firebase web config** (`NEXT_PUBLIC_FIREBASE_*`) — Firebase console → Project settings → Your apps.
   - **Google sign-in** — Firebase console → Authentication → Sign-in method → enable Google.
   - **MongoDB Atlas** (`MONGODB_URI`) — Atlas → Connect → Drivers; whitelist your IP under Network Access.
   - **Firebase Admin** (`FIREBASE_ADMIN_*`) — Project settings → Service accounts → Generate new private key. Required for verifying ID tokens server-side.
3. `npm run dev`

Routes: `/` (marketing), `/login`, `/dashboard` (protected), `/api/users/me` (authenticated example).

## Stack conventions

- **UI**: `antd` + `@ant-design/nextjs-registry` (`AntdRegistry` in `src/app/layout.tsx`, `ConfigProvider` in `src/app/providers.tsx`). Optional theming: see `examples/antd-config-provider-brand.example.tsx`.
- **Auth (client)**: Firebase JS SDK at `src/lib/firebase/client.ts`; session + Google sign-in via `AuthProvider` (`src/contexts/auth-context.tsx`). Protect routes with the pattern in `src/app/(app)/layout.tsx` — not middleware/cookies.
- **Auth (server)**: API routes verify the Firebase ID token via `requireUser()` in `src/lib/api/auth.ts` (uses `firebase-admin`). Frontend attaches the token with `Authorization: Bearer <getIdToken()>`.
- **Database**: MongoDB Atlas via the cached client in `src/lib/mongodb/client.ts` (`getDb()`). Only used from services / API routes — never from client components.
- **Backend architecture**: HTTP in `app/api/**`, business logic in `services/**`, Zod schemas in `lib/validations/**`, shared types in `types/**`. Standardized responses (`{ data }` / `{ error }`) via `src/lib/api/response.ts`. See `.cursor/rules/backend-standards.mdc`.
- **Env**: Public web config uses `NEXT_PUBLIC_*`; server secrets (`MONGODB_URI`, `FIREBASE_ADMIN_*`) are validated with Zod in `src/lib/env.ts`. Never commit `.env.local`.

## Calling the API from the client

```ts
const token = await getIdToken(); // from useAuth()
const res = await fetch("/api/users/me", {
  headers: { Authorization: `Bearer ${token}` },
});
const { data } = await res.json();
```

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
