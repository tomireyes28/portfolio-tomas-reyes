import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import BackgroundGlow from "@/components/ui/BackgroundGlow";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Tomás Reyes | Full Stack Developer & Product Engineer",
  description:
    "Portfolio de Tomás Reyes — Desarrollador Full Stack & Frontend especializado en Next.js, React, NestJS, TypeScript y arquitecturas web de alto impacto.",
  keywords: [
    "Tomás Reyes",
    "Full Stack Developer",
    "Frontend Developer",
    "Next.js",
    "React",
    "NestJS",
    "TypeScript",
    "Tailwind CSS",
    "Portfolio",
  ],
  authors: [{ name: "Tomás Reyes" }],
  openGraph: {
    title: "Tomás Reyes | Full Stack Developer & Product Engineer",
    description:
      "Desarrollador Full Stack enfocado en productos digitales rápidos, escalables y con diseño de alto nivel.",
    type: "website",
    locale: "es_ES",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className={`${inter.variable} dark scroll-smooth`}>
      <body className="relative min-h-screen bg-slate-950 font-sans text-slate-100 antialiased selection:bg-sky-500/30 selection:text-sky-300">
        <LanguageProvider>
          <BackgroundGlow />
          <div className="relative z-10">{children}</div>
        </LanguageProvider>
      </body>
    </html>
  );
}