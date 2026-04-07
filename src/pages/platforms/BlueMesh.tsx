import { useLanguage } from "@/contexts/LanguageContext";
import { PlatformPageTemplate } from "@/components/PlatformPageTemplate";

const content = {
  en: {
    seoTitle: "BlueMesh | Corporate Artificial Intelligence Platform — Stratumtec",
    seoDescription: "Proprietary artificial intelligence platform for process automation, data analysis, and decision support.",
    h1: "BlueMesh",
    intro: "BlueMesh is Stratumtec's artificial intelligence platform, designed to act as an intelligence layer over corporate systems, data, and processes. It enables automating activities, interpreting information, and supporting strategic decisions — and can be integrated into different operational contexts.",
    capabilitiesTitle: "Key capabilities",
    capabilities: [
      "Intelligent automation of corporate processes",
      "Conversational AI agents via text or voice",
      "Advanced analysis of voice, text, and documents",
      "Automated document reading, validation, and generation",
      "Human-in-the-loop, governance, and audit trails",
      "Integration with platforms, corporate systems, and databases",
    ],
    useCasesTitle: "Where BlueMesh is applied",
    useCases: [
      "Customer service and relationship management",
      "Automation of administrative and operational processes",
      "Quality, compliance, and performance analysis in voice operations",
      "Identification of risks and opportunities in service interactions",
      "Analysis and processing of documents and information",
      "Operations involving high volumes of interactions or data",
      "Decision support based on structured data",
      "Integration of intelligence into existing platforms and systems",
    ],
    cta: "Talk to a specialist",
  },
  pt: {
    seoTitle: "BlueMesh | Plataforma de Inteligência Artificial Corporativa — Stratumtec",
    seoDescription: "Plataforma de inteligência artificial proprietária para automação de processos, análise de dados e apoio à tomada de decisão.",
    h1: "BlueMesh",
    intro: "A BlueMesh é a plataforma de inteligência artificial da Stratumtec, projetada para atuar como uma camada de inteligência sobre sistemas, dados e processos corporativos. Ela permite automatizar atividades, interpretar informações e apoiar decisões estratégicas, podendo ser incorporada de forma integrada a diferentes contextos operacionais.",
    capabilitiesTitle: "Principais capacidades",
    capabilities: [
      "Automação inteligente de processos corporativos",
      "Agentes de IA conversacionais por texto ou voz",
      "Análise avançada de voz, texto e documentos",
      "Leitura, validação e geração automatizada de documentos",
      "Human-in-the-loop, governança e trilhas de auditoria",
      "Integração com plataformas, sistemas corporativos e bases de dados",
    ],
    useCasesTitle: "Onde a BlueMesh é aplicada",
    useCases: [
      "Atendimento e relacionamento com clientes",
      "Automação de processos administrativos e operacionais",
      "Análise de qualidade, compliance e performance em operações de voz",
      "Identificação de riscos e oportunidades em atendimentos",
      "Análise e tratamento de documentos e informações",
      "Operações que envolvem alto volume de interações ou dados",
      "Suporte à tomada de decisão com base em dados estruturados",
      "Integração de inteligência a plataformas e sistemas existentes",
    ],
    cta: "Fale com um especialista",
  },
  es: {
    seoTitle: "BlueMesh | Plataforma de Inteligencia Artificial Corporativa — Stratumtec",
    seoDescription: "Plataforma de inteligencia artificial propietaria para automatización de procesos, análisis de datos y apoyo a la toma de decisiones.",
    h1: "BlueMesh",
    intro: "BlueMesh es la plataforma de inteligencia artificial de Stratumtec, diseñada para actuar como una capa de inteligencia sobre sistemas, datos y procesos corporativos. Permite automatizar actividades, interpretar información y apoyar decisiones estratégicas, pudiendo incorporarse de forma integrada a diferentes contextos operacionales.",
    capabilitiesTitle: "Capacidades clave",
    capabilities: [
      "Automatización inteligente de procesos corporativos",
      "Agentes de IA conversacionales por texto o voz",
      "Análisis avanzado de voz, texto y documentos",
      "Lectura, validación y generación automatizada de documentos",
      "Human-in-the-loop, gobernanza y trazas de auditoría",
      "Integración con plataformas, sistemas corporativos y bases de datos",
    ],
    useCasesTitle: "Dónde se aplica BlueMesh",
    useCases: [
      "Atención y relacionamiento con clientes",
      "Automatización de procesos administrativos y operacionales",
      "Análisis de calidad, cumplimiento y desempeño en operaciones de voz",
      "Identificación de riesgos y oportunidades en atenciones",
      "Análisis y tratamiento de documentos e información",
      "Operaciones que involucran alto volumen de interacciones o datos",
      "Apoyo a la toma de decisiones con base en datos estructurados",
      "Integración de inteligencia a plataformas y sistemas existentes",
    ],
    cta: "Hable con un especialista",
  },
};

export default function BlueMesh() {
  const { language } = useLanguage();
  return <PlatformPageTemplate content={content[language]} />;
}
