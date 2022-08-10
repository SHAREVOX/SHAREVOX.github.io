const { colors } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './layouts/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#92AAD4',
      },
      screens: {
        '2xl': '2000px',
        g2xl: { max: '1999px' },
        gxl: { max: '1279px' },
        // => @media (max-width: 1279px) { ... }

        glg: { max: '1023px' },
        // => @media (max-width: 1023px) { ... }

        gmd: { max: '767px' },
        // => @media (max-width: 767px) { ... }

        gsm: { max: '639px' },
        // => @media (max-width: 639px) { ... }
      },
    },
  },
  plugins: [],
}
