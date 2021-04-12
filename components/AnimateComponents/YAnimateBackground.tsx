import React from 'react';
import { m as motion } from 'framer-motion';

import { ScreenSize } from '@/enums/screenSize';

import useBreakpoint from '@/hooks/useBreakpoint';

interface BackgroundProps {
  className?: string;
  open?: boolean;
  children: React.ReactNode;
}

const AnimateBackground = React.forwardRef<HTMLElement, BackgroundProps>(
  ({ children, className, open }, ref) => {
    const { screenSize, screenReady } = useBreakpoint();

    return (
      <motion.section
        {...getProps(screenReady, screenSize, open)}
        ref={ref}
        className={className}
      >
        {children}
      </motion.section>
    );
  }
);

const getProps = (
  screenReady: boolean,
  screenSize: ScreenSize,
  isOpen: boolean
) => {
  if (!screenReady) {
    return {};
  } else {
    const style = backdropStyles[screenSize];
    const { open, closed } = motionProps[screenSize];

    const variant = isOpen ? 'open' : 'closed';

    return { style: style[variant], open, closed, animate: variant };
  }
};

const backdropStyles = {
  [ScreenSize.SM]: {
    open: {
      backdropFilter: 'blur(20px)',
    },
    closed: {
      backdropFilter: 'blur(20px)',
    },
  },
  [ScreenSize.MD]: {
    open: {
      backdropFilter: 'blur(60px)',
    },
    closed: {
      backdropFilter: '',
    },
  },
};

const motionProps = {
  [ScreenSize.SM]: {
    open: {
      backgroundColor: '#041925',
    },
    closed: {
      backgroundColor: `rgba(6, 34, 51, 0.8)`,
      transition: { duration: 0.4 },
    },
  },
  [ScreenSize.MD]: {
    open: {
      backgroundColor: 'rgba(32, 56, 118, 0.68)',
      boxShadow: '0px 0px 120px rgba(6, 29, 51, 0.7)',
    },
    closed: {
      backgroundColor: 'rgba(0, 0, 0, 0)',
      transition: { duration: 0.4 },
    },
  },
};

export default AnimateBackground;
