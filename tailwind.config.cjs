/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
      extend: {
          colors: {
            'green-base': '#2C4C37',
            'yellow-base': '#F3E425',
            'second-color': '#6B8173',
            'error-color': '#B8351C',
            'indigo-low': '#f1f1ff',
            'dark-theme': '#1E1E2C',
          },
          screens: {
              '8xs': { max: '145px' },
              '7xs': { max: '195px' },
              '6xs': { max: '240px' },
              '5xs': { max: '320px' },
              '4xs': { max: '375px' },
              '3xs': { max: '411px' },
              '2xs': { max: '480px' },
              xs: { max: '540px' },
              xxs: { max: '639px' },
          },
          aspectRatio: {
              '3/2': '3 / 2',
          },
      },
  },
  plugins: [require('@headlessui/tailwindcss')({ prefix: 'ui' })],
}