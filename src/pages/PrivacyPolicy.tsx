import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";

const privacyContent = {
  en: {
    title: "Privacy Policy",
    subtitle: "StratumTec",
    lastUpdated: "Last updated: June 2025",
    sections: [
      {
        title: "1. Introduction",
        content: "StratumTec values the privacy of its users and is committed to protecting personal information collected through our applications and services. This Privacy Policy describes what data we collect, how we use it, and what your rights are. By using our services, you agree to the terms described in this document."
      },
      {
        title: "2. Data We Collect",
        content: "We may collect the following personal information:",
        list: [
          "Identification data: full name and email address, provided at the time of registration.",
          "Location data: approximate or precise device location, when you grant permission, for app personalization and feature purposes.",
          "Usage data: information about how you interact with the application, such as features accessed, frequency of use, and navigation preferences."
        ],
        afterList: "We do not collect sensitive data such as identity documents, banking information, health data, or data from minors."
      },
      {
        title: "3. How We Use Your Data",
        content: "The collected data is used exclusively for:",
        list: [
          "Creating and managing your user account;",
          "Providing, personalizing, and improving application features;",
          "Sending service-related communications (updates, security alerts);",
          "Analyzing usage behavior to enhance user experience;",
          "Complying with applicable legal obligations."
        ]
      },
      {
        title: "4. Data Sharing",
        content: "StratumTec does not sell, rent, or trade your personal data with third parties. Data may be shared only with internal analytics and operational tools (such as analytics platforms), strictly for the purpose of operating and improving our services. All tool providers with whom we may share data are subject to confidentiality agreements and are prohibited from using your data for any other purpose."
      },
      {
        title: "5. Data Retention",
        content: "Your data is retained while your account is active or for as long as necessary to fulfill the purposes described in this policy. After account termination, data will be deleted or anonymized within 90 days, unless otherwise required by law."
      },
      {
        title: "6. Your Rights",
        content: "You have the right, at any time, to:",
        list: [
          "Access: access the data we hold about you;",
          "Correction: correct incorrect or outdated information;",
          "Deletion: request deletion of your personal data;",
          "Revocation: revoke consent for location collection or other optional data;",
          "Portability: request portability of your data in a structured format."
        ],
        afterList: "To exercise any of these rights, please contact us at the email address listed in the contact section."
      },
      {
        title: "7. Data Security",
        content: "We adopt appropriate technical and organizational measures to protect your data against unauthorized access, loss, alteration, or improper disclosure. Despite our efforts, no system is 100% secure. In the event of a security incident affecting your data, you will be notified as required by applicable law."
      },
      {
        title: "8. Minors",
        content: "Our services are not directed at children under 13 years of age. We do not intentionally collect data from children. If we become aware that data from a minor has been collected without parental or guardian consent, we will proceed with immediate deletion."
      },
      {
        title: "9. Changes to This Policy",
        content: "We may update this Privacy Policy periodically. When significant changes are made, we will notify users by email or through an in-app notice. We recommend that you review this page regularly."
      },
      {
        title: "10. Contact",
        content: "For questions, requests, or to exercise your rights related to this Privacy Policy, please contact us:",
        afterList: "StratumTec\nEmail: privacy@stratumtec.com.br"
      }
    ],
    copyright: "© 2025 StratumTec. All rights reserved."
  },
  pt: {
    title: "Política de Privacidade",
    subtitle: "StratumTec",
    lastUpdated: "Última atualização: junho de 2025",
    sections: [
      {
        title: "1. Introdução",
        content: "A StratumTec valoriza a privacidade dos seus usuários e está comprometida em proteger as informações pessoais coletadas por meio dos nossos aplicativos e serviços. Esta Política de Privacidade descreve quais dados coletamos, como os utilizamos e quais são os seus direitos. Ao utilizar nossos serviços, você concorda com os termos descritos neste documento."
      },
      {
        title: "2. Dados que Coletamos",
        content: "Podemos coletar as seguintes informações pessoais:",
        list: [
          "Dados de identificação: nome completo e endereço de e-mail, fornecidos no momento do cadastro.",
          "Dados de localização: localização aproximada ou precisa do dispositivo, quando você concede permissão, para fins de personalização e funcionalidades do app.",
          "Dados de uso: informações sobre como você interage com o aplicativo, como funcionalidades acessadas, frequência de uso e preferências de navegação."
        ],
        afterList: "Não coletamos dados sensíveis como documentos de identidade, informações bancárias, dados de saúde ou dados de menores de idade."
      },
      {
        title: "3. Como Utilizamos os Dados",
        content: "Os dados coletados são utilizados exclusivamente para:",
        list: [
          "Criar e gerenciar sua conta de usuário;",
          "Fornecer, personalizar e melhorar os recursos do aplicativo;",
          "Enviar comunicações relacionadas ao serviço (atualizações, alertas de segurança);",
          "Analisar o comportamento de uso para aprimorar a experiência do usuário;",
          "Cumprir obrigações legais aplicáveis."
        ]
      },
      {
        title: "4. Compartilhamento de Dados",
        content: "A StratumTec não vende, aluga ou comercializa seus dados pessoais com terceiros. Os dados podem ser compartilhados apenas com ferramentas internas de análise e operação (como plataformas de analytics), estritamente para fins de funcionamento e melhoria dos nossos serviços. Todos os fornecedores de ferramentas com quem eventualmente compartilhamos dados estão sujeitos a acordos de confidencialidade e são proibidos de utilizar seus dados para qualquer outra finalidade."
      },
      {
        title: "5. Retenção de Dados",
        content: "Seus dados são mantidos enquanto sua conta estiver ativa ou pelo tempo necessário para cumprir as finalidades descritas nesta política. Após o encerramento da conta, os dados serão excluídos ou anonimizados em até 90 dias, salvo obrigação legal em contrário."
      },
      {
        title: "6. Seus Direitos",
        content: "Você tem o direito de, a qualquer momento:",
        list: [
          "Acesso: acessar os dados que temos sobre você;",
          "Correção: corrigir informações incorretas ou desatualizadas;",
          "Exclusão: solicitar a exclusão dos seus dados pessoais;",
          "Revogação: revogar o consentimento para coleta de localização ou outros dados opcionais;",
          "Portabilidade: solicitar a portabilidade dos seus dados em formato estruturado."
        ],
        afterList: "Para exercer qualquer um desses direitos, entre em contato conosco pelo e-mail indicado na seção de contato."
      },
      {
        title: "7. Segurança dos Dados",
        content: "Adotamos medidas técnicas e organizacionais adequadas para proteger seus dados contra acesso não autorizado, perda, alteração ou divulgação indevida. Apesar dos nossos esforços, nenhum sistema é 100% seguro. Em caso de incidente de segurança que afete seus dados, você será notificado conforme exigido pela legislação aplicável."
      },
      {
        title: "8. Menores de Idade",
        content: "Nossos serviços não são direcionados a menores de 13 anos. Não coletamos intencionalmente dados de crianças. Se tomarmos conhecimento de que dados de um menor foram coletados sem o consentimento dos pais ou responsáveis, procederemos com a exclusão imediata."
      },
      {
        title: "9. Alterações nesta Política",
        content: "Podemos atualizar esta Política de Privacidade periodicamente. Quando houver alterações relevantes, notificaremos os usuários por e-mail ou por meio de aviso no aplicativo. Recomendamos que você revise esta página regularmente."
      },
      {
        title: "10. Contato",
        content: "Para dúvidas, solicitações ou exercício dos seus direitos relacionados a esta Política de Privacidade, entre em contato:",
        afterList: "StratumTec\nE-mail: privacidade@stratumtec.com.br"
      }
    ],
    copyright: "© 2025 StratumTec. Todos os direitos reservados."
  },
  es: {
    title: "Política de Privacidad",
    subtitle: "StratumTec",
    lastUpdated: "Última actualización: junio de 2025",
    sections: [
      {
        title: "1. Introducción",
        content: "StratumTec valora la privacidad de sus usuarios y está comprometida con la protección de la información personal recopilada a través de nuestras aplicaciones y servicios. Esta Política de Privacidad describe qué datos recopilamos, cómo los utilizamos y cuáles son sus derechos. Al utilizar nuestros servicios, usted acepta los términos descritos en este documento."
      },
      {
        title: "2. Datos que Recopilamos",
        content: "Podemos recopilar la siguiente información personal:",
        list: [
          "Datos de identificación: nombre completo y dirección de correo electrónico, proporcionados en el momento del registro.",
          "Datos de ubicación: ubicación aproximada o precisa del dispositivo, cuando usted otorga permiso, con fines de personalización y funcionalidades de la aplicación.",
          "Datos de uso: información sobre cómo interactúa con la aplicación, como las funciones utilizadas, la frecuencia de uso y las preferencias de navegación."
        ],
        afterList: "No recopilamos datos sensibles como documentos de identidad, información bancaria, datos de salud ni datos de menores de edad."
      },
      {
        title: "3. Cómo Utilizamos los Datos",
        content: "Los datos recopilados se utilizan exclusivamente para:",
        list: [
          "Crear y gestionar su cuenta de usuario;",
          "Proporcionar, personalizar y mejorar las funciones de la aplicación;",
          "Enviar comunicaciones relacionadas con el servicio (actualizaciones, alertas de seguridad);",
          "Analizar el comportamiento de uso para mejorar la experiencia del usuario;",
          "Cumplir con las obligaciones legales aplicables."
        ]
      },
      {
        title: "4. Compartición de Datos",
        content: "StratumTec no vende, alquila ni comercializa sus datos personales con terceros. Los datos pueden compartirse únicamente con herramientas internas de análisis y operación (como plataformas de analytics), estrictamente con fines de funcionamiento y mejora de nuestros servicios. Todos los proveedores de herramientas con quienes eventualmente compartimos datos están sujetos a acuerdos de confidencialidad y tienen prohibido utilizar sus datos para cualquier otro fin."
      },
      {
        title: "5. Retención de Datos",
        content: "Sus datos se conservan mientras su cuenta esté activa o durante el tiempo necesario para cumplir con los fines descritos en esta política. Tras la cancelación de la cuenta, los datos serán eliminados o anonimizados en un plazo de 90 días, salvo obligación legal en contrario."
      },
      {
        title: "6. Sus Derechos",
        content: "Usted tiene derecho, en cualquier momento, a:",
        list: [
          "Acceso: acceder a los datos que tenemos sobre usted;",
          "Corrección: corregir información incorrecta o desactualizada;",
          "Eliminación: solicitar la eliminación de sus datos personales;",
          "Revocación: revocar el consentimiento para la recopilación de ubicación u otros datos opcionales;",
          "Portabilidad: solicitar la portabilidad de sus datos en formato estructurado."
        ],
        afterList: "Para ejercer cualquiera de estos derechos, comuníquese con nosotros a través del correo electrónico indicado en la sección de contacto."
      },
      {
        title: "7. Seguridad de los Datos",
        content: "Adoptamos medidas técnicas y organizativas adecuadas para proteger sus datos contra el acceso no autorizado, la pérdida, la alteración o la divulgación indebida. A pesar de nuestros esfuerzos, ningún sistema es 100% seguro. En caso de un incidente de seguridad que afecte sus datos, será notificado según lo exija la legislación aplicable."
      },
      {
        title: "8. Menores de Edad",
        content: "Nuestros servicios no están dirigidos a menores de 13 años. No recopilamos intencionalmente datos de niños. Si tomamos conocimiento de que se han recopilado datos de un menor sin el consentimiento de los padres o tutores, procederemos a su eliminación inmediata."
      },
      {
        title: "9. Cambios en esta Política",
        content: "Podemos actualizar esta Política de Privacidad periódicamente. Cuando se realicen cambios significativos, notificaremos a los usuarios por correo electrónico o mediante un aviso en la aplicación. Le recomendamos que revise esta página regularmente."
      },
      {
        title: "10. Contacto",
        content: "Para consultas, solicitudes o para ejercer sus derechos relacionados con esta Política de Privacidad, comuníquese con nosotros:",
        afterList: "StratumTec\nCorreo electrónico: privacidad@stratumtec.com.br"
      }
    ],
    copyright: "© 2025 StratumTec. Todos los derechos reservados."
  }
};

const PrivacyPolicy = () => {
  const { language } = useLanguage();
  const content = privacyContent[language];

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
              <p className="text-muted-foreground leading-relaxed">{section.content}</p>
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

export default PrivacyPolicy;
