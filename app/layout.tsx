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
  title: "Tomás Reyes | Desarrollador Full Stack & Automatizaciones",
  description:
    "Portfolio de Tomás Reyes — Desarrollador Full Stack especializado en Next.js, React, Node.js, TypeScript y automatización de procesos (Make, n8n).",
  keywords: [
    "Tomás Reyes",
    "Desarrollador Full Stack",
    "Full Stack Developer",
    "Automatizaciones",
    "Make",
    "n8n",
    "Next.js",
    "React",
    "TypeScript",
    "Node.js",
    "PostgreSQL",
    "Tailwind CSS",
    "Portfolio Web",
    "Buenos Aires",
    "Argentina",
  ],
  authors: [{ name: "Tomás Reyes" }],
  creator: "Tomás Reyes",
  openGraph: {
    title: "Tomás Reyes | Desarrollador Full Stack & Automatizaciones",
    description:
      "Portfolio de Tomás Reyes. Proyectos de desarrollo web, arquitectura de software y automatización de flujos de trabajo.",
    type: "website",
    locale: "es_AR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tomás Reyes | Desarrollador Full Stack & Automatizaciones",
    description:
      "Portfolio de Tomás Reyes. Proyectos web, arquitectura y automatizaciones.",
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