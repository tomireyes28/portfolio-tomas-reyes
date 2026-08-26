import { Skill } from "@/types/Skill";

export const skills: Skill[] = [
  // FRONTEND & UI
  { name: "React", icon: "/icons/react.svg", category: "frontend", highlight: true },
  { name: "Next.js", icon: "/icons/nextjs.svg", category: "frontend", highlight: true },
  { name: "TypeScript", icon: "/icons/typescript.svg", category: "frontend", highlight: true },
  { name: "JavaScript (ES6+)", icon: "/icons/javascript.svg", category: "frontend" },
  { name: "Tailwind CSS", icon: "/icons/tailwindcss.svg", category: "frontend", highlight: true },
  { name: "Vite", icon: "/icons/vitejs.svg", category: "frontend" },

  // BACKEND & APIS
  { name: "NestJS", icon: "/icons/nestjs.svg", category: "backend", highlight: true },
  { name: "Node.js", icon: "/icons/nodejs.svg", category: "backend", highlight: true },
  { name: "Express", icon: "/icons/express.svg", category: "backend" },

  // BASES DE DATOS & ORM
  { name: "PostgreSQL", icon: "/icons/postgressql.svg", category: "databases", highlight: true },
  { name: "MongoDB", icon: "/icons/mongodb.svg", category: "databases" },
  { name: "Mongoose", icon: "/icons/mongoose.svg", category: "databases" },
  { name: "MySQL", icon: "/icons/mysql.svg", category: "databases" },

  // HERRAMIENTAS & CLOUD
  { name: "Git", icon: "/icons/git.svg", category: "tools" },
  { name: "GitHub", icon: "/icons/github.svg", category: "tools" },
  { name: "Postman", icon: "/icons/postman.svg", category: "tools" },
  { name: "Vercel", icon: "/icons/vercel.svg", category: "tools" },
  { name: "Slack", icon: "/icons/slack.svg", category: "tools" },
  { name: "Trello", icon: "/icons/trello.svg", category: "tools" },
];