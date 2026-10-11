"use client";

import React from "react";
import { Layout, Server, Database, Wrench, Sparkles, Layers } from "lucide-react";
import { skills } from "@/src/skills";
import { Skill } from "@/types/Skill";
import { useLanguage } from "@/context/LanguageContext";

function SkillStampBadge({ skill }: { skill: Skill }) {
  return (
    <div
      className={`group flex items-center gap-2 px-2.5 py-1.5 rounded-xs border transition-all ${
        skill.highlight
          ? "bg-[#f5ebd6] border-[#8c6d46] shadow-[2px_2px_0px_rgba(74,51,37,0.2)]"
          : "bg-[#e8dcc4]/75 border-[#8c6d46]/45 hover:bg-[#f5ebd6]"
      }`}
    >
      {skill.icon ? (
        <img
          src={skill.icon}
          alt={skill.name}
          className="w-4 h-4 object-contain shrink-0"
        />
      ) : (
        <Layers className="w-3.5 h-3.5 text-[#5a4232] shrink-0" />
      )}

      <span className="font-typewriter text-xs font-bold text-[#25160e]">
        {skill.name}
      </span>

      {skill.highlight && (
        <span
          className="w-1.5 h-1.5 rounded-full bg-[#8c2d2d] shrink-0"
          title="Core Stack"
        />
      )}
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
      {/* Header */}
      <div>
        <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-xs bg-[#9c6b27]/15 border border-[#9c6b27]/40 text-[#6e4815] font-typewriter text-[10px] uppercase tracking-wider mb-1">
          <span>{t.skills.badge}</span>
        </div>
        <h2 className="font-serif-book text-2xl font-bold text-[#25160e]">
          {t.skills.title}
        </h2>
        <p className="font-serif-book text-xs text-[#4a3325] mt-0.5 leading-relaxed">
          {t.skills.description}
        </p>
      </div>

      {/* Category 1: Frontend & UI */}
      <div className="p-3.5 bg-[#f4ebd9]/80 border border-[#8c6d46]/55 rounded-xs space-y-2.5">
        <div className="flex items-center justify-between border-b border-[#8c6d46]/30 pb-1.5">
          <div className="flex items-center gap-2">
            <Layout className="w-4 h-4 text-[#2b583c]" />
            <h3 className="font-typewriter text-xs font-bold uppercase tracking-wider text-[#25160e]">
              {t.skills.frontend}
            </h3>
          </div>
          <span className="font-typewriter text-[10px] text-[#6e523e]">
            01 // UI & SSR
          </span>
        </div>
        <div className="flex flex-wrap gap-2">
          {frontendSkills.map((sk) => (
            <SkillStampBadge key={sk.name} skill={sk} />
          ))}
        </div>
      </div>

      {/* Category 2: Backend & APIs */}
      <div className="p-3.5 bg-[#f4ebd9]/80 border border-[#8c6d46]/55 rounded-xs space-y-2.5">
        <div className="flex items-center justify-between border-b border-[#8c6d46]/30 pb-1.5">
          <div className="flex items-center gap-2">
            <Server className="w-4 h-4 text-[#8c2d2d]" />
            <h3 className="font-typewriter text-xs font-bold uppercase tracking-wider text-[#25160e]">
              {t.skills.backend}
            </h3>
          </div>
          <span className="font-typewriter text-[10px] text-[#6e523e]">
            02 // CORE & REST
          </span>
        </div>
        <div className="flex flex-wrap gap-2">
          {backendSkills.map((sk) => (
            <SkillStampBadge key={sk.name} skill={sk} />
          ))}
        </div>
      </div>

      {/* Legend for Highlight Dot */}
      <div className="flex items-center gap-2 font-typewriter text-[10px] text-[#5a4232]">
        <span className="w-2 h-2 rounded-full bg-[#8c2d2d]" />
        <span>
          {isEs
            ? "Tecnologías principales de uso diario en producción"
            : "Primary technologies used daily in production"}
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
      <div className="p-3.5 bg-[#f4ebd9]/80 border border-[#8c6d46]/55 rounded-xs space-y-2.5">
        <div className="flex items-center justify-between border-b border-[#8c6d46]/30 pb-1.5">
          <div className="flex items-center gap-2">
            <Database className="w-4 h-4 text-[#3d5a6c]" />
            <h3 className="font-typewriter text-xs font-bold uppercase tracking-wider text-[#25160e]">
              {t.skills.databases}
            </h3>
          </div>
          <span className="font-typewriter text-[10px] text-[#6e523e]">
            03 // DATA & ORM
          </span>
        </div>
        <div className="flex flex-wrap gap-2">
          {dbSkills.map((sk) => (
            <SkillStampBadge key={sk.name} skill={sk} />
          ))}
        </div>
      </div>

      {/* Category 4: DevOps, Cloud & Tools */}
      <div className="p-3.5 bg-[#f4ebd9]/80 border border-[#8c6d46]/55 rounded-xs space-y-2.5">
        <div className="flex items-center justify-between border-b border-[#8c6d46]/30 pb-1.5">
          <div className="flex items-center gap-2">
            <Wrench className="w-4 h-4 text-[#9c6b27]" />
            <h3 className="font-typewriter text-xs font-bold uppercase tracking-wider text-[#25160e]">
              {t.skills.tools}
            </h3>
          </div>
          <span className="font-typewriter text-[10px] text-[#6e523e]">
            04 // CLOUD & GIT
          </span>
        </div>
        <div className="flex flex-wrap gap-2">
          {toolSkills.map((sk) => (
            <SkillStampBadge key={sk.name} skill={sk} />
          ))}
        </div>
      </div>

      {/* Explorer's Field Note Stamp */}
      <div className="passport-stamp p-3.5 bg-[#2b583c]/10 text-[#2b583c] rounded-xs">
        <div className="flex items-center gap-2 font-typewriter text-xs font-bold uppercase tracking-wider mb-1">
          <Sparkles className="w-4 h-4" />
          <span>{isEs ? "Nota de Evolución Continua" : "Continuous Evolution Note"}</span>
        </div>
        <p className="font-serif-book text-xs text-[#25160e] leading-relaxed">
          {isEs
            ? "En constante actualización con arquitecturas limpias, patrones escalables Full Stack y optimización de rendimiento web."
            : "Continuously evolving with clean architectures, scalable Full Stack patterns, and web performance optimization."}
        </p>
      </div>
    </div>
  );
}
