import type { Config } from 'tailwindcss';
import { nextui } from '@nextui-org/react';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      primary: '#1F518A',
      secondary: '#013066',
      tertiary: '#C1D4EA',
      disable: '#E9E9E9',
      gray: '#D1D1D1',
      white: '#ffffff',
      black: '#000000',
      main: {
        normal: '#4DACD8',
        active: '#36A1D3',
      },
      success: {
        normal: '#22C55E',
        active: '#15803D',
      },
      warning: {
        normal: '#F59E0B',
        active: '#D97706',
      },
      danger: {
        normal: '#DC2626',
        active: '#991b1b',
      },
    },
  },
  plugins: [nextui()],
};
export default config;
