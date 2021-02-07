const rem = (value) => {
  return `${value / 16}rem`;
};

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
    400: '#2B9C57',
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
  xxs: rem(14),
  xs: rem(16),
  sm: rem(18),
  md: rem(20),
  base: rem(20),
  lg: rem(24),
  xl: rem(28),
  xxl: rem(36),
  '3xl': rem(44),
  '4xl': rem(50),
};

const lineHeight = {
  3: rem(12),
  4: rem(18),
  5: rem(20),
  6: rem(22),
  7: rem(24),
  8: rem(26),
  9: rem(28),
  10: rem(30),
  11: rem(32),
  12: rem(36),
  13: rem(40),
  14: rem(42),
  15: rem(44),
  16: rem(46),
  17: rem(48),
  18: rem(52),
  19: rem(56),
  20: rem(60),
  21: rem(64),
};

const padding = {
  4.5: rem(18),
};

const borderRadius = {
  '4xl': rem(28),
};

module.exports = {
  purge: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{vue,js,ts,jsx,tsx}',
  ],
  darkMode: 'media',
  theme: {
    extend: {
      borderRadius,
      colors,
      fontFamily,
      fontSize,
      lineHeight,
      padding,
    },
  },
  variants: {},
  plugins: [],
};
