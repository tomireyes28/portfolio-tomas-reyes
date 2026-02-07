"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import Image from "next/image"; // Usamos Image de Next.js para mejor rendimiento

export default function LanguageSwitch() {
  const { language, toggleLanguage } = useLanguage();
  const isEs = language === "es";

  return (
    <div
      onClick={toggleLanguage}
      className="relative flex h-9 w-20 cursor-pointer items-center rounded-full border border-slate-700 bg-slate-950 shadow-inner hover:border-sky-500/50 transition-colors"
    >
      {/* CAPA 1: Banderas de Fondo (Inactivas/Oscuras) */}
      {/* Están posicionadas absolutamente para que se queden quietas */}
      <div className="absolute inset-0 flex w-full items-center justify-between px-2.5">
        {/* Bandera USA (Izquierda - visible cuando estamos en ES) */}
        <div className="relative h-4 w-4 opacity-30 grayscale transition-all">
            <Image 
                src="https://flagcdn.com/w40/us.png" 
                alt="US" 
                fill 
                className="object-cover rounded-sm"
            />
        </div>

        {/* Bandera España (Derecha - visible cuando estamos en EN) */}
        <div className="relative h-4 w-4 opacity-30 grayscale transition-all">
             <Image 
                src="https://flagcdn.com/w40/es.png" 
                alt="ES" 
                fill 
                className="object-cover rounded-sm"
            />
        </div>
      </div>

      {/* CAPA 2: El Interruptor (Círculo Activo) */}
      {/* Usamos un contenedor flex que cambia justify-start a justify-end */}
      <div className={`relative z-10 flex h-full w-full items-center px-1 ${isEs ? "justify-end" : "justify-start"}`}>
        <motion.div
          layout
          transition={{ type: "spring", stiffness: 700, damping: 30 }}
          className="relative h-7 w-7 overflow-hidden rounded-full border-2 border-slate-600 shadow-lg shadow-black/50"
        >
          {/* Bandera Activa (Ocupa todo el círculo) */}
          <motion.div
            key={language} // Clave para animar el cambio de imagen suavemente
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1.2 }} // Scale 1.2 para asegurar que cubra todo sin bordes
            transition={{ duration: 0.2 }}
            className="h-full w-full"
          >
            <Image
                src={isEs ? "https://flagcdn.com/w80/es.png" : "https://flagcdn.com/w80/us.png"}
                alt="Active Language"
                fill
                className="object-cover"
            />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}