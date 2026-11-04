"use client";

import React, { useId, useRef } from "react";
import { Check, Send, ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { useContact } from "@/context/ContactContext";
import FormStatus from "@/components/ui/FormStatus";

export default function ContactForm({ compact = false }: { compact?: boolean }) {
  const { language } = useLanguage();
  const isEs = language === "es";
  const id = useId();
  const formRef = useRef<HTMLFormElement>(null);
  const { status, formData, setFormData, send, reset } = useContact();
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (formRef.current) void send(formRef.current);
  };
  const mailtoFallback = `mailto:tomireyes.tr@gmail.com?subject=${encodeURIComponent(
    formData.name ? `Contacto desde Portfolio - ${formData.name}` : "Contacto desde Portfolio"
  )}&body=${encodeURIComponent(formData.message
    ? `${formData.message}\n\nDe: ${formData.name} (${formData.email})`
    : "Hola Tomás, me contacto desde tu portfolio.")}`;
  return <div className={`contact-form my-auto ${compact ? "contact-form-compact" : ""}`}>
      <FormStatus status={status} language={language} />
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
              ? "Gracias por escribirme. Tu mensaje se envió correctamente."
              : "Thank you for reaching out. Your message was sent successfully."}
          </p>
          <button
            onClick={() => reset()}
            type="button"
            className="mt-2 inline-flex items-center gap-1 font-typewriter text-[10.5px] uppercase font-bold text-[#265538] hover:underline cursor-pointer"
          >
            <span>{isEs ? "Enviar otro mensaje" : "Send another message"}</span>
          </button>
        </div>
      ) : (
        <form ref={formRef} aria-busy={status === "sending"} onSubmit={handleSubmit} className="space-y-2 my-auto">
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
              <label htmlFor={`${id}-name`} className="font-typewriter text-[9px] uppercase tracking-wider text-[#6a4f3b] font-bold block mb-0.5">
                {isEs ? "Nombre" : "Name"}
              </label>
              <input
                type="text"
                id={`${id}-name`}
                name="name"
                autoComplete="name"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder={isEs ? "Tu nombre" : "Your name"}
                className="w-full px-2.5 py-1.5 rounded-xs bg-[#fdfbf7] border border-[#8c6d46]/40 text-[#22140c] placeholder:text-[#8c6e54]/50 font-serif-book text-xs focus:outline-none focus:border-[#265538] focus:ring-1 focus:ring-[#265538]/30 transition-all shadow-2xs"
              />
            </div>

            <div>
              <label htmlFor={`${id}-email`} className="font-typewriter text-[9px] uppercase tracking-wider text-[#6a4f3b] font-bold block mb-0.5">
                {isEs ? "Correo" : "Email"}
              </label>
              <input
                type="email"
                id={`${id}-email`}
                name="email"
                autoComplete="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder={isEs ? "tu@email.com" : "you@email.com"}
                className="w-full px-2.5 py-1.5 rounded-xs bg-[#fdfbf7] border border-[#8c6d46]/40 text-[#22140c] placeholder:text-[#8c6e54]/50 font-serif-book text-xs focus:outline-none focus:border-[#265538] focus:ring-1 focus:ring-[#265538]/30 transition-all shadow-2xs"
              />
            </div>
          </div>

          <div>
            <label htmlFor={`${id}-message`} className="font-typewriter text-[9px] uppercase tracking-wider text-[#6a4f3b] font-bold block mb-0.5">
              {isEs ? "Mensaje" : "Message"}
            </label>
            <textarea
              id={`${id}-message`}
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

  </div>;
}
