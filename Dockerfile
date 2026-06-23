# ──────────────────────────────────────────
# Stage 1: deps — ติดตั้ง dependencies
# ──────────────────────────────────────────
FROM node:22-alpine AS deps

RUN apk add --no-cache libc6-compat

WORKDIR /app

COPY package.json package-lock.json ./
RUN npm ci

# ──────────────────────────────────────────
# Stage 2: builder — build โปรเจค
# ──────────────────────────────────────────
FROM node:22-alpine AS builder

WORKDIR /app

COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Build Next.js (ต้องการ standalone output ใน next.config.ts)
RUN npm run build

# ──────────────────────────────────────────
# Stage 3: runner — image สำหรับ production
# ──────────────────────────────────────────
FROM node:22-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

# สร้าง non-root user เพื่อความปลอดภัย
RUN addgroup --system --gid 1001 nodejs \
 && adduser  --system --uid 1001 nextjs

# Copy เฉพาะไฟล์ที่จำเป็น (standalone ทำให้ image เล็กลงมาก)
COPY --from=builder /app/public ./public

COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

CMD ["node", "server.js"]
