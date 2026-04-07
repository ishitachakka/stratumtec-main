import { useLanguage } from "@/contexts/LanguageContext";
import { SolutionPageTemplate } from "@/components/SolutionPageTemplate";

const content = {
  en: {
    seoTitle: "Operational Adaptation and Continuous Improvement | Stratumtec",
    seoDescription: "We adjust processes, integrations, and flows to keep pace with business changes with control and stability.",
    h1: "Operational Adaptation and Continuous Improvement",
    intro: "As operations grow and change, processes, rules, and volumes need adjustment. Stratumtec's Operational Adaptation and Continuous Improvement service ensures these changes happen in a structured way — without improvisation and without compromising operational stability. We adapt integrations, flows, and existing processes so that technology keeps pace with the business, with predictability and governance.",
    challengesTitle: "Key challenges",
    challenges: [
      "Operational changes without adequate technology support",
      "Isolated adjustments that generate instability",
      "Lack of control over changes in integrated systems",
      "Difficulty adapting processes to growth",
      "Loss of efficiency over time",
    ],
    approachTitle: "Stratumtec Approach",
    approach: [
      "Adjustments guided by operational and business impact",
      "Optimization of existing flows and integrations",
      "Planning and validation before each change",
      "Modular architecture for controlled adaptations",
      "Continuous governance and documentation",
    ],
    resultsTitle: "Expected results",
    results: [
      "Operation aligned with the current business reality",
      "Adaptations without disruptions",
      "Reduced risks associated with changes",
      "Greater operational efficiency over time",
      "Foundation prepared for sustainable growth",
    ],
    cta: "Talk to a specialist",
  },
  pt: {
    seoTitle: "Adaptação Operacional e Melhoria Contínua | Stratumtec",
    seoDescription: "Ajustamos processos, integrações e fluxos para acompanhar mudanças do negócio com controle e estabilidade.",
    h1: "Evolução e Customização",
    intro: "À medida que a operação cresce e muda, processos, regras e volumes precisam ser ajustados. O serviço de Adaptação Operacional e Melhoria Contínua da Stratumtec garante que essas mudanças aconteçam de forma estruturada, sem improvisações e sem comprometer a estabilidade da operação. Atuamos na adaptação de integrações, fluxos e processos já existentes, permitindo que a tecnologia acompanhe o negócio com previsibilidade e governança.",
    challengesTitle: "Principais desafios",
    challenges: [
      "Mudanças operacionais sem suporte tecnológico adequado",
      "Ajustes pontuais que geram instabilidade",
      "Falta de controle sobre alterações em sistemas integrados",
      "Dificuldade de adaptar processos ao crescimento",
      "Perda de eficiência ao longo do tempo",
    ],
    approachTitle: "Abordagem Stratumtec",
    approach: [
      "Ajustes orientados por impacto operacional e de negócio",
      "Otimização de fluxos e integrações existentes",
      "Planejamento e validação antes de cada mudança",
      "Arquitetura modular para adaptações controladas",
      "Governança e documentação contínua",
    ],
    resultsTitle: "Resultados esperados",
    results: [
      "Operação alinhada à realidade atual do negócio",
      "Adaptações sem interrupções",
      "Redução de riscos associados a mudanças",
      "Maior eficiência operacional ao longo do tempo",
      "Base preparada para crescimento sustentável",
    ],
    cta: "Fale com um especialista",
  },
  es: {
    seoTitle: "Adaptación Operacional y Mejora Continua | Stratumtec",
    seoDescription: "Ajustamos procesos, integraciones y flujos para acompañar los cambios del negocio con control y estabilidad.",
    h1: "Adaptación Operacional y Mejora Continua",
    intro: "A medida que la operación crece y cambia, los procesos, reglas y volúmenes necesitan ajustarse. El servicio de Adaptación Operacional y Mejora Continua de Stratumtec garantiza que estos cambios ocurran de forma estructurada, sin improvisaciones y sin comprometer la estabilidad de la operación. Actuamos en la adaptación de integraciones, flujos y procesos ya existentes, permitiendo que la tecnología acompañe al negocio con previsibilidad y gobernanza.",
    challengesTitle: "Principales desafíos",
    challenges: [
      "Cambios operacionales sin soporte tecnológico adecuado",
      "Ajustes puntuales que generan inestabilidad",
      "Falta de control sobre cambios en sistemas integrados",
      "Dificultad para adaptar procesos al crecimiento",
      "Pérdida de eficiencia a lo largo del tiempo",
    ],
    approachTitle: "Enfoque Stratumtec",
    approach: [
      "Ajustes orientados por impacto operacional y de negocio",
      "Optimización de flujos e integraciones existentes",
      "Planificación y validación antes de cada cambio",
      "Arquitectura modular para adaptaciones controladas",
      "Gobernanza y documentación continua",
    ],
    resultsTitle: "Resultados esperados",
    results: [
      "Operación alineada con la realidad actual del negocio",
      "Adaptaciones sin interrupciones",
      "Reducción de riesgos asociados a cambios",
      "Mayor eficiencia operacional a lo largo del tiempo",
      "Base preparada para el crecimiento sostenible",
    ],
    cta: "Hable con un especialista",
  },
};

export default function OperationalAdaptation() {
  const { language } = useLanguage();
  return <SolutionPageTemplate content={content[language]} />;
}
