import React, { useCallback, useState } from 'react';

import YMenuToggle from '@/components/YMenuToggle';
import YLink from '@/components/YLink';
import YText from '@/components/YText';
import YExpandableRegion from '@/components/AnimateComponents/YExpandableRegion';
import YAnimateItem from '@/components/AnimateComponents/YAnimateItem';
import { SubItemInterface } from '@/components/YHeaderSubItem/YHeaderSubItem';
import YConditionalWrapper from '@/components/YConditionalWrapper';

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

  // wrapper YLink element to be used with condtitional wrapper
  const wrapper = useCallback(
    ({ children }) => <YLink href={link}>{children}</YLink>,
    [link]
  );

  // additional elements if item has subitems
  const subItemsAdditional =
    screenSize == ScreenSize.SM ? (
      <YMenuToggle
        type={ToggleType.Plus}
        open={openItems}
        className="absolute right-1 top-1/2 transform -translate-y-1/2"
      />
    ) : (
      <div className="svg-fit fill-current text-gray-200 h-3 w-3 ml-1 flex items-center">
        <DownArrow />
      </div>
    );

  // base and contitional props for animate item
  const handleItemClick = () =>
    screenSize == ScreenSize.LG || !subItems
      ? onClick()
      : setOpenItems(!openItems);

  const mountProps = disableMount ? { initial: false } : {};

  const animateItemProps = {
    ...mountProps,
    onClick: handleItemClick,
    className: [...itemClasses, className].join(' '),
  };

  const itemElement = (
    <YAnimateItem {...animateItemProps}>
      <YText
        fontSize={FontSize.XS}
        lineHeight={FontLineHeight.Relaxed}
        fontWeight={FontWeight.SemiBold}
        className="absolute top-1/2 transform -translate-y-1/2 text-gray-300 lg:relative lg:text-gray-200 lg:transform-none lg:top-0 lg:leading-5"
        as="span"
      >
        {text}
      </YText>
      {subItems && subItemsAdditional}
    </YAnimateItem>
  );

  return (
    <>
      <YConditionalWrapper condition={!subItems} wrapper={wrapper}>
        {itemElement}
      </YConditionalWrapper>
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
  'lg:mr-11',
  'lg:flex',
  'lg:items-center',
];

export default YHeaderItem;
