"use client";

import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, ScrollText, Sparkles } from "lucide-react";
import { Project } from "@/types/Project";
import { useLanguage } from "@/context/LanguageContext";
import { useBook } from "@/context/BookContext";

interface PolaroidProps {
  project: Project;
  index: number;
}

export default function Polaroid({ project, index }: PolaroidProps) {
  const { language, t } = useLanguage();
  const { setSelectedProject } = useBook();

  const title =
    typeof project.title === "string"
      ? project.title
      : project.title[language];
  const shortDesc =
    typeof project.shortDescription === "string"
      ? project.shortDescription
      : project.shortDescription[language];

  // Alternate slight tilt and pushpin color for authentic explorer journal feel
  const tiltClass = index % 2 === 0 ? "-rotate-1" : "rotate-1";
  const pinColor =
    index % 3 === 0
      ? "bg-[#b8860b] border-[#5a3e08]" // Brass
      : index % 3 === 1
      ? "bg-[#8c2d2d] border-[#4a1515]" // Crimson
      : "bg-[#2b583c] border-[#163320]"; // Forest

  return (
    <motion.div
      whileHover={{ scale: 1.025, rotate: 0, y: -3 }}
      transition={{ type: "spring", stiffness: 320, damping: 22 }}
      onClick={() => setSelectedProject(project)}
      className={`group relative polaroid-card p-2.5 pb-3 rounded-xs border border-[#bfa984] cursor-pointer flex flex-col justify-between ${tiltClass}`}
    >
      {/* Top Pushpin */}
      <div
        className={`w-3.5 h-3.5 rounded-full ${pinColor} border mx-auto -mt-4 mb-1.5 shadow-[0_2px_4px_rgba(0,0,0,0.45)] relative z-20`}
      >
        <div className="w-1 h-1 rounded-full bg-white/50 ml-0.5 mt-0.5" />
      </div>

      {/* Screenshot Frame */}
      <div>
        <div className="relative aspect-[16/9.5] w-full overflow-hidden bg-[#25160e] rounded-xs border border-[#8c6d46]/40">
          <img
            src={project.image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />

          {/* Featured Stamp Badge */}
          {project.featured && (
            <span className="absolute top-1.5 left-1.5 inline-flex items-center gap-1 px-1.5 py-0.5 rounded-xs bg-[#25160e]/85 text-[#e2be6b] border border-[#c89d45]/50 font-typewriter text-[9px] uppercase tracking-wider">
              <Sparkles className="w-2.5 h-2.5" />
              ★
            </span>
          )}

          {/* Hover Overlay Hint */}
          <div className="absolute inset-0 bg-[#25160e]/55 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-xs bg-[#e8dcc4] text-[#25160e] font-typewriter text-[10px] font-bold uppercase tracking-wider shadow-md">
              <ScrollText className="w-3 h-3 text-[#8c2d2d]" />
              {t.projects.card.details}
            </span>
          </div>
        </div>

        {/* Handwritten Caption Title */}
        <h3 className="font-handwriting text-lg font-bold text-[#25160e] mt-1.5 leading-tight line-clamp-1 group-hover:text-[#8c2d2d] transition-colors">
          {title}
        </h3>

        {/* Short Excerpt */}
        <p className="font-serif-book text-[11px] text-[#4a3325] line-clamp-2 leading-snug mt-0.5">
          {shortDesc}
        </p>
      </div>

      {/* Bottom Tech Tags & Quick Action Links */}
      <div className="mt-2 pt-1.5 border-t border-[#8c6d46]/25 flex items-center justify-between gap-1">
        <div className="flex flex-wrap gap-1 overflow-hidden">
          {project.techStack.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="font-typewriter text-[9px] px-1.5 py-0.5 bg-[#d9c8a9]/80 text-[#25160e] rounded-xs border border-[#8c6d46]/30"
            >
              {tech}
            </span>
          ))}
          {project.techStack.length > 3 && (
            <span className="font-typewriter text-[9px] px-1 py-0.5 text-[#6e523e] font-bold">
              +{project.techStack.length - 3}
            </span>
          )}
        </div>

        <div
          className="flex items-center gap-1 shrink-0"
          onClick={(e) => e.stopPropagation()}
        >
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              title={t.projects.card.code}
              className="p-1 rounded-xs text-[#4a3325] hover:text-[#25160e] hover:bg-[#d9c8a9] transition-colors"
            >
              <Github className="w-3.5 h-3.5" />
            </a>
          )}
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              title={t.projects.card.demo}
              className="p-1 rounded-xs text-[#2b583c] hover:text-[#193824] hover:bg-[#2b583c]/15 transition-colors"
            >
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
