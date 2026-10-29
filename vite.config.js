import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base: './' hace que la página funcione en GitHub Pages
// sin importar el nombre que le pongan al repositorio.
export default defineConfig({
  plugins: [react()],
  base: './',
})
