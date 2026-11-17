/** Scroll suave (Lenis) sincronizado con GSAP y enlaces a anclas. */
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

let lenis: Lenis | null = null;
let tick: ((time: number) => void) | null = null;

export const getLenis = () => lenis;

export function scrollToTarget(target: HTMLElement, immediate = false) {
  if (lenis) lenis.scrollTo(target, { offset: -20, duration: 1.4, immediate });
  else target.scrollIntoView({ behavior: 'auto' });
}

export function initScroll(signal: AbortSignal, reduced: boolean, onAnchor?: () => void) {
  if (!reduced) {
    lenis = new Lenis({ lerp: 0.11 });
    lenis.on('scroll', ScrollTrigger.update);
    tick = (time) => lenis?.raf(time * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0);
  }

  // Anclas de la misma página: desplazamiento suave en vez de salto
  document.addEventListener(
    'click',
    (e) => {
      const a = (e.target as Element).closest?.('a[href*="#"]') as HTMLAnchorElement | null;
      if (!a || a.target === '_blank') return;
      const url = new URL(a.href, location.href);
      if (url.origin !== location.origin || url.pathname !== location.pathname || !url.hash) return;
      const target = document.querySelector<HTMLElement>(url.hash);
      if (!target) return;
      e.preventDefault();
      e.stopPropagation();
      onAnchor?.();
      history.pushState(null, '', url.hash);
      scrollToTarget(target);
    },
    { signal, capture: true },
  );
}

export function destroyScroll() {
  if (tick) gsap.ticker.remove(tick);
  tick = null;
  lenis?.destroy();
  lenis = null;
}
