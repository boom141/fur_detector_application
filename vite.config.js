import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa';

const cherryPickedKeys = [
  "SERVER"
];

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  const processEnv = {};
  cherryPickedKeys.forEach(key => processEnv[key] = env[key]);

  return {
    define: {
      'process.env': processEnv
    },
    plugins: [
      react(),
      VitePWA({ 
        registerType: 'autoUpdate',
        includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'mask-icon.svg'],
        manifest: {
          name: 'Fur Application Vite-PWA',
          short_name: 'Furceive',
          theme_color: '#ffffff',
          icons: [
              {
                  src: 'pwa-64x64.png',
                  sizes: '64x64',
                  type: 'image/png'
              },
              {
                  src: 'pwa-192x192.png',
                  sizes: '192x192',
                  type: 'image/png'
              },
              {
                  src: 'pwa-512x512.png',
                  sizes: '512x512',
                  type: 'image/png',
                  purpose: 'any'
              },
              {
                  src: 'maskable-icon-512x512.png',
                  sizes: '512x512',
                  type: 'image/png',
                  purpose: 'maskable'
              }
          ],
        }, 
      })
    ],
  }
})
