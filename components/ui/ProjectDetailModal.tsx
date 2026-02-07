"use client";

import { X, ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import type { Project } from "@/types/Project";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext"; // 1. Importamos el hook

interface ProjectDetailModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectDetailModal({ project, onClose }: ProjectDetailModalProps) {
  const { language } = useLanguage(); // 2. Obtenemos el idioma

  // 3. Diccionario local para los textos de la interfaz del modal
  const texts = {
    es: {
      demo: "Demo en Vivo",
      code: "Código Fuente",
      detailsTitle: "Detalles y Arquitectura",
      stackTitle: "Stack Completo",
    },
    en: {
      demo: "Live Demo",
      code: "Source Code",
      detailsTitle: "Details & Architecture",
      stackTitle: "Full Stack",
    }
  };

  const t = texts[language];

  // Solo renderizamos si hay un proyecto y el modal está abierto
  if (!project) return null;

  const modalVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
    exit: { opacity: 0, scale: 0.95 },
  };
  
  const backdropVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  };

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-[99] flex items-center justify-center p-4 bg-slate-950/90 backdrop-blur-sm"
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          onClick={onClose}
        >
          <motion.div
            className="relative w-full max-w-4xl max-h-[90vh] bg-slate-900 rounded-xl shadow-2xl overflow-y-auto"
            variants={modalVariants}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Botón de Cierre */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-slate-800/70 text-slate-300 hover:bg-slate-700 transition"
            >
              <X size={24} />
            </button>

            {/* Contenido del Modal */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
              
              {/* COLUMNA IZQUIERDA: Imagen y Enlaces */}
              <div className="space-y-6">
                <div className="relative w-full h-64 rounded-lg overflow-hidden border border-slate-700">
                  <Image
                    src={project.image}
                    // @ts-ignore - El título viene como string desde el componente padre
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
                
                {/* Botones de Acción */}
                <div className="flex gap-4 pt-2">
                    {project.demoUrl && (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 rounded-full px-6 py-3 bg-sky-500 text-slate-900 font-bold hover:bg-sky-400 transition shadow-lg w-full justify-center"
                      >
                         {t.demo} <ExternalLink size={18} />
                      </a>
                    )}
                    {project.repoUrl && (
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 rounded-full px-6 py-3 bg-slate-800 text-slate-200 border border-slate-700 hover:bg-slate-700 transition shadow-lg w-full justify-center"
                      >
                        {t.code} <Github size={18} />
                      </a>
                    )}
                </div>
              </div>

              {/* COLUMNA DERECHA: Texto y Detalles Técnicos */}
              <div className="space-y-6">
                <h3 className="text-3xl font-extrabold text-white leading-snug">
                  {/* @ts-ignore */}
                  {project.title}
                </h3>
                <p className="text-lg text-sky-400 italic">
                    {t.detailsTitle}
                </p>

                {/* Descripción Detallada */}
                <p className="text-slate-300 leading-relaxed">
                  {/* @ts-ignore */}
                  {project.shortDescription} 
                </p>

                {/* Tecnologías Detalladas */}
                <div className="pt-4 border-t border-slate-700/50">
                    <h4 className="text-lg font-semibold text-slate-200 mb-4">{t.stackTitle}</h4>
                    <div className="flex flex-wrap gap-4">
                        {project.techStack.map((tech) => (
                           <span key={tech} className="text-sm px-3 py-1 rounded-full bg-slate-800 text-slate-200 border border-slate-700">
                                {tech}
                           </span>
                        ))}
                    </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}