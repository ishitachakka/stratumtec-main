import { Card } from "@/components/ui/card";

export const CompanySection = () => {
  return (
    <section className="py-16 bg-stratumtec-navy/95 backdrop-blur-sm relative overflow-hidden">
      {/* Subtle brand pattern overlay */}
      <div className="absolute inset-0 opacity-5">
        <img 
          src="/lovable-uploads/ef142820-0b92-4a8d-b105-4fced7121495.png" 
          alt="" 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 object-contain filter brightness-0 invert opacity-10"
        />
      </div>
      <div className="container mx-auto px-4 lg:px-6 relative z-10">
        <div className="text-center mb-16">
          <h3 className="text-3xl md:text-4xl font-heading font-bold text-white mb-6">
            Sobre a <strong>stratumtec</strong>
          </h3>
          <div className="max-w-5xl mx-auto">
            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              A <strong>stratumtec</strong> atua com o respaldo tecnológico, a experiência internacional e os produtos desenvolvidos pela Netstratum - referência global em soluções tecnológicas customizadas, integração de múltiplos sistemas, soluções cloud e tecnologias aplicadas à comunicação, com mais de 25 anos de atuação em projetos de alta complexidade.
            </p>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <Card className="p-10 bg-white/10 border-stratumtec-orange/30 shadow-card hover:shadow-elevated hover:bg-white/15 transition-smooth backdrop-blur-sm">
            <div className="flex items-start gap-8">
              <div className="flex-1">
                <h4 className="text-2xl font-heading font-bold text-white mb-4">
                  Soluções Modulares e Integráveis
                </h4>
                <p className="text-lg text-white/90 leading-relaxed">
                  O foco da <strong>stratumtec</strong> é entregar soluções modulares e integráveis que se conectam facilmente a qualquer sistema, plataforma ou infraestrutura já existente, de forma ultra customizada. Atendemos às demandas de comunicação omnichannel, automação inteligente, data analytics e estratégias de CX com flexibilidade total.
                </p>
              </div>
              <div className="w-16 h-16 bg-gradient-to-br from-stratumtec-orange to-stratumtec-orange/80 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                </svg>
              </div>
            </div>
          </Card>

          <Card className="p-10 bg-white/10 border-stratumtec-orange/30 shadow-card hover:shadow-elevated hover:bg-white/15 transition-smooth backdrop-blur-sm">
            <div className="flex items-start gap-8">
              <div className="flex-1">
                <h4 className="text-2xl font-heading font-bold text-white mb-4">
                  Integração Sem Barreiras
                </h4>
                <p className="text-lg text-white/90 leading-relaxed">
                  Acreditamos que integração não deve ser uma barreira, mas um acelerador. Por isso, desenvolvemos nossas soluções para se encaixarem em qualquer ambiente — de forma rápida, segura e sem fricção.
                </p>
              </div>
              <div className="w-16 h-16 bg-gradient-to-br from-stratumtec-orange to-stratumtec-orange/80 rounded-xl flex items-center justify-center flex-shrink-0">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
            </div>
          </Card>
        </div>

        {/* Bottom Section with enhanced styling */}
        <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-10 text-center border border-white/10 mb-16">
          <p className="text-xl text-white/90 leading-relaxed max-w-4xl mx-auto">
            Aliamos agilidade, proximidade e visão estratégica à robustez de uma base tecnológica validada globalmente, garantindo <span className="font-semibold text-stratumtec-orange">eficiência, escalabilidade e resultados concretos</span> desde o primeiro projeto.
          </p>
        </div>

        {/* Enhanced Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center group">
            <div className="text-4xl md:text-5xl font-heading font-bold text-stratumtec-orange mb-3 group-hover:scale-110 transition-transform">
              20+
            </div>
            <div className="text-lg text-white/80">
              Anos de Experiência
            </div>
          </div>
          
          <div className="text-center group">
            <div className="text-4xl md:text-5xl font-heading font-bold text-stratumtec-orange mb-3 group-hover:scale-110 transition-transform">
              100%
            </div>
            <div className="text-lg text-white/80">
              Soluções Integráveis
            </div>
          </div>
          
          <div className="text-center group">
            <div className="text-4xl md:text-5xl font-heading font-bold text-stratumtec-orange mb-3 group-hover:scale-110 transition-transform">
              Global
            </div>
            <div className="text-lg text-white/80">
              Alcance Internacional
            </div>
          </div>
          
          <div className="text-center group">
            <div className="text-4xl md:text-5xl font-heading font-bold text-stratumtec-orange mb-3 group-hover:scale-110 transition-transform">
              Alta
            </div>
            <div className="text-lg text-white/80">
              Complexidade de Projetos
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};