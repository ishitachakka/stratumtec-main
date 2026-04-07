import { useLanguage } from "@/contexts/LanguageContext";
import { SolutionPageTemplate } from "@/components/SolutionPageTemplate";

const content = {
  en: {
    seoTitle: "Integrated Lead and Opportunity Management | StratumTec",
    seoDescription: "Centralize lead and opportunity management, track the full funnel, and increase commercial predictability and control.",
    h1: "Convert more opportunities into revenue",
    intro: "StratumTec's Integrated Lead and Opportunity Management solution lets you track the entire lead lifecycle — from origin to conversion — in a standardized and transparent way.",
    challengesTitle: "Key challenges",
    challenges: [
      "Lack of funnel visibility",
      "Decentralized commercial processes",
      "Difficulty measuring performance",
      "Lost opportunities from lack of follow-up",
    ],
    approachTitle: "StratumTec Approach",
    approach: [
      "Centralization of the lead and opportunity funnel",
      "Integration with existing commercial systems",
      "Standardization of stages and metrics",
      "Continuous performance monitoring",
    ],
    resultsTitle: "Expected results",
    results: [
      "Greater commercial funnel control",
      "Improved conversion rate",
      "Increased results predictability",
    ],
    cta: "Talk to a specialist",
  },
  pt: {
    seoTitle: "Gestão Integrada de Leads e Oportunidades | StratumTec",
    seoDescription: "Centralize a gestão de leads e oportunidades, acompanhe o funil completo e aumente previsibilidade e controle comercial.",
    h1: "Converta mais oportunidades em receita",
    intro: "A solução de Gestão Integrada de Leads e Oportunidades da StratumTec permite acompanhar todo o ciclo de vida do lead, desde a origem até a conversão, de forma padronizada e transparente.",
    challengesTitle: "Principais desafios",
    challenges: [
      "Falta de visibilidade do funil",
      "Processos comerciais descentralizados",
      "Dificuldade de mensurar performance",
      "Perda de oportunidades por falta de acompanhamento",
    ],
    approachTitle: "Abordagem StratumTec",
    approach: [
      "Centralização do funil de leads e oportunidades",
      "Integração com sistemas comerciais existentes",
      "Padronização de etapas e métricas",
      "Monitoramento contínuo de performance",
    ],
    resultsTitle: "Resultados esperados",
    results: [
      "Maior controle do funil comercial",
      "Melhoria na taxa de conversão",
      "Aumento da previsibilidade de resultados",
    ],
    cta: "Fale com um especialista",
  },
  es: {
    seoTitle: "Gestión Integrada de Leads y Oportunidades | StratumTec",
    seoDescription: "Centralice la gestión de leads y oportunidades, siga el embudo completo y aumente la previsibilidad y el control comercial.",
    h1: "Convierta más oportunidades en ingresos",
    intro: "La solución de Gestión Integrada de Leads y Oportunidades de StratumTec permite seguir todo el ciclo de vida del lead, desde el origen hasta la conversión, de forma estandarizada y transparente.",
    challengesTitle: "Principales desafíos",
    challenges: [
      "Falta de visibilidad del embudo",
      "Procesos comerciales descentralizados",
      "Dificultad para medir el desempeño",
      "Pérdida de oportunidades por falta de seguimiento",
    ],
    approachTitle: "Enfoque StratumTec",
    approach: [
      "Centralización del embudo de leads y oportunidades",
      "Integración con sistemas comerciales existentes",
      "Estandarización de etapas y métricas",
      "Monitoreo continuo del desempeño",
    ],
    resultsTitle: "Resultados esperados",
    results: [
      "Mayor control del embudo comercial",
      "Mejora en la tasa de conversión",
      "Aumento de la previsibilidad de resultados",
    ],
    cta: "Hable con un especialista",
  },
};

export default function LeadManagement() {
  const { language } = useLanguage();
  return <SolutionPageTemplate content={content[language]} />;
}
