"use client";

import React, { useRef, useMemo, useEffect } from "react";
import { motion, useMotionValue, useTransform, animate, useReducedMotion } from "framer-motion";
import { pageTurnAngle, shouldCompleteTurn, turnSettleDuration, TurnDirection } from "@/lib/pageTurn";
import { BOOK_VIEWPORT_QUERY } from "@/lib/bookViewport";
import BookPage from "./BookPage";
import BookSpine from "./BookSpine";
import { BOOK_SECTIONS, useBook } from "@/context/BookContext";
import { useLanguage } from "@/context/LanguageContext";
import { AboutLeftPage, AboutRightPage } from "@/components/pages/AboutPage";
import {
  ProjectsLeftPage,
  ProjectsRightPage,
} from "@/components/pages/ProjectsPage";
import { SkillsLeftPage, SkillsRightPage } from "@/components/pages/SkillsPage";
import {
  JourneyLeftPage,
  JourneyRightPage,
} from "@/components/pages/JourneyPage";
import {
  ContactLeftPage,
  ContactRightPage,
} from "@/components/pages/ContactPage";

export default function BookInteractiveSpread() {
  const { activeSection, goToSection, isOpen, turn, isTurning, finishTurn, cancelTurn } = useBook();
  const { language } = useLanguage();
  const isEs = language === "es";
  const reducedMotion = useReducedMotion();
  const currentIndex = BOOK_SECTIONS.indexOf(activeSection);
  const targetIndex = turn ? BOOK_SECTIONS.indexOf(turn.to) : currentIndex;
  const turnState = !turn ? "idle" : targetIndex > currentIndex ? "turning-next" : "turning-prev";
  const containerRef = useRef<HTMLDivElement>(null);
  const dragDirection = useRef<"next" | "prev" | null>(null);
  const dragAnimation = useRef<{ stop: () => void } | null>(null);
  const turnAngle = useMotionValue(0);

  useEffect(() => {
    if (!turn) return;
    let animation: { stop: () => void } | undefined;
    const desktop = window.matchMedia(BOOK_VIEWPORT_QUERY);
    const onResize = () => { if (!desktop.matches) finishTurn(turn.id, false); };
    desktop.addEventListener("change", onResize);
    if (turn.mode === "drag" && (reducedMotion || !desktop.matches)) finishTurn(turn.id, false);
    if (turn.mode === "auto") {
      turnAngle.set(0);
      animation = animate(turnAngle, targetIndex > currentIndex ? -180 : 180, {
        duration: reducedMotion || !desktop.matches ? 0 : 0.72,
        ease: [0.32, 0.02, 0.2, 1],
        onComplete: () => finishTurn(turn.id, true),
      });
    }
    return () => {
      animation?.stop();
      dragAnimation.current?.stop();
      dragAnimation.current = null;
      dragDirection.current = null;
      turnAngle.set(0);
      desktop.removeEventListener("change", onResize);
    };
  }, [turn, targetIndex, currentIndex, finishTurn, turnAngle, reducedMotion]);

  // Focus the new spread only when the old control disappeared with the page.
  useEffect(() => {
    if (isOpen && (document.activeElement === document.body || document.activeElement?.closest("[inert]"))) {
      containerRef.current?.focus({ preventScroll: true });
    }
  }, [activeSection, isOpen]);

  const spreads = useMemo(() => {
    return [
      {
        id: "about",
        leftTitle: isEs ? "Sobre Mí" : "About Me",
        rightTitle: isEs ? "Presentación" : "Introduction",
        leftNum: "01",
        rightNum: "02",
        leftContent: <AboutLeftPage />,
        rightContent: <AboutRightPage />,
      },
      {
        id: "projects",
        leftTitle: isEs ? "Proyectos I" : "Projects I",
        rightTitle: isEs ? "Catálogo Visual" : "Visual Catalog",
        leftNum: "03",
        rightNum: "04",
        leftContent: <ProjectsLeftPage spreadIndex={0} />,
        rightContent: <ProjectsRightPage spreadIndex={0} />,
      },
      {
        id: "projects-2",
        leftTitle: isEs ? "Proyectos II" : "Projects II",
        rightTitle: isEs ? "Catálogo Visual" : "Visual Catalog",
        leftNum: "05",
        rightNum: "06",
        leftContent: <ProjectsLeftPage spreadIndex={1} />,
        rightContent: <ProjectsRightPage spreadIndex={1} />,
      },
      {
        id: "skills",
        leftTitle: isEs ? "Tecnologías" : "Technologies",
        rightTitle: isEs ? "Herramientas & Cloud" : "Tools & Cloud",
        leftNum: "07",
        rightNum: "08",
        leftContent: <SkillsLeftPage />,
        rightContent: <SkillsRightPage />,
      },
      {
        id: "story",
        leftTitle: isEs ? "Trayectoria" : "Journey",
        rightTitle: isEs ? "Habilidades Blandas" : "Soft Skills",
        leftNum: "09",
        rightNum: "10",
        leftContent: <JourneyLeftPage />,
        rightContent: <JourneyRightPage />,
      },
      {
        id: "contact",
        leftTitle: isEs ? "Redes & Perfiles" : "Networks & Profiles",
        rightTitle: isEs ? "Hablemos" : "Let's Connect",
        leftNum: "11",
        rightNum: "12",
        leftContent: <ContactLeftPage />,
        rightContent: <ContactRightPage />,
      },
    ];
  }, [isEs]);

  // Current, next, and previous spreads
  const currentSpread = spreads[currentIndex] || spreads[0];
  const nextSpread = spreads[targetIndex];
  const prevSpread = spreads[targetIndex];

  const handlePan = (
    direction: TurnDirection,
    _event: MouseEvent | TouchEvent | PointerEvent,
    info: { offset: { x: number; y: number } }
  ) => {
    if (dragAnimation.current || !containerRef.current || !isOpen || reducedMotion ||
      !window.matchMedia(BOOK_VIEWPORT_QUERY).matches || (turn && turn.mode !== "drag")) return;
    if (!dragDirection.current) {
      if (isTurning || Math.abs(info.offset.x) < 15 || Math.abs(info.offset.y) > Math.abs(info.offset.x)) return;
      if ((direction === "next" && info.offset.x > 0) || (direction === "prev" && info.offset.x < 0)) return;
      const index = currentIndex + (direction === "next" ? 1 : -1);
      if (!BOOK_SECTIONS[index]) return;
      dragDirection.current = direction;
      goToSection(BOOK_SECTIONS[index], "drag");
    }
    turnAngle.set(pageTurnAngle(info.offset.x, containerRef.current.clientWidth / 2, dragDirection.current));
  };

  const settleDrag = (complete: boolean) => {
    if (dragAnimation.current || !dragDirection.current) return;
    if (!turn || turn.mode !== "drag") { cancelTurn(); dragDirection.current = null; return; }
    const destination = complete ? (dragDirection.current === "next" ? -180 : 180) : 0;
    dragAnimation.current = animate(turnAngle, destination, {
      duration: reducedMotion ? 0 : turnSettleDuration(turnAngle.get(), destination),
      ease: [0.22, 1, 0.36, 1],
      onComplete: () => finishTurn(turn.id, complete),
    });
  };
  const handlePanEnd = (
    _event: MouseEvent | TouchEvent | PointerEvent,
    info: { velocity: { x: number } }
  ) => {
    if (dragDirection.current) settleDrag(shouldCompleteTurn(turnAngle.get(), info.velocity.x, dragDirection.current));
  };

  // The hinge stays fixed. A small chord contraction and moving light suggest flex
  // without the former global twist, vertical lift, or distortion of the text.
  const progress = useTransform(turnAngle, (angle) => Math.abs(angle) / 180);
  const sheetScaleX = useTransform(progress, [0, 0.25, 0.5, 0.8, 1], [1, 0.992, 0.978, 0.992, 1]);
  const curvatureOpacity = useTransform(progress, [0, 0.2, 0.5, 0.8, 1], [0, 0.15, 0.32, 0.16, 0]);
  const curvaturePosition = useTransform(progress, [0, 1], ["-35%", "35%"]);
  const castShadowOpacity = useTransform(progress, [0, 0.15, 0.5, 0.85, 1], [0, 0.14, 0.3, 0.12, 0]);
  const castShadowWidth = useTransform(progress, [0, 0.5, 1], [0.95, 0.15, 0.95]);
  const isNext = turnState === "turning-next";
  const destinationSpread = spreads[targetIndex];

  return (
    <div
      id="book-spread"
      ref={containerRef}
      tabIndex={-1}
      role="region"
      aria-label={isEs ? "Páginas del portfolio" : "Portfolio pages"}
      aria-busy={isTurning}
      inert={!isOpen}
      className={`book-spread relative w-full h-full flex select-none ${
        !isOpen ? "pointer-events-none" : ""
      }`}
    >
      {/* 2-PAGE SPREAD */}
      <div className="flex w-full h-full relative preserve-3d">
        <p className="sr-only" role="status" aria-live="polite">{isEs ? "Sección" : "Section"}: {spreads[currentIndex].leftTitle}</p>
        {/* ============================================================== */}
        {/* BASE STATIC LEFT PAGE */}
        {/* WHEN TURNING PREV: Shows prevSpread.leftContent so it NEVER repeats! */}
        {/* ============================================================== */}
        <div
          inert={isTurning}
          className={`w-1/2 h-full relative transition-opacity duration-300 ${
            isOpen ? "opacity-100 delay-500" : "opacity-0 pointer-events-none"
          }`}
        >
          <BookPage
            side="left"
            pageNumber={
              turnState === "turning-prev"
                ? prevSpread.leftNum
                : currentSpread.leftNum
            }
            chapterTitle={
              turnState === "turning-prev"
                ? prevSpread.leftTitle
                : currentSpread.leftTitle
            }
            onCornerClick={
              currentIndex > 0 ? () => goToSection(BOOK_SECTIONS[currentIndex - 1]) : undefined
            }
          >
            {turnState === "turning-prev"
              ? prevSpread.leftContent
              : currentSpread.leftContent}
          </BookPage>
        </div>

        {/* ============================================================== */}
        {/* Open binding: a narrow gutter, cloth endbands, and contact shadow. */}
        {/* ============================================================== */}
        <div
          className={`absolute inset-y-0 left-1/2 -translate-x-1/2 z-25 pointer-events-none hidden md:flex transition-opacity duration-500 ${
            isOpen ? "opacity-100" : "opacity-0"
          }`}
        >
          <BookSpine />
        </div>

        {/* ============================================================== */}
        {/* BASE STATIC RIGHT PAGE */}
        {/* WHEN TURNING NEXT: Shows nextSpread.rightContent underneath! */}
        {/* ============================================================== */}
        <div inert={isTurning} className="w-1/2 h-full relative">
          <BookPage
            side="right"
            pageNumber={
              turnState === "turning-next"
                ? nextSpread.rightNum
                : currentSpread.rightNum
            }
            chapterTitle={
              turnState === "turning-next"
                ? nextSpread.rightTitle
                : currentSpread.rightTitle
            }
            onCornerClick={
              currentIndex < BOOK_SECTIONS.length - 1
                ? () => goToSection(BOOK_SECTIONS[currentIndex + 1])
                : undefined
            }
          >
            {turnState === "turning-next"
              ? nextSpread.rightContent
              : currentSpread.rightContent}
          </BookPage>
        </div>

        {/* Shadow falls onto the receiving page, independent of the rotating sheet. */}
        {isTurning && !reducedMotion && <motion.div aria-hidden="true"
          style={{ opacity: castShadowOpacity, scaleX: castShadowWidth, transformOrigin: isNext ? "right center" : "left center" }}
          className={`book-turn-cast-shadow ${isNext ? "book-turn-cast-shadow-left" : "book-turn-cast-shadow-right"}`} />}

        {isTurning && !reducedMotion && (
          <motion.div inert aria-hidden="true" data-direction={isNext ? "next" : "prev"}
            style={{ rotateY: turnAngle, scaleX: sheetScaleX, transformOrigin: isNext ? "left center" : "right center" }}
            className={`book-turning-sheet ${isNext ? "book-turning-sheet-next" : "book-turning-sheet-prev"}`}>
            <div className="book-sheet-face book-sheet-front">
              <BookPage side={isNext ? "right" : "left"}
                pageNumber={isNext ? currentSpread.rightNum : currentSpread.leftNum}
                chapterTitle={isNext ? currentSpread.rightTitle : currentSpread.leftTitle}>
                {isNext ? currentSpread.rightContent : currentSpread.leftContent}
              </BookPage>
              <motion.div className="book-sheet-light" style={{ opacity: curvatureOpacity, x: curvaturePosition }} />
            </div>
            <div className="book-sheet-face book-sheet-back">
              <BookPage side={isNext ? "left" : "right"}
                pageNumber={isNext ? destinationSpread.leftNum : destinationSpread.rightNum}
                chapterTitle={isNext ? destinationSpread.leftTitle : destinationSpread.rightTitle}>
                {isNext ? destinationSpread.leftContent : destinationSpread.rightContent}
              </BookPage>
              <motion.div className="book-sheet-light book-sheet-light-back" style={{ opacity: curvatureOpacity, x: curvaturePosition }} />
            </div>
          </motion.div>
        )}

        {/* ============================================================== */}
        {/* INTERACTIVE DRAG ZONES OVER THE EDGES (Above the corner curls) */}
        {/* ============================================================== */}
        {currentIndex < BOOK_SECTIONS.length - 1 && !reducedMotion && <motion.div
          style={{ touchAction: "pan-y" }}
          onPan={(event, info) => handlePan("next", event, info)}
          onPanEnd={handlePanEnd}
          onPointerCancel={() => settleDrag(false)}
          aria-hidden="true"
          className="book-drag-edge absolute top-0 bottom-28 right-0 w-4 z-30 cursor-grab active:cursor-grabbing"
          title={isEs ? "Arrastrá la hoja para pasar página" : "Drag page to turn"}
        />}

        {currentIndex > 0 && !reducedMotion && <motion.div
          style={{ touchAction: "pan-y" }}
          onPan={(event, info) => handlePan("prev", event, info)}
          onPanEnd={handlePanEnd}
          onPointerCancel={() => settleDrag(false)}
          aria-hidden="true"
          className="book-drag-edge absolute top-0 bottom-28 left-0 w-4 z-30 cursor-grab active:cursor-grabbing"
          title={isEs ? "Arrastrá la hoja para volver" : "Drag page to go back"}
        />}
      </div>
    </div>
  );
}
