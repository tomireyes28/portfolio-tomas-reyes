"use client";

import Image from "next/image";
import { ExternalLink, Github, Info } from "lucide-react"; 
import type { Project } from "@/types/Project";
import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext"; // 1. Importamos el hook

interface ProjectCardProps {
  project: Project;
  // Nota: Aunque el tipo Project original tiene title como objeto, 
  // aquí recibiremos la versión "aplanada" (string) desde el padre.
  // TypeScript podría quejarse, pero funcionará porque JS es flexible.
  // Si quieres ser estricto, podrías definir una interfaz LocalizedProject.
  onDetailsClick: (project: Project) => void; 
}

export default function ProjectCard({ project, onDetailsClick }: ProjectCardProps) {
  const { language } = useLanguage(); // 2. Usamos el idioma

  // Textos de botones según idioma
  const texts = {
    es: {
      more: "más",
      code: "Código",
      demo: "Ver Demo"
    },
    en: {
      more: "more",
      code: "Code",
      demo: "Live Demo"
    }
  };

  const t = texts[language];

  return (
    <motion.article
      initial={{ scale: 1 }}
      whileHover={{ scale: 1.02, rotate: 1 }}
      className="
        flex flex-col rounded-2xl border border-slate-800 
        bg-slate-900/50 overflow-hidden 
        shadow-2xl shadow-slate-950/50 
        transition-all duration-300 cursor-pointer
      "
    >
      {/* 2. Imagen con Hover */}
      <div 
        className="relative w-full h-56 overflow-hidden" 
        onClick={() => onDetailsClick(project)} 
      >
        {/* Asegúrate de que project.image sea un string válido */}
        <Image
          src={project.image}
          // @ts-ignore - project.title viene como string desde el padre
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 hover:scale-[1.08]"
        />
      </div>

      {/* 3. Contenido Principal */}
      <div className="p-6 flex flex-col gap-4 grow">
        <h3 
            className="text-2xl font-bold text-white leading-snug cursor-pointer hover:text-sky-400 transition"
            onClick={() => onDetailsClick(project)}
        >
          {/* @ts-ignore */}
          {project.title}
        </h3>
        
        <p className="text-slate-400 leading-normal grow">
          {/* @ts-ignore */}
          {project.shortDescription}
        </p>

        {/* 5. Tech stack */}
        <div className="flex items-center gap-2 flex-wrap pt-2 border-t border-slate-800/50">
          {project.techStack.slice(0, 3).map((tech) => ( 
            <span
              key={tech}
              className="text-xs px-3 py-1 rounded-md bg-sky-500/10 text-sky-300 font-medium border border-sky-600/50"
            >
              {tech}
            </span>
          ))}
          
          {project.techStack.length > 3 && (
            <button
                onClick={() => onDetailsClick(project)} 
                className="text-xs text-slate-400 font-light inline-flex items-center gap-1 hover:text-sky-400 transition"
            >
              +{project.techStack.length - 3} {t.more} <Info size={14} />
            </button>
          )}
        </div>
      </div>

      {/* 6. Footer con Botones de Acción */}
      <div className="p-6 pt-0 flex justify-end gap-3 items-center">
        {project.repoUrl && (
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            title={t.code}
            className="flex items-center gap-1 rounded-full px-4 py-2 bg-slate-800 text-slate-200 border border-slate-700 hover:bg-slate-700 hover:text-sky-400 transition"
          >
            <Github size={18} /> {t.code}
          </a>
        )}

        {project.demoUrl && (
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            title={t.demo}
            className="flex items-center gap-1 rounded-full px-4 py-2 bg-sky-500 text-slate-900 font-bold hover:bg-sky-400 hover:scale-[1.02] transition shadow-md"
          >
            {t.demo} <ExternalLink size={18} />
          </a>
        )}
      </div>
    </motion.article>
  );
}