import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        white: '#FFFFFF',
        yellow: '#FFD74B',
        orange: '#FF9E2B',
        'light-red': '#FDD5DA',
        'dark-red': '#FF5E75',
        'light-green': '#B8E9D4',
        'dark-green': '#2CC483',
        black: '#000000',
        blue: '#696FFB',
      },
    },
  },
  plugins: [],
};
export default config;
