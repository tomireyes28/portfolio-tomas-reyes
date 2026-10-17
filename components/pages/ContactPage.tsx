"use client";

import React, { useState, useRef } from "react";
import {
  Mail,
  Github,
  Linkedin,
  Copy,
  Check,
  Send,
  ExternalLink,
  MessageSquare,
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
    <div className="flex flex-col justify-between h-full py-2 space-y-4">
      {/* Title */}
      <div>
        <h2 className="font-serif-book text-2xl lg:text-3xl font-bold text-[#22140c] leading-tight">
          {t.contact.titlePart1}{" "}
          <span className="italic underline decoration-[#882b2b] decoration-1 underline-offset-4">
            {t.contact.titleHighlight}
          </span>{" "}
          {t.contact.titlePart2}
        </h2>
      </div>

      {/* Direct Email Card */}
      <div className="p-3.5 rounded-xs bg-[#fdfbf7] border border-[#8c6d46]/35 shadow-xs">
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2.5 text-[#22140c] overflow-hidden">
            <div className="w-8 h-8 rounded-xs bg-[#882b2b]/10 border border-[#882b2b]/25 flex items-center justify-center shrink-0">
              <Mail className="w-4 h-4 text-[#882b2b]" />
            </div>
            <span className="font-typewriter text-xs sm:text-sm font-bold truncate select-all text-[#22140c]">
              tomireyes.tr@gmail.com
            </span>
          </div>

          <button
            onClick={copyEmail}
            type="button"
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xs font-typewriter text-[10px] uppercase tracking-wider transition-all cursor-pointer shrink-0 border ${
              copied
                ? "bg-[#265538]/15 text-[#265538] border-[#265538] font-bold"
                : "bg-[#22140c] hover:bg-[#3d2416] text-[#f5ebd6] border-[#22140c]"
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

      {/* Professional Networks */}
      <div className="grid grid-cols-2 gap-3">
        {/* GitHub Card */}
        <a
          href="https://github.com/tomireyes28"
          target="_blank"
          rel="noopener noreferrer"
          className="group p-3.5 rounded-xs bg-[#fdfbf7] border border-[#8c6d46]/35 hover:border-[#22140c] shadow-xs hover:shadow-md transition-all duration-200"
        >
          <div className="flex items-center justify-between mb-2">
            <div className="w-7 h-7 rounded-xs bg-[#22140c]/5 border border-[#22140c]/20 flex items-center justify-center text-[#22140c] group-hover:scale-110 transition-transform">
              <Github className="w-4 h-4" />
            </div>
            <ExternalLink className="w-3.5 h-3.5 text-[#8c6e54] opacity-50 group-hover:opacity-100 transition-opacity" />
          </div>
          <div>
            <span className="font-typewriter text-xs font-bold block text-[#22140c]">
              GitHub
            </span>
            <span className="font-typewriter text-[10px] text-[#6a4f3b] block truncate mt-0.5">
              @tomireyes28
            </span>
          </div>
        </a>

        {/* LinkedIn Card */}
        <a
          href="https://www.linkedin.com/in/tomasreyes1/"
          target="_blank"
          rel="noopener noreferrer"
          className="group p-3.5 rounded-xs bg-[#fdfbf7] border border-[#8c6d46]/35 hover:border-[#265538] shadow-xs hover:shadow-md transition-all duration-200"
        >
          <div className="flex items-center justify-between mb-2">
            <div className="w-7 h-7 rounded-xs bg-[#265538]/10 border border-[#265538]/30 flex items-center justify-center text-[#265538] group-hover:scale-110 transition-transform">
              <Linkedin className="w-4 h-4" />
            </div>
            <ExternalLink className="w-3.5 h-3.5 text-[#265538] opacity-50 group-hover:opacity-100 transition-opacity" />
          </div>
          <div>
            <span className="font-typewriter text-xs font-bold block text-[#22140c]">
              LinkedIn
            </span>
            <span className="font-typewriter text-[10px] text-[#265538] block truncate mt-0.5">
              /in/tomasreyes1
            </span>
          </div>
        </a>
      </div>

      {/* Subtle location indicator */}
      <div className="pt-2 border-t border-[#8c6d46]/25 flex items-center justify-between">
        <span className="font-typewriter text-[10px] text-[#8c6e54] uppercase tracking-wider">
          Buenos Aires, Argentina
        </span>
        <span className="font-typewriter text-[10px] text-[#265538] font-semibold flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-[#265538]" />
          {isEs ? "Disponible" : "Available"}
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
    <div className="flex flex-col justify-between h-full py-2">
      {/* Form Header */}
      <div className="border-b border-[#8c6d46]/30 pb-2 mb-2 flex items-center justify-between">
        <h3 className="font-serif-book text-xl font-bold text-[#22140c] leading-tight">
          {t.contact.form.title}
        </h3>
        <MessageSquare className="w-4 h-4 text-[#8c6d46]" />
      </div>

      {/* Form */}
      <form
        ref={form}
        onSubmit={handleSubmit}
        className="flex-1 flex flex-col justify-between space-y-3.5"
      >
        <div className="space-y-3.5">
          {/* Field 1: Name */}
          <div className="space-y-1">
            <label
              htmlFor="name"
              className="font-typewriter text-[10.5px] uppercase tracking-wider text-[#4a3424] font-semibold block"
            >
              {t.contact.form.name}
            </label>
            <input
              id="name"
              name="name"
              type="text"
              required
              placeholder={t.contact.form.namePlaceholder}
              className="w-full bg-[#fdfbf7]/80 border-b-2 border-[#8c6d46]/40 focus:border-[#22140c] px-2.5 py-1.5 font-serif-book text-xs sm:text-sm text-[#22140c] placeholder:text-[#8c6e54]/50 focus:outline-none transition rounded-t-xs"
            />
          </div>

          {/* Field 2: Email */}
          <div className="space-y-1">
            <label
              htmlFor="email"
              className="font-typewriter text-[10.5px] uppercase tracking-wider text-[#4a3424] font-semibold block"
            >
              {t.contact.form.email}
            </label>
            <input
              id="email"
              name="email"
              type="email"
              required
              placeholder={t.contact.form.emailPlaceholder}
              className="w-full bg-[#fdfbf7]/80 border-b-2 border-[#8c6d46]/40 focus:border-[#22140c] px-2.5 py-1.5 font-serif-book text-xs sm:text-sm text-[#22140c] placeholder:text-[#8c6e54]/50 focus:outline-none transition rounded-t-xs"
            />
          </div>

          {/* Field 3: Message */}
          <div className="space-y-1">
            <label
              htmlFor="message"
              className="font-typewriter text-[10.5px] uppercase tracking-wider text-[#4a3424] font-semibold block"
            >
              {t.contact.form.message}
            </label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              placeholder={isEs ? "Escribe tu mensaje..." : "Write your message..."}
              className="w-full bg-[#fdfbf7]/80 border-b-2 border-[#8c6d46]/40 focus:border-[#22140c] px-2.5 py-1.5 font-serif-book text-xs sm:text-sm text-[#22140c] placeholder:text-[#8c6e54]/50 focus:outline-none resize-none transition rounded-t-xs leading-relaxed"
            />
          </div>
        </div>

        {/* Action Button */}
        <div className="pt-2 border-t border-[#8c6d46]/25 flex items-center justify-end">
          <button
            type="submit"
            disabled={isSending}
            className="flex items-center gap-2 px-6 py-2.5 rounded-xs bg-[#22140c] hover:bg-[#3d2416] text-[#f5ebd6] font-typewriter text-xs font-bold uppercase tracking-wider transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed shadow-md hover:shadow-lg active:scale-95"
          >
            {isSending ? (
              <span>{t.contact.form.sending}</span>
            ) : (
              <>
                <Send className="w-3.5 h-3.5" />
                <span>{t.contact.form.btn}</span>
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
}
