import type { Metadata } from "next";
import Link from "next/link";
import LoginForm from "../components/LoginForm";

export const metadata: Metadata = {
  title: "เข้าสู่ระบบ — Angela",
  description: "เข้าสู่ระบบ Angela เพื่อใช้งาน Pro features และจัดการบัญชีของคุณ",
};

export default function LoginPage() {
  return (
    <div className="min-h-[calc(100vh-4rem)]">
      <div className="grid min-h-[calc(100vh-4rem)] lg:grid-cols-2">
        {/* Left: branding */}
        <div className="relative hidden overflow-hidden lg:block">
          <div
            aria-hidden
            className="absolute inset-0 gradient-bg"
          />
          <div
            aria-hidden
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage:
                "radial-gradient(circle at 20% 20%, rgba(255,255,255,0.3), transparent 50%), radial-gradient(circle at 80% 80%, rgba(255,255,255,0.2), transparent 50%)",
            }}
          />
          <div
            aria-hidden
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          />

          <div className="relative flex h-full flex-col justify-between p-12 text-white">
            <Link href="/" className="inline-flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/15 backdrop-blur-sm">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4"
                  aria-hidden
                >
                  <path d="M3 5h8" />
                  <path d="M7 3v2" />
                  <path d="M5 5c0 4 3 6 6 6" />
                  <path d="M11 19l4-10 4 10" />
                  <path d="M12.5 16h5" />
                </svg>
              </span>
              <span className="text-lg font-semibold tracking-tight">
                Angela
              </span>
            </Link>

            <div className="max-w-md">
              <blockquote className="space-y-4">
                <p className="text-2xl font-medium leading-snug">
                  &ldquo;Angela ช่วยให้ผมอ่านวิชวลโนเวลญี่ปุ่นได้โดยไม่ต้องวุ่นวายกับการแป้นภาพหน้าจออีก&rdquo;
                </p>
                <footer className="flex items-center gap-3 text-sm text-white/80">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 text-sm font-semibold">
                    P
                  </span>
                  <div>
                    <div className="font-semibold text-white">
                      Promnarong P.
                    </div>
                    <div className="text-white/70">ผู้พัฒนา Angela Translator</div>
                  </div>
                </footer>
              </blockquote>
            </div>

            <div className="flex items-center gap-6 text-xs text-white/70">
              <span>✓ แปลไม่จำกัด</span>
              <span>✓ ทุกภาษา</span>
              <span>✓ ข้อมูลอยู่ในเครื่อง</span>
            </div>
          </div>
        </div>

        {/* Right: form */}
        <div className="flex items-center justify-center px-4 py-12 sm:px-6 lg:px-12">
          <div className="w-full max-w-sm">
            <div className="lg:hidden mb-8 text-center">
              <Link
                href="/"
                className="inline-flex items-center gap-2 text-zinc-900 dark:text-zinc-50"
              >
                <span className="flex h-8 w-8 items-center justify-center rounded-lg gradient-bg text-white">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-4 w-4"
                    aria-hidden
                  >
                    <path d="M3 5h8" />
                    <path d="M7 3v2" />
                    <path d="M5 5c0 4 3 6 6 6" />
                    <path d="M11 19l4-10 4 10" />
                    <path d="M12.5 16h5" />
                  </svg>
                </span>
                <span className="text-lg font-semibold tracking-tight">
                  Angela
                </span>
              </Link>
            </div>

            <div className="mb-8 text-center lg:text-left">
              <h1 className="text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl dark:text-zinc-50">
                ยินดีต้อนรับกลับมา
              </h1>
              <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                เข้าสู่ระบบเพื่อใช้งาน Angela Pro
              </p>
            </div>

            <LoginForm />
          </div>
        </div>
      </div>
    </div>
  );
}
