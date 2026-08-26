"use client";

import Image from "next/image";
import { skills } from "@/src/skills";
import { Skill } from "@/types/Skill";
import { useLanguage } from "@/context/LanguageContext";
import { motion } from "framer-motion";
import { Cpu, Layout, Server, Database, Wrench, Sparkles } from "lucide-react";
import SpotlightCard from "@/components/ui/SpotlightCard";

interface SkillPillProps {
  skill: Skill;
}

const SkillPill = ({ skill }: SkillPillProps) => (
  <motion.div
    whileHover={{ scale: 1.05, y: -2 }}
    whileTap={{ scale: 0.98 }}
    className={`flex items-center gap-2.5 rounded-xl border px-3.5 py-2 transition-all duration-200 cursor-default ${
      skill.highlight
        ? "border-slate-700/80 bg-slate-900/80 hover:border-sky-500/50 hover:bg-slate-800/80 hover:shadow-[0_0_15px_rgba(56,189,248,0.12)]"
        : "border-slate-800/60 bg-slate-950/60 hover:border-slate-700 hover:bg-slate-900/60"
    }`}
  >
    <div className="relative h-5 w-5 shrink-0">
      <Image
        src={skill.icon}
        alt={skill.name}
        fill
        className="object-contain"
      />
    </div>
    <span className="text-xs sm:text-sm font-medium text-slate-200">
      {skill.name}
    </span>
    {skill.highlight && (
      <span className="flex h-1.5 w-1.5 rounded-full bg-sky-400" />
    )}
  </motion.div>
);

export default function SkillsSection() {
  const { t } = useLanguage();

  const frontend = skills.filter((s) => s.category === "frontend");
  const backend = skills.filter((s) => s.category === "backend");
  const databases = skills.filter((s) => s.category === "databases");
  const tools = skills.filter((s) => s.category === "tools");

  return (
    <section id="skills" className="relative py-14 md:py-20 px-4">
      <div className="mx-auto max-w-6xl space-y-10">
        {/* Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-500/30 bg-sky-500/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-sky-400">
            <Cpu size={13} />
            <span>{t.skills.badge}</span>
          </div>

          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
            {t.skills.title}
          </h2>

          <p className="text-base text-slate-400 sm:text-lg leading-relaxed">
            {t.skills.description}
          </p>
        </div>

        {/* Bento Grid layout for Skills */}
        <div className="grid gap-6 md:grid-cols-2">
          {/* Frontend Bento Card */}
          <SpotlightCard className="p-6 md:p-8">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-sky-500/10 border border-sky-500/30 text-sky-400">
                  <Layout size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">
                    {t.skills.frontend}
                  </h3>
                  <p className="text-xs text-slate-400 font-mono">
                    React 19, Next.js 16, TypeScript, Responsive UI
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2.5">
                {frontend.map((skill) => (
                  <SkillPill key={skill.name} skill={skill} />
                ))}
              </div>
            </div>
          </SpotlightCard>

          {/* Backend Bento Card */}
          <SpotlightCard className="p-6 md:p-8">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-500/10 border border-indigo-500/30 text-indigo-400">
                  <Server size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">
                    {t.skills.backend}
                  </h3>
                  <p className="text-xs text-slate-400 font-mono">
                    NestJS, Node.js, Express, REST APIs
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2.5">
                {backend.map((skill) => (
                  <SkillPill key={skill.name} skill={skill} />
                ))}
              </div>
            </div>
          </SpotlightCard>

          {/* Databases Bento Card */}
          <SpotlightCard className="p-6 md:p-8">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400">
                  <Database size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">
                    {t.skills.databases}
                  </h3>
                  <p className="text-xs text-slate-400 font-mono">
                    PostgreSQL, Prisma, MongoDB, TypeORM
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2.5">
                {databases.map((skill) => (
                  <SkillPill key={skill.name} skill={skill} />
                ))}
              </div>
            </div>
          </SpotlightCard>

          {/* Tools & DevOps Bento Card */}
          <SpotlightCard className="p-6 md:p-8">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500/10 border border-amber-500/30 text-amber-400">
                  <Wrench size={20} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">
                    {t.skills.tools}
                  </h3>
                  <p className="text-xs text-slate-400 font-mono">
                    Git, Vercel, Postman, CI/CD Actions
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2.5">
                {tools.map((skill) => (
                  <SkillPill key={skill.name} skill={skill} />
                ))}
              </div>
            </div>
          </SpotlightCard>
        </div>

        {/* Bottom Banner */}
        <div className="rounded-2xl border border-slate-800/80 bg-slate-900/40 p-4 text-center text-xs text-slate-400 flex items-center justify-center gap-2">
          <Sparkles size={14} className="text-sky-400" />
          <span>{t.skills.learningBadge}</span>
        </div>
      </div>
    </section>
  );
}