"use client"
import { motion } from "framer-motion";
import Link from "next/link"; 
import { useLanguage } from "@/context/LanguageContext"; // 1. Importar hook

export default function HeroSection() {
  const { t } = useLanguage(); // 2. Obtener textos

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <section
      id="top"
      className="flex min-h-[70vh] items-center justify-center px-4 py-20 md:py-0"
    >
      <motion.div
        className="mx-auto flex max-w-5xl flex-col gap-6"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* 1. Especialidad */}
        <motion.p
          className="text-sm uppercase tracking-[0.2em] text-sky-400 font-medium"
          variants={itemVariants}
        >
          {t.hero.role}
        </motion.p>

        {/* 2. Titular Dinámico */}
        <motion.h1
          className="text-5xl font-extrabold tracking-tight md:text-7xl leading-tight"
          variants={itemVariants}
        >
          {t.hero.titlePart1} <span className="text-sky-400">{t.hero.titleHighlight}</span> {t.hero.titlePart2}
        </motion.h1>

        {/* 3. Descripción */}
        <motion.p
          className="max-w-3xl text-lg text-slate-300 md:text-xl leading-relaxed"
          variants={itemVariants}
        >
          {t.hero.description}
        </motion.p>

        {/* 4. Botones */}
        <motion.div className="mt-4 flex flex-wrap gap-4" variants={itemVariants}>
          <Link
            href="#projects"
            className="rounded-full bg-sky-500 px-8 py-4 text-sm font-bold text-slate-950 shadow-lg transition-all duration-300 ease-in-out hover:scale-[1.05] hover:bg-sky-400 hover:shadow-sky-500/50"
          >
            {t.hero.btnPrimary}
          </Link>
          <Link
            href="#contact"
            className="rounded-full border border-slate-600 px-8 py-4 text-sm font-medium text-slate-100 transition-all duration-300 ease-in-out hover:border-sky-400 hover:text-sky-400 hover:bg-slate-800/50"
          >
            {t.hero.btnSecondary}
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}