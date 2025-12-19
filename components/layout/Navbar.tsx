"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// Definición de enlaces
const links = [
  { href: "#projects", label: "Proyectos" },
  { href: "#skills", label: "Tecnologías" },
  { href: "#soft-skills", label: "Habilidades blandas" },
  { href: "#about", label: "Sobre mí" },
  { href: "#contact", label: "Contacto" },
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('top');
  const [isScrolled, setIsScrolled] = useState(false);

  // 1. Hook para detectar la sección activa y el scroll
  useEffect(() => {
    const handleScroll = () => {
      // Detección de Scroll para el efecto visual del header
      setIsScrolled(window.scrollY > 10);
      
      // Lógica de detección de sección activa (simple pero efectiva)
      let currentActive = 'top';
      const scrollPosition = window.scrollY + 150; // Offset para mejor UX

      links.forEach((link) => {
        const element = document.querySelector(link.href);
        if (element instanceof HTMLElement) {
          if (scrollPosition >= element.offsetTop && scrollPosition < element.offsetTop + element.offsetHeight) {
            currentActive = link.href.substring(1);
          }
        }
      });
      
      // Si estamos muy arriba, asegurar que 'top' esté activo
      if (window.scrollY < 100) {
        currentActive = 'top';
      }
      
      // Usamos el id 'top' que ya tienes en HeroSection para el inicio
      if (currentActive !== activeSection) {
        setActiveSection(currentActive);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Llama una vez al montar para establecer el estado inicial

    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection]);


  return (
    // 2. Header con efecto dinámico al hacer scroll
    <header 
      className={`sticky top-0 z-50 border-b transition-all duration-300 ${
        isScrolled
          ? 'border-slate-800 bg-slate-950/90 backdrop-blur-md' // Más opacidad al hacer scroll
          : 'border-transparent bg-transparent' // Menos obtrusivo al inicio
      }`}
    >
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4 md:py-3">
        {/* Logo/Marca con mejor estilo */}
        <a href="#top" className="text-lg font-extrabold tracking-tight transition hover:text-sky-400">
          <span className="text-sky-400">&lt;/&gt;</span> Tomás Reyes
        </a>
        
        {/* Navegación de escritorio */}
        <ul className="hidden gap-8 text-sm md:flex">
          {links.map((link) => {
            const linkId = link.href.substring(1);
            const isActive = linkId === activeSection;

            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={() => setActiveSection(linkId)} // Actualiza estado al hacer click
                  className={`relative text-base font-medium transition duration-300 ${
                    isActive ? 'text-sky-400' : 'text-slate-300 hover:text-sky-400/80'
                  }`}
                >
                  {link.label}
                  
                  {/* 3. Indicador de Sección Activa (Framer Motion) */}
                  {isActive && (
                    <motion.span
                      layoutId="underline" // ID único para la animación de transición
                      className="absolute bottom-[-5px] left-0 right-0 h-0.5 rounded-full bg-sky-400"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                </a>
              </li>
            );
          })}
        </ul>
        
        {/* Aquí iría la implementación de un Mobile Menu si fuera necesario */}

      </nav>
    </header>
  );
}