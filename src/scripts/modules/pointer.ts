/** Interacciones de puntero (solo con mouse): botones magnéticos, cursor con etiqueta, foco de luz y brillo del hero. */
import gsap from 'gsap';

const $$ = (sel: string) => Array.from(document.querySelectorAll<HTMLElement>(sel));

export function initPointer(signal: AbortSignal, reduced: boolean) {
  if (!matchMedia('(hover: hover) and (pointer: fine)').matches) return;

  // Botones magnéticos
  $$('[data-magnetic]').forEach((el) => {
    const x = gsap.quickTo(el, 'x', { duration: 0.6, ease: 'power3.out' });
    const y = gsap.quickTo(el, 'y', { duration: 0.6, ease: 'power3.out' });
    el.addEventListener(
      'pointermove',
      (e) => {
        const r = el.getBoundingClientRect();
        x((e.clientX - (r.left + r.width / 2)) * 0.28);
        y((e.clientY - (r.top + r.height / 2)) * 0.28);
      },
      { signal },
    );
    el.addEventListener(
      'pointerleave',
      () => {
        x(0);
        y(0);
      },
      { signal },
    );
  });

  // Cursor con etiqueta
  const cursor = document.querySelector<HTMLElement>('[data-cursor-el]');
  if (cursor) {
    const label = cursor.querySelector<HTMLElement>('[data-cursor-label]');
    const cx = gsap.quickTo(cursor, 'x', { duration: 0.45, ease: 'power3.out' });
    const cy = gsap.quickTo(cursor, 'y', { duration: 0.45, ease: 'power3.out' });
    gsap.set(cursor, { x: -200, y: -200 });
    cursor.classList.remove('is-active');
    window.addEventListener(
      'pointermove',
      (e) => {
        cx(e.clientX);
        cy(e.clientY);
      },
      { signal, passive: true },
    );
    $$('[data-cursor]').forEach((el) => {
      el.addEventListener(
        'pointerenter',
        () => {
          if (label) label.textContent = el.dataset.cursor || '';
          cursor.classList.add('is-active');
        },
        { signal },
      );
      el.addEventListener('pointerleave', () => cursor.classList.remove('is-active'), { signal });
    });
  }

  // Foco de luz verde que sigue al cursor (herencia del sitio original de Kacha)
  const spot = document.querySelector<HTMLElement>('[data-spotlight]');
  if (spot && !reduced) {
    const sx = gsap.quickTo(spot, 'x', { duration: 0.9, ease: 'power3.out' });
    const sy = gsap.quickTo(spot, 'y', { duration: 0.9, ease: 'power3.out' });
    window.addEventListener(
      'pointermove',
      (e) => {
        spot.classList.add('is-on');
        sx(e.clientX);
        sy(e.clientY);
      },
      { signal, passive: true },
    );
    document.documentElement.addEventListener('pointerleave', () => spot.classList.remove('is-on'), { signal });
  }

  // Tarjetas con brillo que sigue al cursor (data-shine): expone --mx / --my
  $$('[data-shine]').forEach((el) => {
    el.addEventListener(
      'pointermove',
      (e) => {
        const r = el.getBoundingClientRect();
        el.style.setProperty('--mx', `${e.clientX - r.left}px`);
        el.style.setProperty('--my', `${e.clientY - r.top}px`);
      },
      { signal, passive: true },
    );
  });

  // La aurora del hero reacciona al cursor
  const hero = document.querySelector<HTMLElement>('[data-hero]');
  const glow = hero?.querySelector<HTMLElement>('[data-glow]');
  if (hero && glow && !reduced) {
    const gx = gsap.quickTo(glow, 'x', { duration: 1.6, ease: 'power3.out' });
    const gy = gsap.quickTo(glow, 'y', { duration: 1.6, ease: 'power3.out' });
    hero.addEventListener(
      'pointermove',
      (e) => {
        const r = hero.getBoundingClientRect();
        gx(((e.clientX - r.left) / r.width - 0.5) * 140);
        gy(((e.clientY - r.top) / r.height - 0.5) * 90);
      },
      { signal, passive: true },
    );
  }
}
