import React from 'react';

import { m as motion, AnimatePresence } from 'framer-motion';

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
