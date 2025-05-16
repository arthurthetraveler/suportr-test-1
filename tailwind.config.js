/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        'halo-glow': {
          '0%, 100%': { transform: 'translateY(-50%) scale(1)', opacity: '0.4' },
          '50%': { transform: 'translateY(-50%) scale(1.3)', opacity: '0.6' },
        },
        'soft-pulse': {
          '0%, 100%': { transform: 'translateY(-50%) scale(1)', opacity: '0.6' },
          '50%': { transform: 'translateY(-50%) scale(1.2)', opacity: '0.8' },
        },
      },
      animation: {
        'halo-glow': 'halo-glow 6s ease-in-out infinite',
        'soft-pulse': 'soft-pulse 3s ease-in-out infinite',
      },
    },
  
    },
  }
  
  

