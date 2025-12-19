// components/sections/ProjectsSection.tsx
"use client";

import { useState } from 'react';
import { projects } from "@/src/projects";
import ProjectCard from "@/components/ui/ProjectCard";
import ProjectDetailModal from "@/components/ui/ProjectDetailModal"; // Importamos el modal
import { Project } from "@/types/Project";


export default function ProjectsSection() {
    const [selectedProject, setSelectedProject] = useState<Project | null>(null);

    const openModal = (project: Project) => {
        setSelectedProject(project);
    };

    const closeModal = () => {
        setSelectedProject(null);
    };

    return (
        <section id="projects" className="py-20 px-4 border-t border-slate-800">
            <div className="mx-auto max-w-6xl">
                <header className="space-y-4 mb-10 text-center">
                    <h2 className="text-4xl font-extrabold text-white">
                        Mis Proyectos Destacados
                    </h2>
                    <p className="text-base text-slate-400 max-w-2xl mx-auto">
                        Cada proyecto representa un desafío Full Stack superado, enfocado en escalabilidad, diseño funcional y arquitectura sólida.
                    </p>
                </header>

                <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">
                    {projects.map((project: Project) => (
                        // Pasamos el handler al ProjectCard
                        <ProjectCard 
                            key={project.id} 
                            project={project} 
                            onDetailsClick={openModal} 
                        />
                    ))}
                </div>
            </div>
            
            {/* Renderizamos el Modal */}
            <ProjectDetailModal 
                project={selectedProject} 
                onClose={closeModal} 
            />
        </section>
    );
}