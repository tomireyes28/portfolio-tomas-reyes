type Status = "idle" | "sending" | "success" | "error";

export default function FormStatus({ status, language }: { status: Status; language: "es" | "en" }) {
  const messages = language === "es" ? {
    idle: "",
    sending: "Enviando mensaje",
    success: "Mensaje enviado",
    error: "No se pudo enviar. Intentá nuevamente o usá el enlace de correo.",
  } : {
    idle: "",
    sending: "Sending message",
    success: "Message sent",
    error: "Message could not be sent. Try again or use the email link.",
  };
  return <p role="status" aria-live="polite" aria-atomic="true" className="sr-only">{messages[status]}</p>;
}
