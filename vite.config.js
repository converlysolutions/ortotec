import react from '@vitejs/plugin-react'
import { resolve } from 'node:path'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],

  // En GitHub Pages el sitio cuelga de /ortotec/, no de la raíz del dominio,
  // así que los assets tienen que referenciarse desde ahí.
  base: '/ortotec/',

  build: {
    // Pages puede servir directamente la carpeta docs/ de la rama principal:
    // un solo push publica, sin ramas ni acciones adicionales.
    outDir: 'docs',
    emptyOutDir: true,

    // Dos páginas independientes: la web y la tarjeta de contacto que se
    // enlaza desde el QR. `card/index.html` se publica en /card/, sin
    // extensión en la URL y sin necesidad de enrutador en cliente.
    rollupOptions: {
      input: {
        main: resolve(import.meta.dirname, 'index.html'),
        card: resolve(import.meta.dirname, 'card/index.html'),
      },
    },
  },
})
