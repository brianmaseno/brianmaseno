/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['var(--font-syne)', 'sans-serif'],
        sans: ['var(--font-outfit)', 'sans-serif'],
      },
      colors: {
        ink: {
          DEFAULT: '#0A1628',
          soft: '#1C2A3A',
          muted: '#5A6A7A',
        },
        surface: {
          DEFAULT: '#F3F5F7',
          raised: '#FFFFFF',
          subtle: '#E8ECF0',
        },
        accent: {
          DEFAULT: '#1A6B5C',
          light: '#2A8F7A',
          dark: '#0F4A3F',
          mist: '#E6F2EF',
        },
        sand: {
          DEFAULT: '#C4A574',
          light: '#E8D9C0',
        },
      },
      animation: {
        'fade-up': 'fade-up 0.7s ease-out forwards',
        'fade-in': 'fade-in 0.6s ease-out forwards',
        'float-soft': 'float-soft 8s ease-in-out infinite',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'float-soft': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
    },
  },
  plugins: [],
}
