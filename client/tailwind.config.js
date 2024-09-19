/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        eggshell: '#f4f1deff',
        burntSienna: '#e07a5fff',
        delftBlue: '#3d405bff',
        cambridgeBlue: '#81b29aff',
        sunset: '#f2cc8fff',
        cambridgeDarkBlue: '#5f8774',
        grey: '#212a25',
      },
      backgroundImage: {
        'gradient-burnt-sienna-cambridge-blue': 'linear-gradient(to right, #e07a5f, #81b29a)',
      },
    },
  },
  plugins: [],
}
