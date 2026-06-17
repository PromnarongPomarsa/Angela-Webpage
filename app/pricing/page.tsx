import Link from "next/link";
import type { Metadata } from "next";
import PricingCard from "../components/PricingCard";

export const metadata: Metadata = {
  title: "แผนราคา — Angela",
  description:
    "Angela Translator — เลือกแผนที่เหมาะกับคุณ เริ่มต้นฟรี หรือปลดล็อกฟีเจอร์ครบด้วย Pro และ Team",
};

type Tier = {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  cta: { label: string; href: string };
  highlighted?: boolean;
  badge?: string;
};

const TIERS: Tier[] = [
  {
    name: "Free",
    price: "$0",
    period: "/ตลอด",
    description: "สำหรับผู้เริ่มต้นทดลองใช้งาน",
    features: [
      "แปลได้ 100 ครั้งต่อวัน",
      "1 ภาษาต้นทาง",
      "OCR พื้นฐาน",
      "เข้าถึงชุมชน Discord",
    ],
    cta: { label: "เริ่มใช้งานฟรี", href: "/login" },
  },
  {
    name: "Pro",
    price: "$9",
    period: "/เดือน",
    description: "สำหรับนักแปลและเกมเมอร์ตัวยง",
    features: [
      "แปลไม่จำกัด",
      "ทุกภาษาที่ Ollama รองรับ",
      "โมเดล AI ขั้นสูง",
      "บันทึกประวัติการแปล",
      "ไม่มีโฆษณา",
    ],
    cta: { label: "อัปเกรดเป็น Pro", href: "/login" },
    highlighted: true,
    badge: "แนะนำ",
  },
  {
    name: "Team",
    price: "$29",
    period: "/เดือน",
    description: "สำหรับทีมและสตูดิโอแปลเกม",
    features: [
      "ทุกอย่างในแผน Pro",
      "สูงสุด 5 ผู้ใช้",
      "Shared translation library",
      "Priority email support",
      "API access",
    ],
    cta: { label: "เริ่มต้น Team", href: "/login" },
  },
];

const COMPARISON = [
  { feature: "จำนวนการแปลต่อวัน", free: "100", pro: "ไม่จำกัด", team: "ไม่จำกัด" },
  { feature: "ภาษาต้นทาง", free: "1", pro: "ไม่จำกัด", team: "ไม่จำกัด" },
  { feature: "OCR ขั้นสูง", free: "—", pro: "✓", team: "✓" },
  { feature: "โมเดล AI ขั้นสูง", free: "—", pro: "✓", team: "✓" },
  { feature: "บันทึกประวัติ", free: "—", pro: "✓", team: "✓" },
  { feature: "Shared library", free: "—", pro: "—", team: "✓" },
  { feature: "ผู้ใช้งานพร้อมกัน", free: "1", pro: "1", team: "5" },
  { feature: "Priority support", free: "—", pro: "—", team: "✓" },
  { feature: "API access", free: "—", pro: "—", team: "✓" },
] as const;

const FAQS = [
  {
    q: "สามารถเปลี่ยนแผนได้ภายหลังไหม?",
    a: "ได้ คุณสามารถอัปเกรดหรือดาวน์เกรดแผนได้ทุกเมื่อจากหน้าตั้งค่าบัญชี ระบบจะคำนวณค่าใช้จ่ายตามสัดส่วนของเวลาที่เหลือ",
  },
  {
    q: "ยกเลิกได้ไหม และได้เงินคืนหรือไม่?",
    a: "คุณสามารถยกเลิกได้ทุกเมื่อโดยไม่มีค่าใช้จ่ายเพิ่มเติม หากยกเลิกภายใน 14 วันแรก เรายินดีคืนเงินเต็มจำนวน",
  },
  {
    q: "แผน Free มีข้อจำกัดอะไรบ้าง?",
    a: "แผน Free จำกัดการแปล 100 ครั้งต่อวัน ใช้ได้ 1 ภาษาต้นทาง และใช้โมเดล AI พื้นฐานเท่านั้น เหมาะสำหรับการทดลองใช้งาน",
  },
  {
    q: "ชำระเงินผ่านช่องทางใด?",
    a: "รองรับบัตรเครดิต/เดบิต (Visa, Mastercard, Amex) และ PromptPay สำหรับลูกค้าในประเทศไทย ใบเสร็จจะถูกส่งทางอีเมลอัตโนมัติ",
  },
] as const;

export default function PricingPage() {
  return (
    <>
      {/* Header */}
      <section className="relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 brand-glow"
        />
        <div className="relative mx-auto max-w-6xl px-4 pt-20 pb-12 text-center sm:px-6 sm:pt-24 sm:pb-16 lg:px-8">
          <p className="text-sm font-semibold tracking-wide text-indigo-600 uppercase dark:text-indigo-400">
            แผนราคา
          </p>
          <h1 className="mt-2 text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl dark:text-zinc-50">
            เลือกแผนที่ <span className="gradient-text">เหมาะกับคุณ</span>
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-300">
            เริ่มต้นฟรี อัปเกรดเมื่อพร้อม ยกเลิกได้ทุกเมื่อ — ไม่มีข้อผูกมัด
          </p>
        </div>
      </section>

      {/* Pricing cards */}
      <section className="pb-16 sm:pb-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-stretch gap-6 lg:grid-cols-3">
            {TIERS.map((tier) => (
              <PricingCard
                key={tier.name}
                name={tier.name}
                price={tier.price}
                period={tier.period}
                description={tier.description}
                features={[...tier.features]}
                cta={tier.cta}
                {...(tier.highlighted ? { highlighted: true, badge: tier.badge } : {})}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section className="border-y border-zinc-200 bg-zinc-50/60 py-16 sm:py-20 dark:border-white/5 dark:bg-white/[0.02]">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl dark:text-zinc-50">
              เปรียบเทียบฟีเจอร์
            </h2>
            <p className="mt-3 text-base text-zinc-600 dark:text-zinc-400">
              ดูรายละเอียดความแตกต่างของแต่ละแผน
            </p>
          </div>

          <div className="mt-10 overflow-x-auto">
            <table className="w-full min-w-[640px] border-separate border-spacing-0 text-left text-sm">
              <thead>
                <tr>
                  <th className="sticky left-0 z-10 border-b border-zinc-200 bg-zinc-50/60 px-4 py-3 text-left font-semibold text-zinc-900 dark:border-white/10 dark:bg-white/[0.02] dark:text-zinc-100">
                    ฟีเจอร์
                  </th>
                  <th className="border-b border-zinc-200 bg-zinc-50/60 px-4 py-3 text-center font-semibold text-zinc-900 dark:border-white/10 dark:bg-white/[0.02] dark:text-zinc-100">
                    Free
                  </th>
                  <th className="border-b border-zinc-200 bg-zinc-50/60 px-4 py-3 text-center font-semibold text-indigo-600 dark:border-white/10 dark:bg-white/[0.02] dark:text-indigo-400">
                    Pro
                  </th>
                  <th className="border-b border-zinc-200 bg-zinc-50/60 px-4 py-3 text-center font-semibold text-zinc-900 dark:border-white/10 dark:bg-white/[0.02] dark:text-zinc-100">
                    Team
                  </th>
                </tr>
              </thead>
              <tbody>
                {COMPARISON.map((row, idx) => (
                  <tr key={row.feature}>
                    <th
                      scope="row"
                      className={[
                        "sticky left-0 z-10 border-b border-zinc-200 bg-white px-4 py-3 text-left font-medium text-zinc-700 dark:border-white/10 dark:bg-zinc-950 dark:text-zinc-200",
                        idx === COMPARISON.length - 1 ? "border-b-0" : "",
                      ].join(" ")}
                    >
                      {row.feature}
                    </th>
                    <td
                      className={[
                        "border-b border-zinc-200 bg-white px-4 py-3 text-center text-zinc-600 dark:border-white/10 dark:bg-zinc-950 dark:text-zinc-400",
                        idx === COMPARISON.length - 1 ? "border-b-0" : "",
                      ].join(" ")}
                    >
                      {row.free}
                    </td>
                    <td
                      className={[
                        "border-b border-zinc-200 bg-indigo-50/40 px-4 py-3 text-center font-medium text-indigo-700 dark:border-white/10 dark:bg-indigo-500/10 dark:text-indigo-300",
                        idx === COMPARISON.length - 1 ? "border-b-0" : "",
                      ].join(" ")}
                    >
                      {row.pro}
                    </td>
                    <td
                      className={[
                        "border-b border-zinc-200 bg-white px-4 py-3 text-center text-zinc-600 dark:border-white/10 dark:bg-zinc-950 dark:text-zinc-400",
                        idx === COMPARISON.length - 1 ? "border-b-0" : "",
                      ].join(" ")}
                    >
                      {row.team}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl dark:text-zinc-50">
              คำถามที่พบบ่อย
            </h2>
            <p className="mt-3 text-base text-zinc-600 dark:text-zinc-400">
              ไม่พบคำตอบที่ต้องการ?{" "}
              <Link
                href="https://github.com/PromnarongPomarsa/Angela-Translator"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300"
              >
                ติดต่อเราบน GitHub
              </Link>
            </p>
          </div>

          <div className="mt-10 space-y-3">
            {FAQS.map((faq) => (
              <details
                key={faq.q}
                className="group rounded-xl border border-zinc-200 bg-white p-5 open:bg-indigo-50/30 open:border-indigo-200 dark:border-white/10 dark:bg-white/[0.03] dark:open:bg-indigo-500/5 dark:open:border-indigo-500/30"
              >
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 font-semibold text-zinc-900 dark:text-zinc-100">
                  <span>{faq.q}</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-5 w-5 shrink-0 text-zinc-400 transition-transform group-open:rotate-180"
                    aria-hidden
                  >
                    <polyline points="6 9 12 15 18 9" />
                  </svg>
                </summary>
                <p className="mt-3 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="pb-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-zinc-200 bg-white p-8 text-center sm:p-12 dark:border-white/10 dark:bg-white/[0.03]">
            <h3 className="text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl dark:text-zinc-50">
              ยังไม่แน่ใจ? เริ่มด้วยแผน Free
            </h3>
            <p className="mx-auto mt-3 max-w-xl text-base text-zinc-600 dark:text-zinc-400">
              ทดลองใช้งาน Angela ได้ทันทีโดยไม่ต้องใช้บัตรเครดิต อัปเกรดเมื่อพร้อม
            </p>
            <Link
              href="/login"
              className="mt-6 inline-flex items-center justify-center rounded-full gradient-bg px-6 py-3 text-sm font-semibold text-white shadow-md shadow-indigo-500/30 transition-all hover:shadow-lg hover:shadow-indigo-500/40"
            >
              สร้างบัญชีฟรี
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
