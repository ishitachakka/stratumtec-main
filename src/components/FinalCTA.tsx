import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { homeContent } from "@/data/homeContent";
import { routeTable } from "@/lib/routeMap";
import { useNavigate } from "react-router-dom";

export const FinalCTA = () => {
  const { language } = useLanguage();
  const navigate = useNavigate();
  const t = homeContent[language].finalCta;

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="max-w-4xl mx-auto text-center bg-card rounded-2xl p-10 lg:p-16 shadow-card border border-border">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-secondary mb-6">{t.title}</h2>
          <p className="text-lg text-muted-foreground mb-10 leading-relaxed max-w-2xl mx-auto">{t.description}</p>
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-10 py-4 text-lg"
            onClick={() => navigate(routeTable.contact[language])}
          >
            {t.cta}
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};
