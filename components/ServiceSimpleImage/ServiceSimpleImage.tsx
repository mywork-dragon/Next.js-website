import React from 'react';

import { TextPosition } from '@/enums/components';
import { ScreenSize } from '@/enums/screenSize';
import { FontLineHeight, FontSize, FontWeight } from '@/enums/font';

import useBreakpoint from '@/hooks/useBreakpoint';

import YHeading from '@/components/YHeading';
import YText from '@/components/YText';

interface Props {
  title: string;
  subtitle: string;
  text: string;
  image: JSX.Element;
  textPosition?: TextPosition;
}

const ServiceSimpleImage: React.FC<Props> = ({
  title,
  subtitle,
  text,
  image,
  textPosition = TextPosition.Right,
}) => {
  const { screenSize } = useBreakpoint();

  return (
    <section className="w-full pt-12.5 pb-10 md:py-30 border-b border-soft">
      <div className="container md:px-0">
        <div
          className={[
            'relative',
            'md:h-119',
            'md:w-162',
            'md:transform',
            ...containerClasses[textPosition],
          ].join(' ')}
        >
          <div className="w-full h-224 mb-10 md:mb-0 md:px-auto">{image}</div>
          <div
            className={[
              'md:absolute',
              'md:w-100',
              'md:top-1/2',
              'md:transform',
              'md:-translate-y-1/2',
              ...textBoxClasses[textPosition],
            ].join(' ')}
          >
            <YHeading
              {...titleProps}
              className="text-gray-400 hidden md:block mb-3"
            >
              {title}
            </YHeading>
            <YHeading className="mb-2 md:mb-4" {...subtitleProps[screenSize]}>
              {subtitle}
            </YHeading>
            <YText className="text-gray-400" {...textProps[screenSize]}>
              {text}
            </YText>
          </div>
        </div>
      </div>
    </section>
  );
};

const textBoxClasses = {
  [TextPosition.Left]: ['md:-left-125'],
  [TextPosition.Right]: ['md:-right-125'],
};

const containerClasses = {
  [TextPosition.Left]: ['md:mr-0', 'md:ml-auto', 'md:translate-x-16.6'],
  [TextPosition.Right]: ['md:ml-0', 'md:mr-auto', 'md:-translate-x-16.6'],
};

const titleProps = {
  fontSize: FontSize.LG,
  fontWeight: FontWeight.SemiBold,
  lineHeight: FontLineHeight.Relaxed,
  as: 'h1',
} as Parameters<typeof YHeading>[0];

const subtitleProps = {
  [ScreenSize.SM]: {
    fontSize: FontSize.LG,
    as: 'h2',
  },
  [ScreenSize.MD]: {
    fontSize: FontSize.XXL,
    as: 'h2',
  },
} as Record<ScreenSize, Parameters<typeof YHeading>[0]>;

const textProps = {
  [ScreenSize.SM]: {
    fontSize: FontSize.SM,
    lineHeight: FontLineHeight.Relaxed,
    as: 'p',
  },
  [ScreenSize.MD]: {
    lineHeight: FontLineHeight.Relaxed,
    as: 'p',
  },
} as Record<ScreenSize, Parameters<typeof YText>[0]>;

export default ServiceSimpleImage;
