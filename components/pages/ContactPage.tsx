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
  ExternalLink,
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
    <div className="flex flex-col justify-between h-full space-y-3 py-1">
      {/* Postal Cancellation Header & Title */}
      <div>
        <div className="flex items-center justify-between border-b border-[#8c6d46]/30 pb-1.5 mb-2">
          <div className="flex items-center gap-1.5">
            <Stamp className="w-3.5 h-3.5 text-[#882b2b]" />
            <span className="font-typewriter text-[9.5px] uppercase tracking-wider text-[#6a4f3b] font-semibold">
              {isEs ? "Estación Postal • Buenos Aires" : "Postal Station • Buenos Aires"}
            </span>
          </div>
          <span className="font-typewriter text-[9px] text-[#8c6e54] tracking-widest">
            № 11-DESP
          </span>
        </div>

        <h2 className="font-serif-book text-2xl lg:text-3xl font-bold text-[#22140c] leading-tight">
          {t.contact.titlePart1}{" "}
          <span className="italic underline decoration-[#882b2b] decoration-1 underline-offset-4">
            {t.contact.titleHighlight}
          </span>{" "}
          {t.contact.titlePart2}
        </h2>
        <p className="font-serif-book text-xs sm:text-sm text-[#452f20] mt-1.5 leading-relaxed">
          {t.contact.description}
        </p>
      </div>

      {/* Airmail / Postal Dispatch Slip for Direct Email (No digital black boxes) */}
      <div className="relative p-3 rounded-xs bg-[#f8f2e4] border border-[#8c6d46]/45 shadow-sm space-y-2">
        <div className="flex items-center justify-between border-b border-[#8c6d46]/25 pb-1">
          <span className="font-typewriter text-[9px] uppercase tracking-wider text-[#6a4f3b] flex items-center gap-1">
            <span className="inline-block w-1.5 h-1.5 rounded-full bg-[#882b2b]" />
            {isEs ? "Vía Postal Directa" : "Direct Dispatch Line"}
          </span>
          <span className="font-typewriter text-[9px] text-[#8c6e54] italic">
            tomireyes.tr@gmail.com
          </span>
        </div>

        <div className="flex items-center justify-between gap-2 pt-0.5">
          <div className="flex items-center gap-2 text-[#22140c] overflow-hidden">
            <Mail className="w-4 h-4 text-[#882b2b] shrink-0" />
            <span className="font-typewriter text-xs sm:text-sm font-bold truncate select-all text-[#22140c]">
              tomireyes.tr@gmail.com
            </span>
          </div>

          <button
            onClick={copyEmail}
            type="button"
            title={t.contact.emailCopy}
            className={`flex items-center gap-1 px-2.5 py-1 rounded-xs font-typewriter text-[10px] uppercase tracking-wider transition-all cursor-pointer shrink-0 border ${
              copied
                ? "bg-[#265538]/10 text-[#265538] border-[#265538] shadow-inner font-bold"
                : "bg-[#ebdcc3]/70 hover:bg-[#dfcdad] text-[#452f20] border-[#8c6d46]/60 hover:border-[#22140c] shadow-xs"
            }`}
          >
            {copied ? (
              <>
                <Check className="w-3 h-3 text-[#265538]" />
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

      {/* Philatelic Postage Stamps for GitHub & LinkedIn */}
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <span className="font-serif-book text-xs font-bold italic text-[#6a4f3b]">
            {isEs ? "Estampillas de correspondencia & redes:" : "Correspondence stamps & networks:"}
          </span>
          <span className="font-typewriter text-[9px] text-[#8c6e54]">
            [CLIC PARA ABRIR]
          </span>
        </div>

        <div className="grid grid-cols-2 gap-2.5">
          {/* GitHub Stamp */}
          <a
            href="https://github.com/tomireyes28"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative p-2.5 rounded-xs bg-[#fbf7ee] border-2 border-dashed border-[#22140c]/35 hover:border-[#22140c] shadow-xs hover:shadow-md transition-all duration-200 transform hover:-translate-y-0.5 hover:rotate-0 -rotate-0.5"
          >
            {/* Stamp Denomination badge */}
            <div className="flex items-center justify-between text-[#8c6e54] border-b border-[#22140c]/15 pb-1 mb-1.5">
              <span className="font-typewriter text-[8.5px] font-bold tracking-widest text-[#22140c]">
                POSTAGE 28¢
              </span>
              <ExternalLink className="w-2.5 h-2.5 opacity-60 group-hover:opacity-100 transition-opacity" />
            </div>

            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-[#22140c]/5 border border-[#22140c]/20 flex items-center justify-center shrink-0 text-[#22140c] group-hover:scale-110 transition-transform">
                <Github className="w-4 h-4" />
              </div>
              <div className="overflow-hidden">
                <span className="font-typewriter text-xs font-bold block text-[#22140c] truncate">
                  GitHub
                </span>
                <span className="font-typewriter text-[9.5px] text-[#6a4f3b] truncate block">
                  @tomireyes28
                </span>
              </div>
            </div>
          </a>

          {/* LinkedIn Stamp */}
          <a
            href="https://www.linkedin.com/in/tomasreyes1/"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative p-2.5 rounded-xs bg-[#fbf7ee] border-2 border-dashed border-[#265538]/40 hover:border-[#265538] shadow-xs hover:shadow-md transition-all duration-200 transform hover:-translate-y-0.5 hover:rotate-0 rotate-0.5"
          >
            {/* Stamp Denomination badge */}
            <div className="flex items-center justify-between text-[#265538]/70 border-b border-[#265538]/20 pb-1 mb-1.5">
              <span className="font-typewriter text-[8.5px] font-bold tracking-widest text-[#265538]">
                NETWORK 01¢
              </span>
              <ExternalLink className="w-2.5 h-2.5 opacity-60 group-hover:opacity-100 transition-opacity" />
            </div>

            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-[#265538]/10 border border-[#265538]/30 flex items-center justify-center shrink-0 text-[#265538] group-hover:scale-110 transition-transform">
                <Linkedin className="w-4 h-4" />
              </div>
              <div className="overflow-hidden">
                <span className="font-typewriter text-xs font-bold block text-[#22140c] truncate">
                  LinkedIn
                </span>
                <span className="font-typewriter text-[9.5px] text-[#265538] truncate block">
                  /in/tomasreyes1
                </span>
              </div>
            </div>
          </a>
        </div>
      </div>

      {/* Postscript Handwritten Note */}
      <div className="pt-1 border-t border-[#8c6d46]/20 flex items-center justify-between">
        <span className="font-typewriter text-[9px] text-[#8c6e54] uppercase tracking-wider">
          {isEs ? "Tiempo de respuesta" : "Reply estimate"}
        </span>
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
      {/* Explorer Letterhead Stationary Header */}
      <div className="border-b-2 border-double border-[#8c6d46]/35 pb-2 mb-2 flex items-center justify-between">
        <div>
          <span className="font-typewriter text-[8.5px] uppercase tracking-widest text-[#8c6e54] block">
            {isEs ? "Expedición Tomás Reyes • Registro Postal" : "Tomás Reyes Expedition • Postal Record"}
          </span>
          <h3 className="font-serif-book text-lg font-bold text-[#22140c] leading-tight">
            {isEs ? "Carta de Correspondencia" : "Letter of Correspondence"}
          </h3>
        </div>
        <div className="text-right">
          <span className="font-handwriting text-base text-[#6a4f3b] block">
            Buenos Aires
          </span>
          <span className="font-typewriter text-[9px] text-[#8c6e54] tracking-widest">
            ANNO 2026
          </span>
        </div>
      </div>

      {/* Lined Stationery Paper Form (Fine continuous ink lines, no dashed/gray coupon boxes) */}
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
              className="font-handwriting text-xl text-[#4a3424] shrink-0"
            >
              {isEs ? "De parte de:" : "From:"}
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              placeholder={isEs ? "Tu nombre o empresa..." : "Your name or company..."}
              className="w-full bg-transparent border-b border-[#8c6d46]/45 px-1 py-0.5 font-serif-book text-xs sm:text-sm text-[#22140c] placeholder:text-[#8c6e54]/50 focus:border-[#22140c] focus:outline-none transition"
            />
          </div>

          {/* Line 2: Sender Email */}
          <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-2">
            <label
              htmlFor="email"
              className="font-handwriting text-xl text-[#4a3424] shrink-0"
            >
              {isEs ? "Correo:" : "Email:"}
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder={isEs ? "tu@correo.com" : "you@email.com"}
              className="w-full bg-transparent border-b border-[#8c6d46]/45 px-1 py-0.5 font-serif-book text-xs sm:text-sm text-[#22140c] placeholder:text-[#8c6e54]/50 focus:border-[#22140c] focus:outline-none transition"
            />
          </div>

          {/* Line 3: Message on perfectly-spaced ruled paper lines */}
          <div className="space-y-1">
            <div className="flex items-center justify-between">
              <label
                htmlFor="message"
                className="font-handwriting text-xl text-[#4a3424] block"
              >
                {isEs ? "Mensaje:" : "Message:"}
              </label>
              <span className="font-typewriter text-[8.5px] text-[#8c6e54] uppercase tracking-wider">
                {isEs ? "[Papel pautado]" : "[Ruled stationery]"}
              </span>
            </div>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              placeholder={
                isEs
                  ? "Contame sobre tu proyecto, objetivos o propuesta..."
                  : "Tell me about your project, goals, or role..."
              }
              className="w-full bg-transparent border-b border-[#8c6d46]/45 px-1 py-1 font-serif-book text-xs sm:text-sm text-[#22140c] placeholder:text-[#8c6e54]/50 focus:border-[#22140c] focus:outline-none resize-none transition leading-[28px]"
              style={{
                backgroundImage:
                  "repeating-linear-gradient(transparent, transparent 27px, rgba(140, 109, 70, 0.22) 28px)",
                lineHeight: "28px",
              }}
            />
          </div>
        </div>

        {/* Tactile 3D Red Wax Seal Dispatch Button */}
        <div className="pt-2 border-t border-[#8c6d46]/20 flex items-center justify-between gap-3">
          <div className="flex flex-col">
            <span className="font-handwriting text-lg text-[#5a4232] italic leading-tight">
              {isEs ? "Sellar con lacre y despachar ➔" : "Seal with wax and dispatch ➔"}
            </span>
            <span className="font-typewriter text-[8.5px] text-[#8c6e54]">
              {isEs ? "Llegará directo a mi bandeja" : "Delivers directly to my inbox"}
            </span>
          </div>

          <button
            type="submit"
            disabled={isSending}
            className="wax-seal-stamp group relative flex items-center gap-2.5 px-5 py-2.5 rounded-full cursor-pointer disabled:opacity-60 disabled:cursor-not-allowed select-none transition-all duration-200"
          >
            {/* 3D Wax Seal Ring & Monogram */}
            <div className="w-6 h-6 rounded-full bg-[#561117] border border-[#a8262f]/60 flex items-center justify-center shrink-0 shadow-inner group-hover:scale-105 transition-transform">
              <span className="font-serif-book text-[11px] font-bold text-[#f5ebd6] tracking-tighter">
                TR
              </span>
            </div>

            <div className="flex flex-col text-left">
              <span className="font-typewriter text-[10.5px] font-bold uppercase tracking-wider text-[#f5ebd6] leading-none">
                {isSending
                  ? isEs
                    ? "Sellando..."
                    : "Sealing..."
                  : isEs
                  ? "Enviar Carta"
                  : "Send Letter"}
              </span>
              <span className="font-typewriter text-[8px] text-[#e8c9b0]/80 tracking-widest uppercase mt-0.5">
                {isEs ? "Sello de Cera Roja" : "Red Wax Seal"}
              </span>
            </div>

            <Send className="w-3.5 h-3.5 text-[#f5ebd6] ml-1 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>
      </form>
    </div>
  );
}
