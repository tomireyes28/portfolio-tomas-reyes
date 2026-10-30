import { Project } from "@/types/Project";

/**
 * Top 8 Proyectos Seleccionados para el Portfolio Oficial
 * Ordenados por relevancia, impacto de negocio, escala y complejidad técnica.
 */
export const projects: Project[] = [
  // 1. Plastic Who? — Auditoría Textil & Anti-Greenwashing (Dominio propio, +4.600 productos, NLP/Regex, Jest)
  {
    id: "plastic-who",
    title: {
      es: "Plastic Who? — Auditoría Textil y Transparencia en Moda",
      en: "Plastic Who? — Textile Audit & Sustainable Fashion Transparency",
    },
    shortDescription: {
      es: "Plataforma Full Stack contra el greenwashing que audita la composición real de prendas en marcas de moda argentinas (+4.600 productos). Implementa un pipeline de web scraping resiliente con evasión de rate-limits y un motor de tokenización NLP/Regex con diccionario canónico que segmenta tela base de forrerías y ribetes para clasificar la pureza textil mediante un semáforo normativo. Frontend de alto rendimiento con Server Components y visualización de trama (WeaveBar).",
      en: "Full Stack platform countering greenwashing by auditing the actual fiber composition of Argentine fashion brands (4,600+ garments). Features a resilient web scraping pipeline with rate-limit evasion and an NLP/Regex tokenizing engine with a canonical dictionary that isolates base fabrics from linings and trims to classify material purity via a textile traffic-light system. High-performance frontend with Server Components and a custom textile weave visualization (WeaveBar).",
    },
    techStack: [
      "Next.js",
      "NestJS",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "TailwindCSS",
      "Supabase",
      "Jest",
    ],
    category: "fullstack",
    featured: true,
    demoUrl: "https://plasticwho.com/",
    repoUrl: "https://github.com/tomireyes28/plastic-who",
    image: "/projects/plastic-who.png",
  },

  // 2. MN Agency — ERP / CRM Deportivo B2B
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
    techStack: [
      "Next.js",
      "NestJS",
      "TypeScript",
      "PostgreSQL",
      "TypeORM",
      "TailwindCSS",
      "Supabase",
      "Docker",
    ],
    category: "fullstack",
    featured: true,
    demoUrl: "https://mnagency-app.vercel.app/login",
    repoUrl: "https://github.com/tomireyes28/mnagencyapp-backend",
    image: "/projects/mn-agency.png",
  },

  // 3. Therapio — SaaS Clínico & Gestión de Pacientes
  {
    id: "therapio",
    title: {
      es: "Therapio — SaaS de Gestión Clínica y Pacientes",
      en: "Therapio — Clinical & Patient Management SaaS",
    },
    shortDescription: {
      es: "Plataforma SaaS Full Stack para profesionales de la salud mental. Implementa autenticación OAuth 2.0 con Google y manejo de sesiones cross-domain entre Vercel y Render. Incluye Dashboard interactivo, gestión de historias clínicas, agenda de turnos y módulo de finanzas.",
      en: "Full Stack SaaS platform for mental health professionals. Implements Google OAuth 2.0 authentication and secure cross-domain session handling between Vercel and Render. Includes interactive Dashboard, medical record management, appointment scheduling, and finance module.",
    },
    techStack: [
      "Next.js",
      "NestJS",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "TailwindCSS",
      "ShadcnUI",
    ],
    category: "fullstack",
    featured: true,
    demoUrl: "https://psycho-manager.vercel.app/",
    repoUrl: "https://github.com/tomireyes28/psycho-manager",
    image: "/projects/psychomanager.png",
  },

  // 4. Lumi — Finanzas Personales & Analíticas
  {
    id: "lumi",
    title: {
      es: "Lumi — Finanzas Claras (Gestión de Finanzas Personales)",
      en: "Lumi — Clear Finances (Personal Finance Management)",
    },
    shortDescription: {
      es: "Aplicación Full Stack para el control exhaustivo de finanzas personales. Permite la gestión de ingresos, gastos y tarjetas de crédito con visualización de cuotas. Incluye un simulador de reintegros bancarios para optimizar promociones, autenticación con Google y un dashboard dinámico con analíticas. Backend en NestJS con Prisma y despliegue automatizado.",
      en: "Full Stack application for comprehensive personal finance tracking. Manage income, expenses, and credit cards with installment visualization. Features a bank refund simulator to optimize promotions, Google authentication, and a dynamic dashboard with analytics. NestJS backend with Prisma and automated deployment.",
    },
    techStack: [
      "Next.js",
      "NestJS",
      "TypeScript",
      "PostgreSQL",
      "Prisma",
      "TailwindCSS",
      "Supabase",
      "Railway",
      "Vercel",
    ],
    category: "fullstack",
    featured: true,
    demoUrl: "https://lumi-beta-one.vercel.app/",
    repoUrl: "https://github.com/tomireyes28/lumi",
    image: "/projects/lumi.png",
  },

  // 5. MN Sync — Automatización de Cross-Posting IG ➡️ X (Serverless Cron)
  {
    id: "mn-igx-sync",
    title: {
      es: "MN Sync — Automatización de Cross-Posting IG ➡️ X",
      en: "MN Sync — Automated IG ➡️ X Cross-Posting Bot",
    },
    shortDescription: {
      es: "Automatización serverless de marketing digital para agencia. Sincroniza contenido orgánico de Instagram a X (Twitter). Soluciona problemas complejos de autenticación como tokens de larga duración de Meta, subida de medios binarios a X con OAuth 1.0a, y ejecución programada en la nube usando GitHub Actions como Cron Job.",
      en: "Serverless digital marketing automation for an agency. Synchronizes organic content from Instagram to X (Twitter). Solves complex authentication issues such as Meta long-lived tokens, binary media upload to X using OAuth 1.0a, and scheduled cloud execution using GitHub Actions as a Cron Job.",
    },
    techStack: [
      "Node.js",
      "TypeScript",
      "Meta Graph API",
      "Twitter API v2",
      "GitHub Actions",
      "Axios",
    ],
    category: "tools",
    featured: true,
    demoUrl: "https://github.com/tomireyes28/ig-x-sync",
    repoUrl: "https://github.com/tomireyes28/ig-x-sync",
    image: "/projects/ig-x-sync.jpg",
  },

  // 6. Cine Radar — Web Scraper Automatizado & REST API
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
    techStack: [
      "NestJS",
      "Puppeteer",
      "Next.js",
      "Prisma",
      "PostgreSQL",
      "Supabase",
      "TypeScript",
      "TailwindCSS",
    ],
    category: "fullstack",
    featured: true,
    demoUrl: "https://cine-radar-app.vercel.app/",
    repoUrl: "https://github.com/tomireyes28/cine-radar",
    image: "/projects/cinemaapp.png",
  },

  // 7. Aberturas N&L — Cliente Comercial en Producción Real
  {
    id: "aberturas-nyl",
    title: {
      es: "Aberturas N&L — Landing Page Comercial",
      en: "Aberturas N&L — Commercial Landing Page",
    },
    shortDescription: {
      es: "Sitio web corporativo de alto rendimiento para una empresa de carpintería de aluminio. Destaca por su diseño boutique interactivo para exhibir líneas de productos, galería de obras optimizada en formato estático y un formulario de contacto serverless integrado con Web3Forms. Desarrollada con un enfoque SEO y exportación estática nativa para despliegue en Hostinger.",
      en: "High-performance corporate website for an aluminum carpentry business. Features an interactive boutique design for product showcases, an optimized static project gallery, and a serverless contact form integrated with Web3Forms. Developed with an SEO focus and native static export for Hostinger deployment.",
    },
    techStack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "Web3Forms",
      "Hostinger",
    ],
    category: "frontend",
    featured: true,
    demoUrl: "https://aberturasnyl.com/",
    repoUrl: "https://github.com/tomireyes28/aberturas-nyl",
    image: "/projects/aberturas-nyl.png",
  },

  // 8. Simulador de DEA — Simulación Médica para la Clínica Adventista Belgrano
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
    category: "frontend",
    featured: true,
    demoUrl: "https://dea-beta.vercel.app/",
    repoUrl: "https://github.com/tomireyes28/dea",
    image: "/projects/dea-simulador.png",
  },
];

/**
 * Proyectos archivados (fuera del portfolio activo para mantener un estándar de calidad alto).
 * Se preservan en código para referencia futura.
 */
export const archivedProjects: Project[] = [
  {
    id: "pos-store",
    title: {
      es: "Punto de Venta — E-commerce y Panel Administrativo",
      en: "POS System — E-commerce & Admin Dashboard",
    },
    shortDescription: {
      es: "Solución de e-commerce Full Stack de alto rendimiento con panel administrativo de inventario.",
      en: "High-performance Full Stack e-commerce solution with inventory admin panel.",
    },
    techStack: ["Next.js", "NestJS", "PostgreSQL", "Prisma", "React", "Node.js", "TailwindCSS"],
    category: "fullstack",
    featured: false,
    demoUrl: "https://nextjs-pos-gamma.vercel.app/",
    repoUrl: "https://github.com/tomireyes28/nextjs_pos",
    image: "/projects/pos.png",
  },
  {
    id: "cash-tracker",
    title: {
      es: "Cash Tracker — Gestión de Presupuestos y Gastos",
      en: "Cash Tracker — Budget & Expense Management",
    },
    shortDescription: {
      es: "Herramienta financiera para el control de presupuestos con React y Express.",
      en: "Financial tool for budget control built with React and Express.",
    },
    techStack: ["React", "PostgreSQL", "Prisma", "Node.js", "Express", "TailwindCSS", "JavaScript"],
    category: "fullstack",
    featured: false,
    demoUrl: "https://cashtracker-frontend-snowy.vercel.app/",
    repoUrl: "https://github.com/tomireyes28/cashtracker_frontend",
    image: "/projects/cashtracker.png",
    demoCredentials: { user: "user@user.com", pass: "12345678" },
  },
  {
    id: "food-kiosk",
    title: {
      es: "Kiosko de Comida — Sistema TPV Multicapa",
      en: "Food Kiosk — Multi-layer POS System",
    },
    shortDescription: {
      es: "Sistema de Punto de Venta diseñado para flujos de trabajo en tiempo real.",
      en: "Point of Sale system designed for real-time workflows.",
    },
    techStack: ["React", "Prisma", "Node.js", "Express", "MongoDB", "TailwindCSS", "JavaScript"],
    category: "fullstack",
    featured: false,
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
      es: "Aplicación de gestión de proyectos basada en la metodología Kanban con Stack MERN.",
      en: "Project management app based on Kanban methodology with MERN Stack.",
    },
    techStack: ["React", "Node.js", "Express", "MongoDB", "TailwindCSS", "JavaScript"],
    category: "fullstack",
    featured: false,
    demoUrl: "https://uptask-frontend-w4hc.vercel.app/",
    repoUrl: "https://github.com/tomireyes28/uptask_frontend",
    image: "/projects/uptask.png",
    demoCredentials: { user: "user@user.com", pass: "12345678" },
  },
  {
    id: "devtree",
    title: {
      es: "DevTree — Ecosistema de Enlaces Personalizado",
      en: "DevTree — Custom Link Ecosystem",
    },
    shortDescription: {
      es: "Plataforma Full Stack que permite diseñar un perfil de enlaces público personalizable.",
      en: "Full Stack platform that allows designing a customizable public link profile.",
    },
    techStack: ["React", "Node.js", "Express", "MongoDB", "JavaScript", "HTML", "CSS"],
    category: "fullstack",
    featured: false,
    demoUrl: "https://devtree-frontend-phi.vercel.app/",
    repoUrl: "https://github.com/tomireyes28/devtree_frontend",
    image: "/projects/devtree.png",
    demoCredentials: { user: "user@user.com", pass: "12345678" },
  },
];
