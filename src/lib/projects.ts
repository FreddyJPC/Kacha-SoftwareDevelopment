/** Acceso a la colección de proyectos, filtrada por idioma y ordenada. */
import { getCollection, type CollectionEntry } from 'astro:content';
import type { Lang } from '../i18n/config';

export type Project = CollectionEntry<'projects'> & { slug: string };

/** Los archivos viven en src/content/projects/<idioma>/<slug>.md (mismo nombre en ambos idiomas) */
export async function getProjects(lang: Lang): Promise<Project[]> {
  const entries = await getCollection('projects', ({ id, data }) => id.startsWith(`${lang}/`) && !data.draft);
  return entries.map((entry) => ({ ...entry, slug: entry.id.slice(lang.length + 1) })).sort((a, b) => a.data.order - b.data.order);
}

/** Proyectos relacionados con un servicio (por su id) */
export async function getProjectsByService(lang: Lang, service: string): Promise<Project[]> {
  return (await getProjects(lang)).filter((p) => p.data.services.includes(service));
}

export const twoDigits = (n: number) => String(n).padStart(2, '0');
export const threeDigits = (n: number) => String(n).padStart(3, '0');

/** Convierte un texto en un valor apto para atributos (filtros) */
export const toKey = (text: string) =>
  text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
