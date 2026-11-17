/**
 * Equivalente de la página actual en otro idioma (selector de idioma y etiquetas hreflang).
 * Los proyectos usan el mismo slug en ambos idiomas; los servicios tienen un slug traducido,
 * por eso se buscan por su `id`.
 */
import { services } from '../data/services';
import { localePath, parsePath, type Lang } from './config';

export function switchLangPath(pathname: string, to: Lang): string {
  const { lang: from, page, slug } = parsePath(pathname);
  if (!page) return localePath(to);
  if (page === 'services' && slug) {
    const id = services[from].find((s) => s.slug === slug)?.id;
    const target = services[to].find((s) => s.id === id);
    return target ? localePath(to, 'services', target.slug) : localePath(to, 'services');
  }
  return localePath(to, page, slug);
}
