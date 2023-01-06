import react from '@vitejs/plugin-react'
import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import { EsLinter, linterPlugin } from 'vite-plugin-linter'
import tsConfigPaths from 'vite-tsconfig-paths'

import * as packageJson from './package.json'
// https://vitejs.dev/config/
export default defineConfig((configEnv) => ({
  plugins: [
    dts({
      include: ['src/'],
    }),
    react(),
    tsConfigPaths(),
    linterPlugin({
      include: ['./src}/**/*.{ts,tsx}'],
      linters: [new EsLinter({ configEnv })],
    }),
  ],
  build: {
    lib: {
      entry: resolve('src/', 'index.ts'),
      name: 'ReactGlobalModal',
      formats: ['es', 'umd'],
      fileName: (format) => `react-global-modal.${format}.js`,
    },
    rollupOptions: {
      external: [...Object.keys(packageJson.peerDependencies)],
    },
  },
}))
