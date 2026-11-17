import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

/**
 * Proyectos: un archivo .md por proyecto en src/content/projects.
 * El nombre del archivo es la URL (/proyectos/<archivo>/).
 */
const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/projects' }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      /** Frase corta que se muestra en listados */
      summary: z.string(),
      client: z.string(),
      /** Sector del cliente: "Automotriz", "Salud visual", etc. */
      industry: z.string(),
      year: z.number(),
      /** Categoría visible y filtro del listado: "Sitio web", "E-commerce", "CRM / ERP", "Aplicación web", "Automatización e IA" */
      category: z.string(),
      /** Slugs de los servicios relacionados (ver src/data/services.ts) */
      services: z.array(z.string()).default([]),
      stack: z.array(z.string()),
      /** Imagen de portada (opcional). Sin imagen se genera una portada tipográfica. */
      cover: image().optional(),
      /** Capturas extra para la página del proyecto */
      gallery: z.array(image()).default([]),
      /** Enlaces opcionales */
      url: z.url().optional(),
      /** Datos rápidos del proyecto (opcionales) */
      duration: z.string().optional(),
      team: z.string().optional(),
      status: z.string().optional(),

      /* ---- Caso de estudio: cada bloque es opcional y solo se muestra si tiene contenido ---- */
      /** Cifras grandes del resumen, p. ej. { value: '3', label: 'CRMs conectados' } */
      metrics: z.array(z.object({ value: z.string(), label: z.string() })).default([]),
      problem: z.string().optional(),
      solution: z.string().optional(),
      /** Fases del proyecto, en orden */
      process: z.array(z.object({ title: z.string(), text: z.string() })).default([]),
      /** Decisiones técnicas y por qué */
      decisions: z.array(z.object({ title: z.string(), text: z.string() })).default([]),
      /** Resultados destacados (lista corta) */
      highlights: z.array(z.string()).default([]),
      /** Lo que aprendimos */
      learnings: z.array(z.string()).default([]),
      /** Cita del cliente (opcional) */
      testimonial: z.object({ quote: z.string(), author: z.string(), role: z.string() }).optional(),
      /** Se muestra en la portada */
      featured: z.boolean().default(false),
      /** Orden manual: menor número aparece primero */
      order: z.number().default(99),
      draft: z.boolean().default(false),
    }),
});

export const collections = { projects };
