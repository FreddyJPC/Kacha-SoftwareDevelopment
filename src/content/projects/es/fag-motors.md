---
title: Catálogo digital y asistente de ventas con IA
summary: Catálogo de motos con fichas técnicas y un asistente en WhatsApp que responde, cotiza y agenda pruebas de manejo.
client: FAG Motors
industry: Automotriz
year: 2026
category: Automatización e IA
services: [automatizacion-ia, desarrollo-web]
duration: 7 semanas
team: Diseño, desarrollo y automatización
status: En producción
stack: [Astro, React, n8n, Claude, WhatsApp Business API, Supabase]
cover: ../../../assets/projects/fag-motors.png
featured: true
order: 3
metrics:
  - { value: '24/7', label: 'Atención a consultas sin depender del horario del local' }
  - { value: '<1 min', label: 'Tiempo de primera respuesta en WhatsApp' }
  - { value: '40+', label: 'Modelos con ficha técnica y financiamiento' }
  - { value: '1', label: 'Bandeja para todo el equipo comercial' }
problem: Las consultas llegaban por WhatsApp e Instagram a cualquier hora y se repetían las mismas preguntas sobre precio, cuotas y disponibilidad. Fuera de horario nadie respondía y muchos interesados se enfriaban antes de hablar con un asesor.
solution: Un catálogo web rápido con todos los modelos y un asistente con IA conectado a ese mismo catálogo. Responde con datos reales, calcula cuotas referenciales, agenda la prueba de manejo y entrega al asesor un lead ya calificado.
process:
  - title: Mapa de preguntas
    text: Revisamos cientos de conversaciones reales para identificar qué preguntan los clientes, en qué orden y dónde se perdía la venta.
  - title: Catálogo como fuente de verdad
    text: Cargamos modelos, precios y fichas técnicas en una base que alimenta por igual al sitio web y al asistente.
  - title: Diseño de la conversación
    text: Definimos tono, límites y el momento exacto en que el asistente pasa la conversación a una persona, con todo el contexto.
  - title: Pruebas con casos difíciles
    text: Antes de abrirlo al público lo probamos con preguntas ambiguas, regateos y solicitudes fuera de alcance.
  - title: Ajuste semanal
    text: Cada semana revisamos conversaciones con el equipo comercial y afinamos prompts y respuestas.
decisions:
  - title: Un solo catálogo para web y chat
    text: El asistente consulta la misma base que muestra el sitio. Cuando cambia un precio, cambia en todos lados a la vez.
  - title: La IA no inventa precios
    text: El modelo solo puede responder con datos del catálogo. Si no encuentra la información, lo dice y ofrece hablar con un asesor.
  - title: Traspaso con contexto
    text: Al asesor le llega un resumen con modelo de interés, forma de pago y horario preferido. No empieza la conversación de cero.
  - title: Sitio estático, catálogo dinámico
    text: Páginas generadas con Astro para cargar al instante, con los datos del catálogo actualizados desde un panel sencillo.
highlights:
  - Respuesta inmediata a cualquier hora del día
  - Leads calificados con modelo, presupuesto y horario
  - Catálogo actualizable por el propio equipo
  - Pruebas de manejo agendadas sin llamadas de ida y vuelta
learnings:
  - Un asistente es tan bueno como los datos a los que tiene acceso
  - Definir cuándo no debe responder la IA es tan importante como entrenarla
  - El mejor indicador es cuántas conversaciones terminan en una cita
---

FAG Motors vende en un mercado donde el primer contacto casi siempre es un mensaje. El proyecto unió dos piezas que se necesitaban: un catálogo que por fin estuviera al día y un asistente capaz de usarlo para atender como lo haría su mejor vendedor.
