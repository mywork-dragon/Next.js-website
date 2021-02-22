import { CSSProperties } from 'react';

import addDepthClasses from './addDepthClasses';
import addSubClasses from './addSubClasses';
import { TailwindOptionsPartial } from './types';

/**
 * Creates somewhat opinionated 3d card components
 * @param param0 object containing Tailwind plugin function parameters
 *
 */
const createCards = ({ addUtilities }: TailwindOptionsPartial) => {
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
  };

  const transformMatrix = 'matrix(0.73, -0.40, 0.8, 0.43, -5, -25)';

  // creates base subclasses as well as color variants
  addSubClasses({ addUtilities });

  const componentsWithDepth = addDepthClasses({
    variants,
    addUtilities,
  });

  // create components
  let cardComponents = {
    '.skew': {
      transformStyle: 'preserve-3d',
      transform: transformMatrix,
    },
  } as Record<string, CSSProperties>;

  Object.keys(componentsWithDepth).forEach((variant) => {
    cardComponents[`.card-${variant}`] = {
      backgroundColor: componentsWithDepth[variant].base,
      [`@apply ${componentsWithDepth[variant].depths.fill.slice(1)}`]: {},
    } as CSSProperties;

    cardComponents[`.card-${variant}-transparent`] = {
      backgroundColor: componentsWithDepth[variant].base,

      [`@apply ${componentsWithDepth[variant].depths.transparent.slice(1)}
      bg-opacity-15`]: {},
    } as CSSProperties;
  });

  addUtilities({ ...cardComponents });
};

export default createCards;
