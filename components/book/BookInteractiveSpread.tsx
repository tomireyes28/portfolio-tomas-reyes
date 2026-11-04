"use client";

import React, { useRef, useMemo, useEffect } from "react";
import { motion, useMotionValue, useTransform, animate, useReducedMotion } from "framer-motion";
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
        duration: reducedMotion || !desktop.matches ? 0 : 0.65,
        ease: [0.25, 0.1, 0.25, 1],
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
        rightTitle: isEs ? "Enfoque & Stack" : "Focus & Stack",
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
    _event: MouseEvent | TouchEvent | PointerEvent,
    info: { offset: { x: number; y: number } }
  ) => {
    if (dragAnimation.current || !containerRef.current || !isOpen || reducedMotion || (turn && turn.mode !== "drag")) return;
    if (!dragDirection.current && !isTurning && Math.abs(info.offset.x) > 15) {
      const direction = info.offset.x < 0 ? "next" : "prev";
      const index = currentIndex + (direction === "next" ? 1 : -1);
      if (!BOOK_SECTIONS[index]) return;
      dragDirection.current = direction;
      goToSection(BOOK_SECTIONS[index], "drag");
    }
    const halfWidth = containerRef.current.clientWidth / 2;
    const angle = (info.offset.x / (halfWidth * 0.82)) * 180;
    if (dragDirection.current === "next") turnAngle.set(Math.max(-180, Math.min(0, angle)));
    if (dragDirection.current === "prev") turnAngle.set(Math.min(180, Math.max(0, angle)));
  };

  const handlePanEnd = (
    _event: MouseEvent | TouchEvent | PointerEvent,
    info: { offset: { x: number }; velocity: { x: number } }
  ) => {
    if (dragAnimation.current || !dragDirection.current) return;
    if (!turn || turn.mode !== "drag") { cancelTurn(); dragDirection.current = null; return; }
    const next = dragDirection.current === "next";
    const complete = next ? turnAngle.get() < -45 || info.velocity.x < -150 : turnAngle.get() > 45 || info.velocity.x > 150;
    dragAnimation.current = animate(turnAngle, complete ? (next ? -180 : 180) : 0, {
      duration: reducedMotion ? 0 : 0.38,
      ease: [0.22, 1, 0.36, 1],
      onComplete: () => finishTurn(turn.id, complete),
    });
  };

  // 3D Physical Paper Bending Transforms (Bold & Tactile Flex):
  // 1. Z-Elevation: Bold arching lift up towards the user during the turn
  const zElevation = useTransform(
    turnAngle,
    turnState === "turning-next" ? [0, -90, -180] : [0, 90, 180],
    [0, 92, 0]
  );

  // 2. Horizontal chord contraction (scaleX): page bows into an arch (up to 16% narrower)
  const sheetScaleX = useTransform(
    turnAngle,
    turnState === "turning-next"
      ? [0, -45, -90, -135, -180]
      : [0, 45, 90, 135, 180],
    [1, 0.89, 0.84, 0.90, 1]
  );

  // 3. Aerodynamic drag & twist (skewY): trailing edge bows with noticeable slant
  const sheetSkewY = useTransform(
    turnAngle,
    turnState === "turning-next"
      ? [0, -45, -90, -135, -180]
      : [0, 45, 90, 135, 180],
    turnState === "turning-next"
      ? [0, -7.5, -6.0, 4.0, 0]
      : [0, 7.5, 6.0, -4.0, 0]
  );

  // 4. Diagonal corner lift (rotateZ): natural wrist/finger pull angle
  const sheetRotateZ = useTransform(
    turnAngle,
    turnState === "turning-next"
      ? [0, -60, -120, -180]
      : [0, 60, 120, 180],
    turnState === "turning-next"
      ? [0, 5.0, -3.0, 0]
      : [0, -5.0, 3.0, 0]
  );

  // 5. 3D Hand Pitch Tilt (rotateX): bottom corner pulls forward toward camera
  const sheetRotateX = useTransform(
    turnAngle,
    turnState === "turning-next"
      ? [0, -45, -90, -135, -180]
      : [0, 45, 90, 135, 180],
    [0, 7.5, 9.0, 4.0, 0]
  );

  // 6. Realistic multi-tier drop shadow under the vaulted sheet
  const sheetDropShadow = useTransform(
    turnAngle,
    turnState === "turning-next"
      ? [0, -45, -90, -135, -180]
      : [0, 45, 90, 135, 180],
    [
      "0 0 10px rgba(0,0,0,0.15)",
      "-24px 28px 48px rgba(18,8,2,0.58), -8px 12px 22px rgba(18,8,2,0.38)",
      "-42px 45px 80px rgba(12,5,1,0.75), -16px 20px 35px rgba(12,5,1,0.5)",
      "24px 28px 48px rgba(18,8,2,0.58), 8px 12px 22px rgba(18,8,2,0.38)",
      "0 0 10px rgba(0,0,0,0.15)",
    ]
  );

  // 7. Cylindrical curvature light wave (front face) - crisp highlight on the bending crest
  const frontCurvatureLight = useTransform(
    turnAngle,
    turnState === "turning-next"
      ? [0, -30, -75, -120, -165, -180]
      : [0, 30, 75, 120, 165, 180],
    [
      "linear-gradient(90deg, transparent 0%, transparent 100%)",
      "linear-gradient(90deg, transparent 10%, rgba(255,255,255,0.48) 35%, rgba(45,20,8,0.28) 58%, transparent 88%)",
      "linear-gradient(90deg, transparent 15%, rgba(255,255,255,0.68) 48%, rgba(45,20,8,0.38) 72%, transparent 95%)",
      "linear-gradient(90deg, transparent 25%, rgba(255,255,255,0.54) 58%, rgba(45,20,8,0.3) 80%, transparent 98%)",
      "linear-gradient(90deg, transparent 40%, rgba(255,255,255,0.3) 72%, transparent 100%)",
      "linear-gradient(90deg, transparent 0%, transparent 100%)",
    ]
  );

  // 8. Cylindrical curvature light wave (back face) - crisp highlight on the convex back
  const backCurvatureLight = useTransform(
    turnAngle,
    turnState === "turning-next"
      ? [0, -75, -115, -150, -180]
      : [0, 75, 115, 150, 180],
    [
      "linear-gradient(90deg, transparent 0%, transparent 100%)",
      "linear-gradient(90deg, transparent 8%, rgba(45,20,8,0.35) 28%, rgba(255,255,255,0.6) 54%, transparent 85%)",
      "linear-gradient(90deg, transparent 12%, rgba(45,20,8,0.28) 38%, rgba(255,255,255,0.68) 64%, transparent 90%)",
      "linear-gradient(90deg, transparent 25%, rgba(45,20,8,0.18) 52%, rgba(255,255,255,0.38) 75%, transparent 95%)",
      "linear-gradient(90deg, transparent 0%, transparent 100%)",
    ]
  );

  // Ambient Crease Shadow over the book
  const ambientShadow = useTransform(
    turnAngle,
    turnState === "turning-next" ? [0, -90, -180] : [0, 90, 180],
    [0, 0.45, 0]
  );

  return (
    <div
      id="book-spread"
      ref={containerRef}
      tabIndex={-1}
      role="region"
      aria-label={isEs ? "Páginas del portfolio" : "Portfolio pages"}
      aria-busy={isTurning}
      inert={!isOpen}
      className={`relative w-full h-full flex perspective-book select-none ${
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
        {/* CENTER LEATHER SPINE (Centered over the seam without altering page widths) */}
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

        {/* ============================================================== */}
        {/* AMBIENT SHADOW ACROSS THE BOOK BASE */}
        {/* ============================================================== */}
        <motion.div
          style={{ opacity: ambientShadow }}
          className="pointer-events-none absolute inset-0 z-20 bg-gradient-to-r from-transparent via-black/45 to-transparent"
        />

        {/* ============================================================== */}
        {/* 3D DOUBLE-SIDED SHEET TURNING FORWARD (NEXT) WITH PHYSICAL BEND */}
        {/* ============================================================== */}
        {turnState === "turning-next" && (
          <motion.div
            inert
            aria-hidden="true"
            style={{
              rotateY: turnAngle,
              rotateX: sheetRotateX,
              rotateZ: sheetRotateZ,
              skewY: sheetSkewY,
              scaleX: sheetScaleX,
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
              {/* Dynamic Curvature Specular Wave */}
              <motion.div
                style={{ background: frontCurvatureLight }}
                className="pointer-events-none absolute inset-0 z-40 rounded-r-md"
              />
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
              {/* Dynamic Curvature Specular Wave */}
              <motion.div
                style={{ background: backCurvatureLight }}
                className="pointer-events-none absolute inset-0 z-40 rounded-l-md"
              />
            </div>
          </motion.div>
        )}

        {/* ============================================================== */}
        {/* 3D DOUBLE-SIDED SHEET TURNING BACKWARD (PREV) WITH PHYSICAL BEND */}
        {/* ============================================================== */}
        {turnState === "turning-prev" && (
          <motion.div
            inert
            aria-hidden="true"
            style={{
              rotateY: turnAngle,
              rotateX: sheetRotateX,
              rotateZ: sheetRotateZ,
              skewY: sheetSkewY,
              scaleX: sheetScaleX,
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
              {/* Dynamic Curvature Specular Wave */}
              <motion.div
                style={{ background: frontCurvatureLight }}
                className="pointer-events-none absolute inset-0 z-40 rounded-l-md"
              />
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
              {/* Dynamic Curvature Specular Wave */}
              <motion.div
                style={{ background: backCurvatureLight }}
                className="pointer-events-none absolute inset-0 z-40 rounded-r-md"
              />
            </div>
          </motion.div>
        )}

        {/* ============================================================== */}
        {/* INTERACTIVE DRAG ZONES OVER THE EDGES (Above the corner curls) */}
        {/* ============================================================== */}
        <motion.div
          style={{ touchAction: "pan-y" }}
          onPan={handlePan}
          onPanEnd={handlePanEnd}
          className="absolute top-0 bottom-28 right-0 w-5 z-30 cursor-grab active:cursor-grabbing hover:bg-black/2"
          title={isEs ? "Arrastrá la hoja para pasar página" : "Drag page to turn"}
        />

        <motion.div
          style={{ touchAction: "pan-y" }}
          onPan={handlePan}
          onPanEnd={handlePanEnd}
          className="absolute top-0 bottom-28 left-0 w-5 z-30 cursor-grab active:cursor-grabbing hover:bg-black/2"
          title={isEs ? "Arrastrá la hoja para volver" : "Drag page to go back"}
        />
      </div>
    </div>
  );
}
