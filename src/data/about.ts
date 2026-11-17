/** Contenido de la agencia por idioma: manifiesto, cifras, historia, valores y equipo (portada y Nosotros). */
import type { Lang } from '../i18n/config';

export interface About {
  /** Frase principal de la portada. El texto entre *asteriscos* se subraya en verde al aparecer */
  manifesto: string;
  /** Líneas de enfoque del hero */
  focus: string[];
  /** PROVISIONAL: revisa las cifras para que reflejen los números reales de la agencia */
  stats: { value: number; suffix: string; label: string }[];
  story: string[];
  values: { title: string; text: string }[];
  founder: { name: string; role: string; bio: string; link: string };
  /** Especialidades con las que armamos el equipo de cada proyecto */
  disciplines: { title: string; text: string }[];
}

const founderLink = 'https://www.linkedin.com/in/freddy-javier-paguay-a906b2354/';

export const about: Record<Lang, About> = {
  es: {
    manifesto:
      'Somos un estudio de software de Cuenca, Ecuador. *Diseñamos, construimos y automatizamos* productos digitales que ordenan la operación y *hacen crecer a negocios reales*.',
    focus: ['Sitios y tiendas online', 'CRM & ERP a medida', 'Automatización e IA', 'Diseño UI/UX'],
    stats: [
      { value: 12, suffix: '+', label: 'Proyectos entregados de inicio a fin' },
      { value: 3, suffix: '+', label: 'Años construyendo software en producción' },
      { value: 6, suffix: '', label: 'Industrias con las que hemos trabajado' },
      { value: 24, suffix: 'h', label: 'Tiempo máximo de primera respuesta' },
    ],
    story: [
      'Kacha nació en Cuenca con una idea simple: que un negocio de cualquier tamaño pueda tener software tan bueno como el de una gran empresa. Empezamos haciendo sitios web y hoy construimos también los sistemas internos con los que nuestros clientes venden, atienden y deciden.',
      'Trabajamos en todo el ciclo de vida del software: levantar requerimientos, diseñar la arquitectura y la base de datos, construir frontend y backend, desplegar y dar soporte. Nos movemos con soltura entre React, Python, .NET y bases de datos como PostgreSQL, Oracle y SQL Server.',
      'La IA es parte de nuestra forma de trabajar. Nos permite diseñar, programar y revisar más rápido, sin soltar los principios de siempre: arquitectura limpia, código que escala y entregas frecuentes que el cliente puede ver y probar.',
    ],
    values: [
      { title: 'Entender antes de construir', text: 'El proceso real del negocio pesa más que cualquier elección de framework. Primero observamos cómo trabajas.' },
      { title: 'Entregas pequeñas y frecuentes', text: 'Ves avances reales cada semana. Así detectamos pronto lo que no sirve y el proyecto nunca es una caja negra.' },
      { title: 'Hablar claro', text: 'Sin jerga y sin letra pequeña. Si algo no te conviene, te lo decimos aunque signifique un proyecto más chico.' },
      { title: 'Lo que hacemos es tuyo', text: 'Código, diseños, datos y accesos quedan a tu nombre y documentados para que nunca dependas de nosotros.' },
    ],
    founder: {
      name: 'Freddy Paguay',
      role: 'Fundador y desarrollador líder',
      bio: 'Desarrollador Full-Stack con experiencia en ERPs, CRMs, migración de sistemas legacy y automatización con IA. Dirige la arquitectura y acompaña personalmente cada proyecto.',
      link: founderLink,
    },
    disciplines: [
      { title: 'Diseño UI/UX', text: 'Flujos, prototipos e interfaces en Figma.' },
      { title: 'Frontend', text: 'Interfaces rápidas y accesibles con React y Astro.' },
      { title: 'Backend y datos', text: 'APIs, bases de datos e integraciones.' },
      { title: 'IA y automatización', text: 'Agentes, chatbots y flujos con n8n.' },
      { title: 'Infraestructura', text: 'Despliegues, servidores y respaldos.' },
      { title: 'QA y soporte', text: 'Pruebas, monitoreo y acompañamiento.' },
    ],
  },
  en: {
    manifesto:
      'We are a software studio from Cuenca, Ecuador. *We design, build and automate* digital products that bring order to operations and *help real businesses grow*.',
    focus: ['Websites & online stores', 'Custom CRM & ERP', 'Automation & AI', 'UI/UX design'],
    stats: [
      { value: 12, suffix: '+', label: 'Projects delivered end to end' },
      { value: 3, suffix: '+', label: 'Years building software in production' },
      { value: 6, suffix: '', label: 'Industries we have worked with' },
      { value: 24, suffix: 'h', label: 'Maximum time to first reply' },
    ],
    story: [
      'Kacha was born in Cuenca with a simple idea: that a business of any size can have software as good as a large company’s. We started building websites, and today we also build the internal systems our clients use to sell, serve customers and make decisions.',
      'We work across the whole software lifecycle: gathering requirements, designing the architecture and database, building frontend and backend, deploying and providing support. We move comfortably between React, Python, .NET and databases such as PostgreSQL, Oracle and SQL Server.',
      'AI is part of how we work. It lets us design, code and review faster, without letting go of the fundamentals: clean architecture, code that scales and frequent deliveries the client can see and test.',
    ],
    values: [
      { title: 'Understand before building', text: 'The real business process matters more than any framework choice. First, we watch how you work.' },
      { title: 'Small, frequent deliveries', text: 'You see real progress every week. That way we catch what doesn’t work early, and the project is never a black box.' },
      { title: 'Plain talk', text: 'No jargon and no fine print. If something isn’t right for you, we’ll say so, even if it means a smaller project.' },
      { title: 'What we build is yours', text: 'Code, designs, data and access stay in your name and documented, so you never depend on us.' },
    ],
    founder: {
      name: 'Freddy Paguay',
      role: 'Founder & lead developer',
      bio: 'Full-Stack developer with experience in ERPs, CRMs, legacy system migration and AI automation. He leads the architecture and personally oversees every project.',
      link: founderLink,
    },
    disciplines: [
      { title: 'UI/UX design', text: 'Flows, prototypes and interfaces in Figma.' },
      { title: 'Frontend', text: 'Fast, accessible interfaces with React and Astro.' },
      { title: 'Backend & data', text: 'APIs, databases and integrations.' },
      { title: 'AI & automation', text: 'Agents, chatbots and n8n workflows.' },
      { title: 'Infrastructure', text: 'Deployments, servers and backups.' },
      { title: 'QA & support', text: 'Testing, monitoring and ongoing care.' },
    ],
  },
};
