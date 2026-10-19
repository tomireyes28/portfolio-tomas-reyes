"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Compass, BookOpen, Sparkles } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import BookPage from "./BookPage";
import { AboutLeftPage } from "@/components/pages/AboutPage";

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

  useEffect(() => {
    if (!isOpen) {
      setIsFullyOpen(false);
      wasOpenRef.current = false;
    }
  }, [isOpen]);

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

        {/* TOP HEADER */}
        <div className="relative z-10 pl-5 md:pl-6 flex items-center justify-between">
          <span className="font-typewriter text-[10px] md:text-[11px] tracking-[0.2em] uppercase text-[#e2be6b]/85 border border-[#c89d45]/35 px-2.5 py-1 rounded-xs bg-[#1b0f08]/60">
            {isEs ? "PORTAFOLIO 2026" : "PORTFOLIO // 2026"}
          </span>
          <span className="font-typewriter text-[10px] md:text-[11px] text-[#c89d45]/80 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-[#4ea868] animate-pulse" />
            {isEs ? "BUENOS AIRES, ARGENTINA" : "BUENOS AIRES, AR"}
          </span>
        </div>

        {/* CENTER MEDALLION & TITLE */}
        <div className="relative z-10 pl-5 md:pl-6 my-auto flex flex-col items-center text-center">
          <div className="relative mb-3 flex items-center justify-center">
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-full border border-[#c89d45]/50 bg-[#1f120b]/85 flex items-center justify-center shadow-[inset_0_0_20px_rgba(0,0,0,0.85),0_0_25px_rgba(200,157,69,0.2)] group-hover:scale-105 transition-transform duration-500">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full border border-dashed border-[#c89d45]/40 flex items-center justify-center">
                <Compass className="w-9 h-9 md:w-11 md:h-11 text-[#e2be6b] transition-transform duration-700 group-hover:rotate-45" />
              </div>
            </div>
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

          {/* Tech Stack Chips (Alternativa A) */}
          <div className="mt-4 flex flex-wrap justify-center gap-1.5 max-w-xs px-1">
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
        </div>

        {/* Antique Brass & Leather Clasp Tab on Right Edge */}
        <div
          className="pointer-events-none absolute -right-3.5 top-1/2 -translate-y-1/2 z-30 hidden sm:flex items-center justify-center py-4 px-1 rounded-r-md border-y-2 border-r-2 border-[#e2be6b]/70 bg-gradient-to-r from-[#24140b] to-[#3a2012] shadow-xl group-hover:translate-x-1 transition-transform duration-300"
        >
          <div className="flex flex-col items-center gap-1.5 text-[#e2be6b]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#e2be6b] shadow-xs" />
            <span className="w-1 h-3 rounded-full bg-[#c89d45]/60" />
            <span className="w-1.5 h-1.5 rounded-full bg-[#e2be6b] shadow-xs" />
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
