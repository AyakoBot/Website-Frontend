import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import Unlighthouse from '@unlighthouse/vite';

// https://vitejs.dev/config/
export default defineConfig({
 plugins: [vue(), Unlighthouse({})],
 server: {
  proxy: {
   '/api': {
    target: 'https://api.ayakobot.com',
    changeOrigin: true,
   },
  },
 },
});
