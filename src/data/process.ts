/** Proceso de trabajo: las notas de colores. El color y el giro son compartidos; los textos van por idioma. */
import type { Lang } from '../i18n/config';

export interface Step {
  id: string;
  title: string;
  description: string;
  /** Cuándo ocurre */
  when: string;
  /** Color de la nota (tokens pastel en global.css) */
  color: string;
  rotate: number;
}

const look = [
  { color: 'var(--color-note-lime)', rotate: -3 },
  { color: 'var(--color-note-cream)', rotate: 2.5 },
  { color: 'var(--color-note-aqua)', rotate: -2 },
  { color: 'var(--color-note-rose)', rotate: 3 },
  { color: 'var(--color-note-peach)', rotate: -2.5 },
];

const text: Record<Lang, { title: string; description: string; when: string }[]> = {
  es: [
    { title: 'Contacto', when: 'Día 1', description: 'Nos cuentas tu idea por WhatsApp o el formulario. No hay proyecto demasiado pequeño: nos adaptamos a tu necesidad.' },
    { title: 'Propuesta', when: '2 a 3 días', description: 'Analizamos el proyecto a fondo y te entregamos alcance, plazos y una cotización clara, sin letra pequeña.' },
    { title: 'Diseño e inicio', when: 'Semana 1', description: 'Aprobada la propuesta, prototipamos en Figma y arrancamos el desarrollo en ciclos cortos.' },
    { title: 'Feedback', when: 'Cada semana', description: 'Tienes un enlace para ver el avance en tiempo real. Revisas, opinas y ajustamos cada semana.' },
    { title: 'Entrega', when: 'Lanzamiento', description: 'Publicamos, capacitamos a tu equipo y te acompañamos con garantía y soporte después del lanzamiento.' },
  ],
  en: [
    { title: 'Contact', when: 'Day 1', description: 'You tell us your idea via WhatsApp or the form. No project is too small: we adapt to what you need.' },
    { title: 'Proposal', when: '2 to 3 days', description: 'We study the project in depth and send you scope, timeline and a clear quote, with no fine print.' },
    { title: 'Design & kickoff', when: 'Week 1', description: 'Once the proposal is approved, we prototype in Figma and start building in short cycles.' },
    { title: 'Feedback', when: 'Every week', description: 'You get a link to follow progress in real time. You review, comment and we adjust every week.' },
    { title: 'Delivery', when: 'Launch', description: 'We publish, train your team and stay by your side with warranty and support after launch.' },
  ],
};

export const steps: Record<Lang, Step[]> = {
  es: text.es.map((t, i) => ({ id: String(i + 1).padStart(2, '0'), ...t, ...look[i] })),
  en: text.en.map((t, i) => ({ id: String(i + 1).padStart(2, '0'), ...t, ...look[i] })),
};
