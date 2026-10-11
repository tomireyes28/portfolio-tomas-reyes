"use client";

import React from "react";
import { motion, AnimatePresence } from "framer-motion";

interface BookPageTurnProps {
  isTurning: boolean;
  direction: "next" | "prev";
  turnKey: string;
}

export default function BookPageTurn({
  isTurning,
  direction,
  turnKey,
}: BookPageTurnProps) {
  const isNext = direction === "next";

  return (
    <AnimatePresence>
      {isTurning && (
        <div
          key={`turn-${turnKey}`}
          className="pointer-events-none hidden md:block absolute inset-0 z-30 perspective-book overflow-hidden"
        >
          {/* Moving shadow across the book spread during turn */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.35, 0] }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-black/40 to-transparent"
          />

          {/* 3D Flipping Parchment Sheet anchored at the Spine */}
          <motion.div
            initial={{
              rotateY: 0,
              boxShadow: "0 0 15px rgba(0,0,0,0.2)",
            }}
            animate={{
              rotateY: isNext ? -180 : 180,
              boxShadow: [
                "0 0 15px rgba(0,0,0,0.2)",
                "-25px 0 50px rgba(0,0,0,0.55)",
                "0 0 10px rgba(0,0,0,0.15)",
              ],
            }}
            transition={{
              duration: 0.62,
              ease: [0.32, 0.08, 0.24, 1],
            }}
            style={{
              transformOrigin: isNext ? "left center" : "right center",
              transformStyle: "preserve-3d",
            }}
            className={`absolute top-0 bottom-0 w-1/2 ${
              isNext ? "right-0 rounded-r-md" : "left-0 rounded-l-md"
            }`}
          >
            {/* Front Face of Turning Sheet */}
            <div
              className={`absolute inset-0 backface-hidden ${
                isNext ? "parchment-page-right" : "parchment-page-left"
              } border border-[#8c6d46]/60 flex flex-col justify-between p-8`}
            >
              <div className="border-b border-[#8c6d46]/25 pb-2 flex justify-between">
                <div className="h-2 w-24 bg-[#8c6d46]/20 rounded-xs" />
                <div className="h-2 w-12 bg-[#8c6d46]/20 rounded-xs" />
              </div>
              <div className="space-y-4 my-auto opacity-30">
                <div className="h-4 w-3/4 bg-[#6e523e]/30 rounded-xs" />
                <div className="h-3 w-full bg-[#6e523e]/20 rounded-xs" />
                <div className="h-3 w-5/6 bg-[#6e523e]/20 rounded-xs" />
                <div className="h-28 w-full border border-dashed border-[#6e523e]/30 rounded-xs" />
              </div>
              <div className="border-t border-[#8c6d46]/20 pt-2 flex justify-center">
                <div className="h-2 w-10 bg-[#8c6d46]/25 rounded-xs" />
              </div>
            </div>

            {/* Back Face of Turning Sheet */}
            <div
              style={{ transform: "rotateY(180deg)" }}
              className={`absolute inset-0 backface-hidden ${
                isNext ? "parchment-page-left" : "parchment-page-right"
              } border border-[#8c6d46]/60 flex flex-col justify-between p-8`}
            >
              <div className="border-b border-[#8c6d46]/25 pb-2 flex justify-between">
                <div className="h-2 w-16 bg-[#8c6d46]/20 rounded-xs" />
                <div className="h-2 w-20 bg-[#8c6d46]/20 rounded-xs" />
              </div>
              <div className="space-y-4 my-auto opacity-30">
                <div className="h-4 w-2/3 bg-[#6e523e]/30 rounded-xs" />
                <div className="h-3 w-full bg-[#6e523e]/20 rounded-xs" />
                <div className="h-3 w-4/5 bg-[#6e523e]/20 rounded-xs" />
              </div>
              <div className="border-t border-[#8c6d46]/20 pt-2 flex justify-center">
                <div className="h-2 w-10 bg-[#8c6d46]/25 rounded-xs" />
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
