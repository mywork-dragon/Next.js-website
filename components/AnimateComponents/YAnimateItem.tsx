import { createElement, forwardRef, MutableRefObject } from 'react';
import { m as motion } from 'framer-motion';

interface Props {
  className?: string;
  open?: boolean;
  onClick?: (e: React.MouseEvent) => void;
  disableMount?: boolean;
  layout?: boolean;
  as?: keyof JSX.IntrinsicElements;
}

const AnimateItem: React.FC<Props> = forwardRef(
  (
    { className, children, onClick = () => {}, disableMount, as },
    ref?: MutableRefObject<HTMLElement>
  ) => {
    const handleClick = (e: React.MouseEvent) => {
      e.stopPropagation();
      onClick(e);
    };

    const itemMotionProps = {
      initial: disableMount ? false : { opacity: 0 },
      animate: { opacity: 1 },
      exit: { opacity: 0 },
      transition: { duration: 0.4 },
    };

    const CustomTag = as ? motion[as] : motion.div;

    return createElement(
      CustomTag,
      {
        ref,
        onClick: handleClick,
        className: className,
        ...itemMotionProps,
      },
      children
    );
  }
);

export default AnimateItem;
