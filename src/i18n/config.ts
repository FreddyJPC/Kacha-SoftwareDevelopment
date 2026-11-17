/**
 * Idiomas y rutas del sitio.
 * Español es el idioma principal y vive en la raíz (/servicios/); inglés vive bajo /en/ (/en/services/).
 * Para agregar un idioma: añádelo a `locales`, `localeMeta` y `routes`, y completa su diccionario en ui.ts,
 * sus listas en src/data, su carpeta en src/content/projects y sus archivos de ruta en src/pages.
 */
export const locales = ['es', 'en'] as const;
export type Lang = (typeof locales)[number];
export const defaultLang: Lang = 'es';

export const localeMeta: Record<Lang, { name: string; short: string; html: string; og: string }> = {
  es: { name: 'Español', short: 'ES', html: 'es', og: 'es_EC' },
  en: { name: 'English', short: 'EN', html: 'en', og: 'en_US' },
};

/** Páginas del sitio y su segmento de URL en cada idioma */
export type Page = 'home' | 'services' | 'projects' | 'pricing' | 'about' | 'contact' | 'privacy';
export const routes: Record<Lang, Record<Page, string>> = {
  es: { home: '', services: 'servicios', projects: 'proyectos', pricing: 'precios', about: 'nosotros', contact: 'contacto', privacy: 'privacidad' },
  en: { home: '', services: 'services', projects: 'projects', pricing: 'pricing', about: 'about', contact: 'contact', privacy: 'privacy' },
};

export const isLang = (value: unknown): value is Lang => locales.includes(value as Lang);

/** Idioma de la página actual, deducido de la URL (/en/... → inglés; el resto → español) */
export function getLang(astro: { url: URL }): Lang {
  const first = astro.url.pathname.split('/').filter(Boolean)[0];
  return isLang(first) && first !== defaultLang ? first : defaultLang;
}

/** URL de una página en un idioma: localePath('en', 'services', 'web-development') → /en/services/web-development/ */
export function localePath(lang: Lang, page: Page = 'home', slug?: string): string {
  const parts = [lang === defaultLang ? '' : lang, routes[lang][page], slug].filter(Boolean);
  return parts.length ? `/${parts.join('/')}/` : '/';
}

/** Enlace a una sección de la portada */
export const anchorPath = (lang: Lang, id: string) => `${localePath(lang)}#${id}`;

/** Separa una URL en idioma, página y slug */
export function parsePath(pathname: string): { lang: Lang; page: Page | null; slug?: string } {
  const parts = pathname.split('/').filter(Boolean);
  const lang = isLang(parts[0]) && parts[0] !== defaultLang ? parts.shift()! : defaultLang;
  if (!parts.length) return { lang: lang as Lang, page: 'home' };
  const page = (Object.keys(routes[lang as Lang]) as Page[]).find((p) => p !== 'home' && routes[lang as Lang][p] === parts[0]) ?? null;
  return { lang: lang as Lang, page, slug: parts[1] };
}
