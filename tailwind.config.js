/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'highlight': '#30E3CA',
        'accent': '#11999E',
        'text-primary': '#40514E',
        'ui-background': '#E4F9F5',
        'ui-primary': '#FEFEFE',
      },
    },
  },
  plugins: [],
}

