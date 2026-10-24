"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Compass, BookOpen, Sparkles, FileDown, Check } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import BookPage from "./BookPage";
import { AboutLeftPage } from "@/components/pages/AboutPage";
import LanguageStamp from "@/components/ui/LanguageStamp";

interface BookCoverProps {
  isOpen: boolean;
  onOpen: () => void;
}

export default function BookCover({ isOpen, onOpen }: BookCoverProps) {
  const { language } = useLanguage();
  const isEs = language === "es";

  // When fully open, unmount this overlay so it NEVER blocks other portfolio sections!
  const [isFullyOpen, setIsFullyOpen] = useState(isOpen);
  const wasOpenRef = useRef(isOpen);
  const [downloadingCv, setDownloadingCv] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      setIsFullyOpen(false);
      wasOpenRef.current = false;
    }
  }, [isOpen]);

  const handleDownloadCv = (e: React.MouseEvent) => {
    e.stopPropagation();
    setDownloadingCv(true);

    const link = document.createElement("a");
    link.href = "/projects/Tomas%20Reyes%20CV.pdf";
    link.download = "Tomas_Reyes_CV.pdf";
    link.target = "_blank";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setTimeout(() => {
      setDownloadingCv(false);
    }, 2500);
  };

  if (isFullyOpen && isOpen) {
    return null;
  }

  return (
    <motion.div
      initial={wasOpenRef.current ? { rotateY: -180 } : false}
      animate={{
        rotateY: isOpen ? -180 : 0,
      }}
      transition={{
        duration: 0.75,
        ease: [0.25, 0.1, 0.25, 1],
      }}
      onAnimationComplete={() => {
        if (isOpen) {
          setIsFullyOpen(true);
        } else {
          wasOpenRef.current = false;
        }
      }}
      style={{
        transformOrigin: "left center",
        transformStyle: "preserve-3d",
      }}
      className={`absolute top-0 bottom-0 right-0 w-full md:w-1/2 z-35 select-none preserve-3d ${
        isOpen ? "pointer-events-none" : "pointer-events-auto cursor-pointer"
      }`}
      onClick={() => {
        if (!isOpen) onOpen();
      }}
    >
      {/* ============================================================== */}
      {/* 1. CARA A (FRONT): LA TAPA DE CUERO EXPEDICIONARIA */}
      {/* Visible de 0deg a -90deg */}
      {/* ============================================================== */}
      <div
        className="absolute inset-0 realistic-leather-cover rounded-r-xl rounded-l-md flex flex-col justify-between p-6 md:p-8 backface-hidden preserve-3d"
        style={{
          boxShadow:
            "0 12px 32px rgba(0,0,0,0.75), inset 0 2px 6px rgba(255,225,180,0.2), inset 0 -8px 22px rgba(0,0,0,0.8)",
        }}
      >
        {/* Left Leather Spine Strip with 3D ridge */}
        <div
          className="absolute inset-y-0 -left-1 w-8 md:w-10 rounded-l-lg border-r border-[#c89d45]/35 pointer-events-none"
          style={{
            background:
              "linear-gradient(90deg, #120904 0%, #3a2214 25%, #4f2e1b 50%, #24140b 80%, #150b06 100%)",
            boxShadow:
              "inset 2px 0 4px rgba(255,225,180,0.15), inset -3px 0 8px rgba(0,0,0,0.85), -6px 0 16px rgba(0,0,0,0.75)",
          }}
        >
          <div className="h-full w-full border-r border-dashed border-[#c89d45]/30" />
        </div>

        {/* Gold Stitched Inner Frame */}
        <div className="pointer-events-none absolute inset-3 left-9 md:left-11 border border-[#c89d45]/45 rounded-r-lg">
          <div className="absolute inset-1.5 border border-dashed border-[#c89d45]/25 rounded-r-md" />
        </div>

        {/* Brass Corner Protectors (Top-Right & Bottom-Right) */}
        <div
          className="pointer-events-none absolute top-2 right-2 w-7 h-7 border-t-2 border-r-2 border-[#e2be6b]/75 rounded-tr-lg"
          style={{
            background:
              "linear-gradient(225deg, rgba(226,190,107,0.3) 0%, transparent 65%)",
          }}
        />
        <div
          className="pointer-events-none absolute bottom-2 right-2 w-7 h-7 border-b-2 border-r-2 border-[#e2be6b]/75 rounded-br-lg"
          style={{
            background:
              "linear-gradient(315deg, rgba(226,190,107,0.3) 0%, transparent 65%)",
          }}
        />

        {/* TOP HEADER: Portafolio Badge & Travel Language Stamp */}
        <div className="relative z-10 pl-5 md:pl-6 flex items-center justify-between gap-2">
          <span className="font-typewriter text-[10px] md:text-[11px] tracking-[0.2em] uppercase text-[#e2be6b]/85 border border-[#c89d45]/35 px-2.5 py-1 rounded-xs bg-[#1b0f08]/60">
            {isEs ? "PORTAFOLIO 2026" : "PORTFOLIO // 2026"}
          </span>

          <div className="flex items-center gap-3">
            <span className="font-typewriter text-[10px] md:text-[11px] text-[#c89d45]/80 hidden sm:flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-[#c89d45]/60" />
              {isEs ? "BUENOS AIRES" : "BUENOS AIRES, AR"}
            </span>
            <LanguageStamp />
          </div>
        </div>

        {/* CENTER MEDALLION & TITLE */}
        <div className="relative z-10 pl-5 md:pl-6 my-auto flex flex-col items-center text-center">
          {/* Logo Medallion with Golden Shimmer Beam & Sparkle */}
          <div className="relative mb-3 flex items-center justify-center">
            {/* Ambient Animated Gold Glow Ring */}
            <div className="relative w-20 h-20 md:w-24 md:h-24 rounded-full border-2 border-[#e2be6b]/60 bg-[#1f120b]/90 flex items-center justify-center animate-gold-aura group-hover:scale-105 transition-transform duration-500 overflow-hidden">
              {/* Periodic Light Sweep Shimmer across the medallion */}
              <div className="pointer-events-none absolute -inset-full bg-gradient-to-r from-transparent via-white/20 via-[#f3d37a]/30 to-transparent animate-book-shimmer" />

              <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-full border border-dashed border-[#c89d45]/60 flex items-center justify-center p-2">
                <img
                  src="/logo.png"
                  alt="Tomás Reyes Logo"
                  className="w-10 h-10 md:w-12 md:h-12 object-contain drop-shadow-[0_0_12px_rgba(56,189,248,0.5)] transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            </div>

            {/* Little Glint Star on the Medallion Rim */}
            <span className="absolute -top-1 -right-1 text-[#f3d37a] text-sm animate-glint pointer-events-none drop-shadow-[0_0_6px_#f3d37a]">
              ✦
            </span>
          </div>

          <h1
            className="font-serif-book text-2xl md:text-3xl lg:text-4xl font-bold tracking-wide text-[#f5e8c7] mb-2"
            style={{
              textShadow: "0 2px 4px rgba(0,0,0,0.9), 0 0 18px rgba(200,157,69,0.3)",
            }}
          >
            TOMÁS REYES
          </h1>

          <div className="flex items-center gap-2.5 w-44 my-1.5">
            <div className="h-px flex-1 bg-gradient-to-r from-transparent to-[#c89d45]/60" />
            <Sparkles className="w-3 h-3 text-[#c89d45]" />
            <div className="h-px flex-1 bg-gradient-to-l from-transparent to-[#c89d45]/60" />
          </div>

          <div className="mt-1 px-3.5 py-1.5 rounded-xs bg-[#e8dcc4] text-[#25160e] border border-[#8c6d46] shadow-md transform -rotate-1">
            <p className="font-handwriting text-lg md:text-xl font-bold leading-none">
              Full Stack & Automation Developer
            </p>
          </div>

          {/* Tech Stack Chips */}
          <div className="mt-3 flex flex-wrap justify-center gap-1.5 max-w-xs px-1">
            {[
              "Next.js",
              "TypeScript",
              "React",
              "Node.js",
              "Make",
              "n8n",
              "APIs & Webhooks",
              "PostgreSQL",
            ].map((tech) => (
              <span
                key={tech}
                className="font-typewriter text-[9.5px] tracking-wider uppercase px-2 py-0.5 rounded-xs bg-[#190d07]/80 text-[#e2be6b]/90 border border-[#c89d45]/35 shadow-xs"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Interactive CV Document Card with Brass Paperclip & Click Feedback */}
          <div className="mt-3.5 relative z-20">
            <button
              type="button"
              onClick={handleDownloadCv}
              title={isEs ? "Descargar Currículum Vitae (PDF)" : "Download Resume / CV (PDF)"}
              className={`group/cv relative inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-xs border transition-all cursor-pointer transform -rotate-1 hover:rotate-0 hover:scale-105 active:scale-95 ${
                downloadingCv
                  ? "bg-[#265538] border-[#a3e635] text-[#f5ebd6] shadow-[0_0_15px_rgba(74,222,128,0.5)]"
                  : "bg-[#24150d]/95 hover:bg-[#341d11] text-[#e2be6b] border-[#c89d45]/60 shadow-[3px_5px_15px_rgba(0,0,0,0.7)]"
              }`}
            >
              {/* Realistic Brass Paperclip SVG */}
              <div className="absolute -top-3 left-3 pointer-events-none drop-shadow-xs">
                <svg width="12" height="24" viewBox="0 0 12 24" fill="none">
                  <path
                    d="M3 5V18C3 19.6569 4.34315 21 6 21C7.65685 21 9 19.6569 9 18V3C9 1.89543 8.10457 1 7 1C5.89543 1 5 1.89543 5 3V16C5 16.5523 5.44772 17 6 17C6.55228 17 7 16.5523 7 16V6"
                    stroke="#e2be6b"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                  />
                </svg>
              </div>

              {downloadingCv ? (
                <Check className="w-3.5 h-3.5 text-[#a3e635] ml-2 shrink-0 animate-bounce" />
              ) : (
                <FileDown className="w-3.5 h-3.5 text-[#c89d45] ml-2 shrink-0 group-hover/cv:scale-110 transition-transform" />
              )}

              <div className="flex flex-col text-left leading-tight">
                <span className="font-typewriter text-[11px] font-bold uppercase tracking-wider text-[#f5ebd6]">
                  {downloadingCv
                    ? isEs
                      ? "✓ Descargando..."
                      : "✓ Downloading..."
                    : isEs
                    ? "Curriculum Vitae"
                    : "Resume / CV"}
                </span>
                <span className="font-typewriter text-[8.5px] text-[#c89d45]/85">
                  {isEs ? "PDF • Descarga directa" : "PDF • Direct Download"}
                </span>
              </div>
            </button>
          </div>
        </div>

        {/* ============================================================== */}
        {/* INTERACTIVE SHIMMERING BRASS CLASP (Click to open journal)       */}
        {/* ============================================================== */}
        <div
          onClick={(e) => {
            e.stopPropagation();
            if (!isOpen) onOpen();
          }}
          className="absolute -right-4 md:-right-5 top-1/2 -translate-y-1/2 z-30 flex items-center py-4 px-2 rounded-r-lg border-y-2 border-r-2 border-[#f3d37a] bg-gradient-to-r from-[#24140b] via-[#3a2012] to-[#4a2b19] shadow-[6px_8px_20px_rgba(0,0,0,0.85)] cursor-pointer group-hover:translate-x-1.5 transition-all duration-300 overflow-hidden animate-gold-aura"
          title={isEs ? "Abrir diario de portfolio" : "Open portfolio journal"}
        >
          {/* Shimmer sweep over the clasp */}
          <div className="pointer-events-none absolute -inset-full bg-gradient-to-r from-transparent via-[#f3d37a]/35 to-transparent animate-book-shimmer" />

          <div className="relative flex flex-col items-center gap-1.5 text-[#f3d37a]">
            <span className="w-2 h-2 rounded-full bg-[#f3d37a] shadow-[0_0_8px_#f3d37a]" />
            <span className="font-typewriter text-[9px] font-bold uppercase tracking-widest text-[#f5ebd6] [writing-mode:vertical-lr] rotate-180 py-1">
              {isEs ? "ABRIR" : "OPEN"}
            </span>
            <span className="w-1.5 h-1.5 rounded-full bg-[#c89d45]" />
          </div>
        </div>
      </div>

      {/* ============================================================== */}
      {/* 2. CARA B (BACK): LA PRIMERA HOJA (SOBRE MÍ) */}
      {/* Visible de -90deg a -180deg - El mismo objeto físico! */}
      {/* ============================================================== */}
      <div
        style={{ transform: "rotateY(180deg)" }}
        className={`absolute inset-0 backface-hidden preserve-3d ${
          !isOpen ? "pointer-events-none invisible" : ""
        }`}
      >
        <BookPage
          side="left"
          pageNumber="01"
          chapterTitle={isEs ? "Sobre Mí" : "About Me"}
        >
          <AboutLeftPage />
        </BookPage>
      </div>
    </motion.div>
  );
}
