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
import { useLanguage } from "@/contexts/LanguageContext";

const Spanish = () => {
  const { setLanguage } = useLanguage();
  useEffect(() => { setLanguage('es'); }, []);

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
