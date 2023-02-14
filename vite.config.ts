// Vite
import { defineConfig } from 'vite'

// Vite React
import react from '@vitejs/plugin-react-swc'

// Alias
import alias from '@rollup/plugin-alias'

// Eslint
import eslint from 'vite-plugin-eslint'

// Postcss
import postcss from './postcss.config.js'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    alias({
      entries: [{ find: '@', replacement: '/src' }]
    }),
    eslint()
  ],
  css: {
    postcss
  }
})
