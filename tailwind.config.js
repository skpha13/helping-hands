/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        sm: '1rem',
        base: '1.25rem',
        lg: '1.375rem',
        xl: '1.5rem',
        '2xl': '2rem',
      },
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

