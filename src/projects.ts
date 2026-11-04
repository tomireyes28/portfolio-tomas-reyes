import { Project } from "@/types/Project";

/**
 * Selección de aplicaciones, automatizaciones y sitios web.
 * Las fichas describen el alcance técnico documentado de cada proyecto.
 */
export const projects: Project[] = [
  {
    id: "plastic-who",
    title: "Plastic Who?",
    subtitle: {
      es: "Composición textil, a simple vista",
      en: "Textile composition at a glance"
    },
    shortDescription: {
      es: "Consulta y compara la composición de prendas de marcas argentinas.",
      en: "Browse and compare the fiber composition of clothing from Argentine brands."
    },
    caseStudy: {
      context: {
        es: "Cada marca publica la composición de sus prendas de forma distinta. Hace falta un formato común para compararlas.",
        en: "Each brand publishes garment composition differently. A common format makes comparison possible."
      },
      implementation: {
        es: "Scraping de catálogos, normalización de fibras con NLP/Regex y consulta por marca y material.",
        en: "Catalog scraping, fiber normalization with NLP/Regex, and browsing by brand and material."
      },
      decision: {
        es: "Separar tela principal, forro y ribetes antes de clasificar cada prenda. Mostrar la composición con un semáforo y una trama visual.",
        en: "Separate main fabric, lining, and trims before classifying each garment. Display composition through a traffic-light indicator and a weave visualization."
      }
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
    demoUrl: "https://plasticwho.com/",
    repoUrl: "https://github.com/tomireyes28/plastic-who",
    image: "/projects/plastic-who.png",
  },

  {
    id: "mn-agency",
    title: "MN Agency",
    subtitle: {
      es: "Gestión para agencias deportivas",
      en: "Management for sports agencies"
    },
    shortDescription: {
      es: "Jugadores, contratos y búsqueda de clubes en una misma plataforma.",
      en: "Players, contracts, and club matching in one platform."
    },
    caseStudy: {
      context: {
        es: "Una agencia de representación necesita reunir información de jugadores y contratos en un solo lugar.",
        en: "A representation agency needs player and contract information in one place."
      },
      implementation: {
        es: "Gestión de contratos, cálculos financieros, PDFs, firma digital y filtros para vincular jugadores con clubes.",
        en: "Contract management, financial calculations, PDFs, digital signing, and filters for matching players with clubs."
      },
      decision: {
        es: "Modelar los datos con TypeORM y PostgreSQL y organizar la lógica de gestión en un backend NestJS.",
        en: "Model data with TypeORM and PostgreSQL and organize management logic in a NestJS backend."
      }
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
    demoUrl: "https://mnagency-app.vercel.app/login",
    repoUrl: "https://github.com/tomireyes28/mnagencyapp-backend",
    image: "/projects/mn-agency.png",
  },

  {
    id: "therapio",
    title: "Therapio",
    subtitle: {
      es: "Agenda e historias clínicas",
      en: "Appointments and patient records"
    },
    shortDescription: {
      es: "Organiza pacientes, turnos y finanzas para profesionales de salud mental.",
      en: "Organize patients, appointments, and finances for mental health professionals."
    },
    caseStudy: {
      context: {
        es: "La atención de pacientes requiere consultar historias clínicas, agenda y finanzas sin dispersar la información.",
        en: "Patient care requires access to records, appointments, and finances without scattering information across tools."
      },
      implementation: {
        es: "Panel de gestión con historias clínicas, turnos, finanzas y acceso con Google OAuth 2.0.",
        en: "Management dashboard with patient records, appointments, finances, and Google OAuth 2.0 sign-in."
      },
      decision: {
        es: "Resolver el manejo de sesiones entre el frontend en Vercel y el backend en Render.",
        en: "Handle sessions between the frontend on Vercel and the backend on Render."
      }
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
    demoUrl: "https://psycho-manager.vercel.app/",
    repoUrl: "https://github.com/tomireyes28/psycho-manager",
    image: "/projects/psychomanager.png",
  },

  {
    id: "lumi",
    title: "Lumi",
    subtitle: {
      es: "Finanzas personales y cuotas",
      en: "Personal finances and installments"
    },
    shortDescription: {
      es: "Reúne ingresos, gastos, tarjetas y reintegros para consultar tus finanzas.",
      en: "Bring income, expenses, cards, and refunds together to review your finances."
    },
    caseStudy: {
      context: {
        es: "Los gastos cotidianos y las cuotas de tarjetas necesitan una vista conjunta para entender los compromisos de pago.",
        en: "Daily expenses and card installments need a shared view to make payment commitments easier to understand."
      },
      implementation: {
        es: "Registro de ingresos y gastos, seguimiento de tarjetas y cuotas, simulador de reintegros y panel con analíticas.",
        en: "Income and expense tracking, cards and installments, a refund simulator, and an analytics dashboard."
      },
      decision: {
        es: "Persistir los movimientos con NestJS, Prisma y PostgreSQL e integrar el acceso con Google.",
        en: "Persist transactions with NestJS, Prisma, and PostgreSQL and integrate Google sign-in."
      }
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
    demoUrl: "https://lumi-beta-one.vercel.app/",
    repoUrl: "https://github.com/tomireyes28/lumi",
    image: "/projects/lumi.png",
  },

  {
    id: "mn-igx-sync",
    title: "MN Sync",
    subtitle: {
      es: "De Instagram a X, automáticamente",
      en: "From Instagram to X, automatically"
    },
    shortDescription: {
      es: "Sincroniza publicaciones y archivos multimedia con una ejecución programada.",
      en: "Sync posts and media through scheduled runs."
    },
    caseStudy: {
      context: {
        es: "Publicar el mismo contenido en dos redes requiere repetir pasos y gestionar accesos distintos.",
        en: "Publishing the same content on two networks requires repeated steps and different authentication flows."
      },
      implementation: {
        es: "Integración de Meta Graph API y la API de X para consultar publicaciones, subir medios y republicar contenido.",
        en: "Integration of Meta Graph API and the X API to fetch posts, upload media, and republish content."
      },
      decision: {
        es: "Combinar tokens de larga duración de Meta, OAuth 1.0a para medios en X y ejecuciones programadas con GitHub Actions.",
        en: "Combine Meta long-lived tokens, OAuth 1.0a for X media uploads, and scheduled runs with GitHub Actions."
      }
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
    demoUrl: "",
    repoUrl: "https://github.com/tomireyes28/ig-x-sync",
    image: "/projects/ig-x-sync.jpg",
  },

  {
    id: "cinema-agenda",
    title: "Cine Radar",
    subtitle: {
      es: "Carteleras de cine en un solo lugar",
      en: "Cinema showtimes in one place"
    },
    shortDescription: {
      es: "Consulta horarios y estrenos de distintas cadenas desde una misma interfaz.",
      en: "Browse showtimes and releases from different cinema chains in one interface."
    },
    caseStudy: {
      context: {
        es: "Cada cadena publica su propia cartelera; compararlas requiere visitar varios sitios.",
        en: "Each cinema chain publishes its own showtimes, making comparison a multi-site task."
      },
      implementation: {
        es: "Scraping automatizado con Puppeteer, almacenamiento en PostgreSQL y una API REST consumida por el frontend Next.js.",
        en: "Automated scraping with Puppeteer, PostgreSQL storage, and a REST API consumed by the Next.js frontend."
      },
      decision: {
        es: "Unificar los datos de distintas cadenas en el backend antes de presentar horarios y estrenos.",
        en: "Unify data from different chains in the backend before displaying showtimes and releases."
      }
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
    demoUrl: "https://cine-radar-app.vercel.app/",
    repoUrl: "https://github.com/tomireyes28/cine-radar",
    image: "/projects/cinemaapp.png",
  },

  {
    id: "aberturas-nyl",
    title: "Aberturas N&L",
    subtitle: {
      es: "Productos, obras y consultas",
      en: "Products, completed work, and inquiries"
    },
    shortDescription: {
      es: "Sitio comercial para mostrar líneas de aberturas y recibir consultas.",
      en: "A business website to showcase windows and doors and receive inquiries."
    },
    caseStudy: {
      context: {
        es: "Una empresa de carpintería de aluminio necesita presentar sus productos y obras y ofrecer una vía de contacto.",
        en: "An aluminum joinery business needs to present its products and completed work and provide a contact channel."
      },
      implementation: {
        es: "Catálogo de líneas, galería de obras y formulario de contacto integrado con Web3Forms.",
        en: "Product range showcase, completed-work gallery, and a contact form integrated with Web3Forms."
      },
      decision: {
        es: "Usar la exportación estática de Next.js para alojar el sitio en Hostinger, con atención al SEO y a las imágenes.",
        en: "Use Next.js static export for Hostinger hosting, with attention to SEO and images."
      }
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
    demoUrl: "https://aberturasnyl.com/",
    repoUrl: "https://github.com/tomireyes28/aberturas-nyl",
    image: "/projects/aberturas-nyl.png",
  },

  {
    id: "dea-simulator",
    title: {
      es: "Simulador de DEA",
      en: "AED Simulator"
    },
    subtitle: {
      es: "Secuencias guiadas con audio",
      en: "Guided sequences with audio"
    },
    shortDescription: {
      es: "Simulación interactiva del funcionamiento de un desfibrilador externo automático.",
      en: "Interactive simulation of an automated external defibrillator."
    },
    caseStudy: {
      context: {
        es: "El proyecto para la Clínica Adventista Belgrano representa la secuencia de uso de un DEA en una interfaz interactiva.",
        en: "The project for Clínica Adventista Belgrano represents an AED operating sequence in an interactive interface."
      },
      implementation: {
        es: "Simulación de estados del dispositivo, pasos guiados y respuestas de audio.",
        en: "Device state simulation, guided steps, and audio responses."
      },
      decision: {
        es: "Implementar la interacción con JavaScript, HTML y CSS, sin un framework de interfaz.",
        en: "Implement the interaction with JavaScript, HTML, and CSS without a UI framework."
      }
    },
    techStack: ["JavaScript", "HTML", "CSS"],
    category: "frontend",
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
