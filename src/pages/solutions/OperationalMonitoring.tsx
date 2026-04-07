import { useLanguage } from "@/contexts/LanguageContext";
import { SolutionPageTemplate } from "@/components/SolutionPageTemplate";

const content = {
  en: {
    seoTitle: "Operational Monitoring, SLAs and Performance | StratumTec",
    seoDescription: "Monitor SLAs, performance, and operational indicators in real time with dashboards and intelligent alerts.",
    h1: "Monitor and control your operation in real time",
    intro: "StratumTec's Operational Monitoring solution enables continuous tracking of critical indicators, SLAs, and operational performance.",
    challengesTitle: "Key challenges",
    challenges: [
      "Lack of real-time operational visibility",
      "Difficulty meeting SLAs consistently",
      "Late identification of bottlenecks",
    ],
    approachTitle: "StratumTec Approach",
    approach: [
      "Definition of key indicators and SLAs",
      "Operational dashboards",
      "Alerts and continuous monitoring",
    ],
    resultsTitle: "Expected results",
    results: [
      "Greater operational predictability",
      "Risk reduction",
      "Continuous performance improvement",
    ],
    cta: "Talk to a specialist",
  },
  pt: {
    seoTitle: "Monitoramento Operacional, SLAs e Performance | StratumTec",
    seoDescription: "Monitore SLAs, performance e indicadores operacionais em tempo real com dashboards e alertas inteligentes.",
    h1: "Monitore e controle sua operação em tempo real",
    intro: "A solução de Monitoramento Operacional da StratumTec permite acompanhar indicadores críticos, SLAs e performance da operação de forma contínua.",
    challengesTitle: "Principais desafios",
    challenges: [
      "Falta de visibilidade em tempo real",
      "Dificuldade em cumprir SLAs",
      "Identificação tardia de gargalos",
    ],
    approachTitle: "Abordagem StratumTec",
    approach: [
      "Definição de indicadores e SLAs",
      "Dashboards operacionais",
      "Alertas e acompanhamento contínuo",
    ],
    resultsTitle: "Resultados esperados",
    results: [
      "Maior previsibilidade operacional",
      "Redução de riscos",
      "Melhoria contínua da performance",
    ],
    cta: "Fale com um especialista",
  },
  es: {
    seoTitle: "Monitoreo Operacional, SLAs y Desempeño | StratumTec",
    seoDescription: "Monitoree SLAs, desempeño e indicadores operacionales en tiempo real con dashboards y alertas inteligentes.",
    h1: "Monitoree y controle su operación en tiempo real",
    intro: "La solución de Monitoreo Operacional de StratumTec permite seguir indicadores críticos, SLAs y el desempeño de la operación de forma continua.",
    challengesTitle: "Principales desafíos",
    challenges: [
      "Falta de visibilidad en tiempo real",
      "Dificultad para cumplir SLAs",
      "Identificación tardía de cuellos de botella",
    ],
    approachTitle: "Enfoque StratumTec",
    approach: [
      "Definición de indicadores y SLAs",
      "Dashboards operacionales",
      "Alertas y seguimiento continuo",
    ],
    resultsTitle: "Resultados esperados",
    results: [
      "Mayor previsibilidad operacional",
      "Reducción de riesgos",
      "Mejora continua del desempeño",
    ],
    cta: "Hable con un especialista",
  },
};

export default function OperationalMonitoring() {
  const { language } = useLanguage();
  return <SolutionPageTemplate content={content[language]} />;
}
