import { useLanguage } from "@/contexts/LanguageContext";
import { SolutionPageTemplate } from "@/components/SolutionPageTemplate";

const content = {
  en: {
    seoTitle: "Systems Integration and Operational Connectivity | StratumTec",
    seoDescription: "We integrate corporate systems to eliminate silos, reduce rework, and ensure operational fluidity between platforms.",
    h1: "Systems Integration and Connectivity",
    intro: "Many companies operate with multiple systems that don't communicate, generating rework, data inconsistencies, and low operational efficiency. StratumTec's Systems Integration service was created to connect platforms, data, and operational flows — building an integrated foundation for more efficient processes and more reliable decisions. We connect existing systems in a structured, secure, and scalable way, respecting each operation's technological reality.",
    challengesTitle: "Key challenges",
    challenges: [
      "Isolated systems that don't share information",
      "Duplicate or inconsistent data between platforms",
      "Manual processes to reconcile information",
      "Excessive reliance on spreadsheets and parallel controls",
      "Lack of an integrated operational view",
    ],
    approachTitle: "StratumTec Approach",
    approach: [
      "Integration between corporate, legacy, and external platform systems",
      "Orchestration of data flows and processes between applications",
      "Standardization and consistency of exchanged information",
      "Flexible and scalable integration architecture",
      "Controlled implementation without operational disruption",
    ],
    resultsTitle: "Expected results",
    results: [
      "Connected systems and smoother operations",
      "Reduction in rework and operational errors",
      "Greater data reliability and consistency",
      "Integrated foundation for automation, analytics, and decision-making",
      "Direct operational efficiency gains",
    ],
    cta: "Talk to a specialist",
  },
  pt: {
    seoTitle: "Integração de Sistemas e Conectividade Operacional | StratumTec",
    seoDescription: "Integramos sistemas corporativos para eliminar silos, reduzir retrabalho e garantir fluidez operacional entre plataformas.",
    h1: "Integração de Sistemas e Conectividade",
    intro: "Muitas empresas operam com múltiplos sistemas que não se comunicam entre si, gerando retrabalho, inconsistências de dados e baixa eficiência operacional. O serviço de Integração de Sistemas da StratumTec foi criado para conectar plataformas, dados e fluxos operacionais, criando uma base integrada que sustenta processos mais eficientes e decisões mais confiáveis. Atuamos conectando sistemas existentes de forma estruturada, segura e escalável, respeitando a realidade tecnológica de cada operação.",
    challengesTitle: "Principais desafios",
    challenges: [
      "Sistemas isolados que não trocam informações",
      "Dados duplicados ou inconsistentes entre plataformas",
      "Processos manuais para conciliar informações",
      "Dependência excessiva de planilhas e controles paralelos",
      "Falta de visão integrada da operação",
    ],
    approachTitle: "Abordagem StratumTec",
    approach: [
      "Integração entre sistemas corporativos, legados e plataformas externas",
      "Orquestração de fluxos de dados e processos entre aplicações",
      "Padronização e consistência das informações trocadas",
      "Arquitetura de integração flexível e escalável",
      "Implantação controlada, sem interrupção da operação",
    ],
    resultsTitle: "Resultados esperados",
    results: [
      "Sistemas conectados e operação mais fluida",
      "Redução de retrabalho e erros operacionais",
      "Maior confiabilidade e consistência dos dados",
      "Base integrada para automação, analytics e tomada de decisão",
      "Ganho direto de eficiência operacional",
    ],
    cta: "Fale com um especialista",
  },
  es: {
    seoTitle: "Integración de Sistemas y Conectividad Operacional | StratumTec",
    seoDescription: "Integramos sistemas corporativos para eliminar silos, reducir el retrabajo y garantizar fluidez operacional entre plataformas.",
    h1: "Integración de Sistemas y Conectividad",
    intro: "Muchas empresas operan con múltiples sistemas que no se comunican entre sí, generando retrabajo, inconsistencias de datos y baja eficiencia operacional. El servicio de Integración de Sistemas de StratumTec fue creado para conectar plataformas, datos y flujos operacionales, creando una base integrada que sustenta procesos más eficientes y decisiones más confiables. Actuamos conectando sistemas existentes de forma estructurada, segura y escalable, respetando la realidad tecnológica de cada operación.",
    challengesTitle: "Principales desafíos",
    challenges: [
      "Sistemas aislados que no intercambian información",
      "Datos duplicados o inconsistentes entre plataformas",
      "Procesos manuales para conciliar información",
      "Dependencia excesiva de hojas de cálculo y controles paralelos",
      "Falta de visión integrada de la operación",
    ],
    approachTitle: "Enfoque StratumTec",
    approach: [
      "Integración entre sistemas corporativos, legados y plataformas externas",
      "Orquestación de flujos de datos y procesos entre aplicaciones",
      "Estandarización y consistencia de la información intercambiada",
      "Arquitectura de integración flexible y escalable",
      "Implantación controlada, sin interrupción de la operación",
    ],
    resultsTitle: "Resultados esperados",
    results: [
      "Sistemas conectados y operación más fluida",
      "Reducción de retrabajo y errores operacionales",
      "Mayor confiabilidad y consistencia de los datos",
      "Base integrada para automatización, analytics y toma de decisiones",
      "Ganancia directa de eficiencia operacional",
    ],
    cta: "Hable con un especialista",
  },
};

export default function SystemsIntegration() {
  const { language } = useLanguage();
  return <SolutionPageTemplate content={content[language]} />;
}
