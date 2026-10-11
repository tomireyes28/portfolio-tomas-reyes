"use client";

import React from "react";
import { motion } from "framer-motion";
import { Compass, BookOpen, Sparkles } from "lucide-react";
import { useBook } from "@/context/BookContext";
import { useLanguage } from "@/context/LanguageContext";

export default function BookCover() {
  const { openBook } = useBook();
  const { language } = useLanguage();

  const isEs = language === "es";

  return (
    <div className="relative flex items-center justify-center w-full h-full px-4 py-6 select-none perspective-book">
      <motion.div
        initial={{ rotateY: -18, scale: 0.92, opacity: 0 }}
        animate={{ rotateY: 0, scale: 1, opacity: 1 }}
        exit={{
          rotateY: -115,
          scale: 1.04,
          opacity: 0,
          transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] },
        }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        style={{ transformOrigin: "left center" }}
        onClick={openBook}
        className="group relative w-full max-w-[440px] md:max-w-[490px] aspect-[3/4.1] max-h-[84vh] leather-cover rounded-r-2xl rounded-l-md cursor-pointer flex flex-col justify-between p-7 md:p-10 preserve-3d transition-transform duration-500 hover:rotate-y-[-4deg]"
      >
        {/* Left Leather Spine Binding Strip */}
        <div
          className="absolute inset-y-0 left-0 w-7 md:w-9 rounded-l-md border-r border-[#c89d45]/30"
          style={{
            background:
              "linear-gradient(90deg, #180d06 0%, #3d2415 55%, #24130a 100%)",
            boxShadow: "inset -3px 0 8px rgba(0,0,0,0.7)",
          }}
        >
          {/* Spine stitching */}
          <div className="h-full w-full border-r border-dashed border-[#c89d45]/30" />
        </div>

        {/* Right Page Stack Edge Effect (Thickness of the closed book) */}
        <div className="absolute inset-y-2.5 -right-3 w-3 book-pages-stack-right rounded-r-sm shadow-lg pointer-events-none" />

        {/* Gold Stitched Inner Frame */}
        <div className="pointer-events-none absolute inset-4 left-9 md:left-11 border border-[#c89d45]/45 rounded-r-lg">
          <div className="absolute inset-1.5 border border-dashed border-[#c89d45]/25 rounded-r-md" />
        </div>

        {/* Brass Corner Protectors (Top-Right & Bottom-Right) */}
        <div
          className="pointer-events-none absolute top-2 right-2 w-8 h-8 border-t-2 border-r-2 border-[#e2be6b]/70 rounded-tr-lg"
          style={{
            background:
              "linear-gradient(225deg, rgba(226,190,107,0.3) 0%, transparent 65%)",
          }}
        />
        <div
          className="pointer-events-none absolute bottom-2 right-2 w-8 h-8 border-b-2 border-r-2 border-[#e2be6b]/70 rounded-br-lg"
          style={{
            background:
              "linear-gradient(315deg, rgba(226,190,107,0.3) 0%, transparent 65%)",
          }}
        />

        {/* TOP HEADER: Expedition Code & Status Stamp */}
        <div className="relative z-10 pl-5 md:pl-6 flex items-center justify-between">
          <span className="font-typewriter text-[11px] tracking-[0.2em] uppercase text-[#e2be6b]/80 border border-[#c89d45]/35 px-2.5 py-1 rounded-xs bg-[#1b0f08]/60">
            {isEs ? "ARCHIVO DE EXPEDICIÓN № 26" : "FIELD LOGBOOK № 26"}
          </span>
          <span className="font-typewriter text-[11px] text-[#c89d45]/75 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#4ea868] animate-pulse" />
            BUE // AR
          </span>
        </div>

        {/* CENTER MEDALLION & TITLE */}
        <div className="relative z-10 pl-5 md:pl-6 my-auto flex flex-col items-center text-center">
          {/* Embossed Gold Compass Rose */}
          <div className="relative mb-5 flex items-center justify-center">
            <div className="w-24 h-24 md:w-28 md:h-28 rounded-full border border-[#c89d45]/50 bg-[#1f120b]/80 flex items-center justify-center shadow-[inset_0_0_20px_rgba(0,0,0,0.8),0_0_25px_rgba(200,157,69,0.15)] group-hover:scale-105 transition-transform duration-500">
              <div className="w-20 h-20 md:w-22 md:h-22 rounded-full border border-dashed border-[#c89d45]/40 flex items-center justify-center">
                <Compass className="w-11 h-11 md:w-12 md:h-12 text-[#e2be6b] transition-transform duration-700 group-hover:rotate-45" />
              </div>
            </div>
          </div>

          {/* Subtitle */}
          <p className="font-typewriter text-xs uppercase tracking-[0.25em] text-[#c89d45] mb-2">
            {isEs ? "Bitácora de Ingeniería & Producto" : "Engineering & Product Logbook"}
          </p>

          {/* Main Embossed Name */}
          <h1
            className="font-serif-book text-3xl md:text-4xl font-bold tracking-wide text-[#f5e8c7] mb-3"
            style={{
              textShadow: "0 2px 4px rgba(0,0,0,0.9), 0 0 18px rgba(200,157,69,0.25)",
            }}
          >
            TOMÁS REYES
          </h1>

          {/* Decorative Divider */}
          <div className="flex items-center gap-3 w-48 my-2">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-[#c89d45]/60" />
            <Sparkles className="w-3.5 h-3.5 text-[#c89d45]" />
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-[#c89d45]/60" />
          </div>

          {/* Role Plate */}
          <div className="mt-2 px-4 py-2 rounded-sm bg-[#e8dcc4] text-[#25160e] border-2 border-[#8c6d46] shadow-md transform -rotate-1">
            <p className="font-handwriting text-xl md:text-2xl font-bold leading-none">
              Full Stack & Product Developer
            </p>
          </div>

          <p className="mt-4 font-serif-book text-xs md:text-sm text-[#d9c8a9]/80 max-w-xs leading-relaxed italic">
            {isEs
              ? "“Notas de campo, arquitecturas escalables, diseño de interfaces y productos digitales de alto impacto.”"
              : "“Field notes, scalable architectures, interface design, and high-impact digital products.”"}
          </p>
        </div>

        {/* BOTTOM CTA: Wax Seal / Brass Clasp to Open Book */}
        <div className="relative z-10 pl-5 md:pl-6 flex flex-col items-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            onClick={(e) => {
              e.stopPropagation();
              openBook();
            }}
            className="wax-seal-btn flex items-center gap-2.5 px-7 py-3 rounded-full text-[#f7ecd5] border-2 border-[#e2be6b]/70 cursor-pointer group-hover:border-[#e2be6b]"
          >
            <BookOpen className="w-4 h-4 text-[#e2be6b]" />
            <span className="font-typewriter text-xs md:text-sm font-bold uppercase tracking-widest">
              {isEs ? "Abrir Libro" : "Open Book"}
            </span>
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
}
