"use client";

import React, { useState, useRef, useMemo, useCallback } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import BookPage from "./BookPage";
import BookSpine from "./BookSpine";
import { BOOK_SECTIONS, useBook } from "@/context/BookContext";
import { useLanguage } from "@/context/LanguageContext";
import { AboutLeftPage, AboutRightPage } from "@/components/pages/AboutPage";
import {
  ProjectsLeftPage,
  ProjectsRightPage,
  ProjectCategoryFilter,
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

interface BookInteractiveSpreadProps {
  projectFilter: ProjectCategoryFilter;
  setProjectFilter: (f: ProjectCategoryFilter) => void;
  projectSubPage: number;
  setProjectSubPage: React.Dispatch<React.SetStateAction<number>>;
}

export default function BookInteractiveSpread({
  projectFilter,
  setProjectFilter,
  projectSubPage,
  setProjectSubPage,
}: BookInteractiveSpreadProps) {
  const { activeSection, goToSection } = useBook();
  const { language } = useLanguage();
  const isEs = language === "es";

  const currentIndex = BOOK_SECTIONS.indexOf(activeSection);

  // "idle" | "turning-next" | "turning-prev"
  const [turnState, setTurnState] = useState<"idle" | "turning-next" | "turning-prev">("idle");
  const containerRef = useRef<HTMLDivElement>(null);

  // Turn angle motion value: 0 to -180 for next, 0 to 180 for prev
  const turnAngle = useMotionValue(0);

  // Pre-render all 5 spreads stably so React NEVER flashes or re-mounts
  const spreads = useMemo(() => {
    return [
      {
        id: "about",
        leftTitle: isEs ? "Sobre Mí" : "About Me",
        rightTitle: isEs ? "Enfoque & Stack" : "Focus & Stack",
        leftNum: "01",
        rightNum: "02",
        leftContent: <AboutLeftPage />,
        rightContent: <AboutRightPage />,
      },
      {
        id: "projects",
        leftTitle: isEs ? "Proyectos" : "Projects",
        rightTitle: isEs ? "Catálogo Visual" : "Visual Catalog",
        leftNum: "03",
        rightNum: "04",
        leftContent: (
          <ProjectsLeftPage
            filter={projectFilter}
            setFilter={setProjectFilter}
            subPage={projectSubPage}
            setSubPage={setProjectSubPage}
          />
        ),
        rightContent: (
          <ProjectsRightPage
            filter={projectFilter}
            setFilter={setProjectFilter}
            subPage={projectSubPage}
            setSubPage={setProjectSubPage}
          />
        ),
      },
      {
        id: "skills",
        leftTitle: isEs ? "Tecnologías" : "Technologies",
        rightTitle: isEs ? "Herramientas & Cloud" : "Tools & Cloud",
        leftNum: "05",
        rightNum: "06",
        leftContent: <SkillsLeftPage />,
        rightContent: <SkillsRightPage />,
      },
      {
        id: "story",
        leftTitle: isEs ? "Trayectoria" : "Journey",
        rightTitle: isEs ? "Habilidades Blandas" : "Soft Skills",
        leftNum: "07",
        rightNum: "08",
        leftContent: <JourneyLeftPage />,
        rightContent: <JourneyRightPage />,
      },
      {
        id: "contact",
        leftTitle: isEs ? "Contacto Directo" : "Direct Contact",
        rightTitle: isEs ? "Correspondencia" : "Correspondence",
        leftNum: "09",
        rightNum: "10",
        leftContent: <ContactLeftPage />,
        rightContent: <ContactRightPage />,
      },
    ];
  }, [isEs, projectFilter, projectSubPage, setProjectFilter, setProjectSubPage]);

  // Current, next, and previous spreads
  const currentSpread = spreads[currentIndex] || spreads[0];
  const nextSpread = spreads[Math.min(spreads.length - 1, currentIndex + 1)];
  const prevSpread = spreads[Math.max(0, currentIndex - 1)];

  // Trigger automated animated page turn
  const triggerTurn = useCallback(
    (toIndex: number) => {
      if (toIndex === currentIndex || turnState !== "idle") return;

      const isNext = toIndex > currentIndex;
      setTurnState(isNext ? "turning-next" : "turning-prev");

      const endAngle = isNext ? -180 : 180;
      turnAngle.set(0);

      animate(turnAngle, endAngle, {
        duration: 0.65,
        ease: [0.25, 0.1, 0.25, 1],
        onComplete: () => {
          goToSection(BOOK_SECTIONS[toIndex]);
          setTurnState("idle");
          turnAngle.set(0);
        },
      });
    },
    [currentIndex, turnState, turnAngle, goToSection]
  );

  // Pan / Drag gesture handler
  const handlePan = (
    _event: MouseEvent | TouchEvent | PointerEvent,
    info: { offset: { x: number; y: number } }
  ) => {
    if (!containerRef.current) return;
    const halfWidth = containerRef.current.clientWidth / 2;

    if (turnState === "idle" && info.offset.x < -15 && currentIndex < BOOK_SECTIONS.length - 1) {
      setTurnState("turning-next");
    }

    if (turnState === "idle" && info.offset.x > 15 && currentIndex > 0) {
      setTurnState("turning-prev");
    }

    if (turnState === "turning-next") {
      const progress = Math.max(-180, Math.min(0, (info.offset.x / (halfWidth * 0.82)) * 180));
      turnAngle.set(progress);
    } else if (turnState === "turning-prev") {
      const progress = Math.min(180, Math.max(0, (info.offset.x / (halfWidth * 0.82)) * 180));
      turnAngle.set(progress);
    }
  };

  const handlePanEnd = (
    _event: MouseEvent | TouchEvent | PointerEvent,
    info: { offset: { x: number }; velocity: { x: number } }
  ) => {
    if (turnState === "turning-next") {
      const current = turnAngle.get();
      const shouldComplete = current < -45 || info.velocity.x < -150;

      animate(turnAngle, shouldComplete ? -180 : 0, {
        duration: 0.38,
        ease: [0.22, 1, 0.36, 1],
        onComplete: () => {
          if (shouldComplete) {
            goToSection(BOOK_SECTIONS[currentIndex + 1]);
          }
          setTurnState("idle");
          turnAngle.set(0);
        },
      });
    } else if (turnState === "turning-prev") {
      const current = turnAngle.get();
      const shouldComplete = current > 45 || info.velocity.x > 150;

      animate(turnAngle, shouldComplete ? 180 : 0, {
        duration: 0.38,
        ease: [0.22, 1, 0.36, 1],
        onComplete: () => {
          if (shouldComplete) {
            goToSection(BOOK_SECTIONS[currentIndex - 1]);
          }
          setTurnState("idle");
          turnAngle.set(0);
        },
      });
    }
  };

  // 3D Physical Transforms:
  // Z-Elevation: Arching up towards the user during the turn
  const zElevation = useTransform(
    turnAngle,
    turnState === "turning-next" ? [0, -90, -180] : [0, 90, 180],
    [0, 55, 0]
  );

  // Realistic Drop Shadow under the lifted sheet
  const sheetDropShadow = useTransform(
    turnAngle,
    turnState === "turning-next" ? [0, -90, -180] : [0, 90, 180],
    [
      "0 0 10px rgba(0,0,0,0.15)",
      "-20px 25px 45px rgba(0,0,0,0.55)",
      "0 0 10px rgba(0,0,0,0.15)",
    ]
  );

  // Ambient Crease Shadow over the book
  const ambientShadow = useTransform(
    turnAngle,
    turnState === "turning-next" ? [0, -90, -180] : [0, 90, 180],
    [0, 0.4, 0]
  );

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full flex perspective-book select-none"
    >
      {/* DESKTOP 2-PAGE SPREAD */}
      <div className="hidden md:flex w-full h-full relative preserve-3d">
        {/* ============================================================== */}
        {/* BASE STATIC LEFT PAGE */}
        {/* WHEN TURNING PREV: Shows prevSpread.leftContent so it NEVER repeats! */}
        {/* ============================================================== */}
        <div className="w-1/2 h-full relative">
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
              currentIndex > 0 ? () => triggerTurn(currentIndex - 1) : undefined
            }
          >
            {turnState === "turning-prev"
              ? prevSpread.leftContent
              : currentSpread.leftContent}
          </BookPage>
        </div>

        {/* ============================================================== */}
        {/* CENTER LEATHER SPINE (Centered over the seam without altering page widths) */}
        {/* ============================================================== */}
        <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 z-25 pointer-events-none hidden md:flex">
          <BookSpine />
        </div>

        {/* ============================================================== */}
        {/* BASE STATIC RIGHT PAGE */}
        {/* WHEN TURNING NEXT: Shows nextSpread.rightContent underneath! */}
        {/* ============================================================== */}
        <div className="w-1/2 h-full relative">
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
                ? () => triggerTurn(currentIndex + 1)
                : undefined
            }
          >
            {turnState === "turning-next"
              ? nextSpread.rightContent
              : currentSpread.rightContent}
          </BookPage>
        </div>

        {/* ============================================================== */}
        {/* AMBIENT SHADOW ACROSS THE BOOK BASE */}
        {/* ============================================================== */}
        <motion.div
          style={{ opacity: ambientShadow }}
          className="pointer-events-none absolute inset-0 z-20 bg-gradient-to-r from-transparent via-black/45 to-transparent"
        />

        {/* ============================================================== */}
        {/* 3D DOUBLE-SIDED SHEET TURNING FORWARD (NEXT) */}
        {/* ============================================================== */}
        {turnState === "turning-next" && (
          <motion.div
            style={{
              rotateY: turnAngle,
              z: zElevation,
              boxShadow: sheetDropShadow,
              transformOrigin: "left center",
              transformStyle: "preserve-3d",
            }}
            className="absolute top-0 bottom-0 right-0 w-1/2 z-35 preserve-3d"
          >
            {/* CARA FRONTAL (Right page of current section) */}
            <div className="absolute inset-0 backface-hidden preserve-3d">
              <BookPage
                side="right"
                pageNumber={currentSpread.rightNum}
                chapterTitle={currentSpread.rightTitle}
              >
                {currentSpread.rightContent}
              </BookPage>
            </div>

            {/* CONTRACARA / DORSO (Left page of next section) */}
            <div
              style={{ transform: "rotateY(180deg)" }}
              className="absolute inset-0 backface-hidden preserve-3d"
            >
              <BookPage
                side="left"
                pageNumber={nextSpread.leftNum}
                chapterTitle={nextSpread.leftTitle}
              >
                {nextSpread.leftContent}
              </BookPage>
            </div>
          </motion.div>
        )}

        {/* ============================================================== */}
        {/* 3D DOUBLE-SIDED SHEET TURNING BACKWARD (PREV) */}
        {/* ============================================================== */}
        {turnState === "turning-prev" && (
          <motion.div
            style={{
              rotateY: turnAngle,
              z: zElevation,
              boxShadow: sheetDropShadow,
              transformOrigin: "right center",
              transformStyle: "preserve-3d",
            }}
            className="absolute top-0 bottom-0 left-0 w-1/2 z-35 preserve-3d"
          >
            {/* CARA FRONTAL (Left page of current section) */}
            <div className="absolute inset-0 backface-hidden preserve-3d">
              <BookPage
                side="left"
                pageNumber={currentSpread.leftNum}
                chapterTitle={currentSpread.leftTitle}
              >
                {currentSpread.leftContent}
              </BookPage>
            </div>

            {/* CONTRACARA / DORSO (Right page of previous section) */}
            <div
              style={{ transform: "rotateY(-180deg)" }}
              className="absolute inset-0 backface-hidden preserve-3d"
            >
              <BookPage
                side="right"
                pageNumber={prevSpread.rightNum}
                chapterTitle={prevSpread.rightTitle}
              >
                {prevSpread.rightContent}
              </BookPage>
            </div>
          </motion.div>
        )}

        {/* ============================================================== */}
        {/* INTERACTIVE DRAG ZONES OVER THE EDGES & FOLDED CORNERS */}
        {/* ============================================================== */}
        <motion.div
          onPan={handlePan}
          onPanEnd={handlePanEnd}
          className="absolute inset-y-0 right-0 w-20 z-30 cursor-grab active:cursor-grabbing hover:bg-black/2"
          title={isEs ? "Arrastrá la hoja para pasar página" : "Drag page to turn"}
        />

        <motion.div
          onPan={handlePan}
          onPanEnd={handlePanEnd}
          className="absolute inset-y-0 left-0 w-20 z-30 cursor-grab active:cursor-grabbing hover:bg-black/2"
          title={isEs ? "Arrastrá la hoja para volver" : "Drag page to go back"}
        />
      </div>

      {/* ============================================================== */}
      {/* MOBILE SINGLE-PAGE SPREAD WITH TOUCH PAN */}
      {/* ============================================================== */}
      <motion.div
        onPan={handlePan}
        onPanEnd={handlePanEnd}
        className="flex md:hidden flex-col w-full h-full relative"
      >
        <BookPage
          side="left"
          pageNumber={currentSpread.leftNum}
          chapterTitle={currentSpread.leftTitle}
          onCornerClick={
            currentIndex < BOOK_SECTIONS.length - 1
              ? () => triggerTurn(currentIndex + 1)
              : undefined
          }
        >
          {currentSpread.leftContent}
        </BookPage>
      </motion.div>
    </div>
  );
}
