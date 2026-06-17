# Angela Subscription

หน้าเว็บ Landing Page และระบบ Subscription สำหรับโปรแกรม **Angela Translator** สร้างด้วย [Next.js](https://nextjs.org/)

## Tech Stack

- **Framework:** Next.js 16 (App Router, Turbopack)
- **Language:** TypeScript
- **Styling:** Tailwind CSS
- **Linting:** ESLint

## Requirements

โปรเจคนี้ต้องใช้ **Node.js เวอร์ชัน 20.9 ขึ้นไป**

แนะนำให้ใช้ [nvm](https://github.com/nvm-sh/nvm) เพื่อจัดการเวอร์ชันของ Node:

```bash
nvm install 22
nvm use 22
```

ตรวจสอบเวอร์ชันที่ใช้งานอยู่:

```bash
node -v
```

## Getting Started

### 1. Clone โปรเจค

```bash
git clone <repository-url>
cd angela-subscription
```

### 2. ติดตั้ง dependencies

```bash
npm install
```

### 3. รัน Development Server

```bash
npm run dev
```

เปิดเบราว์เซอร์ไปที่ [http://localhost:3000](http://localhost:3000)

## คำสั่งที่ใช้บ่อย

| คำสั่ง | คำอธิบาย |
|---|---|
| `npm run dev` | รัน development server (พร้อม Turbopack) |
| `npm run build` | build โปรเจคสำหรับ production |
| `npm run start` | รัน production server (ต้อง build ก่อน) |
| `npm run lint` | ตรวจสอบ code ด้วย ESLint |

## โครงสร้างโปรเจค

```
angela-subscription/
├── src/
│   └── app/
│       ├── layout.tsx     # Layout หลักของแอป
│       ├── page.tsx       # หน้า Landing Page
│       └── globals.css    # Tailwind imports
├── public/                # ไฟล์ static (รูปภาพ, ไอคอน)
├── package.json
├── tsconfig.json
└── next.config.ts
```

## Environment Variables

สร้างไฟล์ `.env.local` ที่ root โปรเจค (ดูตัวอย่างใน `.env.example` ถ้ามี) สำหรับ key ที่จำเป็น เช่น Stripe API keys

```
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=
STRIPE_SECRET_KEY=
```

## Deployment

โปรเจคนี้สามารถ deploy ได้ผ่าน [Vercel](https://vercel.com/) หรือ platform ที่รองรับ Next.js โดย build ด้วยคำสั่ง:

```bash
npm run build
npm run start
```
