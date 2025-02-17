import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import checker from 'vite-plugin-checker';
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
      react(),
      tailwindcss(),
      checker({
          typescript: true, // Enable TypeScript checking
          overlay: true,    // Show errors in the browser overlay
          eslint: { lintCommand: 'eslint src' }, // Optional: Add ESLint checking
          // Disable failing the build on errors
          silent: true,     // Suppress terminal output for type errors
      }),
  ],
})
