"use client";

import React, { useState, useRef } from "react";
import {
  Mail,
  Github,
  Linkedin,
  Copy,
  Check,
  Send,
  Stamp,
} from "lucide-react";
import Swal from "sweetalert2";
import emailjs from "@emailjs/browser";
import { useLanguage } from "@/context/LanguageContext";

export function ContactLeftPage() {
  const { language, t } = useLanguage();
  const [copied, setCopied] = useState(false);
  const isEs = language === "es";

  const copyEmail = () => {
    navigator.clipboard.writeText("tomireyes.tr@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="flex flex-col justify-between h-full space-y-4 py-1">
      {/* Page Title */}
      <div>
        <h2 className="font-serif-book text-2xl lg:text-3xl font-bold text-[#22140c] leading-tight">
          {t.contact.titlePart1}{" "}
          <span className="italic underline decoration-[#882b2b] decoration-1 underline-offset-4">
            {t.contact.titleHighlight}
          </span>{" "}
          {t.contact.titlePart2}
        </h2>
        <p className="font-serif-book text-xs sm:text-sm text-[#452f20] mt-2 leading-relaxed">
          {t.contact.description}
        </p>
      </div>

      {/* Postal Address Slip (Direct on paper, no black boxes) */}
      <div className="border border-[#8c6d46]/40 rounded-xs p-3.5 bg-[#f5ebd6]/60 space-y-2 relative">
        <div className="flex items-center justify-between border-b border-[#8c6d46]/25 pb-1.5">
          <span className="font-typewriter text-[10px] uppercase tracking-wider text-[#6a4f3b]">
            {isEs ? "Dirección de Correo Directo" : "Direct Dispatch Address"}
          </span>
          <Stamp className="w-3.5 h-3.5 text-[#882b2b]" />
        </div>

        <div className="flex items-center justify-between gap-2 pt-1">
          <div className="flex items-center gap-2 text-[#22140c] overflow-hidden">
            <Mail className="w-4 h-4 text-[#882b2b] shrink-0" />
            <span className="font-typewriter text-xs sm:text-sm font-bold truncate">
              tomireyes.tr@gmail.com
            </span>
          </div>

          <button
            onClick={copyEmail}
            type="button"
            title={t.contact.emailCopy}
            className="flex items-center gap-1 px-2.5 py-1 rounded-xs bg-[#22140c] hover:bg-[#3d2416] text-[#f5ebd6] font-typewriter text-[10px] uppercase tracking-wider transition-colors cursor-pointer shrink-0"
          >
            {copied ? (
              <>
                <Check className="w-3 h-3 text-[#72cf91]" />
                <span>{isEs ? "Copiado" : "Copied"}</span>
              </>
            ) : (
              <>
                <Copy className="w-3 h-3" />
                <span>{isEs ? "Copiar" : "Copy"}</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Postal Cancellation Stamps for GitHub & LinkedIn */}
      <div className="space-y-2">
        <span className="font-serif-book text-xs font-bold italic text-[#6a4f3b]">
          {isEs ? "Sellos de correspondencia & redes:" : "Correspondence stamps & links:"}
        </span>
        <div className="grid grid-cols-2 gap-3">
          <a
            href="https://github.com/tomireyes28"
            target="_blank"
            rel="noopener noreferrer"
            className="ink-stamp flex items-center gap-2.5 p-2.5 text-[#22140c] border-[#22140c]/40 rounded-xs transition-transform hover:-translate-y-0.5"
          >
            <Github className="w-4 h-4 shrink-0" />
            <div>
              <span className="font-typewriter text-xs font-bold block">
                GitHub
              </span>
              <span className="font-typewriter text-[10px] text-[#8c6e54]">
                @tomireyes28
              </span>
            </div>
          </a>

          <a
            href="https://www.linkedin.com/in/tomasreyes1/"
            target="_blank"
            rel="noopener noreferrer"
            className="ink-stamp flex items-center gap-2.5 p-2.5 text-[#265538] border-[#265538]/50 rounded-xs transition-transform hover:-translate-y-0.5"
          >
            <Linkedin className="w-4 h-4 shrink-0" />
            <div>
              <span className="font-typewriter text-xs font-bold block text-[#22140c]">
                LinkedIn
              </span>
              <span className="font-typewriter text-[10px] text-[#8c6e54]">
                /in/tomasreyes1
              </span>
            </div>
          </a>
        </div>
      </div>

      {/* Postscript Handwritten Note */}
      <div className="pt-2 text-right">
        <span className="font-handwriting text-lg text-[#6a4f3b] italic">
          {isEs
            ? "P.D.: Suelo responder en menos de 24 horas."
            : "P.S.: I usually reply within 24 hours."}
        </span>
      </div>
    </div>
  );
}

export function ContactRightPage() {
  const { language, t } = useLanguage();
  const [isSending, setIsSending] = useState(false);
  const form = useRef<HTMLFormElement>(null);
  const isEs = language === "es";

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current) return;

    setIsSending(true);

    emailjs
      .sendForm("service_qph1s2d", "template_n1yn4sw", form.current, {
        publicKey: "SdG0xE3GxYiYdOXRm",
      })
      .then(
        () => {
          Swal.fire({
            title: t.contact.alerts.successTitle,
            text: t.contact.alerts.successText,
            icon: "success",
            background: "#29180f",
            color: "#f5ebd6",
            confirmButtonColor: "#265538",
          });
          form.current?.reset();
        },
        (error) => {
          console.error("EmailJS error:", error?.text || error);
          Swal.fire({
            title: t.contact.alerts.errorTitle,
            text: t.contact.alerts.errorText,
            icon: "error",
            background: "#29180f",
            color: "#f5ebd6",
            confirmButtonColor: "#882b2b",
          });
        }
      )
      .finally(() => {
        setIsSending(false);
      });
  };

  return (
    <div className="flex flex-col justify-between h-full py-1">
      {/* Letter Header */}
      <div className="border-b border-[#8c6d46]/30 pb-2 mb-2 flex items-center justify-between">
        <h3 className="font-serif-book text-lg font-bold text-[#22140c]">
          {isEs ? "Carta de Correspondencia" : "Letter of Correspondence"}
        </h3>
        <span className="font-handwriting text-base text-[#8c6e54]">
          {isEs ? "Buenos Aires, 2026" : "Buenos Aires, 2026"}
        </span>
      </div>

      {/* Lined Stationery Paper Form (Inputs as natural lines, no gray boxes!) */}
      <form
        ref={form}
        onSubmit={handleSubmit}
        className="flex-1 flex flex-col justify-between space-y-3"
      >
        <div className="space-y-3">
          {/* Line 1: Sender Name */}
          <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-2">
            <label
              htmlFor="name"
              className="font-handwriting text-lg text-[#5a4232] shrink-0"
            >
              {isEs ? "De parte de:" : "From:"}
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              placeholder={isEs ? "Tu nombre o empresa..." : "Your name or company..."}
              className="w-full bg-transparent border-b border-dashed border-[#8c6d46]/60 px-1 py-0.5 font-serif-book text-xs sm:text-sm text-[#22140c] placeholder:text-[#8c6e54]/50 focus:border-[#22140c] focus:outline-none transition"
            />
          </div>

          {/* Line 2: Sender Email */}
          <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-2">
            <label
              htmlFor="email"
              className="font-handwriting text-lg text-[#5a4232] shrink-0"
            >
              {isEs ? "Correo:" : "Email:"}
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder={isEs ? "tu@correo.com" : "you@email.com"}
              className="w-full bg-transparent border-b border-dashed border-[#8c6d46]/60 px-1 py-0.5 font-serif-book text-xs sm:text-sm text-[#22140c] placeholder:text-[#8c6e54]/50 focus:border-[#22140c] focus:outline-none transition"
            />
          </div>

          {/* Lines 3: Message on ruled paper lines */}
          <div className="space-y-1">
            <label
              htmlFor="message"
              className="font-handwriting text-lg text-[#5a4232] block"
            >
              {isEs ? "Mensaje:" : "Message:"}
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              placeholder={isEs ? "Contame sobre tu proyecto, objetivos o propuesta..." : "Tell me about your project, goals, or role..."}
              className="w-full bg-transparent border-b border-dashed border-[#8c6d46]/60 px-1 py-1 font-serif-book text-xs sm:text-sm text-[#22140c] placeholder:text-[#8c6e54]/50 focus:border-[#22140c] focus:outline-none resize-none transition leading-relaxed"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(transparent, transparent 27px, rgba(140, 109, 70, 0.25) 28px)",
                lineHeight: "28px",
              }}
            />
          </div>
        </div>

        {/* Tactile Wax Seal Send Button */}
        <div className="pt-2 flex items-center justify-between">
          <span className="font-handwriting text-base text-[#8c6e54] italic">
            {isEs ? "Sellar y despachar ➔" : "Seal and dispatch ➔"}
          </span>

          <button
            type="submit"
            disabled={isSending}
            className="wax-seal-btn flex items-center gap-2 px-6 py-2.5 rounded-full text-[#f5ebd6] font-typewriter text-xs font-bold uppercase tracking-wider cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isSending ? (
              <span>{t.contact.form.sending}</span>
            ) : (
              <>
                <Send className="w-3.5 h-3.5" />
                <span>{isEs ? "Enviar Carta" : "Send Letter"}</span>
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
