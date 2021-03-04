import React, { useState } from 'react';

import YLink from '@/components/YLink';
import YText from '@/components/YText';
import ExpandableRegion from '@/components/AnimateComponents/ExpandableRegion';
import AnimateItem from '@/components/AnimateComponents/AnimateItem';

import { Toggle } from './MenuButtons';
import { SubItemInterface } from './SubItem';

import { ToggleType } from '@/enums/components';

import DownArrow from '@/assets/icons/chevron-down.svg';
import { ScreenSize } from '@/enums/screenSize';

export interface NavItemInterface {
  text: string;
  link: string;
  subItems?: SubItemInterface[];
}

interface Props extends NavItemInterface {
  textProps: Parameters<typeof YText>[0];
  onClick?: () => void;
  className?: string;
  screenSize: ScreenSize;
  disableMount?: boolean;
}

const NavItem: React.FC<Props> = ({
  className,
  link,
  text,
  subItems,
  children,
  textProps,
  onClick,
  screenSize,
  disableMount,
}) => {
  const [openItems, setOpenItems] = useState(false);

  return (
    <>
      <AnimateItem
        className={[...itemClasses, className].join(' ')}
        onClick={onClick}
        disableMount={disableMount}
      >
        <YLink href={link}>
          <YText
            {...textProps}
            className="relative top-1/2 transform -translate-y-1/2 text-gray-300 md:text-gray-200 md:transform-none md:top-0"
            as="p"
          >
            {text}
          </YText>
        </YLink>
        {!subItems ? null : screenSize == ScreenSize.SM ? (
          <Toggle
            type={ToggleType.Plus}
            open={openItems}
            className="absolute right-1 top-1/2 transform -translate-y-1/2"
            onClick={() => setOpenItems(!openItems)}
          />
        ) : (
          <div className="fill-current text-gray-200 h-3 w-3 ml-1 flex items-center">
            <DownArrow />
          </div>
        )}
      </AnimateItem>
      {children && (
        <ExpandableRegion open={openItems}>
          {openItems && children}
        </ExpandableRegion>
      )}
    </>
  );
};

const itemClasses = [
  'relative',
  'h-14.1',
  'border-blue-300',
  'md:mr-11',
  'md:flex',
  'md:items-center',
];

export default NavItem;
