import { useEffect } from "react";
import { Header } from "@/components/Header";
import { HeroCarousel } from "@/components/HeroCarousel";
import { SolutionsSection } from "@/components/SolutionsSection";
import { ConsultingSection } from "@/components/ConsultingSection";
import { CompanySection } from "@/components/CompanySection";
import { BlogSection } from "@/components/BlogSection";
import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { WhatsAppPlugin } from "@/components/WhatsAppPlugin";

const Spanish = () => {
  useEffect(() => {
    document.title = "Stratumtec | Soluciones de Tecnología para Experiencia del Cliente y Operaciones";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "Stratumtec ofrece soluciones de tecnología para experiencia del cliente, eficiencia operacional y transformación digital. Plataformas, IA, integraciones y consultoría.");
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroCarousel />
        <SolutionsSection />
        <ConsultingSection />
        <CompanySection />
        <BlogSection />
        <ContactForm />
      </main>
      <Footer />
      <WhatsAppPlugin />
    </div>
  );
};

export default Spanish;
