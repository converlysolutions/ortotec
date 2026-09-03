import { PROCESO, CALIDAD } from '../data'
import Reveal from './Reveal'

export default function Process() {
  return (
    <>
      <section className="section" id="proceso">
        <div className="wrap">
          <Reveal>
            <div className="split">
              <div>
                <p className="eyebrow">Cómo trabajamos</p>
                <h2>De la impresión a la clínica</h2>
              </div>
              <p className="lead">
                Recogida y entrega propias en Madrid; al resto de España,
                mensajería con seguimiento. La fecha de entrega se cierra al
                aceptar el caso y se comunica cualquier cambio.
              </p>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <div className="steps">
              {PROCESO.map((s) => (
                <div className="step" key={s.n}>
                  <b>{s.n}</b>
                  <h3>{s.t}</h3>
                  <p>{s.d}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="section" id="calidad">
        <div className="wrap">
          <Reveal>
            <div className="split" style={{ marginBottom: 8 }}>
              <div>
                <p className="eyebrow">Garantías</p>
                <h2>Control y trazabilidad</h2>
              </div>
              <p className="lead">
                Cuatro compromisos que se pueden comprobar caso a caso. No son
                una declaración de intenciones: son la forma en que está
                organizado el laboratorio.
              </p>
            </div>
          </Reveal>

          <Reveal delay={80}>
            <div className="cards">
              {CALIDAD.map((c) => (
                <div className="card" key={c.n}>
                  <span className="card__n">{c.n}</span>
                  <h3>{c.t}</h3>
                  <p>{c.d}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}
