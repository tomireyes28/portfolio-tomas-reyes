"use client";

import Image from "next/image";
import React, { useLayoutEffect, useRef } from "react";
import { Project } from "@/types/Project";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ExternalLink, Github, X } from "lucide-react";
import { useBook } from "@/context/BookContext";
import { useLanguage } from "@/context/LanguageContext";
import TechBadge from "@/components/ui/TechBadge";

function ProjectDialog({ project }: { project: Project }) {
  const { setSelectedProject } = useBook();
  const { language, t } = useLanguage();

  const isEs = language === "es";
  const reducedMotion = useReducedMotion();
  const dialogRef = useRef<HTMLDialogElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const trapTab = (event: React.KeyboardEvent<HTMLDialogElement>) => {
    if (event.key !== "Tab") return;
    const controls = Array.from(event.currentTarget.querySelectorAll<HTMLElement>(
      'a[href],button:not(:disabled),input:not(:disabled),textarea:not(:disabled),select:not(:disabled),[tabindex]:not([tabindex="-1"])'
    )).filter((element) => element.getClientRects().length > 0 && !element.closest("[inert]"));
    const first = controls[0];
    const last = controls[controls.length - 1];
    if (!first) { event.preventDefault(); return; }
    if (event.shiftKey && (document.activeElement === first || document.activeElement === event.currentTarget)) {
      event.preventDefault(); last.focus();
    } else if (!event.shiftKey && (document.activeElement === last || document.activeElement === event.currentTarget)) {
      event.preventDefault(); first.focus();
    }
  };
  useLayoutEffect(() => {
    const dialog = dialogRef.current;
    const trigger = document.activeElement instanceof HTMLElement ? document.activeElement : null;
    const overflow = document.body.style.overflow;
    dialog?.showModal();
    document.body.style.overflow = "hidden";
    closeRef.current?.focus({ preventScroll: true });
    return () => {
      dialog?.close();
      document.body.style.overflow = overflow;
      const available = (element: HTMLElement) => element.getClientRects().length > 0 && !element.closest("[inert]");
      const counterpart = Array.from(document.querySelectorAll<HTMLElement>("button[data-project-id]"))
        .find((element) => element.dataset.projectId === project.id && available(element));
      const currentChapter = Array.from(document.querySelectorAll<HTMLElement>('[aria-current="page"]')).find(available);
      const target = trigger?.isConnected && available(trigger) ? trigger : counterpart ?? currentChapter;
      target?.focus({ preventScroll: true });
    };
  }, [project.id]);

  const localized = (value: Project["title"]) => typeof value === "string" ? value : value[language];
  const title = localized(project.title);
  const sections = project.caseStudy ? [
    { title: t.projects.modal.detailsTitle, text: project.caseStudy.context },
    { title: t.projects.modal.implementation, text: project.caseStudy.implementation },
    { title: t.projects.modal.decision, text: project.caseStudy.decision },
  ] : [{ title: t.projects.modal.detailsTitle, text: project.shortDescription }];
  return (
    <motion.dialog ref={dialogRef} aria-labelledby="project-dialog-title" aria-modal="true"
      onKeyDown={trapTab} onCancel={(event) => { event.preventDefault(); setSelectedProject(null); }}
      initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
      onClick={(event) => { if (event.target === event.currentTarget) setSelectedProject(null); }}
      className="project-dialog fixed inset-0 m-0 w-screen h-dvh max-w-none max-h-none border-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-xs p-3 sm:p-6 select-text">
      <motion.div initial={reducedMotion ? false : { y: 12, opacity: 0 }} animate={{ y: 0, opacity: 1 }}
        transition={{ duration: reducedMotion ? 0 : 0.2 }}
        className="project-case-sheet" onClick={(event) => event.stopPropagation()}>
        <header className="project-case-header">
          <div>
            <h2 id="project-dialog-title" className="font-serif-book">{title}</h2>
            {project.subtitle && <p>{localized(project.subtitle)}</p>}
          </div>
          <button ref={closeRef} type="button" onClick={() => setSelectedProject(null)}
            className="project-case-close" aria-label={t.projects.modal.close}><X size={20} aria-hidden="true" /></button>
        </header>
        <div className="project-case-body book-scroll">
          <p className="project-case-intro">{localized(project.shortDescription)}</p>
          <figure className="project-case-figure">
            <Image width={project.imageWidth ?? 1600} height={project.imageHeight ?? 900} sizes="(min-width: 900px) 794px, calc(100vw - 72px)" src={project.image} alt={`${t.projects.modal.screenshot} ${title}`} />
          </figure>
          <div className="project-case-sections">
            {sections.map((section) => <section key={section.title}>
              <h3>{section.title}</h3><p>{localized(section.text)}</p>
            </section>)}
          </div>
          {project.demoCredentials && <p className="mt-5 text-sm">
            {isEs ? "Acceso de prueba" : "Test credentials"}: {project.demoCredentials.user} / {project.demoCredentials.pass}
          </p>}
          <section className="mt-6">
            <h3 className="project-case-stack-title">{t.projects.modal.stackTitle}</h3>
            <div className="flex flex-wrap gap-2">{project.techStack.map((tech) => <TechBadge key={tech} name={tech} />)}</div>
          </section>
        </div>
        <footer className="project-case-footer">
          {project.demoUrl && <a href={project.demoUrl} target="_blank" rel="noopener noreferrer" className="profile-primary"><ExternalLink size={14} aria-hidden="true" />{t.projects.modal.demo}</a>}
          {project.repoUrl && <a href={project.repoUrl} target="_blank" rel="noopener noreferrer"><Github size={14} aria-hidden="true" />{t.projects.modal.code}</a>}
        </footer>
      </motion.div>
    </motion.dialog>
  );
}


export default function ScrollDetail() {
  const { selectedProject } = useBook();
  return <AnimatePresence>{selectedProject && <ProjectDialog key={selectedProject.id} project={selectedProject} />}</AnimatePresence>;
}
