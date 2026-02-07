"use client";

import { useState } from 'react';
import { projects } from "@/src/projects";
import ProjectCard from "@/components/ui/ProjectCard";
import ProjectDetailModal from "@/components/ui/ProjectDetailModal";
import { Project } from "@/types/Project";
import { useLanguage } from "@/context/LanguageContext"; // 1. Importar hook

export default function ProjectsSection() {
    const { language } = useLanguage(); // 2. Obtener idioma actual ('es' o 'en')
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    const openModal = (project: Project) => {
        setSelectedProject(project);
    };

    const closeModal = () => {
        setSelectedProject(null);
    };

    // Helper para obtener el texto correcto (string o objeto)
    const getLocalizedText = (text: string | { es: string; en: string }) => {
        if (typeof text === 'string') return text;
        return text[language];
    };

    // Textos estáticos de la sección
    const sectionTexts = {
        es: {
            title: "Mis Proyectos Destacados",
            desc: "Cada proyecto representa un desafío Full Stack superado, enfocado en escalabilidad, diseño funcional y arquitectura sólida."
        },
        en: {
            title: "Featured Projects",
            desc: "Each project represents a Full Stack challenge overcome, focused on scalability, functional design, and solid architecture."
        }
    };

    return (
        <section id="projects" className="py-20 px-4 border-t border-slate-800">
            <div className="mx-auto max-w-6xl">
                <header className="space-y-4 mb-10 text-center">
                    <h2 className="text-4xl font-extrabold text-white">
                        {sectionTexts[language].title}
                    </h2>
                    <p className="text-base text-slate-400 max-w-2xl mx-auto">
                        {sectionTexts[language].desc}
                    </p>
                </header>

                <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project) => {
                        // Creamos una versión "localizada" del proyecto para pasar al Card
                        const localizedProject = {
                            ...project,
                            title: getLocalizedText(project.title),
                            shortDescription: getLocalizedText(project.shortDescription)
                        };

                        return (
                            <ProjectCard 
                                key={project.id} 
                                // @ts-ignore - Forzamos el tipo string temporalmente para el componente hijo
                                project={localizedProject} 
                                // @ts-ignore
                                onDetailsClick={() => openModal(localizedProject)} 
                            />
                        );
                    })}
                </div>
            </div>
            
            <ProjectDetailModal 
                // @ts-ignore
                project={selectedProject} 
                onClose={closeModal} 
            />
        </section>
    );
}