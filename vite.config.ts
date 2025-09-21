// vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/HSP-Safe-space/',  // ⚡⚡⚡ 重點：必須是 /你的repo名稱/
})
