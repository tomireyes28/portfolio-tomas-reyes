"use client";

import React from "react";
import { ScrollText } from "lucide-react";
import { projects } from "@/src/projects";
import { useLanguage } from "@/context/LanguageContext";
import Polaroid from "@/components/ui/Polaroid";

export type ProjectCategoryFilter = "all" | "fullstack" | "frontend" | "tools";

interface ProjectsSpreadProps {
  spreadIndex?: number;
  filter?: ProjectCategoryFilter;
  setFilter?: (f: ProjectCategoryFilter) => void;
}

export function getFilteredProjects(filter: ProjectCategoryFilter = "all") {
  if (filter === "all") return projects;
  return projects.filter((p) => p.category === filter);
}

export function ProjectsLeftPage({
  spreadIndex = 0,
}: ProjectsSpreadProps) {
  const { language, t } = useLanguage();
  const isEs = language === "es";

  const displayProjects = projects.slice(0, 8);
  const itemsPerSpread = 4; // 2 on Left Page + 2 on Right Page
  const leftSlice = displayProjects.slice(
    spreadIndex * itemsPerSpread,
    spreadIndex * itemsPerSpread + 2
  );

  return (
    <div className="flex flex-col justify-between h-full space-y-2">
      {/* Editorial Header */}
      {spreadIndex === 0 ? (
        <div className="border-b border-[#8c6d46]/25 pb-2">
          <div className="flex items-center justify-between gap-2">
            <h2 className="font-serif-book text-xl lg:text-2xl font-bold text-[#25160e]">
              {t.projects.title}
            </h2>
            <span className="font-typewriter text-[10px] px-2 py-0.5 bg-[#8c2d2d]/15 text-[#8c2d2d] border border-dashed border-[#8c2d2d] rounded-xs font-bold">
              8 {isEs ? "DESTACADOS" : "FEATURED"}
            </span>
          </div>
        </div>
      ) : (
        <div className="border-b border-[#8c6d46]/25 pb-2">
          <div className="flex items-center justify-between gap-2">
            <h2 className="font-serif-book text-xl lg:text-2xl font-bold text-[#25160e]">
              {isEs ? "Proyectos Seleccionados" : "Selected Projects"}
            </h2>
            <span className="font-typewriter text-[10px] px-2 py-0.5 bg-[#8c2d2d]/15 text-[#8c2d2d] border border-dashed border-[#8c2d2d] rounded-xs font-bold">
              {isEs ? "PLIEGO II" : "SHEET II"}
            </span>
          </div>
        </div>
      )}

      {/* Left 2 Large Polaroids (Stacked vertically) */}
      <div className="flex flex-col gap-3.5 justify-center my-auto">
        {leftSlice.map((project, idx) => (
          <Polaroid
            key={project.id}
            project={project}
            index={spreadIndex * 4 + idx}
          />
        ))}
      </div>
    </div>
  );
}

export function ProjectsRightPage({
  spreadIndex = 0,
}: ProjectsSpreadProps) {
  const { language } = useLanguage();
  const isEs = language === "es";

  const displayProjects = projects.slice(0, 8);
  const itemsPerSpread = 4;
  const rightSlice = displayProjects.slice(
    spreadIndex * itemsPerSpread + 2,
    spreadIndex * itemsPerSpread + 4
  );

  return (
    <div className="flex flex-col justify-center h-full">
      {/* Right 2 Large Polaroids (Stacked vertically) */}
      <div className="flex flex-col gap-3.5 justify-center my-auto">
        {rightSlice.length > 0 ? (
          rightSlice.map((project, idx) => (
            <Polaroid
              key={project.id}
              project={project}
              index={spreadIndex * 4 + 2 + idx}
            />
          ))
        ) : (
          <div className="flex flex-col items-center justify-center p-8 border border-dashed border-[#8c6d46]/50 rounded-xs text-center bg-[#f4ebd9]/40 my-auto">
            <ScrollText className="w-7 h-7 text-[#8c6d46] mb-2" />
            <p className="font-handwriting text-xl text-[#4a3325]">
              {isEs
                ? "Fin de los registros en esta categoría."
                : "End of records in this category."}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
