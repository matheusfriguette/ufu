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
      gray3: '#f5f5f5',
      gray4: '#222',
      gray5: '#ddd',
      gray6: '#ccc',
      blue: '#004a97'
    },
    extend: {
      backgroundImage: {
        'banner-1': "url('/banner-1.png')",
        'banner-2': "url('/banner-2.png')",
        'banner-3': "url('/banner-3.jpeg')",
        'event-1': "url('/event-1.png')",
        'event-2': "url('/event-2.jpg')",
        'event-3': "url('/event-3.jpg')",
        'event-4': "url('/event-4.png')",
        'event-5': "url('/event-5.jpg')",
        'ufu': "url('/ufu-logo.png')",
        'ufu-header': "url('/ufu-logo-header.svg')",
        'profile-pic': "url('/profile-pic.jpg')",
        'profile-pic-ana': "url('/profile-pic-ana.jpeg')",
        'profile-pic-thiago': "url('/profile-pic-thiago.jpeg')",
      }
    }
  },
  plugins: [],
}
