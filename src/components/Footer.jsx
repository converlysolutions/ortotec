import { CONTACTO, PRODUCTOS } from '../data'
import Logo from './Logo'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer__top">
          <div>
            <Logo light />
            <p style={{ marginTop: 20 }}>
              Laboratorio de ortodoncia en {CONTACTO.ciudad}. Aparatología fija,
              removible y flujo digital para clínicas y ortodoncistas.
            </p>
            <div className="social" style={{ marginTop: 26 }}>
              <a href={CONTACTO.instagram} target="_blank" rel="noreferrer" aria-label="Instagram">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="1.6" />
                  <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.6" />
                  <circle cx="17.5" cy="6.5" r="1.1" fill="currentColor" />
                </svg>
              </a>
              <a href={CONTACTO.facebook} target="_blank" rel="noreferrer" aria-label="Facebook">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M14.5 8.5h2.2V5.6h-2.6c-2.4 0-3.8 1.4-3.8 3.9v1.6H8v2.9h2.3V21h3v-7h2.3l.4-2.9h-2.7V9.8c0-.9.3-1.3 1.2-1.3Z"
                    fill="currentColor"
                  />
                </svg>
              </a>
            </div>
          </div>

          <div>
            <h5>Catálogo</h5>
            <ul>
              {PRODUCTOS.map((p) => (
                <li key={p.id}>
                  <a href="#catalogo">{p.nombre}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5>Laboratorio</h5>
            <ul>
              <li><a href="#laboratorio">Quiénes somos</a></li>
              <li><a href="#proceso">Proceso de trabajo</a></li>
              <li><a href="#calidad">Calidad y trazabilidad</a></li>
              <li><a href="#contacto">Trabaja con nosotros</a></li>
            </ul>
          </div>

          <div>
            <h5>Contacto</h5>
            <ul>
              <li><a href={`tel:${CONTACTO.telefonoHref}`}>{CONTACTO.telefono}</a></li>
              <li><a href={`mailto:${CONTACTO.email}`}>{CONTACTO.email}</a></li>
              <li>{CONTACTO.direccion}</li>
              <li>{CONTACTO.horario}</li>
            </ul>
          </div>
        </div>

        <div className="footer__bot">
          <span>© {new Date().getFullYear()} Ortotec · Laboratorio de ortodoncia</span>
          <span>Aviso legal · Privacidad · Cookies</span>
        </div>
      </div>
    </footer>
  )
}
