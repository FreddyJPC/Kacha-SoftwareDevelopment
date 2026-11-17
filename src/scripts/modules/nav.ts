/** Barra de navegación: menú móvil y ocultar/mostrar según la dirección del scroll. */
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { getLenis } from './scroll';

const root = document.documentElement;

export function closeMenu() {
  if (!root.classList.contains('menu-open')) return;
  root.classList.remove('menu-open');
  const toggle = document.querySelector<HTMLElement>('[data-menu-toggle]');
  toggle?.setAttribute('aria-expanded', 'false');
  toggle?.setAttribute('aria-label', toggle.dataset.labelOpen ?? '');
  getLenis()?.start();
}

export function initNav(signal: AbortSignal) {
  const nav = document.querySelector<HTMLElement>('[data-nav]');
  const toggle = document.querySelector<HTMLElement>('[data-menu-toggle]');

  toggle?.addEventListener(
    'click',
    () => {
      const open = root.classList.toggle('menu-open');
      toggle.setAttribute('aria-expanded', String(open));
      toggle.setAttribute('aria-label', (open ? toggle.dataset.labelClose : toggle.dataset.labelOpen) ?? '');
      open ? getLenis()?.stop() : getLenis()?.start();
    },
    { signal },
  );
  document.querySelectorAll('[data-menu] a, [data-menu-close]').forEach((a) => a.addEventListener('click', closeMenu, { signal }));
  document.addEventListener('keydown', (e) => e.key === 'Escape' && closeMenu(), { signal });

  if (nav) {
    root.classList.toggle('is-scrolled', window.scrollY > 500);
    ScrollTrigger.create({
      start: 0,
      end: 'max',
      onUpdate(self) {
        const hide = self.direction === 1 && self.scroll() > 400 && !root.classList.contains('menu-open');
        nav.classList.toggle('is-hidden', hide);
        root.classList.toggle('is-scrolled', self.scroll() > 500);
      },
    });
  }
}
