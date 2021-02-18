import React, { AriaAttributes, createElement } from 'react';
import styles from './YCard.module.css';

import { CardType, CardSize, CardColor } from '@/enums/components';

type ChildrenProps = AriaAttributes & {
  title?: string;
  description?: string;
  type?: CardType;
  icon?: string;
  size?: CardSize;
  color?: CardColor;
};

type Props = ChildrenProps & {
  as?: keyof JSX.IntrinsicElements;
  className?: string;
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

// const YCard: React.FC<Props> = () => {
//   return (
//     <div className={defaultClasses[Elements.Container].join(' ')}>
//       <div
//         className={[
//           ...defaultClasses[Elements.Topface],
//           ...defaultClasses[Elements.Shadow],
//         ].join(' ')}
//       ></div>
//     </div>
//   );
// };

// const getVariantClasses = (color: CardColor, type: CardType) => {
//   const colorClasses = classesByColor[color];
//   const typeClasses = classesByType[type];
// };

const getClasses = (element: Elements, type: CardType, color: CardColor) =>
  [...defaultClasses[element], ...variantClasses[element][type][color]].join(
    ' '
  );

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

const createChildren = ({
  icon,
  title,
  description,
  color = CardColor.White,
  type = CardType.Fill,
}: ChildrenProps): JSX.Element => {
  const topfaceClasses = getClasses(Elements.Topface, type, color);

  // const iconClasses = [...defaultClasses[Elements.Icon]].join(' ');
  // const textPlaceholderClasses = [
  //   ...defaultClasses[Elements.TextPlaceholder],
  // ].join(' ');

  return <div className={topfaceClasses}></div>;
};

const defaultClasses = {
  [Elements.Container]: ['w-43.75', 'h-53.75', 'border', 'border-primary'],
  [Elements.Topface]: ['ml-2', 'rounded', 'z-10', 'w-40', 'h-50'],
  [Elements.TextPlaceholder]: [
    'absolute',
    'h-3.75',
    'left-5',
    'rounded-sm',
    'mb-2',
    styles.noText,
  ],
};

const classesByType = {
  [CardType.Fill]: [],
  [CardType.Transparent]: [],
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
      [CardColor.White]: ['bg-blue-100', 'opacity-10'],
      [CardColor.Gray]: [],
      [CardColor.Blue]: ['bg-blue-600', 'opacity-30'],
      [CardColor.Green]: [],
      [CardColor.Orange]: [],
    },
    [CardType.Transparent]: {
      [CardColor.Blue]: [],
      [CardColor.Green]: [],
      [CardColor.Orange]: [],
    },
  },
};

export default YCard;
