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

const English = () => {
  useEffect(() => {
    document.title = "StratumTec | Technology Solutions for Customer Experience and Operations";
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", "StratumTec delivers technology solutions for customer experience, operational efficiency, and digital transformation. Platforms, AI, integrations, and consulting.");
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

export default English;
