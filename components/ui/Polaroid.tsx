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
      whileHover={{ scale: 1.02, rotate: 0, y: -2 }}
      transition={{ type: "spring", stiffness: 320, damping: 22 }}
      onClick={() => setSelectedProject(project)}
      className={`group relative polaroid-card p-2.5 pb-2.5 rounded-xs border border-[#bfa984] cursor-pointer flex flex-col justify-between w-full max-w-[340px] mx-auto shadow-md ${tiltClass}`}
    >
      {/* Top Pushpin */}
      <div
        className={`w-3.5 h-3.5 rounded-full ${pinColor} border mx-auto -mt-4 mb-1.5 shadow-xs relative z-20`}
      >
        <div className="w-0.5 h-0.5 rounded-full bg-white/70 ml-0.5 mt-0.5" />
      </div>

      {/* Screenshot Frame */}
      <div>
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-[#25160e] rounded-xs border border-[#8c6d46]/40 shadow-inner">
          <img
            src={project.image}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />

          {/* Featured Stamp Badge */}
          {project.featured && (
            <span className="absolute top-1.5 left-1.5 inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded-xs bg-[#25160e]/85 text-[#e2be6b] border border-[#c89d45]/50 font-typewriter text-[8.5px] uppercase tracking-wider">
              <Sparkles className="w-2.5 h-2.5" />
              ★
            </span>
          )}

          {/* Hover Overlay Hint */}
          <div className="absolute inset-0 bg-[#25160e]/35 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-xs bg-[#e8dcc4] text-[#25160e] font-typewriter text-[10px] font-bold uppercase tracking-wider shadow-sm">
              <ScrollText className="w-3 h-3 text-[#8c2d2d]" />
              {t.projects.card.details}
            </span>
          </div>
        </div>

        {/* Caption Title - Clean handwritten label */}
        <h3 className="font-handwriting text-[17px] sm:text-xl font-bold text-[#25160e] mt-2 leading-snug group-hover:text-[#8c2d2d] transition-colors line-clamp-1">
          {title}
        </h3>
      </div>

      {/* Action Links & Details Trigger */}
      <div className="mt-2 pt-1.5 border-t border-[#8c6d46]/25 flex items-center justify-between gap-1">
        <div
          className="flex items-center gap-1.5 shrink-0"
          onClick={(e) => e.stopPropagation()}
        >
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              title={t.projects.card.demo}
              className="inline-flex items-center gap-1 px-2 py-0.5 rounded-xs bg-[#265538]/10 hover:bg-[#265538] text-[#265538] hover:text-[#f5ebd6] border border-[#265538]/30 font-typewriter text-[9.5px] font-bold tracking-wider transition-colors"
            >
              <ExternalLink className="w-2.5 h-2.5" />
              <span>Demo</span>
            </a>
          )}
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              title={t.projects.card.code}
              className="inline-flex items-center gap-1 px-2 py-0.5 rounded-xs bg-[#452f20]/10 hover:bg-[#452f20] text-[#452f20] hover:text-[#f5ebd6] border border-[#452f20]/30 font-typewriter text-[9.5px] font-bold tracking-wider transition-colors"
            >
              <Github className="w-2.5 h-2.5" />
              <span>Código</span>
            </a>
          )}
        </div>

        <button
          onClick={() => setSelectedProject(project)}
          className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-xs bg-[#882b2b]/10 hover:bg-[#882b2b] text-[#882b2b] hover:text-[#f5ebd6] border border-[#882b2b]/35 font-typewriter text-[9.5px] font-bold tracking-wider transition-colors cursor-pointer shrink-0"
        >
          <ScrollText className="w-2.5 h-2.5" />
          <span>+ Info</span>
        </button>
      </div>
    </motion.div>
  );
}
