import React from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Building2, Globe2, Users, Target, Award, TrendingUp, Eye } from "lucide-react";
function CompanyContent() {
  const {
    t
  } = useLanguage();
  const values = [{
    icon: <Building2 className="h-8 w-8 text-stratumtec-orange" />,
    title: t.company.values.innovation.title,
    description: t.company.values.innovation.description
  }, {
    icon: <Users className="h-8 w-8 text-stratumtec-orange" />,
    title: t.company.values.excellence.title,
    description: t.company.values.excellence.description
  }, {
    icon: <Target className="h-8 w-8 text-stratumtec-orange" />,
    title: t.company.values.results.title,
    description: t.company.values.results.description
  }];
  const differentials = [{
    icon: <Globe2 className="h-12 w-12 text-stratumtec-orange" />,
    title: t.company.differentials.international.title,
    description: t.company.differentials.international.description
  }, {
    icon: <Award className="h-12 w-12 text-stratumtec-orange" />,
    title: t.company.differentials.technology.title,
    description: t.company.differentials.technology.description
  }, {
    icon: <TrendingUp className="h-12 w-12 text-stratumtec-orange" />,
    title: t.company.differentials.results.title,
    description: t.company.differentials.results.description
  }];
  return <div className="min-h-screen bg-background">
      <Header />
      
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-stratumtec-navy/95 backdrop-blur-sm relative overflow-hidden">
        <div className="container mx-auto px-4 lg:px-6 flex items-end min-h-[200px] relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-white mb-6 mt-16">
              {t.company.hero.title}
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8 leading-relaxed">
              {t.company.hero.subtitle}
            </p>
            <Button onClick={() => window.open("https://wa.me/5511999999999?text=Olá! Gostaria de agendar uma reunião para conhecer mais sobre a stratumtec.", "_blank")} className="bg-stratumtec-orange hover:bg-stratumtec-orange/90 text-white font-medium px-8 py-3 text-lg">
              {t.company.hero.cta}
            </Button>
          </div>
        </div>
      </section>

      {/* About Section - Redesigned */}
      <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-72 h-72 bg-stratumtec-orange rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-72 h-72 bg-stratumtec-navy rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="container mx-auto px-4 lg:px-6 relative z-10">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-stratumtec-navy mb-6">
                {t.company.about.title} <strong>StratumTec</strong>
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-stratumtec-orange to-stratumtec-navy mx-auto rounded-full"></div>
            </div>
            
            {/* Main Content Layout */}
            <div className="grid lg:grid-cols-3 gap-8 mb-16">
              {/* Left Column - Image */}
              <div className="lg:col-span-1">
                <div className="relative group h-full">
                  <div className="absolute -inset-1 bg-gradient-to-r from-stratumtec-orange to-stratumtec-navy rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
                  <img 
                    src="/lovable-uploads/02e3aaec-f30f-4301-a08a-1f36188f6403.png" 
                    alt="Equipe StratumTec" 
                    className="relative rounded-xl shadow-xl w-full h-full object-cover"
                  />
                </div>
              </div>
              
              {/* Right Column - Content */}
              <div className="lg:col-span-2 space-y-8">
                <Card className="p-8 bg-white/80 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
                  <CardContent className="p-0">
                    <div className="space-y-6">
                      <p className="text-lg text-stratumtec-dark leading-relaxed font-medium">
                        {t.company.about.description1}
                      </p>
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        {t.company.about.description2}
                      </p>
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        {t.company.about.description3}
                      </p>
                    </div>
                  </CardContent>
                </Card>
                
                {/* Mission and Vision Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card className="p-6 bg-gradient-to-br from-blue-50 to-blue-100/50 border-blue-200/50 hover:shadow-lg transition-all duration-300 relative">
                    <div className="absolute top-4 right-4">
                      <Target className="h-6 w-6 text-stratumtec-navy" />
                    </div>
                    <CardContent className="p-0">
                      <h3 className="text-xl font-bold text-stratumtec-navy mb-3">
                        {t.company.mission.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {t.company.mission.description}
                      </p>
                    </CardContent>
                  </Card>
                  
                  <Card className="p-6 bg-gradient-to-br from-indigo-50 to-indigo-100/50 border-indigo-200/50 hover:shadow-lg transition-all duration-300 relative">
                    <div className="absolute top-4 right-4">
                      <Eye className="h-6 w-6 text-stratumtec-navy" />
                    </div>
                    <CardContent className="p-0">
                      <h3 className="text-xl font-bold text-stratumtec-navy mb-3">
                        {t.company.vision.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {t.company.vision.description}
                      </p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
            
            {/* Bottom Highlight */}
            <Card className="p-8 bg-gradient-to-r from-stratumtec-navy to-stratumtec-navy/90 border-0 shadow-2xl">
              <CardContent className="p-0 text-center">
                <p className="text-xl text-white leading-relaxed max-w-4xl mx-auto">
                  {t.company.about.bottomHighlight}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>


      {/* Values Section */}
      <section className="py-16 bg-blue-100 rounded-none">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-stratumtec-dark mb-6">
                {t.company.values.title}
              </h2>
              <p className="text-xl text-muted-foreground">
                {t.company.values.subtitle}
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {values.map((value, index) => <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow">
                  <CardContent className="p-0">
                    <div className="mb-4 flex justify-center">
                      {value.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-stratumtec-dark mb-3">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>)}
            </div>
          </div>
        </div>
      </section>

      {/* Differentials Section */}
      <section className="py-16 bg-indigo-50">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-stratumtec-dark mb-6">
                {t.company.differentials.title}
              </h2>
              <p className="text-xl text-muted-foreground">
                {t.company.differentials.subtitle}
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {differentials.map((differential, index) => <div key={index} className="text-center">
                  <div className="mb-6 flex justify-center">
                    {differential.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-stratumtec-dark mb-4">
                    {differential.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {differential.description}
                  </p>
                </div>)}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-200">
        <div className="container mx-auto px-4 lg:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-stratumtec-dark mb-6">
              {t.company.cta.title}
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              {t.company.cta.subtitle}
            </p>
            <Button onClick={() => window.open("https://wa.me/5511999999999?text=Olá! Gostaria de agendar uma reunião para conhecer as soluções da stratumtec.", "_blank")} className="bg-stratumtec-orange hover:bg-stratumtec-orange/90 text-white font-medium px-8 py-3 text-lg">
              {t.company.cta.button}
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>;
}
export default function Company() {
  return <CompanyContent />;
}