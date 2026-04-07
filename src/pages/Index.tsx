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

const Index = () => {
  useEffect(() => {
    document.title = "Stratumtec | Soluções de Tecnologia para Experiência do Cliente e Operações";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "A Stratumtec entrega soluções de tecnologia para experiência do cliente, eficiência operacional e transformação digital. Plataformas, IA, integrações e consultoria.");
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

export default Index;
