import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";

export const metadata: Metadata = {
  title: "Tomás Reyes | Full Stack Developer",
  description: "Portfolio de Tomás Reyes - Full Stack Developer (React, TypeScript, MERN).",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className="bg-slate-950 text-slate-100 antialiased">
        <LanguageProvider>
        {children}
        </LanguageProvider>
      </body>
    </html>
  );
}