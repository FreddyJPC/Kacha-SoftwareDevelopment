/**
 * Formulario de contacto. Guarda el lead en Supabase (tabla `leads`: nombre, email, telefono, idea)
 * y ofrece WhatsApp como alternativa. Los datos extra (servicio, presupuesto, idioma) se incluyen
 * dentro del campo `idea`, así no hace falta cambiar la tabla.
 * Supabase se carga solo al enviar: no pesa en la carga inicial de la página.
 * Los textos visibles vienen del HTML (data-*), así el módulo funciona igual en cualquier idioma.
 */
type Status = 'idle' | 'sending' | 'success' | 'error';

function collect(form: HTMLFormElement) {
  const data = new FormData(form);
  const get = (k: string) => String(data.get(k) ?? '').trim();
  const servicios = data.getAll('servicio').map(String).join(', ');
  const presupuesto = get('presupuesto');
  const extras = [
    servicios && `Servicio: ${servicios}`,
    presupuesto && `Presupuesto: ${presupuesto}`,
    form.dataset.lang && form.dataset.lang !== 'es' && `Idioma: ${form.dataset.lang.toUpperCase()}`,
  ]
    .filter(Boolean)
    .join(' | ');
  const idea = [get('idea'), extras && `— ${extras}`].filter(Boolean).join('\n\n');
  return { nombre: get('nombre'), email: get('email'), telefono: get('telefono'), idea, honey: get('empresa_web') };
}

function setStatus(form: HTMLFormElement, status: Status) {
  form.dataset.status = status;
  const btn = form.querySelector<HTMLButtonElement>('[type="submit"]');
  if (btn) btn.disabled = status === 'sending';
  form.querySelectorAll<HTMLElement>('[data-form-msg]').forEach((el) => (el.hidden = el.dataset.formMsg !== status));
}

async function save(lead: { nombre: string; email: string; telefono: string; idea: string }) {
  const url = import.meta.env.PUBLIC_SUPABASE_URL;
  const key = import.meta.env.PUBLIC_SUPABASE_ANON_KEY;
  if (!url || !key) throw new Error('Supabase no está configurado (faltan PUBLIC_SUPABASE_URL / PUBLIC_SUPABASE_ANON_KEY)');
  const { createClient } = await import('@supabase/supabase-js');
  const { error } = await createClient(url, key).from('leads').insert([lead]);
  if (error) throw error;
}

export function initForms(signal: AbortSignal) {
  document.querySelectorAll<HTMLFormElement>('[data-lead-form]').forEach((form) => {
    // Preselección desde la URL: /contacto/?service=<id>&plan=<nombre>
    const params = new URLSearchParams(location.search);
    const service = params.get('service');
    if (service) {
      const box = form.querySelector<HTMLInputElement>(`input[name="servicio"][data-id="${CSS.escape(service)}"]`);
      if (box) box.checked = true;
    }
    const plan = params.get('plan');
    const idea = form.querySelector<HTMLTextAreaElement>('textarea[name="idea"]');
    if (plan && idea && !idea.value) idea.value = (form.dataset.planText ?? '{plan}').replace('{plan}', plan);

    form.addEventListener(
      'submit',
      async (e) => {
        e.preventDefault();
        const { honey, ...lead } = collect(form);
        if (honey) return setStatus(form, 'success'); // bot: se ignora en silencio
        setStatus(form, 'sending');
        try {
          await save(lead);
          form.reset();
          setStatus(form, 'success');
        } catch (err) {
          console.error('No se pudo enviar el formulario:', err);
          setStatus(form, 'error');
        }
      },
      { signal },
    );

    // Alternativa: abrir WhatsApp con el mensaje ya escrito
    form.querySelectorAll<HTMLAnchorElement>('[data-form-whatsapp]').forEach((link) => {
      link.addEventListener(
        'click',
        () => {
          const data = new FormData(form);
          const name = String(data.get('nombre') ?? '').trim();
          const text = [`${form.dataset.greeting ?? 'Hola Kacha, soy'} ${name || '…'}.`, String(data.get('idea') ?? '').trim()].filter(Boolean).join('\n');
          const base = link.dataset.formWhatsapp ?? link.href;
          link.href = `${base}?text=${encodeURIComponent(text)}`;
        },
        { signal },
      );
    });
  });
}
