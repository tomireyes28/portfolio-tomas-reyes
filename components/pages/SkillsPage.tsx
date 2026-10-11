"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { skills } from "@/src/skills";
import { Skill } from "@/types/Skill";
import { useLanguage } from "@/context/LanguageContext";
import { Layers, Sparkles } from "lucide-react";

interface BigInkStampProps {
  skill: Skill;
  inkColor: string;
  rotation: number;
}

function BigInkStamp({ skill, inkColor, rotation }: BigInkStampProps) {
  const [isHovered, setIsHovered] = useState(false);
  const { language } = useLanguage();
  const isEs = language === "es";

  return (
    <div className="relative flex items-center justify-center">
      <motion.button
        type="button"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onFocus={() => setIsHovered(true)}
        onBlur={() => setIsHovered(false)}
        whileHover={{ scale: 1.16, rotate: 0 }}
        whileTap={{ scale: 0.94 }}
        style={{
          transform: `rotate(${rotation}deg)`,
          borderColor: inkColor,
          color: inkColor,
        }}
        className={`relative w-13 h-13 sm:w-14 sm:h-14 rounded-full flex flex-col items-center justify-center transition-all cursor-pointer select-none ${
          skill.highlight
            ? "border-2 border-dashed shadow-xs bg-[#ebdcc3]/60"
            : "border-1.5 border-dotted bg-[#ebdcc3]/30 hover:bg-[#ebdcc3]/75"
        }`}
      >
        {/* Decorative Inner Ring for authentic passport stamp look */}
        <div
          className="pointer-events-none absolute inset-1 rounded-full border border-dashed opacity-40"
          style={{ borderColor: inkColor }}
        />

        {/* Big Technology Logo */}
        {skill.icon ? (
          <img
            src={skill.icon}
            alt={skill.name}
            className="w-7 h-7 object-contain transition-transform duration-300 filter drop-shadow-2xs"
            style={{
              filter: isHovered
                ? "drop-shadow(0 0 6px currentColor) contrast(1.15)"
                : "contrast(1.05) opacity(0.9)",
            }}
          />
        ) : (
          <Layers className="w-6 h-6" style={{ color: inkColor }} />
        )}

        {/* Small Core Star Pin if highlighted */}
        {skill.highlight && (
          <span
            className="absolute -top-1 -right-1 w-3.5 h-3.5 rounded-full flex items-center justify-center text-[8px] font-bold text-white shadow-xs"
            style={{ backgroundColor: inkColor }}
            title={isEs ? "Tecnología principal" : "Core tech"}
          >
            ★
          </span>
        )}
      </motion.button>

      {/* Floating Tooltip Label revealed ONLY on Hover */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 4, scale: 0.9 }}
            transition={{ duration: 0.18, ease: "easeOut" }}
            className="pointer-events-none absolute -bottom-10 left-1/2 -translate-x-1/2 z-40 flex flex-col items-center"
          >
            {/* Tooltip Arrow */}
            <div
              className="w-2 h-2 rotate-45 -mb-1 bg-[#22140c] border-t border-l border-[#8c6d46]"
            />
            {/* Tooltip Card */}
            <div className="bg-[#22140c] text-[#f5ebd6] px-2.5 py-1 rounded-xs shadow-md border border-[#8c6d46]/70 flex items-center gap-1.5 whitespace-nowrap">
              <span className="font-typewriter text-xs font-bold tracking-wide">
                {skill.name}
              </span>
              {skill.highlight && (
                <span className="font-typewriter text-[9px] uppercase px-1 py-0.2 bg-[#882b2b] text-white rounded-2xs font-bold">
                  {isEs ? "Core" : "Main"}
                </span>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function SkillsLeftPage() {
  const { language, t } = useLanguage();
  const isEs = language === "es";

  const frontendSkills = skills.filter((s) => s.category === "frontend");
  const backendSkills = skills.filter((s) => s.category === "backend");

  return (
    <div className="flex flex-col justify-between h-full space-y-4 py-1">
      {/* Page Title */}
      <div>
        <h2 className="font-serif-book text-2xl font-bold text-[#22140c]">
          {t.skills.title}
        </h2>
        <p className="font-serif-book text-xs text-[#5a4232] mt-0.5 leading-relaxed">
          {isEs
            ? "Posá el cursor sobre cada sello para revelar la tecnología."
            : "Hover over each stamp to reveal the technology."}
        </p>
      </div>

      {/* Category 1: Frontend & UI as Stamp Collection */}
      <div className="space-y-2 border-b border-[#8c6d46]/20 pb-3">
        <div className="flex items-center gap-2">
          <h3 className="font-serif-book text-sm font-bold italic text-[#265538]">
            {t.skills.frontend}
          </h3>
          <div className="h-px flex-1 bg-gradient-to-r from-[#265538]/30 to-transparent" />
        </div>

        {/* Big Stamps Grid (No text pills, just big stamps!) */}
        <div className="flex flex-wrap items-center gap-3 pt-1">
          {frontendSkills.map((sk, idx) => {
            const rot = [-2, 1.5, -1, 2, -1.8, 1.2, -0.8][idx % 7];
            return (
              <BigInkStamp
                key={sk.name}
                skill={sk}
                inkColor="#265538"
                rotation={rot}
              />
            );
          })}
        </div>
      </div>

      {/* Category 2: Backend & APIs */}
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <h3 className="font-serif-book text-sm font-bold italic text-[#882b2b]">
            {t.skills.backend}
          </h3>
          <div className="h-px flex-1 bg-gradient-to-r from-[#882b2b]/30 to-transparent" />
        </div>

        <div className="flex flex-wrap items-center gap-3 pt-1">
          {backendSkills.map((sk, idx) => {
            const rot = [1.5, -2, 1][idx % 3];
            return (
              <BigInkStamp
                key={sk.name}
                skill={sk}
                inkColor="#882b2b"
                rotation={rot}
              />
            );
          })}
        </div>
      </div>

      {/* Subtle Bottom Note */}
      <div className="pt-1 text-right">
        <span className="font-handwriting text-base text-[#6a4f3b] italic">
          {isEs ? "★ = Tecnologías de uso diario en producción" : "★ = Technologies used daily in production"}
        </span>
      </div>
    </div>
  );
}

export function SkillsRightPage() {
  const { language, t } = useLanguage();
  const isEs = language === "es";

  const dbSkills = skills.filter((s) => s.category === "databases");
  const toolSkills = skills.filter((s) => s.category === "tools");

  return (
    <div className="flex flex-col justify-between h-full space-y-4 py-1">
      {/* Category 3: Databases & ORM */}
      <div className="space-y-2 border-b border-[#8c6d46]/20 pb-3">
        <div className="flex items-center gap-2">
          <h3 className="font-serif-book text-sm font-bold italic text-[#2d4558]">
            {t.skills.databases}
          </h3>
          <div className="h-px flex-1 bg-gradient-to-r from-[#2d4558]/30 to-transparent" />
        </div>

        <div className="flex flex-wrap items-center gap-3 pt-1">
          {dbSkills.map((sk, idx) => {
            const rot = [-1.5, 1.8, -0.8, 1.5, -2, 1][idx % 6];
            return (
              <BigInkStamp
                key={sk.name}
                skill={sk}
                inkColor="#2d4558"
                rotation={rot}
              />
            );
          })}
        </div>
      </div>

      {/* Category 4: DevOps & Tools */}
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <h3 className="font-serif-book text-sm font-bold italic text-[#94631d]">
            {t.skills.tools}
          </h3>
          <div className="h-px flex-1 bg-gradient-to-r from-[#94631d]/30 to-transparent" />
        </div>

        <div className="flex flex-wrap items-center gap-3 pt-1">
          {toolSkills.map((sk, idx) => {
            const rot = [1.8, -1.5, 1.2, -1.8, 1.5, -1, 1.4][idx % 7];
            return (
              <BigInkStamp
                key={sk.name}
                skill={sk}
                inkColor="#94631d"
                rotation={rot}
              />
            );
          })}
        </div>
      </div>

      {/* Handwritten Notebook Note */}
      <div className="pt-2 border-t border-dashed border-[#8c6d46]/30">
        <p className="font-handwriting text-xl text-[#22140c] leading-snug">
          {isEs
            ? "“Enfoque en código tipado estricto, arquitecturas limpias y entrega ágil de valor.”"
            : "“Focused on strict typed code, clean architectures, and agile value delivery.”"}
        </p>
        <span className="font-typewriter text-[10px] text-[#8c6e54] uppercase tracking-wider block mt-1">
          {isEs ? "Constante evolución con estándares modernos" : "Continuous evolution with modern web standards"}
        </span>
      </div>
    </div>
  );
}
