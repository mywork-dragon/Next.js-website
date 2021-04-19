import React, { createElement, useMemo, useRef } from 'react';
import dynamic from 'next/dynamic';
import { useHover, HoverProps } from '@react-aria/interactions';

import YLink from '@/components/YLink';

type CardProps = HoverProps & {
  title?: string;
  description?: string;
  icon?: string;
  className?: string;
  onHover?: () => void;
  hovered?: boolean;
};

interface Props extends CardProps {
  as?: keyof JSX.IntrinsicElements;
  className?: string;
  children?: React.ReactNode;
  cardClasses?: string;
  link?: string;
  style?: React.CSSProperties;
}

// wrapper component
const YCard: React.FC<Props> = ({
  as,
  className: classes,
  cardClasses,
  children,
  icon,
  title,
  description,
  hovered,
  onHover,
  link,
  style,
  ...props
}) => {
  const customTag = as ? as : 'div';

  const ref = useRef();

  const { hoverProps } = useHover({ onHoverStart: onHover });

  // text section

  const text =
    title && description ? (
      <>
        <div key="title" className="text title serif">
          {title}
        </div>
        <div key="subtitle" className="text subtitle sans">
          {description}
        </div>
      </>
    ) : (
      <>
        <div
          key="placeholder-title"
          className="placeholder placeholder-title"
        />
        <div
          key="placeholder-subtitle"
          className="placeholder placeholder-subtitle"
        />
      </>
    );

  // icon section
  const NewIcon = useMemo(
    () =>
      dynamic(() => import(`@/assets/icons/${icon}.svg`), {
        ssr: false,
      }),
    []
  );

  const iconElement = (
    <div key="icon" className="icon fill-current flex items-stretch">
      <NewIcon />
    </div>
  );

  // topface section
  const className = [
    ...baseClasses,
    cardClasses,
    hovered ? 'card-blue' : 'card-white',
  ].join(' ');

  const Card = createElement(
    customTag,
    {
      ref,
      className,
      ...hoverProps,
      // ...cardHoverProps,
    },
    [iconElement, text]
  );

  // container element section
  const containerClasses = ['w-43.6 h-53.6 cursor-pointer', classes].join(' ');
  return (
    <YLink href={link}>
      <div style={style} className={containerClasses}>
        {Card}
        {children}
      </div>
    </YLink>
  );
};

const baseClasses = [
  'rounded',
  'mt-2',
  'ml-3',
  'px-2.5',
  'z-10',
  'w-40',
  'h-50',
  'pt-6.5',
];

export default YCard;
