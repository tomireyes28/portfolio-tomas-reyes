"use client";

import { useState } from "react"; // Importamos useState
import { Mail, Github, Linkedin, Send } from "lucide-react"; 
import { motion } from "framer-motion"; 
import Swal from "sweetalert2"; // Importamos SweetAlert2

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

export default function ContactSection() {
  // Estado para simular la carga
  const [isSending, setIsSending] = useState(false);

  // Función para simular el envío
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSending(true);

    // Simulamos un retraso de red de 1.5 segundos
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSending(false);

    // Mostramos la alerta de éxito
    Swal.fire({
      title: "¡Mensaje enviado!",
      text: "Gracias por contactarme. Te responderé a la brevedad.",
      icon: "success",
      background: "#020617", // bg-slate-950
      color: "#f8fafc", // text-slate-50
      confirmButtonColor: "#0ea5e9", // bg-sky-500
      customClass: {
        popup: "rounded-3xl border border-slate-800",
      },
    });

    // Reseteamos el formulario
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section
      id="contact"
      className="border-t border-slate-800 bg-slate-950 py-24 px-4"
    >
      <motion.div
        className="mx-auto max-w-6xl grid gap-12 md:grid-cols-2 items-center"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        
        {/* IZQUIERDA: INFORMACIÓN Y REDES */}
        <motion.div className="space-y-6 text-slate-50" variants={itemVariants}>
          <div>
            <h2 className="text-5xl font-extrabold leading-tight">
                Listo para <span className="text-sky-400">crear</span> algo grande.
            </h2>
            <p className="mt-2 text-xl italic text-sky-400 font-medium">
              ¡Trabajemos juntos!
            </p>
          </div>

          <p className="text-lg text-slate-400 max-w-md leading-relaxed">
            Si te interesa mi perfil, tienes una propuesta de trabajo o quieres discutir un nuevo proyecto, no dudes en contactarme. Te responderé a la brevedad.
          </p>

          <div className="space-y-4 pt-4">
            <a
              href="mailto:tomireyes.tr@gmail.com"
              className="inline-flex items-center gap-4 text-lg text-slate-300 hover:text-sky-400 transition group"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 border border-sky-500/30 group-hover:border-sky-400 transition-all shrink-0">
                <Mail size={20} className="text-sky-400" />
              </span>
              <span>tomireyes.tr@gmail.com</span>
            </a>

            <div className="flex items-center gap-4 pt-2">
              <a
                href="https://github.com/tomireyes28"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-slate-900 border border-slate-800 hover:border-sky-500 hover:bg-slate-800 transition-all shadow-lg"
              >
                <Github size={24} className="text-slate-200" />
              </a>

              <a
                href="https://www.linkedin.com/in/tomasreyes1/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-slate-900 border border-slate-800 hover:border-sky-500 hover:bg-slate-800 transition-all shadow-lg"
              >
                <Linkedin size={24} className="text-slate-200" />
              </a>
            </div>
          </div>
        </motion.div>

        {/* DERECHA: FORMULARIO */}
        <motion.div 
            className="rounded-3xl bg-slate-900/40 border border-slate-800/60 px-8 py-10 shadow-2xl"
            variants={itemVariants}
        >
          <h3 className="text-2xl font-bold text-white text-center mb-8">
            Envíame un mensaje
          </h3>

          <form
            className="space-y-5"
            onSubmit={handleSubmit} // Conectamos la función aquí
          >
            <div className="text-left">
              <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2 ml-1">Nombre completo</label>
              <input
                id="name"
                name="name"
                type="text"
                className="w-full rounded-xl bg-slate-950 border border-slate-800 px-4 py-3 text-slate-100 placeholder:text-slate-600 focus:outline-none focus:border-sky-500 transition-all"
                placeholder="Tu nombre"
                required
              />
            </div>

            <div className="text-left">
              <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2 ml-1">Correo electrónico</label>
              <input
                id="email"
                name="email"
                type="email"
                className="w-full rounded-xl bg-slate-950 border border-slate-800 px-4 py-3 text-slate-100 placeholder:text-slate-600 focus:outline-none focus:border-sky-500 transition-all"
                placeholder="tu@mail.com"
                required
              />
            </div>

            <div className="text-left">
              <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2 ml-1">Mensaje</label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full rounded-xl bg-slate-950 border border-slate-800 px-4 py-3 text-slate-100 placeholder:text-slate-600 focus:outline-none focus:border-sky-500 transition-all resize-none"
                placeholder="Contame un poco sobre la idea o el proyecto..."
                required
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              disabled={isSending} // Deshabilitar mientras envía
              type="submit"
              className={`mt-4 w-full rounded-full py-4 text-base font-bold text-slate-950 shadow-lg transition-all flex items-center justify-center gap-3 group ${
                isSending ? "bg-sky-700 cursor-not-allowed" : "bg-sky-500 hover:bg-sky-400 shadow-sky-500/20"
              }`}
            >
              {isSending ? "Enviando..." : "Enviar Mensaje"}
              {!isSending && <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
            </motion.button>
          </form>
        </motion.div>
      </motion.div>
    </section>
  );
}