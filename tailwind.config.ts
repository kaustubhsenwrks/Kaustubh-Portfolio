import type { Config } from 'tailwindcss';

export default {
  darkMode: ['class'],
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: { bg: '#05070f', cyan: '#3cf7ff' },
      boxShadow: { glow: '0 0 24px rgba(60,247,255,.3)' },
      backgroundImage: { grid: 'linear-gradient(rgba(60,247,255,.08) 1px, transparent 1px), linear-gradient(90deg, rgba(60,247,255,.08) 1px, transparent 1px)' }
    }
  },
  plugins: []
} satisfies Config;
