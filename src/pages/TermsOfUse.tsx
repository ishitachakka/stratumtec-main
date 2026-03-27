import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

const termsContent = {
  en: {
    title: "Terms of Use",
    subtitle: "StratumTec",
    lastUpdated: "Last updated: June 2025",
    sections: [
      {
        title: "Welcome to the StratumTec website and services.",
        content: "These Terms of Use (\"Terms\") govern your access to and use of the StratumTec website, products, software, and services.\n\nBy accessing or using this website or any StratumTec services, you agree to comply with these Terms. If you do not agree with these Terms, please do not use our website or services."
      },
      {
        title: "About StratumTec",
        content: "StratumTec provides technology products and services including but not limited to:",
        list: [
          "Artificial Intelligence platforms including BlueMesh",
          "Contact center technologies including StratumHub",
          "Human resource management applications including HRMNest",
          "Integration and automation solutions",
          "Software development and technology consulting services",
          "APIs and software tools"
        ],
        afterList: "The website may also contain information regarding our products, services, partners, and solutions."
      },
      {
        title: "Use of the Website",
        content: "You agree to use the website and services only for lawful purposes.\n\nYou agree not to:",
        list: [
          "attempt to gain unauthorized access to systems",
          "interfere with website functionality",
          "upload malicious software or viruses",
          "attempt to reverse engineer any software",
          "copy or distribute website content without permission",
          "use automated systems to scrape or extract data."
        ],
        afterList: "StratumTec reserves the right to suspend or terminate access for any violation of these rules."
      },
      {
        title: "Intellectual Property",
        content: "All content on this website is the property of StratumTec or its licensors, including:",
        list: [
          "software",
          "product designs",
          "AI models",
          "trademarks",
          "logos",
          "text and graphics",
          "documentation."
        ],
        afterList: "Users may not reproduce, distribute, modify, or commercially exploit any content without written permission."
      },
      {
        title: "AI and Software Usage",
        content: "StratumTec may provide access to AI-powered services including machine learning models and automation tools.\n\nUsers agree:",
        list: [
          "not to misuse AI tools for illegal or harmful purposes",
          "not to attempt to extract training data from AI systems",
          "not to use the system for generating malicious or harmful content",
          "not to replicate or reverse engineer the AI platform."
        ],
        afterList: "StratumTec reserves the right to suspend access to any user violating acceptable AI usage practices."
      },
      {
        title: "Accounts and Security",
        content: "Certain services may require account registration.\n\nYou agree to:",
        list: [
          "provide accurate information",
          "maintain confidentiality of your login credentials",
          "notify StratumTec immediately of unauthorized access."
        ],
        afterList: "You are responsible for all activities under your account."
      },
      {
        title: "Payments and Subscription Services",
        content: "Some StratumTec services may require payment or subscription.\n\nPayment terms may include:",
        list: [
          "subscription fees",
          "implementation fees",
          "consulting fees",
          "licensing fees."
        ],
        afterList: "All pricing will be specified in applicable service agreements.\n\nFailure to pay applicable fees may result in suspension or termination of services."
      },
      {
        title: "Third-Party Services",
        content: "StratumTec services may integrate with third-party platforms including but not limited to:",
        list: [
          "cloud service providers",
          "messaging platforms",
          "CRM systems",
          "communication APIs."
        ]
      },
      {
        title: "Disclaimer of Warranties",
        content: "All services and content are provided \"as is\" and \"as available.\"\n\nStratumTec does not guarantee that:",
        list: [
          "services will be uninterrupted",
          "services will be error-free",
          "results from AI systems will be accurate or complete."
        ],
        afterList: "To the fullest extent permitted by law, StratumTec disclaims all warranties including merchantability, fitness for a particular purpose, and non-infringement."
      },
      {
        title: "Limitation of Liability",
        content: "To the maximum extent permitted by law, StratumTec shall not be liable for:",
        list: [
          "indirect damages",
          "incidental damages",
          "loss of profits",
          "loss of data",
          "business interruption."
        ],
        afterList: "Total liability of StratumTec for any claim shall not exceed the amount paid by the user for services during the preceding 12 months."
      },
      {
        title: "Indemnification",
        content: "You agree to defend and indemnify StratumTec against any claims, damages, or legal costs resulting from:",
        list: [
          "misuse of services",
          "violation of these Terms",
          "violation of applicable laws",
          "infringement of third-party rights."
        ]
      },
      {
        title: "Termination",
        content: "StratumTec may suspend or terminate access to services if:",
        list: [
          "these Terms are violated",
          "payment obligations are not met",
          "activities pose a security or legal risk."
        ],
        afterList: "Users may discontinue use of services at any time."
      },
      {
        title: "Privacy",
        content: "Use of the website is also governed by the StratumTec Privacy Policy."
      },
      {
        title: "Governing Law",
        content: "These terms are governed by the laws of the State of Florida, United States, without regard to conflict of law principles. Any disputes arising from these Terms shall be resolved in the courts located in Florida."
      },
      {
        title: "Changes to Terms",
        content: "StratumTec reserves the right to update these Terms at any time. Updated versions will be posted on this page with the revised date.\n\nContinued use of the website after changes constitutes acceptance of the updated Terms."
      },
      {
        title: "Contact Information",
        content: "StratumTec – info@stratumtec.com – www.stratumtec.com"
      }
    ],
    copyright: "© 2025 StratumTec. All rights reserved."
  },
  pt: {
    title: "Termos de Uso",
    subtitle: "StratumTec",
    lastUpdated: "Última atualização: junho de 2025",
    sections: [
      {
        title: "Bem-vindo ao site e aos serviços da StratumTec.",
        content: "Estes Termos de Uso (\"Termos\") regem seu acesso e uso do site, produtos, software e serviços da StratumTec. Ao acessar ou usar este site ou qualquer serviço da StratumTec, você concorda em cumprir estes Termos. Se você não concordar com estes Termos, por favor, não use nosso site ou serviços."
      },
      {
        title: "Sobre a StratumTec",
        content: "A StratumTec fornece produtos e serviços de tecnologia, incluindo, entre outros:",
        list: [
          "Plataformas de Inteligência Artificial, como o BlueMesh",
          "Tecnologias para centrais de atendimento, como o StratumHub",
          "Aplicativos de gestão de recursos humanos, como o HRMNest",
          "Soluções de integração e automação",
          "Desenvolvimento de software e serviços de consultoria em tecnologia",
          "APIs e ferramentas de software"
        ],
        afterList: "O site também pode conter informações sobre nossos produtos, serviços, parceiros e soluções."
      },
      {
        title: "Utilização do Website",
        content: "Você concorda em usar o site e os serviços apenas para fins lícitos.\n\nVocê concorda em não:",
        list: [
          "tentar obter acesso não autorizado aos sistemas",
          "interferir na funcionalidade do site",
          "fazer upload de software malicioso ou vírus",
          "tentar fazer engenharia reversa de qualquer software",
          "copiar ou distribuir o conteúdo do site sem permissão",
          "usar sistemas automatizados para coletar ou extrair dados."
        ],
        afterList: "A StratumTec reserva-se o direito de suspender ou encerrar o acesso em caso de violação destas regras."
      },
      {
        title: "Propriedade Intelectual",
        content: "Todo o conteúdo deste site é propriedade da StratumTec ou de seus licenciadores, incluindo:",
        list: [
          "software",
          "designs de produtos",
          "modelos de IA",
          "marcas registradas",
          "logotipos",
          "textos e gráficos",
          "documentação."
        ],
        afterList: "Os usuários não podem reproduzir, distribuir, modificar ou explorar comercialmente qualquer conteúdo sem autorização por escrito.\n\nTodas as marcas registradas, incluindo StratumTec, BlueMesh, StratumHub e HRMNest, são propriedade intelectual protegida."
      },
      {
        title: "IA e Uso de Software",
        content: "A StratumTec pode fornecer acesso a serviços com inteligência artificial, incluindo modelos de aprendizado de máquina e ferramentas de automação.\n\nOs usuários concordam em:",
        list: [
          "não usar indevidamente as ferramentas de IA para fins ilegais ou prejudiciais",
          "não tentar extrair dados de treinamento de sistemas de IA",
          "não usar o sistema para gerar conteúdo malicioso ou prejudicial",
          "não replicar ou realizar engenharia reversa da plataforma de IA."
        ],
        afterList: "A StratumTec reserva-se o direito de suspender o acesso de qualquer usuário que viole as práticas aceitáveis de uso de IA."
      },
      {
        title: "Contas e Segurança",
        content: "Alguns serviços podem exigir cadastro de conta.\n\nVocê concorda em:",
        list: [
          "fornecer informações precisas",
          "manter a confidencialidade de suas credenciais de login",
          "notificar a StratumTec imediatamente em caso de acesso não autorizado."
        ],
        afterList: "Você é responsável por todas as atividades realizadas em sua conta."
      },
      {
        title: "Serviços de Pagamento e Assinatura",
        content: "Alguns serviços da StratumTec podem exigir pagamento ou assinatura.\n\nAs condições de pagamento podem incluir:",
        list: [
          "taxas de assinatura",
          "taxas de implementação",
          "taxas de consultoria",
          "taxas de licenciamento."
        ],
        afterList: "Todos os preços serão especificados nos contratos de serviço aplicáveis.\n\nO não pagamento das taxas aplicáveis pode resultar na suspensão ou rescisão dos serviços."
      },
      {
        title: "Serviços de Terceiros",
        content: "Os serviços da StratumTec podem ser integrados a plataformas de terceiros, incluindo, entre outras:",
        list: [
          "provedores de serviços em nuvem",
          "plataformas de mensagens",
          "sistemas de CRM",
          "APIs de comunicação."
        ],
        afterList: "A StratumTec não se responsabiliza pelo desempenho ou pelas políticas de serviços de terceiros.\n\nO uso de serviços de terceiros está sujeito aos seus próprios termos e políticas."
      },
      {
        title: "Isenção de Garantias",
        content: "Todos os serviços e conteúdos são fornecidos \"tal como estão\" e \"conforme a disponibilidade\".\n\nA StratumTec não garante que:",
        list: [
          "os serviços serão ininterruptos",
          "os serviços estarão isentos de erros",
          "os resultados dos sistemas de IA serão precisos ou completos."
        ],
        afterList: "Na máxima extensão permitida por lei, a StratumTec se exime de todas as garantias, incluindo comercialização, adequação a uma finalidade específica e não violação de direitos."
      },
      {
        title: "Limitação de Responsabilidade",
        content: "Na máxima extensão permitida por lei, a StratumTec não será responsável por:",
        list: [
          "danos indiretos",
          "danos incidentais",
          "lucros cessantes",
          "perda de dados",
          "interrupção de negócios."
        ],
        afterList: "A responsabilidade total da StratumTec por qualquer reclamação não excederá o valor pago pelo usuário pelos serviços prestados durante os 12 meses anteriores."
      },
      {
        title: "Indenização",
        content: "Você concorda em defender e indenizar a StratumTec contra quaisquer reivindicações, danos ou custos legais resultantes de:",
        list: [
          "uso indevido dos serviços",
          "violação destes Termos",
          "violação das leis aplicáveis",
          "violação de direitos de terceiros."
        ]
      },
      {
        title: "Rescisão",
        content: "A StratumTec poderá suspender ou encerrar o acesso aos serviços se:",
        list: [
          "estes Termos forem violados",
          "as obrigações de pagamento não forem cumpridas",
          "as atividades representarem um risco de segurança ou legal."
        ],
        afterList: "Os usuários podem interromper o uso dos serviços a qualquer momento."
      },
      {
        title: "Privacidade",
        content: "O uso do site também é regido pela Política de Privacidade da StratumTec."
      },
      {
        title: "Lei Aplicável",
        content: "Estes termos são regidos pelas leis do Estado de São Paulo, Brasil, sem levar em consideração os princípios de conflito de leis.\n\nQuaisquer disputas decorrentes destes Termos serão resolvidas nos tribunais localizados em São Paulo."
      },
      {
        title: "Alterações aos Termos",
        content: "A StratumTec reserva-se o direito de atualizar estes Termos a qualquer momento.\n\nAs versões atualizadas serão publicadas nesta página com a data da revisão.\n\nO uso continuado do site após as alterações constitui aceitação dos Termos atualizados."
      },
      {
        title: "Informações de Contato",
        content: "StratumTec – info@stratumtec.com – www.stratumtec.com"
      }
    ],
    copyright: "© 2025 StratumTec. Todos os direitos reservados."
  },
  es: {
    title: "Condiciones de Uso",
    subtitle: "StratumTec",
    lastUpdated: "Última actualización: junio de 2025",
    sections: [
      {
        title: "Bienvenido al sitio web y a los servicios de StratumTec.",
        content: "Estas Condiciones de Uso (\"Condiciones\") rigen su acceso y uso del sitio web, los productos, el software y los servicios de StratumTec.\n\nAl acceder o utilizar este sitio web o cualquier servicio de StratumTec, usted acepta cumplir con estas Condiciones. Si no está de acuerdo con estas Condiciones, le rogamos que no utilice nuestro sitio web ni nuestros servicios."
      },
      {
        title: "Acerca de StratumTec",
        content: "StratumTec ofrece productos y servicios tecnológicos, entre los que se incluyen:",
        list: [
          "Plataformas de inteligencia artificial, como BlueMesh",
          "Tecnologías para centros de contacto, como StratumHub",
          "Aplicaciones de gestión de recursos humanos, como HRMNest",
          "Soluciones de integración y automatización",
          "Servicios de desarrollo de software y consultoría tecnológica",
          "API y herramientas de software"
        ],
        afterList: "El sitio web también puede contener información sobre nuestros productos, servicios, socios y soluciones."
      },
      {
        title: "Uso del Sitio Web",
        content: "Usted acepta utilizar el sitio web y los servicios únicamente con fines lícitos.\n\nUsted se compromete a no:",
        list: [
          "intentar obtener acceso no autorizado a los sistemas",
          "interferir con el funcionamiento del sitio web",
          "cargar software malicioso o virus",
          "intentar realizar ingeniería inversa de ningún software",
          "copiar o distribuir el contenido del sitio web sin permiso",
          "utilizar sistemas automatizados para extraer datos."
        ],
        afterList: "StratumTec se reserva el derecho de suspender o cancelar el acceso en caso de incumplimiento de estas normas."
      },
      {
        title: "Propiedad Intelectual",
        content: "Todo el contenido de este sitio web es propiedad de StratumTec o de sus licenciantes, incluyendo:",
        list: [
          "software",
          "diseños de productos",
          "modelos de IA",
          "marcas registradas",
          "logotipos",
          "texto y gráficos",
          "documentación."
        ],
        afterList: "Los usuarios no pueden reproducir, distribuir, modificar ni explotar comercialmente ningún contenido sin autorización por escrito.\n\nTodas las marcas registradas, incluyendo StratumTec, BlueMesh, StratumHub y HRMNest, son propiedad intelectual protegida."
      },
      {
        title: "Uso de IA y Software",
        content: "StratumTec puede proporcionar acceso a servicios basados en IA, incluyendo modelos de aprendizaje automático y herramientas de automatización.\n\nLos usuarios se comprometen a:",
        list: [
          "no utilizar indebidamente las herramientas de IA con fines ilegales o perjudiciales",
          "no intentar extraer datos de entrenamiento de los sistemas de IA",
          "no utilizar el sistema para generar contenido malicioso o perjudicial",
          "no replicar ni aplicar ingeniería inversa a la plataforma de IA."
        ],
        afterList: "StratumTec se reserva el derecho de suspender el acceso a cualquier usuario que infrinja las prácticas aceptables de uso de la IA."
      },
      {
        title: "Cuentas y Seguridad",
        content: "Algunos servicios pueden requerir el registro de una cuenta.\n\nUsted acepta:",
        list: [
          "proporcionar información precisa",
          "mantener la confidencialidad de sus credenciales de acceso",
          "notificar a StratumTec de inmediato en caso de acceso no autorizado."
        ],
        afterList: "Usted es responsable de todas las actividades realizadas con su cuenta."
      },
      {
        title: "Servicios de Pago y Suscripción",
        content: "Algunos servicios de StratumTec pueden requerir pago o suscripción.\n\nLas condiciones de pago pueden incluir:",
        list: [
          "cuotas de suscripción",
          "cuotas de implementación",
          "cuotas de consultoría",
          "cuotas de licencia."
        ],
        afterList: "Todos los precios se especificarán en los contratos de servicio correspondientes.\n\nEl impago de las cuotas correspondientes puede conllevar la suspensión o la rescisión de los servicios."
      },
      {
        title: "Servicios de Terceros",
        content: "Los servicios de StratumTec pueden integrarse con plataformas de terceros, incluyendo, entre otras:",
        list: [
          "proveedores de servicios en la nube",
          "plataformas de mensajería",
          "sistemas CRM",
          "API de comunicación."
        ],
        afterList: "StratumTec no se responsabiliza del funcionamiento ni de las políticas de los servicios de terceros.\n\nEl uso de servicios de terceros está sujeto a sus propios términos y políticas."
      },
      {
        title: "Exclusión de Garantías",
        content: "Todos los servicios y contenidos se proporcionan «tal cual» y «según disponibilidad».\n\nStratumTec no garantiza que:",
        list: [
          "los servicios sean ininterrumpidos",
          "los servicios estén libres de errores",
          "los resultados de los sistemas de IA sean precisos o completos."
        ],
        afterList: "En la máxima medida permitida por la ley, StratumTec renuncia a todas las garantías, incluidas las de comerciabilidad, idoneidad para un fin particular y no infracción."
      },
      {
        title: "Limitación de Responsabilidad",
        content: "En la máxima medida permitida por la ley, StratumTec no será responsable de:",
        list: [
          "daños indirectos",
          "daños incidentales",
          "lucro cesante",
          "pérdida de datos",
          "interrupción de la actividad comercial."
        ],
        afterList: "La responsabilidad total de StratumTec por cualquier reclamación no excederá el importe pagado por el usuario por los servicios durante los 12 meses anteriores."
      },
      {
        title: "Indemnización",
        content: "Usted acepta defender e indemnizar a StratumTec frente a cualquier reclamación, daño o coste legal que resulte de:",
        list: [
          "el uso indebido de los servicios",
          "el incumplimiento de estos Términos",
          "el incumplimiento de las leyes aplicables",
          "la infracción de los derechos de terceros."
        ]
      },
      {
        title: "Terminación",
        content: "StratumTec podrá suspender o cancelar el acceso a los servicios si:",
        list: [
          "se incumplen estos Términos",
          "no se cumplen las obligaciones de pago",
          "las actividades representan un riesgo legal o de seguridad."
        ],
        afterList: "Los usuarios pueden dejar de usar los servicios en cualquier momento."
      },
      {
        title: "Privacidad",
        content: "El uso del sitio web también se rige por la Política de Privacidad de StratumTec."
      },
      {
        title: "Ley Aplicable",
        content: "Estos términos se rigen por las leyes del Estado de Florida, Estados Unidos, sin tener en cuenta los principios de conflicto de leyes.\n\nCualquier disputa que surja de estos Términos se resolverá en los tribunales ubicados en Florida."
      },
      {
        title: "Cambios en los Términos",
        content: "StratumTec se reserva el derecho de actualizar estos Términos en cualquier momento.\n\nLas versiones actualizadas se publicarán en esta página con la fecha de revisión.\n\nEl uso continuado del sitio web tras las modificaciones implica la aceptación de los Términos actualizados."
      },
      {
        title: "Información de Contacto",
        content: "StratumTec – info@stratumtec.com – www.stratumtec.com"
      }
    ],
    copyright: "© 2025 StratumTec. Todos los derechos reservados."
  }
};

const TermsOfUse = () => {
  const { language } = useLanguage();
  const content = termsContent[language];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto px-4 lg:px-6 py-24 max-w-4xl">
        <div className="mb-12 text-center">
          <h1 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-4">
            {content.title}
          </h1>
          <p className="text-lg text-muted-foreground">{content.subtitle}</p>
          <p className="text-sm text-muted-foreground mt-2">{content.lastUpdated}</p>
        </div>

        <div className="space-y-8">
          {content.sections.map((section, index) => (
            <section key={index} className="prose prose-lg max-w-none">
              <h2 className="font-heading text-2xl font-bold text-foreground mb-4">
                {section.title}
              </h2>
              <p className="text-muted-foreground leading-relaxed whitespace-pre-line">{section.content}</p>
              {section.list && (
                <ul className="mt-4 space-y-2">
                  {section.list.map((item, i) => (
                    <li key={i} className="text-muted-foreground leading-relaxed flex items-start">
                      <span className="text-primary mr-2 mt-1.5">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              )}
              {section.afterList && (
                <p className="text-muted-foreground leading-relaxed mt-4 whitespace-pre-line">
                  {section.afterList}
                </p>
              )}
            </section>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">{content.copyright}</p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default TermsOfUse;
