"use client";

import React from "react";
import { ScrollText } from "lucide-react";
import { projects } from "@/src/projects";
import { useLanguage } from "@/context/LanguageContext";
import Polaroid from "@/components/ui/Polaroid";

export type ProjectCategoryFilter = "all" | "fullstack" | "frontend" | "tools";

interface ProjectsSpreadProps {
  spreadIndex?: number;
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
    <div className="projects-page flex flex-col h-full min-h-0 gap-2">
      {/* Editorial Header */}
      {spreadIndex === 0 ? (
        <div className="border-b border-[#8c6d46]/25 pb-2">
          <h2 className="font-serif-book text-xl font-bold text-[#25160e]">
            {t.projects.title}
          </h2>
        </div>
      ) : (
        <div className="border-b border-[#8c6d46]/25 pb-2">
          <h2 className="font-serif-book text-xl font-bold text-[#25160e]">
            {isEs ? "Proyectos Seleccionados" : "Selected Projects"}
          </h2>
        </div>
      )}

      {/* Left 2 Large Polaroids (Stacked vertically) */}
      <div className="projects-page-grid">
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
    <div className="projects-page flex flex-col h-full min-h-0">
      <div className="shrink-0 border-b border-[#8c6d46]/25 pb-2 mb-2">
        <h2 className="font-serif-book text-xl font-bold text-[#25160e]">
          {isEs ? "Selección" : "Selection"} {spreadIndex + 1} / 2
        </h2>
      </div>
      {/* Right 2 Large Polaroids (Stacked vertically) */}
      <div className="projects-page-grid">
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
