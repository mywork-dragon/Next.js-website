import React from 'react';
import { m as motion, AnimatePresence } from 'framer-motion';

interface Props {
  className?: string;
  open?: boolean;
  disableMount?: boolean;
}

const ExpandableRegion: React.FC<Props> = ({
  children,
  className,
  open = true,
  disableMount = false,
}) => {
  const motionProps = {
    animate: open ? 'open' : 'closed',
    initial: disableMount ? false : { height: 0 },
    variants: {
      open: {
        // height: 181,
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
