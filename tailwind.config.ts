import type { Config } from 'tailwindcss'

const config: Config = {
	content: ['./src/app/App.vue', './src/components/**/*.vue'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				primary: '#6d6bff',
				accent: '#ab6dfd',

				dark: '#363636',
				light: '#f1f1f1',

				info: '#00b8ff',
				warning: '#ff9800',
				success: '#2dd633',
				error: '#f00000'
			},
			container: {
				center: true,
				padding: '1rem'
			},
			fontSize: {
				sm: ['.8rem', '1'],
				base: ['1rem', '1'],
				lg: ['1.3rem', '1'],
				xl: ['1.8rem', '1'],
				'2xl': ['2.2rem', '1']
			}
		}
	},
	plugins: []
}

export default config
