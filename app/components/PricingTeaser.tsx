import Link from "next/link";
import PricingCard from "./PricingCard";

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
    price: "0 bath",
    period: "/ตลอด",
    description: "สำหรับผู้เริ่มต้นทดลองใช้งาน",
    features: [
      "แปลได้ 100 ครั้งต่อวัน",
      "1 ภาษาต้นทาง",
      "Model AI พื้นฐาน",
      "เข้าถึงชุมชน Discord",
    ],
    cta: { label: "เริ่มใช้งานฟรี", href: "/login" },
  },
  {
    name: "Pro",
    price: "150 bath",
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
    price: "300 bath",
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

export default function PricingTeaser() {
  return (
    <section
      id="pricing"
      className="border-y border-zinc-200 bg-zinc-50/60 py-20 sm:py-24 dark:border-white/5 dark:bg-white/[0.02]"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold tracking-wide text-indigo-600 uppercase dark:text-indigo-400">
            แผนราคา
          </p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-zinc-900 sm:text-4xl dark:text-zinc-50">
            เริ่มต้นฟรี ขยายได้ตามต้องการ
          </h2>
          <p className="mt-4 text-lg leading-8 text-zinc-600 dark:text-zinc-300">
            เลือกแผนที่เหมาะกับคุณ เปลี่ยนหรือยกเลิกได้ทุกเมื่อ
          </p>
        </div>

        <div className="mt-14 grid items-stretch gap-6 lg:grid-cols-3">
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

        <div className="mt-10 text-center">
          <Link
            href="/pricing"
            className="inline-flex items-center gap-1 text-sm font-semibold text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300"
          >
            ดูรายละเอียดและฟีเจอร์ทั้งหมด
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
      </div>
    </section>
  );
}
