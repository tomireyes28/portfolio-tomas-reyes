"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  BookMarked,
  FileDown,
  Globe,
  ChevronLeft,
  ChevronRight,
  Compass,
  MapPin,
  Wrench,
  Award,
  Mail,
  ExternalLink,
  Github,
  Sparkles,
} from "lucide-react";
import { useBook, BOOK_SECTIONS, BookSectionId } from "@/context/BookContext";
import { useLanguage } from "@/context/LanguageContext";
import BookCover from "./BookCover";
import BookSpine from "./BookSpine";
import BookPage from "./BookPage";
import BookTabs from "./BookTabs";
import { projects } from "@/src/projects";
import { skills } from "@/src/skills";

export default function Book() {
  const {
    isOpen,
    activeSection,
    turnDirection,
    closeBook,
    nextPage,
    prevPage,
    goToSection,
  } = useBook();
  const { language, toggleLanguage, t } = useLanguage();
  const [mobileSubPage, setMobileSubPage] = useState<"left" | "right">("left");

  const isEs = language === "es";
  const sectionIndex = BOOK_SECTIONS.indexOf(activeSection);
  const leftPageNum = String(sectionIndex * 2 + 1).padStart(2, "0");
  const rightPageNum = String(sectionIndex * 2 + 2).padStart(2, "0");

  // Reset mobile subpage to left when changing section
  React.useEffect(() => {
    setMobileSubPage("left");
  }, [activeSection]);

  // 3D Page Turn Variants for the Spread
  const spreadVariants = {
    initial: (dir: "next" | "prev") => ({
      rotateY: dir === "next" ? 32 : -32,
      opacity: 0,
      scale: 0.97,
    }),
    animate: {
      rotateY: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.55,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
      },
    },
    exit: (dir: "next" | "prev") => ({
      rotateY: dir === "next" ? -32 : 32,
      opacity: 0,
      scale: 0.97,
      transition: {
        duration: 0.35,
        ease: [0.4, 0, 1, 1] as [number, number, number, number],
      },
    }),
  };

  // Render Left & Right page content per section (Phase 1 Skeleton + Real Data Preview)
  const renderSpreadContent = (section: BookSectionId) => {
    switch (section) {
      case "about":
        return {
          leftCode: "CAP. I",
          leftTitle: isEs ? "Perfil del Explorador" : "Explorer Profile",
          rightCode: "NOTAS DE CAMPO",
          rightTitle: isEs ? "Biografía & Enfoque" : "Biography & Focus",
          leftContent: (
            <div className="flex flex-col items-center text-center h-full justify-between py-2">
              {/* Polaroid Photo */}
              <div className="relative polaroid-card p-3 pb-7 rounded-xs border border-[#bfa984] transform -rotate-2 max-w-[210px] mt-2">
                {/* Washi tape top */}
                <div className="washi-tape absolute -top-2.5 left-1/2 -translate-x-1/2 w-20 h-5 rotate-2" />
                <div className="w-40 h-40 overflow-hidden bg-[#2c1810] rounded-xs border border-[#8c6d46]/40">
                  <img
                    src="/perfil.jpg"
                    alt="Tomás Reyes"
                    className="w-full h-full object-cover sepia-[0.18] contrast-[1.03]"
                  />
                </div>
                <p className="font-handwriting text-2xl font-bold text-[#25160e] mt-2 leading-none">
                  Tomás Reyes
                </p>
                <span className="font-typewriter text-[10px] text-[#6e523e] uppercase tracking-widest">
                  Full Stack & AI Builder
                </span>
              </div>

              {/* Passport Stamps Quick Facts */}
              <div className="w-full grid grid-cols-2 gap-2.5 my-3">
                <div className="passport-stamp p-2.5 rounded-sm text-[#2b583c] bg-[#2b583c]/5 transform -rotate-1">
                  <p className="font-typewriter text-[10px] uppercase tracking-wider opacity-80">
                    {isEs ? "Base Operativa" : "Home Base"}
                  </p>
                  <p className="font-serif-book text-xs font-bold mt-0.5">
                    Buenos Aires, AR
                  </p>
                </div>
                <div className="passport-stamp p-2.5 rounded-sm text-[#8c2d2d] bg-[#8c2d2d]/5 transform rotate-1">
                  <p className="font-typewriter text-[10px] uppercase tracking-wider opacity-80">
                    {isEs ? "Expediciones" : "Deployments"}
                  </p>
                  <p className="font-serif-book text-xs font-bold mt-0.5">
                    +12 Apps en Prod
                  </p>
                </div>
              </div>

              {/* Hobbies Note */}
              <div className="w-full bg-[#d9c8a9]/60 border border-[#8c6d46]/40 rounded-xs p-3 text-left">
                <p className="font-typewriter text-[11px] uppercase tracking-wider text-[#4a3325] font-bold mb-1.5">
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
                    {t.about.hobbies.learning.emoji}{" "}
                    {t.about.hobbies.learning.text}
                  </p>
                </div>
              </div>
            </div>
          ),
          rightContent: (
            <div className="flex flex-col justify-between h-full py-1 space-y-4">
              <div>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-xs bg-[#2b583c]/15 border border-[#2b583c]/40 text-[#2b583c] font-typewriter text-[11px] uppercase tracking-wider mb-2">
                  <Compass className="w-3.5 h-3.5" />
                  <span>{t.hero.availability}</span>
                </div>

                <h2 className="font-serif-book text-2xl lg:text-3xl font-bold text-[#25160e] leading-snug">
                  {t.about.title}
                </h2>
                <p className="font-handwriting text-xl text-[#6e523e] -mt-1">
                  {t.hero.role}
                </p>
              </div>

              <div className="space-y-3 font-serif-book text-sm text-[#3a2418] leading-relaxed border-l-2 border-[#8c6d46]/40 pl-4">
                <p>{t.about.p1}</p>
                <p>{t.about.p2}</p>
              </div>

              {/* Field Specs Card */}
              <div className="bg-[#f4ebd9]/80 border border-[#8c6d46]/50 p-3.5 rounded-xs shadow-xs space-y-2">
                <h3 className="font-typewriter text-xs font-bold uppercase tracking-wider text-[#25160e] border-b border-[#8c6d46]/30 pb-1">
                  {isEs
                    ? "Equipamiento Principal & Formación"
                    : "Core Gear & Education"}
                </h3>
                <div className="grid grid-cols-2 gap-2 text-xs font-serif-book">
                  <div>
                    <span className="font-typewriter text-[10px] uppercase text-[#6e523e] block">
                      Frontend
                    </span>
                    <span className="font-semibold text-[#25160e]">
                      React 19, Next.js 16, TS, Tailwind
                    </span>
                  </div>
                  <div>
                    <span className="font-typewriter text-[10px] uppercase text-[#6e523e] block">
                      Backend & DB
                    </span>
                    <span className="font-semibold text-[#25160e]">
                      NestJS, Node, PostgreSQL, Prisma
                    </span>
                  </div>
                </div>
              </div>

              <div className="pt-1 flex items-center justify-between">
                <button
                  onClick={() => goToSection("projects")}
                  className="px-4 py-2 bg-[#2b583c] hover:bg-[#20442d] text-[#f5e8c7] font-typewriter text-xs uppercase tracking-wider rounded-xs shadow-sm transition-colors cursor-pointer"
                >
                  {t.hero.btnPrimary} →
                </button>
                <button
                  onClick={() => goToSection("contact")}
                  className="px-3 py-2 border border-[#5a4232] hover:bg-[#5a4232]/10 text-[#25160e] font-typewriter text-xs uppercase tracking-wider rounded-xs transition-colors cursor-pointer"
                >
                  {t.hero.btnSecondary}
                </button>
              </div>
            </div>
          ),
        };

      case "projects":
        const featuredProjects = projects.slice(0, 4);
        return {
          leftCode: "CAP. II",
          leftTitle: isEs ? "Mapa de Proyectos" : "Projects Map",
          rightCode: "REGISTRO VISUAL",
          rightTitle: isEs ? "Obras Destacadas" : "Featured Works",
          leftContent: (
            <div className="space-y-4">
              <div>
                <h2 className="font-serif-book text-2xl font-bold text-[#25160e]">
                  {t.projects.title}
                </h2>
                <p className="font-serif-book text-xs text-[#4a3325] mt-1 leading-relaxed">
                  {t.projects.description}
                </p>
              </div>

              {/* First 2 Polaroids on Left Page */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-1">
                {featuredProjects.slice(0, 2).map((proj, idx) => {
                  const title =
                    typeof proj.title === "string"
                      ? proj.title
                      : proj.title[language];
                  return (
                    <div
                      key={proj.id}
                      className={`polaroid-card p-2.5 pb-4 rounded-xs border border-[#bfa984] transition-transform hover:scale-[1.02] ${
                        idx % 2 === 0 ? "-rotate-1" : "rotate-1"
                      }`}
                    >
                      <div className="w-3 h-3 rounded-full bg-[#b8860b] border border-[#5a3e08] mx-auto -mt-4 mb-1.5 shadow-xs" />
                      <div className="aspect-video w-full overflow-hidden bg-[#25160e] rounded-xs border border-[#8c6d46]/30">
                        <img
                          src={proj.image}
                          alt={title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h3 className="font-handwriting text-lg font-bold text-[#25160e] mt-2 line-clamp-1">
                        {title}
                      </h3>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {proj.techStack.slice(0, 3).map((tech) => (
                          <span
                            key={tech}
                            className="font-typewriter text-[9px] px-1.5 py-0.5 bg-[#d9c8a9] text-[#25160e] rounded-xs"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ),
          rightContent: (
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                {featuredProjects.slice(2, 4).map((proj, idx) => {
                  const title =
                    typeof proj.title === "string"
                      ? proj.title
                      : proj.title[language];
                  return (
                    <div
                      key={proj.id}
                      className={`polaroid-card p-2.5 pb-4 rounded-xs border border-[#bfa984] transition-transform hover:scale-[1.02] ${
                        idx % 2 === 0 ? "rotate-1" : "-rotate-1"
                      }`}
                    >
                      <div className="w-3 h-3 rounded-full bg-[#8c2d2d] border border-[#4a1515] mx-auto -mt-4 mb-1.5 shadow-xs" />
                      <div className="aspect-video w-full overflow-hidden bg-[#25160e] rounded-xs border border-[#8c6d46]/30">
                        <img
                          src={proj.image}
                          alt={title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <h3 className="font-handwriting text-lg font-bold text-[#25160e] mt-2 line-clamp-1">
                        {title}
                      </h3>
                      <div className="flex flex-wrap gap-1 mt-1">
                        {proj.techStack.slice(0, 3).map((tech) => (
                          <span
                            key={tech}
                            className="font-typewriter text-[9px] px-1.5 py-0.5 bg-[#d9c8a9] text-[#25160e] rounded-xs"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="p-3 bg-[#d9c8a9]/55 border border-dashed border-[#8c6d46] rounded-xs text-center">
                <p className="font-handwriting text-lg text-[#4a3325]">
                  {isEs
                    ? `📌 Colección completa de ${projects.length} proyectos y pergamino desplegable en Fase 3`
                    : `📌 Full collection of ${projects.length} projects & unrolling scroll in Phase 3`}
                </p>
              </div>
            </div>
          ),
        };

      case "skills":
        return {
          leftCode: "CAP. III",
          leftTitle: isEs ? "Inventario Técnico" : "Technical Inventory",
          rightCode: "SELLOS & IA",
          rightTitle: isEs ? "Herramientas & Agentes" : "Tools & AI Agents",
          leftContent: (
            <div className="space-y-3">
              <h2 className="font-serif-book text-2xl font-bold text-[#25160e]">
                {t.skills.title}
              </h2>
              <p className="font-serif-book text-xs text-[#4a3325] leading-relaxed">
                {t.skills.description}
              </p>
              <div className="flex flex-wrap gap-2 pt-2">
                {skills.slice(0, 10).map((sk) => (
                  <div
                    key={sk.name}
                    className="flex items-center gap-2 px-2.5 py-1.5 bg-[#f4ebd9] border border-[#8c6d46]/50 rounded-xs shadow-2xs"
                  >
                    <img src={sk.icon} alt={sk.name} className="w-4 h-4" />
                    <span className="font-typewriter text-xs font-bold text-[#25160e]">
                      {sk.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ),
          rightContent: (
            <div className="space-y-4">
              <div className="flex flex-wrap gap-2">
                {skills.slice(10).map((sk) => (
                  <div
                    key={sk.name}
                    className="flex items-center gap-2 px-2.5 py-1.5 bg-[#f4ebd9] border border-[#8c6d46]/50 rounded-xs shadow-2xs"
                  >
                    <img src={sk.icon} alt={sk.name} className="w-4 h-4" />
                    <span className="font-typewriter text-xs font-bold text-[#25160e]">
                      {sk.name}
                    </span>
                  </div>
                ))}
              </div>
              <div className="p-3.5 bg-[#2b583c]/10 border-2 border-dashed border-[#2b583c]/50 rounded-xs">
                <p className="font-typewriter text-xs font-bold uppercase text-[#2b583c] mb-1">
                  🤖 AI & Coding Agents
                </p>
                <p className="font-serif-book text-xs text-[#25160e]">
                  {t.skills.learningBadge}
                </p>
              </div>
            </div>
          ),
        };

      case "story":
        return {
          leftCode: "CAP. IV",
          leftTitle: isEs ? "Crónicas de Ruta" : "Route Chronicles",
          rightCode: "INSIGNIAS",
          rightTitle: isEs ? "Habilidades Blandas" : "Soft Skills",
          leftContent: (
            <div className="space-y-3">
              <h2 className="font-serif-book text-2xl font-bold text-[#25160e]">
                {t.story.title}
              </h2>
              <p className="font-handwriting text-lg text-[#6e523e]">
                {t.story.subtitle}
              </p>
              <div className="space-y-2.5 font-serif-book text-xs text-[#3a2418] leading-relaxed border-l-2 border-[#8c6d46]/40 pl-3.5">
                <p>{t.story.narrative1}</p>
                <p>{t.story.narrative2}</p>
                <p>{t.story.narrative3}</p>
              </div>
            </div>
          ),
          rightContent: (
            <div className="space-y-2.5">
              <h3 className="font-typewriter text-xs font-bold uppercase tracking-wider text-[#4a3325]">
                {t.story.softSkillsTitle}
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {t.story.items.map((item) => (
                  <div
                    key={item.id}
                    className="p-2.5 bg-[#f4ebd9]/80 border border-[#8c6d46]/40 rounded-xs"
                  >
                    <p className="font-serif-book text-xs font-bold text-[#25160e]">
                      {item.name}
                    </p>
                    <p className="font-serif-book text-[11px] text-[#5a4232] mt-0.5 leading-snug">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          ),
        };

      case "contact":
        return {
          leftCode: "CAP. V",
          leftTitle: isEs ? "Correo de Expedición" : "Expedition Post",
          rightCode: "TELEGRAMA",
          rightTitle: isEs ? "Mensaje Directo" : "Direct Message",
          leftContent: (
            <div className="space-y-4">
              <h2 className="font-serif-book text-2xl font-bold text-[#25160e]">
                {t.contact.titlePart1}{" "}
                <span className="underline decoration-[#8c2d2d]">
                  {t.contact.titleHighlight}
                </span>{" "}
                {t.contact.titlePart2}
              </h2>
              <p className="font-serif-book text-xs text-[#4a3325] leading-relaxed">
                {t.contact.description}
              </p>
              <div className="p-3.5 bg-[#f4ebd9] border border-[#8c6d46]/50 rounded-xs space-y-2">
                <p className="font-typewriter text-[11px] uppercase text-[#6e523e]">
                  Email Oficial
                </p>
                <p className="font-typewriter text-sm font-bold text-[#25160e]">
                  tomireyes28@gmail.com
                </p>
              </div>
            </div>
          ),
          rightContent: (
            <div className="space-y-3">
              <h3 className="font-serif-book text-lg font-bold text-[#25160e]">
                {t.contact.form.title}
              </h3>
              <p className="font-handwriting text-lg text-[#6e523e]">
                {isEs
                  ? "Formulario postal interactivo completo en la Fase 3."
                  : "Full interactive postal form coming in Phase 3."}
              </p>
            </div>
          ),
        };
    }
  };

  const currentSpread = renderSpreadContent(activeSection);

  return (
    <div className="relative w-screen h-screen overflow-hidden expedition-desk flex flex-col justify-between select-none">
      {/* TOP EXPEDITION DESK BAR */}
      <header className="relative z-40 flex items-center justify-between px-4 md:px-8 py-2.5 bg-[#120b07]/80 border-b border-[#c89d45]/20 backdrop-blur-xs shrink-0">
        {/* Left: Brand & Book Status */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 text-[#e2be6b]">
            <Compass className="w-4 h-4 animate-spin-slow" />
            <span className="font-typewriter text-xs font-bold tracking-widest uppercase">
              T. REYES // LOGBOOK
            </span>
          </div>

          {isOpen && (
            <button
              onClick={closeBook}
              className="flex items-center gap-1.5 px-2.5 py-1 rounded-xs bg-[#2d1b11] hover:bg-[#3d2518] text-[#e8dcc4] border border-[#c89d45]/40 font-typewriter text-[11px] uppercase tracking-wider transition-colors cursor-pointer"
              title={isEs ? "Volver a la portada" : "Back to cover"}
            >
              <BookMarked className="w-3.5 h-3.5 text-[#c89d45]" />
              <span className="hidden sm:inline">
                {isEs ? "Cerrar Libro" : "Close Book"}
              </span>
            </button>
          )}
        </div>

        {/* Center: Keyboard Navigation Hint (Desktop only when open) */}
        {isOpen && (
          <div className="hidden lg:flex items-center gap-2 font-typewriter text-[11px] text-[#c89d45]/75">
            <span>{isEs ? "Navegar páginas:" : "Turn pages:"}</span>
            <kbd className="px-1.5 py-0.5 bg-[#2a1910] border border-[#c89d45]/40 rounded-xs text-[#e8dcc4]">
              ←
            </kbd>
            <kbd className="px-1.5 py-0.5 bg-[#2a1910] border border-[#c89d45]/40 rounded-xs text-[#e8dcc4]">
              →
            </kbd>
          </div>
        )}

        {/* Right: CV Download Stamp & Language Switch */}
        <div className="flex items-center gap-2.5">
          <a
            href="/projects/Tomas%20Reyes%20CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-1 rounded-xs bg-[#2b583c]/90 hover:bg-[#2b583c] text-[#f5e8c7] border border-[#e2be6b]/40 font-typewriter text-[11px] uppercase tracking-wider transition-all shadow-xs"
          >
            <FileDown className="w-3.5 h-3.5" />
            <span>{t.nav.cv}</span>
          </a>

          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1.5 px-2.5 py-1 rounded-xs bg-[#2a1910] hover:bg-[#3a2317] text-[#e2be6b] border border-[#c89d45]/40 font-typewriter text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
          >
            <Globe className="w-3.5 h-3.5" />
            <span>{language.toUpperCase()}</span>
          </button>
        </div>
      </header>

      {/* MAIN VIEWPORT STAGE: CLOSED COVER OR OPEN BOOK */}
      <div className="relative flex-1 w-full flex items-center justify-center overflow-hidden px-2 sm:px-6 md:px-10 py-2 md:py-5 perspective-book">
        <AnimatePresence mode="wait">
          {!isOpen ? (
            <BookCover key="book-cover" />
          ) : (
            <motion.div
              key="open-book-container"
              initial={{ scale: 0.92, opacity: 0, rotateX: 8 }}
              animate={{ scale: 1, opacity: 1, rotateX: 0 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full max-w-[1260px] h-full max-h-[820px] flex items-center justify-center"
            >
              {/* OUTER LEATHER HARDCOVER FRAME */}
              <div className="relative flex w-full h-full leather-cover rounded-xl p-2 sm:p-3 md:p-4 shadow-[0_35px_70px_rgba(0,0,0,0.9)] border border-[#c89d45]/30">
                {/* Left Stacked Pages Thickness */}
                <div className="hidden md:block w-2.5 h-[98%] my-auto book-pages-stack-left rounded-l-xs shrink-0" />

                {/* ANIMATED 2-PAGE SPREAD (Desktop) / 1-PAGE (Mobile) */}
                <div className="relative flex-1 h-full flex overflow-hidden perspective-book">
                  <AnimatePresence mode="wait" custom={turnDirection}>
                    <motion.div
                      key={activeSection}
                      custom={turnDirection}
                      variants={spreadVariants}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                      className="w-full h-full flex preserve-3d"
                    >
                      {/* DESKTOP: Left Page + Spine + Right Page */}
                      <div className="hidden md:flex w-full h-full">
                        <BookPage
                          side="left"
                          pageNumber={leftPageNum}
                          chapterCode={currentSpread.leftCode}
                          chapterTitle={currentSpread.leftTitle}
                          onCornerClick={prevPage}
                          cornerLabel={
                            sectionIndex === 0
                              ? isEs
                                ? "Portada"
                                : "Cover"
                              : isEs
                              ? "Anterior"
                              : "Previous"
                          }
                        >
                          {currentSpread.leftContent}
                        </BookPage>

                        <BookSpine />

                        <BookPage
                          side="right"
                          pageNumber={rightPageNum}
                          chapterCode={currentSpread.rightCode}
                          chapterTitle={currentSpread.rightTitle}
                          onCornerClick={
                            sectionIndex < BOOK_SECTIONS.length - 1
                              ? nextPage
                              : undefined
                          }
                          cornerLabel={isEs ? "Siguiente" : "Next"}
                        >
                          {currentSpread.rightContent}
                        </BookPage>
                      </div>

                      {/* MOBILE: Single Page at a time with Sub-Page Toggle */}
                      <div className="flex md:hidden flex-col w-full h-full">
                        <BookPage
                          side={mobileSubPage}
                          pageNumber={
                            mobileSubPage === "left"
                              ? leftPageNum
                              : rightPageNum
                          }
                          chapterCode={
                            mobileSubPage === "left"
                              ? currentSpread.leftCode
                              : currentSpread.rightCode
                          }
                          chapterTitle={
                            mobileSubPage === "left"
                              ? currentSpread.leftTitle
                              : currentSpread.rightTitle
                          }
                          onCornerClick={() =>
                            setMobileSubPage(
                              mobileSubPage === "left" ? "right" : "left"
                            )
                          }
                          cornerLabel={
                            mobileSubPage === "left"
                              ? isEs
                                ? "Ver pág. derecha"
                                : "Right page"
                              : isEs
                              ? "Ver pág. izquierda"
                              : "Left page"
                          }
                        >
                          {mobileSubPage === "left"
                            ? currentSpread.leftContent
                            : currentSpread.rightContent}
                        </BookPage>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>

                {/* Right Stacked Pages Thickness */}
                <div className="hidden md:block w-2.5 h-[98%] my-auto book-pages-stack-right rounded-r-xs shrink-0" />
              </div>

              {/* PHYSICAL BOOKMARK TABS ON THE RIGHT EDGE */}
              <BookTabs />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
