// tailwind.config.mjs
// Tailwind CSS configuration for Apple-inspired portfolio

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './public/**/*.svg',
  ],
  theme: {
    extend: {
      colors: {
        white: '#ffffff',
        offwhite: '#f5f5f7',
        gray: '#e5e5e5',
        black: '#000000',
      },
      fontFamily: {
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          'Inter',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
      },
      boxShadow: {
        card: '0 4px 16px 0 rgba(0,0,0,0.04)',
      },
      borderRadius: {
        lg: '16px',
      },
      maxWidth: {
        'screen-2xl': '1440px',
      },
      gridTemplateColumns: {
        fluid: 'repeat(12, minmax(0, 1fr))',
      },
    },
  },
  plugins: [],
}; 