/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			backgroundImage: {
				'property': "url('/hero.jpg')"
			},
			borderRadius: {
				'custom-tl': '12px 0 0 0', // Top-left: 12px, others: 0
			},
			colors: {
				'primary': '#CFA468',
				'secondary': '#AE966D',
			},
			fontFamily: {
				'playfair': ['"Playfair Display Variable", serif']
			}
		},
	},
	plugins: [],
}
