/** Pantalla de carga con contador. Solo aparece en la primera visita de la sesión. */
import gsap from 'gsap';

export function runPreloader(onDone: () => void) {
  const root = document.documentElement;
  const el = document.querySelector<HTMLElement>('[data-preloader]');
  if (!root.classList.contains('is-loading') || !el) {
    // Páginas sin preloader (p. ej. la selección de idioma): no bloquear el scroll
    root.classList.remove('is-loading');
    return onDone();
  }

  const num = el.querySelector<HTMLElement>('[data-preloader-count]');
  const bar = el.querySelector<HTMLElement>('[data-preloader-bar]');
  const state = { v: 0 };
  try {
    sessionStorage.setItem('kacha-visited', '1');
  } catch {}

  gsap
    .timeline({ defaults: { ease: 'power3.inOut' } })
    .to(state, {
      v: 100,
      duration: 1.15,
      onUpdate: () => num && (num.textContent = String(Math.round(state.v)).padStart(3, '0')),
    })
    .to(bar, { scaleX: 1, duration: 1.15 }, 0)
    .add(() => {
      root.classList.remove('is-loading');
      el.style.display = 'flex';
      onDone();
    })
    .to(el, { yPercent: -100, duration: 0.9, ease: 'expo.inOut' })
    .set(el, { display: 'none' });
}
