import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'

import postcss from 'postcss'

import autoprefixer from 'autoprefixer'
import tailwindcss from 'tailwindcss'

export default defineConfig({
	plugins: [vue(), dts()],
	css: {
		postcss: postcss([autoprefixer(), tailwindcss()])
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
	}
})
