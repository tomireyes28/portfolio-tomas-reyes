"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { translations } from "../data/translations"; // Importamos tu diccionario

// Definimos los tipos para que TypeScript no se queje
type Language = "es" | "en";
type TranslationType = typeof translations.es;

interface LanguageContextType {
  language: Language;
  t: TranslationType;
  toggleLanguage: () => void;
}

// Creamos el contexto (la antena)
const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Creamos el Proveedor (el que emite la señal)
export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("es"); // Empezamos en Español

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === "es" ? "en" : "es"));
  };

  // Seleccionamos el diccionario correcto según el idioma actual
  const t = translations[language];

  return (
    <LanguageContext.Provider value={{ language, t, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
}

// Hook personalizado para usarlo fácil en tus componentes
export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage debe usarse dentro de un LanguageProvider");
  }
  return context;
}