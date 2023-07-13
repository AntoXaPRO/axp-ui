import { defineConfig } from 'rollup'
import typescript from 'rollup-plugin-typescript2'
import vue from 'rollup-plugin-vue'
import sass from 'rollup-plugin-sass'

export default defineConfig({
	input: 'src/index.ts',
	output: {
		format: 'esm',
		dir: 'dist'
	},
	plugins: [typescript(), vue(), sass()],
	external: ['vue', 'axp-ts'],
})
