import { useLanguage } from "@/contexts/LanguageContext";
import { SolutionPageTemplate } from "@/components/SolutionPageTemplate";

const content = {
  en: {
    seoTitle: "Intelligent Digital Service Automation | StratumTec",
    seoDescription: "Automate digital service flows, reduce operational effort, and increase efficiency with scalable solutions.",
    h1: "Serve more customers without growing your team",
    intro: "StratumTec's Intelligent Digital Service Automation was built to reduce operational load, speed up responses, and ensure consistency in customer service.",
    challengesTitle: "Key challenges",
    challenges: [
      "High volume of repetitive service requests",
      "Manual and slow processes",
      "Lack of service standardization",
    ],
    approachTitle: "StratumTec Approach",
    approach: [
      "Automation of digital service flows",
      "Integration with internal systems",
      "Structured escalation to human service when needed",
    ],
    resultsTitle: "Expected results",
    results: [
      "Reduction in operational costs",
      "Increased efficiency",
      "Improved customer experience",
    ],
    cta: "Talk to a specialist",
  },
  pt: {
    seoTitle: "Automação Inteligente de Atendimento Digital | StratumTec",
    seoDescription: "Automatize fluxos de atendimento digital, reduza esforço operacional e aumente eficiência com soluções escaláveis.",
    h1: "Atenda mais sem aumentar equipe",
    intro: "A Automação Inteligente de Atendimento Digital da StratumTec foi desenvolvida para reduzir carga operacional, acelerar respostas e garantir consistência no atendimento ao cliente.",
    challengesTitle: "Principais desafios",
    challenges: [
      "Alto volume de atendimentos repetitivos",
      "Processos manuais e lentos",
      "Falta de padronização no atendimento",
    ],
    approachTitle: "Abordagem StratumTec",
    approach: [
      "Automação de fluxos digitais",
      "Integração com sistemas internos",
      "Escalonamento estruturado para atendimento humano",
    ],
    resultsTitle: "Resultados esperados",
    results: [
      "Redução de custos operacionais",
      "Aumento de eficiência",
      "Melhoria da experiência do cliente",
    ],
    cta: "Fale com um especialista",
  },
  es: {
    seoTitle: "Automatización Inteligente de Atención Digital | StratumTec",
    seoDescription: "Automatice flujos de atención digital, reduzca el esfuerzo operacional y aumente la eficiencia con soluciones escalables.",
    h1: "Atienda más sin aumentar el equipo",
    intro: "La Automatización Inteligente de Atención Digital de StratumTec fue desarrollada para reducir la carga operacional, acelerar respuestas y garantizar consistencia en la atención al cliente.",
    challengesTitle: "Principales desafíos",
    challenges: [
      "Alto volumen de atenciones repetitivas",
      "Procesos manuales y lentos",
      "Falta de estandarización en la atención",
    ],
    approachTitle: "Enfoque StratumTec",
    approach: [
      "Automatización de flujos digitales",
      "Integración con sistemas internos",
      "Escalamiento estructurado hacia atención humana",
    ],
    resultsTitle: "Resultados esperados",
    results: [
      "Reducción de costos operacionales",
      "Aumento de eficiencia",
      "Mejora de la experiencia del cliente",
    ],
    cta: "Hable con un especialista",
  },
};

export default function ServiceAutomation() {
  const { language } = useLanguage();
  return <SolutionPageTemplate content={content[language]} />;
}
