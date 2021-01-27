const colors = {
  blue: {
    400: '#041925',
    300: '#062233',
    200: '#0E284F',
    100: '#305EED',
  },
  gray: {
    500: '#2A5D7D',
    400: '#4781A8',
    300: '#80B0C8',
    200: '#BFD8E4',
    100: '#F2F2F2',
  },
  green: {
    300: '#53D084',
  },
  red: {
    300: '#E15454',
  },
  white: '#FFFFFF',
};

colors.primary = colors.green[300];
colors.secondary = colors.blue[300];

const fontFamily = {
  sans: 'Nunito Sans, serif',
  serif: 'Galano Grotesque Alt, sans-serif',
};

const fontSize = {
  xxs: '0.875rem',
  xs: '1rem',
  sm: '1.125rem',
  md: '1.25rem',
  base: '1.25rem',
  lg: '1.5rem',
  xl: '1.75rem',
  xxl: '2.25rem',
  '3xl': '2.75rem',
  '4xl': '3.125rem',
};

const lineHeight = {
  3: '0.75rem',
  4: '1.125rem',
  5: '1.25rem',
  6: '1.375rem',
  7: '1.5rem',
  8: '1.625rem',
  9: '1.75rem',
  10: '1.875rem',
  11: '2rem',
  12: '2.25rem',
  13: '2.5rem',
  14: '2.625rem',
  15: '2.75rem',
  16: '2.875rem',
  17: '3rem',
  18: '3.25rem',
  19: '3.5rem',
  20: '3.75rem',
  21: '4rem',
};

module.exports = {
  purge: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{vue,js,ts,jsx,tsx}',
  ],
  darkMode: 'media',
  theme: {
    extend: {
      colors,
      fontFamily,
      fontSize,
      lineHeight,
    },
  },
  variants: {},
  plugins: [],
};
