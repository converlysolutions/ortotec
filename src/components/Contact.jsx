import { useState } from 'react'
import { CONTACTO, PRODUCTOS } from '../data'
import Reveal from './Reveal'

export default function Contact() {
  const [sent, setSent] = useState(false)

  const onSubmit = (e) => {
    e.preventDefault()
    // Demo: sin backend. Conectar a un endpoint o servicio de formularios.
    setSent(true)
    e.currentTarget.reset()
  }

  return (
    <section className="section" id="contacto" style={{ background: 'var(--paper-2)' }}>
      <div className="wrap">
        <Reveal>
          <div className="contact">
            <div>
              <p className="eyebrow">Trabajar con nosotros</p>
              <h2>Contacto</h2>
              <p className="lead" style={{ marginTop: 24 }}>
                Atendemos a clínicas y ortodoncistas. Si trabaja con nosotros por
                primera vez, cuéntenos qué tipo de aparatología necesita y le
                enviamos tarifas, plazos y las condiciones de recogida.
              </p>

              <div className="info">
                <div className="info__row">
                  <small>Teléfono</small>
                  <a href={`tel:${CONTACTO.telefonoHref}`}>{CONTACTO.telefono}</a>
                </div>
                <div className="info__row">
                  <small>Email</small>
                  <a href={`mailto:${CONTACTO.email}`}>{CONTACTO.email}</a>
                </div>
                <div className="info__row">
                  <small>Laboratorio</small>
                  <p>{CONTACTO.direccion}</p>
                </div>
                <div className="info__row">
                  <small>Horario</small>
                  <p>{CONTACTO.horario}</p>
                </div>
              </div>

              <div className="hero__actions">
                <a
                  className="btn"
                  href={`https://wa.me/${CONTACTO.whatsapp}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  Escribir por WhatsApp
                </a>
              </div>
            </div>

            <form className="form" onSubmit={onSubmit}>
              <div className="two">
                <div className="field">
                  <label htmlFor="nombre">Nombre y apellidos</label>
                  <input id="nombre" name="nombre" required autoComplete="name" />
                </div>
                <div className="field">
                  <label htmlFor="clinica">Clínica</label>
                  <input id="clinica" name="clinica" autoComplete="organization" />
                </div>
              </div>
              <div className="two">
                <div className="field">
                  <label htmlFor="email">Email</label>
                  <input id="email" name="email" type="email" required autoComplete="email" />
                </div>
                <div className="field">
                  <label htmlFor="tel">Teléfono</label>
                  <input id="tel" name="tel" type="tel" autoComplete="tel" />
                </div>
              </div>
              <div className="field">
                <label htmlFor="tipo">Tipo de aparatología</label>
                <select id="tipo" name="tipo" defaultValue="">
                  <option value="" disabled>
                    Seleccione una opción
                  </option>
                  {PRODUCTOS.map((p) => (
                    <option key={p.id} value={p.nombre}>
                      {p.nombre}
                    </option>
                  ))}
                  <option value="otros">Otros / consulta general</option>
                </select>
              </div>
              <div className="field">
                <label htmlFor="msg">Mensaje</label>
                <textarea id="msg" name="msg" placeholder="Cuéntenos brevemente el caso…" />
              </div>
              <button className="btn" type="submit">
                Enviar caso
              </button>
              {sent && (
                <p className="form__ok">
                  Gracias. Hemos recibido su solicitud y le responderemos en
                  menos de 24 horas laborables.
                </p>
              )}
              <p className="legal">
                Al enviar acepta el tratamiento de sus datos para responder a su
                consulta. Puede ejercer sus derechos escribiendo a{' '}
                {CONTACTO.email}.
              </p>
            </form>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
