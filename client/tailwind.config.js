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
        sunset: '#ceac76',
        cambridgeDarkBlue: '#5f8774',
        cambridgeLightBlue: '#b0cfc0',
        lightGrey: '#212a25',
      },
      backgroundImage: {
        'gradient-burnt-sienna-cambridge-blue': 'linear-gradient(to right, #e07a5f, #81b29a)',
      },
    },
  },
  plugins: [],
}
