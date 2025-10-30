# Repository Guidelines

## Project Structure & Module Organization
Routes, server actions, and metadata live under `app/`—group features by segment (`app/(marketing)/…`) to keep layouts isolated. Shared UI is in `components/`; cross-cutting helpers and configuration sit in `lib/`. Tailwind globals belong in `styles/`, static assets in `public/`, and container scaffolding (`Dockerfile`, `docker-compose.yml`) mirrors the Vercel runtime.

## Build, Test, and Development Commands
Install once with `pnpm install`. `pnpm dev` starts the hot-reloading Next.js 16 server; pair it with `docker compose up web` only when validating the container. `pnpm lint` runs ESLint + type checks (append `-- --fix` for autofix). `pnpm build` compiles the production bundle used by Vercel and Docker, and `pnpm start` serves that bundle for smoke tests.

## Coding Style & Naming Conventions
TypeScript runs in `strict` mode—avoid `any` and prefer explicit returns for server actions and utilities. Components/files use PascalCase, hooks/utilities camelCase, and keep indentation at two spaces. Lean on Tailwind utilities instead of bespoke CSS; if needed, extend them in `styles/globals.css`. Run `pnpm lint -- --fix` before pushing to align with the repo’s ESLint rules.

## Testing Guidelines
A formal suite is not yet checked in, so new work should introduce component specs with `next/test` + React Testing Library. Collocate tests in `__tests__` folders or as `*.test.tsx` siblings, and stub external calls with fixtures under `lib/__mocks__/`. Until a dedicated script lands, treat `pnpm lint` plus manual route checks as the baseline; if you add Vitest or Playwright, expose it via `pnpm test` and update this section.

## Commit & Pull Request Guidelines
Keep commit subjects imperative and succinct (example: `Add Docker setup for Next.js deployment`) and separate unrelated changes. PRs should link to the relevant issue, include a short narrative, list verification steps (`pnpm lint`, `pnpm build`), and provide screenshots when UI shifts. Wait for the Vercel preview to pass and call out any env or migration changes.

## Deployment & Environment Notes
Vercel runs `pnpm build`, so keep builds deterministic and side-effect free. Store secrets in Vercel or `.env.local`, never in git. Docker exposes port 3000; update `docker-compose.yml` when the service graph changes. Keep `components.json` synchronized with v0.app exports to avoid design drift.
