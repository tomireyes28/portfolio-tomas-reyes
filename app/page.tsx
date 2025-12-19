
import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import SkillsSection from "@/components/sections/SkillsSection";
import SoftSkillsSection from "@/components/sections/SoftSkillsSection";
import AboutSection from "@/components/sections/AboutSection";
import ContactSection from "@/components/sections/ContactSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <Navbar />
      <HeroSection />
      <ProjectsSection />
      <SkillsSection />
      <SoftSkillsSection />
      <AboutSection />
      <ContactSection />
      <Footer />
    </main>
  );
}