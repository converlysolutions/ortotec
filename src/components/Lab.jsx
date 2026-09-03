import { SPECS, EQUIPO } from '../data'
import Reveal from './Reveal'

export default function Lab() {
  return (
    <section className="section dark" id="laboratorio">
      <div className="wrap">
        <Reveal>
          <div className="split">
            <div>
              <p className="eyebrow">Quiénes somos</p>
              <h2>El laboratorio</h2>
            </div>
            <div>
              <p className="lead">
                Ortotec es un laboratorio de ortodoncia con sede en Madrid.
                Trabajamos con un volumen de casos que nos permite revisar uno
                a uno antes de que salgan por la puerta, porque un aparato que
                no ajusta cuesta una cita más al paciente y al ortodoncista.
              </p>
              <p className="lead" style={{ marginTop: 20 }}>
                Aceptamos tanto impresiones convencionales como archivos de
                escáner intraoral. Combinamos el conformado y la soldadura
                manual con diseño CAD, impresión 3D y control dimensional:
                cada técnica resuelve mejor una parte del trabajo.
              </p>

              <ul className="equip">
                {EQUIPO.map((e) => (
                  <li key={e.b}>
                    <b>{e.b}</b>
                    <span>{e.s}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>

        <Reveal delay={100}>
          <div className="specs">
            {SPECS.map((s) => (
              <div className="spec" key={s.n}>
                <span>{s.n}</span>
                <small>{s.t}</small>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
