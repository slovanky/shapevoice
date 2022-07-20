/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    colors: {
      primary: '#3734A9',
      secondary: '#FF7F5C',
      body: '#64607D',
      border: '#DFE4F1',
      white: '#FFFFFF',
    },
    fontFamily: {
      sans: ['Manrope', 'sans-serif'],
    },
    extend: {},
  },
  plugins: [],
};
