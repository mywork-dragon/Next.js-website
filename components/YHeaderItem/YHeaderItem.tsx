import React, { useState } from 'react';

import YMenuToggle from '@/components/YMenuToggle';
import YLink from '@/components/YLink';
import YText from '@/components/YText';
import YExpandableRegion from '@/components/AnimateComponents/YExpandableRegion';
import YAnimateItem from '@/components/AnimateComponents/YAnimateItem';
import { SubItemInterface } from '@/components/YHeaderSubItem/YHeaderSubItem';

import { ToggleType } from '@/enums/components';
import { ScreenSize } from '@/enums/screenSize';
import { FontLineHeight, FontSize, FontWeight } from '@/enums/font';

import useBreakpoint from '@/hooks/useBreakpoint';

import DownArrow from '@/assets/icons/chevron-down.svg';

export interface NavItemInterface {
  text: string;
  link: string;
  subItems?: SubItemInterface[];
}

interface Props extends NavItemInterface {
  onClick?: () => void;
  className?: string;
  disableMount?: boolean;
}

const YHeaderItem: React.FC<Props> = ({
  className,
  link,
  text,
  subItems,
  children,
  onClick,
  disableMount,
}) => {
  const { screenSize } = useBreakpoint();

  const [openItems, setOpenItems] = useState(false);

  const itemText = (
    <YText
      onClick={() => (subItems ? setOpenItems(!openItems) : onClick())}
      fontSize={FontSize.XS}
      lineHeight={FontLineHeight.Relaxed}
      fontWeight={FontWeight.SemiBold}
      className="absolute top-1/2 transform -translate-y-1/2 text-gray-300 lg:relative lg:text-gray-200 lg:transform-none lg:top-0 lg:leading-5"
      as="span"
    >
      {text}
    </YText>
  );

  const itemClasses = [
    'relative',
    'h-14.1',
    'border-blue-300',
    'cursor-pointer',
    'lg:mr-11',
    'lg:flex',
    'lg:items-center',
  ];

  return (
    <>
      <YAnimateItem
        onClick={onClick}
        className={[...itemClasses, className].join(' ')}
        disableMount={disableMount}
      >
        {!subItems ? (
          <YLink href={link}>
            <a>{itemText}</a>
          </YLink>
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

export default YHeaderItem;
