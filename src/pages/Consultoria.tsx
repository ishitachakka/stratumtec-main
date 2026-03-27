import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, BarChart3, DollarSign, Headphones, Settings, Users, ArrowRight, CheckCircle, MessageCircle } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";
import { pageTranslations } from "@/lib/translations";
import { routeTable } from "@/lib/routeMap";
import { useNavigate } from "react-router-dom";

const icons = [Target, BarChart3, Users, DollarSign, Headphones, Settings];
const positions = ["left", "right", "left", "right", "left", "right"];

export default function Consultoria() {
  const { language } = useLanguage();
  const navigate = useNavigate();
  const t = pageTranslations[language].consultingPage;

  const handleWhatsApp = () => {
    window.open("https://wa.me/5511993324239", "_blank");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-stratumtec-light via-background to-stratumtec-light/30">
      <Header />

      <section className="pt-32 pb-16 bg-stratumtec-navy/95 backdrop-blur-sm relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-stratumtec-navy/5 to-stratumtec-cyan/5"></div>
        <div className="absolute top-20 right-10 w-32 h-32 bg-stratumtec-orange/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-40 h-40 bg-stratumtec-cyan/10 rounded-full blur-3xl"></div>
        <div className="container mx-auto px-4 lg:px-6 text-center relative z-10 flex items-end min-h-[200px]">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6">
              {t.heroTitle1}{" "}<span className="text-stratumtec-orange">{t.heroTitle2}</span>
            </h1>
            <p className="text-xl text-white/90 mb-8 leading-relaxed max-w-3xl mx-auto">{t.heroDesc}</p>
            <Button size="lg" onClick={handleWhatsApp} className="bg-stratumtec-orange text-white hover:bg-stratumtec-orange/90 hover:shadow-xl hover:scale-105 transition-all duration-300 px-8 py-4">
              <MessageCircle className="mr-2 h-5 w-5" />{t.scheduleConsulting}
            </Button>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="relative">
            <div className="absolute inset-0 flex justify-center">
              <svg width="600" height="2400" className="absolute" style={{ left: '50%', transform: 'translateX(-50%)' }}>
                <path d="M300 60 C380 140, 220 240, 300 320 C420 400, 180 520, 300 600 C480 680, 120 800, 300 880 C520 960, 80 1080, 300 1160 C540 1240, 60 1360, 300 1440 C560 1520, 40 1640, 300 1720 C580 1800, 20 1920, 300 2000 C380 2080, 220 2160, 300 2240 C420 2320, 180 2380, 300 2400" stroke="#009a93" strokeWidth="8" fill="none" strokeLinecap="round" className="drop-shadow-lg" />
                {[60, 320, 600, 880, 1160, 1440, 1720].map((y, index) => (
                  <g key={index}><circle cx="300" cy={y} r="14" fill="#009a93" stroke="#ffffff" strokeWidth="4" className="drop-shadow-md" /><circle cx="300" cy={y} r="8" fill="#ffffff" className="animate-pulse" /></g>
                ))}
              </svg>
            </div>

            <div className="space-y-32 relative z-10">
              {t.services.map((service, index) => {
                const IconComponent = icons[index];
                const isLeft = positions[index] === "left";
                return (
                  <div key={index} className={`flex items-center ${isLeft ? 'flex-row' : 'flex-row-reverse'} gap-16`}>
                    <div className={`flex-1 ${isLeft ? 'text-right' : 'text-left'}`}>
                      <Card className="group border-2 border-stratumtec-light shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 bg-white/90 backdrop-blur-sm hover:border-stratumtec-orange/50">
                        <CardHeader className="pb-4">
                          <div className={`flex items-center gap-4 ${isLeft ? 'flex-row-reverse' : 'flex-row'}`}>
                            <div className="w-20 h-20 rounded-2xl bg-stratumtec-navy flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg">
                              <IconComponent className="h-10 w-10 text-white" />
                            </div>
                            <div className={isLeft ? 'text-right' : 'text-left'}>
                              <CardTitle className="text-2xl font-heading text-stratumtec-navy mb-1">{service.title}</CardTitle>
                              <p className="text-sm font-medium text-stratumtec-orange">{service.subtitle}</p>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <CardDescription className="text-lg text-stratumtec-text mb-6 leading-relaxed">{service.description}</CardDescription>
                          <div className="bg-stratumtec-orange/10 rounded-xl p-4 mb-6 border border-stratumtec-orange/20">
                            <p className="text-sm font-semibold text-stratumtec-navy flex items-center gap-2"><CheckCircle className="h-4 w-4 text-stratumtec-orange" />{service.benefits}</p>
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-6">
                            {service.features.map((feature, idx) => (
                              <div key={idx} className="flex items-center text-sm text-stratumtec-text"><div className="w-2 h-2 bg-stratumtec-orange rounded-full mr-3" />{feature}</div>
                            ))}
                          </div>
                          <div className="flex gap-3">
                            <Button size="sm" className="bg-stratumtec-orange text-white hover:bg-stratumtec-orange/90 hover:shadow-lg" onClick={handleWhatsApp}>{t.learnMore}<ArrowRight className="ml-2 h-4 w-4" /></Button>
                            <Button variant="outline" size="sm" className="border-stratumtec-orange text-stratumtec-orange hover:bg-stratumtec-orange hover:text-white" onClick={() => navigate(routeTable.contact[language])}>{t.requestProposal}</Button>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                    <div className="w-16"></div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 relative overflow-hidden bg-neutral-500">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-stratumtec-orange/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-white/10 rounded-full blur-2xl"></div>
        <div className="container mx-auto px-4 lg:px-6 text-center relative z-10">
          <div className="max-w-4xl mx-auto text-white">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-white">{t.ctaTitle}</h2>
            <p className="text-xl mb-8 opacity-90">{t.ctaDesc}</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center"><div className="text-3xl font-bold text-stratumtec-orange mb-2">20+</div><div className="text-white font-medium">{t.yearsExp}</div></div>
              <div className="text-center"><div className="text-3xl font-bold text-stratumtec-cyan mb-2">200+</div><div className="text-white font-medium">{t.projects}</div></div>
              <div className="text-center"><div className="text-3xl font-bold text-green-400 mb-2">98%</div><div className="text-white font-medium">{t.satisfaction}</div></div>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" onClick={handleWhatsApp} className="bg-stratumtec-orange text-white hover:bg-stratumtec-orange/90 hover:scale-105 transition-all duration-300 px-8 py-4 shadow-xl">
                <MessageCircle className="mr-2 h-5 w-5" />{t.scheduleConsulting}
              </Button>
              <Button variant="outline" size="lg" className="border-white text-stratumtec-cyan hover:bg-stratumtec-orange hover:border-stratumtec-orange hover:text-white hover:scale-105 transition-all duration-300 px-8 py-4" onClick={() => navigate(routeTable.contact[language])}>{t.requestProposal}</Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
