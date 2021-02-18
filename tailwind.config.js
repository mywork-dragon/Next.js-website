const createDepths = require('./libs/tailwind/createDepths');

const rem = (value) => {
  return `${value / 16}rem`;
};

const depths = {
  2: 7,
};

const colors = {
  blue: {
    500: '#143DB0',
    400: '#041925',
    300: '#062233',
    200: '#0E284F',
    100: '#305EED',
  },
  gray: {
    600: '#D5DFE9',
    500: '#2A5D7D',
    400: '#4781A8',
    300: '#80B0C8',
    200: '#BFD8E4',
    100: '#F2F2F2',
  },
  green: {
    500: '#25A055',
    400: '#2B9C57',
    300: '#53D084',
  },
  red: {
    300: '#E15454',
  },
  white: '#FFFFFF',
  orange: {
    300: '#F2A143',
    100: '#CB7F27',
  },
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

const spacing = {
  1.75: rem(7),
  3.75: rem(15),
  6.5: rem(26),
  8.75: rem(35),
  13: rem(52),
  14.5: rem(58),
  15: rem(60),
  31.75: rem(127),
  41.75: rem(167),
  43.75: rem(175),
  50: rem(200),
  51.75: rem(207),
  53.75: rem(215),
};

const padding = {
  1.6: rem(7),
  4.5: rem(18),
  4.6: rem(19),
  19: rem(74),
};

const borderRadius = {
  '2.5xl': rem(20),
  '4xl': rem(28),
};

module.exports = {
  purge: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{vue,js,ts,jsx,tsx}',
  ],
  corePlugins: {
    container: false,
  },
  darkMode: 'media',
  theme: {
    extend: {
      borderRadius,
      colors,
      fontFamily,
      fontSize,
      lineHeight,
      padding,
      spacing,
      depths,
    },
  },
  variants: {},
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.container': {
          maxWidth: '100%',
          padding: `0 ${rem(20)}`,

          '@screen md': {
            maxWidth: rem(1080),
            margin: '0 auto',
          },
        },
      });
    },
    createDepths,
  ],
};
