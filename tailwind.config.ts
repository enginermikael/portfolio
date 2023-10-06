import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	darkMode: 'class',
	theme: {
		screens: {
			'xs': '320px',
			'sm': '640px',
			'md': '768px',
			'lg': '1024px',
			'xl': '1280px',
			'2xl': '1536px'
		},
		colors: {
			principalPurple: '#6B37BF',
			destaqPurple: '#4A00E0',
			ligthPurple: '#B4A7D6',
			bgDark: '#1A1A1A',
			textDark: '#FFFFFF',
			bgLight: '#F4F4F4',
			textLight: '#333333',
			transparent: 'transparent'
		},
		extend: {
			transformOrigin: {
				leftCenter : 'left center'
			},
		}
	},
	plugins: [],
};
export default config;
