import { Project } from "@/types/Project";

export const projects: Project[] = [
  {
    id: "mn-agency",
    title: {
      es: "MN Agency — Sistema de Gestión Deportiva (ERP/CRM)",
      en: "MN Agency — Sports Management System (ERP/CRM)",
    },
    shortDescription: {
      es: "Plataforma Full Stack para agencias de representación. Incluye gestión de contratos con cálculos financieros automáticos, generación de PDFs y firma digital. Cuenta con un módulo 'Matchmaker' inteligente para conectar jugadores con clubes mediante filtros avanzados. Backend robusto en NestJS con TypeORM.",
      en: "Full Stack platform for representation agencies. Includes contract management with automatic financial calculations, PDF generation, and digital signing. Features an intelligent 'Matchmaker' module to connect players with clubs using advanced filters. Robust NestJS backend with TypeORM.",
    },
    techStack: ["Next.js", "NestJS", "TypeScript", "PostgreSQL", "TypeORM", "TailwindCSS", "Supabase", "Docker"],
    
    demoUrl: "https://mnagency-app.vercel.app/login", 
    repoUrl: "https://github.com/tomireyes28/mnagencyapp-backend", 
    image: "/projects/mn-agency.png", 
  },
  {
    id: "cinema-agenda",
    title: {
      es: "Cine Radar — Scraper Web y API RESTful",
      en: "Cine Radar — Web Scraper & RESTful API",
    },
    shortDescription: {
      es: "Agregador de carteleras de cine en tiempo real. El backend (NestJS + Puppeteer) realiza scraping automatizado de múltiples cadenas para unificar datos en PostgreSQL/Supabase. El frontend (Next.js) consume una API RESTful segura para visualizar horarios y estrenos.",
      en: "Real-time cinema showtime aggregator. The backend (NestJS + Puppeteer) performs automated scraping of multiple chains to unify data in PostgreSQL/Supabase. The Next.js frontend consumes a secure RESTful API to visualize schedules and releases.",
    },
    techStack: ["NestJS", "Puppeteer", "Next.js", "Prisma", "PostgreSQL", "Supabase", "TypeScript", "TailwindCSS"],
    demoUrl: "https://cine-radar-app.vercel.app/",
    repoUrl: "https://github.com/tomireyes28/cine-radar",
    image: "/projects/cinemaapp.png",
  },
  {
    id: "psychomanager",
    title: {
      es: "PsychoManager — SaaS de Gestión Clínica y Pacientes",
      en: "PsychoManager — Clinical & Patient Management SaaS",
    },
    shortDescription: {
      es: "Plataforma SaaS Full Stack para profesionales de la salud mental. Implementa autenticación OAuth 2.0 con Google y manejo de sesiones cross-domain entre Vercel y Render. Incluye Dashboard interactivo, gestión de historias clínicas, agenda de turnos y módulo de finanzas.",
      en: "Full Stack SaaS platform for mental health professionals. Implements Google OAuth 2.0 authentication and secure cross-domain session handling between Vercel and Render. Includes interactive Dashboard, medical record management, appointment scheduling, and finance module.",
    },
    techStack: ["Next.js", "NestJS", "TypeScript", "PostgreSQL", "Prisma", "TailwindCSS", "ShadcnUI"],
    demoUrl: "https://psycho-manager.vercel.app/",
    repoUrl: "https://github.com/tomireyes28/psycho-manager", 
    image: "/projects/psychomanager.png", // 
  },
  {
    id: "pos-store",
    title: {
      es: "Punto de Venta — E-commerce y Panel Administrativo",
      en: "POS System — E-commerce & Admin Dashboard",
    },
    shortDescription: {
      es: "Solución de e-commerce Full Stack de alto rendimiento. El frontend con Next.js maneja la tienda y la selección de productos/cupones. El backend, construido con NestJS y PostgreSQL, proporciona un Panel Administrativo completo para la gestión de inventario, productos y ventas.",
      en: "High-performance Full Stack e-commerce solution. The Next.js frontend handles the store and product/coupon selection. The NestJS & PostgreSQL backend provides a complete Admin Dashboard for inventory, product, and sales management.",
    },
    techStack: ["Next.js", "NestJS", "PostgreSQL", "Prisma", "React", "Node.js", "TailwindCSS"],
    demoUrl: "https://nextjs-pos-gamma.vercel.app/",
    repoUrl: "https://github.com/tomireyes28/nextjs_pos",
    image: "/projects/pos.png",
  },
  {
    id: "dea-simulator",
    title: {
      es: "Simulador de DEA — Clínica Adventista Belgrano",
      en: "AED Simulator — Clínica Adventista Belgrano",
    },
    shortDescription: {
      es: "Simulador interactivo de Desfibrilador Externo Automático (DEA). Desarrollado con JavaScript vanilla para entrenamiento médico de alta fidelidad, simulando comportamiento del dispositivo, secuencias guiadas y respuesta de audio.",
      en: "Interactive Automated External Defibrillator (AED) simulator. Developed with vanilla JavaScript for high-fidelity medical training, simulating device behavior, guided sequences, and real-time audio response.",
    },
    techStack: ["JavaScript", "HTML", "CSS"],
    demoUrl: "https://dea-beta.vercel.app/",
    repoUrl: "https://github.com/tomireyes28/dea",
    image: "/projects/dea-simulador.png",
  },
  {
    id: "cash-tracker",
    title: {
      es: "Cash Tracker — Gestión de Presupuestos y Gastos",
      en: "Cash Tracker — Budget & Expense Management",
    },
    shortDescription: {
      es: "Demo user: user@user.com, password:12345678 | Herramienta financiera para el control de presupuestos. Implementa autenticación segura y gestión de roles. Desarrollado con React y PostgreSQL/Prisma para monitorear el estado presupuestario en tiempo real.",
      en: "Demo user: user@user.com, password:12345678 | Financial tool for budget control. Implements secure authentication and role management. Developed with React and PostgreSQL/Prisma to monitor budget status in real-time.",
    },
    techStack: ["React", "PostgreSQL", "Prisma", "Node.js", "Express", "TailwindCSS", "JavaScript"],
    demoUrl: "https://cashtracker-frontend-snowy.vercel.app/",
    repoUrl: "https://github.com/tomireyes28/cashtracker_frontend",
    image: "/projects/cashtracker.png",
  },
  {
    id: "food-kiosk",
    title: {
      es: "Kiosko de Comida — Sistema TPV Multicapa",
      en: "Food Kiosk — Multi-layer POS System",
    },
    shortDescription: {
      es: "Sistema de Punto de Venta diseñado para flujos de trabajo en tiempo real. La arquitectura maneja terminales para clientes, cocina y visualización pública. Utiliza Prisma y Node.js para garantizar una comunicación rápida y persistencia de datos.",
      en: "Point of Sale system designed for real-time workflows. The architecture handles terminals for customers, kitchen, and public display. Uses Prisma and Node.js to ensure fast communication and data persistence.",
    },
    techStack: ["React", "Prisma", "Node.js", "Express", "MongoDB", "TailwindCSS", "JavaScript"],
    demoUrl: "https://quiosco-next-red.vercel.app/order/cafe",
    repoUrl: "https://github.com/tomireyes28/quiosco_next",
    image: "/projects/quiosco.png",
  },
  {
    id: "uptask-kanban",
    title: {
      es: "Uptask — Gestor de Tareas Full Stack (MERN)",
      en: "Uptask — Full Stack Task Manager (MERN)",
    },
    shortDescription: {
      es: "Demo user: user@user.com, password:12345678 | Aplicación de gestión de proyectos basada en la metodología Kanban. Desarrollada con el Stack MERN para administrar el flujo de trabajo de tareas entre múltiples estados. Incluye autenticación y gestión de permisos.",
      en: "Demo user: user@user.com, password:12345678 | Project management app based on Kanban methodology. Developed with the MERN Stack to manage task workflow across multiple states. Includes authentication and permission management.",
    },
    techStack: ["React", "Node.js", "Express", "MongoDB", "TailwindCSS", "JavaScript"],
    demoUrl: "https://uptask-frontend-w4hc.vercel.app/",
    repoUrl: "https://github.com/tomireyes28/uptask_frontend",
    image: "/projects/uptask.png",
  },
  {
    id: "devtree",
    title: {
      es: "DevTree — Ecosistema de Enlaces Personalizado",
      en: "DevTree — Custom Link Ecosystem",
    },
    shortDescription: {
      es: "Demo user: user@user.com, password:12345678 | Plataforma Full Stack que permite diseñar un perfil de enlaces público personalizable. Construido con React y MongoDB, se enfoca en la persistencia de datos y en ofrecer una interfaz dinámica.",
      en: "Demo user: user@user.com, password:12345678 | Full Stack platform that allows designing a customizable public link profile. Built with React and MongoDB, focusing on data persistence and offering a dynamic interface.",
    },
    techStack: ["React", "Node.js", "Express", "MongoDB", "JavaScript", "HTML", "CSS"],
    demoUrl: "https://devtree-frontend-phi.vercel.app/",
    repoUrl: "https://github.com/tomireyes28/devtree_frontend",
    image: "/projects/devtree.png",
  },
  
];