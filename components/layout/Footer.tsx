import { Github, Linkedin, Code } from "lucide-react";
import Link from "next/link"; // Usamos Link para navegación interna

const footerLinks = [
  { name: 'Proyectos', href: '#projects' },
  { name: 'Tecnologías', href: '#skills' },
  { name: 'Sobre mí', href: '#about' },
  { name: 'Contacto', href: '#contact' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800 bg-slate-950 py-10 px-4">
      <div className="mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-6 text-slate-400">
        
        {/* IZQUIERDA: BRANDING Y STACK */}
        <div className="flex flex-col items-center md:items-start space-y-2">
          
          <Link href="#top" className="text-lg font-bold tracking-tight text-white hover:text-sky-400 transition">
             <span className="text-sky-400">&lt;/&gt;</span> Tomás Reyes
          </Link>
          
          <p className="text-xs">
            &copy; {currentYear} Tomás Reyes. Todos los derechos reservados.
          </p>
          
          <div className="flex items-center gap-1 text-xs pt-1">
            <Code size={12} className="text-slate-600" />
            <span className="text-slate-500">
                Construido con Next.js, Tailwind CSS & TypeScript.
            </span>
          </div>
        </div>

        {/* CENTRO: NAVEGACIÓN RÁPIDA (Opcional) */}
        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            {footerLinks.map((link) => (
                <Link 
                    key={link.href} 
                    href={link.href} 
                    className="text-sm font-medium hover:text-sky-400 transition"
                >
                    {link.name}
                </Link>
            ))}
        </nav>

        {/* DERECHA: REDES SOCIALES */}
        <div className="flex items-center gap-4">
          <a
            href="https://github.com/tomireyes28"
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub"
            className="text-slate-400 hover:text-sky-400 transition"
          >
            <Github size={22} />
          </a>

          <a
            href="https://www.linkedin.com/in/tomasreyes1/"
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn"
            className="text-slate-400 hover:text-sky-400 transition"
          >
            <Linkedin size={22} />
          </a>
        </div>
      </div>
    </footer>
  );
}