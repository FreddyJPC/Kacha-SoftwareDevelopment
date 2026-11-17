/** Pantalla de carga. Solo aparece en la primera visita de la sesión. */
import gsap from 'gsap';

export function runPreloader(onDone: () => void) {
  const root = document.documentElement;
  const el = document.querySelector<HTMLElement>('[data-preloader]');
  if (!root.classList.contains('is-loading') || !el) {
    root.classList.remove('is-loading');
    return onDone();
  }

  const num = el.querySelector<HTMLElement>('[data-preloader-count]');
  const bar = el.querySelector<HTMLElement>('[data-preloader-bar]');
  const star = el.querySelector<HTMLElement>('[data-preloader-star]');
  const state = { v: 0 };
  try {
    sessionStorage.setItem('kacha-visited', '1');
  } catch {}

  gsap
    .timeline({ defaults: { ease: 'power3.inOut' } })
    .to(state, { v: 100, duration: 1.1, onUpdate: () => num && (num.textContent = String(Math.round(state.v))) })
    .to(bar, { scaleX: 1, duration: 1.1 }, 0)
    // La estrella crece hasta cubrir la pantalla y el panel se desvanece
    .to(star, { scale: 46, rotate: 120, duration: 0.85, ease: 'expo.in' })
    .add(() => {
      root.classList.remove('is-loading');
      el.style.display = 'flex';
      onDone();
    })
    .to(el, { autoAlpha: 0, duration: 0.45, ease: 'power2.out' })
    .set(el, { display: 'none' });
}
