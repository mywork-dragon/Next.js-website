import React from 'react';
import { m as motion, AnimatePresence } from 'framer-motion';

interface Props {
  className?: string;
  open?: boolean;
  onClick?: () => void;
}

const ExpandableRegion: React.FC<Props> = ({
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

export default ExpandableRegion;
