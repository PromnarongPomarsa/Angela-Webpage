import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Angela — แปลภาษาบนหน้าจอเกมและวิชวลโนเวล",
  description:
    "Angela Translator — แปลภาษาจากเกม วิชวลโนเวล และสื่อบันเทิงด้วย OCR + AI (Ollama) เลือกพื้นที่ครั้งเดียว แปลต่อเนื่อง",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
