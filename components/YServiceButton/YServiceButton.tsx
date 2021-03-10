import React, { createElement } from 'react';
import { m as motion, MotionConfig, AnimationFeature } from 'framer-motion';

import { FontSize, FontWeight } from '@/enums/font';

import YText from '@/components/YText';

enum Region {
  Text = 'text',
  Icon = 'icon',
  Container = 'container',
}

interface Props {
  as?: keyof JSX.IntrinsicElements;
  active?: boolean;
  onClick: () => void;
  icon: JSX.Element;
  title: string;
  className?: string;
}

const ServiceButton: React.FC<Props> = ({
  onClick,
  icon,
  title,
  className,
  active,
  as = 'div',
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

  const baseClasses = [
    'border',
    'rounded-lg',
    'flex',
    'items-center',
    'cursor-pointer',
    'h-15',
    'transition',
    'ease',
    'duration-200',
    active
      ? 'border-primary text-primary'
      : 'border-soft text-white opacity-50 hover:border-primary hover:text-primary',
  ];

  return createElement(
    as,
    {
      className: [...baseClasses, className].join(' '),
      onClick: handleClick,
    },
    children
  );
};

export default ServiceButton;
