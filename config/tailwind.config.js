const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    './public/*.html',
    './app/helpers/**/*.rb',
    './app/javascript/**/*.js',
    './app/views/**/*.{erb,haml,html,slim}'
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        sans: ['Inter var', ...defaultTheme.fontFamily.sans]
      },
      colors: {
        'dark': '#242424',
        'darkblue': '#0D005D',
        'blue': '#223dfe',
        'yellow': '#e8ff58',
        'pink': '#e17aff',
        'lightblue': '#a6ebff',
        'white': '#ffffff'
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/container-queries'),
  ]
}
