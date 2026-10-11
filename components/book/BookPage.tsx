"use client";

import React from "react";

interface BookPageProps {
  side: "left" | "right";
  pageNumber: string;
  chapterTitle?: string;
  children: React.ReactNode;
  onCornerClick?: () => void;
  className?: string;
}

function CompassWatermark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 120"
      className={`pointer-events-none select-none text-[#6e523e]/12 ${className}`}
      fill="none"
      stroke="currentColor"
    >
      <circle cx="60" cy="60" r="46" strokeWidth="0.8" strokeDasharray="3 3" />
      <circle cx="60" cy="60" r="38" strokeWidth="0.8" />
      <circle cx="60" cy="60" r="5" strokeWidth="1" />
      <polygon
        points="60,8 65,55 60,50 55,55"
        fill="currentColor"
        stroke="none"
      />
      <polygon points="60,112 65,65 60,70 55,65" strokeWidth="0.8" />
      <polygon
        points="112,60 65,65 70,60 65,55"
        fill="currentColor"
        stroke="none"
      />
      <polygon points="8,60 55,65 50,60 55,55" strokeWidth="0.8" />
      <line x1="27" y1="27" x2="93" y2="93" strokeWidth="0.6" />
      <line x1="93" y1="27" x2="27" y2="93" strokeWidth="0.6" />
    </svg>
  );
}

export default function BookPage({
  side,
  pageNumber,
  chapterTitle,
  children,
  onCornerClick,
  className = "",
}: BookPageProps) {
  const isLeft = side === "left";

  return (
    <div
      className={`relative flex-1 h-full flex flex-col justify-between overflow-hidden select-text ${
        isLeft
          ? "parchment-page-left rounded-l-md border-l border-y border-[#9c825b]/50"
          : "parchment-page-right rounded-r-md border-r border-y border-[#9c825b]/50"
      } ${className}`}
    >
      {/* Decorative Inner Paper Margin */}
      <div
        className={`pointer-events-none absolute inset-2.5 md:inset-3 border border-[#8c6d46]/20 ${
          isLeft ? "rounded-l-xs" : "rounded-r-xs"
        }`}
      />

      {/* Subtle Corner Watermark */}
      <CompassWatermark
        className={`absolute w-24 h-24 md:w-32 md:h-32 ${
          isLeft ? "-top-4 -left-4" : "-top-4 -right-4"
        }`}
      />

      {/* Natural Book Folio Header */}
      <header
        className={`relative z-10 flex items-center justify-between px-5 md:px-7 pt-4 pb-2 border-b border-[#8c6d46]/20 mx-3 md:mx-5 ${
          isLeft ? "flex-row" : "flex-row-reverse"
        }`}
      >
        <span className="font-serif-book text-xs md:text-sm italic text-[#5a4232] font-medium tracking-wide">
          {chapterTitle || "Tomás Reyes"}
        </span>

        <span className="font-typewriter text-[10px] tracking-widest text-[#8c6e54] uppercase">
          {isLeft ? "TOMÁS REYES" : "PORTFOLIO"}
        </span>
      </header>

      {/* Main Page Content Body */}
      <div className="relative z-10 flex-1 overflow-y-auto book-scroll px-5 md:px-8 py-3 md:py-4">
        {children}
      </div>

      {/* Natural Bottom Footer with Page Number & Folded Page Corner (Page Curl) */}
      <footer
        className={`relative z-10 flex items-center justify-between px-5 md:px-7 pb-3 pt-1.5 border-t border-[#8c6d46]/15 mx-3 md:mx-5 ${
          isLeft ? "flex-row" : "flex-row-reverse"
        }`}
      >
        <span className="font-typewriter text-[11px] font-bold tracking-widest text-[#6a4f3b]">
          — {pageNumber} —
        </span>

        {/* Clickable subtle text indicator if corner click is available */}
        {onCornerClick && (
          <button
            onClick={onCornerClick}
            className="group font-serif-book text-xs italic text-[#8c6e54] hover:text-[#22140c] transition-colors cursor-pointer"
          >
            {isLeft ? "‹ anterior" : "siguiente ›"}
          </button>
        )}
      </footer>

      {/* Realistic 3D Page Curl in Bottom Corner */}
      {onCornerClick && (
        <div
          onClick={onCornerClick}
          title={isLeft ? "Página anterior" : "Página siguiente"}
          className={
            isLeft ? "page-curl-corner-left" : "page-curl-corner-right"
          }
        />
      )}
    </div>
  );
}
