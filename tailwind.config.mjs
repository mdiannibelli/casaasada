/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			backgroundImage: {
				'property': "url('/hero.jpg')",
				'overlay': "linear-gradient(to top, rgba(0, 0, 0, 0.2) 52%, rgba(0, 0, 0, 0.4) 100%), linear-gradient(to bottom, rgba(0, 0, 0, 0.2) 58%, rgba(0, 0, 0, 0.4) 100%);"
			},
			borderRadius: {
				'custom-tl': '12px 0 0 0', // Top-left: 12px, others: 0
			}
		},
	},
	plugins: [],
}
