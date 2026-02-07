"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '@/context/LanguageContext'; // 1. Importamos el hook
import LanguageSwitch from "@/components/ui/LanguageSwitch"; // Ajusta la ruta si es necesario

export default function Navbar() {
  const { t, language, toggleLanguage } = useLanguage(); // 2. Sacamos las herramientas
  const [activeSection, setActiveSection] = useState('top');
  const [isScrolled, setIsScrolled] = useState(false);

  // 3. Definimos los links ADENTRO del componente para usar 't'
  const links = [
    { href: "#projects", label: t.nav.projects },
    { href: "#skills", label: t.nav.tech }, // Asumiendo que "skills" en tu HTML es "Tecnologías"
    { href: "#soft-skills", label: t.nav.skills },
    { href: "#about", label: t.nav.about },
    { href: "#contact", label: t.nav.contact },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
      
      let currentActive = 'top';
      const scrollPosition = window.scrollY + 150;

      links.forEach((link) => {
        const element = document.querySelector(link.href);
        if (element instanceof HTMLElement) {
          if (scrollPosition >= element.offsetTop && scrollPosition < element.offsetTop + element.offsetHeight) {
            currentActive = link.href.substring(1);
          }
        }
      });
      
      if (window.scrollY < 100) {
        currentActive = 'top';
      }
      
      if (currentActive !== activeSection) {
        setActiveSection(currentActive);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [activeSection, links]); // Agregamos 'links' a las dependencias por si cambia el idioma


  return (
    <header 
      className={`sticky top-0 z-50 border-b transition-all duration-300 ${
        isScrolled
          ? 'border-slate-800 bg-slate-950/90 backdrop-blur-md'
          : 'border-transparent bg-transparent'
      }`}
    >
      <nav className="mx-auto flex max-w-5xl items-center justify-between px-4 py-4 md:py-3">
        {/* Logo */}
        <a href="#top" className="text-lg font-extrabold tracking-tight transition hover:text-sky-400">
          <span className="text-sky-400">&lt;/&gt;</span> Tomás Reyes
        </a>
        
        {/* Navegación + Botón Idioma */}
        <div className="flex items-center gap-8">
            <ul className="hidden gap-8 text-sm md:flex">
            {links.map((link) => {
                const linkId = link.href.substring(1);
                const isActive = linkId === activeSection;

                return (
                <li key={link.href}>
                    <a
                    href={link.href}
                    onClick={() => setActiveSection(linkId)}
                    className={`relative text-base font-medium transition duration-300 ${
                        isActive ? 'text-sky-400' : 'text-slate-300 hover:text-sky-400/80'
                    }`}
                    >
                    {link.label}
                    
                    {isActive && (
                        <motion.span
                        layoutId="underline"
                        className="absolute bottom-[-5px] left-0 right-0 h-0.5 rounded-full bg-sky-400"
                        transition={{ type: "spring", stiffness: 350, damping: 30 }}
                        />
                    )}
                    </a>
                </li>
                );
            })}
            </ul>

          <div className="hidden md:block">
                <LanguageSwitch />
            </div>
        </div>
        
        {/* Aquí iría el menú móvil, recuerda agregar el botón de idioma ahí también si lo tienes */}

      </nav>
    </header>
  );
}