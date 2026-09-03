import { useEffect, useRef, useState } from 'react'
import Logo from './Logo'

const LINKS = [
  ['#laboratorio', 'Laboratorio'],
  ['#catalogo', 'Catálogo'],
  ['#proceso', 'Proceso'],
  ['#calidad', 'Calidad'],
  ['#contacto', 'Contacto'],
]

export default function Nav() {
  const [solid, setSolid] = useState(false)
  const [open, setOpen] = useState(false)

  const centinela = useRef(null)

  /* Un centinela al principio del documento decide cuándo la barra pasa a
     fondo sólido. Frente a escuchar el evento `scroll`, esto no depende de
     cómo se haya desplazado la página ni de la frecuencia de repintado. */
  useEffect(() => {
    const el = centinela.current
    if (!el || typeof IntersectionObserver === 'undefined') return
    const io = new IntersectionObserver(([e]) => setSolid(!e.isIntersecting), {
      threshold: 0,
    })
    io.observe(el)
    return () => io.disconnect()
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
  }, [open])

  return (
    <>
      <div ref={centinela} aria-hidden="true" className="nav__centinela" />
      <header className={`nav${solid ? ' solid' : ''}`}>
        <div className="wrap">
          <div className="nav__in">
            <Logo />
            <nav className="nav__links">
              {LINKS.map(([href, label]) => (
                <a key={href} href={href}>
                  {label}
                </a>
              ))}
            </nav>
            <a className="btn nav__cta" href="#contacto">
              Enviar un caso
            </a>
            <button
              className="burger"
              aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
              aria-expanded={open}
              onClick={() => setOpen((o) => !o)}
            >
              <svg width="26" height="16" viewBox="0 0 26 16" aria-hidden="true">
                <path
                  d={open ? 'M3 3l20 10M3 13L23 3' : 'M0 1h26M0 15h26'}
                  stroke="currentColor"
                  strokeWidth="1.4"
                />
              </svg>
            </button>
          </div>
        </div>
      </header>

      <div className={`mobilemenu${open ? ' open' : ''}`}>
        {LINKS.map(([href, label]) => (
          <a key={href} href={href} onClick={() => setOpen(false)}>
            {label}
          </a>
        ))}
        <a className="btn" href="#contacto" onClick={() => setOpen(false)}>
          Enviar un caso
        </a>
      </div>
    </>
  )
}
