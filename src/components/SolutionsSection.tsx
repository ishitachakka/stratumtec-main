import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CalendarPopup } from "@/components/CalendarPopup";
import { Brain, Network, BarChart3, Route, ArrowRight, Zap, Users, Settings } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { pageTranslations } from "@/lib/translations";

const icons = [BarChart3, Zap, Users, Brain, Network, Settings, Route];
const highlights = [false, false, false, false, false, false, false];

export const SolutionsSection = () => {
  const { language } = useLanguage();
  const t = pageTranslations[language].solutionsSection;

  return (
    <section id="solucoes" className="py-20 bg-stratumtec-light brand-pattern-subtle">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-stratumtec-navy mb-6">{t.title}</h2>
          <p className="text-xl text-stratumtec-text max-w-3xl mx-auto leading-relaxed">{t.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {t.solutions.map((solution, index) => {
            const IconComponent = icons[index] || Brain;
            return (
              <Card key={index} className="group relative overflow-hidden border-0 shadow-card hover:shadow-elevated transition-smooth bg-white">
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-xl font-heading text-stratumtec-navy">{solution.title}</CardTitle>
                    </div>
                    <div className="w-16 h-16 rounded-lg flex items-center justify-center ml-4 group-hover:scale-110 transition-transform flex-shrink-0 bg-stratumtec-navy/10">
                      <IconComponent className="h-8 w-8 text-stratumtec-navy" />
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <Button variant="hero" className="w-full group/btn" onClick={() => { window.location.href = "/solucoes"; }}>
                    {t.learnMore}
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <div className="bg-white rounded-2xl p-8 shadow-card max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-stratumtec-orange/10 rounded-full flex items-center justify-center"><Users className="h-6 w-6 text-stratumtec-orange" /></div>
                <div className="w-12 h-12 bg-stratumtec-navy/10 rounded-full flex items-center justify-center"><Settings className="h-6 w-6 text-stratumtec-navy" /></div>
                <div className="w-12 h-12 bg-stratumtec-cyan/10 rounded-full flex items-center justify-center"><Zap className="h-6 w-6 text-stratumtec-cyan" /></div>
              </div>
            </div>
            <h3 className="text-2xl md:text-3xl font-heading font-bold text-stratumtec-navy mb-4">{t.customSolution}</h3>
            <p className="text-lg text-stratumtec-text mb-6 max-w-2xl mx-auto">{t.customSolutionDesc}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CalendarPopup trigger={<Button size="lg" className="bg-stratumtec-orange hover:bg-stratumtec-orange/90 text-white px-8 py-3">{t.talkExpert}</Button>} triggerAsChild />
              <Button variant="outline" size="lg" className="border-stratumtec-navy text-stratumtec-navy hover:bg-stratumtec-navy hover:text-white px-8 py-3" onClick={() => { window.location.href = "/contato"; }}>{t.requestQuote}</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
