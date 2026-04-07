import { useLanguage } from "@/contexts/LanguageContext";
import { SolutionPageTemplate } from "@/components/SolutionPageTemplate";

const content = {
  en: {
    seoTitle: "Data Integration and Operational Consolidation | Stratumtec",
    seoDescription: "Integrate corporate systems, consolidate operational data, and get a unified view of your operation with Stratumtec's scalable solutions.",
    h1: "Consolidate data and gain real visibility of your operation",
    intro: "Companies running multiple systems face constant challenges consolidating data, ensuring information consistency, and gaining operational visibility. Stratumtec's Data Integration and Operational Consolidation solution was built to centralize information from different sources into a single, reliable base.",
    challengesTitle: "Key challenges",
    challenges: [
      "Fragmented data across multiple systems",
      "Manual consolidation and rework",
      "Lack of real-time operational visibility",
      "Low information reliability",
    ],
    approachTitle: "Stratumtec Approach",
    approach: [
      "Integration with corporate and legacy systems",
      "Data standardization and normalization",
      "Centralized data consolidation",
      "Information governance and traceability",
    ],
    resultsTitle: "Expected results",
    results: [
      "Unified view of the operation",
      "Reduction in manual effort",
      "Greater data reliability",
      "Solid base for analysis and strategic decisions",
    ],
    cta: "Talk to a specialist",
  },
  pt: {
    seoTitle: "Integração e Consolidação de Dados Operacionais | Stratumtec",
    seoDescription: "Integre sistemas corporativos, consolide dados operacionais e obtenha uma visão unificada da operação com soluções escaláveis da Stratumtec.",
    h1: "Consolide dados e ganhe visibilidade real da sua operação",
    intro: "Empresas que operam com múltiplos sistemas enfrentam desafios constantes para consolidar dados, garantir consistência da informação e obter visibilidade operacional. A solução de Integração e Consolidação de Dados Operacionais da Stratumtec foi criada para centralizar informações provenientes de diferentes fontes em uma base única e confiável.",
    challengesTitle: "Principais desafios",
    challenges: [
      "Dados fragmentados em múltiplos sistemas",
      "Consolidações manuais e retrabalho",
      "Falta de visibilidade operacional em tempo real",
      "Baixa confiabilidade das informações",
    ],
    approachTitle: "Abordagem Stratumtec",
    approach: [
      "Integração com sistemas corporativos e legados",
      "Padronização e normalização de dados",
      "Consolidação em bases centralizadas",
      "Governança e rastreabilidade das informações",
    ],
    resultsTitle: "Resultados esperados",
    results: [
      "Visão unificada da operação",
      "Redução de esforço manual",
      "Maior confiabilidade dos dados",
      "Base sólida para análises e decisões estratégicas",
    ],
    cta: "Fale com um especialista",
  },
  es: {
    seoTitle: "Integración y Consolidación de Datos Operacionales | Stratumtec",
    seoDescription: "Integre sistemas corporativos, consolide datos operacionales y obtenga una visión unificada de la operación con las soluciones escalables de Stratumtec.",
    h1: "Consolide datos y obtenga visibilidad real de su operación",
    intro: "Las empresas que operan con múltiples sistemas enfrentan desafíos constantes para consolidar datos, garantizar la consistencia de la información y obtener visibilidad operacional. La solución de Integración y Consolidación de Datos Operacionales de Stratumtec fue creada para centralizar información proveniente de diferentes fuentes en una base única y confiable.",
    challengesTitle: "Principales desafíos",
    challenges: [
      "Datos fragmentados en múltiples sistemas",
      "Consolidaciones manuales y retrabajo",
      "Falta de visibilidad operacional en tiempo real",
      "Baja confiabilidad de la información",
    ],
    approachTitle: "Enfoque Stratumtec",
    approach: [
      "Integración con sistemas corporativos y legados",
      "Estandarización y normalización de datos",
      "Consolidación en bases centralizadas",
      "Gobernanza y trazabilidad de la información",
    ],
    resultsTitle: "Resultados esperados",
    results: [
      "Visión unificada de la operación",
      "Reducción del esfuerzo manual",
      "Mayor confiabilidad de los datos",
      "Base sólida para análisis y decisiones estratégicas",
    ],
    cta: "Hable con un especialista",
  },
};

export default function DataIntegration() {
  const { language } = useLanguage();
  return <SolutionPageTemplate content={content[language]} />;
}
