/** getStaticPaths compartidos por las rutas de cada idioma (servicios y proyectos). */
import { services } from '../data/services';
import type { Lang } from '../i18n/config';
import { getProjects } from './projects';

export function servicePaths(lang: Lang) {
  const list = services[lang];
  return list.map((service, i) => ({ params: { slug: service.slug }, props: { service, next: list[(i + 1) % list.length] } }));
}

export async function projectPaths(lang: Lang) {
  const list = await getProjects(lang);
  return list.map((project, i) => ({ params: { slug: project.slug }, props: { project, next: list[(i + 1) % list.length] } }));
}
