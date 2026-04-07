import { useLanguage } from "@/contexts/LanguageContext";
import { SolutionPageTemplate } from "@/components/SolutionPageTemplate";

const content = {
  en: {
    seoTitle: "Omnichannel Centralization and Journey Governance | Stratumtec",
    seoDescription: "Centralize service channels and ensure governance, traceability, and complete visibility of the customer journey.",
    h1: "Unify all channels in one place",
    intro: "Stratumtec's Omnichannel Centralization solution unifies channels and customer journeys, eliminating silos and ensuring a consistent experience across every touchpoint.",
    challengesTitle: "Key challenges",
    challenges: [
      "Fragmented customer journeys",
      "Lack of a unified interaction history",
      "Low governance across channels",
    ],
    approachTitle: "Stratumtec Approach",
    approach: [
      "Integration of multiple service channels",
      "Centralization of interaction history",
      "Journey rules and governance",
    ],
    resultsTitle: "Expected results",
    results: [
      "360° customer view",
      "Improved customer experience",
      "Greater operational control",
    ],
    cta: "Talk to a specialist",
  },
  pt: {
    seoTitle: "Centralização Omnichannel e Governança da Jornada | Stratumtec",
    seoDescription: "Centralize canais de atendimento e garanta governança, rastreabilidade e visão completa da jornada do cliente.",
    h1: "Unifique todos os canais em um só lugar",
    intro: "A Centralização Omnichannel da Stratumtec unifica canais e jornadas, eliminando silos e garantindo uma experiência consistente ao cliente.",
    challengesTitle: "Principais desafios",
    challenges: [
      "Jornadas fragmentadas",
      "Falta de histórico unificado",
      "Baixa governança dos canais",
    ],
    approachTitle: "Abordagem Stratumtec",
    approach: [
      "Integração de múltiplos canais",
      "Centralização do histórico de interações",
      "Regras e governança da jornada",
    ],
    resultsTitle: "Resultados esperados",
    results: [
      "Visão 360º do cliente",
      "Melhoria da experiência",
      "Maior controle operacional",
    ],
    cta: "Fale com um especialista",
  },
  es: {
    seoTitle: "Centralización Omnicanal y Gobernanza del Recorrido | Stratumtec",
    seoDescription: "Centralice los canales de atención y garantice gobernanza, trazabilidad y visión completa del recorrido del cliente.",
    h1: "Unifique todos los canales en un solo lugar",
    intro: "La Centralización Omnicanal de Stratumtec unifica canales y recorridos, eliminando silos y garantizando una experiencia consistente para el cliente.",
    challengesTitle: "Principales desafíos",
    challenges: [
      "Recorridos fragmentados",
      "Falta de historial unificado",
      "Baja gobernanza de los canales",
    ],
    approachTitle: "Enfoque Stratumtec",
    approach: [
      "Integración de múltiples canales",
      "Centralización del historial de interacciones",
      "Reglas y gobernanza del recorrido",
    ],
    resultsTitle: "Resultados esperados",
    results: [
      "Visión 360° del cliente",
      "Mejora de la experiencia",
      "Mayor control operacional",
    ],
    cta: "Hable con un especialista",
  },
};

export default function OmnichannelCentralization() {
  const { language } = useLanguage();
  return <SolutionPageTemplate content={content[language]} />;
}
