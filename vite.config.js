import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Deploy at the domain root (Hostinger public_html). base '/' is required
// for the multi-page client-side routes to resolve their assets correctly.
export default defineConfig({
  base: '/',
  plugins: [react(), tailwindcss()],
})
