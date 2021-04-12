import React, { useRef, useState } from 'react';
import {
  MotionConfig,
  AnimationFeature,
  ExitFeature,
  AnimateSharedLayout,
  AnimateLayoutFeature,
} from 'framer-motion';

// dynamic
import YHeaderItem, {
  NavItemInterface,
} from '@/components/YHeaderItem/YHeaderItem';
import YHeaderSubItem, {
  SubItemInterface,
} from '@/components/YHeaderSubItem/YHeaderSubItem';
// dynamic

import YMenuToggle from '@/components/YMenuToggle';
import YExpandableRegion from '@/components/AnimateComponents/YExpandableRegion';
import YAnimateBackground from '@/components/AnimateComponents/YAnimateBackground';
import YSlider from '@/components/YSlider';
import YLink from '@/components/YLink';
import YButton from '@/components/YButton';
import YSelect from '@/components/YSelect';

import useClickOutside from '@/hooks/useClickOutside';
import useBreakpoint from '@/hooks/useBreakpoint';

import { ButtonSize, ButtonShape } from '@/enums/components';
import { ScreenSize } from '@/enums/screenSize';
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
  onLangChange?: (lang: Language) => any;
  showMoreLabel?: string;
}

const Header: React.FC<Props> = ({
  logo,
  navItems,
  button,
  onLangChange,
  showMoreLabel,
}) => {
  const { screenSize, screenReady } = useBreakpoint();

  // control opening and closing of header
  const [showItems, setShowItems] = useState(false);
  const [subItems, setSubItems] = useState<SubItemInterface[] | null>(null);

  const open = Boolean(subItems) || (screenSize == ScreenSize.SM && showItems);

  const headerRef = useRef(null);
  useClickOutside(headerRef, () => {
    setSubItems(null);
    setShowItems(false);
  });

  // top bar region
  const additionalComponents =
    screenSize == ScreenSize.SM ? (
      <YMenuToggle
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
            <YHeaderItem
              key={item.text}
              {...item}
              onClick={() => setSubItems(subItems ? null : item.subItems)}
              disableMount
            />
          ))}
        </div>
        <YSelect className="mr-6" onChange={onLangChange} />
      </>
    );

  // expandable region
  const hiddenRegion =
    screenSize == ScreenSize.SM ? (
      navItems.map((item, index) => (
        <YHeaderItem
          key={item.text}
          {...item}
          className={index != 0 ? 'border-t' : ''}
        >
          {item.subItems?.map((subItem, index) => (
            <YHeaderSubItem
              {...subItem}
              key={subItem.text}
              className={index == 0 ? 'pt-1' : ''}
            />
          ))}
        </YHeaderItem>
      ))
    ) : (
      <>
        <YSlider
          className="relative whitespace-nowrap overflow-hidden"
          showMoreLabel={showMoreLabel}
        >
          {subItems?.map((subItem, index) => (
            <YHeaderSubItem
              {...subItem}
              key={subItem.text}
              className={index < subItems.length - 1 ? 'mr-5' : ''}
            />
          ))}
        </YSlider>
        <div className="absolute top-full width-full h-0 border-soft border-b" />
      </>
    );

  return (
    screenReady && (
      <MotionConfig
        features={[AnimationFeature, ExitFeature, AnimateLayoutFeature]}
      >
        <YAnimateBackground
          ref={headerRef}
          className="fixed w-full left-0 top-0 z-40 md:absolute"
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
                <YLink href={logo.link}>
                  <div className="cursor-pointer">{logo.Icon}</div>
                </YLink>
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
            <YExpandableRegion
              className="flex flex-col items-stretch container"
              open={open}
            >
              {hiddenRegion}
            </YExpandableRegion>
          </AnimateSharedLayout>
        </YAnimateBackground>
      </MotionConfig>
    )
  );
};

const menuItemClasses = [
  'absolute',
  'top-1/2',
  'transform',
  '-translate-y-1/2',
  'md:relative',
];

export default Header;
