import Link from "next/link";

const REPO_URL = "https://github.com/PromnarongPomarsa/Angela-Translator";
const RELEASES_URL =
  "https://github.com/PromnarongPomarsa/Angela-Translator/releases";

export default function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-zinc-50/60 py-10 dark:border-white/5 dark:bg-white/[0.02]">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div className="text-center sm:text-left">
            <div className="flex items-center justify-center gap-2 sm:justify-start">
              <span
                aria-hidden
                className="flex h-7 w-7 items-center justify-center rounded-md gradient-bg text-white"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-3.5 w-3.5"
                  aria-hidden
                >
                  <path d="M3 5h8" />
                  <path d="M7 3v2" />
                  <path d="M5 5c0 4 3 6 6 6" />
                  <path d="M11 19l4-10 4 10" />
                  <path d="M12.5 16h5" />
                </svg>
              </span>
              <span className="text-base font-semibold text-zinc-900 dark:text-zinc-50">
                Angela
              </span>
            </div>
            <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
              Screen Translator สำหรับเกม วิชวลโนเวล และสื่อบันเทิง
            </p>
            <p className="mt-1 text-xs text-zinc-400 dark:text-zinc-500">
              by{" "}
              <Link
                href={REPO_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-indigo-600 dark:hover:text-indigo-400"
              >
                @PromnarongPomarsa
              </Link>{" "}
              · Open Source (ดู LICENSE ใน repo)
            </p>
          </div>

          <div className="flex flex-col items-center gap-3 sm:items-end">
            <ul className="flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm">
              <li>
                <Link
                  href="/pricing"
                  className="text-zinc-600 hover:text-indigo-600 dark:text-zinc-400 dark:hover:text-indigo-400"
                >
                  Pricing
                </Link>
              </li>
              <li>
                <Link
                  href="/login"
                  className="text-zinc-600 hover:text-indigo-600 dark:text-zinc-400 dark:hover:text-indigo-400"
                >
                  Sign in
                </Link>
              </li>
              <li>
                <Link
                  href={REPO_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-600 hover:text-indigo-600 dark:text-zinc-400 dark:hover:text-indigo-400"
                >
                  GitHub
                </Link>
              </li>
              <li>
                <Link
                  href={RELEASES_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-zinc-600 hover:text-indigo-600 dark:text-zinc-400 dark:hover:text-indigo-400"
                >
                  Releases
                </Link>
              </li>
            </ul>
            <p className="text-xs text-zinc-400 dark:text-zinc-500">
              © {new Date().getFullYear()} Angela Translator
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
