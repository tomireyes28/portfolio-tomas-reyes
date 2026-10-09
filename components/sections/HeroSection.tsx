"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import {
  ArrowUpRight,
  Terminal,
  Activity,
  Layers,
  Code2,
  Cpu,
  CheckCircle2,
  Copy,
  Check,
  Zap,
} from "lucide-react";

export default function HeroSection() {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<"profile" | "metrics" | "sandbox">("profile");
  const [copied, setCopied] = useState(false);
  const [interactiveCounter, setInteractiveCounter] = useState(1);
  const [fastMode, setFastMode] = useState(true);

  const copyCode = () => {
    navigator.clipboard.writeText(`const developer = {
  name: "Tomás Reyes",
  role: "Full Stack & Frontend Engineer",
  stack: ["Next.js 16", "React 19", "NestJS", "TypeScript", "Tailwind 4"],
  status: "available_for_hire",
  location: "Buenos Aires, Argentina"
};`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section
      id="top"
      className="relative flex min-h-[90vh] items-center px-4 pt-28 pb-14 md:pt-36 md:pb-20"
    >
      <div className="mx-auto w-full max-w-6xl">
        <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-8">
          {/* Left Column: Bold Asymmetric Value Proposition (7 cols) */}
          <div className="space-y-6 lg:col-span-7">
            {/* System Status Pill */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2.5 rounded-md border border-[#27272a] bg-[#111114] px-3 py-1 font-mono text-[11px] text-zinc-300"
            >
              <span className="flex h-2 w-2 relative">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#d4ff00] opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#d4ff00]" />
              </span>
              <span className="font-semibold text-zinc-200">SYS.STATUS: OPERATIONAL</span>
              <span className="text-zinc-600">/</span>
              <span className="text-zinc-400">BUENOS AIRES</span>
            </motion.div>

            {/* Main Editorial Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-3"
            >
              <h1 className="text-4xl font-black tracking-tight text-white sm:text-6xl md:text-7xl leading-[1.05]">
                ENGINEERED <br />
                <span className="text-[#d4ff00] font-mono">//</span> FOR SPEED. <br />
                <span className="text-zinc-400">BUILT FOR PRODUCTS.</span>
              </h1>
              <p className="max-w-xl text-base text-zinc-400 sm:text-lg leading-relaxed pt-1">
                Hola, soy <span className="font-semibold text-zinc-100">Tomás Reyes</span>. Desarrollador Full Stack & Frontend especializado en crear arquitecturas robustas y aplicaciones web interactivas con{" "}
                <span className="font-mono text-xs text-[#d4ff00] bg-[#d4ff00]/10 px-1.5 py-0.5 rounded border border-[#d4ff00]/20">
                  Next.js 16
                </span>
                ,{" "}
                <span className="font-mono text-xs text-[#d4ff00] bg-[#d4ff00]/10 px-1.5 py-0.5 rounded border border-[#d4ff00]/20">
                  React 19
                </span>{" "}
                y{" "}
                <span className="font-mono text-xs text-[#d4ff00] bg-[#d4ff00]/10 px-1.5 py-0.5 rounded border border-[#d4ff00]/20">
                  NestJS
                </span>
                .
              </p>
            </motion.div>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-wrap items-center gap-3 pt-2"
            >
              <Link
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-lg bg-[#d4ff00] px-6 py-3 font-mono text-xs font-bold uppercase tracking-wider text-black hard-shadow-zinc transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#bcf000] cursor-pointer"
              >
                <span>{t.hero.btnPrimary}</span>
                <ArrowUpRight
                  size={15}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>

              <Link
                href="#contact"
                className="inline-flex items-center gap-2 rounded-lg border border-[#27272a] bg-[#121215] px-6 py-3 font-mono text-xs font-semibold uppercase tracking-wider text-zinc-300 transition-all duration-200 hover:border-[#d4ff00] hover:text-[#d4ff00] cursor-pointer"
              >
                <span>{t.hero.btnSecondary}</span>
              </Link>
            </motion.div>

            {/* Spec HUD Bar */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="grid grid-cols-3 gap-2 pt-4 border-t border-[#1e1e22] max-w-xl"
            >
              <div className="space-y-0.5">
                <span className="font-mono text-[10px] text-zinc-500 uppercase">Proyectos</span>
                <p className="font-mono text-sm font-bold text-zinc-100">+12 en Prod</p>
              </div>
              <div className="space-y-0.5">
                <span className="font-mono text-[10px] text-zinc-500 uppercase">Arquitectura</span>
                <p className="font-mono text-sm font-bold text-zinc-100">Full Stack</p>
              </div>
              <div className="space-y-0.5">
                <span className="font-mono text-[10px] text-zinc-500 uppercase">Mindset</span>
                <p className="font-mono text-sm font-bold text-[#d4ff00]">Founder & UX</p>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Interactive Dev Sandbox / Terminal (5 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="overflow-hidden rounded-xl border border-[#27272a] bg-[#0e0e11] shadow-2xl">
              {/* Terminal Title Bar */}
              <div className="flex items-center justify-between border-b border-[#222226] bg-[#131317] px-4 py-2.5">
                <div className="flex items-center gap-2">
                  <div className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
                  <div className="h-2.5 w-2.5 rounded-full bg-yellow-500/80" />
                  <div className="h-2.5 w-2.5 rounded-full bg-green-500/80" />
                  <span className="ml-2 font-mono text-[11px] text-zinc-400">
                    tomas@dev: ~/stack
                  </span>
                </div>

                <button
                  onClick={copyCode}
                  title="Copiar código"
                  className="flex items-center gap-1 rounded border border-[#27272a] bg-[#1a1a1f] px-2 py-1 font-mono text-[10px] text-zinc-400 hover:border-[#d4ff00]/60 hover:text-[#d4ff00] transition cursor-pointer"
                >
                  {copied ? <Check size={12} className="text-[#d4ff00]" /> : <Copy size={12} />}
                  <span>{copied ? "COPIED" : "COPY"}</span>
                </button>
              </div>

              {/* Terminal Tabs */}
              <div className="flex border-b border-[#222226] bg-[#0c0c0f]">
                <button
                  onClick={() => setActiveTab("profile")}
                  className={`flex items-center gap-1.5 border-r border-[#222226] px-3.5 py-2 font-mono text-[11px] transition cursor-pointer ${
                    activeTab === "profile"
                      ? "bg-[#0e0e11] text-[#d4ff00] font-semibold border-b-2 border-b-[#d4ff00]"
                      : "text-zinc-500 hover:text-zinc-300"
                  }`}
                >
                  <Code2 size={13} />
                  <span>profile.ts</span>
                </button>
                <button
                  onClick={() => setActiveTab("metrics")}
                  className={`flex items-center gap-1.5 border-r border-[#222226] px-3.5 py-2 font-mono text-[11px] transition cursor-pointer ${
                    activeTab === "metrics"
                      ? "bg-[#0e0e11] text-[#d4ff00] font-semibold border-b-2 border-b-[#d4ff00]"
                      : "text-zinc-500 hover:text-zinc-300"
                  }`}
                >
                  <Activity size={13} />
                  <span>benchmarks.sh</span>
                </button>
                <button
                  onClick={() => setActiveTab("sandbox")}
                  className={`flex items-center gap-1.5 px-3.5 py-2 font-mono text-[11px] transition cursor-pointer ${
                    activeTab === "sandbox"
                      ? "bg-[#0e0e11] text-[#d4ff00] font-semibold border-b-2 border-b-[#d4ff00]"
                      : "text-zinc-500 hover:text-zinc-300"
                  }`}
                >
                  <Zap size={13} />
                  <span>playground.tsx</span>
                </button>
              </div>

              {/* Terminal Body with Dynamic Tabs */}
              <div className="p-5 font-mono text-xs leading-relaxed min-h-[290px] flex flex-col justify-between">
                <AnimatePresence mode="wait">
                  {activeTab === "profile" && (
                    <motion.div
                      key="profile"
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.2 }}
                      className="space-y-1.5 text-zinc-300"
                    >
                      <p className="text-zinc-500">{"// Developer Specification Object"}</p>
                      <p>
                        <span className="text-purple-400">const</span>{" "}
                        <span className="text-[#d4ff00]">engineer</span> = {"{"}
                      </p>
                      <p className="pl-4">
                        <span className="text-zinc-400">name:</span>{" "}
                        <span className="text-emerald-300">&quot;Tomás Reyes&quot;</span>,
                      </p>
                      <p className="pl-4">
                        <span className="text-zinc-400">focus:</span>{" "}
                        <span className="text-emerald-300">&quot;High-Performance Web & UX&quot;</span>,
                      </p>
                      <p className="pl-4">
                        <span className="text-zinc-400">coreStack:</span> [
                      </p>
                      <p className="pl-8 text-[#d4ff00]">
                        &quot;Next.js 16&quot;, &quot;React 19&quot;, &quot;NestJS&quot;, &quot;TypeScript&quot;
                      </p>
                      <p className="pl-4">],</p>
                      <p className="pl-4">
                        <span className="text-zinc-400">status:</span>{" "}
                        <span className="text-emerald-400">&quot;ready_to_build&quot;</span>
                      </p>
                      <p>{"};"}</p>
                    </motion.div>
                  )}

                  {activeTab === "metrics" && (
                    <motion.div
                      key="metrics"
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.2 }}
                      className="space-y-3"
                    >
                      <div className="space-y-1">
                        <div className="flex justify-between text-zinc-400 text-[11px]">
                          <span>LIGHTHOUSE PERFORMANCE</span>
                          <span className="text-[#d4ff00] font-bold">100 / 100</span>
                        </div>
                        <div className="h-1.5 w-full bg-zinc-800 rounded-full overflow-hidden">
                          <div className="h-full bg-[#d4ff00] w-[100%]" />
                        </div>
                      </div>

                      <div className="space-y-1">
                        <div className="flex justify-between text-zinc-400 text-[11px]">
                          <span>TURBOPACK COMPILE LATENCY</span>
                          <span className="text-emerald-400 font-bold">&lt; 150ms</span>
                        </div>
                        <div className="h-1.5 w-full bg-zinc-800 rounded-full overflow-hidden">
                          <div className="h-full bg-emerald-400 w-[95%]" />
                        </div>
                      </div>

                      <div className="space-y-1">
                        <div className="flex justify-between text-zinc-400 text-[11px]">
                          <span>TYPE SAFETY & ARCHITECTURE</span>
                          <span className="text-purple-400 font-bold">STRICT TS</span>
                        </div>
                        <div className="h-1.5 w-full bg-zinc-800 rounded-full overflow-hidden">
                          <div className="h-full bg-purple-400 w-[98%]" />
                        </div>
                      </div>

                      <p className="text-[11px] text-zinc-500 pt-1">
                        ✓ Production-tested on Vercel Edge Runtime.
                      </p>
                    </motion.div>
                  )}

                  {activeTab === "sandbox" && (
                    <motion.div
                      key="sandbox"
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -6 }}
                      transition={{ duration: 0.2 }}
                      className="space-y-4"
                    >
                      <p className="text-zinc-400 text-[11px]">
                        Interactúa con este micro-componente reactivo:
                      </p>

                      <div className="rounded-lg border border-[#27272a] bg-[#121216] p-3 space-y-3">
                        <div className="flex items-center justify-between">
                          <span className="text-xs text-zinc-300">Turbomode State:</span>
                          <button
                            onClick={() => setFastMode(!fastMode)}
                            className={`rounded px-2.5 py-1 text-[11px] font-bold transition cursor-pointer ${
                              fastMode
                                ? "bg-[#d4ff00] text-black"
                                : "bg-zinc-800 text-zinc-400"
                            }`}
                          >
                            {fastMode ? "MAX SPEED ON" : "STANDARD"}
                          </button>
                        </div>

                        <div className="flex items-center justify-between">
                          <span className="text-xs text-zinc-300">Interactions Clicked:</span>
                          <button
                            onClick={() => setInteractiveCounter((prev) => prev + 1)}
                            className="rounded border border-[#333338] bg-zinc-800 px-3 py-1 text-xs font-bold text-white hover:border-[#d4ff00] hover:text-[#d4ff00] transition cursor-pointer"
                          >
                            Increment: {interactiveCounter}x
                          </button>
                        </div>
                      </div>

                      <p className="text-[10px] text-zinc-500">
                        Rendered with React 19 Client Hydration.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Bottom CLI Prompt */}
                <div className="pt-4 border-t border-[#1e1e22] text-zinc-500 text-[11px] flex items-center gap-2">
                  <span className="text-[#d4ff00]">▲</span>
                  <span>ready for deployment</span>
                  <span className="animate-pulse text-[#d4ff00]">_</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}