"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

export default function LanguageSwitch() {
  const { language, toggleLanguage } = useLanguage();
  const isEs = language === "es";

  return (
    <button
      onClick={toggleLanguage}
      type="button"
      aria-label="Cambiar idioma / Toggle Language"
      className="group relative flex h-9 w-20 items-center justify-between rounded-full border border-slate-700/80 bg-slate-900/90 p-1 text-xs font-semibold shadow-inner transition-all hover:border-sky-500/50 hover:shadow-[0_0_12px_rgba(56,189,248,0.2)] cursor-pointer"
    >
      {/* Sliding pill active indicator */}
      <motion.div
        layout
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
        className={`absolute top-1 bottom-1 w-[34px] rounded-full bg-gradient-to-r from-sky-500 to-blue-600 shadow-md ${
          isEs ? "left-1" : "right-1"
        }`}
      />

      <span
        className={`relative z-10 flex-1 text-center font-mono text-[11px] transition-colors duration-200 ${
          isEs ? "text-slate-950 font-bold" : "text-slate-400 group-hover:text-slate-200"
        }`}
      >
        ES
      </span>

      <span
        className={`relative z-10 flex-1 text-center font-mono text-[11px] transition-colors duration-200 ${
          !isEs ? "text-slate-950 font-bold" : "text-slate-400 group-hover:text-slate-200"
        }`}
      >
        EN
      </span>
    </button>
  );
}