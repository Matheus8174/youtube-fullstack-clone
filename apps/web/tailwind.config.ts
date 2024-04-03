import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    colors: {
      white: '#FFF',
      gray: '#AAAAAA',
      blue: '#3DA6FF',
      black: {
        100: '#474747',
        200: '#383838',
        300: '#323232',
        400: '#212121',
        500: '#181818',
        600: '#121212'
      }
    }
  },
  plugins: []
};

export default config;
