/**
 * Servicios de la agencia, en cada idioma. Cada entrada genera:
 *  - una fila del acordeón de la portada y del listado de servicios
 *  - su propia página de detalle (/servicios/<slug>/ y /en/services/<slug>/)
 * `id` es igual en ambos idiomas: los proyectos se relacionan con un servicio poniendo
 * ese `id` en su campo `services`. `slug` es la URL y puede traducirse.
 */
import type { Lang } from '../i18n/config';

export interface Service {
  id: string;
  slug: string;
  title: string;
  /** Nombre corto para chips y formularios */
  short: string;
  /** Una frase para listados */
  summary: string;
  /** Párrafo de la página de detalle */
  description: string;
  tags: string[];
  /** Precio de partida visible */
  from: string;
  timeline: string;
  /** Para quién es */
  ideal: string[];
  /** Qué incluye */
  included: { title: string; text: string }[];
  /** Cómo lo trabajamos (fases propias del servicio) */
  steps: { title: string; text: string }[];
  /** Resultados que busca */
  outcomes: string[];
  faq: { q: string; a: string }[];
}

export const services: Record<Lang, Service[]> = {
  es: [
    {
      id: 'desarrollo-web',
      slug: 'desarrollo-web',
      title: 'Diseño y desarrollo web',
      short: 'Sitio web',
      summary: 'Sitios corporativos y landing pages rápidas, bien diseñadas y pensadas para convertir visitas en clientes.',
      description:
        'Tu sitio es el primer vendedor de tu negocio: trabaja 24/7 y casi siempre es la primera impresión. Lo diseñamos a medida, lo construimos con tecnología moderna y lo dejamos listo para posicionar en Google y cargar en un parpadeo, también en el celular.',
      tags: ['Astro', 'React', 'Tailwind', 'GSAP', 'SEO técnico'],
      from: 'Desde $350',
      timeline: '2 a 4 semanas',
      ideal: ['Negocios que aún no tienen sitio o tienen uno desactualizado', 'Marcas que lanzan un producto o campaña', 'Profesionales y estudios que necesitan un portafolio serio'],
      included: [
        { title: 'Diseño a medida', text: 'Nada de plantillas genéricas: diseñamos en Figma según tu marca y lo apruebas antes de programar.' },
        { title: 'Responsive real', text: 'Probado en celulares, tablets y pantallas grandes, no solo "se adapta".' },
        { title: 'Velocidad y SEO', text: 'Carga rápida, metadatos, sitemap y estructura lista para que Google te entienda.' },
        { title: 'Contacto directo', text: 'Formularios, botón de WhatsApp y llamadas a la acción en todo el recorrido.' },
        { title: 'Animaciones con medida', text: 'Movimiento que da ritmo y personalidad sin distraer ni volver lento el sitio.' },
        { title: 'Publicación completa', text: 'Dominio, hosting, correo y analítica configurados. Te lo entregamos funcionando.' },
      ],
      steps: [
        { title: 'Mensaje', text: 'Definimos qué decir, a quién y en qué orden antes de pensar en lo visual.' },
        { title: 'Diseño', text: 'Prototipo en Figma con tu identidad. Ajustamos hasta que te represente.' },
        { title: 'Desarrollo', text: 'Lo construimos con componentes limpios y te compartimos un enlace para ver el avance.' },
        { title: 'Lanzamiento', text: 'Optimizamos, publicamos y te enseñamos a actualizar tus contenidos.' },
      ],
      outcomes: ['Un sitio que explica tu negocio en segundos', 'Más contactos desde Google y redes', 'Una base que puedes ampliar sin rehacer'],
      faq: [
        { q: '¿Puedo editar el contenido yo mismo?', a: 'Sí. Según el proyecto dejamos un panel autoadministrable o una estructura de contenidos sencilla, y te capacitamos para usarla.' },
        { q: '¿Incluye dominio y hosting?', a: 'Te ayudamos a contratarlos a tu nombre y los dejamos configurados. Para sitios estáticos el hosting suele ser gratuito o de muy bajo costo.' },
        { q: '¿Qué necesito para empezar?', a: 'Tu logo si lo tienes, una idea de lo que quieres comunicar y referencias de sitios que te gusten. Del resto nos encargamos nosotros.' },
      ],
    },
    {
      id: 'ecommerce',
      slug: 'ecommerce',
      title: 'Tiendas online',
      short: 'E-commerce',
      summary: 'Tiendas en Shopify o a medida, con pagos, inventario y envíos resueltos para vender desde el primer día.',
      description:
        'Montamos tu tienda para que vender en línea sea tan natural como atender en el local: catálogo ordenado, checkout sin fricción, pagos con tarjeta y un panel desde el que controlas pedidos e inventario sin depender de nadie.',
      tags: ['Shopify', 'Pasarelas de pago', 'Catálogo', 'Inventario', 'Analítica'],
      from: 'Desde $1.200',
      timeline: '4 a 6 semanas',
      ideal: ['Negocios que ya venden por redes y WhatsApp', 'Locales físicos que quieren un canal digital', 'Marcas con catálogo amplio o promociones frecuentes'],
      included: [
        { title: 'Catálogo y filtros', text: 'Productos, variantes, categorías y búsqueda pensados para encontrar rápido.' },
        { title: 'Pagos en línea', text: 'Integración con pasarelas disponibles en Ecuador, transferencias y pago contra entrega.' },
        { title: 'Inventario y pedidos', text: 'Stock en tiempo real y un panel claro para despachar sin errores.' },
        { title: 'Envíos y cobertura', text: 'Tarifas por zona, retiro en local y notificaciones automáticas al cliente.' },
        { title: 'Promociones', text: 'Cupones, descuentos por temporada y banners que tú mismo activas.' },
        { title: 'Medición', text: 'Analítica y píxeles instalados para saber qué se vende y de dónde llega.' },
      ],
      steps: [
        { title: 'Catálogo', text: 'Ordenamos productos, fotos, precios y categorías antes de tocar la tienda.' },
        { title: 'Diseño de la tienda', text: 'Home, ficha de producto y checkout diseñados para comprar desde el celular.' },
        { title: 'Integraciones', text: 'Pagos, envíos, facturación y analítica conectados y probados con compras reales.' },
        { title: 'Salida en vivo', text: 'Capacitación al equipo, primeras ventas acompañadas y ajustes finos.' },
      ],
      outcomes: ['Ventas fuera del horario del local', 'Menos mensajes repetidos por precios y stock', 'Datos reales de qué productos mueven el negocio'],
      faq: [
        { q: '¿Shopify o desarrollo a medida?', a: 'Shopify es ideal para empezar rápido y con bajo mantenimiento. Si tu operación tiene reglas muy particulares, una tienda a medida te da control total. Te recomendamos con base en tu caso, no en lo que nos conviene.' },
        { q: '¿Con qué medios de pago trabajan?', a: 'Tarjetas de crédito y débito mediante pasarelas locales, transferencia y pago contra entrega. Te guiamos en la apertura de la cuenta con la pasarela.' },
        { q: '¿Pueden cargar mis productos?', a: 'Sí. Hacemos la carga inicial y te dejamos una plantilla para que sumar productos nuevos te tome minutos.' },
      ],
    },
    {
      id: 'aplicaciones-web',
      slug: 'aplicaciones-web',
      title: 'Aplicaciones web, CRM y ERP',
      short: 'App / CRM / ERP',
      summary: 'Sistemas a medida que ordenan ventas, inventario, caja o cualquier proceso que hoy vive en hojas de cálculo.',
      description:
        'Cuando el negocio crece, las hojas de cálculo y los mensajes dejan de alcanzar. Construimos el sistema que tu operación necesita: diseñado junto a quienes lo van a usar, con una sola fuente de datos y con la arquitectura para crecer sin rehacerlo.',
      tags: ['React', 'Python', '.NET', 'PostgreSQL', 'Supabase', 'Roles y permisos'],
      from: 'Desde $4.000',
      timeline: '2 a 6 meses',
      ideal: ['Empresas con procesos repartidos en Excel y WhatsApp', 'Equipos comerciales que pierden seguimiento de clientes', 'Negocios con software antiguo que ya no acompaña'],
      included: [
        { title: 'Levantamiento de procesos', text: 'Nos sentamos con cada área para entender cómo trabajan de verdad, no cómo dice el manual.' },
        { title: 'Arquitectura y datos', text: 'Un modelo de datos único y capas bien separadas para que cada cambio futuro sea barato.' },
        { title: 'Módulos a tu medida', text: 'Ventas, inventario, caja, contabilidad, seguros, citas: lo que tu operación pida.' },
        { title: 'Roles y permisos', text: 'Cada persona ve y edita solo lo que le corresponde, con reglas en la base de datos.' },
        { title: 'Reportes y tableros', text: 'Indicadores en tiempo real para decidir con datos y no con intuición.' },
        { title: 'Despliegue y respaldo', text: 'Servidores, copias de seguridad y monitoreo documentados y bajo tu control.' },
      ],
      steps: [
        { title: 'Descubrimiento', text: 'Mapeamos procesos, usuarios y datos. Sales con un alcance claro y priorizado.' },
        { title: 'Prototipo', text: 'Pantallas navegables que se prueban con el equipo antes de programar.' },
        { title: 'Desarrollo por módulos', text: 'Cada módulo sale a producción apenas está listo. Ves avances reales cada semana.' },
        { title: 'Adopción', text: 'Migramos datos, capacitamos al equipo y ajustamos sobre el uso real.' },
      ],
      outcomes: ['Una sola versión de la información', 'Menos trabajo manual y menos errores', 'Un sistema que crece con el negocio'],
      faq: [
        { q: '¿Por qué a medida y no un software ya hecho?', a: 'Un software genérico te obliga a adaptarte a él. Si tu proceso es estándar, te lo diremos y te recomendaremos una herramienta existente. A medida tiene sentido cuando tu forma de trabajar es parte de tu ventaja.' },
        { q: '¿El código y los datos son míos?', a: 'Sí. Al finalizar el proyecto el código fuente, la base de datos y los accesos son tuyos, con documentación para que cualquier equipo pueda continuarlo.' },
        { q: '¿Pueden continuar un sistema que ya existe?', a: 'Sí. Evaluamos el estado del sistema y proponemos si conviene evolucionarlo o migrarlo por partes, sin detener la operación.' },
      ],
    },
    {
      id: 'automatizacion-ia',
      slug: 'automatizacion-ia',
      title: 'Automatización y chatbots con IA',
      short: 'Automatización e IA',
      summary: 'Asistentes que atienden 24/7 y flujos que eliminan trabajo repetitivo: leads, respuestas, reportes y seguimiento.',
      description:
        'La IA sirve cuando resuelve una tarea concreta. Diseñamos asistentes para WhatsApp, Instagram y tu web que responden, califican y agendan; y flujos que conectan tus herramientas para que la información se mueva sola. Siempre con una persona que puede intervenir.',
      tags: ['Claude', 'n8n', 'Agentes de IA', 'WhatsApp Business', 'Webhooks'],
      from: 'Desde $600',
      timeline: '2 a 5 semanas',
      ideal: ['Negocios que reciben muchas consultas repetidas', 'Equipos de ventas que digitan leads a mano', 'Empresas que quieren probar IA con un caso de uso real'],
      included: [
        { title: 'Asistente entrenado con tu negocio', text: 'Responde con tu información: precios, horarios, catálogo y políticas.' },
        { title: 'Calificación de leads', text: 'Clasifica por intención y prioridad, y asigna al asesor correcto.' },
        { title: 'Conexión con tus sistemas', text: 'CRM, hojas de cálculo, correo, agenda y pasarelas hablando entre sí.' },
        { title: 'Traspaso a una persona', text: 'El asistente sabe cuándo ceder la conversación a tu equipo, con todo el contexto.' },
        { title: 'Prompts y reglas afinados', text: 'Iteramos con conversaciones reales hasta que responde como lo haría tu mejor vendedor.' },
        { title: 'Panel de seguimiento', text: 'Métricas de conversaciones, leads y tiempos de respuesta.' },
      ],
      steps: [
        { title: 'Caso de uso', text: 'Elegimos la tarea con mejor retorno: la que más tiempo consume o más ventas pierde.' },
        { title: 'Diseño del flujo', text: 'Definimos qué responde la IA, qué decide una persona y dónde se guarda cada dato.' },
        { title: 'Construcción y pruebas', text: 'Probamos con conversaciones reales y casos difíciles antes de abrirlo al público.' },
        { title: 'Ajuste continuo', text: 'Revisamos las conversaciones cada semana y afinamos prompts y reglas.' },
      ],
      outcomes: ['Respuesta inmediata a cualquier hora', 'Cero leads perdidos o digitados a mano', 'Tu equipo enfocado en cerrar, no en copiar datos'],
      faq: [
        { q: '¿La IA puede equivocarse con mis clientes?', a: 'Limitamos lo que el asistente puede responder a tu información verificada y definimos cuándo debe pasar la conversación a una persona. Además revisamos conversaciones reales para corregir a tiempo.' },
        { q: '¿Tiene costo mensual?', a: 'Sí: el uso del modelo de IA y de las plataformas de mensajería se paga según consumo. Te damos un estimado claro antes de empezar y un plan mensual que incluye monitoreo y ajustes.' },
        { q: '¿Funciona con mi número de WhatsApp actual?', a: 'En la mayoría de casos sí, migrándolo a WhatsApp Business API. Te acompañamos en todo el proceso de verificación.' },
      ],
    },
    {
      id: 'diseno-ui-ux',
      slug: 'diseno-ui-ux',
      title: 'Diseño UI/UX en Figma',
      short: 'Diseño UI/UX',
      summary: 'Prototipos navegables e interfaces claras para validar tu idea antes de invertir en programarla.',
      description:
        'Diseñar primero es la forma más barata de equivocarse. Convertimos tu idea en pantallas navegables que puedes mostrar a clientes, socios o inversionistas, y que cualquier equipo de desarrollo puede construir sin adivinar.',
      tags: ['Figma', 'Prototipos', 'Design systems', 'Wireframes', 'Pruebas con usuarios'],
      from: 'Desde $250',
      timeline: '1 a 3 semanas',
      ideal: ['Emprendimientos que necesitan validar una idea', 'Productos existentes difíciles de usar', 'Equipos de desarrollo sin diseñador'],
      included: [
        { title: 'Flujos de usuario', text: 'El camino completo de cada tarea, sin pasos de más.' },
        { title: 'Wireframes', text: 'Estructura de cada pantalla antes de decidir colores y estilos.' },
        { title: 'Diseño visual', text: 'Interfaz final con tu identidad: tipografía, color y componentes.' },
        { title: 'Prototipo navegable', text: 'Un enlace que se siente como la app real para probar y presentar.' },
        { title: 'Sistema de componentes', text: 'Piezas reutilizables y documentadas para mantener la coherencia al crecer.' },
        { title: 'Entrega a desarrollo', text: 'Especificaciones y recursos listos para programar, con o sin nosotros.' },
      ],
      steps: [
        { title: 'Entender', text: 'Usuarios, objetivos y referencias. Qué debe lograr cada pantalla.' },
        { title: 'Estructurar', text: 'Flujos y wireframes para acordar el fondo antes que la forma.' },
        { title: 'Diseñar', text: 'Interfaz visual y prototipo navegable con rondas de revisión.' },
        { title: 'Validar y entregar', text: 'Pruebas con usuarios reales y archivo listo para desarrollo.' },
      ],
      outcomes: ['Una idea que se puede ver y probar', 'Menos cambios costosos durante el desarrollo', 'Una interfaz coherente y fácil de usar'],
      faq: [
        { q: '¿Cuántas revisiones incluye?', a: 'Trabajamos con rondas de revisión en cada etapa hasta que el diseño te represente. Lo importante es acordar bien la estructura antes de pasar a lo visual.' },
        { q: '¿Puedo llevar el diseño a otro equipo de desarrollo?', a: 'Sí. El archivo de Figma es tuyo y lo entregamos documentado para que cualquier equipo lo implemente.' },
        { q: '¿También lo desarrollan?', a: 'Claro. Si luego quieres construirlo con nosotros, el valor del diseño se toma en cuenta en la propuesta de desarrollo.' },
      ],
    },
    {
      id: 'migracion-y-soporte',
      slug: 'migracion-y-soporte',
      title: 'Migración, soporte y evolución',
      short: 'Soporte / Migración',
      summary: 'Modernizamos sistemas antiguos sin detener la operación y mantenemos tu software seguro, rápido y al día.',
      description:
        'El software no termina el día del lanzamiento. Migramos sistemas legacy a arquitecturas web modernas, módulo por módulo, y ofrecemos planes mensuales para que tu sitio o sistema esté siempre actualizado, respaldado y mejorando.',
      tags: ['Oracle Forms', 'SQL Server', 'Docker', 'Linux', 'Monitoreo', 'Respaldos'],
      from: 'Desde $80/mes',
      timeline: 'Plan mensual o por proyecto',
      ideal: ['Empresas con sistemas de escritorio o tecnologías descontinuadas', 'Negocios cuyo proveedor anterior ya no responde', 'Equipos que necesitan mejoras continuas sin contratar un área de TI'],
      included: [
        { title: 'Diagnóstico del sistema', text: 'Revisamos código, datos e infraestructura y te decimos con honestidad qué conviene.' },
        { title: 'Migración progresiva', text: 'El sistema nuevo y el antiguo conviven hasta que el relevo es seguro.' },
        { title: 'Actualizaciones y seguridad', text: 'Dependencias, certificados y parches al día para reducir riesgos.' },
        { title: 'Respaldos y monitoreo', text: 'Copias automáticas y alertas para enterarnos antes que tus usuarios.' },
        { title: 'Mejoras mensuales', text: 'Una bolsa de horas para nuevas funciones y ajustes priorizados contigo.' },
        { title: 'Soporte cercano', text: 'Un canal directo por WhatsApp con tiempos de respuesta acordados.' },
      ],
      steps: [
        { title: 'Diagnóstico', text: 'Estado real del sistema, riesgos y prioridades en un informe claro.' },
        { title: 'Plan', text: 'Qué se mantiene, qué se migra y en qué orden, con costos por etapa.' },
        { title: 'Ejecución', text: 'Cambios pequeños y frecuentes, siempre con respaldo y vuelta atrás.' },
        { title: 'Acompañamiento', text: 'Reporte mensual de lo hecho y lo que viene.' },
      ],
      outcomes: ['Operación sin interrupciones durante el cambio', 'Menos riesgo de caídas y pérdida de datos', 'Un equipo técnico disponible sin contratar planta'],
      faq: [
        { q: '¿Dan soporte a sistemas que no desarrollaron?', a: 'Sí, después de un diagnóstico inicial. Necesitamos entender el estado del código y la infraestructura antes de comprometernos con tiempos de respuesta.' },
        { q: '¿Qué incluye el plan mensual?', a: 'Actualizaciones, respaldos, monitoreo y una bolsa de horas para mejoras. El tamaño de la bolsa se ajusta a tu ritmo de cambios.' },
        { q: '¿Cuánto dura una migración?', a: 'Depende del tamaño del sistema. Al trabajar por módulos, empiezas a usar partes nuevas en semanas en lugar de esperar un reemplazo total.' },
      ],
    },
  ],
  en: [
    {
      id: 'desarrollo-web',
      slug: 'web-development',
      title: 'Web design & development',
      short: 'Website',
      summary: 'Fast, well-designed corporate websites and landing pages built to turn visitors into customers.',
      description:
        'Your website is your business’s first salesperson: it works 24/7 and is almost always the first impression. We design it from scratch, build it with modern technology and leave it ready to rank on Google and load in a blink, on mobile too.',
      tags: ['Astro', 'React', 'Tailwind', 'GSAP', 'Technical SEO'],
      from: 'From $350',
      timeline: '2 to 4 weeks',
      ideal: ['Businesses without a website, or with an outdated one', 'Brands launching a product or campaign', 'Professionals and studios that need a serious portfolio'],
      included: [
        { title: 'Custom design', text: 'No generic templates: we design in Figma around your brand and you approve it before we write code.' },
        { title: 'Truly responsive', text: 'Tested on phones, tablets and large screens, not just “it adapts”.' },
        { title: 'Speed & SEO', text: 'Fast loading, metadata, sitemap and a structure Google can understand.' },
        { title: 'Direct contact', text: 'Forms, a WhatsApp button and calls to action throughout the journey.' },
        { title: 'Purposeful motion', text: 'Animation that adds rhythm and personality without distracting or slowing the site down.' },
        { title: 'Full launch', text: 'Domain, hosting, email and analytics set up. We hand it over working.' },
      ],
      steps: [
        { title: 'Message', text: 'We define what to say, to whom and in what order before thinking about visuals.' },
        { title: 'Design', text: 'A Figma prototype with your identity. We refine it until it represents you.' },
        { title: 'Development', text: 'We build it with clean components and share a link so you can follow the progress.' },
        { title: 'Launch', text: 'We optimize, publish and show you how to update your content.' },
      ],
      outcomes: ['A site that explains your business in seconds', 'More leads from Google and social media', 'A foundation you can grow without starting over'],
      faq: [
        { q: 'Can I edit the content myself?', a: 'Yes. Depending on the project we set up a self-managed panel or a simple content structure, and we train you to use it.' },
        { q: 'Are domain and hosting included?', a: 'We help you register them in your name and leave everything configured. For static sites, hosting is usually free or very low cost.' },
        { q: 'What do I need to get started?', a: 'Your logo if you have one, an idea of what you want to communicate and a few sites you like. We take care of the rest.' },
      ],
    },
    {
      id: 'ecommerce',
      slug: 'ecommerce',
      title: 'Online stores',
      short: 'E-commerce',
      summary: 'Shopify or custom stores with payments, inventory and shipping sorted, so you can sell from day one.',
      description:
        'We set up your store so selling online feels as natural as serving customers in person: an organized catalog, a frictionless checkout, card payments and a dashboard where you manage orders and stock without depending on anyone.',
      tags: ['Shopify', 'Payment gateways', 'Catalog', 'Inventory', 'Analytics'],
      from: 'From $1,200',
      timeline: '4 to 6 weeks',
      ideal: ['Businesses already selling through social media and WhatsApp', 'Brick-and-mortar stores that want a digital channel', 'Brands with large catalogs or frequent promotions'],
      included: [
        { title: 'Catalog & filters', text: 'Products, variants, categories and search designed to find things fast.' },
        { title: 'Online payments', text: 'Local payment gateways, bank transfers and cash on delivery.' },
        { title: 'Inventory & orders', text: 'Real-time stock and a clear dashboard to fulfill orders without mistakes.' },
        { title: 'Shipping & coverage', text: 'Rates by area, in-store pickup and automatic customer notifications.' },
        { title: 'Promotions', text: 'Coupons, seasonal discounts and banners you switch on yourself.' },
        { title: 'Measurement', text: 'Analytics and pixels installed to know what sells and where buyers come from.' },
      ],
      steps: [
        { title: 'Catalog', text: 'We organize products, photos, prices and categories before touching the store.' },
        { title: 'Store design', text: 'Home, product page and checkout designed for buying on a phone.' },
        { title: 'Integrations', text: 'Payments, shipping, invoicing and analytics connected and tested with real purchases.' },
        { title: 'Go live', text: 'Team training, supported first sales and fine-tuning.' },
      ],
      outcomes: ['Sales outside store hours', 'Fewer repeated messages about prices and stock', 'Real data on which products move the business'],
      faq: [
        { q: 'Shopify or custom development?', a: 'Shopify is ideal to start fast with low maintenance. If your operation has very specific rules, a custom store gives you full control. We recommend based on your case, not on what suits us.' },
        { q: 'Which payment methods do you support?', a: 'Credit and debit cards through local gateways, bank transfers and cash on delivery. We guide you through opening the gateway account.' },
        { q: 'Can you upload my products?', a: 'Yes. We do the initial upload and leave you a template so adding new products takes minutes.' },
      ],
    },
    {
      id: 'aplicaciones-web',
      slug: 'web-apps-crm-erp',
      title: 'Web apps, CRM & ERP',
      short: 'App / CRM / ERP',
      summary: 'Custom systems that bring order to sales, inventory, cash management or any process that lives in spreadsheets today.',
      description:
        'As a business grows, spreadsheets and chat messages stop being enough. We build the system your operation needs: designed with the people who will use it, with a single source of data and the architecture to grow without starting over.',
      tags: ['React', 'Python', '.NET', 'PostgreSQL', 'Supabase', 'Roles & permissions'],
      from: 'From $4,000',
      timeline: '2 to 6 months',
      ideal: ['Companies with processes scattered across Excel and WhatsApp', 'Sales teams losing track of customers', 'Businesses whose old software no longer keeps up'],
      included: [
        { title: 'Process discovery', text: 'We sit down with each team to understand how they really work, not how the manual says they do.' },
        { title: 'Architecture & data', text: 'A single data model and well-separated layers so every future change stays cheap.' },
        { title: 'Modules built for you', text: 'Sales, inventory, cash, accounting, insurance, appointments: whatever your operation needs.' },
        { title: 'Roles & permissions', text: 'Everyone sees and edits only what they should, with rules enforced in the database.' },
        { title: 'Reports & dashboards', text: 'Real-time indicators to make decisions with data, not gut feeling.' },
        { title: 'Deployment & backups', text: 'Servers, backups and monitoring documented and under your control.' },
      ],
      steps: [
        { title: 'Discovery', text: 'We map processes, users and data. You leave with a clear, prioritized scope.' },
        { title: 'Prototype', text: 'Clickable screens tested with the team before we write code.' },
        { title: 'Module-by-module build', text: 'Each module goes to production as soon as it’s ready. You see real progress every week.' },
        { title: 'Adoption', text: 'We migrate data, train the team and fine-tune based on real use.' },
      ],
      outcomes: ['A single version of the truth', 'Less manual work and fewer errors', 'A system that grows with the business'],
      faq: [
        { q: 'Why custom instead of off-the-shelf software?', a: 'Generic software forces you to adapt to it. If your process is standard, we’ll tell you and recommend an existing tool. Custom makes sense when the way you work is part of your edge.' },
        { q: 'Do I own the code and the data?', a: 'Yes. At the end of the project the source code, database and access are yours, documented so any team can continue the work.' },
        { q: 'Can you take over an existing system?', a: 'Yes. We assess its current state and propose whether to evolve it or migrate it piece by piece, without stopping operations.' },
      ],
    },
    {
      id: 'automatizacion-ia',
      slug: 'ai-automation',
      title: 'AI automation & chatbots',
      short: 'Automation & AI',
      summary: 'Assistants that answer 24/7 and workflows that remove repetitive work: leads, replies, reports and follow-up.',
      description:
        'AI is useful when it solves a specific task. We design assistants for WhatsApp, Instagram and your website that answer, qualify and book; and workflows that connect your tools so information moves on its own. Always with a person who can step in.',
      tags: ['Claude', 'n8n', 'AI agents', 'WhatsApp Business', 'Webhooks'],
      from: 'From $600',
      timeline: '2 to 5 weeks',
      ideal: ['Businesses that get many repeated questions', 'Sales teams typing leads in by hand', 'Companies that want to try AI on a real use case'],
      included: [
        { title: 'An assistant trained on your business', text: 'It answers with your information: prices, hours, catalog and policies.' },
        { title: 'Lead qualification', text: 'Sorts by intent and priority, and assigns the right sales rep.' },
        { title: 'Connected to your systems', text: 'CRM, spreadsheets, email, calendar and payment gateways talking to each other.' },
        { title: 'Hand-off to a person', text: 'The assistant knows when to pass the conversation to your team, with full context.' },
        { title: 'Tuned prompts & rules', text: 'We iterate on real conversations until it answers like your best salesperson.' },
        { title: 'Tracking dashboard', text: 'Metrics for conversations, leads and response times.' },
      ],
      steps: [
        { title: 'Use case', text: 'We pick the task with the best return: the one that takes the most time or loses the most sales.' },
        { title: 'Flow design', text: 'We define what the AI answers, what a person decides and where each piece of data is stored.' },
        { title: 'Build & test', text: 'We test with real conversations and tricky cases before opening it to the public.' },
        { title: 'Ongoing tuning', text: 'We review conversations every week and refine prompts and rules.' },
      ],
      outcomes: ['Instant replies at any hour', 'No more lost or hand-typed leads', 'Your team focused on closing, not copying data'],
      faq: [
        { q: 'Can the AI get things wrong with my customers?', a: 'We limit the assistant to your verified information and define when it must hand the conversation to a person. We also review real conversations to correct course early.' },
        { q: 'Is there a monthly cost?', a: 'Yes: AI model usage and messaging platforms are billed by consumption. We give you a clear estimate up front and a monthly plan that includes monitoring and adjustments.' },
        { q: 'Does it work with my current WhatsApp number?', a: 'In most cases, yes, by moving it to the WhatsApp Business API. We guide you through the whole verification process.' },
      ],
    },
    {
      id: 'diseno-ui-ux',
      slug: 'ui-ux-design',
      title: 'UI/UX design in Figma',
      short: 'UI/UX design',
      summary: 'Clickable prototypes and clear interfaces to validate your idea before investing in building it.',
      description:
        'Designing first is the cheapest way to get things wrong. We turn your idea into clickable screens you can show to customers, partners or investors, and that any development team can build without guessing.',
      tags: ['Figma', 'Prototypes', 'Design systems', 'Wireframes', 'User testing'],
      from: 'From $250',
      timeline: '1 to 3 weeks',
      ideal: ['Startups that need to validate an idea', 'Existing products that are hard to use', 'Development teams without a designer'],
      included: [
        { title: 'User flows', text: 'The complete path for every task, with no extra steps.' },
        { title: 'Wireframes', text: 'The structure of each screen before choosing colors and styles.' },
        { title: 'Visual design', text: 'The final interface with your identity: typography, color and components.' },
        { title: 'Clickable prototype', text: 'A link that feels like the real app, for testing and pitching.' },
        { title: 'Component system', text: 'Reusable, documented pieces that keep things consistent as you grow.' },
        { title: 'Developer hand-off', text: 'Specs and assets ready to build, with or without us.' },
      ],
      steps: [
        { title: 'Understand', text: 'Users, goals and references. What each screen needs to achieve.' },
        { title: 'Structure', text: 'Flows and wireframes to agree on substance before style.' },
        { title: 'Design', text: 'Visual interface and clickable prototype with review rounds.' },
        { title: 'Validate & deliver', text: 'Tests with real users and a file ready for development.' },
      ],
      outcomes: ['An idea you can see and test', 'Fewer costly changes during development', 'A consistent, easy-to-use interface'],
      faq: [
        { q: 'How many revisions are included?', a: 'We work in review rounds at every stage until the design represents you. What matters most is agreeing on the structure before moving to visuals.' },
        { q: 'Can I take the design to another development team?', a: 'Yes. The Figma file is yours and we deliver it documented so any team can implement it.' },
        { q: 'Do you also build it?', a: 'Of course. If you later decide to build it with us, the design work is taken into account in the development proposal.' },
      ],
    },
    {
      id: 'migracion-y-soporte',
      slug: 'migration-and-support',
      title: 'Migration, support & evolution',
      short: 'Support / Migration',
      summary: 'We modernize legacy systems without stopping operations and keep your software secure, fast and up to date.',
      description:
        'Software doesn’t end on launch day. We migrate legacy systems to modern web architectures, module by module, and offer monthly plans so your site or system is always updated, backed up and improving.',
      tags: ['Oracle Forms', 'SQL Server', 'Docker', 'Linux', 'Monitoring', 'Backups'],
      from: 'From $80/month',
      timeline: 'Monthly plan or per project',
      ideal: ['Companies running desktop systems or discontinued technology', 'Businesses whose previous provider stopped responding', 'Teams that need continuous improvements without hiring an IT department'],
      included: [
        { title: 'System assessment', text: 'We review code, data and infrastructure and tell you honestly what makes sense.' },
        { title: 'Gradual migration', text: 'The new and old systems run side by side until the switch is safe.' },
        { title: 'Updates & security', text: 'Dependencies, certificates and patches kept current to reduce risk.' },
        { title: 'Backups & monitoring', text: 'Automatic backups and alerts so we know before your users do.' },
        { title: 'Monthly improvements', text: 'A pool of hours for new features and fixes, prioritized with you.' },
        { title: 'Close support', text: 'A direct WhatsApp channel with agreed response times.' },
      ],
      steps: [
        { title: 'Assessment', text: 'The real state of the system, its risks and priorities in a clear report.' },
        { title: 'Plan', text: 'What stays, what gets migrated and in what order, with costs per stage.' },
        { title: 'Execution', text: 'Small, frequent changes, always with backups and a way back.' },
        { title: 'Ongoing support', text: 'A monthly report of what was done and what comes next.' },
      ],
      outcomes: ['Uninterrupted operations during the change', 'Less risk of outages and data loss', 'A technical team on call without hiring staff'],
      faq: [
        { q: 'Do you support systems you didn’t build?', a: 'Yes, after an initial assessment. We need to understand the state of the code and infrastructure before committing to response times.' },
        { q: 'What does the monthly plan include?', a: 'Updates, backups, monitoring and a pool of hours for improvements. The size of the pool adapts to how often you need changes.' },
        { q: 'How long does a migration take?', a: 'It depends on the size of the system. Because we work module by module, you start using new parts within weeks instead of waiting for a full replacement.' },
      ],
    },
  ],
};

export const getService = (lang: Lang, id: string) => services[lang].find((s) => s.id === id);
