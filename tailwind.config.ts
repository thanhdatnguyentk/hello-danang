import type { Config } from 'tailwindcss';

const palette = {
  bg: '#F7F8F5',
  surface: '#FFFFFF',
  text: '#17221F',
  muted: '#78857E',
  accent: '#326B5B',
  accentHover: '#245343',
  border: '#E5EAE5',
  ocean: '#DCE9E8',
  lowland: '#E0E8DB',
  vegetation: '#A8BDA8',
  highland: '#8FA694',
  rock: '#B5B5A8',
  peak: '#E5E2D8',
};

const config: Config = {
  darkMode: 'class',
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        atlas: palette,
        terrain: palette,
      },
      fontFamily: {
        sans: ['"Be Vietnam Pro"', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        subtle: '0 8px 30px rgba(23, 34, 31, 0.06)',
        floating: '0 12px 40px rgba(23, 34, 31, 0.09)',
        'atlas-sm': '0 4px 14px rgba(23, 34, 31, 0.05)',
        atlas: '0 8px 30px rgba(23, 34, 31, 0.07)',
        'atlas-lg': '0 16px 48px rgba(23, 34, 31, 0.12)',
      },
    },
  },
  plugins: [],
};

export default config;
