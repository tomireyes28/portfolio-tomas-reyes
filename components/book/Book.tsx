"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BookMarked, FileDown, Globe, Compass } from "lucide-react";
import { useBook } from "@/context/BookContext";
import { useLanguage } from "@/context/LanguageContext";
import BookCover from "./BookCover";
import BookTabs from "./BookTabs";
import BookInteractiveSpread from "./BookInteractiveSpread";
import ScrollDetail from "@/components/ui/ScrollDetail";
import { ProjectCategoryFilter } from "@/components/pages/ProjectsPage";

export default function Book() {
  const { isOpen, closeBook } = useBook();
  const { language, toggleLanguage, t } = useLanguage();

  const [projectFilter, setProjectFilter] =
    useState<ProjectCategoryFilter>("all");
  const [projectSubPage, setProjectSubPage] = useState<number>(0);

  const [hasOpenedOnce, setHasOpenedOnce] = useState(false);

  useEffect(() => {
    if (isOpen && !hasOpenedOnce) {
      setHasOpenedOnce(true);
    }
  }, [isOpen, hasOpenedOnce]);

  const isEs = language === "es";

  return (
    <div className="relative w-screen h-screen overflow-hidden expedition-desk flex flex-col justify-between select-none">
      {/* EXPEDITION DESK TOP BAR */}
      <header className="relative z-40 flex items-center justify-between px-4 md:px-8 py-2 bg-[#100a06]/85 border-b border-[#c89d45]/15 backdrop-blur-xs shrink-0">
        {/* Left: Brand Identity & Close Book Button */}
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
      <div className="relative flex-1 w-full flex items-center justify-center px-2 sm:px-6 md:px-10 py-1.5 md:py-3.5 perspective-book">
        {/* OPEN 2-PAGE SPREAD (Revealed seamlessly once cover finishes opening) */}
        {isOpen && (
          <motion.div
            key="open-book-container"
            initial={{ opacity: 0, scale: 0.99 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.99, transition: { duration: 0.2 } }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="relative w-full max-w-[1280px] h-full max-h-[815px] flex flex-col md:flex-row items-stretch md:items-center justify-center z-10"
          >
            {/* REALISTIC LEATHER HARDCOVER CASE (NO overflow-hidden to allow 3D page pop-out!) */}
            <div className="relative flex flex-1 w-full h-full realistic-leather-cover rounded-xl p-2.5 sm:p-3.5 md:p-4.5">
              {/* Gold Stitched Perimeter Seam (Costura de cuero) */}
              <div className="pointer-events-none absolute inset-1.5 sm:inset-2 border border-dashed border-[#c89d45]/35 rounded-lg" />

              {/* 4 Antique Brass Metal Corner Protectors with Rivets */}
              {/* Top-Left */}
              <div className="pointer-events-none absolute top-1 left-1 w-7 h-7 border-t-2 border-l-2 border-[#d4a74a]/75 rounded-tl-md flex items-start justify-start p-1 bg-gradient-to-br from-[#d4a74a]/30 to-transparent">
                <div className="w-1.5 h-1.5 rounded-full bg-[#1b0e06] border border-[#d4a74a]/70 shadow-inner" />
              </div>
              {/* Top-Right */}
              <div className="pointer-events-none absolute top-1 right-1 w-7 h-7 border-t-2 border-r-2 border-[#d4a74a]/75 rounded-tr-md flex items-start justify-end p-1 bg-gradient-to-bl from-[#d4a74a]/30 to-transparent">
                <div className="w-1.5 h-1.5 rounded-full bg-[#1b0e06] border border-[#d4a74a]/70 shadow-inner" />
              </div>
              {/* Bottom-Left */}
              <div className="pointer-events-none absolute bottom-1 left-1 w-7 h-7 border-b-2 border-l-2 border-[#d4a74a]/75 rounded-bl-md flex items-end justify-start p-1 bg-gradient-to-tr from-[#d4a74a]/30 to-transparent">
                <div className="w-1.5 h-1.5 rounded-full bg-[#1b0e06] border border-[#d4a74a]/70 shadow-inner" />
              </div>
              {/* Bottom-Right */}
              <div className="pointer-events-none absolute bottom-1 right-1 w-7 h-7 border-b-2 border-r-2 border-[#d4a74a]/75 rounded-br-md flex items-end justify-end p-1 bg-gradient-to-tl from-[#d4a74a]/30 to-transparent">
                <div className="w-1.5 h-1.5 rounded-full bg-[#1b0e06] border border-[#d4a74a]/70 shadow-inner" />
              </div>

              {/* Left Stacked Paper Block (Grosor real de páginas de la izquierda) */}
              <div className="hidden md:block w-3 h-[97%] my-auto book-edge-left rounded-l-xs shrink-0" />

              {/* 3D DOUBLE-SIDED INTERACTIVE SPREAD ENGINE */}
              <BookInteractiveSpread
                projectFilter={projectFilter}
                setProjectFilter={setProjectFilter}
                projectSubPage={projectSubPage}
                setProjectSubPage={setProjectSubPage}
              />

              {/* Right Stacked Paper Block (Grosor real de páginas de la derecha) */}
              <div className="hidden md:block w-3 h-[97%] my-auto book-edge-right rounded-r-xs shrink-0" />
            </div>

            {/* LATERAL INDEX TABS */}
            <BookTabs />
          </motion.div>
        )}

        {/* 3D FRONT COVER FLAP (Opens persistent in 3D without disappearing) */}
        <AnimatePresence>
          {!isOpen && (
            <BookCover key="book-cover" isClosing={hasOpenedOnce} />
          )}
        </AnimatePresence>
      </div>

      {/* UNROLLING PARCHMENT SCROLL MODAL FOR PROJECT DETAILS */}
      <ScrollDetail />
    </div>
  );
}
