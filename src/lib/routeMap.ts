import { Language } from './translations';

// Each entry maps a "page key" to its localized routes
const routeTable: Record<string, Record<Language, string>> = {
  home:        { en: '/en',                 pt: '/pt',                es: '/es' },
  company:     { en: '/en/company',         pt: '/empresa',           es: '/es/empresa' },
  solutions:   { en: '/en/solutions',       pt: '/solucoes',          es: '/es/soluciones' },
  consulting:  { en: '/en/consulting',      pt: '/consultoria',       es: '/es/consultoria' },
  contact:     { en: '/en/contact',         pt: '/contato',           es: '/es/contacto' },
  blog:        { en: '/en/blog',            pt: '/blog',              es: '/es/blog' },
  privacy:     { en: '/en/privacy-policy',  pt: '/pt/privacidade',    es: '/es/privacidad' },
  terms:       { en: '/en/terms-of-use',    pt: '/pt/termos-de-uso',  es: '/es/condiciones-de-uso' },
  blogIaCx:    { en: '/en/blog/futuro-ia-cx', pt: '/blog/futuro-ia-cx', es: '/es/blog/futuro-ia-cx' },
  solDataIntegration: { en: '/en/solutions/data-integration', pt: '/solucoes/integracao-dados', es: '/es/soluciones/integracion-datos' },
  solLeadManagement: { en: '/en/solutions/lead-management', pt: '/solucoes/gestao-leads', es: '/es/soluciones/gestion-leads' },
  solServiceAutomation: { en: '/en/solutions/service-automation', pt: '/solucoes/automacao-atendimento', es: '/es/soluciones/automatizacion-atencion' },
  solAIAgents: { en: '/en/solutions/ai-agents', pt: '/solucoes/agentes-ia', es: '/es/soluciones/agentes-ia' },
  solOmnichannel: { en: '/en/solutions/omnichannel', pt: '/solucoes/omnichannel', es: '/es/soluciones/omnicanal' },
  solOperationalMonitoring: { en: '/en/solutions/operational-monitoring', pt: '/solucoes/monitoramento-operacional', es: '/es/soluciones/monitoreo-operacional' },
  solSpeechAnalytics: { en: '/en/solutions/speech-analytics', pt: '/solucoes/speech-analytics', es: '/es/soluciones/speech-analytics' },
  platStratumHub: { en: '/en/platforms/stratumhub', pt: '/plataformas/stratumhub', es: '/es/plataformas/stratumhub' },
  platBlueMesh: { en: '/en/platforms/bluemesh', pt: '/plataformas/bluemesh', es: '/es/plataformas/bluemesh' },
  svcSystemsIntegration: { en: '/en/services/systems-integration', pt: '/servicos/integracao-sistemas', es: '/es/servicios/integracion-sistemas' },
  svcOperationalAdaptation: { en: '/en/services/operational-adaptation', pt: '/servicos/adaptacao-operacional', es: '/es/servicios/adaptacion-operacional' },
  svcOngoingOperation: { en: '/en/services/ongoing-operation', pt: '/servicos/sustentacao-operacional', es: '/es/servicios/sustentacion-operacional' },
};

// Build a reverse lookup: path → page key
const pathToKey: Record<string, string> = {};
for (const [key, langs] of Object.entries(routeTable)) {
  for (const path of Object.values(langs)) {
    pathToKey[path] = key;
  }
}
// Root "/" maps to home
pathToKey['/'] = 'home';

/**
 * Given the current pathname and the desired language,
 * returns the equivalent localized route.
 * Falls back to the language homepage if no match is found.
 */
export function getLocalizedPath(currentPath: string, targetLang: Language): string {
  const key = pathToKey[currentPath];
  if (key && routeTable[key]) {
    return routeTable[key][targetLang];
  }
  // Fallback: language homepage
  return routeTable.home[targetLang];
}

/**
 * Detect language from pathname.
 */
export function getLanguageFromPath(pathname: string): Language {
  // Check exact matches first
  const key = pathToKey[pathname];
  if (key) {
    for (const [lang, path] of Object.entries(routeTable[key])) {
      if (path === pathname) return lang as Language;
    }
  }
  // Prefix-based detection for dynamic routes like /en/blog/:slug
  if (pathname.startsWith('/es/')) return 'es';
  if (pathname.startsWith('/pt/')) return 'pt';
  if (pathname.startsWith('/en/')) return 'en';
  // Legacy PT routes without prefix
  const ptRoutes = ['/empresa', '/solucoes', '/consultoria', '/contato', '/blog'];
  if (ptRoutes.some(r => pathname === r || pathname.startsWith(r + '/'))) return 'pt';
  return 'en';
}

export { routeTable };
