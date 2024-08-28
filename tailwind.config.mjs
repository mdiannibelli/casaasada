import { backgroundImage, propertiesImage } from './src/constants/imgs';

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			backgroundImage: {
				'home': `url(${backgroundImage.url})`,
				'property': `url(${propertiesImage.url})`,
				'degradate': 'linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.7) 100%)'
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
