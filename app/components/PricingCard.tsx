import Link from "next/link";

type PricingCardProps = {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  cta: { label: string; href: string };
  highlighted?: boolean;
  badge?: string;
};

export default function PricingCard({
  name,
  price,
  period,
  description,
  features,
  cta,
  highlighted = false,
  badge,
}: PricingCardProps) {
  return (
    <div
      className={[
        "relative flex flex-col rounded-2xl bg-white p-6 sm:p-8",
        highlighted
          ? "border-2 border-transparent shadow-2xl shadow-indigo-500/25 lg:scale-[1.03]"
          : "border border-zinc-200 shadow-sm",
        "dark:bg-white/[0.03]",
      ].join(" ")}
    >
      {highlighted && (
        <span
          aria-hidden
          className="pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 opacity-100"
          style={{ zIndex: -1 }}
        />
      )}

      {badge && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full gradient-bg px-3 py-1 text-xs font-semibold tracking-wide text-white uppercase shadow-md shadow-indigo-500/30">
          {badge}
        </span>
      )}

      <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-50">
        {name}
      </h3>
      <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
        {description}
      </p>

      <div className="mt-6 flex items-baseline gap-1">
        <span className="text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl dark:text-zinc-50">
          {price}
        </span>
        <span className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
          {period}
        </span>
      </div>

      <ul className="mt-6 space-y-3 text-sm">
        {features.map((feature) => (
          <li key={feature} className="flex items-start gap-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mt-0.5 h-4 w-4 shrink-0 text-indigo-500"
              aria-hidden
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
            <span className="text-zinc-700 dark:text-zinc-300">{feature}</span>
          </li>
        ))}
      </ul>

      <Link
        href={cta.href}
        className={[
          "mt-8 inline-flex w-full items-center justify-center rounded-full px-5 py-2.5 text-sm font-semibold transition-all",
          highlighted
            ? "gradient-bg text-white shadow-md shadow-indigo-500/30 hover:shadow-lg hover:shadow-indigo-500/40"
            : "border border-zinc-300 bg-white text-zinc-800 hover:border-zinc-400 hover:bg-zinc-50 dark:border-white/15 dark:bg-white/5 dark:text-zinc-100 dark:hover:border-white/30 dark:hover:bg-white/10",
        ].join(" ")}
      >
        {cta.label}
      </Link>
    </div>
  );
}
