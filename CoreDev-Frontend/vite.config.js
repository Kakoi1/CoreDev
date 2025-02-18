import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // server: {
  //   allowedHosts: ['5348-2001-fd8-f402-fd3d-35ad-6103-2415-a0b7.ngrok-free.app']
  // }
})
