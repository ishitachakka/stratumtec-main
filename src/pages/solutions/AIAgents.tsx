import { useLanguage } from "@/contexts/LanguageContext";
import { SolutionPageTemplate } from "@/components/SolutionPageTemplate";

const content = {
  en: {
    seoTitle: "AI Agents for Digital Channels | StratumTec",
    seoDescription: "Implement AI agents on digital channels to expand service capacity and ensure fast, consistent responses.",
    h1: "Expand 24-hour service with AI",
    intro: "StratumTec's AI Agents for Digital Channels act as service support — executing tasks, answering questions, and routing demands in a controlled way.",
    challengesTitle: "Key challenges",
    challenges: [
      "Limited human service capacity",
      "Service demands outside business hours",
      "Slow customer response times",
    ],
    approachTitle: "StratumTec Approach",
    approach: [
      "Agents trained with institutional rules and content",
      "Integration with digital channels",
      "Governance and human supervision",
    ],
    resultsTitle: "Expected results",
    results: [
      "24/7 service availability",
      "Reduced service queues",
      "Increased resolution rate",
    ],
    cta: "Talk to a specialist",
  },
  pt: {
    seoTitle: "Agentes de IA para Canais Digitais | StratumTec",
    seoDescription: "Implemente agentes de IA em canais digitais para ampliar capacidade de atendimento e garantir respostas rápidas e consistentes.",
    h1: "Expanda o atendimento 24 horas com IA",
    intro: "Os Agentes de IA para Canais Digitais da StratumTec atuam como apoio ao atendimento, executando tarefas, respondendo dúvidas e direcionando demandas de forma controlada.",
    challengesTitle: "Principais desafios",
    challenges: [
      "Limitação de capacidade humana",
      "Atendimento fora do horário comercial",
      "Demora na resposta ao cliente",
    ],
    approachTitle: "Abordagem StratumTec",
    approach: [
      "Agentes treinados com regras e conteúdos institucionais",
      "Integração com canais digitais",
      "Governança e supervisão humana",
    ],
    resultsTitle: "Resultados esperados",
    results: [
      "Atendimento 24/7",
      "Redução de filas",
      "Aumento da taxa de resolução",
    ],
    cta: "Fale com um especialista",
  },
  es: {
    seoTitle: "Agentes de IA para Canales Digitales | StratumTec",
    seoDescription: "Implemente agentes de IA en canales digitales para ampliar la capacidad de atención y garantizar respuestas rápidas y consistentes.",
    h1: "Expanda la atención 24 horas con IA",
    intro: "Los Agentes de IA para Canales Digitales de StratumTec actúan como apoyo a la atención, ejecutando tareas, respondiendo dudas y direccionando demandas de forma controlada.",
    challengesTitle: "Principales desafíos",
    challenges: [
      "Limitación de capacidad humana",
      "Atención fuera del horario comercial",
      "Demora en la respuesta al cliente",
    ],
    approachTitle: "Enfoque StratumTec",
    approach: [
      "Agentes entrenados con reglas y contenidos institucionales",
      "Integración con canales digitales",
      "Gobernanza y supervisión humana",
    ],
    resultsTitle: "Resultados esperados",
    results: [
      "Atención 24/7",
      "Reducción de colas",
      "Aumento de la tasa de resolución",
    ],
    cta: "Hable con un especialista",
  },
};

export default function AIAgents() {
  const { language } = useLanguage();
  return <SolutionPageTemplate content={content[language]} />;
}
