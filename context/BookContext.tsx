"use client";

import React, { createContext, useContext, useState, useCallback, useEffect, useReducer } from "react";
import { BOOK_VIEWPORT_QUERY } from "@/lib/bookViewport";
import { Project } from "@/types/Project";
import { BOOK_SECTIONS, BookSectionId, PageTurn, initialNavigation, navigationReducer } from "./bookNavigation";
export { BOOK_SECTIONS };
export type { BookSectionId };

interface BookContextType {
  isOpen: boolean;
  activeSection: BookSectionId;
  turnDirection: "next" | "prev";
  isTurning: boolean;
  turn: PageTurn | null;
  selectedProject: Project | null;
  openBook: () => void;
  closeBook: () => void;
  goToSection: (section: BookSectionId, mode?: PageTurn["mode"]) => void;
  cancelTurn: () => void;
  finishTurn: (id: number, commit: boolean) => void;
  nextPage: () => void;
  prevPage: () => void;
  setSelectedProject: (project: Project | null) => void;
}
const BookContext = createContext<BookContextType | undefined>(undefined);

export function BookProvider({ children }: { children: React.ReactNode }) {
  const [navigation, dispatch] = useReducer(navigationReducer, initialNavigation);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const openBook = useCallback(() => dispatch({ type: "open" }), []);
  const closeBook = useCallback(() => {
    setSelectedProject(null);
    dispatch({ type: "close" });
  }, []);
  const goToSection = useCallback((to: BookSectionId, mode: PageTurn["mode"] = "auto") => {
    dispatch({ type: "navigate", to, mode });
  }, []);
  const cancelTurn = useCallback(() => dispatch({ type: "cancel" }), []);
  const finishTurn = useCallback((id: number, commit: boolean) => dispatch({ type: "finish", id, commit }), []);
  const nextPage = useCallback(() => dispatch({ type: "next" }), []);
  const prevPage = useCallback(() => dispatch({ type: "prev" }), []);

  useEffect(() => {
    const media = window.matchMedia(BOOK_VIEWPORT_QUERY);
    const cancelHiddenTurn = () => { if (!media.matches) dispatch({ type: "cancel" }); };
    media.addEventListener("change", cancelHiddenTurn);
    return () => media.removeEventListener("change", cancelHiddenTurn);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.defaultPrevented || e.repeat || e.altKey || e.ctrlKey || e.metaKey || e.shiftKey || selectedProject ||
        !window.matchMedia(BOOK_VIEWPORT_QUERY).matches ||
        (e.target instanceof HTMLElement && e.target.closest('input,textarea,select,[contenteditable]:not([contenteditable="false"]),[role="textbox"]'))) return;
      if (e.key === "ArrowRight" || e.key === "ArrowLeft") {
        e.preventDefault();
        if (!navigation.isOpen) { if (e.key === "ArrowRight") openBook(); }
        else if (e.key === "ArrowRight") nextPage();
        else prevPage();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [navigation.isOpen, selectedProject, nextPage, prevPage, openBook]);

  return <BookContext.Provider value={{
    ...navigation, isTurning: navigation.turn !== null,
    turnDirection: navigation.turn && BOOK_SECTIONS.indexOf(navigation.turn.to) < BOOK_SECTIONS.indexOf(navigation.turn.from) ? "prev" : "next",
    selectedProject, openBook, closeBook, goToSection, finishTurn, cancelTurn, nextPage, prevPage, setSelectedProject,
  }}>{children}</BookContext.Provider>;
}
export function useBook() {
  const context = useContext(BookContext);
  if (!context) throw new Error("useBook must be used within a BookProvider");
  return context;
}
