import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// [https://vitejs.dev/config/](https://vitejs.dev/config/)
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000, // Client port
    proxy: {
      // Proxying API requests to the backend server
      '/api': {
        target: 'http://localhost:5001', // Your backend server URL
        changeOrigin: true,
        secure: false,
      },
    },
  },
})