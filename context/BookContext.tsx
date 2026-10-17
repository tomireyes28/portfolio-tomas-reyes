"use client";

import React, { createContext, useContext, useState, useCallback, useEffect } from "react";
import { Project } from "@/types/Project";

export type BookSectionId =
  | "about"
  | "projects"
  | "projects-2"
  | "skills"
  | "story"
  | "contact";

export const BOOK_SECTIONS: BookSectionId[] = [
  "about",
  "projects",
  "projects-2",
  "skills",
  "story",
  "contact",
];

interface BookContextType {
  isOpen: boolean;
  activeSection: BookSectionId;
  turnDirection: "next" | "prev";
  isTurning: boolean;
  selectedProject: Project | null;
  openBook: () => void;
  closeBook: () => void;
  goToSection: (section: BookSectionId) => void;
  nextPage: () => void;
  prevPage: () => void;
  setSelectedProject: (project: Project | null) => void;
}

const BookContext = createContext<BookContextType | undefined>(undefined);

export function BookProvider({ children }: { children: React.ReactNode }) {
  const [isOpen, setIsOpen] = useState(true);
  const [activeSection, setActiveSection] = useState<BookSectionId>("about");
  const [turnDirection, setTurnDirection] = useState<"next" | "prev">("next");
  const [isTurning, setIsTurning] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const openBook = useCallback(() => {
    setIsOpen(true);
  }, []);

  const closeBook = useCallback(() => {
    setSelectedProject(null);
    setActiveSection("about");
    setIsOpen(false);
  }, []);

  const goToSection = useCallback(
    (targetSection: BookSectionId) => {
      if (targetSection === activeSection) return;
      const currentIndex = BOOK_SECTIONS.indexOf(activeSection);
      const targetIndex = BOOK_SECTIONS.indexOf(targetSection);

      setTurnDirection(targetIndex > currentIndex ? "next" : "prev");
      setSelectedProject(null);
      setActiveSection(targetSection);
    },
    [activeSection]
  );

  const nextPage = useCallback(() => {
    const currentIndex = BOOK_SECTIONS.indexOf(activeSection);
    if (currentIndex < BOOK_SECTIONS.length - 1) {
      goToSection(BOOK_SECTIONS[currentIndex + 1]);
    }
  }, [activeSection, goToSection]);

  const prevPage = useCallback(() => {
    const currentIndex = BOOK_SECTIONS.indexOf(activeSection);
    if (currentIndex > 0) {
      goToSection(BOOK_SECTIONS[currentIndex - 1]);
    } else {
      closeBook();
    }
  }, [activeSection, goToSection, closeBook]);

  // Keyboard navigation (ArrowRight / ArrowLeft / Escape)
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Do not intercept if typing in an input or textarea
      if (
        document.activeElement?.tagName === "INPUT" ||
        document.activeElement?.tagName === "TEXTAREA"
      ) {
        return;
      }

      if (e.key === "Escape") {
        if (selectedProject) {
          setSelectedProject(null);
        }
        return;
      }

      if (!isOpen) {
        if (e.key === "Enter" || e.key === "ArrowRight") {
          openBook();
        }
        return;
      }

      if (selectedProject) return;

      if (e.key === "ArrowRight") {
        nextPage();
      } else if (e.key === "ArrowLeft") {
        prevPage();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, selectedProject, nextPage, prevPage, openBook]);

  return (
    <BookContext.Provider
      value={{
        isOpen,
        activeSection,
        turnDirection,
        isTurning,
        selectedProject,
        openBook,
        closeBook,
        goToSection,
        nextPage,
        prevPage,
        setSelectedProject,
      }}
    >
      {children}
    </BookContext.Provider>
  );
}

export function useBook() {
  const context = useContext(BookContext);
  if (!context) {
    throw new Error("useBook must be used within a BookProvider");
  }
  return context;
}
