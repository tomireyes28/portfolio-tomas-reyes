// Confirmed public origin. Override only when moving the production domain.
const configured = process.env.NEXT_PUBLIC_SITE_URL || "https://portfolio-tomas-reyes.vercel.app";
export const siteUrl = new URL(configured).origin;
export const siteTitle = "Tomás Reyes | Desarrollador Full Stack y Automatización";
export const siteDescription = "Desarrollador Full Stack en Buenos Aires. Aplicaciones con Next.js, NestJS y PostgreSQL; automatización de procesos con Make, n8n y APIs.";
