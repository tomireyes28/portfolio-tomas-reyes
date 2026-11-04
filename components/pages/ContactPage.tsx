"use client";

import React from "react";
import {
  Github,
  Linkedin,
  ExternalLink,
  ArrowUpRight,
} from "lucide-react";
import ContactEmail from "@/components/ui/ContactEmail";
import ContactForm from "@/components/ui/ContactForm";
import { useLanguage } from "@/context/LanguageContext";

export function ContactLeftPage() {
  const { language } = useLanguage();
  const isEs = language === "es";

  return (
    <div className="flex flex-col justify-between h-full py-1 space-y-3">
      {/* Editorial Header */}
      <div>
        <span className="font-typewriter text-[9px] uppercase tracking-widest text-[#8c6d46] block mb-0.5">
          {isEs ? "REDES & PERFILES" : "NETWORKS & PROFILES"}
        </span>
        <h2 className="font-serif-book text-2xl lg:text-3xl font-bold text-[#22140c] leading-tight">
          {isEs ? "Redes y Código" : "Profiles & Code"}
        </h2>
        <p className="font-serif-book text-xs sm:text-[13px] text-[#452f20] mt-1.5 leading-relaxed">
          {isEs
            ? "Para conocer más sobre mi trayectoria o explorar los repositorios de mis proyectos:"
            : "To learn more about my professional journey or explore my project repositories:"}
        </p>
      </div>

      {/* Main Social Channels Stack with Prominent Logos */}
      <div className="space-y-3.5 my-auto">
        {/* Channel 1: LinkedIn */}
        <a
          href="https://www.linkedin.com/in/tomasreyes1/"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center justify-between p-4 rounded-xs bg-[#fdfbf7] border border-[#8c6d46]/35 hover:border-[#265538] shadow-xs hover:shadow-md transition-all duration-200"
        >
          <div className="flex items-center gap-3.5 overflow-hidden">
            <div className="w-12 h-12 rounded-xs bg-[#265538]/10 border border-[#265538]/30 flex items-center justify-center text-[#265538] shrink-0 group-hover:scale-105 transition-transform">
              <Linkedin className="w-6 h-6 stroke-[1.8]" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-serif-book text-base font-bold text-[#22140c]">
                  LinkedIn
                </span>
                <ExternalLink className="w-3.5 h-3.5 text-[#265538] opacity-60 group-hover:opacity-100 transition-opacity" />
              </div>
              <span className="font-typewriter text-xs text-[#265538] font-semibold block mt-0.5">
                linkedin.com/in/tomasreyes1
              </span>
            </div>
          </div>
          <ArrowUpRight className="w-4 h-4 text-[#265538] opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0 ml-2" />
        </a>

        {/* Channel 2: GitHub */}
        <a
          href="https://github.com/tomireyes28"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center justify-between p-4 rounded-xs bg-[#fdfbf7] border border-[#8c6d46]/35 hover:border-[#22140c] shadow-xs hover:shadow-md transition-all duration-200"
        >
          <div className="flex items-center gap-3.5 overflow-hidden">
            <div className="w-12 h-12 rounded-xs bg-[#22140c]/5 border border-[#22140c]/20 flex items-center justify-center text-[#22140c] shrink-0 group-hover:scale-105 transition-transform">
              <Github className="w-6 h-6 stroke-[1.8]" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-serif-book text-base font-bold text-[#22140c]">
                  GitHub
                </span>
                <ExternalLink className="w-3.5 h-3.5 text-[#8c6e54] opacity-60 group-hover:opacity-100 transition-opacity" />
              </div>
              <span className="font-typewriter text-xs text-[#6a4f3b] font-semibold block mt-0.5">
                github.com/tomireyes28
              </span>
            </div>
          </div>
          <ArrowUpRight className="w-4 h-4 text-[#8c6e54] opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0 ml-2" />
        </a>
      </div>

      <ContactEmail />

      {/* Footer Info: Modality & Location */}
      <div className="pt-2 border-t border-[#8c6d46]/25 flex items-center justify-between text-xs">
        <span className="font-serif-book text-[#6a4f3b] italic">
          Buenos Aires, Argentina
        </span>
        <span className="font-typewriter text-[9.5px] text-[#6a4f3b] font-semibold uppercase tracking-wider">
          {isEs ? "Remoto / Híbrido" : "Remote / Hybrid"}
        </span>
      </div>
    </div>
  );
}

export function ContactRightPage() {
  const { language } = useLanguage();
  const isEs = language === "es";
  return (
    <div className="flex flex-col justify-between h-full py-1 space-y-2.5">
      {/* Editorial Header */}
      <div className="border-b border-[#8c6d46]/25 pb-1.5">
        <div className="flex items-center justify-between">
          <span className="font-typewriter text-[9px] uppercase tracking-widest text-[#8c6d46] block">
            {isEs ? "CONTACTO DIRECTO" : "DIRECT CONTACT"}
          </span>
          <span className="font-serif-book text-xs text-[#8c6d46]">✦ ❖ ✦</span>
        </div>
        <h3 className="font-serif-book text-2xl lg:text-3xl font-bold text-[#22140c] leading-tight">
          {isEs ? "Hablemos" : "Let's Connect"}
        </h3>
      </div>

      {/* Natural Invitation Copy */}
      <div className="font-serif-book text-xs sm:text-[12.5px] text-[#2f1c10] leading-relaxed pl-3 border-l-2 border-[#8c6d46]/35">
        <p>
          {isEs
            ? "Si tenés un proyecto en mente o una oportunidad para sumar a tu equipo, escribime. Contame qué necesitás y lo conversamos."
            : "Have a project in mind or an opportunity on your team? Send me a message about what you need and we can discuss it."}
        </p>
      </div>

      <ContactForm compact />

      {/* Signature & Availability Footer */}
      <div className="pt-2 border-t border-[#8c6d46]/20 flex items-center justify-between text-xs">
        <span className="font-typewriter text-[10px] text-[#265538] font-bold uppercase tracking-wider">
          {isEs ? "Disponibilidad inmediata" : "Immediate availability"}
        </span>
        <span className="font-handwriting text-2xl text-[#22140c] leading-none select-none">
          Tomás Reyes
        </span>
      </div>
    </div>
  );
}
