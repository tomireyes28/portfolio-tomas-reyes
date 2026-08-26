"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Film, Globe, BookOpen, User, Sparkles } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import SpotlightCard from "@/components/ui/SpotlightCard";

export default function AboutSection() {
  const { t } = useLanguage();

  return (
    <section id="about" className="relative py-14 md:py-20 px-4">
      <div className="mx-auto max-w-6xl space-y-10">
        {/* Header */}
        <div className="text-center space-y-3 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-500/30 bg-sky-500/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-sky-400">
            <User size={13} />
            <span>{t.about.badge}</span>
          </div>

          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl md:text-5xl">
            {t.about.title}
          </h2>
        </div>

        <div className="grid gap-6 lg:grid-cols-12 items-stretch">
          {/* Column 1: Profile card with photo & hobbies (5 cols) */}
          <SpotlightCard className="lg:col-span-5 p-6 sm:p-8">
            <div className="flex flex-col items-center text-center space-y-5">
              {/* Perfectly centered profile photo with symmetrical glowing ring */}
              <div className="relative mx-auto my-1">
                <div className="relative h-44 w-44 rounded-full p-1 bg-gradient-to-tr from-sky-400 via-indigo-500 to-cyan-400 shadow-lg shadow-sky-500/20">
                  <div className="relative h-full w-full overflow-hidden rounded-full border-2 border-slate-950 bg-slate-900">
                    <Image
                      src="/perfil.jpg"
                      alt="Tomás Reyes"
                      fill
                      sizes="176px"
                      className="object-cover object-top"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-1 text-center">
                <h3 className="text-2xl font-bold text-white">Tomás Reyes</h3>
                <p className="text-xs sm:text-sm font-mono text-sky-400 font-medium">
                  Full Stack Software Developer
                </p>
              </div>

              {/* Hobbies box */}
              <div className="w-full rounded-2xl border border-slate-800/80 bg-slate-950/70 p-4 text-left space-y-3">
                <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400">
                  {t.about.hobbiesTitle}
                </p>
                <ul className="space-y-2.5 text-xs text-slate-300">
                  <li className="flex items-center gap-2.5">
                    <Film size={15} className="text-sky-400 shrink-0" />
                    <span>{t.about.hobbies.cinema.text} {t.about.hobbies.cinema.emoji}</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <Globe size={15} className="text-indigo-400 shrink-0" />
                    <span>{t.about.hobbies.culture.text} {t.about.hobbies.culture.emoji}</span>
                  </li>
                  <li className="flex items-center gap-2.5">
                    <BookOpen size={15} className="text-cyan-400 shrink-0" />
                    <span>{t.about.hobbies.learning.text} {t.about.hobbies.learning.emoji}</span>
                  </li>
                </ul>
              </div>
            </div>
          </SpotlightCard>

          {/* Column 2: Bio & Vision (7 cols) */}
          <SpotlightCard className="lg:col-span-7 p-6 sm:p-8">
            <div className="flex flex-col justify-between h-full space-y-6">
              <div className="space-y-4 text-slate-300 leading-relaxed text-sm sm:text-base">
                <p>{t.about.p1}</p>
                <p className="text-slate-400 text-sm sm:text-base">{t.about.p2}</p>

                <div className="rounded-2xl border border-slate-800 bg-slate-950/70 p-4 sm:p-5 space-y-3">
                  <h4 className="text-xs sm:text-sm font-bold text-white flex items-center gap-2">
                    <Sparkles size={15} className="text-sky-400" />
                    <span>Stack Principal & Especialidad</span>
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-400 font-mono">
                    <div>
                      <span className="text-slate-200 font-semibold block">Frontend:</span>
                      React 19, Next.js 16, TypeScript, Tailwind
                    </div>
                    <div>
                      <span className="text-slate-200 font-semibold block">Backend:</span>
                      NestJS, Node.js, Express, REST APIs
                    </div>
                    <div>
                      <span className="text-slate-200 font-semibold block">Databases:</span>
                      PostgreSQL, Prisma, MongoDB
                    </div>
                    <div>
                      <span className="text-slate-200 font-semibold block">Formación:</span>
                      Tecnicatura en Programación (Teclab)
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  href="#contact"
                  className="group inline-flex items-center gap-2 rounded-full border border-sky-500/40 bg-sky-500/10 px-6 py-2.5 text-xs sm:text-sm font-bold text-sky-300 transition-all duration-300 hover:bg-sky-500/20 hover:border-sky-400 hover:shadow-[0_0_20px_rgba(56,189,248,0.2)]"
                >
                  <span>{t.about.cta}</span>
                  <ArrowRight
                    size={15}
                    className="transition-transform group-hover:translate-x-1"
                  />
                </Link>
              </div>
            </div>
          </SpotlightCard>
        </div>
      </div>
    </section>
  );
}