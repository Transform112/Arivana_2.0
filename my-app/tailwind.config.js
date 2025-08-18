module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
    './index.html',
  ],
  theme: {
    extend: {
      keyframes: {
        'carousel-scroll': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        'carousel-scroll': 'carousel-scroll 30s linear infinite',
      },
    },
  },
  plugins: [require('daisyui')],
}
