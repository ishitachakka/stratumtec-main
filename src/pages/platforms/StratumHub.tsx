import { useLanguage } from "@/contexts/LanguageContext";
import { PlatformPageTemplate } from "@/components/PlatformPageTemplate";

const content = {
  en: {
    seoTitle: "stratumHUB | Omnichannel Service Platform — Stratumtec",
    seoDescription: "Omnichannel service platform to centralize channels, integrate systems, and get a 360° view of the customer.",
    h1: "stratumHUB",
    intro: "stratumHUB is Stratumtec's service platform, built to centralize customer interactions across multiple channels and integrate service with the business's systems and processes. The solution provides a robust foundation for service and relationship operations, enabling gradual evolution as the company's maturity and needs grow.",
    capabilitiesTitle: "Key capabilities",
    capabilities: [
      "Centralized omnichannel service (voice, chat, WhatsApp, email, social media, and external channels)",
      "360° customer view with unified interaction history",
      "Configurable IVR and service rules by profile, schedule, and demand",
      "Operational workflows integrated with internal systems",
      "Prioritization by rules, profiles, skills, and SLAs",
      "Screen pop and real-time customer context",
      "Modular and evolutive architecture",
    ],
    useCasesTitle: "Where stratumHUB is used",
    useCases: [
      "Customer service and relationship management",
      "Technical support and operations",
      "Sales, pre-sales, and retention",
      "Collections and credit recovery",
      "Contact centers and digital channels",
      "Operations requiring SLA control and interaction history",
    ],
    cta: "Talk to a specialist",
  },
  pt: {
    seoTitle: "stratumHUB | Plataforma Omnichannel de Atendimento — Stratumtec",
    seoDescription: "Plataforma omnichannel de atendimento para centralizar canais, integrar sistemas e obter visão 360º do cliente.",
    h1: "stratumHUB",
    intro: "O stratumHUB é a plataforma de atendimento da Stratumtec, desenvolvida para centralizar interações com clientes em múltiplos canais e integrar o atendimento aos sistemas e processos do negócio. A solução oferece uma base robusta para operações de atendimento e relacionamento, permitindo evolução gradual conforme a maturidade e as necessidades da empresa.",
    capabilitiesTitle: "Principais capacidades",
    capabilities: [
      "Atendimento omnichannel centralizado (voz, chat, WhatsApp, e-mail, redes sociais e canais externos)",
      "Visão 360º do cliente com histórico unificado de interações",
      "URA configurável e regras de atendimento por perfil, horário e demanda",
      "Workflows operacionais integrados a sistemas internos",
      "Priorização por regras, perfis, habilidades e SLAs",
      "Screen pop e contexto do cliente em tempo real",
      "Arquitetura modular e evolutiva",
    ],
    useCasesTitle: "Onde o stratumHUB é utilizado",
    useCases: [
      "Atendimento ao cliente e relacionamento",
      "Suporte técnico e operações",
      "Vendas, pré-vendas e retenção",
      "Cobrança e recuperação de crédito",
      "Centrais de contato e canais digitais",
      "Operações que exigem controle de SLAs e histórico de interações",
    ],
    cta: "Fale com um especialista",
  },
  es: {
    seoTitle: "stratumHUB | Plataforma Omnicanal de Atención — Stratumtec",
    seoDescription: "Plataforma omnicanal de atención para centralizar canales, integrar sistemas y obtener una visión 360° del cliente.",
    h1: "stratumHUB",
    intro: "stratumHUB es la plataforma de atención de Stratumtec, desarrollada para centralizar interacciones con clientes en múltiples canales e integrar la atención a los sistemas y procesos del negocio. La solución ofrece una base robusta para operaciones de atención y relacionamiento, permitiendo una evolución gradual conforme la madurez y las necesidades de la empresa.",
    capabilitiesTitle: "Capacidades clave",
    capabilities: [
      "Atención omnicanal centralizada (voz, chat, WhatsApp, correo electrónico, redes sociales y canales externos)",
      "Visión 360° del cliente con historial unificado de interacciones",
      "IVR configurable y reglas de atención por perfil, horario y demanda",
      "Workflows operacionales integrados con sistemas internos",
      "Priorización por reglas, perfiles, habilidades y SLAs",
      "Screen pop y contexto del cliente en tiempo real",
      "Arquitectura modular y evolutiva",
    ],
    useCasesTitle: "Dónde se utiliza stratumHUB",
    useCases: [
      "Atención al cliente y relacionamiento",
      "Soporte técnico y operaciones",
      "Ventas, preventa y retención",
      "Cobranza y recuperación de crédito",
      "Centros de contacto y canales digitales",
      "Operaciones que requieren control de SLAs e historial de interacciones",
    ],
    cta: "Hable con un especialista",
  },
};

export default function StratumHub() {
  const { language } = useLanguage();
  return <PlatformPageTemplate content={content[language]} />;
}
