"use client"; 

import Image from "next/image";
import { skills } from "@/src/skills";
import { Skill } from "@/types/Skill";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext"; // 1. Importar hook

const frontend = skills.filter((s: Skill) => s.category === "frontend");
const backend = skills.filter((s: Skill) => s.category === "backend");
const tools = skills.filter((s: Skill) => s.category === "tools");

// El SkillCard no cambia, ya que los nombres "React", "Git", etc. son universales
const SkillCard = ({ skill }: { skill: Skill }) => (
    <motion.div
        key={skill.name}
        className="flex w-24 flex-col items-center gap-2 rounded-xl bg-slate-900/60 p-3 shadow-md border border-slate-800"
        whileHover={{ 
            scale: 1.05, 
            y: -5, 
            boxShadow: "0 10px 15px rgba(56, 189, 248, 0.2)" 
        }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
        <Image
            src={skill.icon}
            alt={skill.name}
            width={40}
            height={40}
            className="h-10 w-10 object-contain" 
        />
        <span className="text-xs text-center font-medium text-slate-200">
            {skill.name}
        </span>
    </motion.div>
);

export default function SkillsSection() {
  const { t } = useLanguage(); // 2. Obtener textos

  return (
    <section
      id="skills"
      className="border-t border-slate-800 bg-slate-950 py-20 px-4"
    >
      <div className="mx-auto max-w-6xl space-y-12">
        <header className="space-y-4 text-center">
          <h2 className="text-4xl font-extrabold text-white">
            {t.skills.title}
          </h2>
          <p className="max-w-3xl mx-auto text-base text-slate-400 leading-relaxed">
            {/* Construcción de la frase dinámica */}
            {t.skills.descPart1}{" "}
            <span className="text-sky-400 font-semibold">React/Next.js</span>{" "}
            {t.skills.connector}{" "}
            <span className="text-sky-400 font-semibold"> Node/NestJS</span>
            {t.skills.descPart2}
          </p>
        </header>

        <div className="grid gap-12 md:grid-cols-3">
          
          {/* FRONTEND */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="mb-6 text-xl font-bold text-sky-400 border-b-2 border-sky-500/30 pb-1 inline-block">
              {t.skills.frontend}
            </h3>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              {frontend.map((skill: Skill) => (
                <SkillCard key={skill.name} skill={skill} />
              ))}
            </div>
          </div>

          {/* BACKEND */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="mb-6 text-xl font-bold text-sky-400 border-b-2 border-sky-500/30 pb-1 inline-block">
              {t.skills.backend}
            </h3>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              {backend.map((skill: Skill) => (
                <SkillCard key={skill.name} skill={skill} />
              ))}
            </div>
          </div>

          {/* TOOLS */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="mb-6 text-xl font-bold text-sky-400 border-b-2 border-sky-500/30 pb-1 inline-block">
              {t.skills.tools}
            </h3>
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              {tools.map((skill: Skill) => (
                <SkillCard key={skill.name} skill={skill} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}