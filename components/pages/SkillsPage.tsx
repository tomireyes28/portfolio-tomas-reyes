"use client";

import Image from "next/image";
import { skills } from "@/src/skills";
import type { Skill } from "@/types/Skill";
import { useLanguage } from "@/context/LanguageContext";

function BigLogo({ skill, rotation }: { skill: Skill; rotation: number }) {
  return <div className="skill-sticker">
    <div className="skill-logo-size" style={{ transform: `rotate(${rotation}deg)` }}>
      {skill.icon ? <Image src={skill.icon} alt="" width={72} height={72} className="w-full h-full object-contain" />
        : <span className="skill-text-mark" aria-hidden="true">{skill.name.slice(0, 2)}</span>}
    </div>
    <span className="skill-label">{skill.name}</span>
  </div>;
}

export function SkillsLeftPage() {
  const { t } = useLanguage();

  const frontendSkills = skills.filter((s) => s.category === "frontend");
  const backendSkills = skills.filter((s) => s.category === "backend");

  const frontendRotations = [-3, 2.5, -2, 3.5, -3, 3, -1.5];
  const backendRotations = [3, -3.5, 2.5];

  return (
    <div className="flex flex-col h-full py-1">
      {/* Editorial Header Left */}
      <div className="border-b border-[#8c6d46]/25 pb-2">
        <h2 className="font-serif-book text-xl lg:text-2xl font-bold text-[#22140c]">
          {t.skills.title}
        </h2>
      </div>

      {/* Sections with balanced midpoint spacing */}
      <div className="flex flex-col gap-7 sm:gap-8 mt-3.5 sm:mt-4.5">
        {/* Section 1: Frontend */}
        <div className="space-y-1.5">
          <div className="flex items-center gap-2">
            <h3 className="font-serif-book text-sm sm:text-base font-bold italic text-[#265538]">
              {t.skills.frontend}
            </h3>
            <div className="h-px flex-1 bg-gradient-to-r from-[#265538]/30 to-transparent" />
          </div>

          <div className="skill-logo-grid">
            {frontendSkills.map((sk, idx) => (
              <BigLogo
                key={sk.name}
                skill={sk}
                rotation={frontendRotations[idx % frontendRotations.length]}
              />
            ))}
          </div>
        </div>

        {/* Section 2: Backend */}
        <div className="space-y-1.5">
          <div className="flex items-center gap-2">
            <h3 className="font-serif-book text-sm sm:text-base font-bold italic text-[#882b2b]">
              {t.skills.backend}
            </h3>
            <div className="h-px flex-1 bg-gradient-to-r from-[#882b2b]/30 to-transparent" />
          </div>

          <div className="skill-logo-grid">
            {backendSkills.map((sk, idx) => (
              <BigLogo
                key={sk.name}
                skill={sk}
                rotation={backendRotations[idx % backendRotations.length]}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function SkillsRightPage() {
  const { language, t } = useLanguage();
  const isEs = language === "es";
  const dbSkills = skills.filter((s) => s.category === "databases");
  const toolSkills = skills.filter((s) => s.category === "tools");

  const dbRotations = [-3, 3.5, -2.5, 3];
  const toolRotations = [-3, 3, -2.5, 3.5, -3, 2.5, -2];

  return (
    <div className="flex flex-col h-full py-1">
      {/* Editorial Header Right - Perfectly mirrors left page */}
      <div className="border-b border-[#8c6d46]/25 pb-2">
        <h2 className="font-serif-book text-xl lg:text-2xl font-bold text-[#22140c]">
          {t.skills.rightTitle || (isEs ? "Servicios & Despliegue" : "Services & Deployment")}
        </h2>
      </div>

      {/* Sections with balanced midpoint spacing */}
      <div className="flex flex-col gap-7 sm:gap-8 mt-3.5 sm:mt-4.5">
        {/* Section 3: Bases de Datos */}
        <div className="space-y-1.5">
          <div className="flex items-center gap-2">
            <h3 className="font-serif-book text-sm sm:text-base font-bold italic text-[#2d4558]">
              {t.skills.databases}
            </h3>
            <div className="h-px flex-1 bg-gradient-to-r from-[#2d4558]/30 to-transparent" />
          </div>

          <div className="skill-logo-grid">
            {dbSkills.map((sk, idx) => (
              <BigLogo
                key={sk.name}
                skill={sk}
                rotation={dbRotations[idx % dbRotations.length]}
              />
            ))}
          </div>
        </div>

        {/* Section 4: Automatización & Cloud */}
        <div className="space-y-1.5">
          <div className="flex items-center gap-2">
            <h3 className="font-serif-book text-sm sm:text-base font-bold italic text-[#94631d]">
              {t.skills.tools}
            </h3>
            <div className="h-px flex-1 bg-gradient-to-r from-[#94631d]/30 to-transparent" />
          </div>

          <div className="skill-logo-grid">
            {toolSkills.map((sk, idx) => (
              <BigLogo
                key={sk.name}
                skill={sk}
                rotation={toolRotations[idx % toolRotations.length]}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

