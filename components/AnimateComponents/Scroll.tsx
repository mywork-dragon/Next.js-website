import React, { useState, useRef } from 'react';
import { AnimatePresence, m as motion, MotionProps } from 'framer-motion';

import AnimateItem from './AnimateItem';

import { ArrowType } from '@/enums/components';

import ArrowSvg from '@/assets/icons/arrow-right.svg';

interface ScrollProps {
  className?: string;
}

export const Scroll: React.FC<ScrollProps> = ({ className, children }) => {
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

  const arrowClasses = [
    'absolute',
    'transform',
    'top-1/2',
    '-translate-y-full',
    'scroll-shadow',
  ];

  return (
    <AnimatePresence>
      <AnimateItem className={filterPosition(className)}>
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
}

const Arrow: React.FC<ArrowProps> = ({
  type = ArrowType.Right,
  className,
  onClick,
}) => {
  const baseClasses = [
    'h-7',
    'w-7',
    'rounded-full',
    'bg-white',
    'bg-opacity-10',
    'flex',
    'justify-center',
    'items-center',
  ];

  return (
    <AnimateItem
      onClick={onClick}
      className={[
        ...baseClasses,
        className,
        type == ArrowType.Left ? 'transform rotate-180' : '',
      ].join(' ')}
    >
      <ArrowSvg />
    </AnimateItem>
  );
};

const filterPosition = (classes: string | undefined) => {
  const positionClasses = ['relative', 'absolute', 'fixed'];

  const position = positionClasses.reduce((prev, curr) =>
    prev == '' ? prev : classes.includes(curr) ? '' : 'relative'
  );

  return [classes, position].join(' ').trim();
};

export default Scroll;
