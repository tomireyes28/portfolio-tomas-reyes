import { Project } from "@/types/Project";

export const projects: Project[] = [
  {
    id: "pos-store",
    title: "Punto de Venta — E-commerce y Panel Administrativo (Next.js/NestJS)",
    shortDescription:
      "Solución de e-commerce Full Stack de alto rendimiento. El frontend con Next.js maneja la tienda y la selección de productos/cupones. El backend, construido con NestJS y PostgreSQL, proporciona un Panel Administrativo completo para la gestión de inventario, productos y ventas. Diseñado para escalabilidad empresarial.",
    techStack: [
      "Next.js",
      "NestJS",
      "PostgreSQL",
      "Prisma",
      "React",
      "Node.js",
      "TailwindCSS",
    ],
    demoUrl: "https://nextjs-pos-gamma.vercel.app/",
    repoUrl: "https://github.com/tomireyes28/nextjs_pos",
    image: "/projects/pos.png",
  },
  {
    id: "cash-tracker",
    title: "Cash Tracker — Gestión de Presupuestos y Gastos (PostgreSQL)",
    shortDescription:
      "Demo user: user@user.com, password:12345678 | Herramienta financiera para el control de presupuestos. Implementa autenticación segura y gestión de roles. Desarrollado con React y PostgreSQL/Prisma para monitorear el estado presupuestario en tiempo real, asegurando la integridad de los datos financieros mediante una arquitectura de base de datos relacional.",
    techStack: [
      "React",
      "PostgreSQL",
      "Prisma",
      "Node.js",
      "Express",
      "TailwindCSS",
      "JavaScript",
    ],
    demoUrl: "https://cashtracker-frontend-snowy.vercel.app/",
    repoUrl: "https://github.com/tomireyes28/cashtracker_frontend",
    image: "/projects/cashtracker.png",
  },
  {
    id: "food-kiosk",
    title: "Kiosko de Comida — Sistema TPV Multicapa",
    shortDescription:
      "Sistema de Punto de Venta diseñado para flujos de trabajo en tiempo real. La arquitectura maneja terminales para clientes, cocina y visualización pública. Utiliza Prisma y Node.js para garantizar una comunicación rápida y persistencia de datos en entornos de alta demanda gastronómica.",
    techStack: [
      "React",
      "Prisma",
      "Node.js",
      "Express",
      "MongoDB",
      "TailwindCSS",
      "JavaScript",
    ],
    demoUrl: "https://quiosco-next-red.vercel.app/order/cafe",
    repoUrl: "https://github.com/tomireyes28/quiosco_next",
    image: "/projects/quiosco.png",
  },
  {
    id: "uptask-kanban",
    title: "Uptask — Gestor de Tareas Full Stack (MERN)",
    shortDescription:
      "Demo user: user@user.com, password:12345678 | Aplicación de gestión de proyectos basada en la metodología Kanban. Desarrollada con el Stack MERN para administrar el flujo de trabajo de tareas entre múltiples estados. Incluye un sistema robusto de autenticación y gestión de permisos por proyecto.",
    techStack: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "TailwindCSS",
      "JavaScript",
    ],
    demoUrl: "https://uptask-frontend-w4hc.vercel.app/",
    repoUrl: "https://github.com/tomireyes28/uptask_frontend",
    image: "/projects/uptask.png",
  },
  {
    id: "devtree",
    title: "DevTree — Ecosistema de Enlaces Personalizado",
    shortDescription:
      "Demo user: user@user.com, password:12345678 | Plataforma Full Stack que permite diseñar un perfil de enlaces público personalizable. Construido con React y MongoDB, se enfoca en la persistencia de datos y en ofrecer una interfaz dinámica para que los creadores centralicen su presencia digital con un solo link.",
    techStack: [
      "React",
      "Node.js",
      "Express",
      "MongoDB",
      "JavaScript",
      "HTML",
      "CSS",
    ],
    demoUrl: "https://devtree-frontend-phi.vercel.app/",
    repoUrl: "https://github.com/tomireyes28/devtree_frontend",
    image: "/projects/devtree.png",
  },
  {
    id: "dea-simulator",
    title: "Simulador de DEA — Clínica Adventista Belgrano",
    shortDescription:
      "Simulador interactivo de Desfibrilador Externo Automático (DEA). Desarrollado con JavaScript vanilla para entrenamiento médico de alta fidelidad, simulando comportamiento del dispositivo, secuencias guiadas y respuesta de audio en tiempo real.",
    techStack: ["JavaScript", "HTML", "CSS"],
    demoUrl: "https://dea-beta.vercel.app/",
    repoUrl: "https://github.com/tomireyes28/dea",
    image: "/projects/dea-simulador.png",
  },
];