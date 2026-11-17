/**
 * Filtro por categoría (listado de proyectos).
 * Botones: [data-filter="valor"] dentro de [data-filter-group]; elementos: [data-filter-item="valor"].
 */
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export function initFilter(signal: AbortSignal) {
  document.querySelectorAll<HTMLElement>('[data-filter-group]').forEach((group) => {
    const buttons = Array.from(group.querySelectorAll<HTMLButtonElement>('[data-filter]'));
    const items = Array.from(document.querySelectorAll<HTMLElement>('[data-filter-item]'));
    const empty = document.querySelector<HTMLElement>('[data-filter-empty]');

    const apply = (value: string) => {
      let visible = 0;
      items.forEach((item) => {
        const show = value === 'all' || item.dataset.filterItem === value;
        item.hidden = !show;
        if (show) visible++;
      });
      buttons.forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.filter === value)));
      if (empty) empty.hidden = visible > 0;
      ScrollTrigger.refresh();
    };

    buttons.forEach((b) => b.addEventListener('click', () => apply(b.dataset.filter ?? 'all'), { signal }));
  });
}
