/** Preguntas frecuentes generales (portada, precios y contacto). Una lista por idioma. */
import type { Lang } from '../i18n/config';

export const faq: Record<Lang, { q: string; a: string }[]> = {
  es: [
    {
      q: '¿Qué tipo de proyectos hacen?',
      a: 'Sitios web y landing pages, tiendas online, aplicaciones web como CRMs y ERPs, automatizaciones y chatbots con IA, y diseño de interfaces en Figma. Si tu proyecto ordena o hace crecer un negocio real, nos interesa.',
    },
    {
      q: '¿Cuánto cuesta un proyecto?',
      a: 'Depende del alcance. Una landing page parte desde $350, un sitio corporativo o tienda desde $1.200 y un sistema a medida desde $4.000. La cotización es gratuita y la recibes en 2 a 3 días con alcance y plazos por escrito.',
    },
    {
      q: '¿Cuánto tiempo toma?',
      a: 'Una landing page, de 2 a 3 semanas. Un sitio corporativo o una tienda, de 4 a 6 semanas. Los sistemas a medida se entregan por módulos durante 2 a 6 meses, y empiezas a usar las primeras partes mucho antes del final.',
    },
    {
      q: '¿Necesito conocimientos técnicos?',
      a: 'No. Solo necesitas una idea o una necesidad. Nosotros nos encargamos del levantamiento de requerimientos, el diseño y la planificación técnica, y te lo explicamos todo sin jerga.',
    },
    {
      q: '¿Qué pasa si no me gusta el diseño?',
      a: 'Por eso diseñamos antes de programar. Ves el prototipo en Figma, lo revisamos juntos por rondas y solo pasamos a desarrollo cuando el diseño te representa.',
    },
    {
      q: '¿Cómo son los pagos?',
      a: '50 % para iniciar y 50 % a la entrega. En proyectos grandes dividimos el pago por hitos, de modo que siempre pagas contra avances que puedes ver y probar.',
    },
    {
      q: '¿Usan inteligencia artificial?',
      a: 'Sí, a diario. La usamos para diseñar, programar y revisar más rápido, y la integramos en tus productos cuando aporta valor. Las decisiones de arquitectura, la revisión del código y la calidad final siguen siendo responsabilidad de personas.',
    },
    {
      q: '¿Ofrecen soporte después del lanzamiento?',
      a: 'Sí. Todos los proyectos incluyen un periodo de garantía sin costo y, si lo necesitas, planes mensuales de mantenimiento, mejoras y soporte por WhatsApp.',
    },
  ],
  en: [
    {
      q: 'What kind of projects do you take on?',
      a: 'Websites and landing pages, online stores, web applications such as CRMs and ERPs, AI automations and chatbots, and interface design in Figma. If your project brings order to a real business or helps it grow, we’re interested.',
    },
    {
      q: 'How much does a project cost?',
      a: 'It depends on the scope. A landing page starts at $350, a corporate site or store at $1,200 and a custom system at $4,000. The quote is free and you receive it within 2 to 3 days, with scope and timeline in writing.',
    },
    {
      q: 'How long does it take?',
      a: 'A landing page takes 2 to 3 weeks. A corporate site or a store, 4 to 6 weeks. Custom systems are delivered in modules over 2 to 6 months, and you start using the first parts well before the end.',
    },
    {
      q: 'Do I need technical knowledge?',
      a: 'No. All you need is an idea or a need. We handle requirements, design and technical planning, and we explain everything without jargon.',
    },
    {
      q: 'What if I don’t like the design?',
      a: 'That’s why we design before we build. You see the Figma prototype, we review it together in rounds and only move to development once the design truly represents you.',
    },
    {
      q: 'How do payments work?',
      a: '50% to start and 50% on delivery. On larger projects we split payment by milestones, so you always pay against progress you can see and test.',
    },
    {
      q: 'Do you use artificial intelligence?',
      a: 'Yes, every day. We use it to design, code and review faster, and we build it into your products when it adds value. Architecture decisions, code review and final quality remain the responsibility of people.',
    },
    {
      q: 'Do you offer support after launch?',
      a: 'Yes. Every project includes a free warranty period and, if you need it, monthly plans for maintenance, improvements and WhatsApp support.',
    },
  ],
};
