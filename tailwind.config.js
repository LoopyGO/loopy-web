/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#CC40DC',
        'primary-hover': '#B32DB2',

        base: {
          1: '#13131A',
          2: '#171821',
          3: '#1D1E29',
          4: '#21232F',
          5: '#262836',
          6: '#2B2D3D',
          7: '#333649',
          8: '#42455E',
          9: '#5D6183',
          10: '#696D93',
          11: '#9093B0',
          12: '#EAEBF0',
        },
      },
    },
    plugins: [],
  },
}
