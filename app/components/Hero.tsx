import Link from "next/link";

const RELEASES_URL =
  "https://github.com/PromnarongPomarsa/Angela-Translator/releases";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 brand-glow"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent"
      />

      <div className="mx-auto grid max-w-6xl items-center gap-12 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:py-28 lg:px-8">
        <div className="text-center lg:text-left">
          <span className="inline-flex items-center gap-2 rounded-full border border-indigo-200/60 bg-white/60 px-3 py-1 text-xs font-medium text-indigo-700 backdrop-blur-sm dark:border-indigo-500/30 dark:bg-white/5 dark:text-indigo-300">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-indigo-500 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-indigo-500" />
            </span>
            เริ่มต้นฟรี · ไม่ต้องใช้บัตรเครดิต
          </span>

          <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-zinc-900 sm:text-5xl lg:text-6xl dark:text-zinc-50">
            แปลภาษาบนหน้าจอ
            <br />
            <span className="gradient-text">ได้ทุกที่ทุกเวลา</span>
          </h1>

          <p className="mt-6 text-lg leading-8 text-zinc-600 dark:text-zinc-300">
            <strong className="font-semibold text-zinc-800 dark:text-zinc-100">
              Angela
            </strong>{" "}
            คือบริการแปลภาษาอัจฉริยะสำหรับเกม วิชวลโนเวล และสื่อบันเทิง
            ใช้ AI ของ <span className="font-semibold text-indigo-600 dark:text-indigo-400">Ollama</span>{" "}
            และ OCR อย่าง PaddleOCR เลือกพื้นที่หน้าจอครั้งเดียว
            แล้วให้ AI ช่วยแปลข้อความที่เปลี่ยนไปตลอด
          </p>

          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
            <Link
              href="/login"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full gradient-bg px-6 py-3 text-base font-semibold text-white shadow-lg shadow-indigo-500/30 transition-all hover:shadow-xl hover:shadow-indigo-500/40 sm:w-auto"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
                aria-hidden
              >
                <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
                <polyline points="10 17 15 12 10 7" />
                <line x1="15" y1="12" x2="3" y2="12" />
              </svg>
              เริ่มใช้งานฟรี
            </Link>
            <Link
              href="/pricing"
              className="inline-flex w-full items-center justify-center gap-2 rounded-full border border-zinc-300 bg-white px-6 py-3 text-base font-semibold text-zinc-800 transition-colors hover:border-zinc-400 hover:bg-zinc-50 sm:w-auto dark:border-white/15 dark:bg-white/5 dark:text-zinc-100 dark:hover:border-white/30 dark:hover:bg-white/10"
            >
              ดูแผนราคา
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
                aria-hidden
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
          </div>

          <p className="mt-6 text-sm text-zinc-500 dark:text-zinc-400">
            ใช้ PaddleOCR + Ollama · ข้อมูลอยู่ในเครื่องคุณ ·{" "}
            <Link
              href={RELEASES_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300"
            >
              ดาวน์โหลด Desktop App
            </Link>
          </p>
        </div>

        <div className="relative mx-auto w-full max-w-lg lg:max-w-none">
          <div
            aria-hidden
            className="absolute -inset-6 -z-10 rounded-3xl bg-gradient-to-br from-indigo-500/20 via-purple-500/20 to-pink-500/20 blur-2xl"
          />
          <div className="rounded-2xl border border-zinc-200 bg-white p-3 shadow-2xl shadow-indigo-500/10 dark:border-white/10 dark:bg-zinc-900">
            <div className="flex items-center gap-1.5 px-2 py-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
              <span className="ml-3 text-xs text-zinc-400">
                angela.app · Pro
              </span>
            </div>

            <div className="relative aspect-video overflow-hidden rounded-lg bg-gradient-to-br from-indigo-900 via-purple-900 to-zinc-900">
              <div
                aria-hidden
                className="absolute left-[10%] top-[20%] h-[55%] w-[80%] rounded border-2 border-dashed border-indigo-300/80"
              >
                <span className="absolute -top-6 left-0 rounded bg-indigo-500/90 px-1.5 py-0.5 text-[10px] font-semibold text-white">
                  Alt+S
                </span>
                <span className="absolute -bottom-6 right-0 rounded bg-zinc-900/80 px-1.5 py-0.5 text-[10px] text-zinc-300">
                  512×288
                </span>
              </div>

              <div className="absolute bottom-3 left-3 right-3 rounded bg-black/60 px-3 py-2 text-xs text-zinc-100">
                「これが私たちの最後の戦いだ…」
              </div>
            </div>

            <div className="mt-3 rounded-xl border border-indigo-200/60 bg-indigo-50/60 p-4 dark:border-indigo-500/30 dark:bg-indigo-500/10">
              <div className="flex items-center justify-between gap-2 text-xs font-semibold text-indigo-700 dark:text-indigo-300">
                <span className="flex items-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-3.5 w-3.5"
                    aria-hidden
                  >
                    <path d="M5 8l6 6 4-4 4 4" />
                    <path d="M5 12h14" />
                  </svg>
                  แปลโดย Ollama · Pro
                </span>
                <span className="rounded-full bg-indigo-500/20 px-2 py-0.5 text-[10px] font-medium text-indigo-700 dark:text-indigo-300">
                  ∞ ไม่จำกัด
                </span>
              </div>
              <p className="mt-2 text-sm leading-6 text-zinc-800 dark:text-zinc-100">
                &ldquo;นี่คือการต่อสู้ครั้งสุดท้ายของเรา…&rdquo;
              </p>
              <div className="mt-2 text-[10px] text-zinc-500 dark:text-zinc-400">
                ⌥D — แปล · ⌥C — เปลี่ยนภาษา · Esc — ปิด
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
