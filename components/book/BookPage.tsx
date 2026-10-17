"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

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

/**
 * Physical Paper Dog-Ear Corner
 * When hovered, the corner physically folds and peels deeper into the page
 * (fold expands from 30px to 66px with fluid paper spring physics).
 */
function InteractivePageCurl({
  side,
  onClick,
}: {
  side: "left" | "right";
  onClick: () => void;
}) {
  const isLeft = side === "left";
  const [isHovered, setIsHovered] = useState(false);

  // Fold extent: 24px at rest, expands to 52px when hovered
  const s = isHovered ? 52 : 24;
  const box = 112;

  // Paths for right corner (bottom-right origin: x=112, y=112)
  const rightShadowPath = `M ${box - s} ${box} L ${box} ${box - s} L ${box} ${box} Z`;
  const rightFlapPath = `M ${box - s} ${box} L ${box - s} ${box - s} L ${box} ${box - s} Z`;

  // Paths for left corner (bottom-left origin: x=0, y=112)
  const leftShadowPath = `M 0 ${box} L ${s} ${box} L 0 ${box - s} Z`;
  const leftFlapPath = `M ${s} ${box} L ${s} ${box - s} L 0 ${box - s} Z`;

  return (
    <div
      className={`pointer-events-none absolute bottom-0 ${
        isLeft ? "left-0" : "right-0"
      } w-28 h-28 z-40 select-none`}
    >
      <svg
        viewBox={`0 0 ${box} ${box}`}
        className="w-full h-full overflow-visible pointer-events-none"
      >
        <defs>
          {/* Shadow underneath the fold where page was lifted */}
          <radialGradient
            id={`corner-shadow-${side}`}
            cx={isLeft ? "0%" : "100%"}
            cy="100%"
            r="85%"
          >
            <stop offset="0%" stopColor="#1a0c04" stopOpacity="0.7" />
            <stop offset="55%" stopColor="#2c1709" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#2c1709" stopOpacity="0.03" />
          </radialGradient>

          {/* Paper texture gradient for the folded flap */}
          <linearGradient
            id={`corner-flap-${side}`}
            x1={isLeft ? "100%" : "0%"}
            y1="0%"
            x2={isLeft ? "0%" : "100%"}
            y2="100%"
          >
            <stop offset="0%" stopColor="#fffef9" />
            <stop offset="30%" stopColor="#f7eedb" />
            <stop offset="65%" stopColor="#ebdcc3" />
            <stop offset="100%" stopColor="#cfba92" />
          </linearGradient>

          {/* Drop shadow cast by the folded flap onto the page */}
          <filter
            id={`flap-drop-shadow-${side}`}
            x="-25%"
            y="-25%"
            width="150%"
            height="150%"
          >
            <feDropShadow
              dx={isLeft ? "4" : "-4"}
              dy="-4"
              stdDeviation="3.5"
              floodColor="#1a0c04"
              floodOpacity="0.38"
            />
          </filter>
        </defs>

        {/* 1. Underlying Void/Shadow where paper was lifted */}
        <motion.path
          d={isLeft ? leftShadowPath : rightShadowPath}
          fill={`url(#corner-shadow-${side})`}
          animate={{ d: isLeft ? leftShadowPath : rightShadowPath }}
          transition={{ type: "spring", stiffness: 240, damping: 22 }}
        />

        {/* 2. Folded Page Flap that peels up */}
        <motion.path
          d={isLeft ? leftFlapPath : rightFlapPath}
          fill={`url(#corner-flap-${side})`}
          filter={`url(#flap-drop-shadow-${side})`}
          animate={{ d: isLeft ? leftFlapPath : rightFlapPath }}
          transition={{ type: "spring", stiffness: 240, damping: 22 }}
        />

        {/* 3. Subtle fold crease specular line */}
        <motion.line
          x1={isLeft ? 0 : box}
          y1={box - s}
          x2={isLeft ? s : box - s}
          y2={box}
          stroke="rgba(255, 255, 255, 0.55)"
          strokeWidth="1"
          animate={{
            x1: isLeft ? 0 : box,
            y1: box - s,
            x2: isLeft ? s : box - s,
            y2: box,
          }}
          transition={{ type: "spring", stiffness: 240, damping: 22 }}
        />

        {/* 4. PRECISE INTERACTIVE HIT-TARGET: Only the folded corner polygon receives events */}
        <motion.polygon
          points={
            isLeft
              ? `0,${box} ${s + 6},${box} 0,${box - (s + 6)}`
              : `${box - (s + 6)},${box} ${box},${box - (s + 6)} ${box},${box}`
          }
          animate={{
            points: isLeft
              ? `0,${box} ${s + 6},${box} 0,${box - (s + 6)}`
              : `${box - (s + 6)},${box} ${box},${box - (s + 6)} ${box},${box}`,
          }}
          transition={{ type: "spring", stiffness: 240, damping: 22 }}
          fill="transparent"
          className="pointer-events-auto cursor-pointer"
          onClick={(e) => {
            e.stopPropagation();
            onClick();
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <title>{isLeft ? "Página anterior" : "Página siguiente"}</title>
        </motion.polygon>
      </svg>
    </div>
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
        className={`pointer-events-none absolute inset-y-2.5 md:inset-y-3 border border-[#8c6d46]/20 ${
          isLeft
            ? "left-2.5 md:left-3 right-2.5 md:right-9 lg:right-11 rounded-l-xs"
            : "left-2.5 md:left-9 lg:left-11 right-2.5 md:right-3 rounded-r-xs"
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
        className={`relative z-10 flex items-center justify-between pt-4 pb-2 border-b border-[#8c6d46]/20 mx-4 sm:mx-6 ${
          isLeft
            ? "flex-row md:ml-4 lg:ml-5 md:mr-10 lg:mr-12"
            : "flex-row-reverse md:ml-10 lg:ml-12 md:mr-4 lg:mr-5"
        }`}
      >
        <span className="font-serif-book text-xs md:text-sm italic text-[#5a4232] font-medium tracking-wide">
          {chapterTitle || "Tomás Reyes"}
        </span>

        <span className="font-typewriter text-[10px] tracking-widest text-[#8c6e54] uppercase">
          {isLeft ? "TOMÁS REYES" : "PORTFOLIO"}
        </span>
      </header>

      {/* Main Page Content Body with Asymmetric Gutter Margins */}
      <div
        className={`relative z-10 flex-1 overflow-y-auto book-scroll py-3 md:py-4 px-4 sm:px-6 ${
          isLeft
            ? "md:pl-5 lg:pl-6 md:pr-11 lg:pr-13"
            : "md:pl-11 lg:pl-13 md:pr-5 lg:pr-6"
        }`}
      >
        {children}
      </div>

      {/* Natural Bottom Footer with Page Number */}
      <footer
        className={`relative z-20 flex items-center justify-between pb-3 pt-1.5 border-t border-[#8c6d46]/15 mx-4 sm:mx-6 ${
          isLeft
            ? "flex-row md:ml-4 lg:ml-5 md:mr-10 lg:mr-12"
            : "flex-row-reverse md:ml-10 lg:ml-12 md:mr-4 lg:mr-5"
        }`}
      >
        <span className="font-typewriter text-[11px] font-bold tracking-widest text-[#6a4f3b] select-none">
          — {pageNumber} —
        </span>
      </footer>

      {/* Physical Paper Dog-Ear Corner (Peels and folds more on hover) */}
      {onCornerClick && (
        <InteractivePageCurl side={side} onClick={onCornerClick} />
      )}
    </div>
  );
}
