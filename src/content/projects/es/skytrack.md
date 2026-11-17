---
title: Portal de clientes para rastreo satelital
summary: Plataforma web donde cada cliente ve su flota en el mapa, recibe alertas y descarga reportes de recorridos.
client: SkyTrack
industry: Tecnología y logística
year: 2025
category: Aplicación web
services: [aplicaciones-web, diseno-ui-ux]
duration: 4 meses
team: Diseño UI/UX y desarrollo full-stack
status: En producción
stack: [React, TypeScript, Python, PostgreSQL, Mapas, WebSockets]
cover: ../../../assets/projects/skytrack.png
order: 5
metrics:
  - { value: '1', label: 'Portal para flota, alertas y reportes' }
  - { value: '<5 s', label: 'Para ver la última posición de cada unidad' }
  - { value: '4', label: 'Meses del prototipo a producción' }
  - { value: '0', label: 'Reportes armados a mano por soporte' }
problem: Los clientes consultaban la ubicación de sus vehículos en una herramienta antigua, difícil de usar desde el celular, y pedían los reportes de recorrido por teléfono. El equipo de soporte dedicaba buena parte del día a generar esos reportes.
solution: Un portal moderno con mapa en tiempo real, historial de recorridos, alertas configurables por unidad y reportes descargables. Cada cliente entra con su cuenta y ve solo su flota.
process:
  - title: Entrevistas con clientes y soporte
    text: Identificamos las cinco tareas que concentraban casi todas las consultas y las convertimos en el centro del diseño.
  - title: Prototipo del mapa
    text: Probamos en Figma distintas formas de mostrar muchas unidades a la vez sin saturar la pantalla, sobre todo en celular.
  - title: API sobre la plataforma existente
    text: Construimos servicios en Python que leen los datos de los dispositivos y los exponen de forma ordenada al nuevo portal.
  - title: Tiempo real y reportes
    text: Posiciones actualizadas por WebSockets, historial con reproducción de recorridos y exportación a PDF y Excel.
  - title: Migración de cuentas
    text: Los clientes pasaron al nuevo portal por grupos, con el anterior disponible hasta completar el relevo.
decisions:
  - title: Mobile primero
    text: La mayoría de consultas ocurre en la calle. El mapa, las alertas y el último recorrido están a un toque desde el celular.
  - title: Reportes de autoservicio
    text: Todo lo que soporte generaba a mano ahora lo descarga el cliente. El equipo quedó libre para casos que sí necesitan a una persona.
  - title: Convivencia con el sistema anterior
    text: El portal lee la misma información que la plataforma existente, así que no hubo un día de corte ni riesgo de perder datos.
  - title: Permisos por cuenta y subcuenta
    text: Empresas con varias sucursales asignan qué unidades ve cada usuario, sin pedirlo a soporte.
highlights:
  - Flota visible en tiempo real desde cualquier dispositivo
  - Alertas por velocidad, zona y encendido configurables por el cliente
  - Reportes descargables sin llamar a soporte
  - Migración por grupos sin interrumpir el servicio
learnings:
  - En un mapa, mostrar menos es casi siempre mostrar mejor
  - Cada reporte que el cliente descarga solo es una llamada menos
---

SkyTrack ya tenía la tecnología de rastreo; le faltaba una forma moderna de ponerla en manos de sus clientes. El proyecto se concentró en la experiencia: que cualquier persona encuentre su vehículo y su reporte sin instrucciones.
