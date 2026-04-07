import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Layers, ShieldCheck, Settings } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { pageTranslations } from "@/lib/translations";

const icons = [Target, Layers, ShieldCheck, Settings];

export const BlogSection = () => {
  const { language } = useLanguage();
  const t = pageTranslations[language].blogSection;

  return (
    <section id="conteudo" className="py-20 bg-white">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-stratumtec-navy mb-6">{t.title}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {t.items.map((item, index) => {
            const IconComponent = icons[index];
            return (
              <Card key={index} className="group border-0 shadow-card hover:shadow-elevated transition-smooth bg-white">
                <CardHeader className="pb-4">
                  <div className="flex items-start gap-4">
                    <div className="w-14 h-14 rounded-lg bg-stratumtec-navy/10 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <IconComponent className="h-7 w-7 text-stratumtec-navy" />
                    </div>
                    <CardTitle className="text-xl font-heading text-stratumtec-navy">{item.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-stratumtec-text leading-relaxed">{item.text}</p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};
