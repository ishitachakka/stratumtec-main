import { Language } from './translations';
import { solutionRoutes, solutionSlugs } from '@/data/solutions';
import { platformRoutes, platformSlugs } from '@/data/platforms';
import { serviceRoutes, serviceSlugs } from '@/data/services';

// Each entry maps a "page key" to its localized routes
const routeTable: Record<string, Record<Language, string>> = {
  home:        { en: '/en',                 pt: '/pt',                es: '/es' },
  company:     { en: '/en/company',         pt: '/pt/empresa',        es: '/es/empresa' },
  solutions:   { en: '/en/solutions',       pt: '/pt/solucoes',       es: '/es/soluciones' },
  platforms:   { en: '/en/platforms',       pt: '/pt/plataformas',    es: '/es/plataformas' },
  services:    { en: '/en/services',        pt: '/pt/servicos',       es: '/es/servicios' },
  contact:     { en: '/en/contact',         pt: '/pt/contato',        es: '/es/contacto' },
  blog:        { en: '/en/blog',            pt: '/pt/blog',           es: '/es/blog' },
  privacy:     { en: '/en/privacy-policy',  pt: '/pt/privacidade',    es: '/es/privacidad' },
  terms:       { en: '/en/terms-of-use',    pt: '/pt/termos-de-uso',  es: '/es/condiciones-de-uso' },
  // Individual solutions
  ...Object.fromEntries(solutionSlugs.map(s => [`solution-${s}`, solutionRoutes[s]])),
  // Individual platforms
  ...Object.fromEntries(platformSlugs.map(s => [`platform-${s}`, platformRoutes[s]])),
  // Individual services
  ...Object.fromEntries(serviceSlugs.map(s => [`service-${s}`, serviceRoutes[s]])),
};

// Build a reverse lookup: path → page key
const pathToKey: Record<string, string> = {};
for (const [key, langs] of Object.entries(routeTable)) {
  for (const path of Object.values(langs)) {
    pathToKey[path] = key;
  }
}
// Root "/" maps to home (defaults to English)
pathToKey['/'] = 'home';
// Legacy routes (without /pt prefix) — keep for backward compatibility
const legacyPtRoutes: Record<string, string> = {
  '/empresa': 'company',
  '/solucoes': 'solutions',
  '/consultoria': 'services', // old consulting maps to services now
  '/contato': 'contact',
  '/blog': 'blog',
};
for (const [path, key] of Object.entries(legacyPtRoutes)) {
  pathToKey[path] = key;
}

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
  const ptPrefixes = ['/empresa', '/solucoes', '/consultoria', '/contato', '/blog'];
  if (ptPrefixes.some(r => pathname === r || pathname.startsWith(r + '/'))) return 'pt';
  return 'en';
}

export { routeTable };
