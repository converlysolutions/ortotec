import { CONTACTO, DESCRIPCION, img } from '../data'

/* Iconos en línea: la tarjeta se abre desde un QR, muchas veces con datos
   móviles, así que no se carga ninguna librería de iconos por tres trazos. */
const Icono = {
  whatsapp: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2a8.2 8.2 0 0 1-4.2-1.1l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.4-.7-1.7-.8-.2-.1-.4-.1-.5.1l-.7.9c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.1-.2 0-.4.1-.5l.4-.5.2-.4v-.4l-.7-1.7c-.2-.4-.4-.4-.5-.4h-.5a1 1 0 0 0-.7.3c-.3.3-.9.9-.9 2.1s.9 2.5 1 2.6a9.4 9.4 0 0 0 3.7 3.3c1.4.5 1.7.4 2 .4.4 0 1.4-.5 1.6-1.1.2-.6.2-1.1.1-1.2Z"
      />
    </svg>
  ),
  telefono: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M6.6 3h-.9A2.7 2.7 0 0 0 3 5.8C3 14.2 9.8 21 18.2 21a2.7 2.7 0 0 0 2.8-2.7v-.9a1 1 0 0 0-.7-1l-3.3-1a1 1 0 0 0-1.1.4l-.9 1.3a12.4 12.4 0 0 1-5.1-5.1l1.3-.9a1 1 0 0 0 .4-1.1l-1-3.3a1 1 0 0 0-1-.7Z"
      />
    </svg>
  ),
  web: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="9" fill="none" stroke="currentColor" strokeWidth="1.6" />
      <path
        d="M3 12h18M12 3a15 15 0 0 1 0 18 15 15 0 0 1 0-18Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
      />
    </svg>
  ),
  instagram: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="5" fill="none" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" />
    </svg>
  ),
  facebook: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M14.5 8.5h2.2V5.6h-2.6c-2.4 0-3.8 1.4-3.8 3.9v1.6H8v2.9h2.3V21h3v-7h2.3l.4-2.9h-2.7V9.8c0-.9.3-1.3 1.2-1.3Z"
      />
    </svg>
  ),
}

/* Enlaces vivos de la tarjeta. La web se enlaza en relativo para que
   funcione igual en local (/card/) que publicada (/ortotec/card/). */
const ENLACES = [
  { k: 'web', label: 'Página web', sub: 'Catálogo y contacto', href: '../' },
  { k: 'instagram', label: 'Instagram', sub: '@ortotec_laboratorio.ortodoncia', href: CONTACTO.instagram },
  { k: 'facebook', label: 'Facebook', sub: 'Ortotec Laboratorio de Ortodoncia', href: CONTACTO.facebook },
]

export default function Card() {
  return (
    <main className="tarjeta">
      <article className="tarjeta__panel">
        <div className="tarjeta__logo">
          <img
            src={img('logo-ortotec.jpg')}
            alt="Ortotec, laboratorio de ortodoncia"
            width="589"
            height="188"
          />
        </div>

        <p className="tarjeta__claim">
          {CONTACTO.claim} · {CONTACTO.ciudad}
        </p>
        <p className="tarjeta__desc">{DESCRIPCION}</p>

        {/* Los dos botones de contacto directo quedan inactivos hasta que
            el cliente confirme el número. `disabled` los saca además del
            recorrido del teclado, para que no parezcan pulsables. */}
        <div className="tarjeta__acciones">
          <button className="accion accion--wa" type="button" disabled>
            {Icono.whatsapp}
            <span>WhatsApp</span>
          </button>
          <button className="accion" type="button" disabled>
            {Icono.telefono}
            <span>Llamar</span>
          </button>
        </div>
        <p className="tarjeta__nota">Contacto directo disponible próximamente</p>

        <nav className="enlaces" aria-label="Enlaces de Ortotec">
          {ENLACES.map((e) => (
            <a
              key={e.k}
              href={e.href}
              target={e.k === 'web' ? undefined : '_blank'}
              rel={e.k === 'web' ? undefined : 'noreferrer'}
            >
              <span className="enlaces__ico">{Icono[e.k]}</span>
              <span className="enlaces__txt">
                <b>{e.label}</b>
                <small>{e.sub}</small>
              </span>
              <svg className="enlaces__flecha" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M9 5l7 7-7 7" fill="none" stroke="currentColor" strokeWidth="1.6" />
              </svg>
            </a>
          ))}
        </nav>

        <p className="tarjeta__dir">{CONTACTO.direccion}</p>
      </article>
    </main>
  )
}
