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
        'organic': '30% 70% 70% 30% / 30% 30% 70% 70%',
        'organic-sm': '20% 80% 80% 20% / 20% 20% 80% 80%',
        'organic-lg': '40% 60% 60% 40% / 40% 40% 60% 60%',
      },
      boxShadow: {
        'organic': '0 4px 20px -5px rgba(154, 143, 134, 0.15), 0 8px 10px -6px rgba(154, 143, 134, 0.1)',
        'floating': '0 10px 40px -10px rgba(42, 37, 35, 0.2), 0 4px 25px -5px rgba(42, 37, 35, 0.1)',
        'deep': '0 20px 50px -12px rgba(42, 37, 35, 0.25), 0 8px 30px -8px rgba(42, 37, 35, 0.15)',
        'material': '0 2px 8px -2px rgba(0, 0, 0, 0.1), 0 4px 20px -4px rgba(0, 0, 0, 0.05)',
        'luxury': '0 8px 32px -4px rgba(154, 143, 134, 0.08), 0 16px 64px -8px rgba(42, 37, 35, 0.06)',
      },
      backdropBlur: {
        'xs': '2px',
      },
      animation: {
        'float-gentle': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s ease-in-out infinite',
        'shimmer': 'shimmer 3s ease-in-out infinite',
        'organic-blob': 'organicBlob 8s ease-in-out infinite alternate',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        organicBlob: {
          '0%': { borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%' },
          '100%': { borderRadius: '30% 60% 70% 40% / 50% 60% 30% 60%' },
        },
      },
      backgroundImage: {
        'gradient-organic': 'linear-gradient(135deg, #f8f6f3 0%, #f0ebe6 50%, #faf8f5 100%)',
        'gradient-luxury': 'linear-gradient(120deg, #2a2523 0%, #36312f 50%, #7a8b7a 100%)',
        'gradient-silk': 'linear-gradient(145deg, #faf8f5 0%, #f4f1ed 100%)',
        'gradient-stone': 'linear-gradient(135deg, #e6e2dd 0%, #d4cfc8 100%)',
      },
      backdrop: {
        'blur-premium': 'rgba(250, 248, 245, 0.75)',
        'blur-luxury': 'rgba(42, 37, 35, 0.85)',
        'blur-cream': 'rgba(244, 241, 237, 0.8)',
      },
    },
  },
  plugins: [],
}
