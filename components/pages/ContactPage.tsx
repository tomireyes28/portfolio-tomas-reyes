"use client";

import React, { useState, useRef } from "react";
import {
  Mail,
  Github,
  Linkedin,
  Copy,
  Check,
  ExternalLink,
  ArrowUpRight,
  Send,
} from "lucide-react";
import emailjs from "@emailjs/browser";
import { useLanguage } from "@/context/LanguageContext";

export function ContactLeftPage() {
  const { language } = useLanguage();
  const isEs = language === "es";

  return (
    <div className="flex flex-col justify-between h-full py-1 space-y-3">
      {/* Editorial Header */}
      <div>
        <span className="font-typewriter text-[9px] uppercase tracking-widest text-[#8c6d46] block mb-0.5">
          {isEs ? "REDES & PERFILES" : "NETWORKS & PROFILES"}
        </span>
        <h2 className="font-serif-book text-2xl lg:text-3xl font-bold text-[#22140c] leading-tight">
          {isEs ? "Redes y Código" : "Profiles & Code"}
        </h2>
        <p className="font-serif-book text-xs sm:text-[13px] text-[#452f20] mt-1.5 leading-relaxed">
          {isEs
            ? "Para conocer más sobre mi trayectoria o explorar los repositorios de mis proyectos:"
            : "To learn more about my professional journey or explore my project repositories:"}
        </p>
      </div>

      {/* Main Social Channels Stack with Prominent Logos */}
      <div className="space-y-3.5 my-auto">
        {/* Channel 1: LinkedIn */}
        <a
          href="https://www.linkedin.com/in/tomasreyes1/"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center justify-between p-4 rounded-xs bg-[#fdfbf7] border border-[#8c6d46]/35 hover:border-[#265538] shadow-xs hover:shadow-md transition-all duration-200"
        >
          <div className="flex items-center gap-3.5 overflow-hidden">
            <div className="w-12 h-12 rounded-xs bg-[#265538]/10 border border-[#265538]/30 flex items-center justify-center text-[#265538] shrink-0 group-hover:scale-105 transition-transform">
              <Linkedin className="w-6 h-6 stroke-[1.8]" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-serif-book text-base font-bold text-[#22140c]">
                  LinkedIn
                </span>
                <ExternalLink className="w-3.5 h-3.5 text-[#265538] opacity-60 group-hover:opacity-100 transition-opacity" />
              </div>
              <span className="font-typewriter text-xs text-[#265538] font-semibold block mt-0.5">
                linkedin.com/in/tomasreyes1
              </span>
            </div>
          </div>
          <ArrowUpRight className="w-4 h-4 text-[#265538] opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0 ml-2" />
        </a>

        {/* Channel 2: GitHub */}
        <a
          href="https://github.com/tomireyes28"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center justify-between p-4 rounded-xs bg-[#fdfbf7] border border-[#8c6d46]/35 hover:border-[#22140c] shadow-xs hover:shadow-md transition-all duration-200"
        >
          <div className="flex items-center gap-3.5 overflow-hidden">
            <div className="w-12 h-12 rounded-xs bg-[#22140c]/5 border border-[#22140c]/20 flex items-center justify-center text-[#22140c] shrink-0 group-hover:scale-105 transition-transform">
              <Github className="w-6 h-6 stroke-[1.8]" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-serif-book text-base font-bold text-[#22140c]">
                  GitHub
                </span>
                <ExternalLink className="w-3.5 h-3.5 text-[#8c6e54] opacity-60 group-hover:opacity-100 transition-opacity" />
              </div>
              <span className="font-typewriter text-xs text-[#6a4f3b] font-semibold block mt-0.5">
                github.com/tomireyes28
              </span>
            </div>
          </div>
          <ArrowUpRight className="w-4 h-4 text-[#8c6e54] opacity-60 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0 ml-2" />
        </a>
      </div>

      {/* Footer Info: Modality & Location */}
      <div className="pt-2 border-t border-[#8c6d46]/25 flex items-center justify-between text-xs">
        <span className="font-serif-book text-[#6a4f3b] italic">
          Buenos Aires, Argentina
        </span>
        <span className="font-typewriter text-[9.5px] text-[#6a4f3b] font-semibold uppercase tracking-wider">
          {isEs ? "Remoto / Híbrido" : "Remote / Hybrid"}
        </span>
      </div>
    </div>
  );
}

export function ContactRightPage() {
  const { language } = useLanguage();
  const isEs = language === "es";
  const formRef = useRef<HTMLFormElement>(null);

  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formRef.current) return;
    setStatus("sending");

    emailjs
      .sendForm(
        "service_qph1s2d",
        "template_n1yn4sw",
        formRef.current,
        {
          publicKey: "SdG0xE3GxYiYdOXRm",
        }
      )
      .then(() => {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((err) => {
        console.error("EmailJS error:", err);
        setStatus("error");
      });
  };

  const mailtoFallback = `mailto:tomireyes.tr@gmail.com?subject=${encodeURIComponent(
    formData.name ? `Contacto desde Portfolio - ${formData.name}` : "Contacto desde Portfolio"
  )}&body=${encodeURIComponent(
    formData.message
      ? `${formData.message}\n\nDe: ${formData.name} (${formData.email})`
      : "Hola Tomás, me contacto desde tu portfolio."
  )}`;

  return (
    <div className="flex flex-col justify-between h-full py-1 space-y-2.5">
      {/* Editorial Header */}
      <div className="border-b border-[#8c6d46]/25 pb-1.5">
        <div className="flex items-center justify-between">
          <span className="font-typewriter text-[9px] uppercase tracking-widest text-[#8c6d46] block">
            {isEs ? "CONTACTO DIRECTO" : "DIRECT CONTACT"}
          </span>
          <span className="font-serif-book text-xs text-[#8c6d46]">✦ ❖ ✦</span>
        </div>
        <h3 className="font-serif-book text-2xl lg:text-3xl font-bold text-[#22140c] leading-tight">
          {isEs ? "Hablemos" : "Let's Connect"}
        </h3>
      </div>

      {/* Natural Invitation Copy */}
      <div className="font-serif-book text-xs sm:text-[12.5px] text-[#2f1c10] leading-relaxed pl-3 border-l-2 border-[#8c6d46]/35">
        <p>
          {isEs
            ? "Si te interesó lo que viste, tenés un proyecto en mente o querés charlar sobre alguna oportunidad para sumar a tu equipo, escribime directamente. Suelo responder en el día."
            : "If you found my work interesting, have a project in mind, or want to discuss an opportunity to join your team, feel free to reach out directly. I usually reply within the day."}
        </p>
      </div>

      {/* Interactive Form or Success State */}
      {status === "success" ? (
        <div className="my-auto p-4 rounded-xs bg-[#265538]/10 border border-[#265538]/40 text-center space-y-2">
          <div className="w-9 h-9 rounded-full bg-[#265538]/15 text-[#265538] flex items-center justify-center mx-auto">
            <Check className="w-5 h-5 stroke-[2.5]" />
          </div>
          <h4 className="font-serif-book text-lg font-bold text-[#22140c]">
            {isEs ? "¡Mensaje Enviado!" : "Message Sent!"}
          </h4>
          <p className="font-serif-book text-xs text-[#452f20] leading-relaxed max-w-xs mx-auto">
            {isEs
              ? "Gracias por escribirme. El mensaje llegó a mi casilla y te responderé pronto."
              : "Thank you for reaching out. Your message arrived in my inbox and I will reply soon."}
          </p>
          <button
            onClick={() => setStatus("idle")}
            type="button"
            className="mt-2 inline-flex items-center gap-1 font-typewriter text-[10.5px] uppercase font-bold text-[#265538] hover:underline cursor-pointer"
          >
            <span>{isEs ? "Enviar otro mensaje" : "Send another message"}</span>
          </button>
        </div>
      ) : (
        <form ref={formRef} onSubmit={handleSubmit} className="space-y-2 my-auto">
          {status === "error" && (
            <div className="p-2 rounded-xs bg-[#882b2b]/10 border border-[#882b2b]/35 text-[#882b2b] text-[11.5px] font-serif-book flex items-center justify-between gap-2">
              <span>
                {isEs
                  ? "Hubo un error de conexión al enviar."
                  : "Connection error while sending."}
              </span>
              <a
                href={mailtoFallback}
                className="font-typewriter text-[10px] font-bold underline shrink-0"
              >
                {isEs ? "Abrir correo" : "Open email"}
              </a>
            </div>
          )}

          <div className="grid grid-cols-2 gap-2">
            <div>
              <label className="font-typewriter text-[9px] uppercase tracking-wider text-[#6a4f3b] font-bold block mb-0.5">
                {isEs ? "Nombre" : "Name"}
              </label>
              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder={isEs ? "Tu nombre" : "Your name"}
                className="w-full px-2.5 py-1.5 rounded-xs bg-[#fdfbf7] border border-[#8c6d46]/40 text-[#22140c] placeholder:text-[#8c6e54]/50 font-serif-book text-xs focus:outline-none focus:border-[#265538] focus:ring-1 focus:ring-[#265538]/30 transition-all shadow-2xs"
              />
            </div>

            <div>
              <label className="font-typewriter text-[9px] uppercase tracking-wider text-[#6a4f3b] font-bold block mb-0.5">
                {isEs ? "Correo" : "Email"}
              </label>
              <input
                type="email"
                name="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder={isEs ? "tu@email.com" : "you@email.com"}
                className="w-full px-2.5 py-1.5 rounded-xs bg-[#fdfbf7] border border-[#8c6d46]/40 text-[#22140c] placeholder:text-[#8c6e54]/50 font-serif-book text-xs focus:outline-none focus:border-[#265538] focus:ring-1 focus:ring-[#265538]/30 transition-all shadow-2xs"
              />
            </div>
          </div>

          <div>
            <label className="font-typewriter text-[9px] uppercase tracking-wider text-[#6a4f3b] font-bold block mb-0.5">
              {isEs ? "Mensaje" : "Message"}
            </label>
            <textarea
              name="message"
              required
              rows={3}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder={
                isEs
                  ? "Contame sobre tu propuesta, proyecto o vacante..."
                  : "Tell me about your project, proposal, or open role..."
              }
              className="w-full px-2.5 py-1.5 rounded-xs bg-[#fdfbf7] border border-[#8c6d46]/40 text-[#22140c] placeholder:text-[#8c6e54]/50 font-serif-book text-xs resize-none focus:outline-none focus:border-[#265538] focus:ring-1 focus:ring-[#265538]/30 transition-all shadow-2xs"
            />
          </div>

          <div className="flex items-center justify-between pt-1 gap-2">
            <button
              type="submit"
              disabled={status === "sending"}
              className="flex items-center justify-center gap-1.5 px-3.5 py-2 rounded-xs bg-[#22140c] hover:bg-[#3d2416] text-[#f5ebd6] font-typewriter text-[11px] font-bold uppercase tracking-wider transition-all shadow-xs cursor-pointer disabled:opacity-50"
            >
              <Send className="w-3.5 h-3.5 text-[#e2be6b]" />
              <span>
                {status === "sending"
                  ? isEs
                    ? "Enviando..."
                    : "Sending..."
                  : isEs
                  ? "Enviar Mensaje"
                  : "Send Message"}
              </span>
            </button>

            <a
              href={mailtoFallback}
              className="font-serif-book text-[11px] text-[#6a4f3b] hover:text-[#22140c] underline flex items-center gap-1 transition-colors"
              title={isEs ? "Abrir cliente de correo" : "Open email client"}
            >
              <span>{isEs ? "O vía tu correo" : "Or via email"}</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>
        </form>
      )}

      {/* Signature & Availability Footer */}
      <div className="pt-2 border-t border-[#8c6d46]/20 flex items-center justify-between text-xs">
        <span className="font-typewriter text-[10px] text-[#265538] font-bold uppercase tracking-wider">
          {isEs ? "Disponibilidad inmediata" : "Immediate availability"}
        </span>
        <span className="font-handwriting text-2xl text-[#22140c] leading-none select-none">
          Tomás Reyes
        </span>
      </div>
    </div>
  );
}
