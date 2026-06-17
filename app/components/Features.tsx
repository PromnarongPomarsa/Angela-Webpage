type Feature = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

const FEATURES: Feature[] = [
  {
    title: "OCR ด้วย PaddleOCR",
    description:
      "ดึงข้อความจากภาพหน้าจอได้แม่นยำแม้ตัวอักษรมีสไตล์เฉพาะ เช่น ฟอนต์เกมหรือข้อความแบ่งบรรทัด",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <path d="M3 7V5a2 2 0 0 1 2-2h2" />
        <path d="M17 3h2a2 2 0 0 1 2 2v2" />
        <path d="M21 17v2a2 2 0 0 1-2 2h-2" />
        <path d="M7 21H5a2 2 0 0 1-2-2v-2" />
        <line x1="7" y1="9" x2="17" y2="9" />
        <line x1="7" y1="13" x2="17" y2="13" />
        <line x1="7" y1="17" x2="13" y2="17" />
      </svg>
    ),
  },
  {
    title: "AI แปลภาษาด้วย Ollama",
    description:
      "เลือกโมเดล AI ได้เองตามต้องการ ทำงานบนเครื่องของคุณ ไม่ต้องส่งภาพหรือข้อความไปยังเซิร์ฟเวอร์ภายนอก",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <circle cx="12" cy="12" r="9" />
        <path d="M3 12h18" />
        <path d="M12 3a14 14 0 0 1 0 18" />
        <path d="M12 3a14 14 0 0 0 0 18" />
      </svg>
    ),
  },
  {
    title: "เลือกพื้นที่ครั้งเดียว",
    description:
      "เลือกกรอบข้อความในเกมเพียงครั้งเดียว Angela จะแปลข้อความใหม่ที่ปรากฏในกรอบนั้นให้อัตโนมัติ ไม่ต้องเลือกซ้ำ",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <path d="M3 3h6v6H3z" />
        <path d="M15 3h6v6h-6z" />
        <path d="M3 15h6v6H3z" />
        <path d="M15 15h6v6h-6z" />
      </svg>
    ),
  },
  {
    title: "System Tray",
    description:
      "ทำงานเบื้องหลังใน System Tray ไม่บังหน้าจอเกม เรียกใช้ได้ทันทีด้วยคีย์ลัด",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
  },
  {
    title: "เปิดเครื่องก็พร้อมใช้",
    description:
      "ตั้งให้ Angela เริ่มทำงานอัตโนมัติเมื่อเปิดเครื่อง พร้อมใช้งานทันทีที่เปิดเกม",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" />
      </svg>
    ),
  },
  {
    title: "รองรับหลายภาษา",
    description:
      "ใช้โมเดลภาษาใดก็ได้ที่ Ollama รองรับ เหมาะกับการแปลภาษาญี่ปุ่น เกาหลี จีน อังกฤษ และอื่น ๆ",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden
      >
        <path d="M5 8h14" />
        <path d="M7 4h10" />
        <path d="M11 4c0 6-3 10-6 12" />
        <path d="M13 4c0 6 3 10 6 12" />
        <path d="M9 14c.6 1.4 1.7 2 3 2s2.4-.6 3-2" />
      </svg>
    ),
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="border-y border-zinc-200 bg-zinc-50/60 py-20 sm:py-24 dark:border-white/5 dark:bg-white/[0.02]"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold tracking-wide text-indigo-600 uppercase dark:text-indigo-400">
            คุณสมบัติ
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl dark:text-zinc-50">
            ทุกอย่างที่คุณต้องการเพื่อ{" "}
            <span className="gradient-text">แปลเกมแบบเรียลไทม์</span>
          </h2>
          <p className="mt-4 text-lg leading-8 text-zinc-600 dark:text-zinc-300">
            ออกแบบมาเพื่อการแปลข้อความจากเกม วิชวลโนเวล และอีมูเลเตอร์โดยเฉพาะ
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature) => (
            <article
              key={feature.title}
              className="group relative overflow-hidden rounded-2xl border border-zinc-200 bg-white p-6 transition-all hover:-translate-y-1 hover:border-indigo-300 hover:shadow-xl hover:shadow-indigo-500/10 dark:border-white/10 dark:bg-white/[0.03] dark:hover:border-indigo-500/40"
            >
              <div
                aria-hidden
                className="absolute -top-12 -right-12 h-32 w-32 rounded-full bg-gradient-to-br from-indigo-500/10 to-purple-500/10 opacity-0 transition-opacity group-hover:opacity-100"
              />
              <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl gradient-bg text-white shadow-md shadow-indigo-500/20">
                <span className="h-5 w-5">{feature.icon}</span>
              </div>
              <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
                {feature.title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                {feature.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
