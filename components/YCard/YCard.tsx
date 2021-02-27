import React, { AriaAttributes, createElement, useRef } from 'react';
import { AriaButtonProps } from '@react-types/button';
import { useButton } from '@react-aria/button';

import IconPlaceholder from '@/assets/icons/icon.svg';

interface CardProps extends AriaAttributes {
  title?: string;
  description?: string;
  Icon?: any;
  empty?: boolean;
  className?: string;
  onClick?: (e: React.SyntheticEvent) => unknown;
}

interface Props extends CardProps {
  as?: keyof JSX.IntrinsicElements;
  className?: string;
  children?: React.ReactNode;
  cardClasses?: string;
}

// wrapper component
const YCard: React.FC<Props> = ({
  as,
  className: classes,
  cardClasses,
  children,
  Icon,
  onClick,
  title,
  empty,
  description,
  ...props
}) => {
  const CustomTag = as ? as : 'div';
  const ref = useRef();
  const { buttonProps } = useButton(
    { ...(props as AriaButtonProps), elementType: CustomTag },
    ref
  );

  const isFill = !cardClasses?.includes('transparent');

  const text =
    title && description && isFill ? (
      <>
        <h6 className="text title serif">{title}</h6>
        <p className="text subtitle sans">{description}</p>
      </>
    ) : (
      <>
        <div className="placeholder placeholder-title" />
        <div className="placeholder placeholder-subtitle" />
      </>
    );

  const icon = (
    <div className="icon fill-current flex items-stretch">
      {isFill && (Icon || <IconPlaceholder />)}
    </div>
  );

  const className = filterDefaultCard(baseClasses, cardClasses);

  const Card = createElement(
    CustomTag,
    {
      ref,
      className,
      onClick,
      ...buttonProps,
    },
    !empty && [icon, text]
  );

  const containerClasses = ['w-43.6 h-53.6', classes].join(' ');
  return (
    <div className={containerClasses}>
      {Card}
      {children}
    </div>
  );
};

const filterDefaultCard = (baseClasses: string[], classes: string) =>
  classes?.split(' ').includes('card')
    ? [
        ...baseClasses.filter((className) => className != 'card-white'),
        classes,
      ].join(' ')
    : [...baseClasses, classes].join(' ') || baseClasses.join(' ');

const baseClasses = [
  'rounded',
  'px-2.5',
  'z-10',
  'w-40',
  'h-50',
  'pt-6.5',
  'card-white',
];

export default YCard;
