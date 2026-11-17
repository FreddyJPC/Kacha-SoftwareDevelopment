/**
 * Precios en cada idioma. PROVISIONAL: valores de referencia actualizados; ajústalos aquí
 * y cambian en la portada y en la página de precios.
 * El nombre del plan se envía al formulario de contacto como ?plan=<nombre>.
 */
import type { Lang } from '../i18n/config';

export interface Plan {
  name: string;
  tagline: string;
  /** Precio de partida */
  price: string;
  /** Rango típico de los proyectos de este plan */
  range: string;
  delivery: string;
  features: string[];
  popular?: boolean;
}

export const plans: Record<Lang, Plan[]> = {
  es: [
    {
      name: 'Presencia',
      tagline: 'Para lanzar o renovar tu presencia digital.',
      price: '$350',
      range: 'Proyectos típicos: $350 – $900',
      delivery: 'Entrega en 2 a 3 semanas',
      features: [
        'Landing page o sitio de hasta 5 secciones',
        'Diseño a medida en Figma',
        'Responsive y optimizado para SEO',
        'Formulario de contacto y botón de WhatsApp',
        'Dominio, hosting y analítica configurados',
        '30 días de garantía y ajustes',
      ],
    },
    {
      name: 'Negocio',
      tagline: 'Para vender, atender y crecer en línea.',
      price: '$1.200',
      range: 'Proyectos típicos: $1.200 – $3.500',
      delivery: 'Entrega en 4 a 6 semanas',
      popular: true,
      features: [
        'Sitio corporativo multipágina o tienda online',
        'Pasarela de pagos, catálogo e inventario',
        'Chatbot con IA para WhatsApp o tu web',
        'Blog o catálogo autoadministrable',
        'Integraciones: CRM, correo y analítica',
        '60 días de garantía y capacitación al equipo',
      ],
    },
    {
      name: 'A medida',
      tagline: 'Para ordenar la operación con software propio.',
      price: '$4.000',
      range: 'Según alcance: CRM, ERP y plataformas',
      delivery: 'Entregas por módulos, de 2 a 6 meses',
      features: [
        'Aplicaciones web, CRM y ERP a medida',
        'Levantamiento de procesos y arquitectura',
        'Roles, permisos, reportes y tableros',
        'Automatizaciones e integración de IA',
        'Migración de datos y sistemas legacy',
        '90 días de garantía y soporte prioritario',
      ],
    },
  ],
  en: [
    {
      name: 'Presence',
      tagline: 'To launch or refresh your online presence.',
      price: '$350',
      range: 'Typical projects: $350 – $900',
      delivery: 'Delivered in 2 to 3 weeks',
      features: [
        'Landing page or a site with up to 5 sections',
        'Custom design in Figma',
        'Responsive and SEO-optimized',
        'Contact form and WhatsApp button',
        'Domain, hosting and analytics set up',
        '30-day warranty and adjustments',
      ],
    },
    {
      name: 'Business',
      tagline: 'To sell, serve and grow online.',
      price: '$1,200',
      range: 'Typical projects: $1,200 – $3,500',
      delivery: 'Delivered in 4 to 6 weeks',
      popular: true,
      features: [
        'Multi-page corporate site or online store',
        'Payment gateway, catalog and inventory',
        'AI chatbot for WhatsApp or your website',
        'Self-managed blog or catalog',
        'Integrations: CRM, email and analytics',
        '60-day warranty and team training',
      ],
    },
    {
      name: 'Custom',
      tagline: 'To run your operation on your own software.',
      price: '$4,000',
      range: 'Scope-based: CRM, ERP and platforms',
      delivery: 'Delivered in modules, over 2 to 6 months',
      features: [
        'Custom web apps, CRM and ERP',
        'Process discovery and architecture',
        'Roles, permissions, reports and dashboards',
        'Automations and AI integration',
        'Data and legacy system migration',
        '90-day warranty and priority support',
      ],
    },
  ],
};

/** Servicios continuos (se cobran por mes) */
export const monthly: Record<Lang, { name: string; price: string; unit: string; text: string }[]> = {
  es: [
    { name: 'Mantenimiento y soporte', price: 'Desde $80', unit: '/mes', text: 'Actualizaciones, respaldos, monitoreo y soporte por WhatsApp.' },
    { name: 'Automatización e IA gestionada', price: 'Desde $150', unit: '/mes', text: 'Operación del chatbot o de los flujos, revisión de conversaciones y mejoras.' },
    { name: 'Evolución continua', price: 'Desde $300', unit: '/mes', text: 'Bolsa de horas para nuevas funciones y mejoras priorizadas contigo.' },
  ],
  en: [
    { name: 'Maintenance & support', price: 'From $80', unit: '/mo', text: 'Updates, backups, monitoring and support via WhatsApp.' },
    { name: 'Managed automation & AI', price: 'From $150', unit: '/mo', text: 'Running the chatbot or workflows, reviewing conversations and improving them.' },
    { name: 'Continuous evolution', price: 'From $300', unit: '/mo', text: 'A pool of hours for new features and improvements prioritized with you.' },
  ],
};

/** Qué mueve el precio de un proyecto */
export const priceFactors: Record<Lang, { title: string; text: string }[]> = {
  es: [
    { title: 'Alcance', text: 'Cuántas páginas, módulos o flujos necesita la primera versión.' },
    { title: 'Diseño', text: 'Si partimos de tu identidad actual o hay que crearla desde cero.' },
    { title: 'Integraciones', text: 'Pagos, facturación, CRM, WhatsApp u otros sistemas a conectar.' },
    { title: 'Contenido y datos', text: 'Si entregas textos, fotos y datos listos o los preparamos nosotros.' },
  ],
  en: [
    { title: 'Scope', text: 'How many pages, modules or workflows the first version needs.' },
    { title: 'Design', text: 'Whether we start from your current identity or create one from scratch.' },
    { title: 'Integrations', text: 'Payments, invoicing, CRM, WhatsApp or other systems to connect.' },
    { title: 'Content & data', text: 'Whether you provide copy, photos and data ready to go, or we prepare them.' },
  ],
};

/** Condiciones comerciales */
export const terms: Record<Lang, { title: string; text: string }[]> = {
  es: [
    { title: 'Cotización sin costo', text: 'La primera reunión y la propuesta no tienen costo ni compromiso.' },
    { title: 'Pago por etapas', text: '50 % para iniciar y 50 % a la entrega. En proyectos grandes, pagos por hito.' },
    { title: 'Todo por escrito', text: 'Alcance, plazos y entregables quedan en una propuesta firmada por ambas partes.' },
    { title: 'El proyecto es tuyo', text: 'Código, diseños, accesos y datos se entregan a tu nombre al finalizar.' },
  ],
  en: [
    { title: 'Free quote', text: 'The first meeting and the proposal come at no cost and with no commitment.' },
    { title: 'Staged payments', text: '50% to start and 50% on delivery. Larger projects are paid by milestone.' },
    { title: 'Everything in writing', text: 'Scope, timelines and deliverables go into a proposal signed by both parties.' },
    { title: 'The project is yours', text: 'Code, designs, access and data are handed over in your name at the end.' },
  ],
};

export const pricingNote: Record<Lang, string> = {
  es: 'Precios en dólares (USD), referenciales y sin IVA. Cada proyecto se cotiza según su alcance.',
  en: 'Prices in US dollars (USD), for reference only and excluding VAT. Every project is quoted based on its scope.',
};
