# Michal Gut — Solution Architect & Tech Lead

Personal portfolio for positioning Michal Gut as a solution architect / development team lead focused on ERP (SAP), integrations, data platforms, and MES/SCADA. The site is built with Next.js 16, Tailwind CSS, and is deployed via Docker behind Traefik.

## Tech Stack

- Next.js 16 (app router, React 19)
- Tailwind CSS 4
- TypeScript (strict mode)
- Docker + Traefik
- IBM Plex Sans webfont via `next/font`

## Getting Started

1. Install dependencies once:

   ```bash
   pnpm install
   ```

2. Run the development server:

   ```bash
   pnpm dev
   ```

   The app runs on [http://localhost:3000](http://localhost:3000) with hot reload.

3. Lint and build before committing:

   ```bash
   pnpm lint
   pnpm build
   ```

## Deployment

Docker is the deployment path. The repository includes a Compose setup that matches production.

```bash
docker compose build --no-cache
docker compose up -d
```

Traefik routes traffic to the `michal` service on the `traefik-public` network. Keep host rules unique and remove old containers so Traefik doesn’t round-robin outdated images.

## Environment

Runtime secrets live in `.env` (not committed). `TRAEFIK_DOMAIN` defines the base domain for host rule labels.

## Contact

- Email: [emichalgut@gmail.com](mailto:emichalgut@gmail.com)
- LinkedIn: [linkedin.com/in/michal-gut-71791250](https://www.linkedin.com/in/michal-gut-71791250)
- GitHub: [github.com/LordLobotom](https://github.com/LordLobotom)
