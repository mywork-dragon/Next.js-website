import React from 'react';

import { FontLineHeight, FontSize, FontWeight } from '@/enums/font';

import YButton from '@/components/YButton';
import YHeading from '@/components/YHeading';
import YLink from '@/components/YLink';
import YText from '@/components/YText';

interface ButtonProps {
  text: string;
  link: string;
}

interface Props {
  title: string;
  description: string;
  buttonProps: ButtonProps;
  serviceLabel: string;
  heroImage: {
    filename: string;
    srcSet?: Partial<Record<ScreenSize, string>>;
    alt?: string;
  };
}

import YImage from '../YImage';

/**@TEMP */
import { ScreenSize } from '@/enums/screenSize';

const ServiceTop: React.FC<Props> = ({
  title,
  description,
  buttonProps,
  serviceLabel,
  heroImage,
}) => {
  return (
    <section className="relative overflow-hidden w-full border-b border-soft">
      <div className="container lg:px-0">
        <div className="relative w-full mb-10 pt-80 lg:pt-0 lg:my-37.5 lg:w-150 lg:h-125 lg:ml-auto lg:mr-0">
          <YImage
            {...heroImage}
            {...imageProps}
            className="absolute top-11.5 w-105 sm:left-1/2 sm:transform sm:-translate-x-1/2 md:transform-none lg:transform lg:left-0 lg:top-1/2 lg:translate-x-0 lg:-translate-y-1/2  lg:w-full"
          />
          <div className="max-w-md lg:max-w-none lg:w-100 lg:absolute lg:top-1/2 lg:transform lg:-translate-x-120 lg:-translate-y-1/2">
            <YHeading
              fontSize={FontSize.XS}
              fontWeight={FontWeight.Regular}
              className="text-primary mb-2 lg:mb-3 lg:text-base"
              as="h2"
            >
              {serviceLabel}
            </YHeading>
            <YHeading
              fontSize={FontSize.XL}
              lineHeight={FontLineHeight.Relaxed}
              className="text-white w-37.5 mb-2 lg:mb-3 lg:w-full lg:text-4xl lg:leading-21"
              as="h1"
            >
              {title}
            </YHeading>
            <YText
              fontSize={FontSize.SM}
              lineHeight={FontLineHeight.Relaxed}
              className="text-gray-300 mb-5 lg:mb-6 lg:w-94.6 lg:text-base lg:leading-11"
              as="p"
            >
              {description}
            </YText>
            <YLink href={buttonProps.link}>
              <YButton
                shadow
                className="px-5 py-3 text-sm leading-6 lg:text-md lg:leading-7"
              >
                {buttonProps.text}
              </YButton>
            </YLink>
          </div>
        </div>
      </div>
    </section>
  );
};

const imageProps = {
  width: 384,
  responsive: {
    [ScreenSize.LG]: {
      width: 600,
    },
  },
};

export default ServiceTop;
