"use client";

export default function BackgroundGlow() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {/* Precision Architectural Grid */}
      <div className="absolute inset-0 tech-grid-pattern opacity-60" />

      {/* Radial vignette to fade out grid towards edges */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(212,255,0,0.06),rgba(8,8,8,0.95)_70%)]" />

      {/* Subtle top horizontal rule / line of light */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#d4ff00]/25 to-transparent" />

      {/* Industrial corner crosshair markers */}
      <div className="absolute top-6 left-6 font-mono text-[10px] text-zinc-700 select-none hidden lg:block">
        + 00.1 / LAT.DEV
      </div>
      <div className="absolute top-6 right-6 font-mono text-[10px] text-zinc-700 select-none hidden lg:block">
        SYS.ONLINE / 2026 +
      </div>
    </div>
  );
}
