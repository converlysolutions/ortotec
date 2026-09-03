import { CONTACTO, ESPECIALIDADES, IMAGENES } from '../data'
import Figura from './Figura'

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="wrap hero__grid">
        <div>
          <p className="eyebrow">Laboratorio de ortodoncia · {CONTACTO.ciudad}</p>
          <h1>
            Aparatología de ortodoncia{' '}
            <br />
            hecha a medida.
          </h1>
          <p className="lead">
            Fabricamos aparatología fija, removible y ortopedia maxilar para
            clínicas y ortodoncistas. Trabajamos con impresión convencional y
            con archivos de escáner intraoral, y entregamos cada caso revisado
            pieza a pieza.
          </p>
          <div className="hero__actions">
            <a className="btn" href="#catalogo">
              Ver catálogo
            </a>
            <a className="btn btn--ghost" href="#contacto">
              Enviar un caso
            </a>
          </div>

          <ul className="espec">
            {ESPECIALIDADES.map((e) => (
              <li key={e}>{e}</li>
            ))}
          </ul>

          <div className="hero__meta">
            <div>
              <span>1998</span>
              <small>En activo desde</small>
            </div>
            <div>
              <span>180</span>
              <small>Clínicas</small>
            </div>
            <div>
              <span>48 h</span>
              <small>Reparaciones</small>
            </div>
          </div>
        </div>

        <Figura
          recorte
          className="figura--hero"
          src={IMAGENES.hero}
          alt="Placa Hawley personalizada con resina multicolor, tornillo de expansión y ganchos de Adams, montada sobre modelo"
          pie="Fotografía principal"
          ratio="1200 / 972"
        />
      </div>
    </section>
  )
}
