/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '4rem'
    },
    extend: {
      colors: {
        // figma color
        accent: '#008F79',
        primary: '#EF3838',
        body: '#3F3F3F',
        body_sub: '#6D6D6D',
        purple: '#6528E9',
        light_gray: '#CCCCCC',

        success: '#28c76f',
        info: '#00cfe8',
        warning: '#ff9f43',
        danger: '#ea5455',
        light: '#f6f6f6',
        dark: '#4b4b4b',
        red: '#ff0000'
      }
    },
    screens: {
      xl: { max: '1280px' },
      lg: { max: '1024px' },
      md: { max: '768px' },
      sm: { max: '640px' },
      xsm: { max: '426px' }
    },
    fontFamily: {
      sans: ['Cabin', 'sans-serif'],
      body: ['JosefinSans', 'Helvetica', 'Arial', 'serif']
    }
  },
  plugins: []
};
