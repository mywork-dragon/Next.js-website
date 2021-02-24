import { CSSProperties } from 'react';

import addDepthClasses from './addDepthClasses';
import addSubClasses from './addSubClasses';
import { TailwindOptionsPartial } from './types';
import addOpacity from '../utils/addOpacity';
import addHoverClasses from '../utils/addHoverClasses';

/**
 * Creates somewhat opinionated 3d card components
 * @param param0 object containing Tailwind plugin function parameters
 *
 */
const createCards = ({ addComponents, e, theme }: TailwindOptionsPartial) => {
  // get config data
  const variants = {
    white: {
      base: '#FFFFFF',
      shadow: '#D5DFE9',
    },
    ...theme('cards.variants'),
  };

  // creates base subclasses as well as color variants
  const subClasses = addSubClasses({ theme });

  // adds depth effect using shadow
  const componentsWithDepth = addDepthClasses({
    variants,
    addComponents,
  });

  // create components
  let cardComponents = {} as Record<string, CSSProperties>;

  Object.keys(componentsWithDepth).forEach((variant) => {
    cardComponents[`.card-${variant}`] = {
      backgroundColor: componentsWithDepth[variant].base,
      [`@apply ${componentsWithDepth[variant].depths.fill.slice(1)}`]: {},
    } as CSSProperties;

    cardComponents[`.card-${variant}-transparent`] = {
      backgroundColor: addOpacity(componentsWithDepth[variant].base, 0.15),
      [`@apply ${componentsWithDepth[variant].depths.transparent.slice(
        1
      )}`]: {},
    } as CSSProperties;
  });

  addComponents(addHoverClasses({ ...cardComponents, ...subClasses }, e));
};

export default createCards;
