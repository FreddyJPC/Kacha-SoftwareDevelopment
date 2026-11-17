/** Utilidades de texto. */

/**
 * Divide un texto en partes normales y destacadas: lo que va entre *asteriscos* se marca.
 * splitMarks('Hola *mundo*') → [{ text: 'Hola ', mark: false }, { text: 'mundo', mark: true }]
 */
export function splitMarks(text: string): { text: string; mark: boolean }[] {
  return text
    .split(/(\*[^*]+\*)/g)
    .filter(Boolean)
    .map((part) => (part.startsWith('*') && part.endsWith('*') ? { text: part.slice(1, -1), mark: true } : { text: part, mark: false }));
}
