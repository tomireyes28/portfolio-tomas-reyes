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
      <div className="relative polaroid-card p-3 pb-5 rounded-xs border border-[#bfa984] transform -rotate-2 max-w-[205px] mt-1 shadow-md">
        {/* Washi tape top */}
        <div className="washi-tape absolute -top-2.5 left-1/2 -translate-x-1/2 w-20 h-5 rotate-1" />
        <div className="w-38 h-38 mx-auto overflow-hidden bg-[#2c1810] rounded-xs border border-[#8c6d46]/40">
          <img
            src="/perfil.jpg"
            alt="Tomás Reyes"
            className="w-full h-full object-cover sepia-[0.15] contrast-[1.03]"
          />
        </div>
        <p className="font-handwriting text-2xl font-bold text-[#25160e] mt-2 leading-none">
          Tomás Reyes
        </p>
        <span className="font-typewriter text-[10px] text-[#6e523e] uppercase tracking-widest block mt-0.5">
          Full Stack Developer
        </span>
      </div>

      {/* 4 Explorer Passport Stamps */}
      <div className="w-full grid grid-cols-2 gap-2 my-2">
        <div className="passport-stamp p-2 rounded-xs text-[#2b583c] bg-[#2b583c]/5 transform -rotate-1 text-left">
          <div className="flex items-center gap-1 font-typewriter text-[9px] uppercase tracking-wider opacity-80">
            <MapPin className="w-3 h-3" />
            <span>{isEs ? "Ubicación" : "Location"}</span>
          </div>
          <p className="font-serif-book text-xs font-bold mt-0.5">
            Buenos Aires, AR
          </p>
        </div>

        <div className="passport-stamp p-2 rounded-xs text-[#8c2d2d] bg-[#8c2d2d]/5 transform rotate-1 text-left">
          <div className="flex items-center gap-1 font-typewriter text-[9px] uppercase tracking-wider opacity-80">
            <Terminal className="w-3 h-3" />
            <span>{isEs ? "Proyectos" : "Projects"}</span>
          </div>
          <p className="font-serif-book text-xs font-bold mt-0.5">
            {isEs ? "+12 en Producción" : "+12 in Production"}
          </p>
        </div>

        <div className="passport-stamp p-2 rounded-xs text-[#4a3325] bg-[#4a3325]/5 transform rotate-1 text-left">
          <div className="flex items-center gap-1 font-typewriter text-[9px] uppercase tracking-wider opacity-80">
            <Compass className="w-3 h-3" />
            <span>{isEs ? "Enfoque" : "Focus"}</span>
          </div>
          <p className="font-serif-book text-xs font-bold mt-0.5">
            {isEs ? "Producto & UX" : "Product & UX"}
          </p>
        </div>

        <div className="passport-stamp p-2 rounded-xs text-[#6b3040] bg-[#6b3040]/5 transform -rotate-1 text-left">
          <div className="flex items-center gap-1 font-typewriter text-[9px] uppercase tracking-wider opacity-80">
            <Award className="w-3 h-3" />
            <span>{isEs ? "Formación" : "Education"}</span>
          </div>
          <p className="font-serif-book text-xs font-bold mt-0.5">
            {isEs ? "Téc. Programación" : "Software Degree"}
          </p>
        </div>
      </div>

      {/* Field Notes: Hobbies */}
      <div className="w-full bg-[#d9c8a9]/65 border border-[#8c6d46]/45 rounded-xs p-2.5 text-left">
        <p className="font-typewriter text-[10px] uppercase tracking-wider text-[#4a3325] font-bold mb-1">
          {t.about.hobbiesTitle}
        </p>
        <div className="space-y-1 text-xs font-serif-book text-[#25160e]">
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
    <div className="flex flex-col justify-between h-full py-1 space-y-3">
      {/* Top Status & Title */}
      <div>
        <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-xs bg-[#2b583c]/15 border border-[#2b583c]/40 text-[#2b583c] font-typewriter text-[10px] uppercase tracking-wider mb-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#2b583c] animate-pulse" />
          <span>{t.hero.availability}</span>
        </div>

        <h2 className="font-serif-book text-2xl lg:text-3xl font-bold text-[#25160e] leading-tight">
          {t.about.title}
        </h2>
        <p className="font-handwriting text-xl text-[#6e523e] leading-snug">
          {t.hero.role}
        </p>
      </div>

      {/* Narrative Bio Paragraphs */}
      <div className="space-y-2.5 font-serif-book text-xs sm:text-sm text-[#3a2418] leading-relaxed border-l-2 border-[#8c6d46]/50 pl-3.5">
        <p>{t.about.p1}</p>
        <p>{t.about.p2}</p>
      </div>

      {/* Main Stack & Specialty Ledger Box */}
      <div className="bg-[#f4ebd9]/85 border border-[#8c6d46]/55 p-3 rounded-xs shadow-2xs space-y-2">
        <h3 className="font-typewriter text-[11px] font-bold uppercase tracking-wider text-[#25160e] border-b border-[#8c6d46]/30 pb-1">
          {isEs
            ? "📋 Stack Principal & Especialidad"
            : "📋 Core Stack & Specialty"}
        </h3>
        <div className="grid grid-cols-2 gap-2 text-xs font-serif-book">
          <div>
            <span className="font-typewriter text-[10px] uppercase text-[#6e523e] block">
              Frontend & UI
            </span>
            <span className="font-semibold text-[#25160e]">
              React 19, Next.js 16, TypeScript, Tailwind CSS
            </span>
          </div>
          <div>
            <span className="font-typewriter text-[10px] uppercase text-[#6e523e] block">
              Backend & APIs
            </span>
            <span className="font-semibold text-[#25160e]">
              NestJS, Node.js, Express, REST APIs
            </span>
          </div>
          <div>
            <span className="font-typewriter text-[10px] uppercase text-[#6e523e] block">
              {isEs ? "Bases de Datos & ORM" : "Databases & ORM"}
            </span>
            <span className="font-semibold text-[#25160e]">
              PostgreSQL, Prisma, TypeORM, MongoDB
            </span>
          </div>
          <div>
            <span className="font-typewriter text-[10px] uppercase text-[#6e523e] block">
              {isEs ? "Formación Académica" : "Academic Background"}
            </span>
            <span className="font-semibold text-[#25160e]">
              {isEs
                ? "Técnico Superior en Programación (Teclab)"
                : "Higher Technician in Programming (Teclab)"}
            </span>
          </div>
        </div>
      </div>

      {/* Bottom Action Stamps */}
      <div className="pt-1 flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <button
            onClick={() => goToSection("projects")}
            className="px-3.5 py-2 bg-[#2b583c] hover:bg-[#20442d] text-[#f5e8c7] font-typewriter text-xs font-bold uppercase tracking-wider rounded-xs shadow-xs transition-colors cursor-pointer"
          >
            {t.hero.btnPrimary} →
          </button>
          <button
            onClick={() => goToSection("contact")}
            className="px-3 py-2 border border-[#5a4232] hover:bg-[#5a4232]/10 text-[#25160e] font-typewriter text-xs font-bold uppercase tracking-wider rounded-xs transition-colors cursor-pointer"
          >
            {t.hero.btnSecondary}
          </button>
        </div>

        <a
          href="/projects/Tomas%20Reyes%20CV.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1 font-typewriter text-[11px] font-bold uppercase tracking-wider text-[#8c2d2d] hover:underline"
        >
          <FileDown className="w-3.5 h-3.5" />
          <span>{t.hero.btnCv}</span>
        </a>
      </div>
    </div>
  );
}
