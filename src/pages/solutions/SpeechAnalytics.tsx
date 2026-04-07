import { useLanguage } from "@/contexts/LanguageContext";
import { SolutionPageTemplate } from "@/components/SolutionPageTemplate";

const content = {
  en: {
    seoTitle: "Speech Analytics and Voice Intelligence | StratumTec",
    seoDescription: "Analyze voice interactions at scale to improve quality, operational efficiency, compliance, and financial results.",
    h1: "Turn customer conversations into business intelligence",
    intro: "StratumTec's Speech Analytics solution transforms voice interactions into actionable business intelligence. Through automatic call analysis, companies gain visibility into service patterns, quality, operational risks, sales opportunities, and factors that directly impact costs, productivity, and revenue.",
    challengesTitle: "Key challenges",
    challenges: [
      "Lack of visibility into what actually happens on calls",
      "Manual and sample-based quality evaluation",
      "Undetected compliance risks at scale",
      "Lost commercial opportunities during service interactions",
      "Difficulty correlating service performance with financial results",
    ],
    approachTitle: "StratumTec Approach",
    approach: [
      "Automatic call analysis at scale",
      "Classification by topic, sentiment, quality, and risk",
      "Correlation between service, performance, and business results",
      "Operational and executive dashboards",
      "Integration with existing service and data platforms",
    ],
    resultsTitle: "Expected results",
    results: [
      "Reduced operational costs related to quality and rework",
      "Improved resolution rate and team productivity",
      "Identification of revenue growth opportunities",
      "Reduction of operational and regulatory risks",
      "Decisions based on real operational data",
    ],
    cta: "Talk to a specialist",
  },
  pt: {
    seoTitle: "Speech Analytics e Inteligência de Voz | StratumTec",
    seoDescription: "Analise interações de voz em escala para melhorar qualidade, eficiência operacional, compliance e resultados financeiros.",
    h1: "Transforme conversas com clientes em inteligência de negócio",
    intro: "A solução de Speech Analytics da StratumTec transforma interações de voz em inteligência acionável para o negócio. A partir da análise automática de chamadas, a empresa passa a enxergar padrões de atendimento, qualidade, riscos operacionais, oportunidades de venda e fatores que impactam diretamente custos, produtividade e receita.",
    challengesTitle: "Principais desafios",
    challenges: [
      "Falta de visibilidade sobre o que acontece nas chamadas",
      "Avaliação manual e amostral de qualidade",
      "Riscos de compliance não identificados em escala",
      "Perda de oportunidades comerciais durante o atendimento",
      "Dificuldade em correlacionar atendimento com resultado financeiro",
    ],
    approachTitle: "Abordagem StratumTec",
    approach: [
      "Análise automática de chamadas em escala",
      "Classificação por temas, sentimento, qualidade e risco",
      "Correlação entre atendimento, performance e resultados",
      "Dashboards operacionais e executivos",
      "Integração com plataformas de atendimento e dados existentes",
    ],
    resultsTitle: "Resultados esperados",
    results: [
      "Redução de custos operacionais com qualidade e retrabalho",
      "Melhoria da taxa de resolução e produtividade",
      "Identificação de oportunidades de aumento de receita",
      "Redução de riscos operacionais e regulatórios",
      "Decisões baseadas em dados reais da operação",
    ],
    cta: "Fale com um especialista",
  },
  es: {
    seoTitle: "Speech Analytics e Inteligencia de Voz | StratumTec",
    seoDescription: "Analice interacciones de voz a escala para mejorar calidad, eficiencia operacional, cumplimiento y resultados financieros.",
    h1: "Transforme conversaciones con clientes en inteligencia de negocio",
    intro: "La solución de Speech Analytics de StratumTec transforma las interacciones de voz en inteligencia accionable para el negocio. A partir del análisis automático de llamadas, la empresa pasa a ver patrones de atención, calidad, riesgos operacionales, oportunidades de venta y factores que impactan directamente en costos, productividad e ingresos.",
    challengesTitle: "Principales desafíos",
    challenges: [
      "Falta de visibilidad sobre lo que ocurre en las llamadas",
      "Evaluación manual y muestral de calidad",
      "Riesgos de cumplimiento no identificados a escala",
      "Pérdida de oportunidades comerciales durante la atención",
      "Dificultad para correlacionar atención con resultados financieros",
    ],
    approachTitle: "Enfoque StratumTec",
    approach: [
      "Análisis automático de llamadas a escala",
      "Clasificación por temas, sentimiento, calidad y riesgo",
      "Correlación entre atención, desempeño y resultados",
      "Dashboards operacionales y ejecutivos",
      "Integración con plataformas de atención y datos existentes",
    ],
    resultsTitle: "Resultados esperados",
    results: [
      "Reducción de costos operacionales relacionados con calidad y retrabajo",
      "Mejora de la tasa de resolución y productividad",
      "Identificación de oportunidades de aumento de ingresos",
      "Reducción de riesgos operacionales y regulatorios",
      "Decisiones basadas en datos reales de la operación",
    ],
    cta: "Hable con un especialista",
  },
};

export default function SpeechAnalytics() {
  const { language } = useLanguage();
  return <SolutionPageTemplate content={content[language]} />;
}
