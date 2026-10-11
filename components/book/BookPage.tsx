"use client";

import React from "react";

interface BookPageProps {
  side: "left" | "right";
  pageNumber: string;
  chapterCode?: string;
  chapterTitle?: string;
  children: React.ReactNode;
  onCornerClick?: () => void;
  cornerLabel?: string;
  className?: string;
}

function CompassWatermark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 120"
      className={`pointer-events-none select-none text-[#6e523e]/15 ${className}`}
      fill="none"
      stroke="currentColor"
    >
      <circle cx="60" cy="60" r="46" strokeWidth="1" strokeDasharray="3 3" />
      <circle cx="60" cy="60" r="38" strokeWidth="1" />
      <circle cx="60" cy="60" r="6" strokeWidth="1.2" />
      {/* Main N-S-E-W points */}
      <polygon
        points="60,8 66,54 60,48 54,54"
        fill="currentColor"
        stroke="none"
      />
      <polygon points="60,112 66,66 60,72 54,66" strokeWidth="1" />
      <polygon
        points="112,60 66,66 72,60 66,54"
        fill="currentColor"
        stroke="none"
      />
      <polygon points="8,60 54,66 48,60 54,54" strokeWidth="1" />
      {/* Diagonal rays */}
      <line x1="27" y1="27" x2="93" y2="93" strokeWidth="0.75" />
      <line x1="93" y1="27" x2="27" y2="93" strokeWidth="0.75" />
      <text
        x="57"
        y="6"
        fontSize="7"
        fontFamily="monospace"
        fill="currentColor"
        stroke="none"
      >
        N
      </text>
    </svg>
  );
}

export default function BookPage({
  side,
  pageNumber,
  chapterCode,
  chapterTitle,
  children,
  onCornerClick,
  cornerLabel,
  className = "",
}: BookPageProps) {
  const isLeft = side === "left";

  return (
    <div
      className={`relative flex-1 h-full flex flex-col justify-between overflow-hidden select-text ${
        isLeft
          ? "parchment-page-left rounded-l-md border-l border-y border-[#9c825b]/60"
          : "parchment-page-right rounded-r-md border-r border-y border-[#9c825b]/60"
      } ${className}`}
    >
      {/* Decorative Inner Margin Frame */}
      <div
        className={`pointer-events-none absolute inset-3 md:inset-4 border border-[#8c6d46]/25 ${
          isLeft ? "rounded-l-xs" : "rounded-r-xs"
        }`}
      />

      {/* Corner Compass Rose Watermark */}
      <CompassWatermark
        className={`absolute w-28 h-28 md:w-36 md:h-36 ${
          isLeft ? "-top-6 -left-6" : "-top-6 -right-6"
        }`}
      />

      {/* Top Running Header */}
      <header
        className={`relative z-10 flex items-center justify-between px-6 md:px-8 pt-5 pb-2.5 border-b border-[#8c6d46]/25 mx-4 md:mx-6 ${
          isLeft ? "flex-row" : "flex-row-reverse"
        }`}
      >
        <div className="flex items-center gap-2">
          {chapterCode && (
            <span className="font-typewriter text-[11px] uppercase tracking-widest px-1.5 py-0.5 bg-[#4a3325]/10 text-[#4a3325] rounded-xs border border-[#8c6d46]/30">
              {chapterCode}
            </span>
          )}
          {chapterTitle && (
            <span className="font-serif-book text-xs md:text-sm italic text-[#5a4232] font-medium">
              {chapterTitle}
            </span>
          )}
        </div>

        <span className="font-typewriter text-[11px] tracking-widest text-[#6e523e] uppercase">
          {isLeft ? "BITÁCORA // T. REYES" : "LAT 34°36'S — BUE"}
        </span>
      </header>

      {/* Main Page Body Content */}
      <div className="relative z-10 flex-1 overflow-y-auto book-scroll px-6 md:px-9 py-4 md:py-5">
        {children}
      </div>

      {/* Bottom Running Footer + Page Number & Folded Corner Trigger */}
      <footer
        className={`relative z-10 flex items-center justify-between px-6 md:px-8 pb-4 pt-2 border-t border-[#8c6d46]/20 mx-4 md:mx-6 ${
          isLeft ? "flex-row" : "flex-row-reverse"
        }`}
      >
        <span className="font-typewriter text-xs font-bold tracking-widest text-[#5a4232]">
          — {pageNumber} —
        </span>

        {onCornerClick && (
          <button
            onClick={onCornerClick}
            className="group flex items-center gap-1.5 font-typewriter text-[11px] uppercase tracking-wider text-[#5a4232] hover:text-[#25160e] transition-colors cursor-pointer py-0.5 px-2 rounded-xs hover:bg-[#8c6d46]/15"
            title={cornerLabel}
          >
            {isLeft ? (
              <>
                <span className="transition-transform group-hover:-translate-x-0.5">
                  ←
                </span>
                <span>{cornerLabel || "Anterior"}</span>
              </>
            ) : (
              <>
                <span>{cornerLabel || "Siguiente"}</span>
                <span className="transition-transform group-hover:translate-x-0.5">
                  →
                </span>
              </>
            )}
          </button>
        )}
      </footer>
    </div>
  );
}
