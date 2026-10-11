"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BookMarked, FileDown, Globe, Compass } from "lucide-react";
import { useBook, BOOK_SECTIONS, BookSectionId } from "@/context/BookContext";
import { useLanguage } from "@/context/LanguageContext";
import BookCover from "./BookCover";
import BookSpine from "./BookSpine";
import BookPage from "./BookPage";
import BookTabs from "./BookTabs";
import BookPageTurn from "./BookPageTurn";
import ScrollDetail from "@/components/ui/ScrollDetail";
import { AboutLeftPage, AboutRightPage } from "@/components/pages/AboutPage";
import {
  ProjectsLeftPage,
  ProjectsRightPage,
  ProjectCategoryFilter,
} from "@/components/pages/ProjectsPage";
import { SkillsLeftPage, SkillsRightPage } from "@/components/pages/SkillsPage";
import {
  JourneyLeftPage,
  JourneyRightPage,
} from "@/components/pages/JourneyPage";
import {
  ContactLeftPage,
  ContactRightPage,
} from "@/components/pages/ContactPage";

export default function Book() {
  const {
    isOpen,
    activeSection,
    turnDirection,
    isTurning,
    closeBook,
    nextPage,
    prevPage,
  } = useBook();
  const { language, toggleLanguage, t } = useLanguage();

  // State for Projects filter & sub-pagination
  const [projectFilter, setProjectFilter] =
    useState<ProjectCategoryFilter>("all");
  const [projectSubPage, setProjectSubPage] = useState<number>(0);

  // Mobile single-page state ("left" or "right" page of the active spread)
  const [mobileSubPage, setMobileSubPage] = useState<"left" | "right">("left");
  const touchStartX = useRef<number | null>(null);

  const isEs = language === "es";
  const sectionIndex = BOOK_SECTIONS.indexOf(activeSection);
  const leftPageNum = String(sectionIndex * 2 + 1).padStart(2, "0");
  const rightPageNum = String(sectionIndex * 2 + 2).padStart(2, "0");

  // Reset mobile subpage to left when changing section
  React.useEffect(() => {
    setMobileSubPage("left");
  }, [activeSection]);

  // Mobile Touch Swipe Handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const deltaX = e.changedTouches[0].clientX - touchStartX.current;
    touchStartX.current = null;

    if (Math.abs(deltaX) < 50) return;

    if (deltaX < 0) {
      // Swipe Left -> Next
      if (mobileSubPage === "left") {
        setMobileSubPage("right");
      } else {
        nextPage();
      }
    } else {
      // Swipe Right -> Prev
      if (mobileSubPage === "right") {
        setMobileSubPage("left");
      } else {
        prevPage();
      }
    }
  };

  // 3D Page Turn Variants for the Spread
  const spreadVariants = {
    initial: (dir: "next" | "prev") => ({
      rotateY: dir === "next" ? 18 : -18,
      opacity: 0,
      scale: 0.985,
    }),
    animate: {
      rotateY: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
      },
    },
    exit: (dir: "next" | "prev") => ({
      rotateY: dir === "next" ? -18 : 18,
      opacity: 0,
      scale: 0.985,
      transition: {
        duration: 0.3,
        ease: [0.4, 0, 1, 1] as [number, number, number, number],
      },
    }),
  };

  // Map active section to Left & Right page content
  const renderSpreadContent = (section: BookSectionId) => {
    switch (section) {
      case "about":
        return {
          leftCode: "CAP. I",
          leftTitle: isEs ? "Perfil del Explorador" : "Explorer Profile",
          rightCode: "NOTAS DE CAMPO",
          rightTitle: isEs ? "Biografía & Enfoque" : "Biography & Focus",
          leftContent: <AboutLeftPage />,
          rightContent: <AboutRightPage />,
        };

      case "projects":
        return {
          leftCode: "CAP. II",
          leftTitle: isEs ? "Catálogo de Obras" : "Works Catalog",
          rightCode: "REGISTRO VISUAL",
          rightTitle: isEs ? "Proyectos & Demos" : "Projects & Demos",
          leftContent: (
            <ProjectsLeftPage
              filter={projectFilter}
              setFilter={setProjectFilter}
              subPage={projectSubPage}
              setSubPage={setProjectSubPage}
            />
          ),
          rightContent: (
            <ProjectsRightPage
              filter={projectFilter}
              setFilter={setProjectFilter}
              subPage={projectSubPage}
              setSubPage={setProjectSubPage}
            />
          ),
        };

      case "skills":
        return {
          leftCode: "CAP. III",
          leftTitle: isEs ? "Inventario Técnico" : "Technical Inventory",
          rightCode: "ESPECIFICACIONES",
          rightTitle: isEs ? "Datos, Cloud & DevOps" : "Data, Cloud & DevOps",
          leftContent: <SkillsLeftPage />,
          rightContent: <SkillsRightPage />,
        };

      case "story":
        return {
          leftCode: "CAP. IV",
          leftTitle: isEs ? "Crónicas de Ruta" : "Route Chronicles",
          rightCode: "INSIGNIAS",
          rightTitle: isEs ? "Habilidades Blandas" : "Soft Skills",
          leftContent: <JourneyLeftPage />,
          rightContent: <JourneyRightPage />,
        };

      case "contact":
        return {
          leftCode: "CAP. V",
          leftTitle: isEs ? "Correo de Expedición" : "Expedition Post",
          rightCode: "TELEGRAMA",
          rightTitle: isEs ? "Mensaje Directo" : "Direct Message",
          leftContent: <ContactLeftPage />,
          rightContent: <ContactRightPage />,
        };
    }
  };

  const currentSpread = renderSpreadContent(activeSection);

  return (
    <div className="relative w-screen h-screen overflow-hidden expedition-desk flex flex-col justify-between select-none">
      {/* TOP EXPEDITION DESK BAR */}
      <header className="relative z-40 flex items-center justify-between px-4 md:px-8 py-2.5 bg-[#120b07]/85 border-b border-[#c89d45]/20 backdrop-blur-xs shrink-0">
        {/* Left: Brand & Close Book Button */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 text-[#e2be6b]">
            <Compass className="w-4 h-4" />
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
            <span>{isEs ? "Pasar páginas:" : "Turn pages:"}</span>
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
              className="relative w-full max-w-[1260px] h-full max-h-[820px] flex flex-col md:flex-row items-stretch md:items-center justify-center"
            >
              {/* OUTER LEATHER HARDCOVER FRAME */}
              <div
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
                className="relative flex flex-1 w-full h-full leather-cover rounded-xl p-2 sm:p-3 md:p-4 shadow-[0_35px_70px_rgba(0,0,0,0.9)] border border-[#c89d45]/30 overflow-hidden"
              >
                {/* Left Stacked Pages Thickness */}
                <div className="hidden md:block w-2.5 h-[98%] my-auto book-pages-stack-left rounded-l-xs shrink-0" />

                {/* ANIMATED 2-PAGE SPREAD (Desktop) / 1-PAGE (Mobile) */}
                <div className="relative flex-1 h-full flex overflow-hidden perspective-book">
                  {/* 3D Flipping Sheet Overlay on Spine */}
                  <BookPageTurn
                    isTurning={isTurning}
                    direction={turnDirection}
                    turnKey={activeSection}
                  />

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

                      {/* MOBILE: Single Page at a time with Sub-Page Toggle & Swipe */}
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

              {/* PHYSICAL BOOKMARK TABS ON THE RIGHT EDGE (Desktop) / BOTTOM (Mobile) */}
              <BookTabs />
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* UNROLLING PARCHMENT SCROLL MODAL FOR PROJECT DETAILS */}
      <ScrollDetail />
    </div>
  );
}
