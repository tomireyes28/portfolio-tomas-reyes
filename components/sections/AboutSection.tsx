"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Film, Globe, BookOpen } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext"; // 1. Importar hook

export default function AboutSection() {
  const { t } = useLanguage(); // 2. Obtener textos

  return (
    <section
      id="about"
      className="border-t border-slate-800 bg-slate-950 py-24 px-4"
    >
      <div className="mx-auto max-w-6xl space-y-16">
        <h2 className="text-4xl font-extrabold text-white text-center tracking-tight">
          {t.about.title}
        </h2>

        <div className="grid gap-12 md:grid-cols-2 items-center">
          
          {/* COLUMNA IZQUIERDA — NARRATIVA PROFESIONAL */}
          <div className="space-y-6 text-slate-300 text-lg leading-relaxed text-left">
            
            <p>
              {t.about.p1.start} <span className="text-white font-bold">{t.about.p1.name}</span>
              {t.about.p1.mid} <span className="text-sky-400 font-semibold">{t.about.p1.highlight}</span> {t.about.p1.end}
            </p>

            <p className="text-base text-slate-400">
              {t.about.p2.text} <span className="text-slate-200 font-medium">{t.about.p2.brand}</span> {t.about.p2.end}
            </p>

            <p className="text-base text-slate-400 border-l-2 border-sky-500/50 pl-4 italic">
              {t.about.p3}
            </p>

            <p className="font-semibold text-slate-200 italic text-base">
              {t.about.p4.start} <span className="text-sky-400 font-bold">{t.about.p4.highlight}</span> {t.about.p4.end}
            </p>
            
            <div className="pt-4 text-left">
                <Link
                    href="#contact"
                    className="group inline-flex items-center gap-2 rounded-full border border-sky-400/50 px-8 py-3 text-sm font-bold text-sky-400 transition-all hover:bg-sky-400/10 hover:border-sky-400 hover:shadow-[0_0_20px_rgba(56,189,248,0.15)]"
                >
                    {t.about.cta}
                    <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                </Link>
            </div>
          </div>

          {/* COLUMNA DERECHA — FOTO Y HOBBIES ACTUALIZADOS */}
          <div className="flex flex-col items-center gap-10">
            <div className="relative group">
              <div className="absolute -inset-1 rounded-full bg-linear-to-r from-sky-500 to-blue-600 opacity-20 blur transition duration-1000 group-hover:opacity-40"></div>
              <div className="relative w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-slate-900 shadow-2xl transition-transform duration-500 group-hover:scale-[1.02]">
                <Image
                  src="/perfil.jpg" 
                  alt="Foto de perfil de Tomás Reyes"
                  fill
                  className="object-cover object-top"
                />
              </div>
            </div>
            
            <div className="w-full max-w-sm bg-slate-900/40 p-6 rounded-2xl border border-slate-800/60 shadow-inner">
                <p className="font-bold text-white mb-4 text-center border-b border-slate-800 pb-2 italic">
                    {t.about.hobbiesTitle}
                </p>
                <ul className="space-y-4 text-sm text-slate-300">
                    <li className="flex items-center gap-3">
                        <Film className="text-sky-400" size={20} />
                        <span>
                            {t.about.hobbies.cinema.text} <span className="text-white font-medium">{t.about.hobbies.cinema.highlight}</span> {t.about.hobbies.cinema.emoji}
                        </span>
                    </li>
                    <li className="flex items-center gap-3">
                        <Globe className="text-sky-400" size={20} />
                        <span>
                             {t.about.hobbies.culture.text} <span className="text-white font-medium">{t.about.hobbies.culture.highlight}</span> {t.about.hobbies.culture.end}
                        </span>
                    </li>
                    <li className="flex items-center gap-3">
                        <BookOpen className="text-sky-400" size={20} />
                        <span>
                            {t.about.hobbies.learning.text} <span className="text-white font-medium">{t.about.hobbies.learning.highlight}</span> {t.about.hobbies.learning.emoji}
                        </span>
                    </li>
                </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}