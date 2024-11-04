/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,jsx, js}'],
  theme: {
    extend: {
      screens: {
        desktop: '1550px'
      },
      colors: {
        'bg-post': '#DAD7FF',
        'primary/500': '#4100DC',
        'primary/200': '#B2A9FF',
        'primary/100': '#DAD7FF',
        'primary/base': '#4801F9',
        'color/chat': '#D9D9D9',
        scroll: '#DAD7FF'
      }
    }
  },
  plugins: [require('tailwind-scrollbar')]
}
