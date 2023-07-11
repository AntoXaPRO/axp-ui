import { defineConfig } from 'rollup'

import ts from 'rollup-plugin-typescript2'
import vue from 'rollup-plugin-vue'
import sass from 'rollup-plugin-sass'

export default defineConfig({
	input: 'src/index.ts',
	output: {
		format: 'esm',
		dir: 'dist'
	},
	plugins: [ts(), vue(), sass()],
	external: ['vue', 'axp-ts'],
})
