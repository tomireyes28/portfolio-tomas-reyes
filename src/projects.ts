import { Project } from "@/types/Project";

export const projects: Project[] = [
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
];