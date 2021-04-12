import React from 'react';
import { m as motion } from 'framer-motion';

interface Props {
  className?: string;
  open?: boolean;
  onClick?: () => void;
  disableMount?: boolean;
  layout?: boolean;
}

const AnimateItem: React.FC<Props> = ({
  className,
  children,
  onClick = () => {},
  disableMount,
}) => {
  const handleClick = (e: React.SyntheticEvent) => {
    e.stopPropagation();
    onClick();
  };

  const itemMotionProps = {
    initial: disableMount ? false : { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 0.4 },
  };

  return (
    <motion.div
      onClick={handleClick}
      className={className}
      {...itemMotionProps}
    >
      {children}
    </motion.div>
  );
};

export default AnimateItem;
