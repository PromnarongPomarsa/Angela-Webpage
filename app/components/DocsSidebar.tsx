"use client";

import { useEffect, useState } from "react";

export type DocsSection = {
  id: string;
  label: string;
};

type DocsSidebarProps = {
  sections: DocsSection[];
};

export default function DocsSidebar({ sections }: DocsSidebarProps) {
  const [activeId, setActiveId] = useState<string>(sections[0]?.id ?? "");

  useEffect(() => {
    const elements = sections
      .map((s) => document.getElementById(s.id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0) return;

    // ใช้ rootMargin เพื่อให้ section ที่อยู่ใกล้ top ของ viewport (เผื่อ sticky navbar h-16)
    // เป็น active section — top 80px = navbar (64px) + padding
    const observer = new IntersectionObserver(
      (entries) => {
        // หา entries ที่ isIntersecting และใกล้ top ที่สุด
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      {
        rootMargin: "-80px 0px -70% 0px",
        threshold: 0,
      }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [sections]);

  return (
    <>
      {/* Desktop: sticky vertical sidebar */}
      <nav
        aria-label="สารบัญ Documentation"
        className="hidden lg:block"
      >
        <div className="sticky top-20 max-h-[calc(100vh-6rem)] overflow-y-auto pr-2">
          <p className="mb-3 px-3 text-xs font-semibold tracking-wide text-zinc-500 uppercase dark:text-zinc-400">
            On this page
          </p>
          <ul className="space-y-1 border-l border-zinc-200 dark:border-white/10">
            {sections.map((section) => {
              const active = activeId === section.id;
              return (
                <li key={section.id}>
                  <a
                    href={`#${section.id}`}
                    aria-current={active ? "true" : undefined}
                    className={[
                      "-ml-px block border-l-2 py-1.5 pl-4 pr-3 text-sm transition-colors",
                      active
                        ? "border-indigo-500 font-medium text-indigo-600 dark:text-indigo-400"
                        : "border-transparent text-zinc-600 hover:border-zinc-300 hover:text-zinc-900 dark:text-zinc-400 dark:hover:border-white/20 dark:hover:text-zinc-100",
                    ].join(" ")}
                  >
                    {section.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>

      {/* Mobile: horizontal scroll list (sticky ใต้ navbar) */}
      <nav
        aria-label="สารบัญ Documentation"
        className="sticky top-16 z-40 -mx-4 mb-6 border-b border-zinc-200 bg-white/80 px-4 py-2 backdrop-blur-md sm:-mx-6 sm:px-6 lg:hidden dark:border-white/10 dark:bg-zinc-950/80"
      >
        <ul className="flex gap-1 overflow-x-auto">
          {sections.map((section) => {
            const active = activeId === section.id;
            return (
              <li key={section.id} className="shrink-0">
                <a
                  href={`#${section.id}`}
                  aria-current={active ? "true" : undefined}
                  className={[
                    "block rounded-full px-3 py-1.5 text-xs font-medium whitespace-nowrap transition-colors",
                    active
                      ? "bg-indigo-100 text-indigo-700 dark:bg-indigo-500/20 dark:text-indigo-300"
                      : "text-zinc-600 hover:bg-zinc-100 dark:text-zinc-400 dark:hover:bg-white/5",
                  ].join(" ")}
                >
                  {section.label}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}