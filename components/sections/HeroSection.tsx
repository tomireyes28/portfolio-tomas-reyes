"use client";

import { motion, type Variants } from "framer-motion";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";
import { ArrowUpRight, Sparkles, Code2, Layers, Cpu, FileDown, CheckCircle2 } from "lucide-react";
import SpotlightCard from "@/components/ui/SpotlightCard";

export default function HeroSection() {
  const { t } = useLanguage();

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { y: 24, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section
      id="top"
      className="relative flex min-h-[85vh] items-center justify-center px-4 pt-24 pb-12 md:pt-32 md:pb-16"
    >
      <motion.div
        className="mx-auto flex max-w-5xl flex-col items-center text-center gap-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* 1. Live Availability Badge */}
        <motion.div variants={itemVariants}>
          <div className="inline-flex items-center gap-2.5 rounded-full border border-sky-500/30 bg-slate-900/80 px-4 py-1.5 text-xs font-medium text-slate-300 shadow-[0_0_20px_rgba(56,189,248,0.15)] backdrop-blur-md">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500"></span>
            </span>
            <span>{t.hero.availability}</span>
          </div>
        </motion.div>

        {/* 2. Main Headline with Radiant Gradient */}
        <motion.div variants={itemVariants} className="space-y-3">
          <p className="text-xs md:text-sm font-mono tracking-widest uppercase text-sky-400 font-semibold">
            {t.hero.role}
          </p>
          <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-6xl md:text-7xl lg:text-7xl leading-[1.1] max-w-4xl mx-auto">
            {t.hero.titlePart1}{" "}
            <span className="gradient-text-sky font-black">
              {t.hero.titleHighlight}
            </span>{" "}
            {t.hero.titlePart2}
          </h1>
        </motion.div>

        {/* 3. Description */}
        <motion.p
          variants={itemVariants}
          className="max-w-2xl text-base text-slate-400 sm:text-lg md:text-xl leading-relaxed"
        >
          {t.hero.description}
        </motion.p>

        {/* 4. Action Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap items-center justify-center gap-4 pt-2"
        >
          <Link
            href="#projects"
            className="group relative inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-400 via-sky-500 to-blue-600 px-7 py-3.5 text-sm font-bold text-slate-950 shadow-lg shadow-sky-500/25 transition-all duration-300 hover:scale-[1.03] hover:shadow-sky-400/40 cursor-pointer"
          >
            <span>{t.hero.btnPrimary}</span>
            <ArrowUpRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>

          <Link
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-slate-700/80 bg-slate-900/60 px-7 py-3.5 text-sm font-medium text-slate-200 backdrop-blur-md transition-all duration-300 hover:border-sky-400 hover:text-white hover:bg-slate-800/80 hover:shadow-[0_0_20px_rgba(56,189,248,0.1)] cursor-pointer"
          >
            <span>{t.hero.btnSecondary}</span>
          </Link>

          <a
            href="/projects/Tomas%20Reyes%20CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-950/60 px-5 py-3.5 text-sm font-medium text-slate-400 hover:text-sky-300 hover:border-sky-500/40 transition-all cursor-pointer"
          >
            <FileDown size={16} />
            <span>{t.hero.btnCv}</span>
          </a>
        </motion.div>

        {/* 5. Key Highlights / Stats Bento Bar */}
        <motion.div
          variants={itemVariants}
          className="mt-6 grid w-full max-w-4xl grid-cols-1 gap-4 sm:grid-cols-3 text-left"
        >
          <SpotlightCard className="p-5 border-slate-800/60 bg-slate-900/40">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-sky-500/10 border border-sky-500/30 text-sky-400">
                <Code2 size={20} />
              </div>
              <div>
                <h3 className="text-base font-bold text-white">
                  {t.hero.stats.projects}
                </h3>
                <p className="text-xs text-slate-400">
                  {t.hero.stats.projectsDesc}
                </p>
              </div>
            </div>
          </SpotlightCard>

          <SpotlightCard className="p-5 border-slate-800/60 bg-slate-900/40">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-indigo-500/10 border border-indigo-500/30 text-indigo-400">
                <Layers size={20} />
              </div>
              <div>
                <h3 className="text-base font-bold text-white">
                  {t.hero.stats.stack}
                </h3>
                <p className="text-xs text-slate-400">
                  {t.hero.stats.stackDesc}
                </p>
              </div>
            </div>
          </SpotlightCard>

          <SpotlightCard className="p-5 border-slate-800/60 bg-slate-900/40">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
                <CheckCircle2 size={20} />
              </div>
              <div>
                <h3 className="text-base font-bold text-white">
                  {t.hero.stats.focus}
                </h3>
                <p className="text-xs text-slate-400">
                  {t.hero.stats.focusDesc}
                </p>
              </div>
            </div>
          </SpotlightCard>
        </motion.div>
      </motion.div>
    </section>
  );
}