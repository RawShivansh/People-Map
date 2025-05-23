import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: "People-Map",
  plugins: [react()],
  css: {
    preprocessorOptions: {
      css: {
        additionalData: `@import "./src/style.css";`
      }
    }
  }
})
