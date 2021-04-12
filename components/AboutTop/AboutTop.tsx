import React from 'react';

import { FontLineHeight, FontSize, FontWeight } from '@/enums/font';

import YHeading from '@/components/YHeading';

interface Props {
  title: string;
  description: string;
}

const AboutTop: React.FC<Props> = ({ title, description }) => {
  return (
    <section className="w-full overflow-hidden">
      <div className="container md:px-0">
        <YHeading
          fontSize={FontSize.XS}
          fontWeight={FontWeight.Regular}
          as="h1"
          className="text-primary pt-21 md:pt-68.5 md:text-lg md:leading-9"
        >
          {title}
        </YHeading>
        <YHeading
          fontSize={FontSize.XL}
          lineHeight={FontLineHeight.Loose}
          fontWeight={FontWeight.SemiBold}
          className="text-white mt-5 mb-49 w-70 md:mb-130.5 md:w-200 md:text-4xl md:leading-21"
          as="p"
        >
          {description}
        </YHeading>
      </div>
    </section>
  );
};

export default AboutTop;
