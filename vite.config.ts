// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  base: '/Portfolio/',   //  ← exakt Repo-Namen einsetzen
  plugins: [react()],
  resolve: { alias: { '@': path.resolve(__dirname, 'src') } },
});
