"use client";

import React from "react";
import { Compass, MapPin, Terminal, Award, FileDown } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { useBook } from "@/context/BookContext";

export function AboutLeftPage() {
  const { language, t } = useLanguage();
  const isEs = language === "es";

  return (
    <div className="flex flex-col items-center text-center h-full justify-between py-1">
      {/* Polaroid Profile Card */}
      <div className="relative polaroid-card p-2.5 pb-4 rounded-xs border border-[#bfa984] transform -rotate-1.5 max-w-[195px] mt-0.5 shadow-md">
        {/* Washi tape top */}
        <div className="washi-tape absolute -top-2 left-1/2 -translate-x-1/2 w-16 h-4 rotate-1" />
        <div className="w-34 h-34 mx-auto overflow-hidden bg-[#24140b] rounded-xs border border-[#8c6d46]/35">
          <img
            src="/perfil.jpg"
            alt="Tomás Reyes"
            className="w-full h-full object-cover sepia-[0.12] contrast-[1.03]"
          />
        </div>
        <p className="font-handwriting text-2xl font-bold text-[#22140c] mt-1.5 leading-none">
          Tomás Reyes
        </p>
        <span className="font-typewriter text-[9px] text-[#6a4f3b] uppercase tracking-widest block mt-0.5">
          Full Stack Developer
        </span>
      </div>

      {/* 4 Stamped Passport Marks directly on paper */}
      <div className="w-full grid grid-cols-2 gap-2 my-1.5">
        <div className="ink-stamp p-2 text-[#265538] border-[#265538]/40 transform -rotate-1 text-left">
          <div className="flex items-center gap-1 font-typewriter text-[9px] uppercase tracking-wider opacity-85">
            <MapPin className="w-3 h-3" />
            <span>{isEs ? "Ubicación" : "Location"}</span>
          </div>
          <p className="font-serif-book text-xs font-bold mt-0.5 text-[#22140c]">
            Buenos Aires, AR
          </p>
        </div>

        <div className="ink-stamp p-2 text-[#882b2b] border-[#882b2b]/40 transform rotate-1 text-left">
          <div className="flex items-center gap-1 font-typewriter text-[9px] uppercase tracking-wider opacity-85">
            <Terminal className="w-3 h-3" />
            <span>{isEs ? "Proyectos" : "Projects"}</span>
          </div>
          <p className="font-serif-book text-xs font-bold mt-0.5 text-[#22140c]">
            {isEs ? "+12 en Producción" : "+12 in Production"}
          </p>
        </div>

        <div className="ink-stamp p-2 text-[#452f20] border-[#452f20]/40 transform rotate-1 text-left">
          <div className="flex items-center gap-1 font-typewriter text-[9px] uppercase tracking-wider opacity-85">
            <Compass className="w-3 h-3" />
            <span>{isEs ? "Enfoque" : "Focus"}</span>
          </div>
          <p className="font-serif-book text-xs font-bold mt-0.5 text-[#22140c]">
            {isEs ? "Producto & UX" : "Product & UX"}
          </p>
        </div>

        <div className="ink-stamp p-2 text-[#94631d] border-[#94631d]/40 transform -rotate-1 text-left">
          <div className="flex items-center gap-1 font-typewriter text-[9px] uppercase tracking-wider opacity-85">
            <Award className="w-3 h-3" />
            <span>{isEs ? "Formación" : "Education"}</span>
          </div>
          <p className="font-serif-book text-xs font-bold mt-0.5 text-[#22140c]">
            {isEs ? "Téc. Programación" : "Software Degree"}
          </p>
        </div>
      </div>

      {/* Field Notes: Hobbies (Directly on paper) */}
      <div className="w-full border-t border-dashed border-[#8c6d46]/30 pt-2 text-left">
        <p className="font-serif-book text-xs italic font-bold text-[#5a4232] mb-1">
          {t.about.hobbiesTitle}
        </p>
        <div className="space-y-0.5 text-xs font-serif-book text-[#22140c]">
          <p>
            {t.about.hobbies.cinema.emoji} {t.about.hobbies.cinema.text}
          </p>
          <p>
            {t.about.hobbies.culture.emoji} {t.about.hobbies.culture.text}
          </p>
          <p>
            {t.about.hobbies.learning.emoji} {t.about.hobbies.learning.text}
          </p>
        </div>
      </div>
    </div>
  );
}

export function AboutRightPage() {
  const { language, t } = useLanguage();
  const { goToSection } = useBook();
  const isEs = language === "es";

  return (
    <div className="flex flex-col justify-between h-full py-1 space-y-2.5">
      {/* Title & Role */}
      <div>
        <h2 className="font-serif-book text-2xl lg:text-3xl font-bold text-[#22140c] leading-tight">
          {t.about.title}
        </h2>
        <p className="font-handwriting text-xl text-[#6a4f3b] leading-snug">
          {t.hero.role}
        </p>
      </div>

      {/* Narrative Bio */}
      <div className="space-y-2 font-serif-book text-xs sm:text-sm text-[#382215] leading-relaxed pl-3 border-l-2 border-[#8c6d46]/35">
        <p>{t.about.p1}</p>
        <p>{t.about.p2}</p>
      </div>

      {/* Core Specialty Ledger (Directly on paper, no nested card) */}
      <div className="border-y border-[#8c6d46]/25 py-2.5 space-y-1.5">
        <h3 className="font-serif-book text-xs font-bold italic text-[#22140c]">
          {isEs ? "— Stack Principal & Especialidad —" : "— Core Stack & Specialty —"}
        </h3>
        <div className="grid grid-cols-2 gap-2 text-xs font-serif-book">
          <div>
            <span className="font-typewriter text-[9px] uppercase text-[#6a4f3b] block">
              Frontend & UI
            </span>
            <span className="font-semibold text-[#22140c]">
              React 19, Next.js 16, TS, Tailwind CSS
            </span>
          </div>
          <div>
            <span className="font-typewriter text-[9px] uppercase text-[#6a4f3b] block">
              Backend & APIs
            </span>
            <span className="font-semibold text-[#22140c]">
              NestJS, Node.js, Express, REST APIs
            </span>
          </div>
          <div>
            <span className="font-typewriter text-[9px] uppercase text-[#6a4f3b] block">
              {isEs ? "Bases de Datos & ORM" : "Databases & ORM"}
            </span>
            <span className="font-semibold text-[#22140c]">
              PostgreSQL, Prisma, Supabase, TypeORM
            </span>
          </div>
          <div>
            <span className="font-typewriter text-[9px] uppercase text-[#6a4f3b] block">
              {isEs ? "Formación Académica" : "Academic Background"}
            </span>
            <span className="font-semibold text-[#22140c]">
              {isEs
                ? "Técnico Superior en Programación (Teclab)"
                : "Higher Technician in Programming (Teclab)"}
            </span>
          </div>
        </div>
      </div>

      {/* Bottom Action Navigation */}
      <div className="pt-1 flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <button
            onClick={() => goToSection("projects")}
            className="px-3.5 py-1.5 bg-[#265538] hover:bg-[#1a3d27] text-[#f5ebd6] font-typewriter text-xs font-bold uppercase tracking-wider rounded-xs shadow-xs transition-colors cursor-pointer"
          >
            {t.hero.btnPrimary} →
          </button>
          <button
            onClick={() => goToSection("contact")}
            className="px-3 py-1.5 border border-[#5a4232]/70 hover:bg-[#5a4232]/10 text-[#22140c] font-typewriter text-xs font-bold uppercase tracking-wider rounded-xs transition-colors cursor-pointer"
          >
            {t.hero.btnSecondary}
          </button>
        </div>

        <a
          href="/projects/Tomas%20Reyes%20CV.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 font-typewriter text-[11px] font-bold uppercase tracking-wider text-[#882b2b] hover:underline"
        >
          <FileDown className="w-3.5 h-3.5" />
          <span>{t.hero.btnCv}</span>
        </a>
      </div>
    </div>
  );
}
