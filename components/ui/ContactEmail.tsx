"use client";

import { useEffect, useRef, useState } from "react";
import { Copy, Check } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function ContactEmail() {
  const { language, t } = useLanguage();
  const [status, setStatus] = useState<"idle" | "copied" | "error">("idle");
  const timeout = useRef<ReturnType<typeof setTimeout> | null>(null);
  useEffect(() => () => { if (timeout.current) clearTimeout(timeout.current); }, []);
  const copy = async () => {
    if (timeout.current) clearTimeout(timeout.current);
    try { await navigator.clipboard.writeText("tomireyes.tr@gmail.com"); setStatus("copied"); }
    catch { setStatus("error"); }
    timeout.current = setTimeout(() => setStatus("idle"), 2500);
  };
  return <div className="contact-email">
    <div>
      <a href="mailto:tomireyes.tr@gmail.com">tomireyes.tr@gmail.com</a>
      <button type="button" onClick={copy} aria-label={t.contact.emailCopy} title={t.contact.emailCopy}>
        {status === "copied" ? <Check size={16} aria-hidden="true" /> : <Copy size={16} aria-hidden="true" />}
      </button>
    </div>
    <p role="status">{status === "copied" ? t.contact.emailCopied : status === "error" ? (language === "es" ? "No se pudo copiar. Podés seleccionar el correo." : "Could not copy. You can select the email address.") : ""}</p>
  </div>;
}
