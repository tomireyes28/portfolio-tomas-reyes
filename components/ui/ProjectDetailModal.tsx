"use client";

import { useEffect } from "react";
import { X, ExternalLink, Github, Layers, Code, CheckCircle } from "lucide-react";
import Image from "next/image";
import type { Project } from "@/types/Project";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectDetailModal({ project, onClose }: ProjectDetailModalProps) {
  const { t, language } = useLanguage();

  // Close on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    if (project) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [project, onClose]);

  if (!project) return null;

  const title = typeof project.title === "string" ? project.title : project.title[language];
  const description =
    typeof project.shortDescription === "string"
      ? project.shortDescription
      : project.shortDescription[language];

  return (
    <AnimatePresence>
      {project && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-950/80 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", duration: 0.4, bounce: 0.1 }}
            className="relative z-10 flex max-h-[90vh] w-full max-w-4xl flex-col overflow-hidden rounded-3xl border border-slate-800/90 bg-slate-900/95 shadow-2xl shadow-black/80 backdrop-blur-2xl"
          >
            {/* Header bar */}
            <div className="flex items-center justify-between border-b border-slate-800/80 px-6 py-4">
              <div className="flex items-center gap-2">
                <span className="flex h-3 w-3 rounded-full bg-red-500/80" />
                <span className="flex h-3 w-3 rounded-full bg-yellow-500/80" />
                <span className="flex h-3 w-3 rounded-full bg-emerald-500/80" />
                <span className="ml-2 font-mono text-xs text-slate-400">
                  {project.id}.tsx
                </span>
              </div>

              <button
                onClick={onClose}
                aria-label="Cerrar modal"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-slate-800 bg-slate-950 text-slate-400 hover:border-slate-700 hover:text-white transition cursor-pointer"
              >
                <X size={18} />
              </button>
            </div>

            {/* Scrollable Content Body */}
            <div className="overflow-y-auto p-6 md:p-8 space-y-8">
              {/* Media Preview */}
              <div className="relative h-64 sm:h-80 md:h-96 w-full overflow-hidden rounded-2xl border border-slate-800 bg-slate-950">
                <Image
                  src={project.image}
                  alt={title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 896px"
                  className="object-cover object-top"
                />
              </div>

              {/* Title & Description */}
              <div className="space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
                    {title}
                  </h2>

                  {project.category && (
                    <span className="rounded-full border border-sky-500/30 bg-sky-500/10 px-3 py-1 font-mono text-xs font-semibold text-sky-400 uppercase">
                      {project.category}
                    </span>
                  )}
                </div>

                <div className="rounded-xl border border-slate-800/80 bg-slate-950/60 p-5">
                  <h3 className="text-sm font-semibold text-sky-400 mb-2 flex items-center gap-2">
                    <Layers size={16} />
                    <span>{t.projects.modal.detailsTitle}</span>
                  </h3>
                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                    {description}
                  </p>
                </div>
              </div>

              {/* Tech Stack Breakdown */}
              <div className="space-y-3">
                <h4 className="text-sm font-semibold text-slate-200 flex items-center gap-2">
                  <Code size={16} className="text-sky-400" />
                  <span>{t.projects.modal.stackTitle}</span>
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-lg border border-slate-800 bg-slate-950 px-3 py-1.5 font-mono text-xs text-slate-200 shadow-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Footer Actions */}
              <div className="flex flex-wrap items-center justify-end gap-3 pt-4 border-t border-slate-800/80">
                {project.repoUrl && (
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-800 px-5 py-2.5 text-xs font-semibold text-slate-200 hover:bg-slate-700 hover:text-white transition shadow-sm cursor-pointer"
                  >
                    <Github size={16} />
                    <span>{t.projects.modal.code}</span>
                  </a>
                )}

                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 px-6 py-2.5 text-xs font-bold text-slate-950 shadow-lg shadow-sky-500/25 hover:opacity-95 hover:scale-[1.02] transition cursor-pointer"
                  >
                    <span>{t.projects.modal.demo}</span>
                    <ExternalLink size={16} />
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}