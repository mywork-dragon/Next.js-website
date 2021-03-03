import React, { useState } from 'react';

import YLink from '@/components/YLink';
import YText from '@/components/YText';

import Toggle from './MenuToggle';
import { ExpandableRegion, ExpandableItem } from './ExpandableComponents';
import { SubItemInterface } from './SubItem';

import { ToggleType } from '@/enums/components';

export interface NavItemInterface {
  text: string;
  link: string;
  subItems?: SubItemInterface[];
  textProps: Parameters<typeof YText>[0];
  onClick?: () => void;
}

const NavItem: React.FC<NavItemInterface & { className?: string }> = ({
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
            className="relative top-1/2 transform -translate-y-1/2 text-gray-300 md:text-gray-200"
            {...textProps}
            as="p"
          >
            {text}
          </YText>
        </YLink>
        {subItems && (
          <Toggle
            type={ToggleType.Plus}
            open={openItems}
            className="absolute right-1 top-1/2 transform -translate-y-1/2"
            onClick={() => setOpenItems(!openItems)}
          />
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
