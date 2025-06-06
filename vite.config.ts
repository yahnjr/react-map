// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/your-repo-name/', // 👈 Set this to your repo name
  plugins: [react()],
})
