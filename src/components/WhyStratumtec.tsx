import { useLanguage } from "@/contexts/LanguageContext";
import { homeContent } from "@/data/homeContent";
import { CheckCircle } from "lucide-react";

export const WhyStratumtec = () => {
  const { language } = useLanguage();
  const t = homeContent[language].whyStratumtec;

  return (
    <section className="py-20 bg-secondary/95 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_50%,hsl(var(--stratumtec-orange)/0.05),transparent_70%)]" />
      <div className="container mx-auto px-4 lg:px-6 relative z-10">
        <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary-foreground mb-16 text-center">
          {t.title}
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {t.differentiators.map((d, i) => (
            <div key={i} className="flex items-start gap-5 p-6 rounded-xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                <CheckCircle className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="text-lg font-heading font-bold text-primary-foreground mb-2">{d.title}</h3>
                <p className="text-white/75 leading-relaxed text-sm">{d.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
