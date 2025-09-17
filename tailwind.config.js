/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cosmic: {
          black: '#000000',
          gray: '#1A1A1A',
          blue: '#00BFFF',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        orbitron: ['Orbitron', 'monospace'],
      },
      animation: {
        'scroll': 'scroll 20s linear infinite',
        'pulse-slow': 'pulse 3s ease-in-out infinite',
        'bounce-slow': 'bounce 2s infinite',
      },
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        }
      },
      backgroundImage: {
        'cosmic-gradient': 'linear-gradient(135deg, #000000 0%, #1A1A1A 50%, #000000 100%)',
        'starry': 'radial-gradient(circle at 25% 25%, #00BFFF 0%, transparent 50%), radial-gradient(circle at 75% 75%, #1A1A1A 0%, transparent 50%)',
      }
    },
  },
  plugins: [],
}