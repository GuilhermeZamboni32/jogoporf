import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'Jogoprof',
        short_name: 'JP',
        description: 'Um jogo de emojis',
        theme_color: 'image/png',
        icons: [
          {
            src: 'axiloti192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'axiloti512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
    }),
  ],
});