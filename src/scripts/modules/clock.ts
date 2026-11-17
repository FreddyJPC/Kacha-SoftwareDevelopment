/** Hora local en vivo para los elementos con data-clock="<zona horaria>". */
let timer: number | undefined;

export function initClock() {
  const els = Array.from(document.querySelectorAll<HTMLElement>('[data-clock]'));
  if (!els.length) return;
  const fmt = new Intl.DateTimeFormat('es-EC', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
    timeZone: els[0].dataset.clock || 'America/Guayaquil',
  });
  const update = () => {
    const t = fmt.format(new Date());
    els.forEach((el) => (el.textContent = t));
  };
  update();
  timer = window.setInterval(update, 1000);
}

export function destroyClock() {
  window.clearInterval(timer);
}
