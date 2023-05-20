const colors = require('tailwindcss/colors')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: '#e2e2e2',
      gray2: '#444',
      blue: '#004a97'
    },
    extend: {
      backgroundImage: {
        'ufu': "url('/ufu-logo.png')",
        'ufu-header': "url('/ufu-logo-header.svg')",
        'profile-pic': "url('/profile-pic.jpg')",
      }
    }
  },
  plugins: [],
}
