"use client";

import { motion } from "framer-motion";
import { useBook, BookSectionId } from "@/context/BookContext";
import { useLanguage } from "@/context/LanguageContext";

const chapters: { id: BookSectionId; es: string; en: string }[] = [
  { id: "about", es: "Perfil", en: "Profile" },
  { id: "projects", es: "Proyectos", en: "Projects" },
  { id: "skills", es: "Tecnologías", en: "Technologies" },
  { id: "story", es: "Trayectoria", en: "Journey" },
  { id: "contact", es: "Contacto", en: "Contact" },
];

export default function BookTabs() {
  const { activeSection, goToSection, isTurning } = useBook();
  const { language } = useLanguage();
  const isEs = language === "es";
  const inProjects = activeSection === "projects" || activeSection === "projects-2";
  return (
    <nav aria-label={isEs ? "Secciones del portfolio" : "Portfolio sections"} className="book-tabs">
      <p className="book-index-caption">{isEs ? "Índice" : "Contents"}</p>
      <div className="flex flex-col gap-2">
        {chapters.map((chapter, index) => {
          const active = chapter.id === "projects" ? inProjects : activeSection === chapter.id;
          return (
            <motion.button
              key={chapter.id}
              type="button"
              disabled={isTurning}
              aria-current={active ? "page" : undefined}
              onClick={() => goToSection(chapter.id)}
              animate={{ x: active ? 6 : 0 }}
              whileHover={{ x: active ? 8 : 3 }}
              whileTap={{ scale: 0.98 }}
              className={`book-tab ${active ? "book-tab-active" : ""}`}
            >
              <span aria-hidden="true" className="book-tab-number">{String(index + 1).padStart(2, "0")}</span>
              <span>{isEs ? chapter.es : chapter.en}</span>
            </motion.button>
          );
        })}
      </div>
      {inProjects && (
        <div className="book-project-pager">
          <p>{isEs ? "Selección" : "Selection"} {activeSection === "projects" ? "1" : "2"} / 2</p>
          <button type="button" aria-label={activeSection === "projects" ? (isEs ? "Siguientes proyectos" : "Next projects") : (isEs ? "Proyectos anteriores" : "Previous projects")} disabled={isTurning} onClick={() => goToSection(activeSection === "projects" ? "projects-2" : "projects")}>
            {activeSection === "projects" ? (isEs ? "Siguientes →" : "Next projects →") : (isEs ? "← Anteriores" : "← Previous projects")}
          </button>
        </div>
      )}
    </nav>
  );
}
