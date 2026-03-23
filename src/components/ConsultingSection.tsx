import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarPopup } from "@/components/CalendarPopup";
import { CheckCircle, Target, BarChart3, Users, DollarSign, Headphones, Settings, MessageCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { pageTranslations } from "@/lib/translations";

const icons = [Target, BarChart3, Users, DollarSign, Headphones, Settings];

export const ConsultingSection = () => {
  const { language } = useLanguage();
  const t = pageTranslations[language].consultingSection;

  return (
    <section id="consultoria" className="py-16 lg:py-24 bg-muted/30 brand-pattern">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-stratumtec-blue mb-4">{t.title}</h2>
          <p className="text-lg text-stratumtec-text max-w-3xl mx-auto">{t.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {t.services.map((service, index) => {
            const IconComponent = icons[index];
            return (
              <Card key={index} className="h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="flex-1">
                      <CardTitle className="text-xl text-stratumtec-blue mb-2">{service.title}</CardTitle>
                      <CardDescription className="text-stratumtec-text">{service.description}</CardDescription>
                    </div>
                    <div className="w-16 h-16 bg-stratumtec-orange/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <IconComponent className="h-8 w-8 text-stratumtec-orange" />
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-stratumtec-text">
                        <CheckCircle className="h-4 w-4 text-stratumtec-green mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-4">
                    <Button variant="navy" size="sm" className="w-full" onClick={() => { window.location.href = "/consultoria"; }}>{t.learnMore}</Button>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        <div className="text-center">
          <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-card max-w-4xl mx-auto">
            <h3 className="text-2xl lg:text-3xl font-bold text-stratumtec-navy mb-6">{t.ctaTitle}</h3>
            <p className="text-lg text-stratumtec-text mb-8 max-w-2xl mx-auto">{t.ctaDesc}</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CalendarPopup trigger={<Button className="bg-stratumtec-orange hover:bg-stratumtec-orange/90 text-white px-8 py-3"><MessageCircle className="h-4 w-4 mr-2" />{t.scheduleConsulting}</Button>} triggerAsChild />
              <Button variant="outline" className="border-stratumtec-navy text-stratumtec-navy hover:bg-stratumtec-navy hover:text-white px-8 py-3" onClick={() => { window.location.href = "/contato"; }}>{t.requestProposal}</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
