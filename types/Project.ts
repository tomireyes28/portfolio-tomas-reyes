export interface Project {
  id: string;
  title: string | { es: string; en: string };
  shortDescription: string | { es: string; en: string };
  techStack: string[];
  demoUrl: string;
  repoUrl: string;
  image: string;
  category?: "fullstack" | "frontend" | "tools";
  featured?: boolean;
}