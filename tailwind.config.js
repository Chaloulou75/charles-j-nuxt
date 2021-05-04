const conicGradient = (theme, direction, colorList) => {
  const params = [direction, ...colorList.map((color) => theme(`colors.${color}`))]

  return `conic-gradient(${params.join(', ')})`
}

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
        amber: colors.amber,
        lightBlue: colors.lightBlue,
        rose: colors.rose,
        cyan: colors.cyan,
      },
      backgroundImage: (theme) => ({
        'conic-gradient': conicGradient(theme, 'from 300deg', [
          'red.400',
          'amber.100',
          'lightBlue.500',
          'blue.300',
          'purple.600',
          'pink.500',
          'rose.600',
          'red.400',
        ]),
      }),
      spacing: {
        108: '27rem'
      },
      borderWidth: {
        14: '14px'
      },
      animation: {
        slowmoove: 'slowmoove 14s ease-in-out infinite',
        slowmooveTopDown: 'slowmooveTopDown 14s ease-in-out infinite',
        wiggle: 'wiggle 1s ease-in-out infinite',
      },
      keyframes:{
        slowmoove : {
          '0%, 100%': { transform: 'translateY(50%) translateX(0%) rotate(0)'},
          '15%': { transform: 'translateY(15%) translateX(-20%) rotate(90deg)'},
          '50%': { transform: 'translateY(15%) translateX(-420%) rotate(180deg)'},
          '75%': { transform: 'translateY(100%) translateX(-430%) rotate(90deg)' },
        },
        slowmooveTopDown: {
          '0%, 100%': { transform: 'translateY(0%) translateX(0%) rotate(0)' },
          '25%': { transform: 'translateY(200%) translateX(0%) rotate(90deg)' },
          '50%': { transform: 'translateY(200%) translateX(200%) rotate(180deg)' },
          '75%': { transform: 'translateY(0%) translateX(200%) rotate(-90deg)' },
        },
        wiggle : {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
      },
      fontFamily: {
        'ubuntu': ['Ubuntu Mono'],
      }
    },
  },
  variants: {
    extend: {
      backdropFilter: ['hover'],
      backdropBlur: ['hover'],
      backdropBrightness: ['hover'],
      animation: ['hover', 'focus'],
      ringColor: ['hover', 'active'],
    },
  },
  plugins: [
    // require('tailwind-filter-utilities'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
