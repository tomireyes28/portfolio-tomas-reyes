"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  Compass,
  FileDown,
  Globe,
  MapPin,
  Terminal,
  Award,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  Copy,
  Check,
  Sparkles,
  Layers,
  Briefcase,
  GraduationCap,
  Lightbulb,
  MessageSquare,
  Workflow,
  Code2,
  ChevronUp,
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { useBook } from "@/context/BookContext";
import { projects } from "@/src/projects";
import { skills } from "@/src/skills";
import { Project } from "@/types/Project";
import { ProjectCategoryFilter } from "@/components/pages/ProjectsPage";

const principleIcons: Record<
  string,
  React.ComponentType<{ className?: string; style?: React.CSSProperties }>
> = {
  product: Lightbulb,
  communication: MessageSquare,
  automation: Workflow,
  architecture: Code2,
};

export default function MobilePortfolio() {
  const { language, toggleLanguage, t } = useLanguage();
  const { setSelectedProject } = useBook();
  const isEs = language === "es";

  const [copied, setCopied] = useState(false);
  const [filter, setFilter] = useState<ProjectCategoryFilter>("all");
  const [activeSection, setActiveSection] = useState<string>("sobre-mi");
  const [showBackToTop, setShowBackToTop] = useState(false);

  // Copy email handler with feedback
  const handleCopyEmail = () => {
    navigator.clipboard.writeText("tomireyes.tr@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  // Filter projects
  const filteredProjects = projects.filter((p) => {
    if (filter === "all") return true;
    return p.category === filter;
  });

  // Smooth scroll helper
  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -90; // offset for sticky nav
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  // Scroll spy & Back-to-top button
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);

      const sections = ["sobre-mi", "proyectos", "tecnologias", "trayectoria", "contacto"];
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 140 && rect.bottom >= 140) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative w-full min-h-screen bg-[#110a05] text-[#22140c] selection:bg-[#c89d45]/30 selection:text-[#22140c] pb-16">
      {/* ============================================================== */}
      {/* STICKY TOP APP BAR                                             */}
      {/* ============================================================== */}
      <header className="sticky top-0 z-40 w-full bg-[#170e08]/95 backdrop-blur-md border-b border-[#c89d45]/25 shadow-lg">
        {/* Top brand row */}
        <div className="flex items-center justify-between px-3.5 py-2.5">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="flex items-center gap-1.5 text-[#e2be6b] hover:text-[#fdf5e2] transition-colors cursor-pointer"
          >
            <Compass className="w-4 h-4 text-[#c89d45]" />
            <span className="font-serif-book font-bold text-sm tracking-wide text-[#f5ebd6]">
              Tomás Reyes
            </span>
          </button>

          <div className="flex items-center gap-2">
            <a
              href="/projects/Tomas%20Reyes%20CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 px-2.5 py-1 rounded-xs bg-[#265538] hover:bg-[#1e442d] text-[#f5ebd6] border border-[#c89d45]/40 font-typewriter text-[11px] font-bold uppercase tracking-wider shadow-xs transition-colors"
            >
              <FileDown className="w-3.5 h-3.5" />
              <span>CV</span>
            </a>

            <button
              onClick={toggleLanguage}
              type="button"
              className="flex items-center gap-1 px-2 py-1 rounded-xs bg-[#24150d] hover:bg-[#382014] text-[#e2be6b] border border-[#c89d45]/30 font-typewriter text-[11px] font-bold uppercase tracking-wider transition-colors cursor-pointer"
            >
              <Globe className="w-3 h-3 text-[#c89d45]" />
              <span>{language.toUpperCase()}</span>
            </button>
          </div>
        </div>

        {/* Section Navigation Pills (Horizontal scroll) */}
        <nav className="flex items-center gap-1.5 px-3 py-1.5 overflow-x-auto no-scrollbar border-t border-[#8c6d46]/20 bg-[#120b06]">
          {[
            { id: "sobre-mi", label: isEs ? "Sobre mí" : "About" },
            { id: "proyectos", label: isEs ? "Proyectos" : "Projects" },
            { id: "tecnologias", label: isEs ? "Stack" : "Stack" },
            { id: "trayectoria", label: isEs ? "Trayectoria" : "Journey" },
            { id: "contacto", label: isEs ? "Contacto" : "Contact" },
          ].map((tab) => {
            const isActive = activeSection === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => scrollTo(tab.id)}
                type="button"
                className={`whitespace-nowrap px-3 py-1 rounded-full text-[11.5px] font-typewriter font-semibold tracking-wide transition-all cursor-pointer ${
                  isActive
                    ? "bg-[#882b2b] text-[#f5ebd6] shadow-xs border border-[#c89d45]/50"
                    : "bg-[#24150d]/80 text-[#dfcdad]/80 hover:text-[#f5ebd6] border border-[#8c6d46]/25"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </nav>
      </header>

      {/* ============================================================== */}
      {/* MAIN VERTICAL FEED CONTENT                                     */}
      {/* ============================================================== */}
      <div className="w-full max-w-xl mx-auto px-3.5 sm:px-4 py-5 space-y-7">

        {/* ============================================================ */}
        {/* SECTION 1: SOBRE MÍ / HERO                                   */}
        {/* ============================================================ */}
        <section id="sobre-mi" className="scroll-mt-24 space-y-4">
          <div className="parchment-page-left rounded-lg border border-[#8c6d46]/35 p-4.5 sm:p-5 shadow-xl relative overflow-hidden">
            {/* Washi tape header */}
            <div className="washi-tape absolute -top-1.5 left-1/2 -translate-x-1/2 w-24 h-4.5 rotate-1" />

            {/* Profile Polaroid Card */}
            <div className="polaroid-card p-3 pb-4 rounded-xs border border-[#bfa984] max-w-[240px] mx-auto mt-2 shadow-md transform -rotate-1">
              <div className="w-full aspect-square mx-auto overflow-hidden bg-[#24140b] rounded-xs border border-[#8c6d46]/35 shadow-inner">
                <img
                  src="/perfil.jpg"
                  alt="Tomás Reyes"
                  className="w-full h-full object-cover sepia-[0.10] contrast-[1.04]"
                />
              </div>
              <h1 className="font-handwriting text-2xl font-bold text-[#22140c] mt-2 text-center leading-none">
                Tomás Reyes
              </h1>
              <p className="font-typewriter text-[9.5px] text-[#6a4f3b] uppercase tracking-widest text-center mt-1">
                Full Stack & Automation Dev
              </p>
            </div>

            {/* 4 Stamped Passport Marks */}
            <div className="grid grid-cols-2 gap-2 mt-4">
              <div className="ink-stamp p-2 text-[#265538] border-[#265538]/40 transform -rotate-1 text-left bg-[#f4ebd9]/60">
                <div className="flex items-center gap-1 font-typewriter text-[8.5px] uppercase tracking-wider opacity-85">
                  <MapPin className="w-3 h-3" />
                  <span>{isEs ? "Ubicación" : "Location"}</span>
                </div>
                <p className="font-serif-book text-[11px] font-bold mt-0.5 text-[#22140c]">
                  Buenos Aires, AR
                </p>
              </div>

              <div className="ink-stamp p-2 text-[#882b2b] border-[#882b2b]/40 transform rotate-1 text-left bg-[#f4ebd9]/60">
                <div className="flex items-center gap-1 font-typewriter text-[8.5px] uppercase tracking-wider opacity-85">
                  <Terminal className="w-3 h-3" />
                  <span>{isEs ? "Experiencia" : "Experience"}</span>
                </div>
                <p className="font-serif-book text-[11px] font-bold mt-0.5 text-[#22140c]">
                  {isEs ? "+2 Años en Prod." : "+2 Years in Prod."}
                </p>
              </div>

              <div className="ink-stamp p-2 text-[#452f20] border-[#452f20]/40 transform rotate-1 text-left bg-[#f4ebd9]/60">
                <div className="flex items-center gap-1 font-typewriter text-[8.5px] uppercase tracking-wider opacity-85">
                  <Compass className="w-3 h-3" />
                  <span>{isEs ? "Especialidad" : "Specialty"}</span>
                </div>
                <p className="font-serif-book text-[11px] font-bold mt-0.5 text-[#22140c]">
                  Full Stack & Auto.
                </p>
              </div>

              <div className="ink-stamp p-2 text-[#94631d] border-[#94631d]/40 transform -rotate-1 text-left bg-[#f4ebd9]/60">
                <div className="flex items-center gap-1 font-typewriter text-[8.5px] uppercase tracking-wider opacity-85">
                  <Award className="w-3 h-3" />
                  <span>{isEs ? "Formación" : "Education"}</span>
                </div>
                <p className="font-serif-book text-[11px] font-bold mt-0.5 text-[#22140c]">
                  {isEs ? "Programación & Period." : "Coding & Journalism"}
                </p>
              </div>
            </div>

            {/* Narrative Bio */}
            <div className="mt-4 pt-3.5 border-t border-[#8c6d46]/25">
              <h2 className="font-serif-book text-xl font-bold text-[#22140c] leading-tight mb-2">
                {t.about.title}
              </h2>
              <div className="space-y-2.5 font-serif-book text-[13px] text-[#2f1c10] leading-relaxed pl-3 border-l-2 border-[#8c6d46]/40">
                <p>{t.about.p1}</p>
                <p>{t.about.p2}</p>
                <p>{t.about.p3}</p>
              </div>
            </div>

            {/* Status & Availability */}
            <div className="mt-4 pt-3 border-t border-dashed border-[#8c6d46]/30 flex items-center justify-between text-xs">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#265538] shrink-0" />
                <span className="font-typewriter text-[10px] text-[#452f20] font-semibold">
                  {isEs ? "Disponible para nuevos proyectos" : "Available for new projects"}
                </span>
              </div>
              <span className="font-handwriting text-2xl text-[#6a4f3b]">
                Tomás Reyes
              </span>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* SECTION 2: PROYECTOS                                         */}
        {/* ============================================================ */}
        <section id="proyectos" className="scroll-mt-24 space-y-3.5">
          {/* Header */}
          <div className="flex items-baseline justify-between border-b border-[#c89d45]/25 pb-2">
            <div>
              <span className="font-typewriter text-[9.5px] uppercase tracking-widest text-[#c89d45] block font-bold">
                {t.projects.badge}
              </span>
              <h2 className="font-serif-book text-2xl font-bold text-[#f5ebd6]">
                {t.projects.title}
              </h2>
            </div>
            <span className="font-typewriter text-xs font-bold text-[#c89d45]">
              {filteredProjects.length} / 8
            </span>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-1">
            {[
              { id: "all", label: t.projects.filterAll },
              { id: "fullstack", label: t.projects.filterFullstack },
              { id: "frontend", label: t.projects.filterFrontend },
              { id: "tools", label: t.projects.filterTools },
            ].map((f) => (
              <button
                key={f.id}
                onClick={() => setFilter(f.id as ProjectCategoryFilter)}
                type="button"
                className={`px-3 py-1 rounded-full text-xs font-typewriter font-semibold tracking-wider whitespace-nowrap transition-all cursor-pointer ${
                  filter === f.id
                    ? "bg-[#882b2b] text-[#f5ebd6] border border-[#c89d45]/50 shadow-xs"
                    : "bg-[#24150d] text-[#dfcdad]/75 hover:text-[#f5ebd6] border border-[#8c6d46]/30"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          {/* Project Cards (Full list, styled as tactile Polaroids) */}
          <div className="space-y-4">
            {filteredProjects.map((project, idx) => {
              const projectTitle =
                typeof project.title === "string"
                  ? project.title
                  : project.title[language];
              const projectDesc =
                typeof project.shortDescription === "string"
                  ? project.shortDescription
                  : project.shortDescription[language];

              const pinColor =
                idx % 3 === 0
                  ? "bg-[#b8860b] border-[#5a3e08]"
                  : idx % 3 === 1
                  ? "bg-[#8c2d2d] border-[#4a1515]"
                  : "bg-[#2b583c] border-[#163320]";

              return (
                <div
                  key={project.id}
                  className="polaroid-card p-3.5 rounded-xs border border-[#bfa984] shadow-lg relative flex flex-col justify-between"
                >
                  {/* Pushpin top */}
                  <div
                    className={`w-3.5 h-3.5 rounded-full ${pinColor} border mx-auto -mt-5 mb-2 shadow-xs`}
                  >
                    <div className="w-0.5 h-0.5 rounded-full bg-white/70 ml-0.5 mt-0.5" />
                  </div>

                  {/* Screenshot */}
                  <div
                    onClick={() => setSelectedProject(project)}
                    className="cursor-pointer group relative aspect-[16/9] w-full overflow-hidden bg-[#25160e] rounded-xs border border-[#8c6d46]/40 shadow-inner"
                  >
                    <img
                      src={project.image}
                      alt={projectTitle}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-102"
                    />

                    {project.featured && (
                      <span className="absolute top-2 left-2 inline-flex items-center gap-1 px-1.5 py-0.5 rounded-xs bg-[#25160e]/90 text-[#e2be6b] border border-[#c89d45]/60 font-typewriter text-[9px] uppercase tracking-wider shadow-xs">
                        <Sparkles className="w-2.5 h-2.5 text-[#e2be6b]" />
                        <span>Destacado</span>
                      </span>
                    )}
                  </div>

                  {/* Title & Description */}
                  <div className="mt-2.5">
                    <h3
                      onClick={() => setSelectedProject(project)}
                      className="font-handwriting text-2xl font-bold text-[#22140c] hover:text-[#882b2b] transition-colors cursor-pointer leading-tight"
                    >
                      {projectTitle}
                    </h3>
                    <p className="font-serif-book text-xs text-[#452f20] leading-snug mt-1 line-clamp-3">
                      {projectDesc}
                    </p>
                  </div>

                  {/* Tech stack badges */}
                  <div className="flex flex-wrap gap-1 mt-2.5">
                    {project.techStack.slice(0, 5).map((tech, tIdx) => (
                      <span
                        key={tIdx}
                        className="px-2 py-0.5 rounded-xs bg-[#8c6d46]/15 border border-[#8c6d46]/30 text-[#452f20] font-typewriter text-[9.5px] font-bold"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.techStack.length > 5 && (
                      <span className="px-1.5 py-0.5 rounded-xs bg-[#8c6d46]/10 text-[#6a4f3b] font-typewriter text-[9px]">
                        +{project.techStack.length - 5}
                      </span>
                    )}
                  </div>

                  {/* Action Buttons */}
                  <div className="mt-3 pt-2 border-t border-[#8c6d46]/25 flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xs bg-[#265538] hover:bg-[#1f452d] text-[#f5ebd6] font-typewriter text-[10.5px] font-bold tracking-wider shadow-xs transition-colors"
                        >
                          <ExternalLink className="w-3 h-3" />
                          <span>Demo</span>
                        </a>
                      )}
                      {project.repoUrl && (
                        <a
                          href={project.repoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 px-3 py-1.5 rounded-xs bg-[#3a2012] hover:bg-[#4d2c19] text-[#f5ebd6] font-typewriter text-[10.5px] font-bold tracking-wider shadow-xs transition-colors"
                        >
                          <Github className="w-3 h-3" />
                          <span>Código</span>
                        </a>
                      )}
                    </div>

                    <button
                      onClick={() => setSelectedProject(project)}
                      type="button"
                      className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-xs bg-[#f4ebd9] hover:bg-[#ebdcc3] text-[#452f20] border border-[#8c6d46]/40 font-typewriter text-[10.5px] font-bold tracking-wider transition-colors cursor-pointer"
                    >
                      <Layers className="w-3 h-3 text-[#882b2b]" />
                      <span>{isEs ? "Detalles" : "Details"}</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ============================================================ */}
        {/* SECTION 3: TECNOLOGÍAS & HERRAMIENTAS                         */}
        {/* ============================================================ */}
        <section id="tecnologias" className="scroll-mt-24 space-y-3.5">
          <div className="border-b border-[#c89d45]/25 pb-2">
            <span className="font-typewriter text-[9.5px] uppercase tracking-widest text-[#c89d45] block font-bold">
              {t.skills.badge}
            </span>
            <h2 className="font-serif-book text-2xl font-bold text-[#f5ebd6]">
              {t.skills.title}
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-3.5">
            {[
              {
                title: t.skills.frontend,
                items: skills.filter((s) => s.category === "frontend"),
                accent: "border-l-4 border-l-[#882b2b]",
              },
              {
                title: t.skills.backend,
                items: skills.filter((s) => s.category === "backend"),
                accent: "border-l-4 border-l-[#2d4558]",
              },
              {
                title: t.skills.databases,
                items: skills.filter((s) => s.category === "databases"),
                accent: "border-l-4 border-l-[#94631d]",
              },
              {
                title: t.skills.tools,
                items: skills.filter((s) => s.category === "tools"),
                accent: "border-l-4 border-l-[#265538]",
              },
            ].map((cat, idx) => (
              <div
                key={idx}
                className={`parchment-page-right p-4 rounded-lg border border-[#8c6d46]/35 shadow-md ${cat.accent}`}
              >
                <h3 className="font-serif-book text-base font-bold text-[#22140c] mb-3">
                  {cat.title}
                </h3>
                <div className="grid grid-cols-2 gap-2">
                  {cat.items.map((skill) => (
                    <div
                      key={skill.name}
                      className="flex items-center gap-2 p-2 rounded-xs bg-[#fdfbf7]/80 border border-[#8c6d46]/25"
                    >
                      {skill.icon ? (
                        <img
                          src={skill.icon}
                          alt={skill.name}
                          className="w-4 h-4 object-contain shrink-0"
                          onError={(e) => {
                            e.currentTarget.style.display = "none";
                          }}
                        />
                      ) : (
                        <span className="w-1.5 h-1.5 rounded-full bg-[#8c6d46]" />
                      )}
                      <span className="font-typewriter text-xs font-bold text-[#22140c] truncate">
                        {skill.name}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ============================================================ */}
        {/* SECTION 4: TRAYECTORIA & PRINCIPIOS DE TRABAJO                */}
        {/* ============================================================ */}
        <section id="trayectoria" className="scroll-mt-24 space-y-4">
          <div className="border-b border-[#c89d45]/25 pb-2">
            <span className="font-typewriter text-[9.5px] uppercase tracking-widest text-[#c89d45] block font-bold">
              {t.story.badge}
            </span>
            <h2 className="font-serif-book text-2xl font-bold text-[#f5ebd6]">
              {t.story.title}
            </h2>
          </div>

          {/* Experiencia y Formación */}
          <div className="parchment-page-left p-4.5 rounded-lg border border-[#8c6d46]/35 shadow-md space-y-4">
            {/* Experiencia */}
            <div>
              <div className="flex items-center gap-2 mb-2 pb-1 border-b border-[#8c6d46]/20">
                <Briefcase className="w-4 h-4 text-[#882b2b]" />
                <h3 className="font-serif-book text-sm font-bold uppercase tracking-wide text-[#882b2b]">
                  {t.story.experienceHeading}
                </h3>
              </div>

              <div className="space-y-3 pl-1">
                {t.story.experience.map((exp, eIdx) => (
                  <div
                    key={eIdx}
                    className="relative pl-3.5 border-l-2 border-[#8c6d46]/30"
                  >
                    <div
                      className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full border border-[#ebdcc3]"
                      style={{ backgroundColor: exp.inkColor }}
                    />
                    <div className="flex flex-wrap items-baseline justify-between gap-1">
                      <h4 className="font-serif-book text-sm font-bold text-[#22140c]">
                        {exp.role}
                      </h4>
                      <span className="font-typewriter text-[9.5px] font-bold text-[#7a5a40]">
                        {exp.period}
                      </span>
                    </div>
                    <div className="font-typewriter text-[10px] text-[#8c6e54] mb-1">
                      {exp.organization}
                    </div>
                    <ul className="space-y-0.5">
                      {exp.points.map((pt, pIdx) => (
                        <li
                          key={pIdx}
                          className="font-serif-book text-xs text-[#452f20] leading-snug flex items-start gap-1.5"
                        >
                          <span className="text-[#8c6d46] text-xs leading-none select-none mt-0.5">•</span>
                          <span>{pt}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Formación Académica */}
            <div className="pt-3 border-t border-[#8c6d46]/20">
              <div className="flex items-center gap-2 mb-2 pb-1 border-b border-[#8c6d46]/20">
                <GraduationCap className="w-4 h-4 text-[#2d4558]" />
                <h3 className="font-serif-book text-sm font-bold uppercase tracking-wide text-[#2d4558]">
                  {t.story.educationHeading}
                </h3>
              </div>

              <div className="space-y-2.5 pl-1">
                {t.story.education.map((edu, idx) => (
                  <div
                    key={idx}
                    className="relative pl-3.5 border-l-2 border-[#8c6d46]/30"
                  >
                    <div
                      className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full border border-[#ebdcc3]"
                      style={{ backgroundColor: edu.inkColor }}
                    />
                    <div className="flex flex-wrap items-baseline justify-between gap-1">
                      <h4 className="font-serif-book text-sm font-bold text-[#22140c]">
                        {edu.degree}
                      </h4>
                      <span className="font-typewriter text-[9.5px] font-bold text-[#7a5a40]">
                        {edu.period}
                      </span>
                    </div>
                    <div className="font-typewriter text-[10px] text-[#8c6e54] mb-0.5">
                      {edu.institution}
                    </div>
                    <p className="font-serif-book text-xs text-[#452f20] leading-relaxed">
                      {edu.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Idiomas */}
            <div className="pt-2 border-t border-[#8c6d46]/20 flex items-center justify-between text-xs">
              <div className="flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5 text-[#94631d]" />
                <span className="font-serif-book text-xs font-bold uppercase tracking-wider text-[#94631d]">
                  {t.story.languagesHeading}:
                </span>
              </div>
              <div className="flex items-center gap-2 font-serif-book text-xs text-[#452f20]">
                {t.story.languages.map((lang, lIdx) => (
                  <span key={lIdx} className="flex items-center gap-1">
                    {lIdx > 0 && <span className="text-[#8c6d46]/50">•</span>}
                    <span className="font-bold text-[#22140c]">{lang.name}:</span>
                    <span className="italic text-[#6a4f3b]">{lang.level}</span>
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* 4 Pilares de Criterio Técnico */}
          <div className="parchment-page-right p-4.5 rounded-lg border border-[#8c6d46]/35 shadow-md space-y-3">
            <div className="border-b border-[#8c6d46]/25 pb-1.5">
              <span className="font-typewriter text-[9px] uppercase tracking-widest text-[#8c6d46] block font-bold">
                {t.story.principlesBadge}
              </span>
              <h3 className="font-serif-book text-lg font-bold text-[#22140c]">
                {t.story.principlesTitle}
              </h3>
            </div>

            <div className="space-y-3">
              {t.story.principles.map((pillar) => {
                const Icon = principleIcons[pillar.id] || Lightbulb;
                return (
                  <div
                    key={pillar.id}
                    className="relative pl-3.5 border-l-2 border-[#8c6d46]/30 py-0.5"
                  >
                    <div
                      className="absolute -left-[5px] top-1.5 w-2 h-2 rounded-full border border-[#ebdcc3]"
                      style={{ backgroundColor: pillar.color }}
                    />
                    <div className="flex items-center gap-1.5 mb-1">
                      <span className="font-typewriter text-[10px] font-bold text-[#8c6d46]">
                        § {pillar.roman}
                      </span>
                      <span className="text-[#8c6d46]/40">•</span>
                      <Icon className="w-3.5 h-3.5" style={{ color: pillar.color }} />
                      <h4 className="font-serif-book text-sm font-bold text-[#22140c]">
                        {pillar.title}
                      </h4>
                    </div>
                    <p className="font-serif-book text-xs text-[#452f20] leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* SECTION 5: CONTACTO & NOTAS FINALES                           */}
        {/* ============================================================ */}
        <section id="contacto" className="scroll-mt-24 space-y-4">
          <div className="border-b border-[#c89d45]/25 pb-2">
            <span className="font-typewriter text-[9.5px] uppercase tracking-widest text-[#c89d45] block font-bold">
              {isEs ? "Cierre & Conexión" : "Closing & Connection"}
            </span>
            <h2 className="font-serif-book text-2xl font-bold text-[#f5ebd6]">
              {isEs ? "Contacto Directo" : "Direct Contact"}
            </h2>
          </div>

          {/* Direct Email & Socials Card */}
          <div className="parchment-page-left p-4.5 rounded-lg border border-[#8c6d46]/35 shadow-md space-y-3.5">
            {/* Email Card with Copy button */}
            <div className="p-3.5 rounded-xs bg-[#fdfbf7] border border-[#8c6d46]/35 shadow-xs">
              <div className="flex items-center gap-2.5 mb-2.5 text-[#22140c]">
                <div className="w-8 h-8 rounded-xs bg-[#882b2b]/10 border border-[#882b2b]/25 flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4 text-[#882b2b]" />
                </div>
                <div className="overflow-hidden">
                  <span className="font-typewriter text-[9.5px] uppercase tracking-wider text-[#6a4f3b] block">
                    {isEs ? "Correo Electrónico" : "Email Address"}
                  </span>
                  <span className="font-typewriter text-xs sm:text-sm font-bold truncate select-all block text-[#22140c]">
                    tomireyes.tr@gmail.com
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2 pt-2 border-t border-[#8c6d46]/20">
                <button
                  onClick={handleCopyEmail}
                  type="button"
                  className={`flex items-center justify-center gap-1.5 py-2 px-3 rounded-xs font-typewriter text-xs font-bold transition-all cursor-pointer ${
                    copied
                      ? "bg-[#265538] text-[#f5ebd6]"
                      : "bg-[#24150d] hover:bg-[#382014] text-[#dfcdad]"
                  }`}
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5" />
                      <span>{isEs ? "¡Copiado!" : "Copied!"}</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>{isEs ? "Copiar" : "Copy"}</span>
                    </>
                  )}
                </button>

                <a
                  href="mailto:tomireyes.tr@gmail.com"
                  className="flex items-center justify-center gap-1.5 py-2 px-3 rounded-xs bg-[#882b2b] hover:bg-[#6e1e1e] text-[#f5ebd6] font-typewriter text-xs font-bold transition-colors"
                >
                  <ExternalLink className="w-3.5 h-3.5" />
                  <span>{isEs ? "Redactar" : "Write"}</span>
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="grid grid-cols-2 gap-2.5">
              <a
                href="https://github.com/tomireyes28"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xs bg-[#fdfbf7] border border-[#8c6d46]/35 flex items-center justify-between hover:border-[#882b2b] transition-all"
              >
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-xs bg-[#24150d]/10 flex items-center justify-center text-[#24150d]">
                    <Github className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-typewriter text-xs font-bold block text-[#22140c]">
                      GitHub
                    </span>
                    <span className="font-typewriter text-[9.5px] text-[#8c6e54] block">
                      @tomireyes28
                    </span>
                  </div>
                </div>
                <ExternalLink className="w-3 h-3 text-[#6a4f3b]" />
              </a>

              <a
                href="https://linkedin.com/in/tomasreyes1"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xs bg-[#fdfbf7] border border-[#8c6d46]/35 flex items-center justify-between hover:border-[#265538] transition-all"
              >
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-xs bg-[#265538]/10 flex items-center justify-center text-[#265538]">
                    <Linkedin className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="font-typewriter text-xs font-bold block text-[#22140c]">
                      LinkedIn
                    </span>
                    <span className="font-typewriter text-[9.5px] text-[#265538] block">
                      /in/tomasreyes1
                    </span>
                  </div>
                </div>
                <ExternalLink className="w-3 h-3 text-[#265538]" />
              </a>
            </div>
          </div>

          {/* CV & Final Notes Card */}
          <div className="parchment-page-right p-4.5 rounded-lg border border-[#8c6d46]/35 shadow-md space-y-4">
            <div>
              <span className="font-typewriter text-[9px] uppercase tracking-widest text-[#8c6d46] block font-bold mb-1">
                {isEs ? "Cierre" : "Closing"}
              </span>
              <h3 className="font-serif-book text-xl font-bold text-[#22140c]">
                {isEs ? "Notas Finales" : "Final Notes"}
              </h3>
            </div>

            <p className="font-serif-book text-[12.5px] text-[#3d2719] leading-relaxed pl-3 border-l-2 border-[#8c6d46]/40 italic">
              {isEs
                ? "Gracias por tomarte el tiempo de recorrer este portfolio. Cada proyecto, componente y automatización refleja mi compromiso con construir software mantenible, con foco en negocio y sin fricción técnica."
                : "Thank you for taking the time to explore this portfolio. Every project, component, and automation reflects my commitment to building maintainable software with business focus and zero technical friction."}
            </p>

            {/* Architecture Stack */}
            <div className="p-3 rounded-xs bg-[#fdfbf7] border border-[#8c6d46]/35">
              <div className="flex items-center gap-1.5 text-[#882b2b] mb-1.5">
                <Code2 className="w-3.5 h-3.5" />
                <span className="font-typewriter text-[9.5px] uppercase tracking-wider font-bold">
                  {isEs ? "Arquitectura de este portfolio" : "Portfolio Architecture"}
                </span>
              </div>
              <div className="font-serif-book text-xs text-[#22140c] space-y-0.5">
                <div>
                  <span className="font-typewriter text-[9.5px] text-[#8c6e54] uppercase block">
                    Core Stack:
                  </span>
                  <span className="font-bold">Next.js 16 • React 19 • TypeScript</span>
                </div>
                <div className="pt-1">
                  <span className="font-typewriter text-[9.5px] text-[#8c6e54] uppercase block">
                    UI & Animación:
                  </span>
                  <span>Tailwind CSS • Framer Motion</span>
                </div>
              </div>
            </div>

            {/* Download CV Prominent Button */}
            <a
              href="/projects/Tomas%20Reyes%20CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xs bg-[#24150d] hover:bg-[#352014] text-[#f5ebd6] border border-[#c89d45]/60 font-typewriter text-xs font-bold uppercase tracking-wider shadow-md hover:scale-[1.01] active:scale-[0.99] transition-all"
            >
              <FileDown className="w-4 h-4 text-[#c89d45]" />
              <span>{isEs ? "Descargar CV (PDF)" : "Download Resume (PDF)"}</span>
            </a>

            {/* Signature & Date */}
            <div className="pt-3 border-t border-[#8c6d46]/25 flex items-center justify-between text-xs">
              <span className="font-serif-book text-xs text-[#6a4f3b] italic">
                Buenos Aires • Anno 2026
              </span>
              <span className="font-handwriting text-2xl text-[#22140c] transform -rotate-1">
                Tomás Reyes
              </span>
            </div>
          </div>
        </section>

      </div>

      {/* ============================================================== */}
      {/* FLOATING BACK-TO-TOP BUTTON                                    */}
      {/* ============================================================== */}
      {showBackToTop && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          type="button"
          aria-label={isEs ? "Volver al inicio" : "Back to top"}
          className="fixed bottom-4 right-4 z-40 w-10 h-10 rounded-full bg-[#882b2b] text-[#f5ebd6] border border-[#c89d45] flex items-center justify-center shadow-xl active:scale-95 transition-all cursor-pointer"
        >
          <ChevronUp className="w-5 h-5" />
        </button>
      )}
    </div>
  );
}
