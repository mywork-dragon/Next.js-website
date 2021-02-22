import { CSSProperties } from 'react';

import { DepthTuple, TailwindComponents } from './createDepths';
import addDepthClasses from './addDepthClasses';
import addSubClasses from './addSubClasses';

export interface TailwindOptionsPartial {
  addComponents?: (components: TailwindComponents) => any;
  theme?: <
    T extends
      | 'cards.variants'
      | 'cards.skew'
      | 'cards.background'
      | 'cards.depth'
      | 'cards.transformMatrix'
  >(
    query: T
  ) => T extends 'cards.skew'
    ? number | undefined
    : T extends 'cards.background' | 'cards.transformMatrix'
    ? string | undefined
    : T extends 'cards.depth'
    ? DepthTuple | undefined
    : Record<string, Variant> | undefined;
}

export interface Variant {
  base: string;
  shadow: string;
}

const baseStyles = {
  marginLeft: '8px',
  border: 'none',
  borderRadius: '4px',
  width: '160px',
  height: '200px',
  paddingTop: '26px',
  zIndex: '10',
};

/**
 * Creates somewhat opinionated 3d card components
 * @param param0 object containing Tailwind plugin function parameters
 *
 */
const createCards = ({ addComponents, theme }: TailwindOptionsPartial) => {
  //const transformMatrix = 'matrix(0.73, -0.40, 0.8, 0.43, -5, -25)';

  const transformMatrix =
    theme('cards.transformMatrix') || 'matrix(1, 0, 0, 1, 0, 0)';

  const variants = {
    white: {
      base: '#FFFFFF',
      shadow: '#D5DFE9',
    },
    ...theme('cards.variants'),
  };

  // creates base subclasses as well as color variants
  addSubClasses({ addComponents, theme });

  const componentsWithDepth = addDepthClasses({
    variants,
    addComponents,
    theme,
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
      ...baseStyles,
      backgroundColor: componentsWithDepth[variant].base,
      [`@apply ${componentsWithDepth[variant].depths.fill.slice(1)}`]: {},
    } as CSSProperties;

    cardComponents[`.card-${variant}-transparent`] = {
      ...baseStyles,
      backgroundColor: componentsWithDepth[variant].base,

      [`@apply ${componentsWithDepth[variant].depths.transparent.slice(1)}
      bg-opacity-40`]: {},
    } as CSSProperties;
  });

  addComponents({ ...cardComponents });
};

export default createCards;
