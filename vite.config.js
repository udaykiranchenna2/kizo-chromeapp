import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import crx from 'vite-plugin-crx-mv3'
import { viteStaticCopy } from 'vite-plugin-static-copy'
export default defineConfig(({ mode }) => {
  return {
    plugins: [
      vue(),
      crx({
        manifest: './src/manifest.json'
      }),
      viteStaticCopy({
        targets: [
          {
            src: ['offscreen.js','offscreen.html','heart.png','onemanarmy.png'],
            dest: ''
          }
        ]
      }),
    ],
    build: {
      emptyOutDir: mode == 'production',
      chunkSizeWarningLimit: 1600,
    },
  }
})
