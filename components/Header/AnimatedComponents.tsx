import React, { useRef, useState } from 'react';
import { m as motion, AnimatePresence, MotionProps } from 'framer-motion';

import { Arrow } from './MenuButtons';
import { ArrowType } from '@/enums/components';

import style from './Header.module.css';

interface Props {
  className?: string;
  open?: boolean;
  onClick?: () => void;
}

export const ExpandableRegion: React.FC<Props> = ({
  children,
  className,
  open = true,
}) => {
  const motionProps = {
    animate: open ? 'open' : 'closed',
    initial: { height: 0 },
    variants: {
      open: {
        height: 'auto',
      },
      closed: {
        height: 0,
      },
    },
    transition: {
      type: 'tween',
      duration: 0.3,
    },
  };

  return (
    <motion.div
      layout
      {...motionProps}
      className={['overflow-hidden', className].join(' ')}
    >
      <AnimatePresence>{open && children}</AnimatePresence>
    </motion.div>
  );
};

export const ExpandableItem: React.FC<
  Props & {
    onClick?: () => void;
  }
> = ({ className, children, onClick = () => {} }) => {
  const handleClick = (e: React.SyntheticEvent) => {
    e.stopPropagation();
    onClick();
  };

  const itemMotionProps = {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 0.2 },
  };

  return (
    <motion.div
      onClick={handleClick}
      className={className}
      layout
      {...itemMotionProps}
    >
      {children}
    </motion.div>
  );
};

interface ScrollProps {
  className?: string;
}

export const AnimateScroll: React.FC<ScrollProps> = ({
  className,
  children,
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

  const arrowClasses = [
    'absolute',
    'transform',
    'top-1/2',
    '-translate-y-full',
  ];

  return (
    <div className={filterPosition(className)}>
      <motion.div
        {...motionProps}
        className={style.shadow}
        ref={scrollContainer}
      >
        {children}
      </motion.div>
      {position == 'left' ? (
        <Arrow
          onClick={() => setPosition('right')}
          className={[...arrowClasses, 'right-12.5'].join(' ')}
        />
      ) : (
        <Arrow
          type={ArrowType.Left}
          onClick={() => setPosition('left')}
          className={[...arrowClasses, 'left-12.5'].join(' ')}
        />
      )}
      {/* <div
        className={[
          'z-10',
          'absolute',
          'top-0',
          'left-0',
          'h-full',
          'w-full',
          position == 'left' ? style.shadowRight : style.shadowLeft,
        ].join(' ')}
      ></div> */}
    </div>
  );
};

const filterPosition = (classes: string | undefined) => {
  const positionClasses = ['relative', 'absolute', 'fixed'];

  const position = positionClasses.reduce((prev, curr) =>
    prev == '' ? prev : classes.includes(curr) ? '' : 'relative'
  );

  return [classes, position].join(' ').trim();
};
