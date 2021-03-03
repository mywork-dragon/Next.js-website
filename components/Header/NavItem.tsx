import React, { useState } from 'react';

import YLink from '@/components/YLink';
import YText from '@/components/YText';

import { Toggle } from './MenuButtons';
import { ExpandableRegion, ExpandableItem } from './AnimatedComponents';
import { SubItemInterface } from './SubItem';

import { ToggleType } from '@/enums/components';

import DownArrow from '@/assets/icons/chevron-down.svg';

export interface NavItemInterface {
  text: string;
  link: string;
  subItems?: SubItemInterface[];
}

interface Props extends NavItemInterface {
  textProps: Parameters<typeof YText>[0];
  onClick?: () => void;
  className?: string;
}

const NavItem: React.FC<Props> = ({
  className,
  link,
  text,
  subItems,
  children,
  textProps,
  onClick,
}) => {
  const [openItems, setOpenItems] = useState(false);

  return (
    <>
      <ExpandableItem
        className={[...itemClasses, className].join(' ')}
        onClick={onClick}
      >
        <YLink href={link}>
          <YText
            className="relative top-1/2 transform -translate-y-1/2 text-gray-300 md:text-gray-200 md:inline-block"
            {...textProps}
            as="p"
          >
            {text}
          </YText>
        </YLink>
        {subItems && (
          <>
            <Toggle
              type={ToggleType.Plus}
              open={openItems}
              className="absolute right-1 top-1/2 transform -translate-y-1/2 md:hidden"
              onClick={() => setOpenItems(!openItems)}
            />
            {/* <div className="hidden relative top-1/2 transform -translate-y-1/2 md:inline-block">
              <DownArrow />
            </div> */}
          </>
        )}
      </ExpandableItem>
      <ExpandableRegion open={openItems}>
        {openItems && children}
      </ExpandableRegion>
    </>
  );
};

const itemClasses = [
  'relative',
  'h-14.1',
  'border-blue-300',
  'md:mr-11',
  'md:h-full',
  'md:inline-block',
];

export default NavItem;
