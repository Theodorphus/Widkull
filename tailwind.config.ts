import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          green: '#55A85B',
          'green-dark': '#3D8042',
          'green-light': '#E8F6EB',
          'green-lighter': '#F0F8F3',
          white: '#FFFFFF',
          dark: '#32373c',
          'dark-bg': '#1A1A1A',
        },
        navy: '#0A1A2F',
        petrol: '#0F3A47',
        'dark-section': '#1C3A1E',
      },
      fontFamily: {
        display: 'var(--font-display)',
      },
      spacing: {
        'section-sm': '40px',
        'section-lg': '80px',
      },
      borderRadius: {
        'card': '12px',
        'full-round': '9999px',
      },
      boxShadow: {
        'subtle': '0 2px 8px rgba(0, 0, 0, 0.05)',
        'medium': '0 4px 16px rgba(0, 0, 0, 0.1)',
        'strong': '0 8px 24px rgba(0, 0, 0, 0.15)',
        'green-glow': '0 8px 24px rgba(85, 168, 91, 0.12)',
      },
      backgroundImage: {
        'gradient-hero': 'linear-gradient(to right, #F8FAFB, #EFF4F7)',
        'gradient-cta': 'linear-gradient(to bottom, #E8F6EB, #F0FAF2)',
      },
    },
  },
  plugins: [],
}

export default config
