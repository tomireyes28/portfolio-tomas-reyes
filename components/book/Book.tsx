"use client";

import React from "react";
import { motion, useReducedMotion } from "framer-motion";
import { BOOK_SECTIONS, useBook } from "@/context/BookContext";
import { useLanguage } from "@/context/LanguageContext";
import { BOOK_INDEX_WIDTH } from "@/lib/bookViewport";
import BookCover from "./BookCover";
import BookTabs from "./BookTabs";
import LanguageSwitch from "@/components/ui/LanguageSwitch";
import BookInteractiveSpread from "./BookInteractiveSpread";

export default function Book() {
  const { isOpen, openBook, closeBook, activeSection } = useBook();
  const { language } = useLanguage();

  const isEs = language === "es";
  const reducedMotion = useReducedMotion();
  const progress = BOOK_SECTIONS.indexOf(activeSection) / (BOOK_SECTIONS.length - 1);
  const paperDepth = {
    "--left-stack-depth": `${3 + progress * 7}px`,
    "--right-stack-depth": `${10 - progress * 7}px`,
  } as React.CSSProperties;

  return (
    <div style={{ "--book-index-width": `${BOOK_INDEX_WIDTH}px` } as React.CSSProperties} className="book-desk expedition-desk select-none">
      <header className="book-toolbar">
        <div className="flex items-baseline gap-3">
          <h1 className="font-serif-book text-base font-semibold text-[#f5ebd6]">Tomás Reyes</h1>
          <span className="font-typewriter text-[11px] tracking-wider text-[#cdb894]">PORTFOLIO / 2026</span>
        </div>
        <div className="flex items-center gap-4">
          <button type="button" onClick={closeBook} disabled={!isOpen} className="min-h-10 px-3 text-sm font-serif-book text-[#e8dcc4] hover:text-white disabled:opacity-40 cursor-pointer disabled:cursor-default">
            {isEs ? "Portada" : "Cover"}
          </button>
          <LanguageSwitch />
        </div>
      </header>
      {/* MAIN VIEWPORT STAGE */}
      <div className="book-stage perspective-book">
        {/* ============================================================== */}
        {/* UNIFIED 3D BOOK RIG (Fixed size: same dimensions open and closed. */}
        {/* Shifts to center on open via GPU translateX. Zero resizing stutter!) */}
        {/* ============================================================== */}
        <motion.div
          animate={{
            // Account for the reserved index and half the paper inset when centering the cover.
            x: isOpen ? "calc(0% + 0px)" : `calc(-25% + ${BOOK_INDEX_WIDTH * 0.75 + 15}px)`,
            rotateX: isOpen || reducedMotion ? 0 : 2,
          }}
          transition={{
            duration: reducedMotion ? 0 : 0.72,
            ease: [0.25, 0.1, 0.25, 1],
          }}
          style={{ transformStyle: "preserve-3d" }}
          className="book-rig"
        >
          <div aria-hidden="true" className={`book-desk-shadow ${isOpen ? "" : "book-desk-shadow-closed"}`} />

          {/* 2. REALISTIC LEATHER HARDCOVER CASE (Fixed dimensions!) */}
          <div
            style={paperDepth}
            data-open={isOpen}
            className={`book-case relative flex flex-1 min-w-0 h-full rounded-xl p-2.5 sm:p-3.5 md:p-4.5 transition-all duration-700 ${
              isOpen ? "realistic-leather-cover shadow-2xl" : "bg-transparent"
            }`}
          >
            {/* Gold Stitched Perimeter Seam (when open) */}
            <div
              className={`pointer-events-none absolute inset-1.5 sm:inset-2 border border-dashed border-[#c89d45]/35 rounded-lg z-25 transition-opacity duration-500 ${
                isOpen ? "opacity-100" : "opacity-0"
              }`}
            />

            {/* Antique Brass Metal Corner Protectors (Top-Left & Bottom-Left when open) */}
            <div
              className={`pointer-events-none absolute top-1 left-1 w-7 h-7 border-t-2 border-l-2 border-[#d4a74a]/75 rounded-tl-md flex items-start justify-start p-1 bg-gradient-to-br from-[#d4a74a]/30 to-transparent z-25 transition-opacity duration-500 ${
                isOpen ? "opacity-100" : "opacity-0"
              }`}
            >
              <div className="w-1.5 h-1.5 rounded-full bg-[#1b0e06] border border-[#d4a74a]/70 shadow-inner" />
            </div>
            <div
              className={`pointer-events-none absolute bottom-1 left-1 w-7 h-7 border-b-2 border-l-2 border-[#d4a74a]/75 rounded-bl-md flex items-end justify-start p-1 bg-gradient-to-tr from-[#d4a74a]/30 to-transparent z-25 transition-opacity duration-500 ${
                isOpen ? "opacity-100" : "opacity-0"
              }`}
            >
              <div className="w-1.5 h-1.5 rounded-full bg-[#1b0e06] border border-[#d4a74a]/70 shadow-inner" />
            </div>

            {/* Silk Ribbon Bookmark (Hangs over top spine when open to close book) */}
            {isOpen && (
              <button
                type="button"
                onClick={closeBook}
                title={isEs ? "Cerrar libro (Tirar de la cinta)" : "Close book (Pull ribbon)"}
                className="group absolute -top-3.5 left-1/2 -translate-x-1/2 z-40 flex flex-col items-center cursor-pointer select-none"
              >
                {/* Brass Ribbon Clamp */}
                <div className="w-8 h-2 rounded-t-xs bg-gradient-to-r from-[#b3832d] via-[#f3d37a] to-[#996a1e] border-t border-x border-[#f3d37a] shadow-xs" />
                {/* Crimson Silk Ribbon Body */}
                <div className="relative w-6 h-12 bg-gradient-to-b from-[#882b2b] via-[#9e3333] to-[#732323] border-x border-[#c89d45]/30 shadow-[0_4px_12px_rgba(0,0,0,0.6)] flex items-center justify-center group-hover:h-14 transition-all duration-300">
                  <div className="w-0.5 h-full bg-[#f3d37a]/40" />
                  <span className="absolute -bottom-6 opacity-0 group-hover:opacity-100 transition-opacity bg-[#1b0e06] text-[#e2be6b] font-typewriter text-[9px] uppercase tracking-wider px-2 py-0.5 rounded-xs border border-[#c89d45]/40 whitespace-nowrap shadow-md pointer-events-none">
                    {isEs ? "Cerrar libro" : "Close book"}
                  </span>
                </div>
                {/* Triangular Notch at Ribbon Tail */}
                <div
                  className="w-6 h-3 bg-gradient-to-b from-[#732323] to-[#591b1b] -mt-px"
                  style={{
                    clipPath: "polygon(0 0, 100% 0, 50% 100%)",
                  }}
                />
              </button>
            )}

            {/* Left Stacked Paper Block */}
            <div
              className={`hidden md:block w-3 h-[97%] my-auto book-edge-left rounded-l-xs shrink-0 transition-opacity duration-500 ${
                isOpen ? "opacity-100" : "opacity-0"
              }`}
            />

            {/* 3D DOUBLE-SIDED INTERACTIVE SPREAD ENGINE (Always mounted! Real pages!) */}
            <div className="book-paper-surface flex-1 min-w-0 h-full relative">
              <div className="book-paper-block" aria-hidden="true" data-open={isOpen}>
                <span className="book-bottom-stack book-bottom-stack-left" />
                <span className="book-bottom-stack book-bottom-stack-right" />
              </div>
              <BookInteractiveSpread />

              {/* 3D FRONT COVER FLAP: Exactly matched to inner page dimensions! */}
              <BookCover isOpen={isOpen} onOpen={openBook} />
            </div>

            {/* Right Stacked Paper Block */}
            <div className="hidden md:block w-3 h-[97%] my-auto book-edge-right rounded-r-xs shrink-0" />
          </div>

          {/* LATERAL INDEX TABS */}
          <motion.div
            animate={{
              opacity: isOpen ? 1 : 0,
              x: isOpen ? 0 : -20,
              pointerEvents: isOpen ? "auto" : "none",
            }}
            transition={{ duration: reducedMotion ? 0 : 0.32, delay: isOpen && !reducedMotion ? 0.22 : 0 }}
            inert={!isOpen}
            aria-hidden={!isOpen}
            className="book-index"
          >
            <BookTabs />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
