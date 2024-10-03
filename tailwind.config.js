/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			spacing: {
				LAYOUT_OFFSET_MORE: '130px',
				LAYOUT_OFFSET_LESS: '86px'
			},
			boxShadow: {
				base: '0 4px 4px rgba(0, 0, 0, 0.25)'
			}
		}
	},
	plugins: []
}
