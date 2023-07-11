import type { Config } from 'tailwindcss'

const config: Config = {
	content: ['./src/components/**/*.vue'],
	theme: {
		extend: {
			colors: {
				primary: '#3c87a4',
				accent: '#f00000',
				dark: '#363636',
				light: '#cdcdcd',
				error: '#f00000',
				success: '#07b859'
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
