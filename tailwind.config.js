const colors = require('tailwindcss/colors')

module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: 'class', // or 'media' or 'class' or false
  theme: {
    extend: {
      colors: {
        gray: colors.coolGray,
        orange: colors.orange,
        gold: '#FFDF00',
        bluefonce: '#05182d',
      },
      spacing: {
        108: '27rem'
      },
      borderWidth: {
        14: '14px'
      },
      animation: {
        slowmoove: 'slowmoove 13s ease-in-out infinite',
        wiggle: 'wiggle 1s ease-in-out infinite',
      },
      keyframes:{
        slowmoove : {
          '0%, 100%': { transform: 'translateY(50%) translateX(0%) rotate(0)'},
          '20%': { transform: 'translateY(15%) translateX(-20%) rotate(90deg)' },
          '50%': { transform: 'translateY(15%) translateX(-420%) rotate(90deg)'},
          '75%': { transform: 'translateY(100%) translateX(-400%) rotate(360deg)' },
        },
        wiggle : {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        }
      }
    },
  },
  variants: {
    extend: {}
  },
  plugins: [
    require('tailwind-filter-utilities'),
  ],
}
