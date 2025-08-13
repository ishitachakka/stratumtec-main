import { Header } from "@/components/Header";
import { HeroCarousel } from "@/components/HeroCarousel";
import { SolutionsSection } from "@/components/SolutionsSection";
import { ConsultingSection } from "@/components/ConsultingSection";
import { CompanySection } from "@/components/CompanySection";
import { BlogSection } from "@/components/BlogSection";

import { ContactForm } from "@/components/ContactForm";
import { Footer } from "@/components/Footer";
import { WhatsAppPlugin } from "@/components/WhatsAppPlugin";
import { LanguageProvider } from "@/contexts/LanguageContext";

const Spanish = () => {
  return (
    <LanguageProvider defaultLanguage="es">
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
    </LanguageProvider>
  );
};

export default Spanish;