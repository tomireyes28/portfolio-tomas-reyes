"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, X, Layers, Code2, Sparkles } from "lucide-react";
import { useBook } from "@/context/BookContext";
import { useLanguage } from "@/context/LanguageContext";
import TechBadge from "@/components/ui/TechBadge";

export default function ScrollDetail() {
  const { selectedProject, setSelectedProject } = useBook();
  const { language, t } = useLanguage();

  const isEs = language === "es";

  return (
    <AnimatePresence>
      {selectedProject && (
        <motion.div
          key="scroll-backdrop"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedProject(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-xs p-3 sm:p-6 select-text"
        >
          {/* Unrolling Parchment Scroll Container */}
          <motion.div
            initial={{ scaleY: 0.08, opacity: 0, y: -30 }}
            animate={{
              scaleY: 1,
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.48,
                ease: [0.22, 1, 0.36, 1],
              },
            }}
            exit={{
              scaleY: 0.08,
              opacity: 0,
              y: -20,
              transition: { duration: 0.3, ease: "easeIn" },
            }}
            style={{ transformOrigin: "top center" }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-2xl max-h-[88vh] flex flex-col items-center"
          >
            {/* TOP WOODEN & BRASS SCROLL ROLLER */}
            <div className="relative z-20 w-[104%] h-5 rounded-full flex items-center justify-between shadow-[0_6px_16px_rgba(0,0,0,0.75)] shrink-0"
              style={{
                background:
                  "linear-gradient(180deg, #5e3a22 0%, #3b2212 55%, #241309 100%)",
                border: "1px solid #c89d45",
              }}
            >
              {/* Left & Right Brass End Caps */}
              <div className="w-6 h-6 -ml-2 rounded-sm bg-gradient-to-b from-[#e2be6b] via-[#b8860b] to-[#6e4e08] border border-[#3b2212] shadow-md" />
              <div className="w-24 h-1 rounded-full bg-[#c89d45]/40" />
              <div className="w-6 h-6 -mr-2 rounded-sm bg-gradient-to-b from-[#e2be6b] via-[#b8860b] to-[#6e4e08] border border-[#3b2212] shadow-md" />
            </div>

            {/* PARCHMENT BODY */}
            <div
              className="w-full overflow-y-auto book-scroll px-6 sm:px-9 py-6 border-x-2 border-[#8c6d46] shadow-[0_25px_60px_rgba(0,0,0,0.85),inset_0_12px_24px_rgba(45,26,12,0.28),inset_0_-12px_24px_rgba(45,26,12,0.28)]"
              style={{
                backgroundColor: "#e8dcc4",
                backgroundImage:
                  "radial-gradient(ellipse at center, rgba(255,250,238,0.4) 30%, rgba(185,156,114,0.4) 95%)",
              }}
            >
              {/* Top Title & Close Button */}
              <div className="flex items-start justify-between gap-4 border-b border-[#8c6d46]/35 pb-2.5 mb-4">
                <h2 className="font-serif-book text-xl sm:text-2xl font-bold text-[#25160e] leading-snug">
                  {typeof selectedProject.title === "string"
                    ? selectedProject.title
                    : selectedProject.title[language]}
                </h2>

                <button
                  onClick={() => setSelectedProject(null)}
                  className="w-8 h-8 rounded-full bg-[#3d2416] hover:bg-[#882b2b] text-[#f5ebd6] border border-[#8c6d46]/70 shadow-md flex items-center justify-center transition-all hover:scale-105 active:scale-95 cursor-pointer shrink-0"
                  title={t.projects.modal.close}
                  aria-label={t.projects.modal.close}
                >
                  <X className="w-4 h-4 stroke-[2.5]" />
                </button>
              </div>

              {/* Framed Archival Screenshot */}
              <div className="relative polaroid-card p-2.5 pb-4 rounded-xs border border-[#bfa984] mb-5">
                <div className="washi-tape absolute -top-2.5 left-8 w-20 h-5 -rotate-2" />
                <div className="washi-tape absolute -top-2.5 right-8 w-20 h-5 rotate-2" />
                <div className="aspect-video w-full overflow-hidden rounded-xs border border-[#8c6d46]/40 bg-[#1a120b]">
                  <img
                    src={selectedProject.image}
                    alt={
                      typeof selectedProject.title === "string"
                        ? selectedProject.title
                        : selectedProject.title[language]
                    }
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Architecture & Technical Description */}
              <div className="mb-5 bg-[#f5ebd6]/85 border border-[#8c6d46]/45 p-4 rounded-xs">
                <div className="flex items-center gap-2 font-typewriter text-xs font-bold uppercase tracking-wider text-[#4a3325] mb-2">
                  <Layers className="w-4 h-4 text-[#8c2d2d]" />
                  <span>{t.projects.modal.detailsTitle}</span>
                </div>
                <p className="font-serif-book text-sm text-[#25160e] leading-relaxed">
                  {typeof selectedProject.shortDescription === "string"
                    ? selectedProject.shortDescription
                    : selectedProject.shortDescription[language]}
                </p>
                {selectedProject.demoCredentials && (
                  <div className="mt-3 pt-2.5 border-t border-[#8c6d46]/30 flex flex-wrap items-center gap-2 font-typewriter text-xs text-[#5a3e22]">
                    <span className="font-bold text-[#8c2d2d] uppercase text-[11px]">
                      {isEs ? "Acceso de prueba:" : "Test credentials:"}
                    </span>
                    <span className="bg-[#e8dcc4] px-2 py-0.5 rounded-xs border border-[#8c6d46]/40 text-[11px]">
                      <strong>User:</strong> {selectedProject.demoCredentials.user}
                    </span>
                    <span className="bg-[#e8dcc4] px-2 py-0.5 rounded-xs border border-[#8c6d46]/40 text-[11px]">
                      <strong>Pass:</strong> {selectedProject.demoCredentials.pass}
                    </span>
                  </div>
                )}
              </div>

              {/* Complete Tech Stack */}
              <div className="mb-6">
                <div className="flex items-center gap-2 font-typewriter text-xs font-bold uppercase tracking-wider text-[#4a3325] mb-2.5">
                  <Code2 className="w-4 h-4 text-[#2b583c]" />
                  <span>{t.projects.modal.stackTitle}</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.techStack.map((tech) => (
                    <TechBadge key={tech} name={tech} />
                  ))}
                </div>
              </div>

              {/* Action Buttons (Live Demo & Source Code) */}
              <div className="flex flex-wrap items-center justify-between gap-3 pt-3 border-t border-[#8c6d46]/40">
                <div className="flex flex-wrap items-center gap-3">
                  {selectedProject.demoUrl && (
                    <a
                      href={selectedProject.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-[#2b583c] hover:bg-[#1f422c] text-[#f5e8c7] font-typewriter text-xs font-bold uppercase tracking-wider rounded-xs shadow-sm transition-colors"
                    >
                      <ExternalLink className="w-3.5 h-3.5" />
                      <span>{t.projects.modal.demo}</span>
                    </a>
                  )}

                  {selectedProject.repoUrl && (
                    <a
                      href={selectedProject.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 bg-[#f5ebd6] hover:bg-[#d9c8a9] text-[#25160e] border border-[#5a4232] font-typewriter text-xs font-bold uppercase tracking-wider rounded-xs transition-colors"
                    >
                      <Github className="w-3.5 h-3.5" />
                      <span>{t.projects.modal.code}</span>
                    </a>
                  )}
                </div>

                <button
                  onClick={() => setSelectedProject(null)}
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 bg-[#dfd0b5] hover:bg-[#d0be9f] text-[#3d2416] border border-[#8c6d46]/60 rounded-xs font-typewriter text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
                >
                  <X className="w-3.5 h-3.5" />
                  <span>{t.projects.modal.close}</span>
                </button>
              </div>
            </div>

            {/* BOTTOM WOODEN & BRASS SCROLL ROLLER */}
            <div
              className="relative z-20 w-[104%] h-5 rounded-full flex items-center justify-between shadow-[0_10px_25px_rgba(0,0,0,0.85)] shrink-0"
              style={{
                background:
                  "linear-gradient(180deg, #5e3a22 0%, #3b2212 55%, #241309 100%)",
                border: "1px solid #c89d45",
              }}
            >
              <div className="w-6 h-6 -ml-2 rounded-sm bg-gradient-to-b from-[#e2be6b] via-[#b8860b] to-[#6e4e08] border border-[#3b2212] shadow-md" />
              <div className="w-24 h-1 rounded-full bg-[#c89d45]/40" />
              <div className="w-6 h-6 -mr-2 rounded-sm bg-gradient-to-b from-[#e2be6b] via-[#b8860b] to-[#6e4e08] border border-[#3b2212] shadow-md" />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
