"use client";

import { createContext, useContext, useRef, useState, type ReactNode } from "react";

type FormData = { name: string; email: string; message: string };
type Status = "idle" | "sending" | "success" | "error";
const empty = { name: "", email: "", message: "" };
const ContactContext = createContext<{
  status: Status;
  formData: FormData;
  setFormData: (data: FormData) => void;
  reset: () => void;
  send: (form: HTMLFormElement) => Promise<void>;
} | null>(null);

export function ContactProvider({ children }: { children: ReactNode }) {
  const [status, setStatus] = useState<Status>("idle");
  const [formData, setFormData] = useState(empty);
  const pending = useRef(false);
  const send = async (form: HTMLFormElement) => {
    if (pending.current) return;
    pending.current = true;
    setStatus("sending");
    try {
      const { default: emailjs } = await import("@emailjs/browser");
      await emailjs.sendForm("service_qph1s2d", "template_n1yn4sw", form, { publicKey: "SdG0xE3GxYiYdOXRm" });
      setStatus("success");
      setFormData(empty);
    } catch {
      setStatus("error");
    } finally {
      pending.current = false;
    }
  };
  return <ContactContext.Provider value={{ status, formData, setFormData, send, reset: () => setStatus("idle") }}>{children}</ContactContext.Provider>;
}
export function useContact() {
  const context = useContext(ContactContext);
  if (!context) throw new Error("useContact debe usarse dentro de ContactProvider");
  return context;
}
