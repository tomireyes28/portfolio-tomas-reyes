"use client";

import { Github, Linkedin, ArrowUp, Code2, Heart } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative border-t border-slate-800/80 bg-slate-950/80 py-12 px-4 backdrop-blur-xl">
      <div className="mx-auto max-w-6xl space-y-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left">
          {/* Brand */}
          <div className="space-y-1">
            <Link
              href="#top"
              className="inline-flex items-center gap-2 text-base font-bold text-white hover:text-sky-300 transition"
            >
              <span className="flex h-6 w-6 items-center justify-center rounded-md bg-gradient-to-tr from-sky-400 to-indigo-600 text-[10px] font-black text-slate-950">
                TR
              </span>
              <span>Tomás Reyes</span>
            </Link>
            <p className="text-xs text-slate-400">
              {t.footer.role} &bull; &copy; {currentYear} {t.footer.rights}
            </p>
          </div>

          {/* Quick Navigation Links */}
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-xs font-medium text-slate-400">
            <a href="#projects" className="hover:text-sky-400 transition">
              {t.nav.projects}
            </a>
            <a href="#skills" className="hover:text-sky-400 transition">
              {t.nav.tech}
            </a>
            <a href="#story" className="hover:text-sky-400 transition">
              {t.nav.story}
            </a>
            <a href="#about" className="hover:text-sky-400 transition">
              {t.nav.about}
            </a>
            <a href="#contact" className="hover:text-sky-400 transition">
              {t.nav.contact}
            </a>
          </nav>

          {/* Right actions: Socials & Back to top */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/tomireyes28"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-800 bg-slate-900/80 text-slate-300 hover:border-sky-500/50 hover:text-sky-400 transition shadow-sm"
            >
              <Github size={16} />
            </a>

            <a
              href="https://www.linkedin.com/in/tomasreyes1/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-800 bg-slate-900/80 text-slate-300 hover:border-sky-500/50 hover:text-sky-400 transition shadow-sm"
            >
              <Linkedin size={16} />
            </a>

            <button
              onClick={scrollToTop}
              title={t.footer.backToTop}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-800 bg-slate-900/80 text-slate-400 hover:border-sky-400 hover:text-sky-400 transition shadow-sm cursor-pointer"
            >
              <ArrowUp size={16} />
            </button>
          </div>
        </div>

        {/* Sub-footer built-with tag */}
        <div className="border-t border-slate-800/60 pt-6 text-center text-[11px] text-slate-500 flex items-center justify-center gap-1.5">
          <Code2 size={13} className="text-slate-600" />
          <span>{t.footer.builtWith}</span>
        </div>
      </div>
    </footer>
  );
}