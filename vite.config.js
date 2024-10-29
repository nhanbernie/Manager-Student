import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/Manager-Student/', 
  plugins: [react()],
  cssCodeSplit: false,
})
