"use client";

import React from "react";
import { ScrollText, ChevronLeft, ChevronRight } from "lucide-react";
import { projects } from "@/src/projects";
import { useLanguage } from "@/context/LanguageContext";
import Polaroid from "@/components/ui/Polaroid";

export type ProjectCategoryFilter = "all" | "fullstack" | "frontend" | "tools";

interface ProjectsSpreadProps {
  filter: ProjectCategoryFilter;
  setFilter: (f: ProjectCategoryFilter) => void;
  subPage: number;
  setSubPage: React.Dispatch<React.SetStateAction<number>>;
}

export function getFilteredProjects(filter: ProjectCategoryFilter) {
  if (filter === "all") return projects;
  return projects.filter((p) => p.category === filter);
}

export function ProjectsLeftPage({
  filter,
  setFilter,
  subPage,
  setSubPage,
}: ProjectsSpreadProps) {
  const { language, t } = useLanguage();
  const isEs = language === "es";

  const filtered = getFilteredProjects(filter);
  const itemsPerSpread = 4; // 2 on Left Page + 2 on Right Page
  const leftSlice = filtered.slice(
    subPage * itemsPerSpread,
    subPage * itemsPerSpread + 2
  );

  const filterButtons: { id: ProjectCategoryFilter; label: string }[] = [
    { id: "all", label: t.projects.filterAll },
    { id: "fullstack", label: "Full Stack" },
    { id: "frontend", label: "Frontend" },
    { id: "tools", label: "Tools & APIs" },
  ];

  return (
    <div className="flex flex-col justify-between h-full space-y-3">
      {/* Header + Filter Stamps */}
      <div>
        <div className="flex items-center justify-between gap-2">
          <h2 className="font-serif-book text-xl lg:text-2xl font-bold text-[#25160e]">
            {t.projects.title}
          </h2>
          <span className="font-typewriter text-[10px] px-2 py-0.5 bg-[#8c2d2d]/15 text-[#8c2d2d] border border-dashed border-[#8c2d2d] rounded-xs font-bold">
            {filtered.length} {isEs ? "REGISTROS" : "RECORDS"}
          </span>
        </div>

        <p className="font-serif-book text-xs text-[#4a3325] mt-0.5 leading-snug">
          {isEs
            ? "Tocá cualquier polaroid para desenrollar el pergamino con la arquitectura y demo."
            : "Click any polaroid to unroll its technical scroll with architecture and live demo."}
        </p>

        {/* Category Filter Buttons */}
        <div className="flex flex-wrap gap-1.5 mt-2.5">
          {filterButtons.map((btn) => {
            const active = filter === btn.id;
            return (
              <button
                key={btn.id}
                onClick={() => {
                  setFilter(btn.id);
                  setSubPage(0);
                }}
                className={`px-2.5 py-1 rounded-xs font-typewriter text-[10px] uppercase tracking-wider transition-all cursor-pointer border ${
                  active
                    ? "bg-[#25160e] text-[#f5e8c7] border-[#25160e] shadow-2xs font-bold"
                    : "bg-[#f4ebd9]/80 text-[#4a3325] border-[#8c6d46]/50 hover:bg-[#d9c8a9]"
                }`}
              >
                {btn.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Left 2 Polaroids */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2 my-auto">
        {leftSlice.map((project, idx) => (
          <Polaroid
            key={project.id}
            project={project}
            index={subPage * 4 + idx}
          />
        ))}
      </div>
    </div>
  );
}

export function ProjectsRightPage({
  filter,
  subPage,
  setSubPage,
}: ProjectsSpreadProps) {
  const { language } = useLanguage();
  const isEs = language === "es";

  const filtered = getFilteredProjects(filter);
  const itemsPerSpread = 4;
  const totalSubPages = Math.max(1, Math.ceil(filtered.length / itemsPerSpread));
  const rightSlice = filtered.slice(
    subPage * itemsPerSpread + 2,
    subPage * itemsPerSpread + 4
  );

  return (
    <div className="flex flex-col justify-between h-full space-y-3">
      {/* Right 2 Polaroids */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2 my-auto">
        {rightSlice.length > 0 ? (
          rightSlice.map((project, idx) => (
            <Polaroid
              key={project.id}
              project={project}
              index={subPage * 4 + 2 + idx}
            />
          ))
        ) : (
          <div className="col-span-2 flex flex-col items-center justify-center p-8 border border-dashed border-[#8c6d46]/50 rounded-xs text-center bg-[#f4ebd9]/40">
            <ScrollText className="w-7 h-7 text-[#8c6d46] mb-2" />
            <p className="font-handwriting text-xl text-[#4a3325]">
              {isEs
                ? "Fin de los registros en esta categoría."
                : "End of records in this category."}
            </p>
          </div>
        )}
      </div>

      {/* Sub-Pagination Bar for exploring all 12 Projects */}
      <div className="bg-[#f4ebd9]/90 border border-[#8c6d46]/50 rounded-xs px-3.5 py-2.5 flex items-center justify-between gap-2 shadow-2xs">
        <div className="flex items-center gap-1.5 font-typewriter text-[11px] text-[#4a3325]">
          <ScrollText className="w-3.5 h-3.5 text-[#8c2d2d]" />
          <span>
            {isEs ? "Pliego de Proyectos" : "Project Sheet"}{" "}
            <strong className="text-[#25160e]">
              {subPage + 1} / {totalSubPages}
            </strong>
          </span>
        </div>

        <div className="flex items-center gap-1.5">
          <button
            onClick={() => setSubPage((p) => Math.max(0, p - 1))}
            disabled={subPage === 0}
            className="p-1 rounded-xs border border-[#8c6d46]/50 bg-[#e8dcc4] hover:bg-[#d9c8a9] disabled:opacity-35 text-[#25160e] cursor-pointer disabled:cursor-not-allowed transition-colors"
            title={isEs ? "Proyectos anteriores" : "Previous projects"}
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          {Array.from({ length: totalSubPages }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setSubPage(idx)}
              className={`w-6 h-6 rounded-xs font-typewriter text-xs font-bold transition-colors cursor-pointer ${
                subPage === idx
                  ? "bg-[#8c2d2d] text-[#f5e8c7]"
                  : "bg-[#e8dcc4] text-[#4a3325] hover:bg-[#d9c8a9] border border-[#8c6d46]/40"
              }`}
            >
              {idx + 1}
            </button>
          ))}

          <button
            onClick={() =>
              setSubPage((p) => Math.min(totalSubPages - 1, p + 1))
            }
            disabled={subPage >= totalSubPages - 1}
            className="p-1 rounded-xs border border-[#8c6d46]/50 bg-[#e8dcc4] hover:bg-[#d9c8a9] disabled:opacity-35 text-[#25160e] cursor-pointer disabled:cursor-not-allowed transition-colors"
            title={isEs ? "Más proyectos" : "More projects"}
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
