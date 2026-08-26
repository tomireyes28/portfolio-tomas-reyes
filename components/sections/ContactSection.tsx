"use client";

import { useState, useRef } from "react";
import { Mail, Github, Linkedin, Send, Copy, Check, MessageSquare, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import Swal from "sweetalert2";
import emailjs from "@emailjs/browser";
import { useLanguage } from "@/context/LanguageContext";
import SpotlightCard from "@/components/ui/SpotlightCard";

export default function ContactSection() {
  const { t } = useLanguage();
  const [isSending, setIsSending] = useState(false);
  const [copied, setCopied] = useState(false);
  const form = useRef<HTMLFormElement>(null);

  const copyEmail = () => {
    navigator.clipboard.writeText("tomireyes.tr@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!form.current) return;

    setIsSending(true);

    emailjs
      .sendForm(
        "service_qph1s2d",
        "template_n1yn4sw",
        form.current,
        {
          publicKey: "SdG0xE3GxYiYdOXRm",
        }
      )
      .then(
        () => {
          Swal.fire({
            title: t.contact.alerts.successTitle,
            text: t.contact.alerts.successText,
            icon: "success",
            background: "#030712",
            color: "#f8fafc",
            confirmButtonColor: "#0ea5e9",
            customClass: {
              popup: "rounded-3xl border border-slate-800",
            },
          });
          form.current?.reset();
        },
        (error) => {
          console.error("EmailJS error:", error?.text || error);
          Swal.fire({
            title: t.contact.alerts.errorTitle,
            text: t.contact.alerts.errorText,
            icon: "error",
            background: "#030712",
            color: "#f8fafc",
            confirmButtonColor: "#ef4444",
            customClass: {
              popup: "rounded-3xl border border-slate-800",
            },
          });
        }
      )
      .finally(() => {
        setIsSending(false);
      });
  };

  return (
    <section id="contact" className="relative py-14 md:py-20 px-4">
      <div className="mx-auto max-w-6xl space-y-10">
        {/* Header */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 rounded-full border border-sky-500/30 bg-sky-500/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-sky-400">
            <MessageSquare size={13} />
            <span>{t.contact.badge}</span>
          </div>

          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-5xl">
            {t.contact.titlePart1}{" "}
            <span className="gradient-text-sky">{t.contact.titleHighlight}</span>{" "}
            {t.contact.titlePart2}
          </h2>

          <p className="text-base text-slate-400 sm:text-lg leading-relaxed">
            {t.contact.description}
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-12 items-stretch">
          {/* Left Column: Direct info, Quick Copy & Socials (5 cols) */}
          <SpotlightCard className="md:col-span-5 p-8 flex flex-col justify-between space-y-8">
            <div className="space-y-6">
              <div className="space-y-2">
                <p className="text-xs font-mono text-sky-400 uppercase tracking-widest font-semibold">
                  {t.contact.subtitle}
                </p>
                <h3 className="text-2xl font-bold text-white">
                  Tomás Reyes
                </h3>
              </div>

              {/* Copy Email Button Box */}
              <div className="rounded-2xl border border-slate-800/80 bg-slate-950/70 p-4 space-y-2">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2.5 text-sm text-slate-300">
                    <Mail size={16} className="text-sky-400 shrink-0" />
                    <span className="font-mono text-xs sm:text-sm">
                      tomireyes.tr@gmail.com
                    </span>
                  </div>
                  <button
                    onClick={copyEmail}
                    type="button"
                    title={t.contact.emailCopy}
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-slate-800 bg-slate-900 text-slate-300 hover:border-sky-500/50 hover:text-sky-400 transition cursor-pointer"
                  >
                    {copied ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                  </button>
                </div>
                {copied && (
                  <p className="text-[11px] text-emerald-400 font-medium animate-fade-in">
                    {t.contact.emailCopied}
                  </p>
                )}
              </div>

              <div className="space-y-3">
                <p className="text-xs text-slate-400 uppercase tracking-wider font-semibold">
                  Redes & Perfiles
                </p>
                <div className="flex items-center gap-3">
                  <a
                    href="https://github.com/tomireyes28"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-xl border border-slate-800 bg-slate-950/80 px-4 py-2.5 text-xs font-medium text-slate-300 hover:border-sky-500/50 hover:text-sky-300 transition-all shadow-sm"
                  >
                    <Github size={16} />
                    <span>GitHub</span>
                  </a>

                  <a
                    href="https://www.linkedin.com/in/tomasreyes1/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 rounded-xl border border-slate-800 bg-slate-950/80 px-4 py-2.5 text-xs font-medium text-slate-300 hover:border-sky-500/50 hover:text-sky-300 transition-all shadow-sm"
                  >
                    <Linkedin size={16} />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-slate-800/60 bg-slate-950/40 p-4 text-xs text-slate-400 flex items-center gap-2.5">
              <Sparkles size={16} className="text-sky-400 shrink-0" />
              <span>Respondo habitualmente en menos de 24 horas.</span>
            </div>
          </SpotlightCard>

          {/* Right Column: Interactive Form (7 cols) */}
          <SpotlightCard className="md:col-span-7 p-8">
            <h3 className="text-xl font-bold text-white mb-6">
              {t.contact.form.title}
            </h3>

            <form ref={form} onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5"
                >
                  {t.contact.form.name}
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder={t.contact.form.namePlaceholder}
                  className="w-full rounded-xl border border-slate-800 bg-slate-950 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-600 focus:border-sky-400 focus:outline-none focus:ring-1 focus:ring-sky-400/40 transition"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5"
                >
                  {t.contact.form.email}
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder={t.contact.form.emailPlaceholder}
                  className="w-full rounded-xl border border-slate-800 bg-slate-950 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-600 focus:border-sky-400 focus:outline-none focus:ring-1 focus:ring-sky-400/40 transition"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-1.5"
                >
                  {t.contact.form.message}
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  placeholder={t.contact.form.messagePlaceholder}
                  className="w-full resize-none rounded-xl border border-slate-800 bg-slate-950 px-4 py-3 text-sm text-slate-100 placeholder:text-slate-600 focus:border-sky-400 focus:outline-none focus:ring-1 focus:ring-sky-400/40 transition"
                />
              </div>

              <button
                type="submit"
                disabled={isSending}
                className={`w-full inline-flex items-center justify-center gap-2 rounded-xl py-3.5 text-sm font-bold text-slate-950 shadow-lg shadow-sky-500/20 transition-all cursor-pointer ${
                  isSending
                    ? "bg-slate-700 cursor-not-allowed text-slate-400"
                    : "bg-gradient-to-r from-sky-400 via-sky-500 to-blue-600 hover:scale-[1.01] hover:shadow-sky-400/30"
                }`}
              >
                {isSending ? (
                  <span>{t.contact.form.sending}</span>
                ) : (
                  <>
                    <span>{t.contact.form.btn}</span>
                    <Send size={15} />
                  </>
                )}
              </button>
            </form>
          </SpotlightCard>
        </div>
      </div>
    </section>
  );
}