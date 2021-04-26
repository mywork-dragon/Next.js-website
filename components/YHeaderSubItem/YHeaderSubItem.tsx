import React from 'react';

import YMenuToggle from '@/components/YMenuToggle';
import YAnimateItem from '@/components/AnimateComponents/YAnimateItem';
import YLink from '@/components/YLink';
import YText from '@/components/YText';

import { ToggleType } from '@/enums/components';
import { ScreenSize } from '@/enums/screenSize';
import { FontLineHeight, FontSize, FontWeight } from '@/enums/font';

import useBreakpoint from '@/hooks/useBreakpoint';

export interface SubItemInterface {
  icon: string;
  text: string;
  link: string;
}

interface Props extends SubItemInterface {
  className?: string;
  onClick?: (e: React.SyntheticEvent) => void;
  fade?: boolean;
}

const SubItem: React.FC<Props> = ({
  icon,
  text,
  link,
  className,
  fade,
  onClick = () => {},
}) => {
  const { screenSize } = useBreakpoint();

  const iconBox = (
    <div className="h-25 w-full bg-blue-250 bg-opacity-40 rounded-lg flex items-center justify-center">
      <img src={icon} className="object-cover" />
    </div>
  );

  const motionProps = {
    animate: fade ? 'fade' : 'regular',
    variants: {
      regular: { opacity: 1 },
      fade: {
        opacity: 0.1,
      },
    },
  };

  return (
    <YLink href={link}>
      <YAnimateItem {...motionProps} as="a">
        <div
          onClick={onClick}
          className={[...containerClasses, className].join(' ')}
        >
          {screenSize == ScreenSize.LG ? (
            iconBox
          ) : (
            <YMenuToggle
              type={ToggleType.Plus}
              className="inline-block transform translate-y-0.5"
            />
          )}
          <YText
            className={textClasses.join(' ')}
            fontSize={FontSize.XS}
            lineHeight={FontLineHeight.Relaxed}
            fontWeight={FontWeight.SemiBold}
            as="p"
          >
            {text}
          </YText>
        </div>
      </YAnimateItem>
    </YLink>
  );
};

const containerClasses = [
  'relative',
  'cursor-pointer',
  'lg:h-32.5',
  'lg:w-40',
  'lg:mt-7',
  'lg:mb-5.5',
  'lg:inline-block',
];
const textClasses = [
  'text-gray-300',
  'inline-block',
  'ml-4',
  'lg:absolute',
  'lg:ml-0',
  'lg:bottom-0',
  'lg:left-1/2',
  'lg:transform',
  'lg:-translate-x-1/2',
  'lg:text-xxs',
  'lg:leading-4',
];
export default SubItem;
