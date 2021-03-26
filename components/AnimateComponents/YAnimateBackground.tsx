import React, { HTMLAttributes } from 'react';
import { m as motion } from 'framer-motion';

import { ScreenSize } from '@/enums/screenSize';

interface BackgroundProps {
  screenSize: ScreenSize;
  className?: string;
  open?: boolean;
  children: React.ReactNode;
}

const AnimateBackground = React.forwardRef<HTMLElement, BackgroundProps>(
  ({ screenSize, children, className, open }, ref) => {
    const openVariant =
      screenSize == ScreenSize.SM
        ? {
            backgroundColor: '#041925',
            backdropFilter: 'blur(20px)',
          }
        : {
            backgroundColor: 'rgba(32, 56, 118, 0.68)',
            backdropFilter: 'blur(60px)',
            boxShadow: '0px 0px 120px rgba(6, 29, 51, 0.7)',
          };

    const headerMotionProps = {
      animate: open ? 'open' : 'closed',
      initial: {
        backgroundColor: 'rgba(0, 0, 0, 0)',
        backdropFilter: 'blur(60px)',
      },
      variants: {
        open: openVariant,
        closed: {
          backgroundColor:
            screenSize == ScreenSize.SM
              ? `rgba(6, 34, 51, 0.8)`
              : 'rgba(0, 0, 0, 0)',
          backdropFilter: screenSize == ScreenSize.SM ? 'blur(20px)' : '',
          transition: { duration: 0.4 },
        },
      },
    };

    return (
      <motion.section ref={ref} {...headerMotionProps} className={className}>
        {children}
      </motion.section>
    );
  }
);

export default AnimateBackground;
