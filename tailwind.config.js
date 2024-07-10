/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
				'sh-white': '#EDEDEE',
				'sh-white-500': '#929A9E',
				'sh-blue': '#1A85FF',
				'sh-blue-500': '#8AC5EB',
				'sh-purple': '#ec4899',
				'sh-dark': '#2D3748',
				'sh-dark-500': '#2d3748',
			},
			fontFamily: {
				cabin: ['"Cabin"', 'sans-serif'],
			},
    },
  },
  plugins: [],
}