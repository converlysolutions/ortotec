/* Contenido editable de la web. Todo el texto vive aquí para que el
   cliente pueda revisarlo y ajustarlo sin tocar los componentes. */

export const CONTACTO = {
  empresa: 'Ortotec',
  claim: 'Laboratorio de ortodoncia',
  ciudad: 'Madrid',
  // ⚠️ Datos de ejemplo: sustituir por los reales antes de publicar
  direccion: 'Calle Ejemplo, 00 · 28000 Madrid',
  telefono: '+34 900 000 000',
  telefonoHref: '+34900000000',
  whatsapp: '34900000000',
  email: 'info@ortotec.es',
  horario: 'Lunes a viernes · 9:00 – 18:00',
  instagram: 'https://www.instagram.com/ortotec_laboratorio.ortodoncia/',
  facebook:
    'https://www.facebook.com/p/ORTOTEC-laboratorio-de-ortodoncia-100063547899498/',
}

export const PRODUCTOS = [
  {
    id: 'brackets',
    // Foto del producto, p. ej. img('catalogo/montaje-indirecto.jpg'): montaje-indirecto.jpg
    img: '',
    familia: 'Aparatología fija',
    nombre: 'Montaje indirecto',
    corto: 'Brackets posicionados sobre modelo, bandas y arcos.',
    titulo: 'Montaje indirecto de brackets',
    desc:
      'Posicionamiento de brackets sobre modelo y férula de transferencia para llevarlos a boca en una sola sesión. Bandas ajustadas pieza a pieza y arcos conformados a la forma de arcada del paciente.',
    ficha: [
      { k: 'Incluye', v: 'Férula de transferencia' },
      { k: 'Bandas', v: 'Ajustadas a medida' },
      { k: 'Entrega', v: '3–5 días laborables' },
    ],
  },
  {
    id: 'aligner',
    // Foto del producto, p. ej. img('catalogo/montaje-indirecto.jpg'): alineadores.jpg
    img: '',
    familia: 'Ortodoncia invisible',
    nombre: 'Alineadores',
    corto: 'Set-up digital y termoconformado secuencial.',
    titulo: 'Alineadores transparentes',
    desc:
      'Set-up digital del movimiento dentario, impresión 3D de los modelos de cada fase y termoconformado con lámina multicapa. Se entrega la secuencia numerada, recortada y pulida, con el informe de movimientos por fase.',
    ficha: [
      { k: 'Planificación', v: 'Set-up digital' },
      { k: 'Material', v: 'Lámina multicapa' },
      { k: 'Entrega', v: '7–10 días laborables' },
    ],
  },
  {
    id: 'hawley',
    // Foto del producto, p. ej. img('catalogo/montaje-indirecto.jpg'): placa-hawley.jpg
    img: '',
    familia: 'Aparatología removible',
    nombre: 'Placa Hawley',
    corto: 'Resina termopolimerizable con arco vestibular.',
    titulo: 'Placa Hawley',
    desc:
      'Placa de resina termopolimerizable con arco vestibular y ganchos de Adams conformados a mano. Acabado pulido a espejo, con opción de personalización en color para pacientes infantiles.',
    ficha: [
      { k: 'Retención', v: 'Ganchos de Adams' },
      { k: 'Acabado', v: 'Pulido a espejo' },
      { k: 'Entrega', v: '2–4 días laborables' },
    ],
  },
  {
    id: 'splint',
    // Foto del producto, p. ej. img('catalogo/montaje-indirecto.jpg'): ferula-descarga.jpg
    img: '',
    familia: 'Férulas',
    nombre: 'Férula de descarga',
    corto: 'Michigan rígida y descarga blanda para bruxismo.',
    titulo: 'Férula de descarga',
    desc:
      'Férulas tipo Michigan rígidas y férulas blandas para bruxismo, planificadas sobre articulador o en flujo digital. El ajuste oclusal se comprueba antes de la entrega para reducir los retoques en clínica.',
    ficha: [
      { k: 'Tipos', v: 'Michigan y blanda' },
      { k: 'Planificación', v: 'Articulador o digital' },
      { k: 'Entrega', v: '3–5 días laborables' },
    ],
  },
  {
    id: 'expander',
    // Foto del producto, p. ej. img('catalogo/montaje-indirecto.jpg'): expansor.jpg
    img: '',
    familia: 'Ortopedia maxilar',
    nombre: 'Disyuntor y expansor',
    corto: 'Hyrax, Haas, quad-hélix y barra transpalatina.',
    titulo: 'Expansión maxilar',
    desc:
      'Hyrax, Haas, quad-hélix y barras transpalatinas. Soldadura por puntos y láser sobre bandas ajustadas al modelo, con los brazos conformados para respetar la anatomía palatina de cada paciente.',
    ficha: [
      { k: 'Soldadura', v: 'Puntos y láser' },
      { k: 'Anclaje', v: 'Bandas ajustadas' },
      { k: 'Entrega', v: '4–6 días laborables' },
    ],
  },
  {
    id: 'lingual',
    // Foto del producto, p. ej. img('catalogo/montaje-indirecto.jpg'): retenedor-fijo.jpg
    img: '',
    familia: 'Retención',
    nombre: 'Retenedor fijo',
    corto: 'Alambre trenzado con llave de posicionamiento.',
    titulo: 'Retenedor fijo lingual',
    desc:
      'Alambre trenzado conformado sobre modelo, de canino a canino o extendido, con llave de transferencia en silicona para un cementado rápido y predecible. Compatible con retención combinada fija y removible.',
    ficha: [
      { k: 'Extensión', v: 'De canino a canino' },
      { k: 'Incluye', v: 'Llave de silicona' },
      { k: 'Entrega', v: '2–3 días laborables' },
    ],
  },
]

/* Rutas de las fotografías. Vacías = se muestra el hueco con su pie.
   Al añadir el archivo en /public/img/, poner aquí su nombre:
   hero: img('hero.jpg')

   `img()` antepone la base del sitio. Hace falta porque en GitHub Pages la
   web no cuelga de la raíz del dominio sino de /ortotec/, y una ruta escrita
   a mano como '/img/foto.webp' daría 404 allí aunque funcione en local. */
export const img = (archivo) => (archivo ? import.meta.env.BASE_URL + 'img/' + archivo : '')
export const IMAGENES = {
  hero: img('hawley-personalizada.webp'),
  laboratorio: '',
}

/* Especialidades cubiertas. Funciona como filtro rápido: el ortodoncista
   ve de un vistazo si el laboratorio le sirve para lo que necesita. */
export const ESPECIALIDADES = [
  'Ortodoncia',
  'Ortopedia dentofacial',
  'ATM y bruxismo',
  'Odontopediatría',
  'Apnea del sueño',
  'Expansión esquelética',
  'Flujo digital CAD/CAM',
]

export const CALIDAD = [
  {
    n: '01',
    t: 'Ajuste comprobado en el laboratorio',
    d: 'Cada aparato se prueba sobre el modelo antes de salir. El retoque se hace aquí, no en el sillón con el paciente esperando.',
  },
  {
    n: '02',
    t: 'Trazabilidad de cada caso',
    d: 'Material, lote, técnico responsable y fecha quedan registrados. Si pregunta por un aparato de hace años, tenemos la respuesta.',
  },
  {
    n: '03',
    t: 'Un técnico de principio a fin',
    d: 'El mismo técnico monta, revisa y entrega el caso. Sin cadena de montaje ni manos intermedias que diluyan la responsabilidad.',
  },
  {
    n: '04',
    t: 'La fecha de entrega se cumple',
    d: 'Se cierra al aceptar el caso. Si algo se complica, lo avisamos antes de que sea un problema en su agenda.',
  },
]

export const PROCESO = [
  {
    n: '01',
    t: 'Recepción',
    d: 'Recogemos la impresión o recibimos el archivo del escáner intraoral. Cada caso entra con su ficha, su fecha de entrega y su técnico responsable.',
  },
  {
    n: '02',
    t: 'Planificación',
    d: 'Modelo físico o digital, set-up cuando el caso lo requiere y validación de la prescripción con el ortodoncista antes de empezar a fabricar.',
  },
  {
    n: '03',
    t: 'Fabricación',
    d: 'Conformado, soldadura, prensado o termoconformado según el aparato. El mismo técnico sigue el caso de principio a fin.',
  },
  {
    n: '04',
    t: 'Control y entrega',
    d: 'Comprobación del ajuste sobre modelo, pulido, desinfección y envío a clínica. Recogida y entrega propias en Madrid.',
  },
]

export const SPECS = [
  { n: '1998', t: 'Año de apertura del laboratorio' },
  { n: '180', t: 'Clínicas y ortodoncistas activos' },
  { n: '48 h', t: 'Plazo en reparaciones urgentes' },
  { n: '6', t: 'Técnicos en plantilla' },
]

export const EQUIPO = [
  { b: 'Escaneado y CAD', s: 'Escáner de modelos y software de set-up' },
  { b: 'Impresión 3D', s: 'Resinas biocompatibles certificadas' },
  { b: 'Termoconformado', s: 'Presión positiva, lámina multicapa' },
  { b: 'Soldadura', s: 'Puntos y láser sobre acero quirúrgico' },
  { b: 'Acabado', s: 'Pulido a espejo y control dimensional' },
  { b: 'Trazabilidad', s: 'Ficha, lote de material y responsable por caso' },
]
