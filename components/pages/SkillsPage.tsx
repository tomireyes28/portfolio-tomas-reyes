"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { skills } from "@/src/skills";
import { Skill } from "@/types/Skill";
import { useLanguage } from "@/context/LanguageContext";

// Clean vector logos for skills without SVG files in /icons
function FallbackLogo({ name, className = "" }: { name: string; className?: string }) {
  if (name.includes("Framer")) {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M4 0h16v8h-8zM4 8h8l8 8H4zM4 16h8v8z" />
      </svg>
    );
  }
  if (name.includes("Prisma")) {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M12.784 1.258a1.5 1.5 0 0 0-1.745.093l-8.5 6.5A1.5 1.5 0 0 0 2 9.043v10.457a1.5 1.5 0 0 0 1.5 1.5h17a1.5 1.5 0 0 0 1.5-1.5V9.043a1.5 1.5 0 0 0-.539-1.192l-8.677-6.593zm-1.077 2.45L19 9.387V19H5V9.387l7.293-5.58a.5.5 0 0 1 .414-.099z" />
        <path d="M8 11l4-5 4 5-4 6z" />
      </svg>
    );
  }
  if (name.includes("Supabase")) {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M21.362 9.354H12V.3a.3.3 0 0 0-.517-.207L.638 12.046a.3.3 0 0 0 .207.518H12v9.054a.3.3 0 0 0 .517.207l10.845-11.953a.3.3 0 0 0-.207-.518z" />
      </svg>
    );
  }
  if (name.includes("Docker")) {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
        <path d="M13.983 11.078h2.119a.186.186 0 0 0 .186-.185V9.006a.186.186 0 0 0-.186-.186h-2.119a.185.185 0 0 0-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 0 0 .186-.186V3.574a.186.186 0 0 0-.186-.185h-2.118a.185.185 0 0 0-.185.185v1.888c0 .102.082.186.185.186m0 2.716h2.118a.187.187 0 0 0 .186-.186V6.29a.186.186 0 0 0-.186-.185h-2.118a.185.185 0 0 0-.185.185v1.887c0 .102.082.186.185.186m-2.954 0h2.119a.186.186 0 0 0 .185-.186V6.29a.185.185 0 0 0-.185-.185H8.075a.185.185 0 0 0-.185.185v1.887c0 .102.083.186.185.186m-2.955 0h2.119a.186.186 0 0 0 .185-.186V6.29a.185.185 0 0 0-.185-.185H5.12a.185.185 0 0 0-.185.185v1.887c0 .102.083.186.185.186m5.91 2.714h2.118a.186.186 0 0 0 .186-.185V9.006a.186.186 0 0 0-.186-.186h-2.118a.185.185 0 0 0-.185.185v1.888c0 .102.082.185.185.185m-2.956 0h2.119a.186.186 0 0 0 .185-.185V9.006a.185.185 0 0 0-.185-.186H8.075a.185.185 0 0 0-.185.185v1.888c0 .102.083.185.185.185m-2.954 0h2.119a.186.186 0 0 0 .185-.185V9.006a.185.185 0 0 0-.185-.186H5.12a.185.185 0 0 0-.185.185v1.888c0 .102.083.185.185.185m-2.955 0h2.119a.185.185 0 0 0 .185-.185V9.006a.185.185 0 0 0-.185-.186H2.165a.185.185 0 0 0-.185.185v1.888c0 .102.083.185.185.185m21.808 1.482c-.397-.265-1.428-.403-2.316-.098-.18.062-.358.143-.532.24-.266-.867-.887-1.378-1.597-1.378-.458 0-.911.206-1.282.593l-.326.34-.143-.453A3.6 3.6 0 0 0 13.9 8.01H1.979a.98.98 0 0 0-.98.98v4.22c0 2.21 1.05 4.31 2.88 5.76C5.92 20.61 8.87 21.6 12 21.6c6.26 0 11.2-4.14 11.97-10.02.06-.48.06-.97 0-1.46z" />
      </svg>
    );
  }
  // Shadcn
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className={className}>
      <path d="M4 4l16 16M4 20L20 4" />
    </svg>
  );
}

interface BigLogoProps {
  skill: Skill;
  rotation: number;
}

function BigLogo({ skill, rotation }: BigLogoProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative flex items-center justify-center p-2">
      <motion.div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onFocus={() => setIsHovered(true)}
        onBlur={() => setIsHovered(false)}
        whileHover={{ scale: 1.25, rotate: 0 }}
        whileTap={{ scale: 0.95 }}
        style={{
          transform: `rotate(${rotation}deg)`,
        }}
        className="relative cursor-pointer select-none transition-transform duration-200"
      >
        {/* LOGO GIGANTE Y PROTAGONISTA (Hasta 80px en pantallas grandes) */}
        <div
          className="w-16 h-16 sm:w-19 sm:h-19 lg:w-20 lg:h-20 flex items-center justify-center"
          style={{
            filter: isHovered
              ? "drop-shadow(0 10px 20px rgba(35, 20, 10, 0.55)) contrast(1.15)"
              : "drop-shadow(0 4px 8px rgba(35, 20, 10, 0.28)) contrast(1.05)",
          }}
        >
          {skill.icon ? (
            <img
              src={skill.icon}
              alt={skill.name}
              className="w-full h-full object-contain"
            />
          ) : (
            <FallbackLogo
              name={skill.name}
              className="w-14 h-14 sm:w-16 sm:h-16 text-[#22140c]"
            />
          )}
        </div>
      </motion.div>

      {/* Cartelito flotante con el nombre exacto al señalar */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 4, scale: 0.9 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="pointer-events-none absolute -bottom-10 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center"
          >
            <div className="w-2.5 h-2.5 rotate-45 -mb-1.5 bg-[#22140c]" />
            <div className="bg-[#22140c] text-[#f5ebd6] px-3.5 py-1.5 rounded-xs shadow-xl border border-[#8c6d46]/70 whitespace-nowrap">
              <span className="font-typewriter text-xs sm:text-sm font-bold tracking-wide">
                {skill.name}
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function SkillsLeftPage() {
  const { t } = useLanguage();

  const frontendSkills = skills.filter((s) => s.category === "frontend");
  const backendSkills = skills.filter((s) => s.category === "backend");

  const frontendRotations = [-6, 5, -4, 7, -5, 6, -3];
  const backendRotations = [5, -6, 4];

  return (
    <div className="flex flex-col justify-between h-full space-y-4 py-1">
      {/* Page Title */}
      <div>
        <h2 className="font-serif-book text-2xl font-bold text-[#22140c]">
          {t.skills.title}
        </h2>
        <p className="font-serif-book text-xs text-[#5a4232] mt-0.5 leading-relaxed">
          {t.skills.description}
        </p>
      </div>

      {/* Section 1: Frontend */}
      <div className="space-y-3 border-b border-[#8c6d46]/20 pb-4">
        <div className="flex items-center gap-2">
          <h3 className="font-serif-book text-base font-bold italic text-[#265538]">
            Frontend
          </h3>
          <div className="h-px flex-1 bg-gradient-to-r from-[#265538]/30 to-transparent" />
        </div>

        <div className="flex flex-wrap items-center gap-5 sm:gap-7 pt-1 pl-2">
          {frontendSkills.map((sk, idx) => (
            <BigLogo
              key={sk.name}
              skill={sk}
              rotation={frontendRotations[idx % frontendRotations.length]}
            />
          ))}
        </div>
      </div>

      {/* Section 2: Backend (Sin la palabra "APIs") */}
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <h3 className="font-serif-book text-base font-bold italic text-[#882b2b]">
            Backend
          </h3>
          <div className="h-px flex-1 bg-gradient-to-r from-[#882b2b]/30 to-transparent" />
        </div>

        <div className="flex flex-wrap items-center gap-6 sm:gap-9 pt-1 pl-2">
          {backendSkills.map((sk, idx) => (
            <BigLogo
              key={sk.name}
              skill={sk}
              rotation={backendRotations[idx % backendRotations.length]}
            />
          ))}
        </div>
      </div>

      <div className="pt-2 text-right">
        <span className="font-handwriting text-base text-[#6a4f3b] italic">
          — Ecosistema Full Stack en producción —
        </span>
      </div>
    </div>
  );
}

export function SkillsRightPage() {
  const dbSkills = skills.filter((s) => s.category === "databases");
  const toolSkills = skills.filter((s) => s.category === "tools");

  const dbRotations = [-6, 7, -4, 5];
  const toolRotations = [6, -5, 5, -4, 4];

  return (
    <div className="flex flex-col justify-between h-full space-y-4 py-1">
      {/* Section 3: Bases de Datos (Sin la palabra "ORM") */}
      <div className="space-y-3 border-b border-[#8c6d46]/20 pb-4">
        <div className="flex items-center gap-2">
          <h3 className="font-serif-book text-base font-bold italic text-[#2d4558]">
            Bases de Datos
          </h3>
          <div className="h-px flex-1 bg-gradient-to-r from-[#2d4558]/30 to-transparent" />
        </div>

        <div className="flex flex-wrap items-center gap-6 sm:gap-8 pt-1 pl-2">
          {dbSkills.map((sk, idx) => (
            <BigLogo
              key={sk.name}
              skill={sk}
              rotation={dbRotations[idx % dbRotations.length]}
            />
          ))}
        </div>
      </div>

      {/* Section 4: Herramientas & Cloud (Sin la palabra "DevOps") */}
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <h3 className="font-serif-book text-base font-bold italic text-[#94631d]">
            Herramientas & Cloud
          </h3>
          <div className="h-px flex-1 bg-gradient-to-r from-[#94631d]/30 to-transparent" />
        </div>

        <div className="flex flex-wrap items-center gap-6 sm:gap-8 pt-1 pl-2">
          {toolSkills.map((sk, idx) => (
            <BigLogo
              key={sk.name}
              skill={sk}
              rotation={toolRotations[idx % toolRotations.length]}
            />
          ))}
        </div>
      </div>

      {/* Note on bottom right */}
      <div className="pt-2 border-t border-dashed border-[#8c6d46]/30">
        <p className="font-handwriting text-xl text-[#22140c] leading-snug">
          “Enfoque en código tipado estricto, arquitecturas limpias y entrega ágil de valor.”
        </p>
      </div>
    </div>
  );
}
