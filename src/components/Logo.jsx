/**
 * Logotipo provisional: marca denominativa. Sin icono, para no competir
 * con la identidad real del cliente cuando se sustituya.
 */
export default function Logo({ light = false }) {
  return (
    <a href="#top" className={`logo${light ? ' logo--light' : ''}`} aria-label="Ortotec, inicio">
      <span className="logo__txt">ORTOTEC</span>
      <span className="logo__sub">Laboratorio de ortodoncia</span>
    </a>
  )
}
