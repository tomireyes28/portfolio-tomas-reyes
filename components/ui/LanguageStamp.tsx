"use client";

import React from "react";
import { useLanguage } from "@/context/LanguageContext";

interface LanguageStampProps {
  className?: string;
  orientation?: "horizontal" | "vertical";
}

export default function LanguageStamp({
  className = "",
  orientation = "horizontal",
}: LanguageStampProps) {
  const { language, toggleLanguage } = useLanguage();
  const isEs = language === "es";
  const isVertical = orientation === "vertical";

  return (
    <div
      onClick={(e) => e.stopPropagation()}
      className={`flex ${
        isVertical ? "flex-col items-center gap-2" : "items-center gap-2"
      } select-none ${className}`}
    >
      {/* 1. Argentina Flag Stamp (ES) */}
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          if (!isEs) toggleLanguage();
        }}
        title="Español (Argentina)"
        aria-label="Seleccionar idioma Español"
        className={`group relative flex flex-col items-center cursor-pointer transition-all duration-300 ${
          isEs
            ? "scale-105 z-10"
            : "opacity-45 hover:opacity-85 grayscale-[25%] hover:scale-100"
        }`}
      >
        <div
          className={`relative w-9.5 h-6.5 sm:w-10 sm:h-7 rounded-xs overflow-hidden transition-all duration-300 ${
            isEs
              ? "ring-2 ring-[#f3d37a] shadow-[0_4px_14px_rgba(243,211,122,0.6)]"
              : "border border-[#8c6d46]/60 shadow-xs"
          }`}
        >
          {/* Argentina Flag SVG (Crisp and Vibrant on Windows) */}
          <svg
            className="w-full h-full object-cover"
            viewBox="0 0 640 480"
          >
            <path fill="#75aadb" d="M0 0h640v480H0z" />
            <path fill="#fff" d="M0 160h640v160H0z" />
            <circle cx="320" cy="240" r="38" fill="#f6b40e" />
          </svg>

          {/* Golden shine overlay for active flag */}
          {isEs && (
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent" />
          )}
        </div>

        {/* Active Indicator & Text Label */}
        <div className="flex items-center gap-1 mt-0.5">
          <span
            className={`font-typewriter text-[11px] font-bold tracking-wider uppercase transition-colors ${
              isEs ? "text-[#f3d37a]" : "text-[#dfcdad]/60"
            }`}
          >
            ES
          </span>
          {isEs && (
            <span className="w-1.5 h-1.5 rounded-full bg-[#f3d37a] shadow-[0_0_6px_#f3d37a]" />
          )}
        </div>
      </button>

      {/* Divider */}
      {isVertical ? (
        <span className="w-6 h-px bg-[#8c6d46]/35 my-0.5" />
      ) : (
        <span className="text-[#c89d45]/40 text-xs font-serif-book">/</span>
      )}

      {/* 2. USA Flag Stamp (EN) */}
      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          if (isEs) toggleLanguage();
        }}
        title="English (United States)"
        aria-label="Select English language"
        className={`group relative flex flex-col items-center cursor-pointer transition-all duration-300 ${
          !isEs
            ? "scale-105 z-10"
            : "opacity-45 hover:opacity-85 grayscale-[25%] hover:scale-100"
        }`}
      >
        <div
          className={`relative w-9.5 h-6.5 sm:w-10 sm:h-7 rounded-xs overflow-hidden transition-all duration-300 ${
            !isEs
              ? "ring-2 ring-[#f3d37a] shadow-[0_4px_14px_rgba(243,211,122,0.6)]"
              : "border border-[#8c6d46]/60 shadow-xs"
          }`}
        >
          {/* USA Flag SVG (Crisp and Vibrant on Windows) */}
          <svg
            className="w-full h-full object-cover"
            viewBox="0 0 640 480"
          >
            <path fill="#bd3d44" d="M0 0h640v480H0z" />
            <path
              stroke="#fff"
              strokeWidth="37"
              d="M0 55h640M0 129h640M0 203h640M0 277h640M0 351h640M0 425h640"
            />
            <path fill="#192f5d" d="M0 0h260v258H0z" />
          </svg>

          {/* Golden shine overlay for active flag */}
          {!isEs && (
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent" />
          )}
        </div>

        {/* Active Indicator & Text Label */}
        <div className="flex items-center gap-1 mt-0.5">
          <span
            className={`font-typewriter text-[11px] font-bold tracking-wider uppercase transition-colors ${
              !isEs ? "text-[#f3d37a]" : "text-[#dfcdad]/60"
            }`}
          >
            EN
          </span>
          {!isEs && (
            <span className="w-1.5 h-1.5 rounded-full bg-[#f3d37a] shadow-[0_0_6px_#f3d37a]" />
          )}
        </div>
      </button>
    </div>
  );
}
