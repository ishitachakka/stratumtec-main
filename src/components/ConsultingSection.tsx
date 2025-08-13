import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarPopup } from "@/components/CalendarPopup";
import { CheckCircle, Users, Target, BarChart3, MessageCircle, DollarSign, Headphones, Settings } from "lucide-react";

export const ConsultingSection = () => {
const services = [
    {
      icon: Target,
      title: "Estratégia de CX",
      description: "Estratégias personalizadas para elevar a experiência do cliente, impulsionando engajamento e fidelização, aumentando a eficiência e reduzindo o churn.",
      features: ["Mapeamento de jornada", "Análise de touchpoints", "Definição de KPIs"]
    },
    {
      icon: BarChart3,
      title: "Assessment de CX",
      description: "Avaliação de processos e fluxos de atendimento, jornada do cliente, programas de fidelização e retenção, identificando riscos, gargalos e oportunidades.",
      features: ["Aumento de NPS, CSAT e CES", "Performance e Escalabilidade", "Insights Personalizados"]
    },
    {
      icon: Users,
      title: "Transformação Digital",
      description: "Estratégia e implementação estruturada de projetos de modernização, envolvento tecnologia, processos e cultura, com foco em agilidade, governança e impacto.",
      features: ["Auditoria de sistemas", "Análise de Performance", "Relatórios detalhados"]
    },
    {
      icon: DollarSign,
      title: "Monetização",
      description: "Aumento de receitas por meio de estratégias de monetização centradas no cliente, unindo personalização, oportunidades e inteligência de dados.",
      features: ["Personalização de ofertas por cluster", "Alertas de oportunidades em tempo real", "Precificação inteligente"]
    },
    {
      icon: Headphones,
      title: "VoC – Voz do Cliente",
      description: "Estratégia integrada para capturar, interpretar e transformar feedbacks em decisões estratégicas e ativações que elevam a experiência do cliente.",
      features: ["Insights de consumidores", "Análise de sentimento e oportunidades", "Voice Analytics"]
    },
    {
      icon: Settings,
      title: "Processos de CXM",
      description: "Mapeamento e revisão de processos de CX para garantir melhor experiência, mais consistência entre canais, eficiência operacional e integração full com sistemas.",
      features: ["Mapeamento de Processos", "Estratégias de Fidelização", "Gestão de Performance (NPS, CSAT, CES)"]
    }
  ];

  const handleWhatsApp = () => {
    window.open("https://wa.me/5511993324239?text=Olá! Gostaria de saber mais sobre os serviços de consultoria da stratumtec.", "_blank");
  };

  return (
    <section id="consultoria" className="py-16 lg:py-24 bg-muted/30 brand-pattern">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-stratumtec-blue mb-4">
            Consultoria Especializada
          </h2>
          <p className="text-lg text-stratumtec-text max-w-3xl mx-auto">
            Nossa equipe de especialistas oferece consultoria estratégica para transformar 
            a experiência do cliente da sua empresa através de soluções tecnológicas inovadoras.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {services.map((service, index) => (
            <Card key={index} className="h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <CardHeader>
                <div className="flex items-start gap-4">
                  <div className="flex-1">
                    <CardTitle className="text-xl text-stratumtec-blue mb-2">{service.title}</CardTitle>
                    <CardDescription className="text-stratumtec-text">
                      {service.description}
                    </CardDescription>
                  </div>
                  <div className="w-16 h-16 bg-stratumtec-orange/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <service.icon className="h-8 w-8 text-stratumtec-orange" />
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-stratumtec-text">
                      <CheckCircle className="h-4 w-4 text-stratumtec-green mr-2 flex-shrink-0" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <div className="mt-4">
                  <Button variant="navy" size="sm" className="w-full" onClick={() => {
                    window.location.href = "/consultoria";
                  }}>
                    Saiba Mais
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <div className="bg-white rounded-2xl p-8 lg:p-12 shadow-card max-w-4xl mx-auto">
            <h3 className="text-2xl lg:text-3xl font-bold text-stratumtec-navy mb-6">
              Pronto para Transformar sua Experiência do Cliente?
            </h3>
            <p className="text-lg text-stratumtec-text mb-8 max-w-2xl mx-auto">
              Agende uma conversa com nossos especialistas e descubra como podemos 
              ajudar sua empresa a alcançar novos patamares de excelência em Customer Experience.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-stratumtec-orange mb-2">20+</div>
                <div className="text-stratumtec-text font-medium">Anos de Experiência</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-stratumtec-cyan mb-2">200+</div>
                <div className="text-stratumtec-text font-medium">Projetos Realizados</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">98%</div>
                <div className="text-stratumtec-text font-medium">Satisfação dos Clientes</div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <CalendarPopup
                trigger={
                  <Button 
                    className="bg-stratumtec-orange hover:bg-stratumtec-orange/90 text-white px-8 py-3"
                  >
                    <MessageCircle className="h-4 w-4 mr-2" />
                    Agendar Consultoria
                  </Button>
                }
                triggerAsChild
              />
              <Button 
                variant="outline" 
                className="border-stratumtec-navy text-stratumtec-navy hover:bg-stratumtec-navy hover:text-white px-8 py-3"
                onClick={() => {
                  window.location.href = "/contact#vamos-conversar";
                }}
              >
                Solicitar Proposta
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};