import React from 'react';
import { m as motion, MotionConfig, AnimationFeature } from 'framer-motion';

import { ToggleType } from '@/enums/components';

import filterPosition from '@/libs/utils/filterPosition';

interface Props {
  open?: boolean;
  onClick?: () => void;
  className?: string;
  type?: ToggleType;
}

enum Line {
  Top = 'top',
  Middle = 'middle',
  Bottom = 'bottom',
}

export const Toggle: React.FC<Props> = ({
  className,
  onClick,
  open = true,
  type = ToggleType.Hamburger,
}) => {
  // line region
  const lineClasses = [
    ...lineClassesForType[type],
    'bg-white',
    'absolute',
    'h-0.5',
  ].join(' ');

  const getMotionProps = (line: Line, type: ToggleType) => {
    const animate = open ? 'open' : 'closed';

    return type == ToggleType.Plus && line == Line.Top
      ? null
      : { animate, ...lineProps[line] };
  };

  const lines = (
    <>
      <motion.div className={lineClasses} {...getMotionProps(Line.Top, type)} />
      <motion.div
        className={[lineClasses, ...additionalLineClasses[type]].join(' ')}
        {...getMotionProps(Line.Middle, type)}
      />
      {type == ToggleType.Hamburger && (
        <motion.div
          className={lineClasses}
          {...getMotionProps(Line.Bottom, type)}
        />
      )}
    </>
  );

  const containerClasses = {
    [ToggleType.Hamburger]: ['h-7.5', 'w-7.5', 'p-1'],
    [ToggleType.Plus]: ['h-3.5', 'w-3.5'],
  };

  return (
    <div
      className={filterPosition(containerClasses[type], className)}
      onClick={onClick || null}
    >
      <MotionConfig features={[AnimationFeature]}>{lines}</MotionConfig>
    </div>
  );
};
const lineClassesForType = {
  [ToggleType.Hamburger]: ['left-1', 'right-1'],
  [ToggleType.Plus]: [
    'bg-opacity-30',
    'w-3.5',
    'transform',
    '-translate-y-1/2',
    'top-1/2',
  ],
};

const additionalLineClasses = {
  [ToggleType.Hamburger]: ['top-1/2', 'transform', '-translate-y-1/2'],
  [ToggleType.Plus]: ['rotate-90', 'left-1/2', '-translate-x-1/2'],
};

// motion options
const lineProps = {
  [Line.Top]: {
    variants: {
      open: {
        rotate: 45,
        y: 10,
      },
      closed: {
        y: 4,
        rotate: 0,
      },
    },
    initial: { y: 4 },
  },
  [Line.Middle]: {
    variants: {
      open: {
        opacity: 0,
      },
      closed: {
        opacity: 1,
      },
    },
    initial: {
      opacity: 1,
    },
    transition: {
      duration: 0.2,
    },
  },
  [Line.Bottom]: {
    variants: {
      open: {
        rotate: -45,
        y: 10,
      },
      closed: {
        y: 16,
        rotate: 0,
      },
    },
    initial: { y: 16 },
  },
};
