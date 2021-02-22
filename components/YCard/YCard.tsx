import React, {
  AriaAttributes,
  createElement,
  Children,
  cloneElement,
} from 'react';

import { CardType, CardColor } from '@/enums/components';
import IconPlaceholder from '../Icons/IconPlaceholder';

interface CardProps extends AriaAttributes {
  title?: string;
  description?: string;
  type?: CardType;
  Icon?: typeof IconPlaceholder;
  color?: CardColor;
  empty?: boolean;
}

interface Props extends CardProps {
  as?: keyof JSX.IntrinsicElements;
  className?: string;
  children?: React.ReactNode;
  style?: React.CSSProperties;
}

enum TextPosition {
  Title = 'title',
  Subtitle = 'subtitle',
}

// wrapper component
const YCard = ({
  as: CustomTag,
  className: classes,
  children,
  style,
  ...props
}: Props): JSX.Element => {
  const className = ['w-43.6 h-53.6 pl-2 pb-2', classes].join(' ');

  return createElement(
    CustomTag || 'div',
    {
      style,
      className,
    },
    Card({ ...props }),
    children
  );
};

// main component function
const Card = ({
  Icon,
  title,
  description,
  color = CardColor.White,
  type = CardType.Fill,
  empty,
  ...props
}: CardProps): JSX.Element => {
  // display text or placeholders
  const displayText = !(
    type === CardType.Transparent ||
    !title ||
    !description
  );

  // get classes for title or first placeholder
  const titleClasses = [
    displayText
      ? getTextClasses(TextPosition.Title, color)
      : getPlaceholderClasses(TextPosition.Title, color, type),
  ].join(' ');

  // get classes for description or second placeholder
  const descriptionClasses = [
    displayText
      ? getTextClasses(TextPosition.Subtitle, color)
      : getPlaceholderClasses(TextPosition.Subtitle, color, type),
  ].join(' ');

  const titleTag = displayText ? 'h5' : 'div';
  const descriptionTag = displayText ? 'p' : 'div';

  // create text components or corresponding placeholders
  const titleComp = createElement(
    titleTag,
    {
      className: titleClasses,
    },
    displayText ? title : null
  );

  const descriptionComp = createElement(
    descriptionTag,
    {
      className: descriptionClasses,
    },
    displayText ? description : null
  );

  // create icon component
  const displayIcon = type == CardType.Fill;

  const iconClasses = getIconClasses(color, type).concat(' z-30');

  const iconProps = { width: '100%', height: '100%' };
  const icon = !displayIcon ? null : Icon ? (
    <Icon {...iconProps} />
  ) : (
    <IconPlaceholder {...iconProps} />
  );

  const iconComponent = createElement(
    'div',
    {
      className: iconClasses,
    },
    icon
  );

  // create classes for outermost component
  const className = getTopfaceClasses(color, type);

  const children = !empty ? [iconComponent, titleComp, descriptionComp] : null;

  return createElement(
    'div',
    {
      className,
    },
    children
  );
};

/** styling functions and className objects **/

/* topface */
const getTopfaceClasses = (color: CardColor, type: CardType) => {
  const transparent = type == CardType.Transparent;
  const { base } = topfaceClasses;

  const baseColor = topfaceClasses.variants.color[color];

  const background = `bg-${baseColor}`;
  const depth = transparent
    ? `depth-2-${baseColor}-secondary`
    : topfaceClasses.variants.depth[color];
  const additionalClasses =
    type == CardType.Transparent ? 'bg-opacity-15 border-opacity-15' : '';

  return [...base, background, depth, additionalClasses].join(' ');
};

const topfaceClasses = {
  base: [
    'ml-2',
    'rounded',
    'z-10',
    'w-40',
    'h-50',
    'pt-6.5',
    'card-blue-transparent',
  ],
  variants: {
    color: {
      [CardColor.White]: 'white',
      [CardColor.Gray]: 'gray-150',
      [CardColor.Blue]: 'blue-100',
      [CardColor.Green]: 'green-300',
      [CardColor.Orange]: 'orange-300',
    },
    depth: {
      [CardColor.White]: 'depth-2-gray-150',
      [CardColor.Gray]: 'depth-2-white',
      [CardColor.Blue]: 'depth-2-blue-150',
      [CardColor.Green]: 'depth-2-green-350',
      [CardColor.Orange]: 'depth-2-orange-100',
    },
  },
};

/* icons */
const getIconClasses = (color: CardColor, type: CardType) => {
  const variant = [CardColor.White].includes(color) ? 'light' : 'dark';

  const { base, variants } = iconClasses;

  const variantClasses =
    type == CardType.Transparent
      ? [...variants[type], `bg-${topfaceClasses.variants.color[color]}`]
      : variants[variant];

  return [...base, ...variantClasses].join(' ');
};

const iconClasses = {
  base: ['w-15', 'h-15', 'top-6.5', 'mx-auto', 'mb-4.6'],
  variants: {
    [CardType.Transparent]: ['-translate-x-0.5', 'rounded-2.5xl', 'opacity-40'],
    light: ['text-gray-200'],
    dark: ['text-white'],
  },
};

/* text */
const getTextClasses = (position: TextPosition, color: CardColor) => {
  const variant = [CardColor.White, CardColor.Gray].includes(color)
    ? 'light'
    : 'dark';

  const { base } = textClasses;
  const variants = textClasses.variants[position];

  return [...base, ...variants.base, variants[variant]].join(' ');
};

const textClasses = {
  base: ['mt-1', 'text-center', 'text-xs', 'leading-5'],
  variants: {
    [TextPosition.Title]: {
      base: ['serif', 'font-bold'],
      light: 'text-blue-100',
      dark: 'text-white',
    },
    [TextPosition.Subtitle]: {
      base: ['sans', 'font-semibold'],
      light: 'text-gray-300',
      dark: 'text-white',
    },
  },
};

/* text placeholder */
const getPlaceholderClasses = (
  position: TextPosition,
  color: CardColor,
  type: CardType
) => {
  const variant = [CardColor.White].includes(color) ? 'light' : 'dark';

  const { base, variants } = placeholderClasses;

  const colorClasses =
    type == CardType.Transparent
      ? ['opacity-40', `bg-${topfaceClasses.variants.color[color]}`]
      : [...variants.color[color], variants[variant]];

  const positioningClasses = variants[position];

  return [...base, ...colorClasses, ...positioningClasses].join(' ');
};

const placeholderClasses = {
  base: ['absolute', 'h-3.6', 'left-5', 'rounded-sm'],
  variants: {
    [TextPosition.Title]: ['right-6', 'bottom-14.5'],
    [TextPosition.Subtitle]: ['right-13', 'bottom-8.6'],
    light: ['shadow-inset-light'],
    dark: ['shadow-inset-dark'],
    color: {
      [CardColor.White]: ['bg-blue-100', 'opacity-10'],
      [CardColor.Gray]: ['bg-white', 'opacaity-10'],
      [CardColor.Blue]: ['bg-blue-300', 'opacity-30'],
      [CardColor.Green]: ['bg-green-350', 'opacity-40'],
      [CardColor.Orange]: ['bg-orange-100', 'opacity-40'],
    },
  },
};

export default YCard;
