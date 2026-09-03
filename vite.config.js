import react from '@vitejs/plugin-react'
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
  },
})
