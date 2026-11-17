---
title: Sitio y reservas en línea para un centro de estética automotriz
summary: Sitio web con catálogo de servicios, cotizador por tipo de vehículo y agendamiento de turnos conectado a WhatsApp.
client: Autonova
industry: Automotriz
year: 2025
category: Sitio web
services: [desarrollo-web, automatizacion-ia]
duration: 5 semanas
team: Diseño y desarrollo
status: En producción
stack: [Astro, Tailwind, Supabase, n8n, WhatsApp Business API]
cover: ../../../assets/projects/autonova.png
order: 6
metrics:
  - { value: '5', label: 'Semanas del brief al lanzamiento' }
  - { value: '3', label: 'Pasos para reservar un turno' }
  - { value: '24/7', label: 'Reservas abiertas sin llamadas' }
problem: Los turnos se coordinaban por mensajes y llamadas. Había cruces de horario, clientes que no llegaban y mucho tiempo invertido en explicar qué incluye cada servicio y cuánto cuesta según el vehículo.
solution: Un sitio que explica cada servicio con fotos de antes y después, calcula un precio referencial según el tipo de vehículo y permite reservar un turno en tres pasos. La reserva se confirma y se recuerda por WhatsApp de forma automática.
process:
  - title: Servicios y precios
    text: Ordenamos la oferta en paquetes claros y definimos reglas de precio por tamaño de vehículo.
  - title: Diseño
    text: Estética oscura con el azul de la marca y mucho protagonismo para las fotografías del trabajo terminado.
  - title: Reservas
    text: Calendario con disponibilidad real por bahía de trabajo, para que dos clientes no tomen el mismo turno.
  - title: Recordatorios
    text: Confirmación al reservar y recordatorio el día anterior por WhatsApp, con opción de reprogramar.
decisions:
  - title: Precio referencial visible
    text: Mostrar un rango antes de reservar filtró consultas y trajo clientes que ya sabían lo que iban a pagar.
  - title: Disponibilidad calculada en el servidor
    text: El turno se valida al confirmar, no al mostrar el calendario. Así no hay dobles reservas aunque dos personas elijan a la vez.
  - title: Recordatorios automáticos
    text: Un flujo en n8n envía los mensajes. Menos ausencias sin que nadie tenga que acordarse de escribir.
highlights:
  - Reservas sin llamadas ni mensajes de ida y vuelta
  - Menos turnos perdidos gracias a los recordatorios
  - Servicios y precios explicados antes del primer contacto
learnings:
  - Un antes y después bien fotografiado vende más que cualquier texto
  - Cuanto más corto el flujo de reserva, más reservas se completan
---

Autonova quería que agendar un detallado fuera tan fácil como pedir comida a domicilio. El sitio se diseñó alrededor de una sola acción: reservar.
