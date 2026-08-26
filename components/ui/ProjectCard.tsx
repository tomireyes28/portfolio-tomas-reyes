"use client";

import Image from "next/image";
import { ExternalLink, Github, ArrowRight, Sparkles } from "lucide-react";
import type { Project } from "@/types/Project";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import SpotlightCard from "./SpotlightCard";

interface ProjectCardProps {
  project: Project;
  onDetailsClick: (project: Project) => void;
}

export default function ProjectCard({ project, onDetailsClick }: ProjectCardProps) {
  const { t, language } = useLanguage();

  const title = typeof project.title === "string" ? project.title : project.title[language];
  const description =
    typeof project.shortDescription === "string"
      ? project.shortDescription
      : project.shortDescription[language];

  return (
    <SpotlightCard
      className="group flex flex-col justify-between h-full transition-all duration-300 hover:shadow-[0_10px_30px_rgba(56,189,248,0.1)]"
    >
      {/* Project Image & Overlay */}
      <div
        className="relative h-52 w-full overflow-hidden bg-slate-950/80 cursor-pointer"
        onClick={() => onDetailsClick(project)}
      >
        <Image
          src={project.image}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent opacity-80" />

        {/* Featured Badge */}
        {project.featured && (
          <div className="absolute top-3 left-3 inline-flex items-center gap-1 rounded-full border border-sky-400/40 bg-slate-950/80 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-sky-300 backdrop-blur-md">
            <Sparkles size={11} className="text-sky-400" />
            <span>Featured</span>
          </div>
        )}

        {/* Category Pill */}
        {project.category && (
          <div className="absolute top-3 right-3 rounded-full border border-slate-700/80 bg-slate-900/80 px-2.5 py-1 text-[10px] font-mono text-slate-300 backdrop-blur-md uppercase">
            {project.category}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col justify-between p-6">
        <div className="space-y-3">
          <h3
            onClick={() => onDetailsClick(project)}
            className="text-xl font-bold text-white transition-colors duration-200 hover:text-sky-300 cursor-pointer line-clamp-1"
          >
            {title}
          </h3>

          <p className="text-sm text-slate-400 leading-relaxed line-clamp-3">
            {description}
          </p>
        </div>

        {/* Tech Stack Pills */}
        <div className="mt-5 space-y-4 pt-4 border-t border-slate-800/80">
          <div className="flex flex-wrap gap-1.5">
            {project.techStack.slice(0, 4).map((tech) => (
              <span
                key={tech}
                className="rounded-md border border-slate-800 bg-slate-950/80 px-2 py-0.5 text-[11px] font-mono font-medium text-slate-300"
              >
                {tech}
              </span>
            ))}
            {project.techStack.length > 4 && (
              <button
                onClick={() => onDetailsClick(project)}
                className="rounded-md border border-sky-500/20 bg-sky-500/10 px-2 py-0.5 text-[11px] font-mono font-semibold text-sky-400 hover:bg-sky-500/20 transition cursor-pointer"
              >
                +{project.techStack.length - 4} {t.projects.card.more}
              </button>
            )}
          </div>

          {/* Action Links */}
          <div className="flex items-center justify-between gap-2 pt-2">
            <button
              onClick={() => onDetailsClick(project)}
              className="inline-flex items-center gap-1 text-xs font-semibold text-sky-400 hover:text-sky-300 transition cursor-pointer"
            >
              <span>{t.projects.card.details}</span>
              <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
            </button>

            <div className="flex items-center gap-2">
              {project.repoUrl && (
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Código en GitHub"
                  className="flex h-8 w-8 items-center justify-center rounded-lg border border-slate-800 bg-slate-900/80 text-slate-300 hover:border-sky-500/50 hover:text-sky-400 transition shadow-sm cursor-pointer"
                >
                  <Github size={15} />
                </a>
              )}

              {project.demoUrl && (
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Demo en vivo"
                  className="inline-flex items-center gap-1.5 rounded-lg border border-sky-500/30 bg-sky-500/10 px-3 py-1.5 text-xs font-bold text-sky-300 hover:bg-sky-500/20 hover:border-sky-400 transition cursor-pointer"
                >
                  <span>Demo</span>
                  <ExternalLink size={13} />
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </SpotlightCard>
  );
}