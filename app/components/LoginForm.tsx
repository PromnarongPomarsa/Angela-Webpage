"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import { useRouter } from 'next/navigation';
import { useNavigate } from 'react-router-dom';

type Status = "idle" | "loading" | "error";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [remember, setRemember] = useState(false);
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const router = useRouter();

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setErrorMessage(null);

    // Validation: email format
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      setStatus("error");
      setErrorMessage("รูปแบบอีเมลไม่ถูกต้อง");
      return;
    }

    // Validation: password length
    if (password.length < 6) {
      setStatus("error");
      setErrorMessage("รหัสผ่านต้องมีอย่างน้อย 6 ตัวอักษร");
      return;
    }

    // Mock submit: simulate network delay
    setStatus("loading");
    window.setTimeout(() => {
      setStatus("idle");
      router.push('/'); // Navigate to the Feature page after successful login
      // window.alert(
      //   "🚧 Demo mode: ยังไม่ได้เชื่อมต่อ backend\nฟอร์มนี้ใช้สำหรับทดสอบ UI เท่านั้น"
      // );
    }, 1200);
  }

  function handleOAuth(provider: "github" | "google") {
    window.alert(
      `🚧 Demo mode: ปุ่ม ${provider === "github" ? "GitHub" : "Google"} ยังไม่ได้เชื่อมต่อ`
    );
  }

  const isLoading = status === "loading";

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-5">
      {/* Email */}
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-zinc-800 dark:text-zinc-200"
        >
          อีเมล
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          className="mt-1.5 block w-full rounded-lg border border-zinc-300 bg-white px-3.5 py-2.5 text-sm text-zinc-900 placeholder-zinc-400 transition-colors focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 focus:outline-none dark:border-white/15 dark:bg-white/5 dark:text-zinc-50 dark:placeholder-zinc-500"
        />
      </div>

      {/* Password */}
      <div>
        <div className="flex items-center justify-between">
          <label
            htmlFor="password"
            className="block text-sm font-medium text-zinc-800 dark:text-zinc-200"
          >
            รหัสผ่าน
          </label>
          <Link
            href="#"
            className="text-xs font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300"
          >
            ลืมรหัสผ่าน?
          </Link>
        </div>
        <div className="relative mt-1.5">
          <input
            id="password"
            name="password"
            type={showPassword ? "text" : "password"}
            autoComplete="current-password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
            className="block w-full rounded-lg border border-zinc-300 bg-white px-3.5 py-2.5 pr-10 text-sm text-zinc-900 placeholder-zinc-400 transition-colors focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20 focus:outline-none dark:border-white/15 dark:bg-white/5 dark:text-zinc-50 dark:placeholder-zinc-500"
          />
          <button
            type="button"
            onClick={() => setShowPassword((v) => !v)}
            aria-label={showPassword ? "ซ่อนรหัสผ่าน" : "แสดงรหัสผ่าน"}
            className="absolute inset-y-0 right-0 flex items-center px-3 text-zinc-400 transition-colors hover:text-zinc-600 dark:hover:text-zinc-300"
          >
            {showPassword ? (
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
                <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" />
                <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" />
                <line x1="1" y1="1" x2="23" y2="23" />
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
                className="h-4 w-4"
                aria-hidden
              >
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Remember */}
      <div className="flex items-center">
        <input
          id="remember"
          name="remember"
          type="checkbox"
          checked={remember}
          onChange={(e) => setRemember(e.target.checked)}
          className="h-4 w-4 rounded border-zinc-300 text-indigo-600 focus:ring-indigo-500 dark:border-white/15 dark:bg-white/5"
        />
        <label
          htmlFor="remember"
          className="ml-2 text-sm text-zinc-700 dark:text-zinc-300"
        >
          จำฉันไว้ในระบบ
        </label>
      </div>

      {/* Error */}
      {errorMessage && (
        <div
          role="alert"
          className="rounded-lg border border-red-200 bg-red-50 px-3.5 py-2.5 text-sm text-red-700 dark:border-red-500/30 dark:bg-red-500/10 dark:text-red-300"
        >
          {errorMessage}
        </div>
      )}

      {/* Submit */}
      <button
        type="submit"
        disabled={isLoading}
        className="inline-flex w-full items-center justify-center gap-2 rounded-lg gradient-bg px-4 py-2.5 text-sm font-semibold text-white shadow-md shadow-indigo-500/30 transition-all hover:shadow-lg hover:shadow-indigo-500/40 disabled:cursor-not-allowed disabled:opacity-70"
      >
        {isLoading && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="h-4 w-4 animate-spin"
            aria-hidden
          >
            <path d="M21 12a9 9 0 1 1-6.219-8.56" />
          </svg>
        )}
        {isLoading ? "กำลังเข้าสู่ระบบ..." : "เข้าสู่ระบบ"}
      </button>

      {/* Divider */}
      <div className="relative">
        <div
          aria-hidden
          className="absolute inset-0 flex items-center"
        >
          <div className="w-full border-t border-zinc-200 dark:border-white/10" />
        </div>
        <div className="relative flex justify-center text-xs">
          <span className="bg-white px-3 text-zinc-500 dark:bg-zinc-950 dark:text-zinc-400">
            หรือดำเนินการต่อด้วย
          </span>
        </div>
      </div>

      {/* OAuth buttons */}
      <div className="grid grid-cols-2 gap-3">
        <button
          type="button"
          onClick={() => handleOAuth("github")}
          className="inline-flex items-center justify-center gap-2 rounded-lg border border-zinc-300 bg-white px-3 py-2.5 text-sm font-medium text-zinc-800 transition-colors hover:bg-zinc-50 dark:border-white/15 dark:bg-white/5 dark:text-zinc-100 dark:hover:bg-white/10"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="h-4 w-4"
            aria-hidden
          >
            <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56v-2.18c-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.05-.72.08-.7.08-.7 1.16.08 1.78 1.2 1.78 1.2 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.47.11-3.05 0 0 .97-.31 3.18 1.18a11.06 11.06 0 0 1 5.79 0c2.21-1.49 3.18-1.18 3.18-1.18.63 1.58.23 2.76.11 3.05.74.81 1.19 1.84 1.19 3.1 0 4.43-2.69 5.4-5.25 5.69.41.36.78 1.06.78 2.14v3.17c0 .31.21.67.8.56C20.21 21.39 23.5 17.08 23.5 12 23.5 5.65 18.35.5 12 .5Z" />
          </svg>
          GitHub
        </button>
        <button
          type="button"
          onClick={() => handleOAuth("google")}
          className="inline-flex items-center justify-center gap-2 rounded-lg border border-zinc-300 bg-white px-3 py-2.5 text-sm font-medium text-zinc-800 transition-colors hover:bg-zinc-50 dark:border-white/15 dark:bg-white/5 dark:text-zinc-100 dark:hover:bg-white/10"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="h-4 w-4"
            aria-hidden
          >
            <path
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              fill="#4285F4"
            />
            <path
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.99.66-2.25 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              fill="#34A853"
            />
            <path
              d="M5.84 14.1c-.22-.66-.35-1.36-.35-2.1s.13-1.44.35-2.1V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.83z"
              fill="#FBBC05"
            />
            <path
              d="M12 5.38c1.62 0 3.06.56 4.2 1.65l3.15-3.15C17.46 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.83C6.71 7.31 9.14 5.38 12 5.38z"
              fill="#EA4335"
            />
          </svg>
          Google
        </button>
      </div>

      {/* Footer */}
      <p className="text-center text-sm text-zinc-600 dark:text-zinc-400">
        ยังไม่มีบัญชี?{" "}
        <Link
          href="/pricing"
          className="font-semibold text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300"
        >
          ดูแผนราคา
        </Link>
      </p>
    </form>
  );
}
