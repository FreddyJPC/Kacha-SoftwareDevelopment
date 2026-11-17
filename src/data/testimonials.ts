/**
 * Testimonios. PROVISIONAL: son textos de ejemplo.
 * Reemplázalos por citas reales de tus clientes (con su permiso) antes de publicar.
 * Si dejas la lista vacía, la sección desaparece sola.
 */
import type { Lang } from '../i18n/config';

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
}

export const testimonials: Record<Lang, Testimonial[]> = {
  es: [
    {
      quote: 'Pasamos de copiar leads a mano a tenerlos clasificados y asignados en el CRM antes de terminar el café. El equipo comercial por fin trabaja sobre la misma información.',
      author: 'Gerencia comercial',
      role: 'Concesionaria de vehículos',
    },
    {
      quote: 'Se sentaron en el mostrador a ver cómo atendíamos antes de proponer nada. El sistema quedó tan a nuestra medida que el cierre de caja ahora es una consulta, no una tarea.',
      author: 'Administración',
      role: 'Óptica',
    },
    {
      quote: 'Cumplieron los plazos, explicaron todo sin tecnicismos y el sitio empezó a traernos cotizaciones desde la primera semana. Volveríamos a trabajar con ellos sin dudarlo.',
      author: 'Dirección',
      role: 'Empresa de construcción',
    },
  ],
  en: [
    {
      quote: 'We went from copying leads by hand to having them sorted and assigned in the CRM before finishing our coffee. The sales team finally works from the same information.',
      author: 'Sales management',
      role: 'Car dealership',
    },
    {
      quote: 'They sat at our counter to watch how we served customers before proposing anything. The system fits us so well that closing the till is now a query, not a chore.',
      author: 'Management',
      role: 'Optical store',
    },
    {
      quote: 'They met every deadline, explained everything without jargon and the site started bringing in quote requests from the very first week. We’d work with them again without hesitation.',
      author: 'Leadership',
      role: 'Construction company',
    },
  ],
};
