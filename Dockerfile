# syntax=docker/dockerfile:1

# ---- Base ----
# Imagem base do Node com pnpm habilitado via corepack
FROM node:22-alpine AS base
RUN corepack enable
WORKDIR /app

# ---- Dependencies ----
# Instala as dependencias usando o lockfile para builds reproduziveis
FROM base AS deps
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

# ---- Builder ----
# Compila a aplicacao Next.js em modo standalone
FROM base AS builder
ENV NEXT_TELEMETRY_DISABLED=1
COPY --from=deps /app/node_modules ./node_modules
COPY . .
RUN pnpm build

# ---- Runner ----
# Imagem final minima que roda apenas o output standalone
FROM node:22-alpine AS runner
WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1
ENV PORT=3000
ENV HOSTNAME=0.0.0.0

# Usuario nao-root por seguranca
RUN addgroup --system --gid 1001 nodejs \
  && adduser --system --uid 1001 nextjs

# Copia os arquivos publicos e o build standalone
COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

CMD ["node", "server.js"]
