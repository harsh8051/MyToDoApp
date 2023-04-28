import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    modules: {
      // enable CSS Modules
      auto: true,
      // set the generated class names
      localsConvention: 'camelCase',
      localIdentName: 'myapp-[name]__[local]--[hash:base64:5]'
    }
  }
})
