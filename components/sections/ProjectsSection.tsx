"use client";

import { useState, useMemo } from "react";
import { projects } from "@/src/projects";
import ProjectCard from "@/components/ui/ProjectCard";
import ProjectDetailModal from "@/components/ui/ProjectDetailModal";
import { Project } from "@/types/Project";
import { useLanguage } from "@/context/LanguageContext";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Filter } from "lucide-react";

type FilterType = "all" | "fullstack" | "frontend" | "tools";

export default function ProjectsSection() {
  const { t, language } = useLanguage();
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeFilter, setActiveFilter] = useState<FilterType>("all");

  const filterTabs: { id: FilterType; label: string }[] = [
    { id: "all", label: t.projects.filterAll },
    { id: "fullstack", label: t.projects.filterFullstack },
    { id: "frontend", label: t.projects.filterFrontend },
    { id: "tools", label: t.projects.filterTools },
  ];

  const filteredProjects = useMemo(() => {
    if (activeFilter === "all") return projects;
    return projects.filter((p) => p.category === activeFilter);
  }, [activeFilter]);

  return (
    <section id="projects" className="relative py-14 md:py-20 px-4">
      <div className="mx-auto max-w-6xl space-y-10">
        {/* Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-500/30 bg-sky-500/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-sky-400">
            <Sparkles size={13} />
            <span>{t.projects.badge}</span>
          </div>

          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
            {t.projects.title}
          </h2>

          <p className="text-base text-slate-400 sm:text-lg leading-relaxed">
            {t.projects.description}
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          <div className="flex flex-wrap items-center gap-1.5 rounded-2xl border border-slate-800 bg-slate-950/60 p-1.5 backdrop-blur-md">
            {filterTabs.map((tab) => {
              const isActive = activeFilter === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveFilter(tab.id)}
                  className={`relative rounded-xl px-4 py-2 text-xs md:text-sm font-medium transition-colors cursor-pointer ${
                    isActive
                      ? "text-slate-950 font-bold"
                      : "text-slate-400 hover:text-slate-200"
                  }`}
                >
                  {tab.label}
                  {isActive && (
                    <motion.div
                      layoutId="active-filter-pill"
                      className="absolute inset-0 -z-10 rounded-xl bg-gradient-to-r from-sky-400 to-blue-500 shadow-md shadow-sky-500/20"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="h-full"
              >
                <ProjectCard
                  project={project}
                  onDetailsClick={(proj) => setSelectedProject(proj)}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Detail Modal */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}