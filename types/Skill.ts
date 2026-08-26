export interface Skill {
  name: string;
  icon: string;
  category: "frontend" | "backend" | "databases" | "tools";
  level?: string;
  highlight?: boolean;
}