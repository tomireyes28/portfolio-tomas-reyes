"use client";

import React from "react";

export default function BookSpine() {
  return (
    <div className="relative z-20 hidden md:flex flex-col items-center justify-between w-9 lg:w-11 h-full select-none shrink-0">
      {/* Main Leather Spine Cylinder */}
      <div
        className="w-full h-full relative flex flex-col items-center justify-between py-6"
        style={{
          background:
            "linear-gradient(90deg, #1b0f08 0%, #3d2516 25%, #523320 50%, #3d2516 75%, #1b0f08 100%)",
          boxShadow:
            "inset 0 4px 12px rgba(0,0,0,0.7), inset 0 -4px 12px rgba(0,0,0,0.7), 0 0 18px rgba(0,0,0,0.65)",
        }}
      >
        {/* Left & Right Stitched Seams */}
        <div className="absolute inset-y-3 left-1.5 border-l border-dashed border-[#c89d45]/35 pointer-events-none" />
        <div className="absolute inset-y-3 right-1.5 border-r border-dashed border-[#c89d45]/35 pointer-events-none" />

        {/* Raised Spine Ribs (Nervios del lomo) */}
        {[0, 1, 2, 3, 4].map((rib) => (
          <div
            key={rib}
            className="w-full h-2.5 rounded-xs"
            style={{
              background:
                "linear-gradient(180deg, rgba(15,8,4,0.8) 0%, #633e27 45%, #c89d45 50%, #3b2214 85%, rgba(15,8,4,0.9) 100%)",
              boxShadow: "0 2px 4px rgba(0,0,0,0.6)",
            }}
          />
        ))}

        {/* Center Brass Emblem */}
        <div className="my-auto flex flex-col items-center gap-1 opacity-75">
          <div className="w-3.5 h-3.5 rounded-full border border-[#c89d45]/70 bg-[#2a180d] flex items-center justify-center shadow-inner">
            <div className="w-1.5 h-1.5 rounded-full bg-[#c89d45]" />
          </div>
        </div>
      </div>

      {/* Hanging Red & Gold Cloth Bookmark Ribbon */}
      <div
        className="absolute -bottom-5 left-1/2 -translate-x-1/2 w-3.5 h-10 z-30 pointer-events-none transition-transform duration-500"
        style={{
          background:
            "linear-gradient(90deg, #5e161c 0%, #8c242d 50%, #5e161c 100%)",
          clipPath: "polygon(0 0, 100% 0, 100% 100%, 50% 78%, 0 100%)",
          boxShadow: "0 4px 8px rgba(0,0,0,0.5)",
        }}
      >
        <div className="w-full h-0.5 bg-[#c89d45]/60 mt-1" />
      </div>
    </div>
  );
}
