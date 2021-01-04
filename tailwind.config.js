module.exports = {
  purge: [
    './pages/**/*.tsx',
    './components/**/*.tsx'
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        purple: {
          lightest: '#F9F8FC',
          DEFAULT: '#342A4C'
        },
        violet: {
          DEFAULT: '#2C185B',
          light: '#977ADC',
          lightest: '#CBBDED'
        },
        link: {
          DEFAULT: '#4D38CA',
          dark: '#9F8ED1'
        },
        light: '#F9F8FC',
        dark: '#342A4C'
      },
      opacity: {
        '80': '.8',
      },
      typography: (theme) => ({
        DEFAULT: {
          css: {
            color: theme('colors.gray.900'),
            a: {
              color: theme('colors.link.DEFAULT'),
              'text-decoration': 'none',
              '&:hover': {
                'text-decoration': 'underline'
              }
            }
          }
        },
        dark: {
          css: {
            color: theme('colors.purple.lightest'),
            h1: {
              color: 'currentColor'
            },
            strong: {
              color: 'currentColor',
            },
            a: {
              color: theme('colors.link.dark'),
            }
          }
        }
      })
    },
    fill: theme => ({
      'purple-lightest': theme('colors.purple.lightest'),
      'purple': theme('colors.purple'),
      'violet': theme('colors.violet'),
      'violet-lightest': theme('colors.violet.lightest')
    }),
    stroke: theme => ({
      'purple-lightest': theme('colors.purple.lightest'),
      'purple': theme('colors.purple'),
      'violet': theme('colors.violet')
    })
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
  variants: {
    extend: {
      fill: ['dark'],
      opacity: ['dark'],
      fontWeight: ['dark'],
      ringOpacity: ['dark'],
      backgroundOpacity: ['dark'],
      typography: ['dark']
    },
  },
}
