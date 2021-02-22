import { CSSProperties } from 'react';

import { TailwindOptionsPartial } from './createCards';

// variants with respet to color
const placeholder = {
  white: {
    backgroundColor: '#305EED',
    opacity: 0.1,
  },
  gray: {
    backgroundColor: '#305EED',
    opacity: 0.1,
  },
  blue: {
    backgroundColor: '#062233',
    opacity: 0.3,
  },
  green: {
    backgroundColor: '#25A055',
    opacity: 0.4,
  },
  orange: {
    backgroundColor: '#CB7F27',
    opacity: 0.4,
  },
};

const addSubClassVariants = ({
  variants,
  addComponents,
}: TailwindOptionsPartial & {
  variants: Record<string, any>;
}) => {
  let subClassVariants = {} as Record<string, CSSProperties>;

  Object.keys(variants).forEach((color) => {
    // add placeholder variants
    subClassVariants[`.card-${color} .placeholder`] = {
      ...placeholder[color],
      boxShadow:
        color == 'white'
          ? 'inset 0px 2px 0px #233057'
          : 'inset 0px 2px 0px #1C1C1C',
    };

    subClassVariants[`.card-${color}-transparent .placeholder`] = {
      backgroundColor: variants[color].base,
      [`@apply bg-opacity-40`]: {},
    } as CSSProperties;

    // add icon variants
    subClassVariants[`.card-${color} .icon`] = {
      color: ['white', 'gray'].includes(color) ? '#BFD8E4' : '#FFFFFF',
    };

    subClassVariants[`.card-${color}-transparent .icon`] = {
      opacity: '0.4',
      transform: 'translateX(2px)',
      border: 'none',
      borderRadius: '20px',
    };

    // add text variants
    subClassVariants[`.card-${color} .title`] = {
      color: ['white', 'gray'].includes(color) ? '#305EED' : '#FFFFFF',
    };

    subClassVariants[`.card-${color} .subtitle`] = {
      color: ['white', 'gray'].includes(color) ? '#80B0C8' : '#FFFFFF',
    };
  });

  addComponents({ ...subClassVariants });
};

export default addSubClassVariants;
