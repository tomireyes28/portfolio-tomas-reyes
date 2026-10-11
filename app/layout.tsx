import type { Metadata } from "next";
import { Inter, Lora, Caveat, Courier_Prime } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";
import { BookProvider } from "@/context/BookContext";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const lora = Lora({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-lora",
});

const caveat = Caveat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-caveat",
});

const courierPrime = Courier_Prime({
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-courier",
});

export const metadata: Metadata = {
  title: "Tomás Reyes | Bitácora de Ingeniería & Producto — Full Stack Developer",
  description:
    "Portfolio interactivo de Tomás Reyes — Desarrollador Full Stack & Product Engineer especializado en Next.js, React, NestJS, TypeScript e Inteligencia Artificial.",
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
      "Explora la bitácora interactiva de proyectos, arquitectura y habilidades de Tomás Reyes.",
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
    <html
      lang="es"
      className={`${inter.variable} ${lora.variable} ${caveat.variable} ${courierPrime.variable} dark`}
    >
      <body className="relative h-screen w-screen overflow-hidden bg-[#16100b] font-sans text-[#2c1810] antialiased selection:bg-[#c9a84c] selection:text-[#1a1209]">
        <LanguageProvider>
          <BookProvider>{children}</BookProvider>
        </LanguageProvider>
      </body>
    </html>
  );
}