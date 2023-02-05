/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
            colors: {
                'blue': '#0D6EFD',
                'gray-dark': '#121212',
                'gray-light': '#272727',
            },
        },
        fontFamily: {
            'sans': ['Open Sans', ...defaultTheme.fontFamily.sans],
            'serif': ["Inter"],
        },
	},
	plugins: [],
}
