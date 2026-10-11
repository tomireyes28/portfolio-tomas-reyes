"use client";

import React, { useState, useRef } from "react";
import {
  Mail,
  Github,
  Linkedin,
  Send,
  Copy,
  Check,
  Sparkles,
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
      {/* Header */}
      <div>
        <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-xs bg-[#8c2d2d]/15 border border-[#8c2d2d]/40 text-[#8c2d2d] font-typewriter text-[10px] uppercase tracking-wider mb-1.5">
          <Stamp className="w-3.5 h-3.5" />
          <span>{t.contact.badge}</span>
        </div>

        <h2 className="font-serif-book text-2xl lg:text-3xl font-bold text-[#25160e] leading-tight">
          {t.contact.titlePart1}{" "}
          <span className="underline decoration-[#8c2d2d] decoration-2 underline-offset-4">
            {t.contact.titleHighlight}
          </span>{" "}
          {t.contact.titlePart2}
        </h2>

        <p className="font-serif-book text-xs sm:text-sm text-[#3a2418] mt-2 leading-relaxed">
          {t.contact.description}
        </p>
      </div>

      {/* Direct Postal Address / Email Copy Box */}
      <div className="bg-[#f4ebd9] border-2 border-[#8c6d46]/65 p-3.5 rounded-xs shadow-2xs space-y-2">
        <span className="font-typewriter text-[10px] uppercase tracking-widest text-[#6e523e] block">
          {isEs
            ? "📮 Dirección de Correo Oficial"
            : "📮 Official Postal Email"}
        </span>

        <div className="flex items-center justify-between gap-2 bg-[#e8dcc4] border border-[#8c6d46]/45 px-3 py-2 rounded-xs">
          <div className="flex items-center gap-2 text-[#25160e] overflow-hidden">
            <Mail className="w-4 h-4 text-[#8c2d2d] shrink-0" />
            <span className="font-typewriter text-xs sm:text-sm font-bold truncate">
              tomireyes.tr@gmail.com
            </span>
          </div>

          <button
            onClick={copyEmail}
            type="button"
            title={t.contact.emailCopy}
            className="flex items-center gap-1 px-2 py-1 rounded-xs bg-[#25160e] hover:bg-[#3d2516] text-[#f5e8c7] font-typewriter text-[10px] uppercase tracking-wider transition-colors cursor-pointer shrink-0"
          >
            {copied ? (
              <>
                <Check className="w-3 h-3 text-[#65c483]" />
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

      {/* Social Links as Postal Stamps */}
      <div className="space-y-2">
        <p className="font-typewriter text-[11px] font-bold uppercase tracking-wider text-[#4a3325]">
          {isEs ? "Redes & Perfiles Oficiales" : "Official Networks & Profiles"}
        </p>
        <div className="grid grid-cols-2 gap-3">
          <a
            href="https://github.com/tomireyes28"
            target="_blank"
            rel="noopener noreferrer"
            className="passport-stamp flex items-center gap-2.5 p-2.5 bg-[#f4ebd9]/80 hover:bg-[#f4ebd9] text-[#25160e] rounded-xs transition-transform hover:-translate-y-0.5"
          >
            <Github className="w-5 h-5 text-[#25160e] shrink-0" />
            <div>
              <span className="font-typewriter text-xs font-bold block">
                GitHub
              </span>
              <span className="font-typewriter text-[10px] text-[#6e523e]">
                @tomireyes28
              </span>
            </div>
          </a>

          <a
            href="https://www.linkedin.com/in/tomasreyes1/"
            target="_blank"
            rel="noopener noreferrer"
            className="passport-stamp flex items-center gap-2.5 p-2.5 bg-[#f4ebd9]/80 hover:bg-[#f4ebd9] text-[#2b583c] rounded-xs transition-transform hover:-translate-y-0.5"
          >
            <Linkedin className="w-5 h-5 text-[#2b583c] shrink-0" />
            <div>
              <span className="font-typewriter text-xs font-bold block text-[#25160e]">
                LinkedIn
              </span>
              <span className="font-typewriter text-[10px] text-[#6e523e]">
                /in/tomasreyes1
              </span>
            </div>
          </a>
        </div>
      </div>

      {/* 24h Response Guarantee Note */}
      <div className="p-2.5 bg-[#2b583c]/12 border border-[#2b583c]/40 rounded-xs flex items-center gap-2 text-xs font-serif-book text-[#25160e]">
        <Sparkles className="w-4 h-4 text-[#2b583c] shrink-0" />
        <span>
          {isEs
            ? "Respondo habitualmente en menos de 24 horas."
            : "I usually respond within 24 hours."}
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
            background: "#2a190f",
            color: "#f5e8c7",
            confirmButtonColor: "#2b583c",
          });
          form.current?.reset();
        },
        (error) => {
          console.error("EmailJS error:", error?.text || error);
          Swal.fire({
            title: t.contact.alerts.errorTitle,
            text: t.contact.alerts.errorText,
            icon: "error",
            background: "#2a190f",
            color: "#f5e8c7",
            confirmButtonColor: "#8c2d2d",
          });
        }
      )
      .finally(() => {
        setIsSending(false);
      });
  };

  return (
    <div className="flex flex-col justify-between h-full py-1">
      {/* Vintage Telegram / Postal Card Container */}
      <div className="relative bg-[#f7efde] border-2 border-[#8c6d46] p-4 sm:p-5 rounded-xs shadow-sm h-full flex flex-col justify-between">
        {/* Top Telegram Header */}
        <div className="flex items-center justify-between border-b-2 border-double border-[#8c6d46]/50 pb-2 mb-3">
          <div>
            <span className="font-typewriter text-[10px] uppercase tracking-widest text-[#8c2d2d] font-bold block">
              {isEs ? "SERVICIO TELEGRÁFICO DIRECTO" : "DIRECT TELEGRAM DISPATCH"}
            </span>
            <h3 className="font-serif-book text-lg font-bold text-[#25160e]">
              {t.contact.form.title}
            </h3>
          </div>

          {/* Decorative Stamp Box */}
          <div className="w-11 h-12 border-2 border-dashed border-[#8c6d46] bg-[#e8dcc4] flex flex-col items-center justify-center text-center p-1 shrink-0">
            <span className="font-typewriter text-[8px] uppercase text-[#6e523e] leading-none">
              CORREO
            </span>
            <span className="font-serif-book text-xs font-bold text-[#8c2d2d]">
              2026
            </span>
          </div>
        </div>

        {/* Form Fields */}
        <form
          ref={form}
          onSubmit={handleSubmit}
          className="space-y-3 flex-1 flex flex-col justify-between"
        >
          <div className="space-y-2.5">
            <div>
              <label
                htmlFor="name"
                className="block font-typewriter text-[11px] font-bold uppercase tracking-wider text-[#4a3325] mb-1"
              >
                {t.contact.form.name}
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                placeholder={t.contact.form.namePlaceholder}
                className="w-full rounded-xs border border-[#8c6d46]/60 bg-[#e8dcc4]/65 px-3 py-2 font-serif-book text-xs sm:text-sm text-[#25160e] placeholder:text-[#6e523e]/60 focus:border-[#25160e] focus:bg-[#fffdf9] focus:outline-none transition"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block font-typewriter text-[11px] font-bold uppercase tracking-wider text-[#4a3325] mb-1"
              >
                {t.contact.form.email}
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                placeholder={t.contact.form.emailPlaceholder}
                className="w-full rounded-xs border border-[#8c6d46]/60 bg-[#e8dcc4]/65 px-3 py-2 font-serif-book text-xs sm:text-sm text-[#25160e] placeholder:text-[#6e523e]/60 focus:border-[#25160e] focus:bg-[#fffdf9] focus:outline-none transition"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block font-typewriter text-[11px] font-bold uppercase tracking-wider text-[#4a3325] mb-1"
              >
                {t.contact.form.message}
              </label>
              <textarea
                id="message"
                name="message"
                rows={3}
                required
                placeholder={t.contact.form.messagePlaceholder}
                className="w-full resize-none rounded-xs border border-[#8c6d46]/60 bg-[#e8dcc4]/65 px-3 py-2 font-serif-book text-xs sm:text-sm text-[#25160e] placeholder:text-[#6e523e]/60 focus:border-[#25160e] focus:bg-[#fffdf9] focus:outline-none transition"
              />
            </div>
          </div>

          <button
            type="submit"
            disabled={isSending}
            className={`w-full inline-flex items-center justify-center gap-2 rounded-xs py-2.5 font-typewriter text-xs font-bold uppercase tracking-widest border transition-all cursor-pointer shadow-xs ${
              isSending
                ? "bg-[#8c6d46]/50 text-[#4a3325] border-[#8c6d46] cursor-not-allowed"
                : "bg-[#8c2d2d] hover:bg-[#6e2020] text-[#f5e8c7] border-[#4a1515]"
            }`}
          >
            {isSending ? (
              <span>{t.contact.form.sending}</span>
            ) : (
              <>
                <span>{t.contact.form.btn}</span>
                <Send className="w-3.5 h-3.5" />
              </>
            )}
          </button>
        </form>
      </div>
    </div>
  );
}
