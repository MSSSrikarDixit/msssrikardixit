module.exports = {
  content: ['./src/**/*.{astro,html,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        accent: '#0f172a'
      },
      keyframes: {
        floaty: { '0%': { transform: 'translateY(0px)' }, '50%': { transform: 'translateY(-6px)' }, '100%': { transform: 'translateY(0px)' } },
        fadeUp: { '0%': { opacity: 0, transform: 'translateY(18px)' }, '100%': { opacity: 1, transform: 'translateY(0)' } }
      },
      animation: {
        floaty: 'floaty 4s ease-in-out infinite',
        fadeUp: 'fadeUp 0.6s ease forwards'
      }
    }
  },
  plugins: []
};