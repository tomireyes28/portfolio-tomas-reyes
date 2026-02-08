"use client";

import { motion } from "framer-motion";
// Borramos la importación de softSkills porque ahora viene desde las traducciones
// import { softSkills } from "@/src/softSkills"; 
import { CheckCircle, MessageSquare, Users, Zap, ShieldCheck, TrendingUp } from "lucide-react"; 
import { useLanguage } from "@/context/LanguageContext"; // 1. Importar hook

// 2. Mapeo de íconos usando los IDs que definimos en translations.ts
const iconMap = {
  team: Users,
  comms: MessageSquare,
  problem: Zap,
  adapt: CheckCircle,
  owner: ShieldCheck,
  learn: TrendingUp,
};

const itemVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: { opacity: 1, x: 0 },
};

export default function SoftSkillsSection() {
  const { t } = useLanguage(); // 3. Obtener textos

  return (
    <section
      id="soft-skills"
      className="border-t border-slate-800 bg-slate-950 py-24 px-4"
    >
      <div className="mx-auto max-w-6xl grid gap-12 md:grid-cols-5 items-center">
        
        {/* COLUMNA IZQUIERDA — NARRATIVA DE VALOR */}
        <div className="md:col-span-2 space-y-6">
          <h2 className="text-4xl font-extrabold text-white tracking-tight">
            {t.softSkills.title}
          </h2>

          <p className="text-lg text-slate-400 leading-relaxed">
            {t.softSkills.desc1} <span className="text-sky-400 font-semibold underline decoration-sky-400/30 underline-offset-4">{t.softSkills.highlight}</span>. 
          </p>
          
          <p className="text-base text-slate-400 leading-relaxed">
            {t.softSkills.desc2}
          </p>
          
          <div className="pt-2">
            <a href="#about" className="group inline-flex items-center text-sky-400 font-medium hover:text-sky-300 transition-colors">
              {t.softSkills.link} 
              <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
            </a>
          </div>
        </div>

        {/* COLUMNA DERECHA — LISTA VERTICAL COMPACTA */}
        <motion.div
            className="md:col-span-3 flex flex-col gap-2.5 max-w-md mx-auto md:ml-auto w-full"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            transition={{ staggerChildren: 0.1 }}
        >
          {/* Mapeamos la lista desde t.softSkills.items */}
          {t.softSkills.items.map((skill) => {
            // Buscamos el ícono usando el ID (team, comms, etc)
            const IconComponent = iconMap[skill.id as keyof typeof iconMap] || CheckCircle;

            return (
              <motion.div
                key={skill.id}
                variants={itemVariants}
                whileHover={{ x: 8 }}
                className="
                  flex items-center gap-3 rounded-lg px-4 py-2 
                  bg-slate-900/40 border border-slate-800/60
                  text-slate-200 transition-all duration-300
                  hover:bg-slate-800/60 hover:border-sky-500/40
                  hover:shadow-[0_0_15px_rgba(56,189,248,0.02)]
                "
              >
                <div className="p-1.5 rounded-md bg-slate-950 border border-slate-800 text-sky-400 shrink-0">
                    <IconComponent size={18} />
                </div>
                
                <span className="font-medium text-sm md:text-base tracking-tight">
                  {skill.name}
                </span>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}