# Ortotec · Laboratorio de ortodoncia

Web corporativa en React + Vite. Sin dependencias de UI ni librerías de
terceras partes en cliente: solo React.

## Arranque

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # genera dist/
npm run preview  # sirve dist/
```

## Estructura

```
index.html                ← web
card/index.html           ← tarjeta de contacto para el QR (/card/)
src/
  data.js                 ← TODO el texto, los datos de contacto y las rutas de imagen
  styles.css              ← sistema de diseño (colores, tipografía, layout)
  card.css                ← estilos de la tarjeta, independientes de la web
  components/
    Card.jsx              ← tarjeta de contacto
    Figura.jsx            ← hueco de imagen: muestra la foto o el espacio reservado
    ...                   ← una sección por archivo
public/img/               ← aquí van las fotografías
```

## Tarjeta de contacto (`/card/`)

Página aparte pensada para abrirse desde un QR: una sola pantalla, móvil
primero. Enlaza a la web, a Instagram y a Facebook.

Los botones de **WhatsApp** y **Llamar** están deliberadamente inactivos
(`disabled`) a la espera del número real. Para activarlos: poner el número en
`CONTACTO.whatsapp` / `CONTACTO.telefonoHref` (`src/data.js`) y cambiar en
`src/components/Card.jsx` cada `<button disabled>` por un enlace
`https://wa.me/<numero>` y `tel:<numero>`.

## Añadir las fotografías

Mientras `img` esté vacío se muestra un marco con trama y el pie de foto.
Para poner una imagen real:

1. Copiar el archivo en `public/img/` (catálogo: `public/img/catalogo/`).
2. Escribir la ruta en `src/data.js`, sin `public`:

```js
export const IMAGENES = {
  hero: '/img/hero.jpg',          // vertical, 4:5
  laboratorio: '/img/taller.jpg',
}
```

Y en cada producto de `PRODUCTOS`:

```js
{ id: 'brackets', img: '/img/catalogo/montaje-indirecto.jpg', ... }
```

Proporciones de referencia: hero **4:5** (vertical), catálogo **16:10**
(apaisada). La imagen se recorta con `object-fit: cover`, así que conviene
dejar aire alrededor del objeto. Ancho útil máximo ~1400 px; comprimir a
JPG de calidad media antes de subirlas.

## Antes de publicar

- **Datos de contacto**: `src/data.js` → `CONTACTO`. Dirección, teléfono,
  WhatsApp, email y horario son de ejemplo.
- **Cifras**: `SPECS` y el bloque del hero (1998, 180 clínicas, 48 h, 6
  técnicos) están sin confirmar.
- **Especialidades**: `ESPECIALIDADES` — confirmar cuáles cubre realmente el
  laboratorio; es lo que decide si un ortodoncista sigue leyendo.
- **Formulario de contacto**: demo sin backend (`components/Contact.jsx`).
  Conectar a Formspree, Resend, un endpoint propio o similar.
- **Textos legales**: los enlaces del pie (aviso legal, privacidad, cookies)
  están sin destino.
- **Logotipo**: `components/Logo.jsx` y `public/favicon.svg` son
  provisionales; sustituir por el de la marca.
