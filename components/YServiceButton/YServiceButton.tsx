import React, { createElement } from 'react';

import { FontSize, FontWeight } from '@/enums/font';

import YText from '@/components/YText';

interface Props {
  as?: keyof JSX.IntrinsicElements;
  active?: boolean;
  onClick?: () => void;
  icon: JSX.Element;
  title: string;
  className?: string;
  interactive?: boolean;
}

const ServiceButton: React.FC<Props> = ({
  onClick = () => {},
  icon,
  title,
  className,
  active,
  as = 'div',
  interactive = true,
}) => {
  const handleClick = (e: React.SyntheticEvent) => {
    e.preventDefault();
    e.stopPropagation();
    onClick();
  };

  const iconClasses = [
    'h-7',
    'w-7',
    'mx-5',
    'flex',
    'justify-center',
    'items-center',
    'fill-current',
  ].join(' ');

  const children = (
    <>
      <div className={iconClasses}>{icon}</div>
      <div>
        <YText
          fontSize={FontSize.XS}
          fontWeight={active ? FontWeight.Bold : FontWeight.SemiBold}
        >
          {title}
        </YText>
      </div>
    </>
  );

  const baseClasses = ['border', 'rounded-lg', 'flex', 'items-center', 'h-15'];

  const activeClasses = active
    ? 'border-primary text-primary'
    : 'border-soft text-white opacity-50 hover:border-primary hover:text-primary';

  const interactiveClasses = !interactive
    ? ''
    : `cursor-pointer transition ease duration-200 ${activeClasses}`;

  return createElement(
    as,
    {
      className: [...baseClasses, interactiveClasses, className].join(' '),
      onClick: handleClick,
    },
    children
  );
};

export default ServiceButton;
