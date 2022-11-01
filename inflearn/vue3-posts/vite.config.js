import { fileURLToPath, URL } from 'node:url';
import Components from 'unplugin-vue-components/vite'; // 자동으로 글로벌 컴포넌트 등록

import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    Components({
      dirs: ['src/components/app'], // app/ 하위의 컴포넌트만 글로벌 컴포넌트로 등록
      dts: true,
    }),
  ],
  // mode: 'production',
  // envPrefix: 'VITE_', // 기본값은 VITE_
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
});
