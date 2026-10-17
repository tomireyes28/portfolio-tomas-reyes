"use client";

import React, { useState } from "react";
import {
  Mail,
  Github,
  Linkedin,
  Copy,
  Check,
  ExternalLink,
  FileDown,
  Code2,
  ArrowUpRight,
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
            ? "Si tenés una propuesta laboral, un proyecto o querés sumar un perfil Full Stack & Automatización a tu equipo, escribime por cualquiera de estos canales:"
            : "If you have a job opportunity, a project, or want to bring a Full Stack & Automation mindset to your team, feel free to reach out directly:"}
        </p>
      </div>

      {/* Main Channels Stack */}
      <div className="space-y-2.5 my-auto">
        {/* Channel 1: Email Card */}
        <div className="p-3 rounded-xs bg-[#fdfbf7] border border-[#8c6d46]/35 shadow-xs space-y-2">
          <div className="flex items-center justify-between border-b border-[#8c6d46]/20 pb-1">
            <span className="font-typewriter text-[9.5px] uppercase tracking-wider text-[#6a4f3b] font-medium">
              {isEs ? "Correo Electrónico" : "Email Address"}
            </span>
            <span className="font-typewriter text-[9px] text-[#265538] font-semibold flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#265538] animate-pulse" />
              {isEs ? "Bandeja activa" : "Active inbox"}
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
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-typewriter text-xs font-bold text-[#22140c]">
                  LinkedIn
                </span>
                <span className="font-typewriter text-[9.5px] text-[#265538] font-semibold">
                  /in/tomasreyes1
                </span>
              </div>
              <span className="font-serif-book text-[11px] text-[#6a4f3b] block">
                {isEs ? "Red profesional y trayectoria" : "Professional network & background"}
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
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-typewriter text-xs font-bold text-[#22140c]">
                  GitHub
                </span>
                <span className="font-typewriter text-[9.5px] text-[#6a4f3b] font-semibold">
                  @tomireyes28
                </span>
              </div>
              <span className="font-serif-book text-[11px] text-[#6a4f3b] block">
                {isEs ? "Código fuente y repositorios de proyectos" : "Source code & project repositories"}
              </span>
            </div>
          </div>
          <ExternalLink className="w-3.5 h-3.5 text-[#8c6e54] opacity-60 group-hover:opacity-100 transition-opacity shrink-0 ml-2" />
        </a>
      </div>

      {/* Footer Info: Modality & Location */}
      <div className="pt-2 border-t border-[#8c6d46]/25 flex items-center justify-between text-xs">
        <span className="font-serif-book text-[#6a4f3b] italic">
          {isEs ? "Buenos Aires, AR • Remoto / Híbrido" : "Buenos Aires, AR • Remote / Hybrid"}
        </span>
        <span className="font-typewriter text-[9.5px] text-[#265538] font-bold uppercase tracking-wider flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#265538]" />
          {isEs ? "Disponible" : "Available"}
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
            {isEs ? "CIERRE" : "CLOSING"}
          </span>
          <span className="font-serif-book text-xs text-[#8c6d46]">✦ ❖ ✦</span>
        </div>
        <h3 className="font-serif-book text-2xl lg:text-3xl font-bold text-[#22140c] leading-tight">
          {isEs ? "Notas Finales" : "Final Notes"}
        </h3>
      </div>

      {/* Author Closing Note */}
      <div className="space-y-2 text-[#2f1c10] font-serif-book text-xs sm:text-[13px] leading-relaxed pl-3 border-l-2 border-[#8c6d46]/35">
        <p>
          {isEs
            ? "Gracias por tomarte el tiempo de recorrer esta bitácora. Cada proyecto, componente y automatización refleja mi compromiso con construir software mantenible, con foco en negocio y sin fricción técnica."
            : "Thank you for taking the time to explore this portfolio book. Every project, component, and automation reflects my commitment to building resilient software with clear business impact and zero technical friction."}
        </p>
      </div>

      {/* Technical Colophon Box (How this book was built) */}
      <div className="p-3 rounded-xs bg-[#fdfbf7] border border-[#8c6d46]/35 shadow-xs space-y-2">
        <div className="flex items-center gap-1.5 border-b border-[#8c6d46]/20 pb-1 text-[#4a3325]">
          <Code2 className="w-3.5 h-3.5 text-[#882b2b]" />
          <span className="font-typewriter text-[9.5px] uppercase tracking-wider font-bold">
            {isEs ? "Arquitectura de este Portfolio" : "Architecture of this Book"}
          </span>
        </div>

        <div className="grid grid-cols-2 gap-2 text-xs font-serif-book">
          <div className="space-y-0.5">
            <span className="font-typewriter text-[9px] uppercase text-[#8c6e54] block">
              Core Stack
            </span>
            <p className="font-bold text-[#22140c] text-[11.5px]">
              Next.js 16 • React 19
            </p>
          </div>

          <div className="space-y-0.5">
            <span className="font-typewriter text-[9px] uppercase text-[#8c6e54] block">
              Lenguaje
            </span>
            <p className="font-bold text-[#22140c] text-[11.5px]">
              TypeScript
            </p>
          </div>

          <div className="space-y-0.5">
            <span className="font-typewriter text-[9px] uppercase text-[#8c6e54] block">
              Estilos
            </span>
            <p className="font-bold text-[#22140c] text-[11.5px]">
              Tailwind CSS
            </p>
          </div>

          <div className="space-y-0.5">
            <span className="font-typewriter text-[9px] uppercase text-[#8c6e54] block">
              Animación 3D
            </span>
            <p className="font-bold text-[#22140c] text-[11.5px]">
              Framer Motion
            </p>
          </div>
        </div>
      </div>

      {/* CV Download Banner */}
      <a
        href="/projects/Tomas%20Reyes%20CV.pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center justify-between px-3.5 py-2.5 rounded-xs bg-[#22140c] hover:bg-[#3d2416] text-[#f5ebd6] border border-[#22140c] shadow-md hover:shadow-lg transition-all duration-200"
      >
        <div className="flex items-center gap-2">
          <FileDown className="w-4 h-4 text-[#e2be6b] group-hover:translate-y-0.5 transition-transform" />
          <span className="font-typewriter text-xs font-bold uppercase tracking-wider block">
            {isEs ? "Descargar CV (PDF)" : "Download CV (PDF)"}
          </span>
        </div>
        <ArrowUpRight className="w-4 h-4 text-[#e2be6b] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
      </a>

      {/* Signature & Date Footer */}
      <div className="pt-1.5 border-t border-[#8c6d46]/20 flex items-center justify-between text-xs">
        <span className="font-serif-book text-[#8c6e54] text-[11px] italic">
          Buenos Aires • Anno 2026
        </span>
        <span className="font-handwriting text-2xl text-[#22140c] leading-none select-none">
          Tomás Reyes
        </span>
      </div>
    </div>
  );
}
