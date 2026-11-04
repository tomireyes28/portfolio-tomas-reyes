"use client";

import { createContext, useContext, useSyncExternalStore, useEffect, ReactNode } from "react";
import { translations } from "@/data/translations";

type Language = "es" | "en";
interface LanguageContextType {
  language: Language;
  t: typeof translations.es;
  toggleLanguage: () => void;
}
const LanguageContext = createContext<LanguageContextType | undefined>(undefined);
const storageKey = "portfolio-language";
const listeners = new Set<() => void>();
let fallback: Language = "es";
function getLanguage(): Language {
  try {
    const saved = window.localStorage.getItem(storageKey);
    return saved === "en" || saved === "es" ? saved : fallback;
  } catch { return fallback; }
}
function subscribe(callback: () => void) {
  listeners.add(callback);
  window.addEventListener("storage", callback);
  return () => { listeners.delete(callback); window.removeEventListener("storage", callback); };
}
function toggleLanguage() {
  fallback = getLanguage() === "es" ? "en" : "es";
  try { window.localStorage.setItem(storageKey, fallback); } catch { /* In-memory preference remains usable. */ }
  listeners.forEach((notify) => notify());
}
const serverLanguage = (): Language => "es";

export function LanguageProvider({ children }: { children: ReactNode }) {
  const language = useSyncExternalStore(subscribe, getLanguage, serverLanguage);
  useEffect(() => { document.documentElement.lang = language; }, [language]);
  return <LanguageContext.Provider value={{ language, t: translations[language], toggleLanguage }}>{children}</LanguageContext.Provider>;
}
export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) throw new Error("useLanguage debe usarse dentro de un LanguageProvider");
  return context;
}
