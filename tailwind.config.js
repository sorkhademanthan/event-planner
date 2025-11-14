/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        taupe: '#9a8f86',
        cream: '#f4f1ed',
        charcoal: '#36312f',
        'soft-white': '#f9f9f9',
        // Organic color extensions for zen luxury
        sand: '#f8f6f3',
        linen: '#f0ebe6',
        stone: '#e6e2dd',
        silk: '#faf8f5',
        'warm-taupe': '#a8988b',
        'deep-charcoal': '#2a2523',
        moss: '#7a8b7a',
      },
      fontFamily: {
        playfair: ['Playfair Display', 'Georgia', 'serif'],
        script: ['Pinyon Script', 'cursive'],
        montserrat: ['Montserrat', 'sans-serif'],
      },
      fontSize: {
        'xs': ['12px', { lineHeight: '1.5', letterSpacing: '0.01em' }],
        'sm': ['14px', { lineHeight: '1.6', letterSpacing: '0.01em' }],
        'base': ['16px', { lineHeight: '1.75', letterSpacing: '0.01em' }],
        'lg': ['20px', { lineHeight: '1.6', letterSpacing: '0.01em' }],
        'xl': ['25px', { lineHeight: '1.4', letterSpacing: '0' }],
        '2xl': ['31px', { lineHeight: '1.3', letterSpacing: '-0.01em' }],
        '3xl': ['39px', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
        '4xl': ['49px', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
        '5xl': ['61px', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
      },
      spacing: {
        '1': '8px',
        '2': '16px',
        '3': '24px',
        '4': '32px',
        '5': '40px',
        '6': '48px',
        '8': '64px',
        '10': '80px',
        '12': '96px',
        '16': '128px',
        '20': '160px',
      },
      maxWidth: {
        'container': '1200px',
        'prose': '65ch',
      },
      transitionTimingFunction: {
        'smooth': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'material': 'cubic-bezier(0.4, 0.0, 0.2, 1)',
      },
      transitionDuration: {
        'instant': '100ms',
        'fast': '200ms',
        'base': '300ms',
        'slow': '500ms',
        'slower': '700ms',
      },
      borderRadius: {
        'lg': '12px',
        'xl': '16px',
        '2xl': '24px',
      },
    },
  },
  plugins: [],
}
