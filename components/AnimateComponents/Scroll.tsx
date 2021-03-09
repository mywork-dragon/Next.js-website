import React, { useState, useRef } from 'react';
import { AnimatePresence, m as motion, MotionProps } from 'framer-motion';

import AnimateItem from './AnimateItem';

import { ArrowType } from '@/enums/components';
import { FontSize, FontWeight } from '@/enums/font';

import filterPosition from '@/libs/utils/filterPosition';

import YText from '@/components/YText';

import ArrowSvg from '@/assets/icons/arrow-right.svg';

interface ScrollProps {
  className?: string;
  showMoreLabel?: string;
}

export const Scroll: React.FC<ScrollProps> = ({
  className,
  children,
  showMoreLabel,
}) => {
  const [position, setPosition] = useState<'left' | 'right'>('left');

  const scrollContainer = useRef<HTMLDivElement>(null);
  const diff =
    scrollContainer.current?.scrollWidth - scrollContainer.current?.clientWidth;

  const motionProps = {
    animate: position,
    variants: {
      left: {
        x: 0,
      },
      right: {
        x: -diff || 0,
      },
    },
    transition: {
      type: 'tween',
      duration: 0.4,
    },
  } as MotionProps;

  const arrowClasses = ['absolute', 'transform', 'top-1/2', '-translate-y-1/2'];

  return (
    <AnimatePresence>
      <AnimateItem className={filterPosition([], className)}>
        <motion.div {...motionProps} ref={scrollContainer}>
          {children}
        </motion.div>
        <AnimatePresence exitBeforeEnter>
          {position == 'left' ? (
            <Arrow
              key="arrow-right"
              onClick={() => setPosition('right')}
              className={[...arrowClasses, 'right-12.5'].join(' ')}
            />
          ) : (
            <Arrow
              key="arrow-left"
              type={ArrowType.Left}
              onClick={() => setPosition('left')}
              className={[...arrowClasses, 'left-12.5'].join(' ')}
            />
          )}
        </AnimatePresence>
      </AnimateItem>
    </AnimatePresence>
  );
};

interface ArrowProps {
  type?: ArrowType;
  className?: string;
  onClick?: () => void;
  showMore?: string;
}

const Arrow: React.FC<ArrowProps> = ({
  type = ArrowType.Right,
  className,
  onClick,
  showMore,
}) => {
  const containerClasses = ['w-8', 'h-12.5'];

  const arrowBoxClasses = [
    'h-7',
    'w-7',
    'absolute',
    'top-0',
    'left-1/2',
    'transform',
    '-translate-x-1/2',
    'rounded-full',
    'bg-blue-50',
    'flex',
    'justify-center',
    'scroll-shadow',
    'items-center',
  ];

  const more = showMore || 'More';

  return (
    <AnimateItem
      onClick={onClick}
      className={filterPosition(containerClasses, className)}
    >
      <div
        className={[
          ...arrowBoxClasses,
          type == ArrowType.Left ? 'transform rotate-180' : '',
        ].join(' ')}
      >
        <ArrowSvg />
      </div>
      <YText
        fontWeight={FontWeight.SemiBold}
        className={[
          'absolute',
          'bottom-0',
          'left-1/2',
          'transform',
          '-translate-x-1/2',
          type == ArrowType.Left ? 'hidden' : '',
        ].join(' ')}
        fontSize={FontSize.XXS}
        as="p"
      >
        {more}
      </YText>
    </AnimateItem>
  );
};

export default Scroll;
