"use client";

import React from "react";
import {
  Target,
  Users,
  Award,
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
      roman: "I",
      icon: Target,
      title: isEs
        ? "Fundación de Zonasyc & Liderazgo"
        : "Zonasyc Founding & Leadership",
      narrative: t.story.narrative1,
      inkColor: "#882b2b",
    },
    {
      roman: "II",
      icon: Users,
      title: isEs
        ? "Comunicación & Visión de Usuario"
        : "Communication & User Mindset",
      narrative: t.story.narrative2,
      inkColor: "#265538",
    },
    {
      roman: "III",
      icon: Award,
      title: isEs
        ? "Automatizaciones & Full Stack en Prod."
        : "Automation & Production Full Stack",
      narrative: t.story.narrative3,
      inkColor: "#2d4558",
    },
  ];

  return (
    <div className="flex flex-col justify-between h-full space-y-3 py-1">
      {/* Page Title */}
      <div>
        <h2 className="font-serif-book text-2xl font-bold text-[#22140c]">
          {t.story.title}
        </h2>
        <p className="font-handwriting text-xl text-[#6a4f3b] leading-tight">
          {t.story.subtitle}
        </p>
      </div>

      {/* Hand-drawn Route Timeline (Directly on paper, no nested card containers) */}
      <div className="relative pl-6 space-y-4 my-auto">
        {/* Continuous ink trail line */}
        <div className="absolute left-2.5 top-2 bottom-3 w-px border-l-2 border-dashed border-[#8c6d46]/45" />

        {milestones.map((m) => {
          const Icon = m.icon;
          return (
            <div key={m.roman} className="relative group">
              {/* Waypoint circle stamped on line */}
              <div
                className="absolute -left-[27px] top-0.5 w-6 h-6 rounded-full border-2 border-dashed flex items-center justify-center bg-[#ebdcc3] shadow-2xs group-hover:scale-110 transition-transform"
                style={{ borderColor: m.inkColor, color: m.inkColor }}
              >
                <span className="font-typewriter text-[10px] font-bold">
                  {m.roman}
                </span>
              </div>

              {/* Title & Narrative */}
              <div>
                <div className="flex items-center gap-1.5">
                  <Icon
                    className="w-3.5 h-3.5 shrink-0"
                    style={{ color: m.inkColor }}
                  />
                  <h3 className="font-serif-book text-sm font-bold text-[#22140c]">
                    {m.title}
                  </h3>
                </div>

                <p className="font-serif-book text-xs text-[#452f20] leading-relaxed mt-1 pl-5 border-l border-[#8c6d46]/25">
                  {m.narrative}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Marginal Signature */}
      <div className="pt-1 text-right">
        <span className="font-handwriting text-lg text-[#8c6e54] italic">
          — Tomás Reyes
        </span>
      </div>
    </div>
  );
}

export function JourneyRightPage() {
  const { language, t } = useLanguage();
  const isEs = language === "es";

  return (
    <div className="flex flex-col justify-between h-full space-y-3 py-1">
      {/* Clean Heading */}
      <div className="border-b border-[#8c6d46]/25 pb-2">
        <h3 className="font-serif-book text-lg font-bold text-[#22140c]">
          {t.story.softSkillsTitle}
        </h3>
        <span className="font-handwriting text-base text-[#6a4f3b]">
          {isEs
            ? "Insignias de criterio profesional y trabajo en equipo"
            : "Professional badges and collaborative mindset"}
        </span>
      </div>

      {/* 6 Circular Stamped Insignias (Directly on paper, no boxes inside boxes) */}
      <div className="grid grid-cols-2 gap-x-4 gap-y-3 my-auto">
        {t.story.items.map((item, idx) => {
          const Icon = softSkillIcons[item.id] || Award;
          const inkColors = [
            "#265538",
            "#882b2b",
            "#2d4558",
            "#94631d",
            "#563148",
            "#334e68",
          ];
          const color = inkColors[idx % inkColors.length];

          return (
            <div key={item.id} className="group flex items-start gap-2.5">
              {/* Circular Stamp Emblem */}
              <div
                className="w-9 h-9 rounded-full border-1.5 border-dashed flex items-center justify-center shrink-0 transition-transform group-hover:scale-110 group-hover:rotate-6"
                style={{ borderColor: color, color: color }}
              >
                <Icon className="w-4 h-4" />
              </div>

              {/* Text directly on parchment */}
              <div className="space-y-0.5">
                <h4 className="font-serif-book text-xs font-bold text-[#22140c] leading-tight group-hover:text-[#882b2b] transition-colors">
                  {item.name}
                </h4>
                <p className="font-serif-book text-[11px] text-[#5a4232] leading-snug">
                  {item.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="pt-2 border-t border-dashed border-[#8c6d46]/25 text-center">
        <span className="font-handwriting text-base text-[#6a4f3b]">
          {isEs
            ? "“El buen software nace de la empatía con quien lo usa y quien lo mantiene.”"
            : "“Great software comes from empathy for both who uses it and who maintains it.”"}
        </span>
      </div>
    </div>
  );
}
