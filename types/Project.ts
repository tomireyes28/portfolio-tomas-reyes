export type LocalizedText = string | { es: string; en: string };

export interface Project {
  id: string;
  title: string | { es: string; en: string };
  shortDescription: string | { es: string; en: string };
  subtitle?: LocalizedText;
  caseStudy?: {
    context: LocalizedText;
    implementation: LocalizedText;
    decision: LocalizedText;
  };
  techStack: string[];
  demoUrl: string;
  repoUrl: string;
  image: string;
  category?: "fullstack" | "frontend" | "tools";
  featured?: boolean;
  demoCredentials?: { user: string; pass: string };
}
