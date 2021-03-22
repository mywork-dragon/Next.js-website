import React from 'react';

import YMenuToggle from '@/components/YMenuToggle';
import YAnimateItem from '@/components/AnimateComponents/YAnimateItem';
import YLink from '@/components/YLink';
import YText from '@/components/YText';

import { ToggleType } from '@/enums/components';
import { ScreenSize } from '@/enums/screenSize';

export interface SubItemInterface {
  icon: JSX.Element;
  text: string;
  link: string;
}

interface Props extends SubItemInterface {
  textProps?: Parameters<typeof YText>[0];
  className?: string;
  showIcon?: boolean; // temp
  screenSize?: ScreenSize;
}

const SubItem: React.FC<Props> = ({
  icon,
  text,
  link,
  textProps,
  className,
  showIcon,
  screenSize,
}) => {
  const iconBox = (
    <div className="h-25 w-full bg-blue-250 bg-opacity-40 rounded-lg flex items-center justify-center">
      {showIcon && icon}
    </div>
  );

  return (
    <YLink href={link}>
      <YAnimateItem className={[...containerClasses, className].join(' ')}>
        {screenSize == ScreenSize.SM ? (
          <YMenuToggle
            type={ToggleType.Plus}
            className="inline-block transform translate-y-0.5"
          />
        ) : (
          iconBox
        )}
        <YText className={textClasses.join(' ')} {...textProps} as="p">
          {text}
        </YText>
      </YAnimateItem>
    </YLink>
  );
};

const containerClasses = [
  'relative',
  'cursor-pointer',
  'pb-5',
  'md:h-32.5',
  'md:w-40',
  'md:mt-7',
  'md:mb-5.5',
  'md:inline-block',
];
const textClasses = [
  'text-gray-300',
  'inline-block',
  'ml-4',
  'md:absolute',
  'md:ml-0',
  'md:bottom-0',
  'md:left-1/2',
  'md:transform',
  'md:-translate-x-1/2',
];
export default SubItem;
