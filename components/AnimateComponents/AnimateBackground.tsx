import { m as motion } from 'framer-motion';

import { ScreenSize } from '@/enums/screenSize';

interface BackgroundProps {
  screenSize: ScreenSize;
  className?: string;
  open?: boolean;
}

const AnimateBackground: React.FC<BackgroundProps> = ({
  screenSize,
  children,
  className,
  open,
}) => {
  const openVariant =
    screenSize == ScreenSize.SM
      ? {
          backgroundColor: '#041925',
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
    },
    variants: {
      open: openVariant,
      closed: {
        backgroundColor: 'rgba(0, 0, 0, 0)',
        transition: { duration: 0.4 },
      },
    },
  };

  return (
    <motion.section {...headerMotionProps} className={className}>
      {children}
    </motion.section>
  );
};

export default AnimateBackground;
