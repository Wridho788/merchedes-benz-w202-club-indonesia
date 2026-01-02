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
          dark: '#0b0b0b',
          gray: '#6b6b6b',
          light: '#f5f5f5',
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
