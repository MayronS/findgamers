/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,jsx, js}'],
  theme: {
    extend: {
      colors: {
        'color-base': '#E6E4FF',
        'primary/200': '#8B7AFF',
        'primary/100': '#DAD7FF',
        'primary/base': '#4801F9'
      }
    }
  },
  plugins: []
}
