/** Tecnologías agrupadas (cuadrícula de Nosotros). Los nombres de los grupos van por idioma. */
import type { Lang } from '../i18n/config';

export const stack: Record<Lang, { group: string; items: string[] }[]> = {
  es: [
    { group: 'Frontend', items: ['React', 'TypeScript', 'Astro', 'Tailwind CSS', 'Blazor', 'GSAP', 'HTML & CSS'] },
    { group: 'Backend', items: ['Python', 'C#', '.NET', 'Node.js', 'APIs REST', 'Supabase'] },
    { group: 'Bases de datos', items: ['PostgreSQL', 'Oracle', 'SQL Server', 'Modelado de datos'] },
    { group: 'IA y automatización', items: ['Claude', 'Claude Code', 'n8n', 'Agentes de IA', 'Prompt engineering', 'Integración de LLMs'] },
    { group: 'E-commerce y pagos', items: ['Shopify', 'Pasarelas de pago', 'WhatsApp Business API', 'Analítica'] },
    { group: 'Diseño e infraestructura', items: ['Figma', 'Docker', 'Linux', 'Git', 'GitHub', 'Vercel'] },
  ],
  en: [
    { group: 'Frontend', items: ['React', 'TypeScript', 'Astro', 'Tailwind CSS', 'Blazor', 'GSAP', 'HTML & CSS'] },
    { group: 'Backend', items: ['Python', 'C#', '.NET', 'Node.js', 'REST APIs', 'Supabase'] },
    { group: 'Databases', items: ['PostgreSQL', 'Oracle', 'SQL Server', 'Data modeling'] },
    { group: 'AI & automation', items: ['Claude', 'Claude Code', 'n8n', 'AI agents', 'Prompt engineering', 'LLM integration'] },
    { group: 'E-commerce & payments', items: ['Shopify', 'Payment gateways', 'WhatsApp Business API', 'Analytics'] },
    { group: 'Design & infrastructure', items: ['Figma', 'Docker', 'Linux', 'Git', 'GitHub', 'Vercel'] },
  ],
};

/** Tecnologías que pasan en la cinta animada (nombres propios: no se traducen) */
export const marquee = ['React', 'Python', 'Astro', 'Claude', 'PostgreSQL', '.NET', 'Shopify', 'n8n', 'Supabase', 'TypeScript', 'Figma', 'Docker'];
