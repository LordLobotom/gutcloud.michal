# syntax=docker/dockerfile:1

FROM node:20-alpine AS builder

WORKDIR /app

# Ensure native deps compile and pnpm is available
RUN apk add --no-cache libc6-compat && corepack enable

COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

COPY . .

ENV NEXT_TELEMETRY_DISABLED=1 NODE_ENV=production

RUN pnpm build
# Remove dev dependencies to shrink the runtime image
RUN pnpm prune --prod

FROM node:20-alpine AS runner

WORKDIR /app

RUN apk add --no-cache libc6-compat && addgroup -S nextjs && adduser -S nextjs -G nextjs
RUN corepack enable

ENV NODE_ENV=production NEXT_TELEMETRY_DISABLED=1

COPY --from=builder /app/package.json /app/pnpm-lock.yaml ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules

USER nextjs

EXPOSE 3000

CMD ["pnpm", "start"]
