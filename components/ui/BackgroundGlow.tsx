"use client";

import { motion } from "framer-motion";

export default function BackgroundGlow() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {/* Subtle Grid Overlay */}
      <div className="absolute inset-0 tech-grid-pattern opacity-40" />

      {/* Top Ambient Glow - Soft Sky */}
      <motion.div
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-40 left-1/2 h-[550px] w-[550px] -translate-x-1/2 rounded-full bg-sky-500/15 blur-[140px] md:h-[750px] md:w-[750px]"
      />

      {/* Center Subtle Indigo Ambient Glow */}
      <motion.div
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.08, 0.16, 0.08],
        }}
        transition={{
          duration: 16,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[600px] rounded-full bg-indigo-500/10 blur-[160px]"
      />

      {/* Bottom Ambient Glow */}
      <div className="absolute -bottom-40 left-1/2 -translate-x-1/2 h-[500px] w-[600px] rounded-full bg-blue-600/10 blur-[150px]" />
    </div>
  );
}
