/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'mono': ['JetBrains Mono', 'Fira Code', 'monospace'],
        'sans': ['Inter', 'Roboto', 'sans-serif'],
      },
      colors: {
        cyber: {
          emerald: '#10B981',
          cyan: '#06B6D4',
          purple: '#8B5CF6',
          yellow: '#F59E0B',
        }
      },
      animation: {
        'matrix': 'matrix 20s linear infinite',
        'glow': 'glow 2s ease-in-out infinite alternate',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      backdropBlur: {
        'xs': '2px',
      },
      boxShadow: {
        'glow-emerald': '0 0 20px rgba(16, 185, 129, 0.3)',
        'glow-cyan': '0 0 20px rgba(6, 182, 212, 0.3)',
        'glow-purple': '0 0 20px rgba(139, 92, 246, 0.3)',
      }
    },
  },
  plugins: [],
};