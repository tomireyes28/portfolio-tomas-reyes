"use client";

import React from "react";
import {
  Target,
  Users,
  Award,
  Compass,
  Lightbulb,
  Puzzle,
  RefreshCw,
  ShieldCheck,
  BookOpen,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

const softSkillIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  team: Users,
  product: Lightbulb,
  problem: Puzzle,
  adapt: RefreshCw,
  owner: ShieldCheck,
  learn: BookOpen,
};

export function JourneyLeftPage() {
  const { language, t } = useLanguage();
  const isEs = language === "es";

  const milestones = [
    {
      step: "I",
      icon: Target,
      title: isEs
        ? "Liderazgo de Producto & Fundador"
        : "Product Leadership & Founder",
      text: t.story.narrative1,
      accent: "#8c2d2d",
    },
    {
      step: "II",
      icon: Users,
      title: isEs
        ? "Comunicación & UX Estratégica"
        : "Strategic Communication & UX",
      text: t.story.narrative2,
      accent: "#2b583c",
    },
    {
      step: "III",
      icon: Award,
      title: isEs
        ? "Ingeniería Full Stack Robusta"
        : "Robust Full Stack Engineering",
      text: t.story.narrative3,
      accent: "#3d5a6c",
    },
  ];

  return (
    <div className="flex flex-col justify-between h-full space-y-3 py-1">
      {/* Header */}
      <div>
        <div className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-xs bg-[#3d5a6c]/15 border border-[#3d5a6c]/40 text-[#2b4251] font-typewriter text-[10px] uppercase tracking-wider mb-1">
          <Compass className="w-3 h-3" />
          <span>{t.story.badge}</span>
        </div>
        <h2 className="font-serif-book text-xl lg:text-2xl font-bold text-[#25160e] leading-snug">
          {t.story.title}
        </h2>
        <p className="font-handwriting text-lg text-[#6e523e] leading-tight mt-0.5">
          {t.story.subtitle}
        </p>
      </div>

      {/* Expedition Route Timeline */}
      <div className="relative pl-4 border-l-2 border-dashed border-[#8c6d46] space-y-3 my-auto">
        {milestones.map((m) => {
          const Icon = m.icon;
          return (
            <div
              key={m.step}
              className="relative bg-[#f4ebd9]/85 border border-[#8c6d46]/50 p-3 rounded-xs shadow-2xs"
            >
              {/* Route Waypoint Pin on the dashed line */}
              <span
                className="absolute -left-[25px] top-3.5 w-4 h-4 rounded-full flex items-center justify-center text-[9px] font-typewriter font-bold text-[#f5e8c7] shadow-xs"
                style={{ backgroundColor: m.accent }}
              >
                {m.step}
              </span>

              <div className="flex items-center gap-2 mb-1">
                <Icon className="w-4 h-4 text-[#4a3325] shrink-0" />
                <h3 className="font-serif-book text-xs sm:text-sm font-bold text-[#25160e]">
                  {m.title}
                </h3>
              </div>

              <p className="font-serif-book text-xs text-[#3a2418] leading-relaxed">
                {m.text}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export function JourneyRightPage() {
  const { language, t } = useLanguage();
  const isEs = language === "es";

  return (
    <div className="flex flex-col justify-between h-full space-y-3 py-1">
      <div className="flex items-center justify-between border-b border-[#8c6d46]/35 pb-1.5">
        <h3 className="font-typewriter text-xs font-bold uppercase tracking-wider text-[#25160e]">
          🎖️ {t.story.softSkillsTitle}
        </h3>
        <span className="font-typewriter text-[10px] text-[#6e523e]">
          {isEs ? "6 INSIGNIAS" : "6 BADGES"}
        </span>
      </div>

      {/* 6 Scout / Explorer Merit Badges Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 my-auto">
        {t.story.items.map((item, idx) => {
          const Icon = softSkillIcons[item.id] || Compass;
          return (
            <div
              key={item.id}
              className="group relative bg-[#f4ebd9]/85 hover:bg-[#f9f3e6] border border-[#8c6d46]/55 p-3 rounded-xs shadow-2xs transition-all flex flex-col justify-between"
            >
              <div className="flex items-start gap-2.5">
                {/* Merit Badge Emblem */}
                <div className="w-8 h-8 rounded-full bg-[#d9c8a9] border-2 border-dashed border-[#6e523e] flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
                  <Icon className="w-4 h-4 text-[#25160e]" />
                </div>

                <div>
                  <span className="font-typewriter text-[9px] uppercase tracking-widest text-[#8c2d2d] block">
                    {isEs ? `Insignia 0${idx + 1}` : `Badge 0${idx + 1}`}
                  </span>
                  <h4 className="font-serif-book text-xs sm:text-sm font-bold text-[#25160e] leading-snug">
                    {item.name}
                  </h4>
                </div>
              </div>

              <p className="font-serif-book text-[11px] text-[#4a3325] mt-2 leading-relaxed">
                {item.desc}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
