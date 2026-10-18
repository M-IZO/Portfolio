import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig, loadEnv } from 'vite'

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  // Base path of the deployed site, e.g. `/` or `/Portfolio/` on GitHub Pages.
  const { BASE_PATH } = loadEnv(mode, process.cwd(), '')

  return {
    base: BASE_PATH || '/',
    plugins: [react(), tailwindcss()],
  }
})
