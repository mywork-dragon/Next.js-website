import React from 'react';

import { TextPosition } from '@/enums/components';
import { ScreenSize } from '@/enums/screenSize';
import YHeading from '../YHeading';
import YText from '../YText';

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
  textPosition = TextPosition.Left,
}) => {
  return (
    <section className="w-full pt-12.5 pb-10 md:py-30">
      <div
        className={[
          'container relative',
          ...containerClasses[textPosition],
        ].join(' ')}
      >
        <div className="w-full h-224 mb-10 md:h-full md:mb-0 md:w- md:px-auto">
          {image}
        </div>
        <div
          className={[
            'md:absolute',
            'md:w-100',
            'md:top-1/2',
            'md:transform',
            'md"-translate-y-1/2',
            ...textBoxClasses[textPosition],
          ].join(' ')}
        >
          <YHeading className="hidden md:block">{title}</YHeading>
          <YHeading>{subtitle}</YHeading>
          <YText>{text}</YText>
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
  [TextPosition.Left]: ['md:mr-0', 'md:ml-auto'],
  [TextPosition.Right]: ['md:ml-0', 'md:mr-auto'],
};

export default ServiceSimpleImage;
