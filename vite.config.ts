import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'

import postcss from 'postcss'
import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer'

export default defineConfig({
	plugins: [vue(), dts()],
	css: {
		postcss: postcss([tailwindcss(), autoprefixer()])
	},
	build: {
		lib: {
			entry: 'src/index.ts',
			name: 'axp-ui',
			fileName: 'index'
		},
		rollupOptions: {
			external: ['vue'],
			output: {
				globals: {
					vue: 'Vue'
				}
			}
		}
	},
	server: {
		open: 'docs/index.html'
	}
})
