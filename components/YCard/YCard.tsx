import React, { AriaAttributes, createElement } from 'react';

import { CardType, CardSize, CardColor } from '@/enums/components';

import IconPlaceholder from '@/assets/icons/facebook.svg';

type ChildrenProps = AriaAttributes & {
  title?: string;
  description?: string;
  type?: CardType;
  icon?: SVGElement;
  size?: CardSize;
  color?: CardColor;
  className?: string;
};

type Props = ChildrenProps & {
  as?: keyof JSX.IntrinsicElements;
};

enum Elements {
  Container = 'container',
  Shadow = 'shadow',
  Topface = 'topface',
  TextPlaceholder = 'textPlacehoder',
  Title = 'title',
  Description = 'description',
  Icon = 'icon',
}

const getClasses = (element: Elements, type: CardType, color: CardColor) => {
  const variants = variantClasses[element][type];
  return [
    ...defaultClasses[element],
    ...(variants.common || ''),
    ...variants[color],
  ]
    .join(' ')
    .replace('  ', ' ');
};

// main component
const YCard = ({
  as,
  className: classes = '',
  ...props
}: Props): JSX.Element => {
  const className = [...defaultClasses[Elements.Container], classes].join(' ');
  const CustomTag = as || 'div';

  return createElement(
    CustomTag,
    {
      className,
    },
    createChildren({ ...props })
  );
};

// create children of main component
export const createChildren = ({
  className,
  icon,
  title,
  description,
  color = CardColor.White,
  type = CardType.Fill,
}: ChildrenProps): JSX.Element => {
  const topfaceClasses = getClasses(Elements.Topface, type, color);

  // create text components
  let textComponents = <></>;

  if (type === CardType.Transparent || !title || !description) {
    const textClasses = getClasses(Elements.TextPlaceholder, type, color);

    textComponents = (
      <>
        <div className={[textClasses, 'right-6', 'bottom-14.5'].join(' ')} />
        <div className={[textClasses, 'right-13', 'bottom-8.6'].join(' ')} />
      </>
    );
  } else {
    const titleClasses = getClasses(Elements.Title, type, color);
    const descriptionClasses = getClasses(Elements.Description, type, color);

    textComponents = (
      <>
        <div className={[titleClasses, ''].join(' ')} />
        <div className={[descriptionClasses, ''].join(' ')} />
      </>
    );
  }

  // create icon component
  const iconClasses = getClasses(Elements.Icon, type, color);

  const iconComponent = createElement('img', {
    className: iconClasses,
    href: icon || IconPlaceholder,
  });

  return (
    <div className={[topfaceClasses, className].join(' ')}>
      {iconComponent}
      {textComponents}
    </div>
  );
};

const defaultClasses = {
  [Elements.Container]: ['w-43.6', 'h-53.6', 'border', 'border-primary'],
  [Elements.Topface]: ['ml-2', 'rounded', 'z-10', 'w-40', 'h-50'],
  [Elements.TextPlaceholder]: ['absolute', 'h-3.6', 'left-5', 'rounded-sm'],
  [Elements.Title]: [],
  [Elements.Description]: [],
  [Elements.Icon]: ['absolute', 'w-15', 'h-15', 'top-6.5'],
};

const variantClasses = {
  [Elements.Topface]: {
    [CardType.Fill]: {
      [CardColor.White]: ['bg-white', 'depth-2-gray-600'],
      [CardColor.Gray]: ['bg-gray-600', 'depth-2-white'],
      [CardColor.Blue]: ['bg-blue-100', 'depth-2-blue-500'],
      [CardColor.Green]: ['bg-green-300', 'depth-2-green-500'],
      [CardColor.Orange]: ['bg-orange-300', 'depth-2-orange-100'],
    },
    [CardType.Transparent]: {
      [CardColor.Blue]: [],
      [CardColor.Green]: [],
      [CardColor.Orange]: [],
    },
  },

  [Elements.TextPlaceholder]: {
    [CardType.Fill]: {
      [CardColor.White]: ['bg-blue-100', 'opacity-10', 'shadow-inset-light'],
      [CardColor.Gray]: ['bg-white', 'opacaity-10', 'shadow-inset-dark'],
      [CardColor.Blue]: ['bg-blue-600', 'opacity-30', 'shadow-inset-dark'],
      [CardColor.Green]: ['bg-green-500', 'opacity-40', 'shadow-inset-dark'],
      [CardColor.Orange]: ['bg-orange-100', 'opacity-40', 'shadow-inset-dark'],
    },
    [CardType.Transparent]: {
      [CardColor.Blue]: [],
      [CardColor.Green]: [],
      [CardColor.Orange]: [],
    },
  },

  [Elements.Description]: {
    [CardType.Fill]: {
      [CardColor.White]: ['bg-blue-100', 'opacity-10', 'shadow-inset-light'],
      [CardColor.Gray]: ['bg-white', 'opacaity-10', 'shadow-inset-dark'],
      [CardColor.Blue]: ['bg-blue-600', 'opacity-30', 'shadow-inset-dark'],
      [CardColor.Green]: ['bg-green-500', 'opacity-40', 'shadow-inset-dark'],
      [CardColor.Orange]: ['bg-orange-100', 'opacity-40', 'shadow-inset-dark'],
    },
    [CardType.Transparent]: {
      [CardColor.Blue]: [],
      [CardColor.Green]: [],
      [CardColor.Orange]: [],
    },
  },

  [Elements.Title]: {
    [CardType.Fill]: {
      [CardColor.White]: ['bg-blue-100', 'opacity-10', 'shadow-inset-light'],
      [CardColor.Gray]: ['bg-white', 'opacaity-10', 'shadow-inset-dark'],
      [CardColor.Blue]: ['bg-blue-600', 'opacity-30', 'shadow-inset-dark'],
      [CardColor.Green]: ['bg-green-500', 'opacity-40', 'shadow-inset-dark'],
      [CardColor.Orange]: ['bg-orange-100', 'opacity-40', 'shadow-inset-dark'],
    },
    [CardType.Transparent]: {
      [CardColor.Blue]: [],
      [CardColor.Green]: [],
      [CardColor.Orange]: [],
    },
  },

  [Elements.Icon]: {
    [CardType.Fill]: {
      common: ['left-12.5'],
      [CardColor.White]: ['font-gray-200'],
      [CardColor.Gray]: ['font-blue-100'],
      [CardColor.Blue]: ['font-blue-100'],
      [CardColor.Green]: ['font-blue-100'],
      [CardColor.Orange]: ['font-blue-100'],
    },
    [CardType.Transparent]: {
      [CardColor.Blue]: [],
      [CardColor.Green]: [],
      [CardColor.Orange]: [],
    },
  },
};

export default YCard;
