"use client";

import { useLanguage } from "@/context/LanguageContext";

export default function LanguageSwitch() {
  const { language, toggleLanguage } = useLanguage();
  return (
    <div role="group" aria-label={language === "es" ? "Idioma" : "Language"} className="language-selector">
      {(["es", "en"] as const).map((value) => (
        <button
          key={value}
          type="button"
          aria-label={value === "es" ? "Seleccionar español" : "Select English"}
          aria-pressed={language === value}
          onClick={() => { if (language !== value) toggleLanguage(); }}
        >{value.toUpperCase()}</button>
      ))}
    </div>
  );
}
