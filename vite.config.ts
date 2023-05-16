import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import viteTsconfigPaths from 'vite-tsconfig-paths';
import { visualizer } from 'rollup-plugin-visualizer';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      jsxRuntime: 'automatic',
      jsxImportSource: '@emotion/react',
      babel: {
        plugins: ['@emotion/babel-plugin'],
      },
    }),
    viteTsconfigPaths(),
    process.env.NODE_ENV === 'development' &&
      visualizer({
        emitFile: true,
        filename: 'stats.html',
      }),
  ],
  // ...(process.env.NODE_ENV === 'development' && {
  //   server: {
  //     host: 'dynamic.local.io',
  //     port: 3000,
  //   },
  // }),
  // test: {
  //   globals: true,
  //   environment: 'jsdom',
  //   setupFiles: './src/setupTests.ts',
  //   css: true,
  //   alias: {
  //     '@mathler': path.resolve(__dirname, './src'),
  //     '@tests': path.resolve(__dirname, './tests'),
  //     '@store': path.resolve(__dirname, './src/store'),
  //     '@utils': path.resolve(__dirname, './src/utils'),
  //     '@theme': path.resolve(__dirname, './src/theme'),
  //     '@stories': path.resolve(__dirname, './src/stories'),
  //   },
  //   exclude: ['**/node_modules/**', '**/dist/**', './guidelines/**', './tests/**'],
  // },
});
