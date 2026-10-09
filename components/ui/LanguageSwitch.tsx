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
      className="group relative flex h-8 w-18 items-center justify-between rounded-lg border border-[#27272a] bg-[#111113] p-1 text-xs font-semibold transition-all hover:border-[#d4ff00]/60 cursor-pointer"
    >
      {/* Sliding block active indicator */}
      <motion.div
        layout
        transition={{ type: "spring", stiffness: 500, damping: 32 }}
        className={`absolute top-0.5 bottom-0.5 w-[30px] rounded-md bg-[#d4ff00] shadow-sm ${
          isEs ? "left-0.5" : "right-0.5"
        }`}
      />

      <span
        className={`relative z-10 flex-1 text-center font-mono text-[10px] tracking-wider transition-colors duration-150 ${
          isEs ? "text-black font-extrabold" : "text-zinc-400 group-hover:text-zinc-200"
        }`}
      >
        ES
      </span>

      <span
        className={`relative z-10 flex-1 text-center font-mono text-[10px] tracking-wider transition-colors duration-150 ${
          !isEs ? "text-black font-extrabold" : "text-zinc-400 group-hover:text-zinc-200"
        }`}
      >
        EN
      </span>
    </button>
  );
}