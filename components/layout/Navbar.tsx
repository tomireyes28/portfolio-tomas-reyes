"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import LanguageSwitch from "@/components/ui/LanguageSwitch";
import { FileDown, Menu, X, Sparkles } from "lucide-react";

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
        className={`flex w-full max-w-6xl items-center justify-between rounded-full border px-4 py-2.5 transition-all duration-300 md:px-6 ${
          isScrolled
            ? "border-slate-800/90 bg-slate-950/80 shadow-[0_8px_32px_rgba(0,0,0,0.6)] backdrop-blur-xl"
            : "border-slate-800/40 bg-slate-950/40 backdrop-blur-md"
        }`}
      >
        {/* Brand / Logo */}
        <a
          href="#top"
          className="group flex items-center gap-2 text-sm font-bold tracking-tight text-white transition hover:opacity-90 md:text-base"
        >
          <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-tr from-sky-500 to-indigo-600 text-xs font-black text-slate-950 shadow-md shadow-sky-500/20 group-hover:scale-105 transition-transform">
            TR
          </span>
          <span className="font-mono text-slate-200">
            tomas<span className="text-sky-400">.reyes</span>
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <ul className="hidden items-center gap-1 rounded-full border border-slate-800/60 bg-slate-900/40 px-3 py-1 text-sm md:flex">
          {links.map((link) => {
            const linkId = link.href.substring(1);
            const isActive = linkId === activeSection;

            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`relative rounded-full px-3.5 py-1.5 text-xs font-medium transition-all duration-200 ${
                    isActive
                      ? "text-sky-300"
                      : "text-slate-400 hover:text-slate-100 hover:bg-slate-800/40"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="navbar-active-pill"
                      className="absolute inset-0 -z-10 rounded-full bg-sky-500/10 border border-sky-500/30"
                      transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    />
                  )}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Right Actions: CV + Language Switch + Mobile Toggle */}
        <div className="flex items-center gap-3">
          {/* CV Button */}
          <a
            href="/projects/Tomas%20Reyes%20CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden items-center gap-1.5 rounded-full border border-sky-500/30 bg-sky-500/10 px-3.5 py-1.5 text-xs font-semibold text-sky-300 transition-all duration-300 hover:border-sky-400 hover:bg-sky-500/20 hover:shadow-[0_0_15px_rgba(56,189,248,0.25)] md:flex"
          >
            <FileDown size={14} />
            <span>CV</span>
          </a>

          {/* Language Switch */}
          <LanguageSwitch />

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Abrir menú"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-800 bg-slate-900 text-slate-300 hover:text-white md:hidden cursor-pointer"
          >
            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="absolute top-16 left-4 right-4 z-50 rounded-2xl border border-slate-800 bg-slate-950/95 p-5 shadow-2xl backdrop-blur-2xl md:hidden"
          >
            <ul className="flex flex-col gap-2">
              {links.map((link) => {
                const linkId = link.href.substring(1);
                const isActive = linkId === activeSection;

                return (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`block rounded-xl px-4 py-2.5 text-sm font-medium transition ${
                        isActive
                          ? "bg-sky-500/15 font-semibold text-sky-400 border border-sky-500/30"
                          : "text-slate-300 hover:bg-slate-900"
                      }`}
                    >
                      {link.label}
                    </a>
                  </li>
                );
              })}
              <li className="pt-2 border-t border-slate-800/80">
                <a
                  href="/projects/Tomas%20Reyes%20CV.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 rounded-xl bg-sky-500/20 py-2.5 text-sm font-semibold text-sky-300 border border-sky-500/30"
                >
                  <FileDown size={16} />
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