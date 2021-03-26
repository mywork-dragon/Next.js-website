import React, { useState } from 'react';

import YMenuToggle from '@/components/YMenuToggle';
import YLink from '@/components/YLink';
import YText from '@/components/YText';
import YExpandableRegion from '@/components/AnimateComponents/YExpandableRegion';
import YAnimateItem from '@/components/AnimateComponents/YAnimateItem';

import { SubItemInterface } from '@/components/YHeaderSubItem/YHeaderSubItem';

import { ToggleType } from '@/enums/components';
import { ScreenSize } from '@/enums/screenSize';

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
  screenSize: ScreenSize;
  disableMount?: boolean;
}

const YHeaderItem: React.FC<Props> = ({
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

  const itemText = (
    <YText
      onClick={() => (subItems ? setOpenItems(!openItems) : null)}
      {...textProps}
      className="relative top-1/2 transform -translate-y-1/2 text-gray-300 md:text-gray-200 md:transform-none md:top-0"
      as="p"
    >
      {text}
    </YText>
  );

  return (
    <>
      <YAnimateItem
        className={[...itemClasses, className].join(' ')}
        onClick={onClick}
        disableMount={disableMount}
      >
        {!subItems ? (
          <YLink href={link}>{itemText}</YLink>
        ) : (
          <>
            {itemText}
            {screenSize == ScreenSize.SM ? (
              <YMenuToggle
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
          </>
        )}
      </YAnimateItem>
      {children && (
        <YExpandableRegion open={openItems}>
          {openItems && children}
        </YExpandableRegion>
      )}
    </>
  );
};

const itemClasses = [
  'relative',
  'h-14.1',
  'border-blue-300',
  'cursor-pointer',
  'md:mr-11',
  'md:flex',
  'md:items-center',
];

export default YHeaderItem;
