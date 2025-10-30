# Repository Guidelines

## Project Structure & Module Organization
Routes, server actions, and metadata live under `app/`—group features by segment (`app/(marketing)/…`) to keep layouts isolated. Shared UI is in `components/`; cross-cutting helpers and configuration sit in `lib/`. Tailwind globals belong in `styles/`, static assets in `public/`, and container scaffolding (`Dockerfile`, `docker-compose.yml`) mirrors the Vercel runtime.

## Build, Test, and Development Commands
Install once with `pnpm install`. Use `pnpm dev` for local development. Run `pnpm lint` (append `-- --fix` for autofix) and `pnpm build` before committing.

## Coding Style & Naming Conventions
TypeScript runs in `strict` mode—avoid `any` and prefer explicit returns for server actions and utilities. Components/files use PascalCase, hooks/utilities camelCase, and keep indentation at two spaces. Lean on Tailwind utilities instead of bespoke CSS; if needed, extend them in `styles/globals.css`. Run `pnpm lint -- --fix` before pushing to align with the repo’s ESLint rules.

## Testing Guidelines
A formal suite is not yet checked in, so new work should introduce component specs with `next/test` + React Testing Library. Collocate tests in `__tests__` folders or as `*.test.tsx` siblings, and stub external calls with fixtures under `lib/__mocks__/`. Until a dedicated script lands, treat `pnpm lint` plus manual route checks as the baseline; if you add Vitest or Playwright, expose it via `pnpm test` and update this section.

## Commit & Pull Request Guidelines
Keep commit subjects imperative and succinct (example: `Add Docker setup for Next.js deployment`) and separate unrelated changes. PRs should link to the relevant issue, include a short narrative, list verification steps (`pnpm lint`, `pnpm build`), and provide screenshots when UI shifts. Wait for the Vercel preview to pass and call out any env or migration changes.

## Deployment & Environment Notes
Docker is the deployment target. Rebuild with `docker compose build --no-cache` and restart using `docker compose up -d`. Both staging and production requests come through Traefik on the `traefik-public` network; ensure service labels stay unique per host rule to avoid old containers serving traffic. Secrets belong in `.env` (not in git). Vercel is no longer used.
