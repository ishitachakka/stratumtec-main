import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { homeContent } from "@/data/homeContent";
import { CalendarPopup } from "@/components/CalendarPopup";
import { routeTable } from "@/lib/routeMap";
import { useNavigate } from "react-router-dom";

export const HeroSection = () => {
  const { language } = useLanguage();
  const navigate = useNavigate();
  const t = homeContent[language].hero;

  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden bg-gradient-to-br from-secondary via-secondary/90 to-primary/30">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_50%,hsl(var(--stratumtec-cyan)/0.15),transparent_70%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_80%_20%,hsl(var(--stratumtec-orange)/0.1),transparent_60%)]" />
      <div className="relative z-10 container mx-auto px-4 lg:px-6 py-32">
        <div className="max-w-4xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-heading font-bold text-primary-foreground mb-8 leading-tight animate-fade-in !text-white" style={{ color: 'white' }}>
            {t.title}
          </h1>
          <p className="text-xl md:text-2xl text-white/85 mb-10 max-w-3xl leading-relaxed opacity-0 animate-fade-in" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
            {t.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-in" style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
            <CalendarPopup
              trigger={
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-4 text-lg transition-smooth group">
                  {t.primaryCta}
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              }
              triggerAsChild
            />
            <Button
              variant="outline"
              size="lg"
              className="border-white/30 text-white hover:bg-white/10 font-semibold px-8 py-4 text-lg"
              onClick={() => navigate(routeTable.solutions[language])}
            >
              {t.secondaryCta}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
