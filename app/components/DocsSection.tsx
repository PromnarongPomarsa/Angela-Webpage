import type { ReactNode } from "react";

type DocsSectionProps = {
  id: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
};

export default function DocsSection({
  id,
  title,
  subtitle,
  children,
}: DocsSectionProps) {
  return (
    <section
      id={id}
      className="border-b border-zinc-200 py-12 first:pt-0 last:border-b-0 sm:py-16 scroll-mt-24 dark:border-white/10"
    >
      <header className="mb-6">
        <h2 className="text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl dark:text-zinc-50">
          {title}
        </h2>
        {subtitle && (
          <p className="mt-2 text-sm text-zinc-500 sm:text-base dark:text-zinc-400">
            {subtitle}
          </p>
        )}
      </header>
      <div className="space-y-4 text-base leading-7 text-zinc-700 dark:text-zinc-300">
        {children}
      </div>
    </section>
  );
}