import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { TbBrandZulip } from 'react-icons/tb'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy:{
      "/api":{
        target: 'http://localhost:3000',
        changeOrigin: true
      }
    }
  }
})
