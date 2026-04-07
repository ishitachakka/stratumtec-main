import { useLanguage } from "@/contexts/LanguageContext";
import { SolutionPageTemplate } from "@/components/SolutionPageTemplate";

const content = {
  en: {
    seoTitle: "Technical and Architectural Consulting | Stratumtec",
    seoDescription: "Technical consulting to support architectural decisions, integrations, and technological evolution with a focus on risk reduction and operational efficiency.",
    h1: "Technical and Architectural Consulting",
    intro: "Stratumtec's Technical and Architectural Consulting supports companies in critical decisions related to architecture, integrations, and solution design. We work in a practical way oriented to operational reality, helping avoid rework, reduce technical risks, and ensure technology choices support business growth. Our work connects technology, operations, and strategy — offering technical clarity for decisions that have a direct impact on costs, efficiency, and operational continuity.",
    challengesTitle: "Key challenges",
    challenges: [
      "Technical decisions made without operational or long-term vision",
      "Architectures that don't support growth or scale",
      "Poorly planned or ungoverned integrations",
      "Technology choices that generate rework and future costs",
      "Lack of clarity on technical and operational impacts",
    ],
    approachTitle: "Stratumtec Approach",
    approach: [
      "Technical and architectural assessment of the existing environment",
      "Scenario analysis and solution alternatives",
      "Technical recommendations oriented toward business impact",
      "Support in designing architectures and integrations",
      "Alignment between technology, operations, and strategy",
    ],
    resultsTitle: "Expected results",
    results: [
      "Safer and better-informed technical decisions",
      "Reduction in risks and rework",
      "More efficient and sustainable architectures",
      "Better utilization of technology investments",
      "Solid foundation for future evolution",
    ],
    cta: "Talk to a specialist",
  },
  pt: {
    seoTitle: "Consultoria Técnica e Arquitetural | Stratumtec",
    seoDescription: "Consultoria técnica para apoiar decisões arquiteturais, integrações e evolução tecnológica com foco em redução de risco e eficiência operacional.",
    h1: "Consultoria Técnica e Arquitetural",
    intro: "A Consultoria Técnica e Arquitetural da Stratumtec apoia empresas em decisões críticas relacionadas a arquitetura, integrações e desenho de soluções. Atuamos de forma prática e orientada à realidade operacional, ajudando a evitar retrabalho, reduzir riscos técnicos e garantir que escolhas tecnológicas sustentem o crescimento do negócio. Nossa atuação conecta tecnologia, operação e estratégia, oferecendo clareza técnica para decisões que têm impacto direto em custos, eficiência e continuidade operacional.",
    challengesTitle: "Principais desafios",
    challenges: [
      "Decisões técnicas sem visão operacional ou de longo prazo",
      "Arquiteturas que não sustentam crescimento ou escala",
      "Integrações mal planejadas ou sem governança",
      "Escolhas tecnológicas que geram retrabalho e custo futuro",
      "Falta de clareza sobre impactos técnicos e operacionais",
    ],
    approachTitle: "Abordagem Stratumtec",
    approach: [
      "Avaliação técnica e arquitetural do ambiente existente",
      "Análise de cenários e alternativas de solução",
      "Recomendações técnicas orientadas a impacto de negócio",
      "Apoio ao desenho de arquiteturas e integrações",
      "Alinhamento entre tecnologia, operação e estratégia",
    ],
    resultsTitle: "Resultados esperados",
    results: [
      "Decisões técnicas mais seguras e embasadas",
      "Redução de riscos e retrabalho",
      "Arquiteturas mais eficientes e sustentáveis",
      "Melhor aproveitamento dos investimentos em tecnologia",
      "Base sólida para evolução futura",
    ],
    cta: "Fale com um especialista",
  },
  es: {
    seoTitle: "Consultoría Técnica y Arquitectural | Stratumtec",
    seoDescription: "Consultoría técnica para apoyar decisiones arquitecturales, integraciones y evolución tecnológica con foco en reducción de riesgos y eficiencia operacional.",
    h1: "Consultoría Técnica y Arquitectural",
    intro: "La Consultoría Técnica y Arquitectural de Stratumtec apoya a empresas en decisiones críticas relacionadas con arquitectura, integraciones y diseño de soluciones. Actuamos de forma práctica y orientada a la realidad operacional, ayudando a evitar retrabajo, reducir riesgos técnicos y garantizar que las decisiones tecnológicas sostengan el crecimiento del negocio. Nuestra actuación conecta tecnología, operación y estrategia, ofreciendo claridad técnica para decisiones que tienen impacto directo en costos, eficiencia y continuidad operacional.",
    challengesTitle: "Principales desafíos",
    challenges: [
      "Decisiones técnicas sin visión operacional o de largo plazo",
      "Arquitecturas que no sostienen el crecimiento o la escala",
      "Integraciones mal planificadas o sin gobernanza",
      "Decisiones tecnológicas que generan retrabajo y costos futuros",
      "Falta de claridad sobre impactos técnicos y operacionales",
    ],
    approachTitle: "Enfoque Stratumtec",
    approach: [
      "Evaluación técnica y arquitectural del entorno existente",
      "Análisis de escenarios y alternativas de solución",
      "Recomendaciones técnicas orientadas al impacto de negocio",
      "Apoyo en el diseño de arquitecturas e integraciones",
      "Alineación entre tecnología, operación y estrategia",
    ],
    resultsTitle: "Resultados esperados",
    results: [
      "Decisiones técnicas más seguras y fundamentadas",
      "Reducción de riesgos y retrabajo",
      "Arquitecturas más eficientes y sostenibles",
      "Mejor aprovechamiento de las inversiones en tecnología",
      "Base sólida para la evolución futura",
    ],
    cta: "Hable con un especialista",
  },
};

export default function TechnicalConsulting() {
  const { language } = useLanguage();
  return <SolutionPageTemplate content={content[language]} />;
}
