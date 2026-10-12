"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Database, Server, Code, Send, ArrowLeftRight, Terminal } from "lucide-react";

interface TechBadgeProps {
  name: string;
  showLabel?: boolean; // If true, shows icon + text; if false, shows icon with floating tooltip
}

export function TechIcon({ name, className = "w-4 h-4" }: { name: string; className?: string }) {
  const n = name.trim().toLowerCase();

  // 1. Files in public/icons
  if (n === "react") return <img src="/icons/react.svg" alt={name} className={`${className} object-contain`} />;
  if (n === "next.js" || n === "nextjs") return <img src="/icons/nextjs.svg" alt={name} className={`${className} object-contain`} />;
  if (n === "typescript" || n === "ts") return <img src="/icons/typescript.svg" alt={name} className={`${className} object-contain`} />;
  if (n === "javascript" || n === "js") return <img src="/icons/javascript.svg" alt={name} className={`${className} object-contain`} />;
  if (n.includes("tailwind")) return <img src="/icons/tailwindcss.svg" alt={name} className={`${className} object-contain`} />;
  if (n === "nodejs" || n === "node.js") return <img src="/icons/nodejs.svg" alt={name} className={`${className} object-contain`} />;
  if (n === "nestjs") return <img src="/icons/nestjs.svg" alt={name} className={`${className} object-contain`} />;
  if (n === "express") return <img src="/icons/express.svg" alt={name} className={`${className} object-contain`} />;
  if (n.includes("postgres")) return <img src="/icons/postgressql.svg" alt={name} className={`${className} object-contain`} />;
  if (n.includes("mongo")) return <img src="/icons/mongodb.svg" alt={name} className={`${className} object-contain`} />;
  if (n === "git") return <img src="/icons/git.svg" alt={name} className={`${className} object-contain`} />;
  if (n === "github" || n === "github actions") return <img src="/icons/github.svg" alt={name} className={`${className} object-contain`} />;
  if (n === "vercel") return <img src="/icons/vercel.svg" alt={name} className={`${className} object-contain`} />;
  if (n === "postman") return <img src="/icons/postman.svg" alt={name} className={`${className} object-contain`} />;
  if (n === "make") return <img src="/icons/make.svg" alt={name} className={`${className} object-contain`} />;
  if (n === "n8n") return <img src="/icons/n8n.svg" alt={name} className={`${className} object-contain`} />;

  // 2. High fidelity inline vector icons
  if (n.includes("framer")) {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" className={`${className} text-[#0055ff]`}>
        <path d="M4 0h16v8h-8zM4 8h8l8 8H4zM4 16h8v8z" />
      </svg>
    );
  }
  if (n.includes("prisma")) {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" className={`${className} text-[#2d3748]`}>
        <path d="M12.784 1.258a1.5 1.5 0 0 0-1.745.093l-8.5 6.5A1.5 1.5 0 0 0 2 9.043v10.457a1.5 1.5 0 0 0 1.5 1.5h17a1.5 1.5 0 0 0 1.5-1.5V9.043a1.5 1.5 0 0 0-.539-1.192l-8.677-6.593zm-1.077 2.45L19 9.387V19H5V9.387l7.293-5.58a.5.5 0 0 1 .414-.099z" />
        <path d="M8 11l4-5 4 5-4 6z" />
      </svg>
    );
  }
  if (n.includes("supabase")) {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" className={`${className} text-[#3ecf8e]`}>
        <path d="M21.362 9.354H12V.3a.3.3 0 0 0-.517-.207L.638 12.046a.3.3 0 0 0 .207.518H12v9.054a.3.3 0 0 0 .517.207l10.845-11.953a.3.3 0 0 0-.207-.518z" />
      </svg>
    );
  }
  if (n.includes("docker")) {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" className={`${className} text-[#1d63ed]`}>
        <path d="M13.983 11.078h2.119a.186.186 0 0 0 .186-.185V9.006a.186.186 0 0 0-.186-.186h-2.119a.185.185 0 0 0-.185.185v1.888c0 .102.083.185.185.185m-2.954-5.43h2.118a.186.186 0 0 0 .186-.186V3.574a.186.186 0 0 0-.186-.185h-2.118a.185.185 0 0 0-.185.185v1.888c0 .102.082.186.185.186m0 2.716h2.118a.187.187 0 0 0 .186-.186V6.29a.186.186 0 0 0-.186-.185h-2.118a.185.185 0 0 0-.185.185v1.887c0 .102.082.186.185.186m-2.954 0h2.119a.186.186 0 0 0 .185-.186V6.29a.185.185 0 0 0-.185-.185H8.075a.185.185 0 0 0-.185.185v1.887c0 .102.083.186.185.186m-2.955 0h2.119a.186.186 0 0 0 .185-.186V6.29a.185.185 0 0 0-.185-.185H5.12a.185.185 0 0 0-.185.185v1.887c0 .102.083.186.185.186m5.91 2.714h2.118a.186.186 0 0 0 .186-.185V9.006a.186.186 0 0 0-.186-.186h-2.118a.185.185 0 0 0-.185.185v1.888c0 .102.082.185.185.185m-2.956 0h2.119a.186.186 0 0 0 .185-.185V9.006a.185.185 0 0 0-.185-.186H8.075a.185.185 0 0 0-.185.185v1.888c0 .102.083.185.185.185m-2.954 0h2.119a.186.186 0 0 0 .185-.185V9.006a.185.185 0 0 0-.185-.186H5.12a.185.185 0 0 0-.185.185v1.888c0 .102.083.185.185.185m-2.955 0h2.119a.185.185 0 0 0 .185-.185V9.006a.185.185 0 0 0-.185-.186H2.165a.185.185 0 0 0-.185.185v1.888c0 .102.083.185.185.185m21.808 1.482c-.397-.265-1.428-.403-2.316-.098-.18.062-.358.143-.532.24-.266-.867-.887-1.378-1.597-1.378-.458 0-.911.206-1.282.593l-.326.34-.143-.453A3.6 3.6 0 0 0 13.9 8.01H1.979a.98.98 0 0 0-.98.98v4.22c0 2.21 1.05 4.31 2.88 5.76C5.92 20.61 8.87 21.6 12 21.6c6.26 0 11.2-4.14 11.97-10.02.06-.48.06-.97 0-1.46z" />
      </svg>
    );
  }
  if (n.includes("shadcn")) {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className={`${className} text-[#22140c]`}>
        <path d="M4 4l16 16M4 20L20 4" />
      </svg>
    );
  }
  if (n.includes("meta")) {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" className={`${className} text-[#0081fb]`}>
        <path d="M12 7.23c-2.37 0-4.35 1.57-5.4 3.73-.85-1.63-2.29-2.73-4.1-2.73C1.12 8.23 0 9.49 0 11.83c0 3.32 2.7 6.17 6.47 6.17 2.45 0 4.49-1.63 5.53-3.88.9 1.76 2.37 2.88 4.28 2.88 3.38 0 5.72-2.85 5.72-6.17 0-2.34-1.12-3.6-2.5-3.6-1.81 0-3.25 1.1-4.1 2.73-1.05-2.16-3.03-3.73-5.4-3.73z" />
      </svg>
    );
  }
  if (n.includes("twitter") || n === "x") {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" className={`${className} text-[#111]`}>
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    );
  }
  if (n.includes("typeorm")) {
    return <Database className={`${className} text-[#e83528]`} />;
  }
  if (n.includes("railway")) {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" className={`${className} text-[#b42b6b]`}>
        <path d="M2.5 12a9.5 9.5 0 1 1 19 0 9.5 9.5 0 0 1-19 0z" />
      </svg>
    );
  }
  if (n.includes("puppeteer")) {
    return (
      <svg viewBox="0 0 24 24" fill="currentColor" className={`${className} text-[#00d8a2]`}>
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 14h-2v-2h2v2zm0-4h-2V7h2v5z" />
      </svg>
    );
  }
  if (n.includes("axios")) {
    return <ArrowLeftRight className={`${className} text-[#5a29e4]`} />;
  }
  if (n.includes("web3forms")) {
    return <Send className={`${className} text-[#2b583c]`} />;
  }
  if (n.includes("hostinger")) {
    return <Server className={`${className} text-[#673ab7]`} />;
  }
  if (n === "html" || n === "html5") {
    return <Code className={`${className} text-[#e44d26]`} />;
  }
  if (n === "css" || n === "css3") {
    return <Code className={`${className} text-[#264de4]`} />;
  }

  // Fallback icon
  return <Terminal className={`${className} text-[#8c6d46]`} />;
}

export default function TechBadge({ name, showLabel = true }: TechBadgeProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="relative inline-block">
      <motion.div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        whileHover={{ y: -1.5, scale: 1.04 }}
        whileTap={{ scale: 0.96 }}
        className={`inline-flex items-center gap-1.5 rounded-xs border border-[#8c6d46]/50 bg-[#e0d2b8] hover:bg-[#d8c7a8] transition-colors cursor-default select-none shadow-2xs ${
          showLabel ? "px-2.5 py-1" : "p-2"
        }`}
      >
        <TechIcon name={name} className={showLabel ? "w-3.5 h-3.5" : "w-5 h-5"} />
        {showLabel && (
          <span className="font-typewriter text-xs font-bold text-[#25160e] tracking-tight">
            {name}
          </span>
        )}
      </motion.div>

      {/* Floating tooltip when in icon-only mode OR on hover */}
      <AnimatePresence>
        {(!showLabel && isHovered) && (
          <motion.div
            initial={{ opacity: 0, y: 6, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 4, scale: 0.92 }}
            transition={{ duration: 0.12 }}
            className="pointer-events-none absolute -bottom-9 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center"
          >
            <div className="w-2 h-2 rotate-45 -mb-1 bg-[#22140c]" />
            <div className="bg-[#22140c] text-[#f5ebd6] px-2.5 py-1 rounded-xs shadow-lg border border-[#8c6d46]/60 whitespace-nowrap">
              <span className="font-typewriter text-[11px] font-bold tracking-wide">
                {name}
              </span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
