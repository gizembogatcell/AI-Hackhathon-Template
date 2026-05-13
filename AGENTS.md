# Repository guide for AI / Cursor

## What this repo is

- **Next.js 16** App Router app under `src/` (TypeScript, strict).
- **Ant Design 6** with `@ant-design/nextjs-registry` for correct CSS-in-JS with RSC.
- **Firebase Auth** (client-only): `src/lib/firebase/client.ts`, `AuthProvider` in `src/contexts/auth-context.tsx`.
- **Hackathon helper assets**: `agents/*.md`, `examples/antd-config-provider-brand.example.tsx`.

## Commands to reference

```bash
npm run dev
npm run build
npm run lint
npm run format
```

## Conventions

1. **No Firebase in Server Components** — initialize only through `getFirebaseApp` / `getFirebaseAuth` (used from client components / hooks).
2. **Env**: `NEXT_PUBLIC_FIREBASE_API_KEY` etc. See `.env.local.example`.
3. **UI**: Prefer antd primitives (`Button`, `Form`, `Layout`). Theme via `ConfigProvider` in `src/app/providers.tsx`.
4. **Auth guard**: Copy the `(app)/layout.tsx` pattern for new protected route groups.

## What to @ in Cursor

- `README.md` — stack + routes.
- `src/lib/firebase/client.ts` — Firebase entry.
- `src/contexts/auth-context.tsx` — auth state.
- `examples/antd-config-provider-brand.example.tsx` — brand tokens when skinning UI.
