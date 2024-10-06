/** @type {import('tailwindcss').Config} */
import plugin from 'tailwindcss/plugin'

export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			fontFamily: {
				'rubik-mono': ['Rubik Mono One'],
				'rubik-one': ['Rubik One']
			},
			spacing: {
				LAYOUT_OFFSET_MORE: '130px',
				LAYOUT_OFFSET_LESS: '86px'
			},
			boxShadow: {
				base: '0 4px 4px rgba(0, 0, 0, 0.25)'
			}
		}
	},
	plugins: [
		plugin(function ({ addUtilities }) {
			const newUtilities = {
				'.text-shadow': {
					filter: 'drop-shadow(0 4px 4px rgba(0, 0, 0, 0.25))'
				}
			}

			addUtilities(newUtilities)
		})
	]
}
