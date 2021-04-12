import React, { useMemo, useRef, useState } from 'react';
import { AnimateSharedLayout } from 'framer-motion';

// dynamic
import YHeaderItem, {
  NavItemInterface,
} from '@/components/YHeaderItem/YHeaderItem';
import YHeaderSubItem from '@/components/YHeaderSubItem/YHeaderSubItem';
// dynamic

import YMenuToggle from '@/components/YMenuToggle';
import YExpandableRegion from '@/components/AnimateComponents/YExpandableRegion';
import YAnimateBackground from '@/components/AnimateComponents/YAnimateBackground';
import YLink from '@/components/YLink';
import YButton from '@/components/YButton';

import useClickOutside from '@/hooks/useClickOutside';

import { ButtonSize, ButtonShape } from '@/enums/components';
import { Language } from '@/enums/language';
import dynamic from 'next/dynamic';

interface Logo {
  icon: string;
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

const HeaderSM: React.FC<Props> = ({ logo, navItems, button }) => {
  // control opening and closing of header
  const [showItems, setShowItems] = useState(false);

  const open = showItems;

  const headerRef = useRef(null);
  useClickOutside(headerRef, () => {
    setShowItems(false);
  });

  // top bar region
  const additionalComponents = (
    <YMenuToggle
      className={[...menuItemClasses, 'left-4'].join(' ')}
      onClick={() => {
        setShowItems(!showItems);
      }}
      open={open}
    />
  );

  // expandable region
  const hiddenRegion = navItems.map((item, index) => (
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
  ));

  const LogoIcon = useMemo(
    () =>
      dynamic(() => import(`@/assets/icons/${logo.icon}.svg`), {
        ssr: false,
      }),
    []
  );

  return (
    <YAnimateBackground
      ref={headerRef}
      className="fixed w-full left-0 top-0 z-40"
      open={open}
    >
      <div className="h-15.5 container px-0 border-soft">
        <div className="relative w-full h-full">
          <div
            className={[...menuItemClasses, 'left-1/2 -translate-x-1/2'].join(
              ' '
            )}
          >
            <YLink href={logo.link}>
              <div className="cursor-pointer">
                <LogoIcon />
              </div>
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
                'whitespace-nowrap',
              ].join(' ')}
            >
              {button.text.split(' ')[0]}
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
  );
};

const menuItemClasses = [
  'absolute',
  'top-1/2',
  'transform',
  '-translate-y-1/2',
];

export default HeaderSM;
