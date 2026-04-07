import { useLanguage } from "@/contexts/LanguageContext";
import { SolutionPageTemplate } from "@/components/SolutionPageTemplate";

const content = {
  en: {
    seoTitle: "Ongoing Operation and Stability Management | Stratumtec",
    seoDescription: "We ensure stability, continuity, and operational predictability through continuous monitoring and assisted operations.",
    h1: "Ongoing Operation and Stability Management",
    intro: "After implementation and adaptation, the biggest challenge becomes keeping the operation stable, predictable, and aligned with business needs. Stratumtec's Ongoing Operation service was created to ensure systems, integrations, and flows continue working correctly over time. We work closely with the operation, supporting internal teams day to day and anticipating adjustments needed to prevent impacts on performance, SLAs, and results.",
    challengesTitle: "Key challenges",
    challenges: [
      "Operational instability after going live",
      "Excessive reliance on emergency interventions",
      "Lack of continuous monitoring of integrations",
      "Recurring incidents impacting SLAs and operations",
      "Loss of predictability in system functioning",
    ],
    approachTitle: "Stratumtec Approach",
    approach: [
      "Continuous monitoring of operations and integrations",
      "Structured technical support for internal teams",
      "Preventive identification and correction of failures",
      "Action oriented toward SLAs and operational continuity",
      "Targeted adjustments to preserve stability",
    ],
    resultsTitle: "Expected results",
    results: [
      "Stable and predictable operation",
      "Reduction of critical incidents",
      "Lower operational impact from technical failures",
      "Service continuity over time",
      "Greater operational confidence in the systems",
    ],
    cta: "Talk to a specialist",
  },
  pt: {
    seoTitle: "Sustentação Operacional e Estabilidade das Soluções | Stratumtec",
    seoDescription: "Garantimos estabilidade, continuidade e previsibilidade operacional por meio de acompanhamento contínuo e operação assistida.",
    h1: "Sustentação e Operação Assistida",
    intro: "Após a implantação e adaptação das soluções, o maior desafio passa a ser manter a operação estável, previsível e alinhada às necessidades do negócio. O serviço de Sustentação Operacional da Stratumtec foi criado para garantir que sistemas, integrações e fluxos continuem funcionando corretamente ao longo do tempo. Atuamos de forma próxima à operação, acompanhando o dia a dia, apoiando as equipes internas e antecipando ajustes necessários para evitar impactos em performance, SLAs e resultados.",
    challengesTitle: "Principais desafios",
    challenges: [
      "Instabilidade operacional após a entrada em produção",
      "Dependência excessiva de intervenções emergenciais",
      "Falta de acompanhamento contínuo das integrações",
      "Incidentes recorrentes que impactam SLAs e operação",
      "Perda de previsibilidade no funcionamento dos sistemas",
    ],
    approachTitle: "Abordagem Stratumtec",
    approach: [
      "Acompanhamento contínuo da operação e das integrações",
      "Apoio técnico estruturado às equipes internas",
      "Identificação e correção preventiva de falhas",
      "Atuação orientada a SLAs e continuidade operacional",
      "Ajustes pontuais para preservação da estabilidade",
    ],
    resultsTitle: "Resultados esperados",
    results: [
      "Operação estável e previsível",
      "Redução de incidentes críticos",
      "Menor impacto operacional por falhas técnicas",
      "Continuidade dos serviços ao longo do tempo",
      "Maior confiança da operação nos sistemas",
    ],
    cta: "Fale com um especialista",
  },
  es: {
    seoTitle: "Sustentación Operacional y Estabilidad de las Soluciones | Stratumtec",
    seoDescription: "Garantizamos estabilidad, continuidad y previsibilidad operacional mediante seguimiento continuo y operación asistida.",
    h1: "Sustentación y Operación Asistida",
    intro: "Después de la implantación y adaptación de las soluciones, el mayor desafío pasa a ser mantener la operación estable, previsible y alineada a las necesidades del negocio. El servicio de Sustentación Operacional de Stratumtec fue creado para garantizar que los sistemas, integraciones y flujos continúen funcionando correctamente a lo largo del tiempo. Actuamos de forma cercana a la operación, acompañando el día a día, apoyando a los equipos internos y anticipando ajustes necesarios para evitar impactos en desempeño, SLAs y resultados.",
    challengesTitle: "Principales desafíos",
    challenges: [
      "Inestabilidad operacional tras la entrada en producción",
      "Dependencia excesiva de intervenciones de emergencia",
      "Falta de seguimiento continuo de las integraciones",
      "Incidentes recurrentes que impactan SLAs y operación",
      "Pérdida de previsibilidad en el funcionamiento de los sistemas",
    ],
    approachTitle: "Enfoque Stratumtec",
    approach: [
      "Seguimiento continuo de la operación y las integraciones",
      "Apoyo técnico estructurado a los equipos internos",
      "Identificación y corrección preventiva de fallas",
      "Actuación orientada a SLAs y continuidad operacional",
      "Ajustes puntuales para preservar la estabilidad",
    ],
    resultsTitle: "Resultados esperados",
    results: [
      "Operación estable y previsible",
      "Reducción de incidentes críticos",
      "Menor impacto operacional por fallas técnicas",
      "Continuidad de los servicios a lo largo del tiempo",
      "Mayor confianza de la operación en los sistemas",
    ],
    cta: "Hable con un especialista",
  },
};

export default function OngoingOperation() {
  const { language } = useLanguage();
  return <SolutionPageTemplate content={content[language]} />;
}
