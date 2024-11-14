/** @type {import('tailwindcss').Config} */
import plugin from 'tailwindcss/plugin'

export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			boxShadow: {
				base: '0 4px 4px rgba(0, 0, 0, 0.25)'
			},
			fontFamily: {
				offside: ['Offside', 'sans-serif']
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
