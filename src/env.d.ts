/// <reference path="../.astro/types.d.ts" />

interface ImportMetaEnv {
  /** URL del proyecto de Supabase donde se guardan los leads del formulario */
  readonly PUBLIC_SUPABASE_URL?: string;
  /** Clave pública (anon) de Supabase */
  readonly PUBLIC_SUPABASE_ANON_KEY?: string;
}
interface ImportMeta {
  readonly env: ImportMetaEnv;
}
