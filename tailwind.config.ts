import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/app/**/*.{ts,tsx}',
    './src/components/**/*.{ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1.25rem',
        lg: '2rem',
      },
      screens: {
        xl: '1200px',
      },
    },
    extend: {
      colors: {
        brand: {
          primary: '#302d2d',
          secondary: '#ffffff',
          accent: '#d77723',
          gray: '#6b6b6b',
          dark: '#302d2d',
          light: '#f5f5f5',
          menu: '#3b3838',
        },
        border: '#e5e7eb',
      },
      fontFamily: {
        sans: ['var(--font-inter)'],
        heading: ['var(--font-montserrat)'],
      },
      letterSpacing: {
        wide: '0.08em',
      },
    },
  },
  plugins: [],
}

export default config
