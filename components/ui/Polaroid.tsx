"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, ExternalLink, Github } from "lucide-react";
import { Project } from "@/types/Project";
import { useLanguage } from "@/context/LanguageContext";
import { useBook } from "@/context/BookContext";

export default function Polaroid({ project, index, layout = "book" }: {
  project: Project; index: number; layout?: "book" | "flow";
}) {
  const { language, t } = useLanguage();
  const { setSelectedProject } = useBook();
  const title = typeof project.title === "string" ? project.title : project.title[language];
  const subtitle = typeof project.subtitle === "string" ? project.subtitle : project.subtitle?.[language];
  const description = typeof project.shortDescription === "string" ? project.shortDescription : project.shortDescription[language];
  return (
    <motion.article
      whileHover={{ y: -2 }}
      transition={{ duration: 0.2 }}
      data-project={project.id}
      className={`project-card polaroid-card ${layout === "book" ? "project-polaroid" : "project-card-flow"}`}
    >
      <button type="button" className="project-preview" onClick={() => setSelectedProject(project)}
        aria-label={`${t.projects.card.details}: ${title}`} data-project-id={project.id} aria-haspopup="dialog">
        <span className="project-preview-frame">
          <img src={project.image} alt={`${t.projects.modal.screenshot} ${title}`} loading="lazy" className="project-thumbnail" />
        </span>
      </button>
      <div className="project-card-caption">
        <p className="project-card-number" aria-hidden="true">{String(index + 1).padStart(2, "0")}</p>
        <h3 className="font-serif-book">{title}</h3>
        {subtitle && <p className="project-card-subtitle">{subtitle}</p>}
        {layout === "flow" && <p className="project-card-description">{description}</p>}
      </div>
      <div className="project-card-actions">
        <button type="button" onClick={() => setSelectedProject(project)} aria-haspopup="dialog"
          data-project-id={project.id} aria-label={`${t.projects.card.details}: ${title}`} className="project-case-link">
          {t.projects.card.details}<ArrowUpRight size={13} aria-hidden="true" />
        </button>
        <div className="project-external-links">
          {project.demoUrl && <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" aria-label={`${t.projects.card.demo}: ${title}`}><ExternalLink size={12} aria-hidden="true" />Demo</a>}
          {project.repoUrl && <a href={project.repoUrl} target="_blank" rel="noopener noreferrer" aria-label={`${t.projects.card.code}: ${title}`}><Github size={12} aria-hidden="true" />{t.projects.card.code}</a>}
        </div>
      </div>
    </motion.article>
  );
}
