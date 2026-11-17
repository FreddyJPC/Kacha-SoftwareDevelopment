---
title: Algora, gestión completa para una óptica
summary: Sistema a medida con pacientes, ventas, inventario, órdenes de laboratorio y cierre de caja.
client: Veo Optics
industry: Salud visual
year: 2025
category: Aplicación web
services: [aplicaciones-web, diseno-ui-ux]
duration: 9 meses
team: Diseño y desarrollo full-stack
status: En producción
stack: [React, Supabase, PostgreSQL, JavaScript, Tailwind]
cover: ../../../assets/projects/algora-cover.png
featured: true
order: 2
metrics:
  - { value: '5', label: 'Módulos: pacientes, ventas, laboratorio, inventario y caja' }
  - { value: '1', label: 'Herramienta en lugar de cuadernos y hojas de cálculo' }
  - { value: '0', label: 'Servidores propios que mantener' }
  - { value: '9', label: 'Meses de trabajo junto al negocio' }
problem: La óptica llevaba pacientes, ventas e inventario por separado, y el cierre de caja se cuadraba a mano al final del día. Encontrar el historial de un paciente o saber qué había en stock tomaba demasiado tiempo.
solution: Un sistema hecho a la medida del mostrador. Registrar un paciente, vender, generar la orden de laboratorio y descontar inventario ocurre en un solo flujo, y la caja se cierra con lo que el sistema ya registró.
process:
  - title: Observar el mostrador
    text: Pasamos tiempo viendo cómo atendían. El sistema tenía que seguir el orden natural de una venta, sin pasos de más mientras hay un cliente esperando.
  - title: Prototipo navegable
    text: Diseñamos las pantallas principales y las probamos con el personal antes de programar. Varias ideas cambiaron en esta etapa, cuando cambiarlas era barato.
  - title: Construcción por módulos
    text: Pacientes y ventas primero, luego laboratorio, inventario y caja. Cada módulo se usó en el local antes de empezar el siguiente.
  - title: Datos y permisos en Supabase
    text: Modelamos la base en PostgreSQL con políticas de seguridad por rol, de modo que cada usuario accede solo a lo que le corresponde.
  - title: Puesta en marcha
    text: Migramos los datos existentes, capacitamos al equipo y ajustamos detalles durante las primeras semanas de uso real.
decisions:
  - title: Supabase como backend
    text: Autenticación, base de datos y permisos resueltos sin mantener servidores. Para un negocio pequeño, menos infraestructura significa menos cosas que pueden fallar.
  - title: Una interfaz de pocos clics
    text: Íconos grandes y flujos guiados paso a paso. Quien atiende no debería necesitar un manual para completar una venta.
  - title: La venta mueve todo lo demás
    text: Una venta genera la orden de laboratorio, descuenta inventario y alimenta la caja. Así el cierre del día es una consulta y no una tarea.
  - title: Seguridad en la base de datos
    text: Las reglas de acceso se aplican con políticas por fila en PostgreSQL, por lo que no dependen de que el frontend las respete.
highlights:
  - Ventas, inventario y caja en una sola herramienta
  - Historial de cada paciente disponible en segundos
  - Cierre de caja generado a partir de las ventas registradas
  - Sin servidores propios que administrar
learnings:
  - Probar un prototipo con usuarios reales ahorra semanas de desarrollo
  - En un mostrador, cada clic de más se siente
  - Un backend gestionado deja el tiempo para lo que el negocio sí nota
---

Algora nació de una necesidad concreta de Veo Optics: dejar de repartir la operación entre cuadernos, hojas de cálculo y memoria. Nos encargamos del diseño, del frontend en React y de modelar la base de datos y el backend sobre Supabase.
