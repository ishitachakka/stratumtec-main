import { Language } from "@/lib/translations";

export interface HomeContent {
  hero: {
    title: string;
    subtitle: string;
    primaryCta: string;
    secondaryCta: string;
  };
  intro: {
    title: string;
    description: string;
  };
  solutionsOverview: {
    title: string;
    viewAll: string;
  };
  platformsPreview: {
    title: string;
    viewProducts: string;
  };
  servicesPreview: {
    title: string;
    description: string;
    viewServices: string;
  };
  whyStratumtec: {
    title: string;
    differentiators: { title: string; description: string }[];
  };
  finalCta: {
    title: string;
    description: string;
    cta: string;
  };
}

export const homeContent: Record<Language, HomeContent> = {
  pt: {
    hero: {
      title: 'Como rentabilizar o seu negócio com tecnologia?',
      subtitle: 'Ajudamos empresas a melhorar a jornada do cliente, reter mais clientes e expandir resultados com soluções de tecnologia aplicadas à sua realidade operacional.',
      primaryCta: 'Fale com um especialista',
      secondaryCta: 'Conheça nossas soluções',
    },
    intro: {
      title: 'Você sabe onde sua empresa perde clientes, receita ou eficiência?',
      description: 'Apoiamos empresas na melhoria da jornada do cliente, na retenção de clientes e na rentabilização do negócio, usando tecnologia de forma prática e aplicada à realidade de cada operação. Atuamos desde o desenho da solução até a implantação e sustentação, com foco em resultados concretos e previsibilidade.',
    },
    solutionsOverview: {
      title: 'Qual é a sua necessidade?',
      viewAll: 'Ver todas as soluções',
    },
    platformsPreview: {
      title: 'Plataformas desenvolvidas para escalar sua operação',
      viewProducts: 'Conheça nossos produtos',
    },
    servicesPreview: {
      title: 'Tecnologia que sai do papel e transforma a operação',
      description: 'Nossos serviços acompanham toda a jornada: do diagnóstico e desenho da solução até a implantação, evolução e sustentação. Trabalhamos com escopo claro, governança e acompanhamento contínuo para que tecnologia gere resultado real.',
      viewServices: 'Conheça nossos serviços',
    },
    whyStratumtec: {
      title: 'Por que a Stratumtec',
      differentiators: [
        { title: 'Tecnologia aplicada ao contexto do negócio', description: 'Não entregamos soluções genéricas. Cada projeto parte da realidade operacional, dos sistemas existentes e dos objetivos da empresa.' },
        { title: 'Soluções modulares que evoluem com a operação', description: 'Começamos pelo essencial e expandimos conforme a maturidade e as prioridades do negócio, sem rupturas ou desperdícios.' },
        { title: 'Execução com previsibilidade e controle', description: 'Projetos estruturados para entender escopo, tempo e impacto desde o início, reduzindo riscos e surpresas.' },
        { title: 'Integração entre estratégia, tecnologia e operação', description: 'Atuamos do desenho à operação, garantindo que soluções não fiquem apenas no papel e gerem resultado prático.' },
      ],
    },
    finalCta: {
      title: 'Pronto para transformar custo operacional em receita?',
      description: 'Se sua empresa enfrenta dificuldades para integrar sistemas, reter clientes ou rentabilizar melhor sua operação, isso impacta diretamente custos, produtividade e crescimento de receita. Nosso time pode ajudar a estruturar soluções alinhadas à sua realidade.',
      cta: 'Entrar em contato',
    },
  },
  en: {
    hero: {
      title: 'How to monetize your business with technology?',
      subtitle: 'We help companies improve the customer journey, retain more clients, and expand results with technology solutions applied to your operational reality.',
      primaryCta: 'Talk to an expert',
      secondaryCta: 'Explore our solutions',
    },
    intro: {
      title: 'Do you know where your company loses customers, revenue, or efficiency?',
      description: 'We support companies in improving the customer journey, retaining clients, and monetizing the business using technology practically applied to each operation\'s reality. We work from solution design to implementation and ongoing support, focused on concrete results and predictability.',
    },
    solutionsOverview: {
      title: 'What is your need?',
      viewAll: 'View all solutions',
    },
    platformsPreview: {
      title: 'Platforms built to scale your operation',
      viewProducts: 'Explore our products',
    },
    servicesPreview: {
      title: 'Technology that goes beyond paper and transforms operations',
      description: 'Our services cover the entire journey: from diagnosis and solution design to implementation, evolution, and ongoing support. We work with clear scope, governance, and continuous monitoring so technology delivers real results.',
      viewServices: 'Explore our services',
    },
    whyStratumtec: {
      title: 'Why Stratumtec',
      differentiators: [
        { title: 'Technology applied to business context', description: 'We don\'t deliver generic solutions. Every project starts from operational reality, existing systems, and company objectives.' },
        { title: 'Modular solutions that evolve with operations', description: 'We start with the essentials and expand according to business maturity and priorities, without disruptions or waste.' },
        { title: 'Execution with predictability and control', description: 'Structured projects to understand scope, timeline, and impact from the start, reducing risks and surprises.' },
        { title: 'Integration between strategy, technology, and operations', description: 'We work from design to operation, ensuring solutions don\'t stay on paper and generate practical results.' },
      ],
    },
    finalCta: {
      title: 'Ready to turn operational cost into revenue?',
      description: 'If your company struggles to integrate systems, retain clients, or better monetize your operation, this directly impacts costs, productivity, and revenue growth. Our team can help structure solutions aligned with your reality.',
      cta: 'Get in touch',
    },
  },
  es: {
    hero: {
      title: '¿Cómo rentabilizar su negocio con tecnología?',
      subtitle: 'Ayudamos a empresas a mejorar el recorrido del cliente, retener más clientes y expandir resultados con soluciones de tecnología aplicadas a su realidad operacional.',
      primaryCta: 'Hable con un especialista',
      secondaryCta: 'Conozca nuestras soluciones',
    },
    intro: {
      title: '¿Sabe dónde su empresa pierde clientes, ingresos o eficiencia?',
      description: 'Apoyamos empresas en la mejora del recorrido del cliente, la retención y la rentabilización del negocio, usando tecnología de forma práctica y aplicada a la realidad de cada operación. Actuamos desde el diseño de la solución hasta la implantación y sustentación.',
    },
    solutionsOverview: {
      title: '¿Cuál es su necesidad?',
      viewAll: 'Ver todas las soluciones',
    },
    platformsPreview: {
      title: 'Plataformas desarrolladas para escalar su operación',
      viewProducts: 'Conozca nuestros productos',
    },
    servicesPreview: {
      title: 'Tecnología que sale del papel y transforma la operación',
      description: 'Nuestros servicios acompañan toda la jornada: del diagnóstico y diseño de la solución hasta la implantación, evolución y sustentación. Trabajamos con alcance claro, gobernanza y acompañamiento continuo.',
      viewServices: 'Conozca nuestros servicios',
    },
    whyStratumtec: {
      title: 'Por qué Stratumtec',
      differentiators: [
        { title: 'Tecnología aplicada al contexto del negocio', description: 'No entregamos soluciones genéricas. Cada proyecto parte de la realidad operacional y los objetivos de la empresa.' },
        { title: 'Soluciones modulares que evolucionan con la operación', description: 'Comenzamos por lo esencial y expandimos según la madurez y prioridades del negocio.' },
        { title: 'Ejecución con previsibilidad y control', description: 'Proyectos estructurados para entender alcance, tiempo e impacto desde el inicio.' },
        { title: 'Integración entre estrategia, tecnología y operación', description: 'Actuamos del diseño a la operación, garantizando que las soluciones generen resultado práctico.' },
      ],
    },
    finalCta: {
      title: '¿Listo para transformar costo operacional en ingresos?',
      description: 'Si su empresa enfrenta dificultades para integrar sistemas, retener clientes o rentabilizar mejor su operación, nuestro equipo puede ayudar a estructurar soluciones alineadas a su realidad.',
      cta: 'Entrar en contacto',
    },
  },
};
