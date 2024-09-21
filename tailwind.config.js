/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        'dark-slate-blue': '#395B64',
        'dark-gray': '#333333',
        'dark-greenish-gray': '#2C3333',
        'light-mint': '#E7F6F2',
        'medium-gray': '#828282'
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

