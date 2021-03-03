import React, { useState } from 'react';
import { useWindowWidth } from '@react-hook/window-size';
import {
  m as motion,
  MotionConfig,
  AnimationFeature,
  ExitFeature,
  AnimateSharedLayout,
  AnimatePresence,
  AnimateLayoutFeature,
} from 'framer-motion';

import Toggle from './MenuToggle';
import NavItem, { NavItemInterface } from './NavItem';
import YLink from '@/components/YLink';
import YText from '@/components/YText';
import YHeading from '@/components/YHeading';
import YButton from '@/components/YButton';

import { ButtonSize, ButtonShape } from '@/enums/components';
import { ScreenSize, BreakPoint } from '@/enums/screenSize';

interface Logo {
  Icon: JSX.Element;
  link: string;
}

interface Button {
  text: string;
  link: string;
}

interface Props {
  logo: Logo;
  navItems: NavItemInterface[];
  button: Button;
}

enum Region {
  Header = 'header',
  Items = 'items',
}

const Header: React.FC<Props> = ({ logo, navItems, button }) => {
  const [showItems, setShowItems] = useState(false);
  const [showSubItems, setShowSubItems] = useState(false);

  const screenSize =
    useWindowWidth() < BreakPoint.MD ? ScreenSize.SM : ScreenSize.MD;

  const open = showSubItems || (screenSize == ScreenSize.SM && showItems);

  // animation
  const getMotionProps = (region: Region, screenSize?: ScreenSize) => {
    const animate = open ? 'open' : 'closed';
    const motionProps =
      region == Region.Header
        ? headerAnimationProps
        : itemsAnimationProps[screenSize];
    return { animate, ...motionProps };
  };

  return (
    <MotionConfig
      features={[AnimationFeature, ExitFeature, AnimateLayoutFeature]}
    >
      <motion.section
        {...getMotionProps(Region.Header)}
        className="fixed w-full left-0 top-0"
      >
        <div className="relative h-15.5 w-full">
          {screenSize == ScreenSize.SM && (
            <Toggle
              className={[...menuItemClasses, 'left-4'].join(' ')}
              onClick={() => setShowItems(!showItems)}
              open={open}
            />
          )}
          <div
            className={[...menuItemClasses, 'left-1/2 -translate-x-1/2'].join(
              ' '
            )}
          >
            <YLink href={logo.link}>{logo.Icon}</YLink>
          </div>
          <YLink href={button.link}>
            <YButton
              buttonSize={ButtonSize.XS}
              shape={ButtonShape.Round}
              className={[...menuItemClasses, 'right-4'].join(' ')}
            >
              {button.text.split(' ')[0]}
            </YButton>
          </YLink>
        </div>
        <AnimateSharedLayout>
          <motion.div
            layout
            {...getMotionProps(Region.Items, screenSize)}
            className="flex flex-col items-stretch overflow-hidden container"
          >
            <AnimatePresence>
              {screenSize == ScreenSize.MD ||
                (showItems &&
                  navItems.map((item, index) => (
                    <NavItem
                      key={item.text}
                      {...item}
                      motionProps={itemsAnimationProps[screenSize]}
                      className={[
                        'relative min-h-14.1 border-blue-300',
                        index != 0 ? 'border-t' : ' ',
                      ].join(' ')}
                    />
                  )))}
            </AnimatePresence>
          </motion.div>
        </AnimateSharedLayout>
      </motion.section>
    </MotionConfig>
  );
};

const menuItemClasses = [
  'absolute',
  'top-1/2',
  'transform',
  '-translate-y-1/2',
];

// animation variants
const headerAnimationProps = {
  initial: {
    backgroundColor: 'rgba(0, 0, 0, 0)',
  },
  variants: {
    open: {
      backgroundColor: '#041925',
      transition: { duration: 0.4 },
    },
    closed: {
      backgroundColor: 'rgba(0, 0, 0, 0)',
      transition: { duration: 0.2 },
    },
  },
};

const itemsAnimationProps = {
  [ScreenSize.SM]: {
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
  },
};

export default Header;
