import createCards from './createCards';
import { TailwindComponents } from './createDepths';

// a mock function which logs components to console
const addComponents = (components: TailwindComponents) => {
  console.log(JSON.stringify(components, null, 2));
};

const theme = (query: string): any =>
  query == 'cards.variants' ? variants : undefined;

const variants = {
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
  fake: {
    base: 'base',
    shadow: '',
  },
};

createCards({ addComponents, theme });
