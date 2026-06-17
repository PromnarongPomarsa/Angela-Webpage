"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

type NavItem = {
  href: string;
  label: string;
  matchPrefix?: string;
};

const NAV_LINKS: NavItem[] = [
  { href: "/#features", label: "คุณสมบัติ", matchPrefix: "/" },
  { href: "/pricing", label: "Pricing", matchPrefix: "/pricing" },
];

const RELEASES_URL =
  "https://github.com/PromnarongPomarsa/Angela-Translator/releases";

function isActive(pathname: string, item: NavItem) {
  if (item.matchPrefix === "/") {
    // คุณสมบัติ: active เฉพาะหน้า /
    return pathname === "/";
  }
  return item.matchPrefix
    ? pathname === item.matchPrefix || pathname.startsWith(`${item.matchPrefix}/`)
    : pathname === item.href;
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-white/70 backdrop-blur-md dark:bg-zinc-950/70">
      <nav
        aria-label="หลัก"
        className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8"
      >
        {/* โลโก้ */}
        <Link
          href="/"
          className="group flex items-center gap-2 font-semibold text-zinc-900 dark:text-zinc-50"
        >
          <span
            aria-hidden
            className="flex h-8 w-8 items-center justify-center rounded-lg gradient-bg text-white shadow-md shadow-indigo-500/30 transition-transform group-hover:scale-105"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4"
            >
              <path d="M3 5h8" />
              <path d="M7 3v2" />
              <path d="M5 5c0 4 3 6 6 6" />
              <path d="M11 19l4-10 4 10" />
              <path d="M12.5 16h5" />
            </svg>
          </span>
          <span className="text-lg tracking-tight">Angela</span>
        </Link>

        {/* เมนูเดสก์ท็อป */}
        <ul className="hidden items-center gap-1 md:flex">
          {NAV_LINKS.map((link) => {
            const active = isActive(pathname, link);
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={[
                    "rounded-md px-3 py-2 text-sm font-medium transition-colors",
                    active
                      ? "text-indigo-600 dark:text-indigo-400"
                      : "text-zinc-700 hover:bg-indigo-50 hover:text-indigo-600 dark:text-zinc-300 dark:hover:bg-white/5 dark:hover:text-indigo-300",
                  ].join(" ")}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* ปุ่ม CTA + hamburger */}
        <div className="flex items-center gap-2">
          <Link
            href={RELEASES_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden text-sm font-medium text-zinc-700 transition-colors hover:text-indigo-600 sm:inline-block dark:text-zinc-300 dark:hover:text-indigo-400"
          >
            GitHub
          </Link>
          <Link
            href="/login"
            className="inline-flex items-center rounded-full gradient-bg px-4 py-2 text-sm font-semibold text-white shadow-md shadow-indigo-500/30 transition-all hover:shadow-lg hover:shadow-indigo-500/40"
          >
            Sign in
          </Link>
          <button
            type="button"
            onClick={() => setIsOpen((v) => !v)}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? "ปิดเมนู" : "เปิดเมนู"}
            className="inline-flex h-10 w-10 items-center justify-center rounded-md text-zinc-700 transition-colors hover:bg-zinc-100 md:hidden dark:text-zinc-300 dark:hover:bg-white/5"
          >
            {isOpen ? (
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
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
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
                <line x1="3" y1="6" x2="21" y2="6" />
                <line x1="3" y1="12" x2="21" y2="12" />
                <line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* เมนูมือถือ */}
      {isOpen && (
        <div
          id="mobile-menu"
          className="border-t border-zinc-200 bg-white md:hidden dark:border-white/10 dark:bg-zinc-950"
        >
          <ul className="space-y-1 px-4 py-3">
            {NAV_LINKS.map((link) => {
              const active = isActive(pathname, link);
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    aria-current={active ? "page" : undefined}
                    className={[
                      "block rounded-md px-3 py-2 text-base font-medium",
                      active
                        ? "bg-indigo-50 text-indigo-600 dark:bg-indigo-500/10 dark:text-indigo-400"
                        : "text-zinc-700 hover:bg-indigo-50 hover:text-indigo-600 dark:text-zinc-300 dark:hover:bg-white/5 dark:hover:text-indigo-300",
                    ].join(" ")}
                  >
                    {link.label}
                  </Link>
                </li>
              );
            })}
            <li className="pt-2">
              <Link
                href={RELEASES_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="block rounded-md px-3 py-2 text-base font-medium text-zinc-700 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-white/5"
              >
                GitHub
              </Link>
            </li>
            <li className="pt-2">
              <Link
                href="/login"
                onClick={() => setIsOpen(false)}
                className="block rounded-full gradient-bg px-4 py-2.5 text-center text-sm font-semibold text-white shadow-md shadow-indigo-500/30"
              >
                Sign in
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
