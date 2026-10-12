"use client";

import React from "react";
import { Compass, MapPin, Terminal, Award, FileDown } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function AboutLeftPage() {
  const { language, t } = useLanguage();
  const isEs = language === "es";

  return (
    <div className="flex flex-col items-center text-center h-full justify-between py-1">
      {/* Polaroid Profile Card */}
      <div className="relative polaroid-card p-3 pb-4.5 rounded-xs border border-[#bfa984] transform -rotate-1.5 max-w-[250px] w-full mt-0.5 shadow-lg hover:rotate-0 transition-transform duration-300">
        {/* Washi tape top */}
        <div className="washi-tape absolute -top-2.5 left-1/2 -translate-x-1/2 w-20 h-4.5 rotate-1" />
        <div className="w-full aspect-square mx-auto overflow-hidden bg-[#24140b] rounded-xs border border-[#8c6d46]/35 shadow-inner">
          <img
            src="/perfil.jpg"
            alt="Tomás Reyes"
            className="w-full h-full object-cover sepia-[0.10] contrast-[1.04]"
          />
        </div>
        <p className="font-handwriting text-3xl font-bold text-[#22140c] mt-2 leading-none">
          Tomás Reyes
        </p>
        <span className="font-typewriter text-[10px] text-[#6a4f3b] uppercase tracking-widest block mt-1">
          Full Stack & Automation Dev
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
            <span>{isEs ? "Experiencia" : "Experience"}</span>
          </div>
          <p className="font-serif-book text-xs font-bold mt-0.5 text-[#22140c]">
            {isEs ? "+2 Años de Experiencia" : "+2 Years of Experience"}
          </p>
        </div>

        <div className="ink-stamp p-2 text-[#452f20] border-[#452f20]/40 transform rotate-1 text-left">
          <div className="flex items-center gap-1 font-typewriter text-[9px] uppercase tracking-wider opacity-85">
            <Compass className="w-3 h-3" />
            <span>{isEs ? "Especialidad" : "Specialty"}</span>
          </div>
          <p className="font-serif-book text-xs font-bold mt-0.5 text-[#22140c]">
            {isEs ? "Full Stack & Auto." : "Full Stack & Auto."}
          </p>
        </div>

        <div className="ink-stamp p-2 text-[#94631d] border-[#94631d]/40 transform -rotate-1 text-left">
          <div className="flex items-center gap-1 font-typewriter text-[9px] uppercase tracking-wider opacity-85">
            <Award className="w-3 h-3" />
            <span>{isEs ? "Formación" : "Education"}</span>
          </div>
          <p className="font-serif-book text-xs font-bold mt-0.5 text-[#22140c]">
            {isEs ? "Periodismo & Programación" : "Journalism & Programming"}
          </p>
        </div>
      </div>

      {/* Availability & Core Info (Clean, unified typography without digital banners or pulses) */}
      <div className="w-full border-t border-dashed border-[#8c6d46]/30 pt-3 text-left">
        <div className="space-y-2 text-xs pl-2.5 border-l-2 border-[#8c6d46]/30">
          <div>
            <span className="font-typewriter text-[9.5px] uppercase text-[#6a4f3b] block mb-0.5">
              {isEs ? "Disponibilidad" : "Availability"}
            </span>
            <p className="font-serif-book font-semibold text-[#22140c] text-xs">
              {isEs
                ? "Disponible para nuevos proyectos y oportunidades"
                : "Open to new projects and opportunities"}
            </p>
          </div>

          <div>
            <span className="font-typewriter text-[9.5px] uppercase text-[#6a4f3b] block mb-0.5">
              {isEs ? "Rol principal" : "Core Focus"}
            </span>
            <p className="font-serif-book font-semibold text-[#22140c] text-xs">
              {isEs
                ? "Full Stack Developer & Automatización de Procesos"
                : "Full Stack Developer & Workflow Automation"}
            </p>
          </div>

          <div>
            <span className="font-typewriter text-[9.5px] uppercase text-[#6a4f3b] block mb-0.5">
              {isEs ? "Modalidad" : "Work Mode"}
            </span>
            <p className="font-serif-book font-semibold text-[#22140c] text-xs">
              {isEs
                ? "Remoto / Híbrido • Buenos Aires, Argentina"
                : "Remote / Hybrid • Buenos Aires, Argentina"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export function AboutRightPage() {
  const { language, t } = useLanguage();
  const isEs = language === "es";

  return (
    <div className="flex flex-col justify-between h-full py-2 space-y-4">
      {/* Title & Role */}
      <div className="border-b border-[#8c6d46]/25 pb-2.5">
        <h2 className="font-serif-book text-2xl lg:text-3xl font-bold text-[#22140c] leading-tight">
          {t.about.title}
        </h2>
        <p className="font-handwriting text-xl text-[#6a4f3b] leading-snug mt-0.5">
          {t.about.role}
        </p>
      </div>

      {/* Narrative Bio - Generous reading layout */}
      <div className="space-y-3 font-serif-book text-xs sm:text-[13px] md:text-[13.5px] text-[#2f1c10] leading-relaxed pl-3.5 border-l-2 border-[#8c6d46]/40 flex-1 flex flex-col justify-center">
        <p>{t.about.p1}</p>
        <p>{t.about.p2}</p>
        <p>{t.about.p3}</p>
      </div>

      {/* Bottom: Natural CV Text Link + Right Handwritten Signature */}
      <div className="pt-3 border-t border-[#8c6d46]/25 flex items-center justify-between gap-3">
        <a
          href="/projects/Tomas%20Reyes%20CV.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 font-typewriter text-xs font-bold uppercase tracking-wider text-[#882b2b] hover:underline transition-colors"
        >
          <FileDown className="w-3.5 h-3.5" />
          <span>{t.hero.btnCv}</span>
        </a>

        <span className="font-handwriting text-2xl sm:text-3xl text-[#452f20] leading-none select-none transform -rotate-1">
          Tomás Reyes
        </span>
      </div>
    </div>
  );
}
