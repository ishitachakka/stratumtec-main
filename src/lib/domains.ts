import { Language } from './translations';

/**
 * Centralized domain configuration.
 *
 * Mapping of language → primary domain.
 * - English currently lives on stratumtec.com (shared with Portuguese for now).
 * - Portuguese currently lives on stratumtec.com (no dedicated PT domain yet).
 * - Spanish lives on its own domain stratumtec.com.co.
 *
 * To give Portuguese its own domain later, just point `pt` to the new host
 * and (optionally) remove `'pt'` from `LANGUAGES_ON_MAIN_DOMAIN`.
 */
export const DOMAIN_BY_LANGUAGE: Record<Language, string> = {
  en: 'stratumtec.com',
  pt: 'stratumtec.com', // shares main domain for now
  es: 'stratumtec.com.co',
};

/** Hostnames that serve the main (English + Portuguese) site. */
export const MAIN_DOMAIN_HOSTS = ['stratumtec.com', 'www.stratumtec.com'];

/** Hostnames that serve the Spanish site. */
export const SPANISH_DOMAIN_HOSTS = ['stratumtec.com.co', 'www.stratumtec.com.co'];

/** Languages selectable from the dropdown on the main domain. */
export const LANGUAGES_ON_MAIN_DOMAIN: Language[] = ['en', 'pt'];

/** Languages selectable from the dropdown on the Spanish domain. */
export const LANGUAGES_ON_SPANISH_DOMAIN: Language[] = ['es'];

export type SiteDomain = 'main' | 'spanish' | 'unknown';

/** Detect which logical site we're on based on hostname. */
export function getCurrentDomain(hostname: string = typeof window !== 'undefined' ? window.location.hostname : ''): SiteDomain {
  const h = hostname.toLowerCase();
  if (SPANISH_DOMAIN_HOSTS.includes(h)) return 'spanish';
  if (MAIN_DOMAIN_HOSTS.includes(h)) return 'main';
  return 'unknown'; // localhost, preview/staging URLs, etc.
}

/** Languages allowed in the dropdown on the current domain. */
export function getAvailableLanguages(hostname?: string): Language[] {
  const domain = getCurrentDomain(hostname);
  if (domain === 'spanish') return LANGUAGES_ON_SPANISH_DOMAIN;
  if (domain === 'main') return LANGUAGES_ON_MAIN_DOMAIN;
  // Unknown host (localhost / lovable preview): allow all for development/testing.
  return ['en', 'pt', 'es'];
}

/** Default language for the current domain. */
export function getDefaultLanguageForDomain(hostname?: string): Language {
  const domain = getCurrentDomain(hostname);
  if (domain === 'spanish') return 'es';
  return 'en';
}

/**
 * Build an absolute URL on the domain that owns the given language.
 * Returns null if the language belongs to the same domain we're already on
 * (caller should use client-side navigation in that case).
 */
export function buildCrossDomainUrl(targetLang: Language, path: string, hostname?: string): string | null {
  const currentDomain = getCurrentDomain(hostname);
  const targetHost = DOMAIN_BY_LANGUAGE[targetLang];

  // Determine if target language lives on the same logical site.
  const targetDomain: SiteDomain =
    SPANISH_DOMAIN_HOSTS.includes(targetHost) ? 'spanish'
    : MAIN_DOMAIN_HOSTS.includes(targetHost) ? 'main'
    : 'unknown';

  if (currentDomain === targetDomain && currentDomain !== 'unknown') {
    return null; // same site — use SPA navigation
  }

  // On unknown hosts (localhost / preview) keep navigation in-app for testing.
  if (currentDomain === 'unknown') return null;

  return `https://${targetHost}${path}`;
}