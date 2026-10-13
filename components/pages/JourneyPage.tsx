"use client";

import React from "react";
import {
  Briefcase,
  GraduationCap,
  Globe,
  Lightbulb,
  MessageSquare,
  Workflow,
  Code2,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function JourneyLeftPage() {
  const { t } = useLanguage();
  const story = t.story;

  return (
    <div className="flex flex-col justify-between h-full py-1">
      {/* Editorial Header Left */}
      <div className="border-b border-[#8c6d46]/25 pb-1.5">
        <span className="font-typewriter text-[9px] uppercase tracking-widest text-[#8c6d46] block">
          {story.badge}
        </span>
        <h2 className="font-serif-book text-xl lg:text-2xl font-bold text-[#22140c] leading-tight">
          {story.title}
        </h2>
        <p className="font-serif-book text-xs text-[#5a4232] mt-0.5 leading-relaxed">
          {story.subtitle}
        </p>
      </div>

      {/* Main Content: Experiencia, Formación & Idiomas */}
      <div className="flex flex-col justify-between flex-1 my-2 sm:my-2.5">
        {/* Section 1: Experiencia Profesional (3 roles) */}
        <div className="space-y-1.5">
          <div className="flex items-center gap-2 mb-1">
            <Briefcase className="w-3.5 h-3.5 text-[#882b2b]" />
            <h3 className="font-serif-book text-xs sm:text-[13px] font-bold tracking-wide uppercase text-[#882b2b]">
              {story.experienceHeading}
            </h3>
            <div className="h-px flex-1 bg-gradient-to-r from-[#882b2b]/30 to-transparent" />
          </div>

          <div className="space-y-2.5 pl-1">
            {story.experience.map((exp, idx) => (
              <div key={idx} className="relative pl-3 border-l-2 border-[#8c6d46]/25">
                {/* Vintage decorative notch on the line */}
                <div
                  className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full border border-[#ebdcc3]"
                  style={{ backgroundColor: exp.inkColor }}
                />

                <div className="flex flex-wrap items-baseline justify-between gap-x-2">
                  <h4 className="font-serif-book text-sm md:text-[14px] font-bold text-[#22140c] leading-tight">
                    {exp.role}
                  </h4>
                  <span className="font-typewriter text-[9px] font-bold text-[#7a5a40]">
                    {exp.period}
                  </span>
                </div>

                <div className="font-typewriter text-[10px] text-[#8c6e54] mb-0.5">
                  {exp.organization}
                </div>

                {/* Bullets without heavy boxes */}
                <ul className="space-y-0.5">
                  {exp.points.map((pt, pIdx) => (
                    <li key={pIdx} className="font-serif-book text-[11px] md:text-[11.5px] text-[#452f20] leading-snug flex items-start gap-1.5">
                      <span className="text-[#8c6d46] text-xs leading-none select-none mt-0.5">•</span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Section 2: Formación Académica */}
        <div className="space-y-1.5">
          <div className="flex items-center gap-2 mb-1">
            <GraduationCap className="w-3.5 h-3.5 text-[#2d4558]" />
            <h3 className="font-serif-book text-xs sm:text-[13px] font-bold tracking-wide uppercase text-[#2d4558]">
              {story.educationHeading}
            </h3>
            <div className="h-px flex-1 bg-gradient-to-r from-[#2d4558]/30 to-transparent" />
          </div>

          <div className="space-y-2 pl-1">
            {story.education.map((edu, idx) => (
              <div key={idx} className="relative pl-3 border-l-2 border-[#8c6d46]/25">
                <div
                  className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full border border-[#ebdcc3]"
                  style={{ backgroundColor: edu.inkColor }}
                />

                <div className="flex flex-wrap items-baseline justify-between gap-x-2">
                  <h4 className="font-serif-book text-sm md:text-[13.5px] font-bold text-[#22140c] leading-tight">
                    {edu.degree}
                  </h4>
                  <span className="font-typewriter text-[9px] font-bold text-[#7a5a40]">
                    {edu.period}
                  </span>
                </div>

                <div className="font-typewriter text-[10px] text-[#8c6e54] mb-0.5">
                  {edu.institution}
                </div>

                <p className="font-serif-book text-[11px] md:text-[11.5px] text-[#452f20] leading-relaxed">
                  {edu.detail}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Section 3: Idiomas (micro-sección al final) */}
        <div className="pt-1.5 border-t border-[#8c6d46]/20 flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <Globe className="w-3 h-3 text-[#94631d]" />
            <span className="font-serif-book text-[11px] font-bold uppercase tracking-wider text-[#94631d]">
              {story.languagesHeading}:
            </span>
          </div>
          <div className="flex items-center gap-2">
            {story.languages.map((lang, lIdx) => (
              <span
                key={lIdx}
                className="font-typewriter text-[9.5px] px-2 py-0.5 rounded-xs border border-[#8c6d46]/30 bg-[#f4ecd8]/60 text-[#452f20]"
              >
                <strong>{lang.name}:</strong> {lang.level}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Marginal Signature & Status Footer */}
      <div className="pt-1.5 border-t border-dashed border-[#8c6d46]/20 flex items-center justify-between text-xs">
        <span className="font-typewriter text-[9px] uppercase tracking-wider text-[#8c6e54] flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#265538]" />
          STATUS: {story.statusText}
        </span>
        <span className="font-handwriting text-lg text-[#8c6e54] italic">
          — Tomás Reyes
        </span>
      </div>
    </div>
  );
}

const principleIcons: Record<
  string,
  React.ComponentType<{ className?: string; style?: React.CSSProperties }>
> = {
  product: Lightbulb,
  communication: MessageSquare,
  automation: Workflow,
  architecture: Code2,
};

export function JourneyRightPage() {
  const { t } = useLanguage();
  const story = t.story;

  return (
    <div className="flex flex-col justify-between h-full py-1">
      {/* Editorial Header Right */}
      <div className="border-b border-[#8c6d46]/25 pb-1.5">
        <span className="font-typewriter text-[9px] uppercase tracking-widest text-[#8c6d46] block">
          {story.principlesBadge}
        </span>
        <h3 className="font-serif-book text-xl lg:text-2xl font-bold text-[#22140c] leading-tight">
          {story.principlesTitle}
        </h3>
        <p className="font-serif-book text-xs text-[#5a4232] mt-0.5 leading-relaxed">
          {story.principlesSubtitle}
        </p>
      </div>

      {/* 4 Strategic Pillars in a single column with compact, natural spacing */}
      <div className="flex flex-col gap-3 sm:gap-3.5 my-auto py-1">
        {story.principles.map((pillar) => {
          const Icon = principleIcons[pillar.id] || Lightbulb;

          return (
            <div
              key={pillar.id}
              className="group relative pl-3.5 border-l-2 border-[#8c6d46]/30 hover:border-[#882b2b] transition-colors"
            >
              {/* Decorative ink notch on the line */}
              <div
                className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full border border-[#ebdcc3]"
                style={{ backgroundColor: pillar.color }}
              />

              {/* Header row: Section mark + Icon + Tag + Title */}
              <div className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5 mb-1">
                <div className="flex items-center gap-1.5">
                  <span className="font-typewriter text-[10px] font-bold text-[#8c6d46]">
                    § {pillar.roman}
                  </span>
                  <span className="text-[#8c6d46]/40">•</span>
                  <Icon className="w-3.5 h-3.5 shrink-0" style={{ color: pillar.color }} />
                  <span
                    className="font-typewriter text-[9px] uppercase font-bold tracking-wider"
                    style={{ color: pillar.color }}
                  >
                    {pillar.tag}
                  </span>
                </div>
                <span className="text-[#8c6d46]/40 hidden sm:inline">•</span>
                <h4 className="font-serif-book text-sm md:text-[14px] font-bold text-[#22140c] group-hover:text-[#882b2b] transition-colors">
                  {pillar.title}
                </h4>
              </div>

              {/* Description spanning full width with comfortable reading line */}
              <p className="font-serif-book text-xs md:text-[12px] text-[#452f20] leading-relaxed">
                {pillar.desc}
              </p>
            </div>
          );
        })}
      </div>

      {/* Marginal Footer */}
      <div className="pt-1.5 border-t border-dashed border-[#8c6d46]/20 flex items-center justify-between text-xs">
        <span className="font-typewriter text-[9px] uppercase tracking-wider text-[#8c6e54]">
          {story.principlesFooterBadge}
        </span>
        <span className="font-typewriter text-[9px] font-bold text-[#7a5a40]">
          {story.principlesFooterCount}
        </span>
      </div>
    </div>
  );
}

