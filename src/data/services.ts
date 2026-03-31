import { Language } from "@/lib/translations";

export interface ServiceData {
  slug: string;
  title: string;
  seoTitle: string;
  seoDescription: string;
  shortDescription: string;
  institutionalDescription: string;
  challenges: string[];
  approach: string[];
  results: string[];
  cta: string;
  icon: string;
}

export const serviceSlugs = ['integration', 'adaptation', 'sustainability', 'technical-consulting'] as const;
export type ServiceSlug = typeof serviceSlugs[number];

export const serviceRoutes: Record<ServiceSlug, Record<Language, string>> = {
  'integration':          { pt: '/pt/servicos/integracao',    en: '/en/services/integration',        es: '/es/servicios/integracion' },
  'adaptation':           { pt: '/pt/servicos/adaptacao',     en: '/en/services/adaptation',         es: '/es/servicios/adaptacion' },
  'sustainability':       { pt: '/pt/servicos/sustentacao',   en: '/en/services/sustainability',     es: '/es/servicios/sustentacion' },
  'technical-consulting': { pt: '/pt/servicos/consultoria',   en: '/en/services/technical-consulting', es: '/es/servicios/consultoria-tecnica' },
};

const services: Record<Language, ServiceData[]> = {
  pt: [
    {
      slug: 'integration',
      title: 'Implantação e Integração',
      seoTitle: 'Integração de Sistemas e Conectividade Operacional | Stratumtec',
      seoDescription: 'Integramos sistemas corporativos para eliminar silos, reduzir retrabalho e garantir fluidez operacional.',
      shortDescription: 'Conecte sistemas e elimine silos operacionais',
      institutionalDescription: 'Muitas empresas operam com múltiplos sistemas que não se comunicam entre si, gerando retrabalho, inconsistências de dados e baixa eficiência operacional. O serviço de Integração de Sistemas da Stratumtec conecta plataformas, dados e fluxos operacionais, criando uma base integrada que sustenta processos mais eficientes.',
      challenges: ['Sistemas isolados que não trocam informações', 'Dados duplicados ou inconsistentes', 'Processos manuais para conciliar informações', 'Dependência de planilhas e controles paralelos', 'Falta de visão integrada da operação'],
      approach: ['Integração entre sistemas corporativos e legados', 'Orquestração de fluxos de dados e processos', 'Padronização e consistência das informações', 'Arquitetura de integração flexível e escalável', 'Implantação controlada sem interrupção'],
      results: ['Sistemas conectados e operação mais fluida', 'Redução de retrabalho e erros', 'Maior confiabilidade dos dados', 'Base integrada para automação e analytics', 'Ganho direto de eficiência operacional'],
      cta: 'Fale com um especialista',
      icon: 'Plug',
    },
    {
      slug: 'adaptation',
      title: 'Evolução e Customização',
      seoTitle: 'Adaptação Operacional e Melhoria Contínua | Stratumtec',
      seoDescription: 'Ajustamos processos, integrações e fluxos para acompanhar mudanças do negócio com controle e estabilidade.',
      shortDescription: 'Adapte a tecnologia à evolução do negócio',
      institutionalDescription: 'À medida que a operação cresce e muda, processos, regras e volumes precisam ser ajustados. O serviço de Adaptação Operacional garante que essas mudanças aconteçam de forma estruturada, sem improvisações e sem comprometer a estabilidade.',
      challenges: ['Mudanças operacionais sem suporte tecnológico', 'Ajustes pontuais que geram instabilidade', 'Falta de controle sobre alterações', 'Dificuldade de adaptar ao crescimento', 'Perda de eficiência ao longo do tempo'],
      approach: ['Ajustes orientados por impacto operacional', 'Otimização de fluxos e integrações', 'Planejamento e validação antes de cada mudança', 'Arquitetura modular para adaptações', 'Governança e documentação contínua'],
      results: ['Operação alinhada à realidade do negócio', 'Adaptações sem interrupções', 'Redução de riscos', 'Maior eficiência ao longo do tempo', 'Base preparada para crescimento sustentável'],
      cta: 'Fale com um especialista',
      icon: 'RefreshCw',
    },
    {
      slug: 'sustainability',
      title: 'Sustentação e Operação Assistida',
      seoTitle: 'Sustentação Operacional e Estabilidade das Soluções | Stratumtec',
      seoDescription: 'Garantimos estabilidade, continuidade e previsibilidade operacional por meio de acompanhamento contínuo.',
      shortDescription: 'Mantenha a operação estável e previsível',
      institutionalDescription: 'Após a implantação, o maior desafio é manter a operação estável e alinhada às necessidades do negócio. O serviço de Sustentação da Stratumtec garante que sistemas e integrações continuem funcionando corretamente ao longo do tempo.',
      challenges: ['Instabilidade após entrada em produção', 'Dependência de intervenções emergenciais', 'Falta de acompanhamento contínuo', 'Incidentes recorrentes que impactam SLAs', 'Perda de previsibilidade'],
      approach: ['Acompanhamento contínuo da operação', 'Apoio técnico estruturado', 'Identificação e correção preventiva', 'Atuação orientada a SLAs', 'Ajustes para preservação da estabilidade'],
      results: ['Operação estável e previsível', 'Redução de incidentes críticos', 'Menor impacto por falhas técnicas', 'Continuidade dos serviços', 'Maior confiança nos sistemas'],
      cta: 'Fale com um especialista',
      icon: 'Shield',
    },
    {
      slug: 'technical-consulting',
      title: 'Consultoria Técnica e Arquitetural',
      seoTitle: 'Consultoria Técnica e Arquitetural | Stratumtec',
      seoDescription: 'Consultoria técnica para apoiar decisões arquiteturais, integrações e evolução tecnológica.',
      shortDescription: 'Tome decisões técnicas com segurança',
      institutionalDescription: 'A Consultoria Técnica e Arquitetural da Stratumtec apoia empresas em decisões críticas relacionadas a arquitetura, integrações e desenho de soluções. Atuamos de forma prática e orientada à realidade operacional.',
      challenges: ['Decisões técnicas sem visão operacional', 'Arquiteturas que não sustentam crescimento', 'Integrações mal planejadas', 'Escolhas que geram retrabalho e custo', 'Falta de clareza sobre impactos técnicos'],
      approach: ['Avaliação técnica e arquitetural', 'Análise de cenários e alternativas', 'Recomendações orientadas a impacto', 'Apoio ao desenho de arquiteturas', 'Alinhamento entre tecnologia e estratégia'],
      results: ['Decisões técnicas mais seguras', 'Redução de riscos e retrabalho', 'Arquiteturas mais eficientes', 'Melhor aproveitamento de investimentos', 'Base sólida para evolução futura'],
      cta: 'Fale com um especialista',
      icon: 'Compass',
    },
  ],
  en: [
    {
      slug: 'integration',
      title: 'Implementation and Integration',
      seoTitle: 'Systems Integration and Operational Connectivity | Stratumtec',
      seoDescription: 'We integrate corporate systems to eliminate silos, reduce rework, and ensure operational fluidity.',
      shortDescription: 'Connect systems and eliminate operational silos',
      institutionalDescription: 'Many companies operate with multiple systems that don\'t communicate, generating rework and low efficiency. Stratumtec\'s Integration service connects platforms, data, and operational flows into an integrated base.',
      challenges: ['Isolated systems that don\'t share information', 'Duplicate or inconsistent data', 'Manual processes to reconcile information', 'Dependency on spreadsheets', 'Lack of integrated operational view'],
      approach: ['Integration between corporate and legacy systems', 'Data flow and process orchestration', 'Information standardization and consistency', 'Flexible and scalable integration architecture', 'Controlled implementation without disruption'],
      results: ['Connected systems and smoother operations', 'Reduced rework and errors', 'Greater data reliability', 'Integrated base for automation and analytics', 'Direct operational efficiency gains'],
      cta: 'Talk to an expert',
      icon: 'Plug',
    },
    {
      slug: 'adaptation',
      title: 'Evolution and Customization',
      seoTitle: 'Operational Adaptation and Continuous Improvement | Stratumtec',
      seoDescription: 'We adjust processes, integrations, and flows to keep pace with business changes with control and stability.',
      shortDescription: 'Adapt technology to business evolution',
      institutionalDescription: 'As operations grow and change, processes, rules, and volumes need adjustment. Stratumtec\'s Operational Adaptation service ensures these changes happen in a structured way without compromising stability.',
      challenges: ['Operational changes without tech support', 'Point adjustments causing instability', 'Lack of control over system changes', 'Difficulty adapting to growth', 'Efficiency loss over time'],
      approach: ['Impact-driven adjustments', 'Flow and integration optimization', 'Planning and validation before each change', 'Modular architecture for adaptations', 'Continuous governance and documentation'],
      results: ['Operations aligned with business reality', 'Adaptations without disruptions', 'Reduced risk', 'Greater efficiency over time', 'Foundation prepared for sustainable growth'],
      cta: 'Talk to an expert',
      icon: 'RefreshCw',
    },
    {
      slug: 'sustainability',
      title: 'Ongoing Operation and Stability',
      seoTitle: 'Operational Sustainability and Solution Stability | Stratumtec',
      seoDescription: 'We ensure stability, continuity, and operational predictability through continuous monitoring.',
      shortDescription: 'Keep operations stable and predictable',
      institutionalDescription: 'After implementation, the biggest challenge is keeping operations stable and aligned with business needs. Stratumtec\'s Sustainability service ensures systems and integrations continue working correctly over time.',
      challenges: ['Post-production instability', 'Dependency on emergency interventions', 'Lack of continuous monitoring', 'Recurring incidents impacting SLAs', 'Loss of predictability'],
      approach: ['Continuous operation monitoring', 'Structured technical support', 'Preventive identification and correction', 'SLA-oriented action', 'Adjustments for stability preservation'],
      results: ['Stable and predictable operations', 'Reduced critical incidents', 'Lower impact from technical failures', 'Service continuity', 'Greater system confidence'],
      cta: 'Talk to an expert',
      icon: 'Shield',
    },
    {
      slug: 'technical-consulting',
      title: 'Technical and Architectural Consulting',
      seoTitle: 'Technical and Architectural Consulting | Stratumtec',
      seoDescription: 'Technical consulting to support architectural decisions, integrations, and technology evolution.',
      shortDescription: 'Make technical decisions with confidence',
      institutionalDescription: 'Stratumtec\'s Technical and Architectural Consulting supports companies in critical decisions related to architecture, integrations, and solution design. We act practically and oriented to operational reality.',
      challenges: ['Technical decisions without operational vision', 'Architectures that don\'t support growth', 'Poorly planned integrations', 'Choices generating rework and cost', 'Lack of clarity on technical impacts'],
      approach: ['Technical and architectural evaluation', 'Scenario and alternative analysis', 'Impact-oriented recommendations', 'Architecture design support', 'Technology-strategy alignment'],
      results: ['Safer technical decisions', 'Reduced risk and rework', 'More efficient architectures', 'Better investment utilization', 'Solid foundation for future evolution'],
      cta: 'Talk to an expert',
      icon: 'Compass',
    },
  ],
  es: [
    {
      slug: 'integration',
      title: 'Implantación e Integración',
      seoTitle: 'Integración de Sistemas y Conectividad Operacional | Stratumtec',
      seoDescription: 'Integramos sistemas corporativos para eliminar silos y garantizar fluidez operacional.',
      shortDescription: 'Conecte sistemas y elimine silos operacionales',
      institutionalDescription: 'Muchas empresas operan con múltiples sistemas que no se comunican entre sí. El servicio de Integración de Stratumtec conecta plataformas, datos y flujos operacionales.',
      challenges: ['Sistemas aislados sin comunicación', 'Datos duplicados o inconsistentes', 'Procesos manuales de conciliación', 'Dependencia de planillas', 'Falta de visión integrada'],
      approach: ['Integración entre sistemas corporativos', 'Orquestación de flujos de datos', 'Estandarización de la información', 'Arquitectura flexible y escalable', 'Implantación controlada'],
      results: ['Sistemas conectados y operación más fluida', 'Reducción de retrabajo y errores', 'Mayor confiabilidad de datos', 'Base integrada para automatización', 'Ganancia directa de eficiencia'],
      cta: 'Hable con un especialista',
      icon: 'Plug',
    },
    {
      slug: 'adaptation',
      title: 'Evolución y Personalización',
      seoTitle: 'Adaptación Operacional y Mejora Continua | Stratumtec',
      seoDescription: 'Ajustamos procesos e integraciones para acompañar cambios del negocio con control y estabilidad.',
      shortDescription: 'Adapte la tecnología a la evolución del negocio',
      institutionalDescription: 'A medida que la operación crece, procesos y reglas necesitan ajustarse. El servicio de Adaptación Operacional garantiza cambios estructurados sin comprometer la estabilidad.',
      challenges: ['Cambios sin soporte tecnológico', 'Ajustes que generan inestabilidad', 'Falta de control sobre alteraciones', 'Dificultad para adaptarse al crecimiento', 'Pérdida de eficiencia'],
      approach: ['Ajustes orientados por impacto', 'Optimización de flujos', 'Planificación y validación previa', 'Arquitectura modular', 'Gobernanza y documentación continua'],
      results: ['Operación alineada al negocio', 'Adaptaciones sin interrupciones', 'Reducción de riesgos', 'Mayor eficiencia en el tiempo', 'Base para crecimiento sostenible'],
      cta: 'Hable con un especialista',
      icon: 'RefreshCw',
    },
    {
      slug: 'sustainability',
      title: 'Sustentación y Operación Asistida',
      seoTitle: 'Sustentación Operacional y Estabilidad | Stratumtec',
      seoDescription: 'Garantizamos estabilidad y previsibilidad operacional mediante acompañamiento continuo.',
      shortDescription: 'Mantenga la operación estable y previsible',
      institutionalDescription: 'Después de la implantación, el mayor desafío es mantener la operación estable. El servicio de Sustentación de Stratumtec garantiza que sistemas e integraciones funcionen correctamente en el tiempo.',
      challenges: ['Inestabilidad pos-producción', 'Dependencia de intervenciones de emergencia', 'Falta de acompañamiento continuo', 'Incidentes recurrentes', 'Pérdida de previsibilidad'],
      approach: ['Acompañamiento continuo de la operación', 'Soporte técnico estructurado', 'Identificación y corrección preventiva', 'Actuación orientada a SLAs', 'Ajustes para estabilidad'],
      results: ['Operación estable y previsible', 'Reducción de incidentes críticos', 'Menor impacto por fallas', 'Continuidad de los servicios', 'Mayor confianza en los sistemas'],
      cta: 'Hable con un especialista',
      icon: 'Shield',
    },
    {
      slug: 'technical-consulting',
      title: 'Consultoría Técnica y Arquitectural',
      seoTitle: 'Consultoría Técnica y Arquitectural | Stratumtec',
      seoDescription: 'Consultoría técnica para apoyar decisiones arquitecturales e integraciones.',
      shortDescription: 'Tome decisiones técnicas con seguridad',
      institutionalDescription: 'La Consultoría Técnica de Stratumtec apoya empresas en decisiones críticas de arquitectura, integraciones y diseño de soluciones.',
      challenges: ['Decisiones sin visión operacional', 'Arquitecturas que no escalan', 'Integraciones mal planificadas', 'Elecciones que generan retrabajo', 'Falta de claridad sobre impactos'],
      approach: ['Evaluación técnica y arquitectural', 'Análisis de escenarios y alternativas', 'Recomendaciones orientadas a impacto', 'Apoyo al diseño de arquitecturas', 'Alineación tecnología-estrategia'],
      results: ['Decisiones técnicas más seguras', 'Reducción de riesgos y retrabajo', 'Arquitecturas más eficientes', 'Mejor aprovechamiento de inversiones', 'Base sólida para evolución futura'],
      cta: 'Hable con un especialista',
      icon: 'Compass',
    },
  ],
};

export function getServices(lang: Language) { return services[lang]; }
export function getServiceBySlug(lang: Language, slug: string) { return services[lang].find(s => s.slug === slug); }
