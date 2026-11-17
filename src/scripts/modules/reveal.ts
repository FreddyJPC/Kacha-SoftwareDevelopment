/** Animaciones de entrada y ligadas al scroll. Se activan con atributos data-* en el HTML. */
import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText';

const EASE = 'expo.out';
const $$ = (sel: string) => Array.from(document.querySelectorAll<HTMLElement>(sel));

/** Lo que está en la cabecera de la página se anima al cargar, sin esperar al scroll */
const inHero = (el: Element) => !!el.closest('[data-hero], [data-intro]');

/** Sin animaciones (reducir movimiento): solo se muestra todo */
export function showEverything() {
  $$('[data-split],[data-reveal],[data-reveal-group] > *').forEach((el) => (el.style.visibility = 'visible'));
}

export function initReveals() {
  // Títulos línea por línea
  $$('[data-split]').forEach((el) => {
    const delay = Number(el.dataset.delay ?? 0);
    SplitText.create(el, {
      type: 'lines',
      mask: 'lines',
      aria: 'none', // el texto sigue en el DOM tal cual: no hace falta duplicarlo en aria-label
      autoSplit: true,
      onSplit(self) {
        gsap.set(el, { visibility: 'visible' });
        return gsap.from(self.lines, {
          yPercent: 112,
          duration: 1.15,
          ease: EASE,
          stagger: 0.085,
          delay,
          scrollTrigger: inHero(el) ? undefined : { trigger: el, start: 'top 92%', once: true },
        });
      },
    });
  });

  // Elementos sueltos
  $$('[data-reveal]').forEach((el) => {
    gsap.set(el, { visibility: 'visible' });
    gsap.from(el, {
      y: 28,
      autoAlpha: 0,
      duration: 1.1,
      ease: EASE,
      delay: Number(el.dataset.delay ?? 0),
      scrollTrigger: inHero(el) ? undefined : { trigger: el, start: 'top 92%', once: true },
    });
  });

  // Grupos en cascada
  $$('[data-reveal-group]').forEach((group) => {
    const items = Array.from(group.children) as HTMLElement[];
    gsap.set(items, { visibility: 'visible' });
    gsap.from(items, {
      y: 36,
      autoAlpha: 0,
      duration: 1.1,
      ease: EASE,
      stagger: 0.09,
      delay: Number(group.dataset.delay ?? 0),
      scrollTrigger: inHero(group) ? undefined : { trigger: group, start: 'top 88%', once: true },
    });
  });

  // Párrafo que se ilumina palabra por palabra
  $$('[data-words]').forEach((el) => {
    SplitText.create(el, {
      type: 'words',
      aria: 'none',
      autoSplit: true,
      onSplit(self) {
        return gsap.fromTo(
          self.words,
          { opacity: 0.16 },
          {
            opacity: 1,
            ease: 'none',
            stagger: 0.08,
            // Sin render inmediato: el texto queda legible hasta que entra en pantalla
            immediateRender: false,
            scrollTrigger: { trigger: el, start: 'top bottom', end: 'bottom 55%', scrub: 0.6 },
          },
        );
      },
    });
  });

  // Contadores
  $$('[data-count]').forEach((el) => {
    const end = Number(el.dataset.count);
    const state = { v: 0 };
    el.textContent = '0';
    gsap.to(state, {
      v: end,
      duration: 1.8,
      ease: 'power3.out',
      onUpdate: () => (el.textContent = String(Math.round(state.v))),
      scrollTrigger: { trigger: el, start: 'top 92%', once: true },
    });
  });

  // Parallax
  $$('[data-parallax]').forEach((el) => {
    const amount = Number(el.dataset.parallax || 10);
    gsap.fromTo(
      el,
      { yPercent: -amount },
      {
        yPercent: amount,
        ease: 'none',
        scrollTrigger: { trigger: el.parentElement, start: 'top bottom', end: 'bottom top', scrub: true },
      },
    );
  });

  // El hero se encoge ligeramente al salir
  const hero = document.querySelector<HTMLElement>('[data-hero]');
  if (hero) {
    gsap.to(hero, {
      scale: 0.94,
      opacity: 0.35,
      ease: 'none',
      scrollTrigger: { trigger: hero, start: 'top top', end: 'bottom top', scrub: true },
    });
  }

  // Nombre gigante del footer
  const mark = document.querySelector<HTMLElement>('[data-wordmark]');
  if (mark) {
    gsap.from(mark, {
      yPercent: 45,
      ease: 'none',
      scrollTrigger: { trigger: mark, start: 'top bottom', end: 'bottom bottom', scrub: true },
    });
  }
}
