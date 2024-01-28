import daisyui from './node_modules/daisyui'
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        clifford: '#da373d',
        Primary: '#ea580c',
        blackOpacity : '#000000d6',
      },
    },
  },
  plugins: [daisyui],
}

