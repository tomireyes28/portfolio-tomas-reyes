"use client";

import React from "react";
import { motion } from "framer-motion";
import { Compass, MapPin, Wrench, Award, Mail, BookMarked } from "lucide-react";
import { useBook, BookSectionId } from "@/context/BookContext";
import { useLanguage } from "@/context/LanguageContext";
import LanguageStamp from "@/components/ui/LanguageStamp";

interface TabItem {
  id: BookSectionId;
  num: string;
  labelEs: string;
  labelEn: string;
  icon: React.ComponentType<{ className?: string }>;
  accentColor: string;
}

const TABS: TabItem[] = [
  {
    id: "about",
    num: "01",
    labelEs: "Sobre Mí",
    labelEn: "About Me",
    icon: Compass,
    accentColor: "#2b583c", // Forest Green
  },
  {
    id: "projects",
    num: "02",
    labelEs: "Proyectos",
    labelEn: "Projects",
    icon: MapPin,
    accentColor: "#8c2d2d", // Stamp Red
  },
  {
    id: "skills",
    num: "03",
    labelEs: "Skills",
    labelEn: "Skills",
    icon: Wrench,
    accentColor: "#9c6b27", // Brass Gold
  },
  {
    id: "story",
    num: "04",
    labelEs: "Trayectoria",
    labelEn: "Journey",
    icon: Award,
    accentColor: "#3d5a6c", // Navy Ink
  },
  {
    id: "contact",
    num: "05",
    labelEs: "Contacto",
    labelEn: "Contact",
    icon: Mail,
    accentColor: "#6b3040", // Wax Burgundy
  },
];

export default function BookTabs() {
  const { activeSection, goToSection, closeBook } = useBook();
  const { language } = useLanguage();

  return (
    <>
      {/* DESKTOP RIGHT-EDGE BOOKMARK TABS */}
      <nav
        aria-label="Secciones del portfolio"
        className="hidden md:flex flex-col justify-center gap-2.5 py-6 z-30 -ml-1 select-none shrink-0"
      >
        {/* Cover Tab: Close Book (Desktop) */}
        <motion.button
          onClick={closeBook}
          whileHover={{ x: 5 }}
          whileTap={{ scale: 0.97 }}
          title={language === "es" ? "Cerrar libro y volver a la portada" : "Close book to cover"}
          className="group relative flex flex-col items-center justify-center w-20 lg:w-22 py-2 px-2 rounded-r-lg border-y border-r border-[#8c2d2d]/50 bg-[#25150d] hover:bg-[#381e13] text-[#e8dcc4] shadow-[4px_3px_10px_rgba(0,0,0,0.45)] transition-all cursor-pointer mb-1"
        >
          <span className="absolute left-0 inset-y-1.5 w-1.5 rounded-r-xs bg-[#8c2d2d]" />
          <div className="p-1 rounded-full text-[#c89d45] group-hover:scale-110 transition-transform">
            <BookMarked className="w-3.5 h-3.5" />
          </div>
          <span className="font-handwriting text-sm leading-tight text-center text-[#e2be6b]">
            {language === "es" ? "Portada" : "Cover"}
          </span>
        </motion.button>

        {TABS.map((tab) => {
          const Icon = tab.icon;
          const isActive =
            tab.id === "projects"
              ? activeSection === "projects" || activeSection === "projects-2"
              : activeSection === tab.id;
          const label = language === "es" ? tab.labelEs : tab.labelEn;

          return (
            <motion.button
              key={tab.id}
              onClick={() => goToSection(tab.id)}
              whileHover={{ x: 5 }}
              whileTap={{ scale: 0.97 }}
              className={`group relative flex flex-col items-center justify-center w-20 lg:w-22 py-3 px-2 rounded-r-lg border-y border-r transition-all cursor-pointer ${
                isActive
                  ? "bg-[#e8dcc4] border-[#8c6d46] text-[#25160e] shadow-[6px_4px_14px_rgba(0,0,0,0.5)] translate-x-1.5 z-30"
                  : "bg-[#cdb894] hover:bg-[#dac8a7] border-[#785c38]/70 text-[#4a3325] shadow-[4px_3px_10px_rgba(0,0,0,0.4)] opacity-90 hover:opacity-100"
              }`}
              style={{
                backgroundImage:
                  "radial-gradient(circle at 80% 50%, rgba(139, 105, 65, 0.2), transparent 70%)",
              }}
            >
              {/* Left color band marker */}
              <span
                className="absolute left-0 inset-y-1.5 w-1.5 rounded-r-xs transition-all"
                style={{
                  backgroundColor: tab.accentColor,
                  opacity: isActive ? 1 : 0.65,
                }}
              />

              {/* Number stamp */}
              <span className="font-typewriter text-[10px] tracking-widest text-[#6e523e] leading-none mb-1">
                #{tab.num}
              </span>

              {/* Icon */}
              <div
                className={`p-1.5 rounded-full border transition-colors mb-1 ${
                  isActive
                    ? "bg-[#4a3325]/12 border-[#4a3325]/40 text-[#25160e]"
                    : "bg-transparent border-transparent text-[#5a4232] group-hover:text-[#25160e]"
                }`}
              >
                <Icon className="w-4 h-4" />
              </div>

              {/* Handwritten / Serif Label */}
              <span
                className={`font-handwriting text-base lg:text-lg leading-tight text-center ${
                  isActive ? "font-bold text-[#25160e]" : "text-[#4a3325]"
                }`}
              >
                {label}
              </span>
            </motion.button>
          );
        })}

        {/* Language Stickers stacked vertically below tabs */}
        <div className="pt-2.5 mt-1 border-t border-[#8c6d46]/35 flex flex-col items-center">
          <LanguageStamp orientation="vertical" />
        </div>
      </nav>

      {/* MOBILE BOTTOM TABS */}
      <nav
        aria-label="Secciones del portfolio (móvil)"
        className="flex md:hidden items-center justify-around bg-[#2a190f] border-t border-[#8c6d46]/40 px-2 py-1.5 z-40 shrink-0"
      >
        {/* Cover Tab: Close Book (Mobile) */}
        <button
          onClick={closeBook}
          className="flex flex-col items-center gap-0.5 px-2 py-1 rounded-md text-[#cdb894]/75 hover:text-[#e8dcc4] transition-all cursor-pointer"
        >
          <BookMarked className="w-4 h-4 text-[#c89d45]" />
          <span className="font-serif-book text-[10.5px] leading-none">
            {language === "es" ? "Portada" : "Cover"}
          </span>
        </button>

        {TABS.map((tab) => {
          const Icon = tab.icon;
          const isActive =
            tab.id === "projects"
              ? activeSection === "projects" || activeSection === "projects-2"
              : activeSection === tab.id;
          const label = language === "es" ? tab.labelEs : tab.labelEn;

          return (
            <button
              key={tab.id}
              onClick={() => goToSection(tab.id)}
              className={`flex flex-col items-center gap-0.5 px-2.5 py-1.5 rounded-md transition-all ${
                isActive
                  ? "bg-[#e8dcc4] text-[#25160e] shadow-sm font-semibold"
                  : "text-[#cdb894]/75 hover:text-[#e8dcc4]"
              }`}
            >
              <Icon className="w-4 h-4" />
              <span className="font-serif-book text-[11px] leading-none">
                {label}
              </span>
            </button>
          );
        })}
      </nav>
    </>
  );
}
