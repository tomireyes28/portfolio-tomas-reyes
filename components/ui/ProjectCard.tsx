// components/ui/ProjectCard.tsx
"use client";

import Image from "next/image";
import { ExternalLink, Github, Info } from "lucide-react"; // Importamos 'Info' para el botón de detalles
import type { Project } from "@/types/Project";
import { motion } from "framer-motion";

interface ProjectCardProps {
    project: Project;
    // Añadimos el callback para abrir el modal, que recibirá el proyecto
    onDetailsClick: (project: Project) => void; 
}

export default function ProjectCard({ project, onDetailsClick }: ProjectCardProps) {
  return (
    // Hacemos el click en la tarjeta para abrir el modal (UX más intuitivo)
    <motion.article
      initial={{ scale: 1 }}
      // Usaremos whileHover para la animación, pero el click abre el modal
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
        onClick={() => onDetailsClick(project)} // <--- Nuevo Click Handler
      >
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 hover:scale-[1.08]"
        />
      </div>

      {/* 3. Contenido Principal */}
      <div className="p-6 flex flex-col gap-4 grow">
        <h3 
            className="text-2xl font-bold text-white leading-snug cursor-pointer hover:text-sky-400 transition"
            onClick={() => onDetailsClick(project)} // <--- Nuevo Click Handler
        >
          {project.title}
        </h3>
        
        {/* 4. Descripción Mejorada */}
        <p className="text-slate-400 leading-normal grow">
          {project.shortDescription}
        </p>

        {/* 5. Tech stack mejorado */}
        <div className="flex items-center gap-2 flex-wrap pt-2 border-t border-slate-800/50">
          {/* Mantenemos solo 3 y añadimos el botón de detalles al final */}
          {project.techStack.slice(0, 3).map((tech) => ( 
            <span
              key={tech}
              className="text-xs px-3 py-1 rounded-md bg-sky-500/10 text-sky-300 font-medium border border-sky-600/50"
            >
              {tech}
            </span>
          ))}
          
          {/* Botón para ver más detalles */}
          {project.techStack.length > 3 && (
            <button
                onClick={() => onDetailsClick(project)} // <--- Abre el Modal
                className="text-xs text-slate-400 font-light inline-flex items-center gap-1 hover:text-sky-400 transition"
            >
              +{project.techStack.length - 3} más <Info size={14} />
            </button>
          )}
        </div>
      </div>

      {/* 6. Footer con Botones de Acción */}
      <div className="p-6 pt-0 flex justify-end gap-3 items-center">
        {/* Botón de Código (GitHub) */}
        {project.repoUrl && (
          <a
            href={project.repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            title="Ver Código en GitHub"
            className="flex items-center gap-1 rounded-full px-4 py-2 bg-slate-800 text-slate-200 border border-slate-700 hover:bg-slate-700 hover:text-sky-400 transition"
          >
            <Github size={18} /> Código
          </a>
        )}

        {/* Botón de Demo (Más destacado) */}
        {project.demoUrl && (
          <a
            href={project.demoUrl}
            target="_blank"
            rel="noopener noreferrer"
            title="Ver Demo en Vivo"
            className="flex items-center gap-1 rounded-full px-4 py-2 bg-sky-500 text-slate-900 font-bold hover:bg-sky-400 hover:scale-[1.02] transition shadow-md"
          >
            Ver Demo <ExternalLink size={18} />
          </a>
        )}
      </div>
    </motion.article>
  );
}