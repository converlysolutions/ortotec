/**
 * Hueco de imagen.
 *
 * Mientras no haya foto real muestra un marco neutro con el pie de foto,
 * de modo que la maqueta se lee sin parecer rota. En cuanto exista el
 * archivo basta con rellenar el campo `img` correspondiente en data.js.
 */
export default function Figura({ src, alt, pie, ratio = '4 / 3', className = '', recorte = false }) {
  // `recorte`: la foto viene con el fondo eliminado, así que se presenta
  // suelta sobre la página en lugar de encajada en un marco.
  const clases = ['figura', recorte && src ? 'figura--recorte' : '', className]
    .filter(Boolean)
    .join(' ')
  return (
    <figure className={clases} style={{ aspectRatio: ratio }}>
      {src ? (
        <img src={src} alt={alt} loading="lazy" />
      ) : (
        <span className="figura__vacia">{pie || alt}</span>
      )}
    </figure>
  )
}
