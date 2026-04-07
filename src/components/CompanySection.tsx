import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { pageTranslations } from "@/lib/translations";

export const CompanySection = () => {
  const { language } = useLanguage();
  const t = pageTranslations[language].companyHome;

  return (
    <section className="py-16 bg-stratumtec-navy/95 backdrop-blur-sm relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <img src="/lovable-uploads/ef142820-0b92-4a8d-b105-4fced7121495.png" alt="" className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 object-contain filter brightness-0 invert opacity-10" />
      </div>
      <div className="container mx-auto px-4 lg:px-6 relative z-10">
        <div className="text-center">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">{t.title}</h2>
          <div className="max-w-5xl mx-auto">
            <p className="text-xl text-white/90 mb-8 leading-relaxed">{t.description}</p>
          </div>
          <Button
            size="lg"
            className="bg-stratumtec-orange hover:bg-stratumtec-orange/90 text-white px-8 py-4 text-lg group"
            onClick={() => { window.location.href = "/consultoria"; }}
          >
            {t.ctaButton}
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};
