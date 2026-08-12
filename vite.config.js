import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  build: {
    rollupOptions: {
      output: {
        // Vite 8 (rolldown) manualChunks yalnızca fonksiyon formunu destekler.
        manualChunks(id) {
          if (!id.includes('node_modules')) return
          if (id.includes('swiper')) return 'swiper'
          if (id.includes('yet-another-react-lightbox')) return 'lightbox'
          if (/[\\/](react|react-dom|react-router|react-router-dom|scheduler)[\\/]/.test(id)) return 'vendor'
        },
      },
    },
  },
})
