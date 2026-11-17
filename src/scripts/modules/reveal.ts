/** Animaciones de entrada y ligadas al scroll. Se activan con atributos data-* en el HTML. */
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';

const EASE = 'expo.out';
const $$ = (sel: string) => Array.from(document.querySelectorAll<HTMLElement>(sel));

/** Lo que está en la cabecera de la página se anima al cargar, sin esperar al scroll */
const inHero = (el: Element) => !!el.closest('[data-hero], [data-intro]');

/** Sin animaciones (reducir movimiento): solo se muestra todo */
export function showEverything() {
  $$('[data-split],[data-reveal],[data-reveal-group] > *').forEach((el) => (el.style.visibility = 'visible'));
  $$('[data-mark]').forEach((el) => el.classList.add('is-marked'));
  $$('[data-progress]').forEach((el) => el.style.setProperty('--progress', '1'));
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

  // Subrayado tipo marcador (.mark) que se dibuja al entrar en pantalla
  $$('[data-mark]').forEach((el) => {
    ScrollTrigger.create({ trigger: el, start: 'top 85%', once: true, onEnter: () => el.classList.add('is-marked') });
  });

  // Líneas de tiempo: la línea se rellena con el scroll
  $$('[data-progress]').forEach((el) => {
    gsap.fromTo(
      el,
      { '--progress': 0 },
      { '--progress': 1, ease: 'none', scrollTrigger: { trigger: el, start: 'top 70%', end: 'bottom 60%', scrub: 0.4 } },
    );
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
