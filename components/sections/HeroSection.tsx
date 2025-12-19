"use client"
import { motion } from "framer-motion";
import Link from "next/link"; 

export default function HeroSection() {
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
        {/* 1. Especialidad alineada al CV */}
        <motion.p
          className="text-sm uppercase tracking-[0.2em] text-sky-400 font-medium"
          variants={itemVariants}
        >
          Desarrollador Full Stack | Orientado a Producto e IA
        </motion.p>

        {/* 2. Titular con enfoque en soluciones */}
        <motion.h1
          className="text-5xl font-extrabold tracking-tight md:text-7xl leading-tight"
          variants={itemVariants}
        >
          Transformo ideas en <span className="text-sky-400">productos</span> digitales
          <span className="text-sky-400">.</span>
        </motion.h1>

        {/* 3. Propuesta de Valor Técnica y Estratégica */}
        <motion.p
          className="max-w-3xl text-lg text-slate-300 md:text-xl leading-relaxed"
          variants={itemVariants}
        >
          Hola, soy <span className="font-semibold text-white">Tomás Reyes</span>. Me especializo en el desarrollo de aplicaciones escalables con{" "}
          <span className="font-semibold text-sky-200">React, TypeScript y el stack Next.js / NestJS</span>. 
          Mi enfoque combina la arquitectura técnica sólida con una visión estratégica para ofrecer soluciones de alto impacto y rendimiento.
        </motion.p>

        {/* 4. Acciones Principales */}
        <motion.div className="mt-4 flex flex-wrap gap-4" variants={itemVariants}>
          <Link
            href="#projects"
            className="rounded-full bg-sky-500 px-8 py-4 text-sm font-bold text-slate-950 shadow-lg transition-all duration-300 ease-in-out hover:scale-[1.05] hover:bg-sky-400 hover:shadow-sky-500/50"
          >
            Ver Proyectos Destacados
          </Link>
          <Link
            href="#contact"
            className="rounded-full border border-slate-600 px-8 py-4 text-sm font-medium text-slate-100 transition-all duration-300 ease-in-out hover:border-sky-400 hover:text-sky-400 hover:bg-slate-800/50"
          >
            Hablemos de tu idea
          </Link>
        </motion.div>
      </motion.div>
    </section>
  );
}