"use client";

import React, { useState } from "react";
import {
  Mail,
  Github,
  Linkedin,
  Copy,
  Check,
  ExternalLink,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export function ContactLeftPage() {
  const { language } = useLanguage();
  const [copied, setCopied] = useState(false);
  const isEs = language === "es";

  const copyEmail = () => {
    navigator.clipboard.writeText("tomireyes.tr@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="flex flex-col justify-between h-full py-1 space-y-3">
      {/* Editorial Header */}
      <div>
        <span className="font-typewriter text-[9px] uppercase tracking-widest text-[#8c6d46] block mb-0.5">
          {isEs ? "CANALES DIRECTOS" : "DIRECT CHANNELS"}
        </span>
        <h2 className="font-serif-book text-2xl lg:text-3xl font-bold text-[#22140c] leading-tight">
          {isEs ? "Punto de Contacto" : "Let's Connect"}
        </h2>
        <p className="font-serif-book text-xs sm:text-[13px] text-[#452f20] mt-1.5 leading-relaxed">
          {isEs
            ? "Podés escribirme directamente por cualquiera de estos canales para propuestas laborales, proyectos o colaboraciones técnicas:"
            : "Feel free to reach out directly through any of these channels for job opportunities, projects, or technical collaboration:"}
        </p>
      </div>

      {/* Main Channels Stack */}
      <div className="space-y-2.5 my-auto">
        {/* Channel 1: Email Card */}
        <div className="p-3 rounded-xs bg-[#fdfbf7] border border-[#8c6d46]/35 shadow-xs space-y-2">
          <div className="border-b border-[#8c6d46]/20 pb-1">
            <span className="font-typewriter text-[9.5px] uppercase tracking-wider text-[#6a4f3b] font-medium">
              {isEs ? "Correo Electrónico" : "Email Address"}
            </span>
          </div>

          <div className="flex items-center justify-between gap-2">
            <div className="flex items-center gap-2 text-[#22140c] overflow-hidden">
              <div className="w-7 h-7 rounded-xs bg-[#882b2b]/10 border border-[#882b2b]/25 flex items-center justify-center shrink-0">
                <Mail className="w-3.5 h-3.5 text-[#882b2b]" />
              </div>
              <span className="font-typewriter text-xs sm:text-sm font-bold truncate select-all text-[#22140c]">
                tomireyes.tr@gmail.com
              </span>
            </div>

            <div className="flex items-center gap-1 shrink-0">
              <button
                onClick={copyEmail}
                type="button"
                className={`flex items-center gap-1 px-2.5 py-1 rounded-xs font-typewriter text-[10px] uppercase tracking-wider transition-all cursor-pointer border ${
                  copied
                    ? "bg-[#265538]/15 text-[#265538] border-[#265538] font-bold"
                    : "bg-[#ebdcc3]/70 hover:bg-[#dfcdad] text-[#3d2416] border-[#8c6d46]/50"
                }`}
              >
                {copied ? (
                  <>
                    <Check className="w-3 h-3 text-[#265538]" />
                    <span>{isEs ? "Copiado" : "Copied"}</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3 h-3" />
                    <span>{isEs ? "Copiar" : "Copy"}</span>
                  </>
                )}
              </button>

              <a
                href="mailto:tomireyes.tr@gmail.com"
                className="flex items-center justify-center w-7 h-7 rounded-xs bg-[#22140c] hover:bg-[#3d2416] text-[#f5ebd6] transition-colors"
                title={isEs ? "Abrir correo" : "Send email"}
              >
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Channel 2: LinkedIn */}
        <a
          href="https://www.linkedin.com/in/tomasreyes1/"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center justify-between p-3 rounded-xs bg-[#fdfbf7] border border-[#8c6d46]/35 hover:border-[#265538] shadow-xs hover:shadow-md transition-all duration-200"
        >
          <div className="flex items-center gap-2.5 overflow-hidden">
            <div className="w-7 h-7 rounded-xs bg-[#265538]/10 border border-[#265538]/30 flex items-center justify-center text-[#265538] shrink-0 group-hover:scale-105 transition-transform">
              <Linkedin className="w-3.5 h-3.5" />
            </div>
            <div className="flex items-center gap-2">
              <span className="font-typewriter text-xs font-bold text-[#22140c]">
                LinkedIn
              </span>
              <span className="font-typewriter text-[10px] text-[#265538] font-semibold">
                /in/tomasreyes1
              </span>
            </div>
          </div>
          <ExternalLink className="w-3.5 h-3.5 text-[#265538] opacity-60 group-hover:opacity-100 transition-opacity shrink-0 ml-2" />
        </a>

        {/* Channel 3: GitHub */}
        <a
          href="https://github.com/tomireyes28"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center justify-between p-3 rounded-xs bg-[#fdfbf7] border border-[#8c6d46]/35 hover:border-[#22140c] shadow-xs hover:shadow-md transition-all duration-200"
        >
          <div className="flex items-center gap-2.5 overflow-hidden">
            <div className="w-7 h-7 rounded-xs bg-[#22140c]/5 border border-[#22140c]/20 flex items-center justify-center text-[#22140c] shrink-0 group-hover:scale-105 transition-transform">
              <Github className="w-3.5 h-3.5" />
            </div>
            <div className="flex items-center gap-2">
              <span className="font-typewriter text-xs font-bold text-[#22140c]">
                GitHub
              </span>
              <span className="font-typewriter text-[10px] text-[#6a4f3b] font-semibold">
                @tomireyes28
              </span>
            </div>
          </div>
          <ExternalLink className="w-3.5 h-3.5 text-[#8c6e54] opacity-60 group-hover:opacity-100 transition-opacity shrink-0 ml-2" />
        </a>
      </div>

      {/* Footer Info: Modality & Location (Clean, static typography without blinking lights) */}
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
    <div className="flex flex-col justify-between h-full py-1 space-y-3">
      {/* Editorial Header */}
      <div className="border-b border-[#8c6d46]/25 pb-1.5">
        <div className="flex items-center justify-between">
          <span className="font-typewriter text-[9px] uppercase tracking-widest text-[#8c6d46] block">
            {isEs ? "HABLEMOS" : "LET'S TALK"}
          </span>
          <span className="font-serif-book text-xs text-[#8c6d46]">✦ ❖ ✦</span>
        </div>
        <h3 className="font-serif-book text-2xl lg:text-3xl font-bold text-[#22140c] leading-tight">
          {isEs ? "Construyamos juntos" : "Let's Build Together"}
        </h3>
      </div>

      {/* Narrative & Philosophy */}
      <div className="space-y-3 font-serif-book text-xs sm:text-[13px] text-[#2f1c10] leading-relaxed pl-3.5 border-l-2 border-[#8c6d46]/35 my-auto">
        <p>
          {isEs
            ? "Entiendo el desarrollo como una herramienta para resolver problemas reales: cada línea de código y cada flujo automatizado tiene que simplificar procesos, ahorrar tiempo o potenciar un objetivo claro de negocio."
            : "I approach software development as a practical tool to solve real problems: every line of code and automated workflow should streamline operations, save time, or drive clear business outcomes."}
        </p>
        <p>
          {isEs
            ? "Si estás buscando a alguien para sumar a tu equipo, encarar un desarrollo desde cero o automatizar operaciones que hoy te quitan horas, me encantaría conocer tu propuesta."
            : "If you are looking for a developer to join your engineering team, build a new product from the ground up, or automate manual operations, I would love to hear from you."}
        </p>
      </div>

      {/* Invitation / Direct Connection Card */}
      <div className="p-3.5 rounded-xs bg-[#fdfbf7] border border-[#8c6d46]/35 shadow-xs space-y-2">
        <div className="flex items-center gap-1.5 text-[#22140c]">
          <Sparkles className="w-3.5 h-3.5 text-[#94631d] shrink-0" />
          <span className="font-typewriter text-[9.5px] uppercase tracking-wider text-[#6a4f3b] font-bold">
            {isEs ? "Próximo paso" : "Next Step"}
          </span>
        </div>
        <p className="font-serif-book text-xs text-[#452f20] leading-relaxed">
          {isEs
            ? "Una breve conversación suele ser la mejor manera de ver si hacemos buen fit y explorar cómo puedo aportar valor a tu equipo."
            : "A brief conversation is usually the best way to see if we are a great fit and explore how I can bring value to your team."}
        </p>
        <div className="pt-1.5 flex items-center justify-between border-t border-[#8c6d46]/20 text-xs">
          <a
            href="mailto:tomireyes.tr@gmail.com"
            className="inline-flex items-center gap-1.5 font-typewriter text-[10.5px] uppercase tracking-wider font-bold text-[#882b2b] hover:underline"
          >
            <span>{isEs ? "Escribime un correo" : "Send an email"}</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
          <span className="font-serif-book text-[11px] text-[#6a4f3b] italic">
            {isEs ? "Respuesta en el día" : "Same-day reply"}
          </span>
        </div>
      </div>

      {/* Signature & Location Footer */}
      <div className="pt-1.5 border-t border-[#8c6d46]/20 flex items-center justify-between text-xs">
        <span className="font-serif-book text-[#8c6e54] text-[11px] italic">
          Buenos Aires, Argentina
        </span>
        <span className="font-handwriting text-2xl text-[#22140c] leading-none select-none">
          Tomás Reyes
        </span>
      </div>
    </div>
  );
}
