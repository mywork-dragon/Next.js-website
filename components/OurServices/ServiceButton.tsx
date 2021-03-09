import React, { createElement } from 'react';
import { m as motion, MotionConfig, AnimationFeature } from 'framer-motion';

import { FontSize, FontWeight } from '@/enums/font';

import YText from '@/components/YText';

enum Region {
  Text = 'text',
  Icon = 'icon',
  Container = 'container',
}

interface Props {
  as?: keyof JSX.IntrinsicElements;
  hovered: boolean;
  onHover: () => void;
  onClick: () => void;
  icon: JSX.Element;
  title: string;
  className?: string;
}

const ServiceButton: React.FC<Props> = ({
  hovered,
  onHover,
  onClick,
  icon,
  title,
  className,
  as = 'div',
}) => {
  const handleClick = (e: React.SyntheticEvent) => {
    e.preventDefault();
    e.stopPropagation();
    onClick();
  };

  const getMotionProps = (region: Region) => {
    const animate = hovered ? 'hovered' : 'initial';
    const variants = motionVariants[region];
    return { animate, variants };
  };

  const children = (
    <>
      <motion.div
        {...getMotionProps(Region.Icon)}
        className="h-7 w-7 mx-5 flex justify-center items-center fill-current"
      >
        {icon}
      </motion.div>
      <motion.div {...getMotionProps(Region.Text)}>
        <YText fontSize={FontSize.XS} fontWeight={FontWeight.Bold}>
          {title}
        </YText>
      </motion.div>
    </>
  );

  const returnElement = createElement(
    motion[as],
    {
      className,
      onMouseEnter: onHover,
      onClick: handleClick,
      ...getMotionProps(Region.Container),
    },
    children
  );

  return (
    <MotionConfig features={[AnimationFeature]}>{returnElement}</MotionConfig>
  );
};

const motionVariants = {
  [Region.Container]: {
    initial: {
      border: '1px solid rgba(99, 152, 255, 0.1)',
    },
    hovered: {
      border: '1px solid #53D084',
    },
  },
  [Region.Icon]: {
    initial: {
      color: 'white',
      opacity: 0.4,
    },
    hovered: {
      color: '#53D084',
      opacity: 1,
    },
  },
  [Region.Text]: {
    initial: {
      opacity: 0.5,
      fontWeight: 600,
    },
    hovered: {
      opacity: 1,
      fontWeight: 700,
    },
  },
};

export default ServiceButton;
