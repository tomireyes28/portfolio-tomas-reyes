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

  const [projectFilter, setProjectFilter] =
    useState<ProjectCategoryFilter>("all");
  const [projectSubPage, setProjectSubPage] = useState<number>(0);

  const [mobileSubPage, setMobileSubPage] = useState<"left" | "right">("left");
  const touchStartX = useRef<number | null>(null);

  const isEs = language === "es";
  const sectionIndex = BOOK_SECTIONS.indexOf(activeSection);
  const leftPageNum = String(sectionIndex * 2 + 1).padStart(2, "0");
  const rightPageNum = String(sectionIndex * 2 + 2).padStart(2, "0");

  React.useEffect(() => {
    setMobileSubPage("left");
  }, [activeSection]);

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const deltaX = e.changedTouches[0].clientX - touchStartX.current;
    touchStartX.current = null;

    if (Math.abs(deltaX) < 50) return;

    if (deltaX < 0) {
      if (mobileSubPage === "left") {
        setMobileSubPage("right");
      } else {
        nextPage();
      }
    } else {
      if (mobileSubPage === "right") {
        setMobileSubPage("left");
      } else {
        prevPage();
      }
    }
  };

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

  const renderSpreadContent = (section: BookSectionId) => {
    switch (section) {
      case "about":
        return {
          leftTitle: isEs ? "Sobre Mí" : "About Me",
          rightTitle: isEs ? "Enfoque & Stack" : "Focus & Stack",
          leftContent: <AboutLeftPage />,
          rightContent: <AboutRightPage />,
        };

      case "projects":
        return {
          leftTitle: isEs ? "Proyectos" : "Projects",
          rightTitle: isEs ? "Catálogo Visual" : "Visual Catalog",
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
          leftTitle: isEs ? "Tecnologías" : "Technologies",
          rightTitle: isEs ? "Herramientas & Cloud" : "Tools & Cloud",
          leftContent: <SkillsLeftPage />,
          rightContent: <SkillsRightPage />,
        };

      case "story":
        return {
          leftTitle: isEs ? "Trayectoria" : "Journey",
          rightTitle: isEs ? "Habilidades Blandas" : "Soft Skills",
          leftContent: <JourneyLeftPage />,
          rightContent: <JourneyRightPage />,
        };

      case "contact":
        return {
          leftTitle: isEs ? "Contacto Directo" : "Direct Contact",
          rightTitle: isEs ? "Correspondencia" : "Correspondence",
          leftContent: <ContactLeftPage />,
          rightContent: <ContactRightPage />,
        };
    }
  };

  const currentSpread = renderSpreadContent(activeSection);

  return (
    <div className="relative w-screen h-screen overflow-hidden expedition-desk flex flex-col justify-between select-none">
      {/* EXPEDITION DESK TOP BAR */}
      <header className="relative z-40 flex items-center justify-between px-4 md:px-8 py-2 bg-[#100a06]/80 border-b border-[#c89d45]/15 backdrop-blur-xs shrink-0">
        {/* Left: Brand Identity & Book Toggle */}
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 text-[#e2be6b]">
            <Compass className="w-4 h-4 text-[#c89d45]" />
            <span className="font-serif-book text-xs md:text-sm tracking-wider text-[#e8dcc4] font-medium">
              Tomás Reyes
            </span>
          </div>

          {isOpen && (
            <button
              onClick={closeBook}
              className="flex items-center gap-1.5 px-2.5 py-1 rounded-xs bg-[#24150d] hover:bg-[#352014] text-[#dfcdad] border border-[#c89d45]/30 font-serif-book text-xs italic transition-colors cursor-pointer"
              title={isEs ? "Cerrar libro y volver a la portada" : "Close logbook"}
            >
              <BookMarked className="w-3.5 h-3.5 text-[#c89d45]" />
              <span className="hidden sm:inline">
                {isEs ? "Cerrar libro" : "Close book"}
              </span>
            </button>
          )}
        </div>

        {/* Right: CV Download Stamp & Language Toggle */}
        <div className="flex items-center gap-2.5">
          <a
            href="/projects/Tomas%20Reyes%20CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 px-3 py-1 rounded-xs bg-[#265538]/90 hover:bg-[#265538] text-[#f5ebd6] border border-[#e2be6b]/30 font-typewriter text-[11px] uppercase tracking-wider transition-all shadow-xs"
          >
            <FileDown className="w-3.5 h-3.5" />
            <span>{t.nav.cv}</span>
          </a>

          <button
            onClick={toggleLanguage}
            className="flex items-center gap-1.5 px-2.5 py-1 rounded-xs bg-[#24150d] hover:bg-[#352014] text-[#e2be6b] border border-[#c89d45]/35 font-typewriter text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
          >
            <Globe className="w-3.5 h-3.5" />
            <span>{language.toUpperCase()}</span>
          </button>
        </div>
      </header>

      {/* MAIN VIEWPORT STAGE */}
      <div className="relative flex-1 w-full flex items-center justify-center overflow-hidden px-2 sm:px-6 md:px-10 py-1.5 md:py-3.5 perspective-book">
        <AnimatePresence mode="wait">
          {!isOpen ? (
            <BookCover key="book-cover" />
          ) : (
            <motion.div
              key="open-book-container"
              initial={{ scale: 0.94, opacity: 0, rotateX: 6 }}
              animate={{ scale: 1, opacity: 1, rotateX: 0 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full max-w-[1260px] h-full max-h-[810px] flex flex-col md:flex-row items-stretch md:items-center justify-center"
            >
              {/* OUTER LEATHER HARDCOVER FRAME */}
              <div
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
                className="relative flex flex-1 w-full h-full leather-cover rounded-xl p-2 sm:p-2.5 md:p-3.5 shadow-[0_35px_70px_rgba(0,0,0,0.9)] border border-[#c89d45]/25 overflow-hidden"
              >
                {/* Left Stacked Pages Thickness */}
                <div className="hidden md:block w-2.5 h-[98%] my-auto book-pages-stack-left rounded-l-xs shrink-0" />

                {/* ANIMATED SPREAD */}
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
                      {/* DESKTOP SPREAD */}
                      <div className="hidden md:flex w-full h-full">
                        <BookPage
                          side="left"
                          pageNumber={leftPageNum}
                          chapterTitle={currentSpread.leftTitle}
                          onCornerClick={prevPage}
                        >
                          {currentSpread.leftContent}
                        </BookPage>

                        <BookSpine />

                        <BookPage
                          side="right"
                          pageNumber={rightPageNum}
                          chapterTitle={currentSpread.rightTitle}
                          onCornerClick={
                            sectionIndex < BOOK_SECTIONS.length - 1
                              ? nextPage
                              : undefined
                          }
                        >
                          {currentSpread.rightContent}
                        </BookPage>
                      </div>

                      {/* MOBILE SINGLE PAGE WITH SWIPE */}
                      <div className="flex md:hidden flex-col w-full h-full">
                        <BookPage
                          side={mobileSubPage}
                          pageNumber={
                            mobileSubPage === "left"
                              ? leftPageNum
                              : rightPageNum
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

              {/* LATERAL INDEX TABS */}
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
