"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useBook } from "@/context/BookContext";
import { useLanguage } from "@/context/LanguageContext";
import BookCover from "./BookCover";
import BookTabs from "./BookTabs";
import BookInteractiveSpread from "./BookInteractiveSpread";
import { ProjectCategoryFilter } from "@/components/pages/ProjectsPage";

export default function Book() {
  const { isOpen, openBook, closeBook } = useBook();
  const { language } = useLanguage();

  const [projectFilter, setProjectFilter] =
    useState<ProjectCategoryFilter>("all");
  const [projectSubPage, setProjectSubPage] = useState<number>(0);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkDesktop = () => {
      setIsDesktop(window.innerWidth >= 768);
    };
    checkDesktop();
    window.addEventListener("resize", checkDesktop);
    return () => window.removeEventListener("resize", checkDesktop);
  }, []);

  const isEs = language === "es";

  return (
    <div className="relative w-screen h-screen overflow-hidden expedition-desk flex items-center justify-center select-none">
      {/* MAIN VIEWPORT STAGE */}
      <div className="relative w-full h-full flex items-center justify-center px-2 sm:px-6 md:px-10 py-3 md:py-6 perspective-book select-none overflow-hidden">
        {/* ============================================================== */}
        {/* UNIFIED 3D BOOK RIG (Fixed size: same dimensions open and closed. */}
        {/* Shifts to center on open via GPU translateX. Zero resizing stutter!) */}
        {/* ============================================================== */}
        <motion.div
          animate={{
            x: isOpen ? 0 : isDesktop ? "-25%" : 0,
            rotateX: isOpen ? 0 : 4,
          }}
          transition={{
            duration: 0.7,
            ease: [0.25, 0.1, 0.25, 1],
          }}
          style={{ transformStyle: "preserve-3d" }}
          className="relative w-full max-w-[1280px] h-full max-h-[830px] flex flex-col md:flex-row items-stretch md:items-center justify-center z-10"
        >
          {/* 1. DEEP REALISTIC DESK CAST SHADOWS */}
          <div
            className={`pointer-events-none absolute top-5 rounded-2xl bg-black/85 blur-2xl transition-all duration-700 ${
              isOpen ? "-inset-3" : "left-1/2 -inset-y-3 -right-3"
            }`}
            style={{ transform: "translateZ(-24px)" }}
          />
          <div
            className={`pointer-events-none absolute -bottom-5 h-16 rounded-full bg-black/90 blur-xl transition-all duration-700 ${
              isOpen ? "inset-x-6" : "left-[55%] right-6"
            }`}
            style={{ transform: "translateZ(-20px)" }}
          />

          {/* 2. REALISTIC LEATHER HARDCOVER CASE (Fixed dimensions!) */}
          <div
            className={`relative flex flex-1 w-full h-full rounded-xl p-2.5 sm:p-3.5 md:p-4.5 transition-all duration-700 ${
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
            <div className="flex-1 h-full relative">
              <BookInteractiveSpread
                projectFilter={projectFilter}
                setProjectFilter={setProjectFilter}
                projectSubPage={projectSubPage}
                setProjectSubPage={setProjectSubPage}
              />

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
            transition={{ duration: 0.5, delay: isOpen ? 0.35 : 0 }}
            className="hidden md:block"
          >
            <BookTabs />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
