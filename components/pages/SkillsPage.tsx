"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { skills } from "@/src/skills";
import { Skill } from "@/types/Skill";
import { useLanguage } from "@/context/LanguageContext";
import { Layers } from "lucide-react";

interface InkStampProps {
  skill: Skill;
  inkColor: string;
  rotation: number;
}

function InkStamp({ skill, inkColor, rotation }: InkStampProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.08, rotate: 0 }}
      whileTap={{ scale: 0.96 }}
      style={{
        transform: `rotate(${rotation}deg)`,
        borderColor: inkColor,
        color: inkColor,
      }}
      className={`group relative ink-stamp flex items-center gap-2 px-3 py-1.5 cursor-default transition-all ${
        skill.highlight
          ? "border-dashed shadow-2xs"
          : "border-dotted opacity-90 hover:opacity-100"
      }`}
    >
      {/* Skill Icon */}
      {skill.icon ? (
        <img
          src={skill.icon}
          alt={skill.name}
          className="w-4 h-4 object-contain shrink-0 filter contrast-125"
          style={{
            filter: isHovered
              ? "drop-shadow(0 0 4px currentColor)"
              : "opacity(0.85)",
          }}
        />
      ) : (
        <Layers className="w-3.5 h-3.5 shrink-0" />
      )}

      {/* Technology Name */}
      <span className="font-typewriter text-xs font-bold tracking-wide">
        {skill.name}
      </span>

      {/* Core Technology Stamp Mark */}
      {skill.highlight && (
        <span
          className="w-1.5 h-1.5 rounded-full shrink-0"
          style={{ backgroundColor: inkColor }}
          title="Tecnología principal"
        />
      )}

      {/* Subtle Hover Impression Tag */}
      {isHovered && skill.highlight && (
        <motion.span
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute -bottom-5 left-1/2 -translate-x-1/2 whitespace-nowrap font-handwriting text-sm font-bold text-[#22140c] bg-[#ebdcc3] px-2 py-0.5 rounded-xs border border-[#8c6d46]/40 shadow-xs pointer-events-none z-30"
        >
          ★ Core
        </motion.span>
      )}
    </motion.div>
  );
}

export function SkillsLeftPage() {
  const { language, t } = useLanguage();
  const isEs = language === "es";

  const frontendSkills = skills.filter((s) => s.category === "frontend");
  const backendSkills = skills.filter((s) => s.category === "backend");

  return (
    <div className="flex flex-col justify-between h-full space-y-4 py-1">
      {/* Clean Handwritten Header */}
      <div>
        <h2 className="font-serif-book text-2xl font-bold text-[#22140c]">
          {t.skills.title}
        </h2>
        <p className="font-serif-book text-xs text-[#5a4232] mt-0.5 leading-relaxed">
          {t.skills.description}
        </p>
      </div>

      {/* Section 1: Frontend & UI (Directly on paper, no nested boxes) */}
      <div className="space-y-2 border-b border-[#8c6d46]/20 pb-4">
        <div className="flex items-center gap-2">
          <h3 className="font-serif-book text-sm font-bold italic text-[#265538]">
            {t.skills.frontend}
          </h3>
          <div className="h-px flex-1 bg-gradient-to-r from-[#265538]/30 to-transparent" />
        </div>

        <div className="flex flex-wrap gap-2.5 pt-1">
          {frontendSkills.map((sk, idx) => {
            const rot = [-1.5, 1, -0.8, 1.8, -1.2, 0.9, -0.5][idx % 7];
            return (
              <InkStamp
                key={sk.name}
                skill={sk}
                inkColor="#265538"
                rotation={rot}
              />
            );
          })}
        </div>
      </div>

      {/* Section 2: Backend & APIs (Directly on paper) */}
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <h3 className="font-serif-book text-sm font-bold italic text-[#882b2b]">
            {t.skills.backend}
          </h3>
          <div className="h-px flex-1 bg-gradient-to-r from-[#882b2b]/30 to-transparent" />
        </div>

        <div className="flex flex-wrap gap-2.5 pt-1">
          {backendSkills.map((sk, idx) => {
            const rot = [1.2, -1.5, 0.8][idx % 3];
            return (
              <InkStamp
                key={sk.name}
                skill={sk}
                inkColor="#882b2b"
                rotation={rot}
              />
            );
          })}
        </div>
      </div>

      {/* Subtle Ink Legend */}
      <div className="pt-2 text-right">
        <span className="font-handwriting text-base text-[#6a4f3b] italic">
          {isEs ? "— Sellos de uso continuo en producción —" : "— Continuously applied production stamps —"}
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
      {/* Section 3: Databases & ORM */}
      <div className="space-y-2 border-b border-[#8c6d46]/20 pb-4">
        <div className="flex items-center gap-2">
          <h3 className="font-serif-book text-sm font-bold italic text-[#2d4558]">
            {t.skills.databases}
          </h3>
          <div className="h-px flex-1 bg-gradient-to-r from-[#2d4558]/30 to-transparent" />
        </div>

        <div className="flex flex-wrap gap-2.5 pt-1">
          {dbSkills.map((sk, idx) => {
            const rot = [-1.2, 1.4, -0.6, 1.1, -1.5, 0.7][idx % 6];
            return (
              <InkStamp
                key={sk.name}
                skill={sk}
                inkColor="#2d4558"
                rotation={rot}
              />
            );
          })}
        </div>
      </div>

      {/* Section 4: DevOps, Cloud & Tools */}
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <h3 className="font-serif-book text-sm font-bold italic text-[#94631d]">
            {t.skills.tools}
          </h3>
          <div className="h-px flex-1 bg-gradient-to-r from-[#94631d]/30 to-transparent" />
        </div>

        <div className="flex flex-wrap gap-2.5 pt-1">
          {toolSkills.map((sk, idx) => {
            const rot = [1.5, -1.2, 0.9, -1.4, 1.1, -0.8, 1.3][idx % 7];
            return (
              <InkStamp
                key={sk.name}
                skill={sk}
                inkColor="#94631d"
                rotation={rot}
              />
            );
          })}
        </div>
      </div>

      {/* Handwritten Notebook Note (Directly on paper, no container box) */}
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
