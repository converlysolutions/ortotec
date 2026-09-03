import { useState } from 'react'
import { PRODUCTOS } from '../data'
import Figura from './Figura'
import Reveal from './Reveal'

export default function Catalog() {
  const [sel, setSel] = useState(0)
  const p = PRODUCTOS[sel]

  return (
    <section className="section" id="catalogo">
      <div className="wrap">
        <Reveal>
          <div className="split" style={{ marginBottom: 56 }}>
            <div>
              <p className="eyebrow">Catálogo</p>
              <h2>Qué fabricamos</h2>
            </div>
            <p className="lead">
              Aparatología completa para ortodoncia y ortopedia dentofacial.
              Trabajamos por encargo: si necesita un aparato que no figura aquí,
              consúltenos antes de descartarlo.
            </p>
          </div>
        </Reveal>

        <Reveal>
          <div className="cat">
            <div className="cat__list" role="tablist" aria-label="Familias de producto">
              {PRODUCTOS.map((it, i) => (
                <button
                  key={it.id}
                  role="tab"
                  aria-selected={i === sel}
                  className={`cat__item${i === sel ? ' on' : ''}`}
                  onClick={() => setSel(i)}
                >
                  <small>{it.familia}</small>
                  <h4>{it.nombre}</h4>
                  <p>{it.corto}</p>
                </button>
              ))}
            </div>

            <div className="cat__stage">
              <Figura
                className="figura--cat"
                src={p.img}
                alt={p.titulo}
                pie={p.titulo}
                ratio="16 / 10"
              />
              <div className="cat__info">
                <h3>{p.titulo}</h3>
                <p>{p.desc}</p>
                <div className="ficha">
                  {p.ficha.map((f) => (
                    <div key={f.k}>
                      <small>{f.k}</small>
                      <span>{f.v}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
