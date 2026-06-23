import type { Metadata } from "next";
import DocsSection from "../components/DocsSection";
import DocsSidebar, { type DocsSection as DocsSectionMeta } from "../components/DocsSidebar";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Image from "next/image";

// import Images RPG Game
import ScreenRPGGame1 from "@/public/Images/Screen_01.png";
import ScreenRPGGame2 from "@/public/Images/Screen_02.png";
import ScreenRPGGame3 from "@/public/Images/Screen_03.png";
import ScreenRPGGame4 from "@/public/Images/Screen_04.png";
import ScreenRPGGame5 from "@/public/Images/Screen_05.png";
import ScreenRPGGame6 from "@/public/Images/Screen_06.png";

const isImageRPGGame = [ScreenRPGGame1, ScreenRPGGame2, ScreenRPGGame3, ScreenRPGGame4, ScreenRPGGame5, ScreenRPGGame6]; 

// Import Images Visual Novels Game
import ScreenVisualGame1 from "@/public/Images/Screen_07.png";
import ScreenVisualGame2 from "@/public/Images/Screen_08.png";

const isImageVisualGame = [ScreenVisualGame1, ScreenVisualGame2];

// Import Images Document Case
import ScreenDoc1 from "@/public/Images/Screen_09.png";
import ScreenDoc2 from "@/public/Images/Screen_10.png";

const isImageDocumentCase = [ScreenDoc1, ScreenDoc2];


export const metadata: Metadata = {
  title: "Documentation — Angela Translator",
  description:
    "คู่มือการใช้งาน Angela Translator — วิธีติดตั้ง AI Providers, Hotkeys, Features และตัวอย่างการแปลเกม/วิชวลโนเวล",
};

const SECTIONS: DocsSectionMeta[] = [
  { id: "overview", label: "Overview" },
  { id: "quick-start", label: "Quick Start" },
  { id: "important-notes", label: "Important Notes" },
  { id: "ai-providers", label: "AI Providers" },
  { id: "hotkeys", label: "Hotkeys" },
  { id: "example", label: "Example" },
  { id: "installation", label: "การติดตั้ง" },
  { id: "features", label: "Features" },
  { id: "how-it-works", label: "How It Works" },
  { id: "technologies", label: "Technologies" },
  { id: "requirements", label: "Requirements" },
  { id: "use-cases", label: "Use Cases" },
];

const RELEASES_URL =
  "https://github.com/PromnarongPomarsa/Angela-Translator/releases";

function Kbd({ children }: { children: React.ReactNode }) {
  return (
    <kbd className="inline-flex items-center rounded-md border border-zinc-300 bg-zinc-100 px-2 py-0.5 font-mono text-xs font-semibold text-zinc-800 shadow-sm dark:border-white/15 dark:bg-white/10 dark:text-zinc-100">
      {children}
    </kbd>
  );
}

function WarningBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex gap-3 rounded-xl border border-pink-300/70 bg-pink-50/60 p-4 text-sm text-pink-900 dark:border-pink-500/30 dark:bg-pink-500/10 dark:text-pink-200">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="mt-0.5 h-5 w-5 shrink-0 text-pink-600 dark:text-pink-400"
        aria-hidden
      >
        <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
        <line x1="12" y1="9" x2="12" y2="13" />
        <line x1="12" y1="17" x2="12.01" y2="17" />
      </svg>
      <div className="flex-1">{children}</div>
    </div>
  );
}

function NoteBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex gap-3 rounded-xl border border-indigo-300/70 bg-indigo-50/60 p-4 text-sm text-indigo-900 dark:border-indigo-500/30 dark:bg-indigo-500/10 dark:text-indigo-200">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="mt-0.5 h-5 w-5 shrink-0 text-indigo-600 dark:text-indigo-400"
        aria-hidden
      >
        <circle cx="12" cy="12" r="10" />
        <line x1="12" y1="16" x2="12" y2="12" />
        <line x1="12" y1="8" x2="12.01" y2="8" />
      </svg>
      <div className="flex-1">{children}</div>
    </div>
  );
}

export default function DocsPage() {
  return (
    <>
      <Navbar />
      <main className="flex flex-1 flex-col">
        {/* Header */}
        <section className="relative overflow-hidden">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 brand-glow"
          />
          <div className="relative mx-auto max-w-6xl px-4 pt-16 pb-10 sm:px-6 sm:pt-20 sm:pb-12 lg:px-8">
            <p className="text-sm font-semibold tracking-wide text-indigo-600 uppercase dark:text-indigo-400">
              Documentation
            </p>
            <h1 className="mt-2 text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl dark:text-zinc-50">
              คู่มือการใช้งาน{" "}
              <span className="gradient-text">Angela Translator</span>
            </h1>
            <p className="mt-4 max-w-3xl text-lg leading-8 text-zinc-600 dark:text-zinc-300">
              เรียนรู้วิธีติดตั้ง ตั้งค่า AI Providers ใช้งาน Hotkeys
              และดูตัวอย่างการแปลเกม/วิชวลโนเวลแบบเรียลไทม์
            </p>
          </div>
        </section>

        {/* Content + Sidebar */}
        <div className="mx-auto w-full max-w-6xl px-4 pb-16 sm:px-6 sm:pb-20 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[16rem_minmax(0,1fr)] lg:gap-10">
            <DocsSidebar sections={SECTIONS} />

            <article className="min-w-0 max-w-3xl">
              {/* Overview */}
              <DocsSection
                id="overview"
                title="Overview"
                subtitle="Angela Translator คืออะไร"
              >
                <p>
                  โปรแกรมแปลข้อความจากหน้าจอแบบ Selection Translate
                  ที่ออกแบบมาสำหรับเกม Visual Novel, RPG, Emulator
                  หรือสื่อบันเทิงต่าง ๆ
                  โดยผู้ใช้สามารถเลือกเฉพาะพื้นที่บนหน้าจอที่ต้องการแปลได้โดยตรง
                </p>
                <p>
                  โปรแกรมจะจับข้อความจากพื้นที่ที่เลือกด้วยคีย์ลัด{" "}
                  <Kbd>Alt</Kbd> + <Kbd>S</Kbd>{" "}
                  เพื่อทำการ OCR
                  แล้วนำข้อความทั้งหมดในพื้นที่นั้นมารวมและเรียงต่อกันเป็นประโยค
                  ก่อนทำการแปล เพื่อให้ได้ผลลัพธ์ที่เหมาะกับบทสนทนาในเกม
                  หรือข้อความที่ถูกแบ่งหลายบรรทัดบนหน้าจอ
                </p>
                <p>
                  ตั้งแต่ Version 2.1.5 จะรองรับการแปลผ่าน AI หลายรูปแบบ ได้แก่
                </p>
                <ul className="ml-5 list-disc space-y-1 marker:text-indigo-500">
                  <li>Ollama (Cloud AI)</li>
                  <li>Gemini API</li>
                  <li>Groq API</li>
                </ul>
                <p>
                  ผู้ใช้งานสามารถเลือก Engine ที่ต้องการใช้งานได้ตามความเหมาะสม
                </p>

                <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-4 dark:border-white/10 dark:bg-white/[0.03]">
                  <p className="mb-2 text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                    คำศัพท์เฉพาะ
                  </p>
                  <ul className="ml-5 list-disc space-y-1 text-sm marker:text-indigo-500">
                    <li>
                      <strong>OCR</strong> — โปรแกรมที่ใช้อ่านข้อความจากรูปภาพ
                    </li>
                    <li>
                      <strong>Ollama</strong> — โปรแกรม Runtime
                      ที่ใช้สำหรับ Run AI ทั้งในรูปแบบ Local หรือ Cloud
                      ซึ่งในโปรเจคนี้จะนำมาใช้สำหรับการแปลเท่านั้น
                    </li>
                  </ul>
                </div>

                <div>
                  <p className="mb-2 font-semibold text-zinc-900 dark:text-zinc-100">
                    รองรับการแปล Dialog เกมแบบต่อเนื่อง
                  </p>
                  <ul className="ml-5 list-disc space-y-1 marker:text-indigo-500">
                    <li>เลือกพื้นที่ Subtitle หรือ Dialog เพียงครั้งเดียว</li>
                    <li>กดแปลต่อเนื่องได้ทันที</li>
                    <li>ไม่ต้องลากเลือกพื้นที่ใหม่ทุกประโยค</li>
                    <li>เหมาะสำหรับเกม Visual Novel และ RPG</li>
                  </ul>
                </div>
              </DocsSection>

              {/* Quick Start */}
              <DocsSection
                id="quick-start"
                title="Quick Start"
                subtitle="เริ่มใช้งานใน 7 ขั้นตอน"
              >
                <ol className="ml-5 list-decimal space-y-2 marker:font-semibold marker:text-indigo-500">
                  <li>
                    Download{" "}
                    <a
                      href={RELEASES_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300"
                    >
                      AngelaTranslator-Setup.exe
                    </a>{" "}
                    จาก Release
                  </li>
                  <li>
                    ติดตั้งโปรแกรม (Angela + Ollama){" "}
                    <span className="text-zinc-500">(ดูขั้นตอนในส่วน การติดตั้ง)</span>
                  </li>
                  <li>Login Ollama</li>
                  <li>เปิด Angela Translator</li>
                  <li>
                    กด <Kbd>Alt</Kbd> + <Kbd>S</Kbd> เพื่อเลือกพื้นที่
                  </li>
                  <li>
                    กด <Kbd>Alt</Kbd> + <Kbd>D</Kbd> เพื่อแปล
                  </li>
                </ol>
                <NoteBox>
                  <strong>หมายเหตุ:</strong>{" "}
                  AngelaTranslator-Setup.exe จะติดตั้งทั้งโปรแกรม Angela
                  และ Ollama ด้วย
                  แต่หากเครื่องของผู้ใช้งานมี Ollama อยู่แล้ว
                  จะข้ามขั้นตอนการติดตั้งในส่วนนี้ออกไป
                </NoteBox>
              </DocsSection>

              {/* Important Notes */}
              <DocsSection
                id="important-notes"
                title="Important Notes"
                subtitle="ข้อแนะนำเพื่อประสิทธิภาพที่ดีที่สุด"
              >
                <p>
                  โปรแกรมนี้ถูกออกแบบมาสำหรับการแปลข้อความเฉพาะส่วนของหน้าจอ
                  เน้นใช้ในการแปลเป็นประโยค Subtitle หรือ Dialog Sentence
                  จึงมีข้อแนะนำดังนี้
                </p>
                <ul className="ml-5 list-disc space-y-1 marker:text-indigo-500">
                  <li>ควรเลือกเฉพาะพื้นที่ข้อความที่ต้องการแปล</li>
                  <li>
                    หากใช้อ่านเอกสาร (Document / PDF / Website)
                    ควรเลือกแปลทีละ Paragraph
                  </li>
                  <li>
                    การเลือกพื้นที่ขนาดใหญ่เกินไปอาจทำให้ OCR
                    และการแปลมีความแม่นยำน้อยลง
                  </li>
                </ul>
                <WarningBox>
                  จำเป็นต้องเลือกภาษาต้นทางและภาษาที่ต้องการแปลให้ถูกต้องเสมอ
                </WarningBox>
                <WarningBox>
                  จำเป็นต้องอยู่ในสถานะ Login Ollama
                  แล้วก่อนใช้งาน Angela Translator ทุกครั้ง
                  หากไม่อยู่ในสถานะ Login Ollama
                  จะขึ้นข้อความว่า{" "}
                  <em>&ldquo;Oop! Something went wrong during translation&rdquo;</em>
                </WarningBox>
                <WarningBox>
                  หากใช้งานร่วมกับเกมที่รันในโหมด Full Screen
                  (เช่น Resident Evil, Apex Legends หรือเกม AAA อื่น ๆ)
                  โปรดเปลี่ยนโหมดการแสดงผลของเกมเป็น{" "}
                  <strong>Windowed</strong> หรือ{" "}
                  <strong>Borderless Windowed</strong>{" "}
                  เพื่อให้โปรแกรมทำงานได้อย่างถูกต้อง
                </WarningBox>
              </DocsSection>

              {/* AI Providers */}
              <DocsSection
                id="ai-providers"
                title="AI Providers"
                subtitle="Angela Translator รองรับการแปลผ่าน AI หลายรูปแบบ"
              >
                <div className="grid gap-4 sm:grid-cols-3">
                  {/* Ollama */}
                  <div className="rounded-xl border border-zinc-200 bg-white p-5 dark:border-white/10 dark:bg-white/[0.03]">
                    <p className="text-xs font-semibold tracking-wide text-indigo-600 uppercase dark:text-indigo-400">
                      Provider
                    </p>
                    <h3 className="mt-1 text-lg font-semibold text-zinc-900 dark:text-zinc-50">
                      Ollama
                    </h3>
                    <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">
                      Cloud AI
                    </p>
                    <ul className="mt-3 space-y-1.5 text-sm text-zinc-600 dark:text-zinc-400">
                      <li>• ทำงานบนเครื่อง Server ของ Ollama (ใช้ Model Cloud)</li>
                      <li>• ไม่จำเป็นต้องใช้ API Key</li>
                      <li>• เหมาะสำหรับผู้ที่ไม่ต้องการใช้ Key</li>
                    </ul>
                  </div>
                  {/* Groq */}
                  <div className="rounded-xl border border-zinc-200 bg-white p-5 dark:border-white/10 dark:bg-white/[0.03]">
                    <p className="text-xs font-semibold tracking-wide text-indigo-600 uppercase dark:text-indigo-400">
                      Provider
                    </p>
                    <h3 className="mt-1 text-lg font-semibold text-zinc-900 dark:text-zinc-50">
                      Groq
                    </h3>
                    <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">
                      Cloud AI
                    </p>
                    <ul className="mt-3 space-y-1.5 text-sm text-zinc-600 dark:text-zinc-400">
                      <li>• ใช้งานผ่าน Groq API</li>
                      <li>• ต้องสร้าง API Key ด้วยตนเอง</li>
                      <li>• จุดเด่นคือความเร็วในการตอบสนอง</li>
                    </ul>
                  </div>
                  {/* Gemini */}
                  <div className="rounded-xl border border-zinc-200 bg-white p-5 dark:border-white/10 dark:bg-white/[0.03]">
                    <p className="text-xs font-semibold tracking-wide text-indigo-600 uppercase dark:text-indigo-400">
                      Provider
                    </p>
                    <h3 className="mt-1 text-lg font-semibold text-zinc-900 dark:text-zinc-50">
                      Gemini
                    </h3>
                    <p className="mt-1 text-xs text-zinc-500 dark:text-zinc-400">
                      Cloud AI (Beta)
                    </p>
                    <ul className="mt-3 space-y-1.5 text-sm text-zinc-600 dark:text-zinc-400">
                      <li>• ใช้งานผ่าน Google Gemini API</li>
                      <li>• ต้องสร้าง API Key ด้วยตนเอง</li>
                      <li>
                        • ยังคงเป็น Beta
                        เนื่องจาก Models ที่ใช้ได้ดีมี Limit ที่ต่ำจนเกินไป
                      </li>
                    </ul>
                  </div>
                </div>
              </DocsSection>

              {/* Hotkeys */}
              <DocsSection
                id="hotkeys"
                title="Hotkeys"
                subtitle="คีย์ลัดสำหรับควบคุม Angela Translator"
              >
                <div className="overflow-hidden rounded-xl border border-zinc-200 dark:border-white/10">
                  <table className="w-full text-left text-sm">
                    <thead className="bg-zinc-50 dark:bg-white/[0.03]">
                      <tr>
                        <th className="px-4 py-3 font-semibold text-zinc-900 dark:text-zinc-100">
                          Action
                        </th>
                        <th className="px-4 py-3 font-semibold text-zinc-900 dark:text-zinc-100">
                          Shortcut
                        </th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-zinc-200 dark:divide-white/10">
                      <tr>
                        <td className="px-4 py-3 text-zinc-700 dark:text-zinc-300">
                          Select Screen Area
                        </td>
                        <td className="px-4 py-3">
                          <Kbd>Alt</Kbd> + <Kbd>S</Kbd>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-zinc-700 dark:text-zinc-300">
                          Translate Selected Area
                        </td>
                        <td className="px-4 py-3">
                          <Kbd>Alt</Kbd> + <Kbd>D</Kbd>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-zinc-700 dark:text-zinc-300">
                          Quick Language Change
                        </td>
                        <td className="px-4 py-3">
                          <Kbd>Alt</Kbd> + <Kbd>C</Kbd>
                        </td>
                      </tr>
                      <tr>
                        <td className="px-4 py-3 text-zinc-700 dark:text-zinc-300">
                          Exit or Cancel translation
                        </td>
                        <td className="px-4 py-3">
                          <Kbd>Esc</Kbd>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </DocsSection>

              {/* Example */}
              <DocsSection
                id="example"
                title="Example"
                subtitle="ตัวอย่างการใช้งานจริง"
              >
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                      RPG Game
                    </h3>
                    <p className="mt-1 text-sm">
                      แปลบทสนทนาและภารกิจในเกม RPG ได้แบบเรียลไทม์ —
                      รับรู้เป้าหมายภารกิจ และเข้าใจบทสนทนาได้ง่าย ๆ
                    </p>
                    <div className="mt-3 overflow-hidden rounded-xl border border-zinc-200 dark:border-white/10">
                      <Image
                        src={isImageRPGGame[0]}
                        alt="ตัวอย่างหน้าจอโปรแกรม Angela Translator"
                        className="w-full"
                        placeholder="blur"  // ได้เลยถ้า import แบบ static
                      />
                    </div>
                    <div className="mt-3 overflow-hidden rounded-xl border border-zinc-200 dark:border-white/10">
                      <Image
                        src={isImageRPGGame[1]}
                        alt="ตัวอย่างหน้าจอโปรแกรม Angela Translator"
                        className="w-full"
                        placeholder="blur"  // ได้เลยถ้า import แบบ static
                      />
                    </div>
                    <div className="mt-3 overflow-hidden rounded-xl border border-zinc-200 dark:border-white/10">
                      <Image
                        src={isImageRPGGame[2]}
                        alt="ตัวอย่างหน้าจอโปรแกรม Angela Translator"
                        className="w-full"
                        placeholder="blur"  // ได้เลยถ้า import แบบ static
                      />
                    </div>
                    <div className="mt-3 overflow-hidden rounded-xl border border-zinc-200 dark:border-white/10">
                      <Image
                        src={isImageRPGGame[3]}
                        alt="ตัวอย่างหน้าจอโปรแกรม Angela Translator"
                        className="w-full"
                        placeholder="blur"  // ได้เลยถ้า import แบบ static
                      />
                    </div>
                    <div className="mt-3 overflow-hidden rounded-xl border border-zinc-200 dark:border-white/10">
                      <Image
                        src={isImageRPGGame[4]}
                        alt="ตัวอย่างหน้าจอโปรแกรม Angela Translator"
                        className="w-full"
                        placeholder="blur"  // ได้เลยถ้า import แบบ static
                      />
                    </div>
                    <div className="mt-3 overflow-hidden rounded-xl border border-zinc-200 dark:border-white/10">
                      <Image
                        src={isImageRPGGame[5]}
                        alt="ตัวอย่างหน้าจอโปรแกรม Angela Translator"
                        className="w-full"
                        placeholder="blur"  // ได้เลยถ้า import แบบ static
                      />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                      Visual Novels Game
                    </h3>
                    <p className="mt-1 text-sm">
                      สืบสวนไปพร้อมกันกับตัวละคร — แปลบทสนทนายาว ๆ
                      ใน Visual Novel ได้ต่อเนื่อง
                    </p>
                    <div className="mt-3 overflow-hidden rounded-xl border border-zinc-200 dark:border-white/10">
                      <Image
                        src={isImageVisualGame[0]}
                        alt="ตัวอย่างหน้าจอโปรแกรม Angela Translator"
                        className="w-full"
                        placeholder="blur"  // ได้เลยถ้า import แบบ static
                      />
                    </div>
                    <div className="mt-3 overflow-hidden rounded-xl border border-zinc-200 dark:border-white/10">
                      <Image
                        src={isImageVisualGame[1]}
                        alt="ตัวอย่างหน้าจอโปรแกรม Angela Translator"
                        className="w-full"
                        placeholder="blur"  // ได้เลยถ้า import แบบ static
                      />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                      Document Case
                    </h3>
                    <p className="mt-1 text-sm">
                      อ่านเอกสารได้ง่าย ๆ — แปลทีละ Paragraph
                      เพื่อความแม่นยำ
                    </p>
                    <div className="mt-3 overflow-hidden rounded-xl border border-zinc-200 dark:border-white/10">
                      <Image
                        src={isImageDocumentCase[0]}
                        alt="ตัวอย่างหน้าจอโปรแกรม Angela Translator"
                        className="w-full"
                        placeholder="blur"  // ได้เลยถ้า import แบบ static
                      />
                    </div>
                    <div className="mt-3 overflow-hidden rounded-xl border border-zinc-200 dark:border-white/10">
                      <Image
                        src={isImageDocumentCase[1]}
                        alt="ตัวอย่างหน้าจอโปรแกรม Angela Translator"
                        className="w-full"
                        placeholder="blur"  // ได้เลยถ้า import แบบ static
                      />
                    </div>
                  </div>
                </div>
              </DocsSection>

              {/* Installation */}
              <DocsSection
                id="installation"
                title="การติดตั้ง"
                subtitle="ขั้นตอนการติดตั้ง Angela Translator + Ollama"
              >
                <ol className="ml-5 list-decimal space-y-2 marker:font-semibold marker:text-indigo-500">
                  <li>
                    ดาวน์โหลดไฟล์ติดตั้งจาก{" "}
                    <a
                      href={RELEASES_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-medium text-indigo-600 hover:text-indigo-500 dark:text-indigo-400 dark:hover:text-indigo-300"
                    >
                      Download
                    </a>
                  </li>
                  <li>เปิดไฟล์ติดตั้งและเลือกตำแหน่ง (Path) ที่ต้องการติดตั้ง</li>
                  <li>
                    หากมีหน้าติดตั้ง Ollama ปรากฏขึ้น
                    ให้ดำเนินการติดตั้ง Ollama <strong>(จำเป็น)</strong>
                  </li>
                  <li>
                    เมื่อติดตั้ง Ollama เสร็จแล้ว ให้เข้าสู่ระบบ (Login) Ollama{" "}
                    <strong>(จำเป็น)</strong>
                  </li>
                  <li>
                    เมื่อติดตั้ง Angela Translator เสร็จแล้ว
                    สามารถเปิดโปรแกรมและใช้งานได้ทันที
                  </li>
                </ol>

                <div className="rounded-xl border border-zinc-200 bg-zinc-50 p-4 dark:border-white/10 dark:bg-white/[0.03]">
                  <p className="mb-2 text-sm font-semibold text-zinc-900 dark:text-zinc-100">
                    ขั้นตอนการ Login ผ่านโปรแกรม Ollama
                  </p>
                  <ol className="ml-5 list-decimal space-y-1 text-sm marker:text-indigo-500">
                    <li>เปิดโปรแกรม Ollama</li>
                    <li>
                      แนะนำให้ Login ผ่าน Google (Sign in with Google)
                    </li>
                    <li>กด Connect device เพื่อเข้าใช้งานเป็นอันเสร็จ</li>
                  </ol>
                </div>

                <WarningBox>
                  <ul className="ml-5 list-disc space-y-1">
                    <li>จำเป็นต้องติดตั้ง Ollama ก่อนใช้งาน Angela Translator</li>
                    <li>
                      การ Login Ollama จะทำเพียงแค่ครั้งเดียว
                      และสามารถใช้ได้ตลอดจนกว่าจะ Logout Ollama ออก
                    </li>
                  </ul>
                </WarningBox>

                <div>
                  <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                    การใช้งาน Gemini หรือ Groq
                  </h3>
                  <p className="mt-1 text-sm">
                    หากต้องการใช้งาน Gemini หรือ Groq แทน Ollama
                  </p>
                  <ol className="mt-3 ml-5 list-decimal space-y-1 marker:text-indigo-500">
                    <li>สร้าง API Key จากผู้ให้บริการ</li>
                    <li>เปิด Angela Translator</li>
                    <li>ไปที่ Settings</li>
                    <li>เลือก AI Provider ที่ต้องการ</li>
                    <li>กรอก API Key</li>
                    <li>กด Save</li>
                  </ol>
                  <NoteBox>
                    API Key จะต้องสร้างและจัดการโดยผู้ใช้งานเอง
                  </NoteBox>
                </div>
              </DocsSection>

              {/* Features */}
              <DocsSection
                id="features"
                title="Features"
                subtitle="ฟีเจอร์ทั้งหมดของ Angela Translator"
              >
                <ul className="ml-5 list-disc space-y-2 marker:text-indigo-500">
                  <li>
                    <strong>Selection Translate</strong>{" "}
                    แบบเลือกพื้นที่บนหน้าจอ
                  </li>
                  <li>
                    <strong>OCR</strong> จับข้อความจากหน้าจอด้วย PaddleOCR
                  </li>
                  <li>
                    แปลข้อความด้วย AI Models ผ่าน Ollama, Gemini และ Groq
                  </li>
                  <li>สามารถสลับ AI Provider ได้ตามต้องการ</li>
                  <li>รองรับการใช้งานแบบ Hotkey</li>
                  <li>
                    หากใช้กับเกม Dialog subtitle
                    ให้เลือกพื้นที่ Selection เพียงแค่ครั้งเดียว
                    และกดแปลได้เลยตลอด ไม่ต้องเลือกใหม่
                  </li>
                  <li>
                    Run แบบ <strong>System Tray</strong>{" "}
                    เพื่อทำงานบนพื้นหลัง
                  </li>
                  <li>
                    การตั้งค่าสำหรับการ Run Program ทันทีเมื่อเปิดเครื่องคอมพิวเตอร์
                    (จำเป็นต้องกด Save เพื่อบันทึกการตั้งค่า)
                  </li>
                </ul>
              </DocsSection>

              {/* How It Works */}
              <DocsSection
                id="how-it-works"
                title="How It Works"
                subtitle="ขั้นตอนการทำงานของ Angela Translator"
              >
                <ol className="ml-5 list-decimal space-y-2 marker:font-semibold marker:text-indigo-500">
                  <li>ผู้ใช้เลือกพื้นที่บนหน้าจอ</li>
                  <li>โปรแกรมจับภาพเฉพาะบริเวณที่เลือก</li>
                  <li>ตรวจจับข้อความ (OCR)</li>
                  <li>
                    รวมข้อความทั้งหมดในพื้นที่ที่เลือกเข้าด้วยกัน
                  </li>
                  <li>ส่งข้อความไปยัง AI Model ผ่าน Ollama / Gemini / Groq</li>
                  <li>แสดงผลลัพธ์การแปลในกล่องข้อความ</li>
                </ol>
              </DocsSection>

              {/* Technologies */}
              <DocsSection
                id="technologies"
                title="Technologies"
                subtitle="เทคโนโลยีที่ใช้ในการพัฒนา"
              >
                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="rounded-xl border border-zinc-200 bg-white p-4 dark:border-white/10 dark:bg-white/[0.03]">
                    <p className="text-xs font-semibold tracking-wide text-indigo-600 uppercase dark:text-indigo-400">
                      OCR Engine
                    </p>
                    <p className="mt-1 font-semibold text-zinc-900 dark:text-zinc-100">
                      PaddleOCR
                    </p>
                  </div>
                  <div className="rounded-xl border border-zinc-200 bg-white p-4 dark:border-white/10 dark:bg-white/[0.03]">
                    <p className="text-xs font-semibold tracking-wide text-indigo-600 uppercase dark:text-indigo-400">
                      AI Runtime
                    </p>
                    <p className="mt-1 font-semibold text-zinc-900 dark:text-zinc-100">
                      Ollama
                    </p>
                  </div>
                  <div className="rounded-xl border border-zinc-200 bg-white p-4 sm:col-span-2 dark:border-white/10 dark:bg-white/[0.03]">
                    <p className="text-xs font-semibold tracking-wide text-indigo-600 uppercase dark:text-indigo-400">
                      UI Framework
                    </p>
                    <p className="mt-1 font-semibold text-zinc-900 dark:text-zinc-100">
                      WPF (.NET 10.0)
                    </p>
                  </div>
                </div>
              </DocsSection>

              {/* Requirements */}
              <DocsSection
                id="requirements"
                title="Requirements"
                subtitle="ความต้องการของระบบ"
              >
                <ul className="ml-5 list-disc space-y-1 marker:text-indigo-500">
                  <li>Windows</li>
                  <li>Ollama ที่ติดตั้งแล้ว</li>
                  <li>AI Model ที่ติดตั้งโดย Ollama</li>
                  <li>PaddleOCR dependencies</li>
                </ul>
              </DocsSection>

              {/* Use Cases */}
              <DocsSection
                id="use-cases"
                title="Example Use Cases"
                subtitle="กรณีการใช้งานที่เหมาะสม"
              >
                <ul className="ml-5 list-disc space-y-1 marker:text-indigo-500">
                  <li>Translate Visual Novel dialogue</li>
                  <li>Translate RPG in-game text</li>
                  <li>Emulator game translation</li>
                  <li>Reading Japanese/Korean game dialogue</li>
                  <li>Translating subtitles or Novel text from screen</li>
                </ul>
              </DocsSection>
            </article>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}