# Kacha — Software Agency

Sitio bilingüe (español e inglés) de la agencia, construido con **Astro 7**, **Tailwind CSS 4**, **GSAP** y **Lenis**.
Es estático: se despliega en Vercel (o cualquier hosting) y el formulario guarda los contactos en **Supabase**.

## Comandos

| Comando           | Acción                                          |
| :---------------- | :---------------------------------------------- |
| `npm install`     | Instala dependencias                            |
| `npm run dev`     | Servidor local en `localhost:4321`              |
| `npm run build`   | Genera el sitio en `./dist/`                    |
| `npm run preview` | Sirve el build para revisarlo antes de publicar |
| `npm run check`   | Verifica tipos y errores en todo el proyecto    |

Requiere Node 22.23.4 o superior (lo exige Astro 7).

## Variables de entorno

El formulario de contacto inserta cada lead en la tabla `leads` de Supabase (columnas `nombre`, `email`, `telefono`, `idea`).
Configúralas en Vercel o en un archivo `.env` local (no se sube al repositorio):

```env
PUBLIC_SUPABASE_URL=https://xxxx.supabase.co
PUBLIC_SUPABASE_ANON_KEY=...
```

El servicio elegido, el presupuesto y el idioma del visitante se añaden al final del campo `idea`, así la tabla no cambia.
Si Supabase no está configurado, el formulario muestra un error y ofrece WhatsApp como alternativa.

## Rutas

El español vive en la raíz y el inglés bajo `/en/`, con segmentos traducidos.

| Español                  | Inglés                         | Página                       |
| :----------------------- | :----------------------------- | :--------------------------- |
| `/`                      | `/en/`                         | Portada                      |
| `/servicios/`            | `/en/services/`                | Listado de servicios         |
| `/servicios/<slug>/`     | `/en/services/<slug>/`         | Detalle de un servicio       |
| `/proyectos/`            | `/en/projects/`                | Listado con filtro           |
| `/proyectos/<slug>/`     | `/en/projects/<slug>/`         | Caso de estudio              |
| `/precios/`              | `/en/pricing/`                 | Planes, mensualidades, condiciones |
| `/nosotros/`             | `/en/about/`                   | Historia, valores, equipo, stack |
| `/contacto/`             | `/en/contact/`                 | Formulario + FAQ             |
| `/privacidad/`           | `/en/privacy/`                 | Política de privacidad       |

La página de contacto acepta `?service=<id>` y `?plan=<nombre>` para preseleccionar el formulario (los botones de servicios y planes ya lo usan).

## Estructura

```text
src/
├── assets/                Imágenes (se optimizan solas al compilar)
│   ├── brand/             Ilustración de la marca
│   ├── clients/           Logos de la cinta de clientes
│   ├── projects/          Portadas y capturas de proyectos (raw/ = capturas originales)
│   └── team/              Fotos del equipo
├── components/            Secciones y piezas de UI
│   └── project/           Bloques del caso de estudio
├── content/projects/
│   ├── es/                Un .md por proyecto, en español
│   └── en/                El mismo archivo (mismo nombre), en inglés
├── data/                  Contenido por idioma
│   ├── site.ts            Contacto y redes (no depende del idioma)
│   ├── services.ts        Servicios (generan sus propias páginas)
│   ├── pricing.ts         Planes, mensualidades, factores y condiciones
│   ├── process.ts         Pasos del proceso (notas de colores)
│   ├── about.ts           Manifiesto, cifras, historia, valores, equipo
│   ├── faq.ts             Preguntas frecuentes
│   ├── testimonials.ts    Testimonios (PROVISIONALES)
│   ├── stack.ts           Tecnologías
│   └── clients.ts         Logos de clientes
├── i18n/
│   ├── config.ts          Idiomas, rutas traducidas y helpers de URLs
│   ├── alternates.ts      Equivalente de una página en el otro idioma
│   └── ui.ts              Textos de interfaz (botones, títulos, etiquetas)
├── layouts/               Base (head, SEO, hreflang) y Site (nav, footer)
├── lib/                   Consultas de proyectos y getStaticPaths compartidos
├── pages/                 Archivos de ruta mínimos: solo eligen la vista
│   └── en/                Las mismas rutas en inglés
├── views/                 Páginas completas, compartidas por ambos idiomas
├── scripts/
│   ├── app.ts             Ciclo de vida (inicia y limpia en cada navegación)
│   └── modules/           scroll, nav, reveal, pointer, preloader, form, filter
└── styles/global.css      Tokens de diseño y componentes CSS
```

Cada componente deduce el idioma de la URL (`getLang(Astro)`) y toma sus textos de `src/i18n/ui.ts` y de `src/data`.

## Cómo actualizar el contenido

> Todo el contenido existe en dos idiomas. Al editar algo en `es`, edita también su par en `en`.
> Si falta una clave de interfaz en un idioma, `npm run check` lo señala.

### Agregar un proyecto

1. Copia las capturas a `src/assets/projects/` (portada recomendada: 1600 × 1200 px).
2. Crea el mismo archivo en `src/content/projects/es/` y `src/content/projects/en/`. El nombre del archivo es la URL:

```md
---
title: Nombre del proyecto
summary: Una frase que explique qué es.
client: Nombre del cliente
industry: Sector
year: 2026
category: Sitio web        # también es el filtro del listado
services: [desarrollo-web] # ids de src/data/services.ts
stack: [Astro, Tailwind]

# Todo lo siguiente es opcional: cada bloque solo aparece si tiene contenido
duration: 4 semanas
team: Diseño y desarrollo
status: En producción
cover: ../../../assets/projects/mi-proyecto.png
gallery:
  - ../../../assets/projects/mi-proyecto-2.png
url: https://ejemplo.com
metrics:
  - { value: '3', label: 'Semanas del brief a la entrega' }
problem: Qué problema había.
solution: Cómo se resolvió.
process:
  - { title: Fase, text: Qué se hizo. }
decisions:
  - { title: Decisión, text: Por qué se tomó. }
highlights: [Resultado destacado]
learnings: [Algo que aprendimos]
testimonial: { quote: 'Cita del cliente', author: Nombre, role: Cargo }
featured: true   # aparece en la portada
order: 1         # menor número = aparece primero
draft: false     # true lo oculta
---

Texto libre en Markdown (sección "Contexto").
```

Si no hay `cover`, se genera una portada tipográfica con el nombre del cliente.

### Agregar o cambiar un servicio

Edita `src/data/services.ts`. Cada servicio necesita un `id` igual en ambos idiomas y un `slug` (la URL) que puede traducirse.
Su página de detalle se crea sola, y los proyectos con ese `id` en `services` aparecen como casos relacionados.

### Cambiar precios

Todo está en `src/data/pricing.ts` (planes, mensualidades, nota y condiciones). Los precios de partida de cada servicio
están en `src/data/services.ts` (`from`) y las cifras de la FAQ en `src/data/faq.ts`.

### Cambiar textos de botones, títulos o etiquetas

Están en `src/i18n/ui.ts`. Los títulos con una palabra en serif itálica se escriben como `[antes, acento, después]`.

### Agregar un logo de cliente

Copia el PNG a `src/assets/clients/` y añádelo en `src/data/clients.ts`.

### Contenido provisional

Revisa y reemplaza antes de publicar: los **testimonios** (`testimonials.ts`), las **cifras** (`about.ts` → `stats`),
el **correo** de la agencia (`site.ts`), la **política de privacidad** (`views/Privacy.astro`) y los proyectos con portada
ilustrada (KsiNuevos, FAG Motors, SkyTrack y Autonova): cuando tengas capturas reales, reemplaza su `cover`.

### Agregar un idioma

Añádelo en `src/i18n/config.ts` (`locales`, `localeMeta`, `routes`), agrega su diccionario en `ui.ts`, sus listas en `src/data/`,
su carpeta en `src/content/projects/` y sus archivos de ruta en `src/pages/<idioma>/` (copia los de `src/pages/en/`).

### Colores y tipografías

Los tokens están al inicio de `src/styles/global.css` (`@theme`). Paleta principal: verde `#00E599`, negro y blanco,
ampliada con verdes profundos, menta, un azul de apoyo y los pasteles de las notas del proceso.
Los bloques usan `theme-dark`, `theme-light` o `theme-accent` para alternar fondos.

Señas visuales propias de Kacha (para mantener la coherencia al agregar secciones):

- Títulos con una palabra destacada en serif itálica verde (`.accent`), sin punto final.
- Insignias en píldora con la estrella (`.label-star`) sobre cada título, y números en casillas (`.num`).
- Fondos con trama de puntos (`.dots`) y halos verde/azul (`.halo-green`, `.halo-blue`).
- Tarjetas redondeadas para servicios, proyectos, cifras y listas; listas con checks (`CheckList`) y procesos como línea de tiempo (`Timeline`).
- Botones que se rellenan desde abajo con flecha que se reemplaza.

## Animaciones

Se activan con atributos en el HTML (ver `src/scripts/modules/reveal.ts` y `pointer.ts`):

| Atributo            | Efecto                                       |
| :------------------ | :------------------------------------------- |
| `data-split`        | Título que entra línea por línea             |
| `data-mark`         | Dibuja el subrayado verde de los `.mark` al aparecer (en `about.ts` se escriben entre `*asteriscos*`) |
| `data-progress`     | Línea de tiempo que se rellena con el scroll |
| `data-reveal`       | Aparece con un fade hacia arriba             |
| `data-reveal-group` | Los hijos aparecen en cascada                |
| `data-count="12"`   | Número que cuenta desde 0                    |
| `data-parallax="8"` | Desplazamiento ligado al scroll              |
| `data-magnetic`     | El elemento sigue ligeramente al cursor      |
| `data-cursor="Ver"` | Muestra una píldora verde con ese texto junto al cursor |
| `data-shine`        | Brillo que sigue al cursor dentro del bloque |

Todas se desactivan con "reducir movimiento", y el contenido es visible aunque no cargue JavaScript.
