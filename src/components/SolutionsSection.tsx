import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CalendarPopup } from "@/components/CalendarPopup";
import { 
  Brain, 
  Network, 
  BarChart3, 
  Route, 
  DollarSign,
  ArrowRight,
  Zap,
  Users,
  Settings
} from "lucide-react";

const solutions = [
  {
    icon: Brain,
    title: "NCS Technology",
    description: "Netstratum Communication Suite é uma plataforma omnichannel ágil, customizável e segura, que integra voz, vídeo, WhatsApp, chat, e-mail e automações.",
    features: ["IA Generativa", "Machine Learning", "Hub de Sistemas"],
    highlight: true
  },
  {
    icon: Network,
    title: "BlueMesh | IA",
    description: "Solução de Inteligência Artificial da stratumtec, desenvolvida para integrar qualquer plataforma com segurança, escalabilidade e performance.",
    features: ["IA Proprietária", "API's Unificadas", "Sync em tempo real"],
    highlight: true
  },
  {
    icon: Network,
    title: "Omnichannel",
    description: "Integração completa entre todos os canais de relacionamento, garantindo uma experiência unificada e uma comunicação mais fluida com o cliente.",
    features: ["Customer Centricity", "Speech Analytics", "Multiplataforma"],
    highlight: true
  },
  {
    icon: BarChart3,
    title: "Data Analytics",
    description: "Suite completa para análise e tratamento de dados em grandes volumes, gerando dashboards inteligentes e insights preditivos para tomada de decisão.",
    features: ["Business Intelligence", "Análise Preditiva", "Dashboards Personalizados"],
    highlight: false
  },
  {
    icon: Route,
    title: "Jornada do Cliente",
    description: "Mapeamento de jornada da experiência do cliente, visando otimização no tempo de resolução de demandas do atendimento em todos os pontos de contato.",
    features: ["Régua e Regras de Eventos", "Análise de Touchpoints", "Otimização da Experiência"],
    highlight: false
  },
  {
    icon: Zap,
    title: "Fluxos Inteligentes",
    description: "Workflows automatizados que eliminam tarefas repetitivas, melhoram o tempo de resposta e aceleram processos críticos e garante maior eficiência em CXM.",
    features: ["Automação de Workflow", "Redução de TMA", "Ganho de Eficiência"],
    highlight: false
  }
];

export const SolutionsSection = () => {
  return (
    <section id="solucoes" className="py-20 bg-stratumtec-light brand-pattern-subtle">
      <div className="container mx-auto px-4 lg:px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-stratumtec-navy mb-6">
            Soluções em Destaque
          </h2>
          <p className="text-xl text-stratumtec-text max-w-3xl mx-auto leading-relaxed">
            Tecnologias inovadoras que transformam a experiência do cliente e impulsionam o crescimento do seu negócio
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {solutions.map((solution, index) => {
            const IconComponent = solution.icon;
            return (
              <Card 
                key={index} 
                className={`group relative overflow-hidden border-0 shadow-card hover:shadow-elevated transition-smooth ${
                  solution.highlight 
                    ? 'bg-white ring-2 ring-stratumtec-orange/20' 
                    : 'bg-white'
                }`}
              >
                {solution.highlight && (
                  <div className="absolute top-0 right-0 bg-stratumtec-orange text-white px-3 py-1 text-sm font-medium">
                    Destaque
                  </div>
                )}
                
                <CardHeader className="pb-4">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <CardTitle className="text-xl font-heading text-stratumtec-navy mb-2">
                        {solution.title}
                      </CardTitle>
                      
                      <CardDescription className="text-stratumtec-text leading-relaxed">
                        {solution.description}
                      </CardDescription>
                    </div>
                    
                    <div className={`w-16 h-16 rounded-lg flex items-center justify-center ml-4 group-hover:scale-110 transition-transform flex-shrink-0 ${
                      solution.highlight 
                        ? 'bg-stratumtec-orange/10' 
                        : 'bg-stratumtec-navy/10'
                    }`}>
                      <IconComponent className={`h-8 w-8 ${
                        solution.highlight 
                          ? 'text-stratumtec-orange' 
                          : 'text-stratumtec-navy'
                      }`} />
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="pt-0">
                  <div className="space-y-2 mb-6">
                    {solution.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center text-sm text-stratumtec-text">
                        <div className="w-1.5 h-1.5 bg-stratumtec-orange rounded-full mr-3" />
                        {feature}
                      </div>
                    ))}
                  </div>

                  <Button 
                    variant="hero"
                    className="w-full group/btn"
                    onClick={() => {
                      window.location.href = "/solutions";
                    }}
                  >
                    Saiba Mais
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center">
          <div className="bg-white rounded-2xl p-8 shadow-card max-w-4xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-stratumtec-orange/10 rounded-full flex items-center justify-center">
                  <Users className="h-6 w-6 text-stratumtec-orange" />
                </div>
                <div className="w-12 h-12 bg-stratumtec-navy/10 rounded-full flex items-center justify-center">
                  <Settings className="h-6 w-6 text-stratumtec-navy" />
                </div>
                <div className="w-12 h-12 bg-stratumtec-cyan/10 rounded-full flex items-center justify-center">
                  <Zap className="h-6 w-6 text-stratumtec-cyan" />
                </div>
              </div>
            </div>
            
            <h3 className="text-2xl md:text-3xl font-heading font-bold text-stratumtec-navy mb-4">
              Precisa de uma solução personalizada?
            </h3>
            
            <p className="text-lg text-stratumtec-text mb-6 max-w-2xl mx-auto">
              Nossa equipe de especialistas está pronta para desenhar a solução perfeita para os desafios únicos do seu negócio.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CalendarPopup
                trigger={
                  <Button 
                    size="lg"
                    className="bg-stratumtec-orange hover:bg-stratumtec-orange/90 text-white px-8 py-3"
                  >
                    Falar com Especialista
                  </Button>
                }
                triggerAsChild
              />
              
              <Button 
                variant="outline"
                size="lg"
                className="border-stratumtec-navy text-stratumtec-navy hover:bg-stratumtec-navy hover:text-white px-8 py-3"
                onClick={() => {
                  window.location.href = "/contact#vamos-conversar";
                }}
              >
                Solicitar Cotação
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};