import React, { useState } from 'react';
import { useWindowWidth } from '@react-hook/window-size';
import {
  MotionConfig,
  AnimationFeature,
  ExitFeature,
  AnimateSharedLayout,
  AnimateLayoutFeature,
} from 'framer-motion';

import { Toggle } from './MenuButtons';
import NavItem, { NavItemInterface } from './NavItem';
import SubItem, { SubItemInterface } from './SubItem';

import ExpandableRegion from '@/components/AnimateComponents/ExpandableRegion';
import AnimateBackground from '@/components/AnimateComponents/AnimateBackground';
import Scroll from '@/components/AnimateComponents/Scroll';
import YLink from '@/components/YLink';
import YText from '@/components/YText';
import YButton from '@/components/YButton';
import OSelect from '@/components/OSelect';

import { ButtonSize, ButtonShape } from '@/enums/components';
import { ScreenSize, BreakPoint } from '@/enums/screenSize';
import { FontLineHeight, FontWeight, FontSize } from '@/enums/font';
import { Language } from '@/enums/language';

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
  showIcons?: boolean; // temp
  onLangChange?: (lang: Language) => any;
}

enum Region {
  Item = 'item',
  SubItem = 'sub-item',
}

const Header: React.FC<Props> = ({
  logo,
  navItems,
  button,
  showIcons,
  onLangChange,
}) => {
  const [showItems, setShowItems] = useState(false);
  const [subItems, setSubItems] = useState<SubItemInterface[] | null>(null);

  const screenSize =
    useWindowWidth() < BreakPoint.MD ? ScreenSize.SM : ScreenSize.MD;

  const open = Boolean(subItems) || (screenSize == ScreenSize.SM && showItems);

  // top bar region
  const additionalComponents =
    screenSize == ScreenSize.SM ? (
      <Toggle
        className={[...menuItemClasses, 'left-4'].join(' ')}
        onClick={() => {
          setShowItems(!showItems);
          setSubItems(null);
        }}
        open={open}
      />
    ) : (
      <>
        <div className="w-full flex items-center justify-center">
          {navItems.map((item) => (
            <NavItem
              key={item.text}
              textProps={getTextProps(screenSize, Region.Item)}
              {...item}
              onClick={() => setSubItems(subItems ? null : item.subItems)}
              screenSize={screenSize}
              disableMount
            />
          ))}
        </div>
        <OSelect className="mr-6" onChange={onLangChange} />
      </>
    );

  // expandable region
  const hiddenRegion =
    screenSize == ScreenSize.SM ? (
      navItems.map((item, index) => (
        <NavItem
          key={item.text}
          textProps={getTextProps(screenSize)}
          {...item}
          className={index != 0 ? 'border-t' : ''}
          screenSize={screenSize}
        >
          {item.subItems?.map((subItem, index) => (
            <SubItem
              {...subItem}
              key={subItem.text}
              className={index == 0 ? 'pt-1 pb-5' : 'py-5'}
              textProps={getTextProps(screenSize)}
              screenSize={screenSize}
            />
          ))}
        </NavItem>
      ))
    ) : (
      <>
        <Scroll className="relative whitespace-nowrap overflow-hidden">
          {subItems?.map((subItem, index) => (
            <SubItem
              {...subItem}
              key={subItem.text}
              className={index < subItems.length - 1 ? 'mr-5' : ''}
              textProps={getTextProps(screenSize, Region.SubItem)}
              showIcon={showIcons}
            />
          ))}
        </Scroll>
        <div className="absolute top-full width-full h-0 border-soft border-b"></div>
      </>
    );

  return (
    <MotionConfig
      features={[AnimationFeature, ExitFeature, AnimateLayoutFeature]}
    >
      <AnimateBackground
        screenSize={screenSize}
        className="fixed w-full left-0 top-0"
        open={open}
      >
        <div
          className={[
            'h-15.5 container px-0 md:h-23.5 border-soft',
            open ? 'md:border-b' : '',
          ].join(' ')}
        >
          <div className="relative w-full h-full md:h-8.5 md:top-1/2 md:flex md:items-center">
            <div
              className={[
                ...menuItemClasses,
                'left-1/2 -translate-x-1/2 md:left-0 md:translate-x-0 md:inline-block',
              ].join(' ')}
            >
              <YLink href={logo.link}>{logo.Icon}</YLink>
            </div>
            {additionalComponents}
            <YLink href={button.link}>
              <YButton
                buttonSize={ButtonSize.XS}
                shape={ButtonShape.Round}
                className={[
                  ...menuItemClasses,
                  'right-4',
                  'md:right-0',
                  'whitespace-nowrap',
                ].join(' ')}
              >
                {screenSize == ScreenSize.SM
                  ? button.text.split(' ')[0]
                  : button.text}
              </YButton>
            </YLink>
          </div>
        </div>
        <AnimateSharedLayout>
          <ExpandableRegion
            className="flex flex-col items-stretch container"
            open={open}
          >
            {hiddenRegion}
          </ExpandableRegion>
        </AnimateSharedLayout>
      </AnimateBackground>
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

// text props for components
const getTextProps = (screenSize: ScreenSize, region?: Region) =>
  screenSize == ScreenSize.SM ? mobileTextProps : desktopTextProps[region];

const mobileTextProps = {
  fontSize: FontSize.XS,
  lineHeight: FontLineHeight.Relaxed,
  fontWeight: FontWeight.SemiBold,
  as: 'p',
} as Parameters<typeof YText>[0];

const desktopTextProps = {
  [Region.Item]: {
    fontSize: FontSize.XS,
    lineHeight: FontLineHeight.Tight,
    fontWeight: FontWeight.SemiBold,
    as: 'p',
  },
  [Region.SubItem]: {
    fontSize: FontSize.XXS,
    lineHeight: FontLineHeight.Tight,
    fontWeight: FontWeight.SemiBold,
    as: 'p',
  },
} as Record<Region, Parameters<typeof YText>[0]>;

export default Header;
