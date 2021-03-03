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
import SubItem, { SubItemInterface } from './SubItem';
import { ExpandableRegion } from './ExpandableComponents';
import YLink from '@/components/YLink';
import YText from '@/components/YText';
import YHeading from '@/components/YHeading';
import YButton from '@/components/YButton';

import { ButtonSize, ButtonShape } from '@/enums/components';
import { ScreenSize, BreakPoint } from '@/enums/screenSize';
import { FontLineHeight, FontWeight, FontSize } from '@/enums/font';

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
  Item = 'item',
  SubItem = 'sub-item',
}

const Header: React.FC<Props> = ({ logo, navItems, button }) => {
  const [showItems, setShowItems] = useState(false);
  const [subItems, setSubItems] = useState<SubItemInterface[] | null>(null);

  const screenSize =
    useWindowWidth() < BreakPoint.MD ? ScreenSize.SM : ScreenSize.MD;

  const open = Boolean(subItems) || (screenSize == ScreenSize.SM && showItems);

  // animation
  const getHeaderMotionProps = () => {
    const animate = open ? 'open' : 'closed';
    const motionProps = headerAnimationProps;

    return { animate, ...motionProps };
  };

  // top bar region
  const additionalComponents =
    screenSize == ScreenSize.SM ? (
      <Toggle
        className={[...menuItemClasses, 'left-4'].join(' ')}
        onClick={() => setShowItems(!showItems)}
        open={open}
      />
    ) : (
      <div className="h-full mx-auto inline-block whitespace-nowrap">
        {navItems.map((item) => (
          <NavItem
            key={item.text}
            textProps={getTextProps(screenSize)}
            {...item}
            onClick={() => setSubItems(item.subItems)}
          />
        ))}
      </div>
    );

  // expandable region
  const hiddenRegion =
    screenSize == ScreenSize.SM
      ? navItems.map((item, index) => (
          <NavItem
            key={item.text}
            textProps={getTextProps(screenSize)}
            {...item}
            className={index != 0 ? 'border-t' : ''}
          >
            {item.subItems?.map((subItem, index) => (
              <SubItem
                {...subItem}
                key={subItem.text}
                className={index == 0 ? 'pt-1 pb-5' : 'py-5'}
                textProps={getTextProps(screenSize)}
              />
            ))}
          </NavItem>
        ))
      : subItems?.map((subItem) => (
          <SubItem
            {...subItem}
            key={subItem.text}
            className={null}
            textProps={getTextProps(screenSize, Region.SubItem)}
          />
        ));

  return (
    <MotionConfig
      features={[AnimationFeature, ExitFeature, AnimateLayoutFeature]}
    >
      <motion.section
        {...getHeaderMotionProps()}
        className="fixed w-full left-0 top-0"
      >
        <div className="relative h-15.5 w-full md:h-8.5 md:container md:whitespace-nowrap">
          <YLink href={logo.link}>
            <div
              className={[
                ...menuItemClasses,
                'left-1/2 -translate-x-1/2 md:left-0 md:translate-x-0 md:inline-block',
              ].join(' ')}
            >
              {logo.Icon}
            </div>
          </YLink>
          {additionalComponents}
          <YLink href={button.link}>
            <YButton
              buttonSize={ButtonSize.XS}
              shape={ButtonShape.Round}
              className={[
                ...menuItemClasses,
                'right-4',
                'md:right-0',
                'md:ml-auto',
                'md:inline-block',
              ].join(' ')}
            >
              {screenSize == ScreenSize.SM
                ? button.text.split(' ')[0]
                : button.text}
            </YButton>
          </YLink>
        </div>
        <AnimateSharedLayout>
          <ExpandableRegion
            className="flex flex-col items-stretch container"
            open={open}
          >
            {hiddenRegion}
          </ExpandableRegion>
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
  'md:relative',
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

// text props for components
const getTextProps = (screenSize: ScreenSize, region?: Region) =>
  screenSize == ScreenSize.SM ? mobileTextProps : desktopTextProps[region];

const mobileTextProps = {
  fontSize: FontSize.XS,
  lineHeight: FontLineHeight.Relaxed,
  fontWeight: FontWeight.SemiBold,
} as Parameters<typeof YText>[0];

const desktopTextProps = {
  [Region.Item]: {
    fontSize: FontSize.XS,
    lineHeight: FontLineHeight.Tight,
    fontWeight: FontWeight.SemiBold,
  },
  [Region.SubItem]: {
    fontSize: FontSize.XXS,
    fontWeight: FontWeight.SemiBold,
    lineHeight: FontLineHeight.Tight,
  },
} as Record<Region, Parameters<typeof YText>[0]>;

export default Header;
