"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import LanguageSwitch from "@/components/ui/LanguageSwitch";
import { FileDown, Menu, X, Terminal } from "lucide-react";

export default function Navbar() {
  const { t } = useLanguage();
  const [activeSection, setActiveSection] = useState("top");
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const links = [
    { href: "#projects", label: t.nav.projects },
    { href: "#skills", label: t.nav.tech },
    { href: "#story", label: t.nav.story },
    { href: "#about", label: t.nav.about },
    { href: "#contact", label: t.nav.contact },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ["contact", "about", "story", "skills", "projects"];
      const scrollPosition = window.scrollY + 200;

      let found = "top";
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            found = sectionId;
            break;
          }
        }
      }

      if (window.scrollY < 120) {
        found = "top";
      }

      setActiveSection(found);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-3 transition-all duration-300">
      <nav
        className={`flex w-full max-w-6xl items-center justify-between rounded-xl border px-4 py-2.5 transition-all duration-300 md:px-5 ${
          isScrolled
            ? "border-[#27272a] bg-[#0c0c0e]/90 shadow-[0_10px_30px_rgba(0,0,0,0.8)] backdrop-blur-xl"
            : "border-[#1e1e22] bg-[#0c0c0e]/60 backdrop-blur-md"
        }`}
      >
        {/* Brand / Logo */}
        <a
          href="#top"
          className="group flex items-center gap-2.5 text-sm font-semibold tracking-tight text-white transition hover:opacity-90"
        >
          <span className="flex h-6 items-center justify-center rounded bg-[#d4ff00] px-1.5 font-mono text-[11px] font-black text-black shadow-sm group-hover:scale-105 transition-transform">
            TR
          </span>
          <span className="font-mono text-xs tracking-tight text-zinc-200">
            tomas<span className="text-[#d4ff00]">.reyes</span>
          </span>
          <span className="hidden sm:inline-flex items-center gap-1.5 rounded-full border border-zinc-800 bg-zinc-900/60 px-2 py-0.5 font-mono text-[10px] text-zinc-400">
            <span className="h-1.5 w-1.5 rounded-full bg-[#d4ff00] animate-pulse" />
            v2.6
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <ul className="hidden items-center gap-1 rounded-lg border border-[#222226] bg-[#121215]/80 p-1 text-sm md:flex">
          {links.map((link) => {
            const linkId = link.href.substring(1);
            const isActive = linkId === activeSection;

            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`relative rounded-md px-3.5 py-1.5 font-mono text-xs font-medium transition-all duration-150 ${
                    isActive
                      ? "text-[#d4ff00]"
                      : "text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/40"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="navbar-active-pill"
                      className="absolute inset-0 -z-10 rounded-md border border-[#d4ff00]/30 bg-[#d4ff00]/10"
                      transition={{ type: "spring", stiffness: 450, damping: 32 }}
                    />
                  )}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Right Actions: CV + Language Switch + Mobile Toggle */}
        <div className="flex items-center gap-2.5">
          {/* CV Button */}
          <a
            href="/projects/Tomas%20Reyes%20CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-1.5 rounded-lg border border-[#27272a] bg-[#121215] px-3.5 py-1.5 font-mono text-xs font-semibold text-zinc-200 transition-all duration-200 hover:border-[#d4ff00] hover:text-[#d4ff00] md:flex"
          >
            <FileDown size={13} className="text-[#d4ff00]" />
            <span>CV</span>
          </a>

          {/* Language Switch */}
          <LanguageSwitch />

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Abrir menú"
            className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#27272a] bg-[#121215] text-zinc-300 hover:text-white md:hidden cursor-pointer"
          >
            {mobileMenuOpen ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -15, scale: 0.98 }}
            transition={{ duration: 0.15 }}
            className="absolute top-16 left-4 right-4 z-50 rounded-xl border border-[#27272a] bg-[#0c0c0e]/95 p-4 shadow-2xl backdrop-blur-2xl md:hidden"
          >
            <ul className="flex flex-col gap-1.5">
              {links.map((link) => {
                const linkId = link.href.substring(1);
                const isActive = linkId === activeSection;

                return (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`block rounded-lg px-3.5 py-2 font-mono text-xs transition ${
                        isActive
                          ? "bg-[#d4ff00]/15 font-semibold text-[#d4ff00] border border-[#d4ff00]/30"
                          : "text-zinc-300 hover:bg-zinc-900"
                      }`}
                    >
                      {link.label}
                    </a>
                  </li>
                );
              })}
              <li className="pt-2 border-t border-[#222226]">
                <a
                  href="/projects/Tomas%20Reyes%20CV.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 rounded-lg bg-[#151518] border border-[#27272a] py-2 font-mono text-xs font-semibold text-[#d4ff00]"
                >
                  <FileDown size={14} />
                  <span>{t.nav.cv}</span>
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}