"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import {
  Users,
  Target,
  Zap,
  RefreshCw,
  ShieldCheck,
  TrendingUp,
  Sparkles,
  Award,
  Compass,
} from "lucide-react";
import SpotlightCard from "@/components/ui/SpotlightCard";

const iconMap = {
  team: Users,
  product: Target,
  problem: Zap,
  adapt: RefreshCw,
  owner: ShieldCheck,
  learn: TrendingUp,
};

export default function SoftSkillsSection() {
  const { t } = useLanguage();

  return (
    <section id="story" className="relative py-14 md:py-20 px-4">
      <div className="mx-auto max-w-6xl space-y-10">
        {/* Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-500/30 bg-sky-500/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-sky-400">
            <Compass size={13} />
            <span>{t.story.badge}</span>
          </div>

          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
            {t.story.title}
          </h2>

          <p className="text-base text-sky-300 font-medium sm:text-lg">
            {t.story.subtitle}
          </p>
        </div>

        {/* Narrative & Value Cards */}
        <div className="grid gap-6 md:grid-cols-3">
          {/* Card 1: Fundador Zonasyc */}
          <SpotlightCard className="p-6 md:p-8 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-sky-500/10 border border-sky-500/30 text-sky-400">
                <Target size={22} />
              </div>
              <h3 className="text-xl font-bold text-white">
                Liderazgo de Producto & Fundador
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                {t.story.narrative1}
              </p>
            </div>
          </SpotlightCard>

          {/* Card 2: Periodismo y Comunicación */}
          <SpotlightCard className="p-6 md:p-8 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-500/10 border border-indigo-500/30 text-indigo-400">
                <Users size={22} />
              </div>
              <h3 className="text-xl font-bold text-white">
                Comunicación & UX Estratégica
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                {t.story.narrative2}
              </p>
            </div>
          </SpotlightCard>

          {/* Card 3: Arquitectura Técnica */}
          <SpotlightCard className="p-6 md:p-8 flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-500/10 border border-cyan-500/30 text-cyan-400">
                <Award size={22} />
              </div>
              <h3 className="text-xl font-bold text-white">
                Ingeniería Full Stack Robusta
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed">
                {t.story.narrative3}
              </p>
            </div>
          </SpotlightCard>
        </div>

        {/* Soft Skills Interactive Grid */}
        <div className="space-y-6">
          <h3 className="text-xl font-bold text-white text-center">
            {t.story.softSkillsTitle}
          </h3>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {t.story.items.map((item) => {
              const Icon = iconMap[item.id as keyof typeof iconMap] || Users;

              return (
                <SpotlightCard
                  key={item.id}
                  className="p-5 border-slate-800/70 bg-slate-900/40 transition-all hover:border-sky-500/30"
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-950 border border-slate-800 text-sky-400">
                      <Icon size={18} />
                    </div>
                    <div className="space-y-1">
                      <h4 className="text-sm font-bold text-white">
                        {item.name}
                      </h4>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </SpotlightCard>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}