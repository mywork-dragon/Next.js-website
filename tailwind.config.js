const {
  default: createCards,
} = require('./libs/tailwind/cardsPlugin/createCards');

const rem = (value) => {
  return `${value / 16}rem`;
};

const colors = {
  blue: {
    400: '#041925',
    350: '#11305A',
    300: '#062233',
    250: '#0A1536',
    200: '#0E284F',
    150: '#143DB0',
    100: '#305EED',
    50: '#2f4571',
  },
  gray: {
    600: '#4f5e66',
    500: '#2A5D7D',
    400: '#4781A8',
    300: '#80B0C8',
    200: '#BFD8E4',
    150: '#D5DFE9',
    100: '#F2F2F2',
  },
  green: {
    400: '#2B9C57',
    350: '#25A055',
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
  soft: 'rgba(99, 152, 255, 0.1)', // header "soft white" border
  'soft-white': 'rgba(255, 255, 255, 0.1)', // our services card "soft white" border
  'white-40': 'rgba(255, 255, 255, 0.4)', // our services card "soft white" border
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
  xll: rem(32), // add new
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
  12.5: rem(38), // add new
  13: rem(40),
  14: rem(42),
  15: rem(44),
  16: rem(46),
  17: rem(48),
  18: rem(52),
  19: rem(56),
  20: rem(60),
  21: rem(64),
  22: rem(68),
};

const spacing = {
  0.5: rem(2),
  1.9: rem(7),
  2.5: rem(10),
  3.5: rem(14),
  5.5: rem(22),
  6.5: rem(26),
  7: rem(28),
  7.5: rem(30),
  8.5: rem(34),
  11: rem(44),
  10.5: rem(42),
  12.5: rem(50),
  13: rem(52),
  13.6: rem(55),
  14.1: rem(57),
  15: rem(60),
  15.5: rem(62),
  16.1: rem(65),
  16.6: rem(67),
  20.1: rem(81),
  21: rem(84),
  21.6: rem(87),
  22: rem(88),
  22.5: rem(90),
  23: rem(92),
  23.5: rem(94),
  23.6: rem(95),
  25: rem(100),
  26: rem(104),
  27: rem(108),
  28.5: rem(114),
  30: rem(120),
  30.5: rem(122),
  31: rem(124),
  31.1: rem(125),
  31.5: rem(126),
  32.5: rem(130),
  33: rem(132),
  34: rem(136),
  35: rem(140),
  37.5: rem(150),
  42: rem(168),
  42.1: rem(169),
  43: rem(172),
  43.6: rem(175),
  45: rem(180),
  48.5: rem(194),
  49: rem(196),
  50: rem(200),
  52.5: rem(210),
  53.5: rem(214),
  53.6: rem(215),
  55: rem(220),
  56.1: rem(225),
  58.5: rem(234),
  61.6: rem(247),
  65: rem(260),
  68.5: rem(274),
  70: rem(280),
  72: rem(288),
  73.6: rem(295),
  74.6: rem(299),
  75: rem(300),
  76.6: rem(307),
  81.1: rem(325),
  81.6: rem(327),
  82.5: rem(330),
  83.1: rem(333),
  88.1: rem(353),
  90: rem(360),
  91.6: rem(367),
  93.6: rem(375),
  94.6: rem(379),
  97.5: rem(390),
  99.1: rem(397),
  100: rem(400),
  101.5: rem(406),
  103.1: rem(413),
  105: rem(420),
  109.5: rem(438),
  110: rem(440),
  111.1: rem(445),
  114.1: rem(457),
  124.1: rem(497),
  128.5: rem(514),
  130.1: rem(521),
  130.5: rem(522),
  148: rem(592),
  156: rem(624),
  185.1: rem(741),
  185.5: rem(742),
  200: rem(800),
  210: rem(840),
  223.6: rem(895),
  224.1: rem(897),
  233: rem(932),
  291.5: rem(1166),
  420: rem(1680),
  500: rem(2000),
  535: rem(2140),
  //
  113.1: rem(453),
  150: rem(600),
  125: rem(500),
  120: rem(480),
  11.5: rem(46),
  31.6: rem(127),
  19: rem(76),
  196.6: rem(787),
  138.6: rem(555),
  218.6: rem(875),
  42.5: rem(170),
  20.5: rem(82),
  86.6: rem(347),
  //
  54.5: rem(218),
  190: rem(760),
  145: rem(580),
};

const minHeight = {
  14.1: rem(57),
};

const boxShadow = {
  'inset-light': 'inset 0px 2px 0px #233057',
  'inset-dark': 'inset 0px 2px 0px #1C1C1C',
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
  20: rem(80),
};

const cards = {
  variants: {
    white: {
      base: '#FFFFFF',
      shadow: '#D5DFE9',
    },
    gray: {
      base: '#D5DFE9',
      shadow: '#FFFFFF',
    },
    blue: {
      base: '#305EED',
      shadow: '#143DB0',
    },
    green: {
      base: '#53D084',
      shadow: '#25A055',
    },
    orange: {
      base: '#F2A143',
      shadow: '#CB7F27',
    },
  },
};

const opacity = {
  15: '0.15',
};

const scale = {
  65: '0.65',
  79: '0.79',
  85: '0.85',
  86: '0.86',
  92: '0.92',
  93: '0.93',
  94: '0.94',
};

const inset = {
  '1/8': '12.5%',
};

const screens = {
  sm: '414px',
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
      boxShadow,
      opacity,
      scale,
      minHeight,
      inset,
      screens,
    },
    cards,
  },
  variants: {
    extend: {
      margin: ['first', 'last'],
      borderStyle: ['focus', 'hover'],
    },
  },
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
        '.fill-current path': {
          fill: 'currentColor',
        },
        '.drop-shadow': {
          filter: 'drop-shadow(0 1.25rem 5rem rgba(0, 0, 0, 0.8))',
        },
        '.no-x-gridline': {
          boxShadow: '2px 0 #062233, -2px 0 #062233',
        },
        '.text-shadow': {
          boxShadow:
            '-12.5rem -8.125rem 2.5rem 1.25rem rgba(6, 34, 51, 0.8), -1.25rem -0.625rem 1.25rem 2.5rem rgba(6, 34, 51, 0.8)',
        },
        '.scroll-shadow': {
          boxShadow:
            '3.5rem 0 50px 125px rgba(6, 34, 51, 0.3), 3.5rem 0 50px 125px rgba(32, 56, 118, 1)',
        },
        '.scale-left-75': {
          transform: 'translateX(-12.5%) scale(0.75)',
        },
        '.scale-left-65': {
          transform: 'translate(-17.5%, -17.5%) scale(0.65)',
        },
        '.no-scrollbar::-webkit-scrollbar': {
          height: 0,
          width: 0,
        },
        '.button-shadow': {
          boxShadow: '0 -30px 10px 15px #0E284F',
        },
        '.blur-1': {
          filter: 'blur(1px)',
        },
        '.blur-3': {
          filter: 'blur(3px)',
        },
        '.blur-5': {
          filter: 'blur(5px)',
        },
      });
    },
    createCards,
  ],
};
