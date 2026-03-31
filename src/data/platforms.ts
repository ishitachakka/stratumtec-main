import { Language } from "@/lib/translations";

export interface PlatformData {
  slug: string;
  name: string;
  seoTitle: string;
  seoDescription: string;
  tagline: string;
  institutionalDescription: string;
  capabilities: string[];
  useCases: string[];
  cta: string;
  icon: string;
}

export const platformSlugs = ['stratumhub', 'bluemesh'] as const;
export type PlatformSlug = typeof platformSlugs[number];

export const platformRoutes: Record<PlatformSlug, Record<Language, string>> = {
  stratumhub: { pt: '/pt/plataformas/stratumhub', en: '/en/platforms/stratumhub', es: '/es/plataformas/stratumhub' },
  bluemesh:   { pt: '/pt/plataformas/bluemesh',   en: '/en/platforms/bluemesh',   es: '/es/plataformas/bluemesh' },
};

const platforms: Record<Language, PlatformData[]> = {
  pt: [
    {
      slug: 'stratumhub',
      name: 'stratumHUB',
      seoTitle: 'stratumHUB | Plataforma Omnichannel de Atendimento – Stratumtec',
      seoDescription: 'Plataforma omnichannel de atendimento para centralizar canais, integrar sistemas e obter visão 360º do cliente.',
      tagline: 'Centralize e gerencie todo o atendimento ao cliente',
      institutionalDescription: 'O stratumHUB é a plataforma de atendimento da Stratumtec, desenvolvida para centralizar interações com clientes em múltiplos canais e integrar o atendimento aos sistemas e processos do negócio. A solução oferece uma base robusta para operações de atendimento e relacionamento, permitindo evolução gradual conforme a maturidade e as necessidades da empresa.',
      capabilities: [
        'Atendimento omnichannel centralizado (voz, chat, WhatsApp, e-mail, redes sociais e canais externos)',
        'Visão 360º do cliente com histórico unificado de interações',
        'URA configurável e regras de atendimento por perfil, horário e demanda',
        'Workflows operacionais integrados a sistemas internos',
        'Priorização por regras, perfis, habilidades e SLAs',
        'Screen pop e contexto do cliente em tempo real',
        'Arquitetura modular e evolutiva',
      ],
      useCases: [
        'Atendimento ao cliente e relacionamento',
        'Suporte técnico e operações',
        'Vendas, pré-vendas e retenção',
        'Cobrança e recuperação de crédito',
        'Centrais de contato e canais digitais',
        'Operações que exigem controle de SLAs e histórico de interações',
      ],
      cta: 'Fale com um especialista',
      icon: 'Headphones',
    },
    {
      slug: 'bluemesh',
      name: 'BlueMesh',
      seoTitle: 'BlueMesh | Plataforma de Inteligência Artificial Corporativa – Stratumtec',
      seoDescription: 'Plataforma de inteligência artificial proprietária para automação de processos, análise de dados e apoio à tomada de decisão.',
      tagline: 'Inteligência Artificial aplicada ao seu negócio',
      institutionalDescription: 'A BlueMesh é a plataforma de inteligência artificial da Stratumtec, projetada para atuar como uma camada de inteligência sobre sistemas, dados e processos corporativos. Ela permite automatizar atividades, interpretar informações e apoiar decisões estratégicas, podendo ser incorporada de forma integrada a diferentes contextos operacionais.',
      capabilities: [
        'Automação inteligente de processos corporativos',
        'Agentes de IA conversacionais por texto ou voz',
        'Análise avançada de voz, texto e documentos',
        'Leitura, validação e geração automatizada de documentos',
        'Human-in-the-loop, governança e trilhas de auditoria',
        'Integração com plataformas, sistemas corporativos e bases de dados',
      ],
      useCases: [
        'Atendimento e relacionamento com clientes',
        'Automação de processos administrativos e operacionais',
        'Análise de qualidade, compliance e performance em operações de voz',
        'Identificação de riscos e oportunidades em atendimentos',
        'Análise e tratamento de documentos e informações',
        'Operações que envolvem alto volume de interações ou dados',
        'Suporte à tomada de decisão com base em dados estruturados',
        'Integração de inteligência a plataformas e sistemas existentes',
      ],
      cta: 'Fale com um especialista',
      icon: 'Brain',
    },
  ],
  en: [
    {
      slug: 'stratumhub',
      name: 'stratumHUB',
      seoTitle: 'stratumHUB | Omnichannel Service Platform – Stratumtec',
      seoDescription: 'Omnichannel service platform to centralize channels, integrate systems, and gain a 360° customer view.',
      tagline: 'Centralize and manage all customer service',
      institutionalDescription: 'stratumHUB is Stratumtec\'s service platform, developed to centralize customer interactions across multiple channels and integrate service with business systems and processes. The solution provides a robust foundation for service and relationship operations, enabling gradual evolution as the company\'s maturity and needs grow.',
      capabilities: [
        'Centralized omnichannel service (voice, chat, WhatsApp, email, social media, and external channels)',
        '360° customer view with unified interaction history',
        'Configurable IVR and service rules by profile, schedule, and demand',
        'Operational workflows integrated with internal systems',
        'Prioritization by rules, profiles, skills, and SLAs',
        'Screen pop and real-time customer context',
        'Modular and evolutionary architecture',
      ],
      useCases: [
        'Customer service and relationship management',
        'Technical support and operations',
        'Sales, pre-sales, and retention',
        'Collections and credit recovery',
        'Contact centers and digital channels',
        'Operations requiring SLA control and interaction history',
      ],
      cta: 'Talk to an expert',
      icon: 'Headphones',
    },
    {
      slug: 'bluemesh',
      name: 'BlueMesh',
      seoTitle: 'BlueMesh | Corporate AI Platform – Stratumtec',
      seoDescription: 'Proprietary AI platform for process automation, data analysis, and decision support.',
      tagline: 'Artificial Intelligence applied to your business',
      institutionalDescription: 'BlueMesh is Stratumtec\'s artificial intelligence platform, designed to act as an intelligence layer over corporate systems, data, and processes. It enables activity automation, information interpretation, and strategic decision support, integrable into different operational contexts.',
      capabilities: [
        'Intelligent corporate process automation',
        'Conversational AI agents via text or voice',
        'Advanced voice, text, and document analysis',
        'Automated document reading, validation, and generation',
        'Human-in-the-loop, governance, and audit trails',
        'Integration with platforms, corporate systems, and databases',
      ],
      useCases: [
        'Customer service and relationship management',
        'Administrative and operational process automation',
        'Quality, compliance, and performance analysis in voice operations',
        'Risk and opportunity identification in service interactions',
        'Document and information analysis and processing',
        'Operations involving high volumes of interactions or data',
        'Data-driven decision support',
        'Intelligence integration into existing platforms and systems',
      ],
      cta: 'Talk to an expert',
      icon: 'Brain',
    },
  ],
  es: [
    {
      slug: 'stratumhub',
      name: 'stratumHUB',
      seoTitle: 'stratumHUB | Plataforma Omnicanal de Atención – Stratumtec',
      seoDescription: 'Plataforma omnicanal para centralizar canales, integrar sistemas y obtener visión 360° del cliente.',
      tagline: 'Centralice y gestione toda la atención al cliente',
      institutionalDescription: 'stratumHUB es la plataforma de atención de Stratumtec, desarrollada para centralizar interacciones con clientes en múltiples canales e integrar la atención a los sistemas y procesos del negocio.',
      capabilities: [
        'Atención omnicanal centralizada (voz, chat, WhatsApp, correo, redes sociales)',
        'Visión 360° del cliente con historial unificado',
        'IVR configurable y reglas de atención por perfil y horario',
        'Workflows operacionales integrados a sistemas internos',
        'Priorización por reglas, perfiles, habilidades y SLAs',
        'Screen pop y contexto del cliente en tiempo real',
        'Arquitectura modular y evolutiva',
      ],
      useCases: [
        'Atención al cliente y relacionamiento',
        'Soporte técnico y operaciones',
        'Ventas, preventas y retención',
        'Cobranza y recuperación de crédito',
        'Centrales de contacto y canales digitales',
        'Operaciones que requieren control de SLAs',
      ],
      cta: 'Hable con un especialista',
      icon: 'Headphones',
    },
    {
      slug: 'bluemesh',
      name: 'BlueMesh',
      seoTitle: 'BlueMesh | Plataforma de IA Corporativa – Stratumtec',
      seoDescription: 'Plataforma de inteligencia artificial propietaria para automatización de procesos y apoyo a la toma de decisiones.',
      tagline: 'Inteligencia Artificial aplicada a su negocio',
      institutionalDescription: 'BlueMesh es la plataforma de inteligencia artificial de Stratumtec, diseñada para actuar como una capa de inteligencia sobre sistemas, datos y procesos corporativos.',
      capabilities: [
        'Automatización inteligente de procesos corporativos',
        'Agentes de IA conversacionales por texto o voz',
        'Análisis avanzado de voz, texto y documentos',
        'Lectura, validación y generación automatizada de documentos',
        'Human-in-the-loop, gobernanza y trazabilidad',
        'Integración con plataformas, sistemas y bases de datos',
      ],
      useCases: [
        'Atención y relacionamiento con clientes',
        'Automatización de procesos administrativos y operacionales',
        'Análisis de calidad y compliance en operaciones de voz',
        'Identificación de riesgos y oportunidades',
        'Análisis y tratamiento de documentos e información',
        'Operaciones con alto volumen de interacciones o datos',
        'Soporte a la toma de decisiones basadas en datos',
        'Integración de inteligencia a sistemas existentes',
      ],
      cta: 'Hable con un especialista',
      icon: 'Brain',
    },
  ],
};

export function getPlatforms(lang: Language) { return platforms[lang]; }
export function getPlatformBySlug(lang: Language, slug: string) { return platforms[lang].find(p => p.slug === slug); }
