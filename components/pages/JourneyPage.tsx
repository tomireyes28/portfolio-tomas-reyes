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
  Compass,
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
  const { language } = useLanguage();
  const isEs = language === "es";

  const milestones = [
    {
      roman: "I",
      icon: Target,
      period: isEs ? "2022 — ACTUALIDAD" : "2022 — PRESENT",
      organization: "Zonasyc // Multimedio Digital",
      role: isEs ? "Fundación de Zonasyc & Liderazgo" : "Zonasyc Founding & Leadership",
      narrative: isEs
        ? "Fundé y coordiné el multimedio digital Zonasyc desde cero. Lideré el equipo de redacción y definí la arquitectura editorial y publicación diaria de contenidos, desarrollando visión integral de producto, audiencia y gestión de personas."
        : "Founded and managed digital media outlet Zonasyc from scratch. Led editorial teams and defined publishing pipelines, cultivating end-to-end product vision, audience empathy, and team leadership.",
      highlights: isEs
        ? ["Liderazgo de equipo", "Estrategia editorial", "Visión de producto"]
        : ["Team leadership", "Publishing pipelines", "Product mindset"],
      inkColor: "#882b2b",
    },
    {
      roman: "II",
      icon: Users,
      period: "2021 — 2024",
      organization: "UCES // Cs. de la Comunicación",
      role: isEs ? "Periodismo & Comunicación Digital" : "Journalism & Digital Media",
      narrative: isEs
        ? "Mi formación académica potenció mi capacidad analítica para descomponer problemas complejos, articular requerimientos técnicos con claridad entre áreas no técnicas y diseñar interfaces intuitivas donde el usuario nunca se pierde."
        : "My academic degree honed my analytical ability to break down complex problems, articulate technical specifications cleanly across multidisciplinary teams, and craft friction-free user experiences.",
      highlights: isEs
        ? ["Comunicación técnica", "Diseño centrado en usuario", "Pensamiento crítico"]
        : ["Technical clarity", "User-centered design", "Critical thinking"],
      inkColor: "#265538",
    },
    {
      roman: "III",
      icon: Award,
      period: isEs ? "2023 — PRESENTE" : "2023 — PRESENT",
      organization: "Teclab & Desarrollo en Producción",
      role: isEs ? "Técnico Sup. en Programación & Full Stack" : "Associate Degree in Programming & Full Stack",
      narrative: isEs
        ? "Consolidé mi perfil técnico con formación formal en programación y más de 2 años implementando flujos de automatización complejos (Make, n8n), arquitecturas con TypeScript, integraciones de webhooks y aplicaciones web en producción."
        : "Solidified technical expertise through formal software development studies and 2+ years deploying robust workflow automations (Make, n8n), TypeScript architectures, webhook pipelines, and production web apps.",
      highlights: isEs
        ? ["Make & n8n autónomos", "TypeScript & Next.js", "Integración de APIs"]
        : ["Autonomous Make/n8n", "TypeScript & Next.js", "API Integrations"],
      inkColor: "#2d4558",
    },
  ];

  return (
    <div className="flex flex-col justify-between h-full space-y-2 py-1">
      {/* Page Title with Vintage Field Stamp */}
      <div className="flex items-start justify-between border-b border-[#8c6d46]/25 pb-2">
        <div>
          <span className="font-typewriter text-[9px] uppercase tracking-widest text-[#8c6d46] block">
            {isEs ? "REGISTRO DE RUTA & EVOLUCIÓN" : "EXPEDITION ROUTE & TIMELINE"}
          </span>
          <h2 className="font-serif-book text-xl md:text-2xl font-bold text-[#22140c] leading-tight">
            {isEs ? "De Fundador a Desarrollador" : "From Founder to Developer"}
          </h2>
          <p className="font-handwriting text-base text-[#6a4f3b] leading-tight">
            {isEs
              ? "La convergencia entre comunicación, liderazgo y software."
              : "The convergence of communication, leadership, and software."}
          </p>
        </div>
        <div className="hidden sm:flex flex-col items-end shrink-0 pl-2">
          <span className="font-typewriter text-[9px] text-[#265538] border border-[#265538]/40 px-2 py-0.5 rounded-xs bg-[#265538]/5 font-bold tracking-wider">
            2021 — PRESENTE
          </span>
        </div>
      </div>

      {/* Hand-drawn Route Timeline with enriched waypoints */}
      <div className="relative pl-7 space-y-3.5 my-auto">
        {/* Continuous ink trail line */}
        <div className="absolute left-2.5 top-2 bottom-3 w-px border-l-2 border-dashed border-[#8c6d46]/45" />

        {milestones.map((m) => {
          const Icon = m.icon;
          return (
            <div key={m.roman} className="relative group">
              {/* Waypoint circle stamped on line */}
              <div
                className="absolute -left-[31px] top-0.5 w-6 h-6 rounded-full border-2 border-dashed flex items-center justify-center bg-[#ebdcc3] shadow-2xs group-hover:scale-110 transition-transform"
                style={{ borderColor: m.inkColor, color: m.inkColor }}
              >
                <span className="font-typewriter text-[10px] font-bold">
                  {m.roman}
                </span>
              </div>

              {/* Waypoint Metadata & Content */}
              <div>
                <div className="flex flex-wrap items-center justify-between gap-x-2 gap-y-0.5">
                  <div className="flex items-center gap-1.5">
                    <Icon
                      className="w-3.5 h-3.5 shrink-0"
                      style={{ color: m.inkColor }}
                    />
                    <h3 className="font-serif-book text-sm font-bold text-[#22140c]">
                      {m.role}
                    </h3>
                  </div>
                  <span className="font-typewriter text-[9px] font-medium text-[#7a5a40]">
                    {m.period}
                  </span>
                </div>

                <div className="text-[11px] font-typewriter text-[#8c6e54] tracking-wide mb-1">
                  {m.organization}
                </div>

                <p className="font-serif-book text-xs text-[#452f20] leading-relaxed pl-3 border-l border-[#8c6d46]/25">
                  {m.narrative}
                </p>

                {/* Achievement / Skill Chips */}
                <div className="flex flex-wrap gap-1.5 mt-1.5 pl-3">
                  {m.highlights.map((h, i) => (
                    <span
                      key={i}
                      className="font-typewriter text-[9px] px-1.5 py-0.5 rounded-xs border border-[#8c6d46]/30 bg-[#f4ecd8]/60 text-[#5a4232]"
                    >
                      {h}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Marginal Signature & Expedition Status */}
      <div className="pt-1.5 border-t border-dashed border-[#8c6d46]/20 flex items-center justify-between text-xs">
        <span className="font-typewriter text-[9px] uppercase tracking-wider text-[#8c6e54] flex items-center gap-1">
          <span className="w-1.5 h-1.5 rounded-full bg-[#265538]" />
          {isEs ? "STATUS: EN ACTIVO // BUE-AR" : "STATUS: ACTIVE // BUE-AR"}
        </span>
        <span className="font-handwriting text-lg text-[#8c6e54] italic">
          — Tomás Reyes
        </span>
      </div>
    </div>
  );
}

export function JourneyRightPage() {
  const { language } = useLanguage();
  const isEs = language === "es";

  const softSkills = [
    {
      id: "team",
      name: isEs ? "Liderazgo & Coordinación" : "Team Leadership & Coordination",
      tag: isEs ? "Gestión Ágil" : "Agile Management",
      desc: isEs
        ? "Experiencia real coordinando redactores y alineando prioridades técnicas con objetivos de negocio sin fricción."
        : "Real-world experience managing writers and aligning technical priorities with business goals smoothly.",
      color: "#265538",
    },
    {
      id: "product",
      name: isEs ? "Visión de Procesos & Negocio" : "Process & Business Mindset",
      tag: isEs ? "Optimización" : "Optimization",
      desc: isEs
        ? "Mapeo de cuellos de botella manuales y diseño de automatizaciones que ahorran horas de trabajo repetitivo."
        : "Identifying manual bottlenecks and designing automations that eliminate hours of repetitive tasks.",
      color: "#882b2b",
    },
    {
      id: "problem",
      name: isEs ? "Resolución Pragmática" : "Pragmatic Problem Solving",
      tag: isEs ? "Criterio Técnico" : "Technical Judgment",
      desc: isEs
        ? "Criterio para saber cuándo construir código a medida y cuándo apalancarse en herramientas y APIs eficientes."
        : "Sound judgment knowing when to write custom code and when to leverage battle-tested APIs.",
      color: "#2d4558",
    },
    {
      id: "adapt",
      name: isEs ? "Adaptabilidad Rápida" : "Fast Adaptability",
      tag: isEs ? "Curva Acelerada" : "Fast Learner",
      desc: isEs
        ? "Facilidad para asimilar nuevos stacks, documentación compleja y librerías modernas en tiempos reducidos."
        : "Quickly mastering new stacks, complex technical documentation, and modern libraries.",
      color: "#94631d",
    },
    {
      id: "owner",
      name: isEs ? "Ownership de Punta a Punta" : "End-to-End Ownership",
      tag: isEs ? "Autonomía" : "Accountability",
      desc: isEs
        ? "Compromiso absoluto desde la comprensión del problema y el diseño hasta el despliegue y monitoreo."
        : "Total accountability from initial problem discovery and design through deployment and telemetry.",
      color: "#563148",
    },
    {
      id: "learn",
      name: isEs ? "Evolución Continua" : "Continuous Evolution",
      tag: isEs ? "Mejora Constante" : "Growth Mindset",
      desc: isEs
        ? "Curiosidad activa por buenas prácticas de TypeScript, clean code, arquitecturas escalables y flujos con IA."
        : "Relentless curiosity for TypeScript clean architecture, scalable patterns, and AI-assisted workflows.",
      color: "#334e68",
    },
  ];

  return (
    <div className="flex flex-col justify-between h-full space-y-2 py-1">
      {/* Clean Heading */}
      <div className="border-b border-[#8c6d46]/25 pb-2">
        <span className="font-typewriter text-[9px] uppercase tracking-widest text-[#8c6d46] block">
          {isEs ? "VALOR DIFERENCIAL & EQUIPO" : "PROFESSIONAL EDGE & MINDSET"}
        </span>
        <h3 className="font-serif-book text-xl md:text-2xl font-bold text-[#22140c] leading-tight">
          {isEs ? "Criterio Profesional & Trabajo en Equipo" : "Professional Insight & Team Mindset"}
        </h3>
        <p className="font-handwriting text-base text-[#6a4f3b] leading-tight">
          {isEs
            ? "Insignias de liderazgo, comunicación operativa y criterio de ingeniería."
            : "Badges of leadership, operational communication, and engineering judgment."}
        </p>
      </div>

      {/* 6 Circular Stamped Insignias with full visual body */}
      <div className="grid grid-cols-2 gap-x-3 gap-y-2.5 my-auto">
        {softSkills.map((item) => {
          const Icon = softSkillIcons[item.id] || Award;

          return (
            <div
              key={item.id}
              className="group flex items-start gap-2 p-1.5 rounded-xs border border-transparent hover:border-[#8c6d46]/20 hover:bg-[#f4ecd8]/40 transition-colors"
            >
              {/* Circular Stamp Emblem */}
              <div
                className="w-8 h-8 rounded-full border-1.5 border-dashed flex items-center justify-center shrink-0 transition-transform group-hover:scale-110 group-hover:rotate-6 mt-0.5 bg-[#ebdcc3]/60 shadow-2xs"
                style={{ borderColor: item.color, color: item.color }}
              >
                <Icon className="w-4 h-4" />
              </div>

              {/* Text directly on parchment */}
              <div className="space-y-0.5 flex-1 min-w-0">
                <div className="flex items-center justify-between gap-1">
                  <h4 className="font-serif-book text-xs font-bold text-[#22140c] leading-tight truncate group-hover:text-[#882b2b] transition-colors">
                    {item.name}
                  </h4>
                </div>
                <span className="font-typewriter text-[8px] uppercase tracking-wider text-[#8c6e54] block">
                  {item.tag}
                </span>
                <p className="font-serif-book text-[10.5px] text-[#4a3526] leading-tight">
                  {item.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Field Balance Certification Box */}
      <div className="p-2 rounded-xs border border-dashed border-[#8c6d46]/35 bg-[#f4ecd8]/50 flex items-center gap-3">
        <div className="w-8 h-8 rounded-full border border-[#8c6d46]/50 flex items-center justify-center shrink-0 text-[#8c6d46]">
          <Compass className="w-4 h-4" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="font-serif-book text-[11px] text-[#3d2719] italic leading-tight">
            {isEs
              ? "“El buen software no solo resuelve la lógica técnica: optimiza el tiempo de quienes lo operan y garantiza una base mantenible a largo plazo.”"
              : "“Great software solves technical logic while respecting the time of those who operate it and ensuring long-term maintainability.”"}
          </p>
          <span className="font-typewriter text-[8px] uppercase tracking-widest text-[#8c6e54] mt-0.5 block">
            {isEs ? "CRITERIO DE INGENIERÍA // EXPEDICIÓN 2026" : "ENGINEERING CRITERIA // EXPEDITION 2026"}
          </span>
        </div>
      </div>
    </div>
  );
}
