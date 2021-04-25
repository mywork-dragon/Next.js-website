import React, { useMemo, useRef, useState } from 'react';
import { AnimateSharedLayout } from 'framer-motion';
import dynamic from 'next/dynamic';

import YHeaderItem, {
  NavItemInterface,
} from '@/components/YHeaderItem/YHeaderItem';
import YHeaderSubItem, {
  SubItemInterface,
} from '@/components/YHeaderSubItem/YHeaderSubItem';

import YExpandableRegion from '@/components/AnimateComponents/YExpandableRegion';
import YAnimateBackground from '@/components/AnimateComponents/YAnimateBackground';
import YSlider from '@/components/YSlider';
import YLink from '@/components/YLink';
import YButton from '@/components/YButton';
import YSelect from '@/components/YSelect';

import useClickOutside from '@/hooks/useClickOutside';
import usePrefetch from '@/hooks/usePrefetch';

import { ButtonSize, ButtonShape, ArrowType } from '@/enums/components';
import { Language } from '@/enums/language';

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
  buttonProps: Button;
  showMoreLabel?: string;
  locales?: Language[];
}

const HeaderLG: React.FC<Props> = ({
  logo,
  navItems,
  buttonProps,
  showMoreLabel,
  locales,
}) => {
  // control opening and closing of header
  const [subItems, setSubItems] = useState<SubItemInterface[] | null>(null);

  const open = Boolean(subItems);

  const headerRef = useRef(null);
  useClickOutside(headerRef, () => {
    setSubItems(null);
  });

  // prefetch icons in hidden region (sub items)
  const iconWidth = 145;
  const iconHeight = 90;

  const iconsToPrefetch = navItems.reduce(
    (
      acc: { filename: string; width: number; height: number }[],
      { subItems }: NavItemInterface
    ) => {
      const curr = subItems
        ? subItems.map(({ icon: { filename } }) => ({
            filename,
            width: iconWidth,
            height: iconHeight,
          }))
        : [];
      acc = [...acc, ...curr];
      return acc;
    },
    []
  );

  usePrefetch(iconsToPrefetch);

  // top bar region
  const additionalComponents = (
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
      <YSelect className="mr-6" locales={locales} />
    </>
  );

  // expandable region
  const hiddenRegion = (
    <>
      <YSlider
        className="relative whitespace-nowrap overflow-hidden"
        showMoreLabel={showMoreLabel}
      >
        {({ position }) => (
          <>
            {subItems?.map((subItem, index) => (
              <YHeaderSubItem
                onClick={() => setSubItems(null)}
                {...subItem}
                key={subItem.text}
                className={index < subItems.length - 1 ? 'mr-5' : ''}
                fade={
                  (position == ArrowType.Right &&
                    index < subItems.length - 5) ||
                  (position == ArrowType.Left && index > 4)
                }
              />
            ))}
          </>
        )}
      </YSlider>
      <div className="absolute top-full width-full h-0 border-soft border-b" />
    </>
  );

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
      className="absolute w-full left-0 top-0 z-40 hidden lg:block"
      open={open}
      openClasses="bg-blue-header backdrop-blur-60 bg-opacity-70"
    >
      <div className="container px-0 h-23.5 border-soft">
        <div className="relative w-full h-8.5 top-1/2 flex items-center">
          <div
            className={[
              ...menuItemClasses,
              'left-0 translate-x-0 inline-block',
            ].join(' ')}
          >
            <YLink href={logo.link}>
              <a className="cursor-pointer">
                <LogoIcon />
              </a>
            </YLink>
          </div>
          {additionalComponents}
          <YLink href={buttonProps.link}>
            <YButton
              buttonSize={ButtonSize.XS}
              shape={ButtonShape.Round}
              className={[
                ...menuItemClasses,
                'right-0',
                'whitespace-nowrap',
              ].join(' ')}
            >
              {buttonProps.text}
            </YButton>
          </YLink>
        </div>
      </div>
      <AnimateSharedLayout>
        <YExpandableRegion
          className="flex flex-col items-stretch container"
          open={open}
          height={181}
        >
          {hiddenRegion}
        </YExpandableRegion>
      </AnimateSharedLayout>
    </YAnimateBackground>
  );
};

const menuItemClasses = [
  'relative',
  'top-1/2',
  'transform',
  '-translate-y-1/2',
];

export default HeaderLG;
