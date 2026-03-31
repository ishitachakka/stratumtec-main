import { useLanguage } from "@/contexts/LanguageContext";
import { homeContent } from "@/data/homeContent";

export const IntroSection = () => {
  const { language } = useLanguage();
  const t = homeContent[language].intro;

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-secondary mb-8 leading-tight">
            {t.title}
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            {t.description}
          </p>
        </div>
      </div>
    </section>
  );
};
