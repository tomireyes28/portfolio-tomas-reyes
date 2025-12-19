import { Skill } from "@/types/Skill";

export const skills: Skill[] = [
  // FRONTEND
  { name: "React", icon: "/icons/react.svg", category: "frontend" },
  { name: "Next.js", icon: "/icons/nextjs.svg", category: "frontend" },
  { name: "TypeScript", icon: "/icons/typescript.svg", category: "frontend" },
  { name: "JavaScript (ES6+)", icon: "/icons/javascript.svg", category: "frontend" },
  { name: "TailwindCSS", icon: "/icons/tailwindcss.svg", category: "frontend" },
  { name: "Vite", icon: "/icons/vitejs.svg", category: "frontend" }, // solo si lo usaste

  // BACKEND
  { name: "Node.js", icon: "/icons/nodejs.svg", category: "backend" },
  { name: "Express", icon: "/icons/express.svg", category: "backend" },
  { name: "NestJS", icon: "/icons/nestjs.svg", category: "backend" },
  { name: "MongoDB", icon: "/icons/mongodb.svg", category: "backend" },
  { name: "Mongoose", icon: "/icons/mongoose.svg", category: "backend" },
  { name: "PostgreSQL", icon: "/icons/postgresql.svg", category: "backend" },

  // TOOLS
  { name: "Git", icon: "/icons/git.svg", category: "tools" },
  { name: "GitHub", icon: "/icons/github.svg", category: "tools" },
  { name: "Postman", icon: "/icons/postman.svg", category: "tools" },
  { name: "Vercel", icon: "/icons/vercel.svg", category: "tools" },
  { name: "Trello", icon: "/icons/trello.svg", category: "tools" },
  { name: "Slack", icon: "/icons/slack.svg", category: "tools" },
];