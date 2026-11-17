---
title: Ecosistema de CRMs para una concesionaria
summary: Tres CRMs conectados para ventas, contabilidad y seguros, con captura automática de leads mediante IA.
client: KsiNuevos
industry: Automotriz
year: 2026
category: CRM / ERP
services: [aplicaciones-web, automatizacion-ia]
duration: 6 meses
team: Arquitectura, desarrollo e infraestructura
status: En producción
stack: [React, TypeScript, PostgreSQL, n8n, IA, Linux]
cover: ../../../assets/projects/ksinuevos-crm.png
featured: true
order: 1
metrics:
  - { value: '3', label: 'CRMs conectados sobre una misma base de datos' }
  - { value: '1', label: 'Ficha única por cliente para todas las áreas' }
  - { value: '0', label: 'Leads de campaña digitados a mano' }
  - { value: '6', label: 'Meses del análisis a producción' }
problem: Ventas, contabilidad y seguros trabajaban en herramientas separadas. La información del cliente se duplicaba, los leads de las campañas se copiaban a mano y el seguimiento dependía de hojas de cálculo y de la memoria de cada asesor.
solution: Un conjunto de CRMs, uno por área, sobre una base de datos común. Cada equipo tiene su propio flujo de trabajo, pero todos ven al mismo cliente. Los leads entran solos, clasificados por IA y con asesor asignado.
process:
  - title: Levantamiento
    text: Nos sentamos con cada área para mapear cómo trabajaban en realidad, qué datos compartían sin saberlo y dónde se perdía el seguimiento de un cliente.
  - title: Arquitectura y modelo de datos
    text: Definimos un modelo único de cliente, vehículo y operación del que cuelgan los tres CRMs, con roles y permisos por área para que cada equipo vea solo lo que necesita.
  - title: Desarrollo por módulos
    text: Empezamos por ventas, el área con más urgencia. Cada módulo salió a producción apenas estuvo listo, en ciclos cortos con retroalimentación semanal de los usuarios.
  - title: Automatización de leads
    text: Construimos flujos en n8n que reciben los leads de las campañas, usan un modelo de IA para clasificarlos por intención y los registran en el CRM con el asesor que corresponde.
  - title: Despliegue y soporte
    text: Montamos servidores, respaldos y monitoreo. Acompañamos la adopción con capacitaciones cortas y ajustes sobre la marcha.
decisions:
  - title: Una base de datos, tres aplicaciones
    text: En lugar de tres sistemas que se sincronizan, los CRMs comparten el mismo modelo. Así no existe la pregunta de cuál dato es el correcto.
  - title: La IA clasifica, la persona decide
    text: El modelo propone la intención y la prioridad del lead con un prompt acotado y salida estructurada, pero el asesor siempre puede corregirlo. Las correcciones sirven para ajustar el prompt.
  - title: Permisos desde el modelo, no desde la pantalla
    text: Las reglas de acceso viven en la base de datos. Aunque cambie la interfaz, contabilidad nunca ve lo que no le corresponde.
  - title: Entregas pequeñas y frecuentes
    text: Publicar cada semana fue la manera de detectar pronto lo que no servía y de mantener la confianza del negocio.
highlights:
  - Tres áreas del negocio trabajando sobre la misma información
  - Leads de campañas en el CRM sin digitación manual
  - Seguimiento de cada cliente visible para todo el equipo comercial
  - Infraestructura y respaldos documentados y bajo control interno
learnings:
  - Entender el proceso real pesa más que cualquier elección de framework
  - Automatizar con IA funciona mejor cuando hay una persona que puede corregirla
  - Documentar como si mañana otro equipo fuera a continuar el sistema
---

La concesionaria y sus unidades de negocio habían crecido más rápido que sus herramientas. Además de construir el software, nos hicimos cargo de la infraestructura tecnológica completa: servidores, redes y soporte técnico, lo que nos dio control de punta a punta sobre cómo se desplegaba y se mantenía el sistema.
