/**
 * Punto de entrada de las interacciones del sitio.
 * Solo coordina el ciclo de vida: cada comportamiento vive en su módulo dentro de ./modules.
 * Se inicializa en cada navegación (astro:page-load) y se limpia antes de cambiar de página.
 */
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';
import { destroyClock, initClock } from './modules/clock';
import { initFilter } from './modules/filter';
import { initForms } from './modules/form';
import { closeMenu, initNav } from './modules/nav';
import { initPointer } from './modules/pointer';
import { runPreloader } from './modules/preloader';
import { initReveals, showEverything } from './modules/reveal';
import { destroyScroll, initScroll, scrollToTarget } from './modules/scroll';

gsap.registerPlugin(ScrollTrigger, SplitText);

let ctx: gsap.Context | null = null;
let abort: AbortController | null = null;

function init() {
  const reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
  abort = new AbortController();
  const { signal } = abort;

  initScroll(signal, reduced, closeMenu);
  initClock();
  initForms(signal);
  initFilter(signal);

  // Al abrir o cerrar un acordeón cambia la altura de la página: recalcular los disparadores de scroll
  document.addEventListener('toggle', () => window.setTimeout(() => !signal.aborted && ScrollTrigger.refresh(), 650), {
    signal,
    capture: true,
  });

  const start = () => {
    ctx = gsap.context(() => {
      initNav(signal);
      if (reduced) showEverything();
      else initReveals();
    });
    initPointer(signal, reduced);
    // Si se llegó con un ancla en la URL, ir a ella una vez medido el layout
    const target = location.hash ? document.querySelector<HTMLElement>(location.hash) : null;
    if (target) requestAnimationFrame(() => scrollToTarget(target, true));
    ScrollTrigger.refresh();
  };

  // Esperar las fuentes para que los títulos se partan en líneas correctamente
  const fontsReady = document.fonts?.ready ?? Promise.resolve();
  const timeout = new Promise((r) => setTimeout(r, 1500));
  Promise.race([fontsReady, timeout]).then(() => {
    if (signal.aborted) return;
    if (reduced) {
      document.documentElement.classList.remove('is-loading');
      start();
    } else {
      runPreloader(start);
    }
  });
}

function destroy() {
  abort?.abort();
  abort = null;
  destroyClock();
  ctx?.revert();
  ctx = null;
  ScrollTrigger.getAll().forEach((t) => t.kill());
  destroyScroll();
  document.documentElement.classList.remove('menu-open');
}

document.addEventListener('astro:page-load', init);
document.addEventListener('astro:before-swap', destroy);
