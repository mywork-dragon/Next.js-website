import React from 'react';
import { useWindowWidth } from '@react-hook/window-size';

import { ButtonSize, Service } from '@/enums/components';
import { FontLineHeight, FontSize, FontWeight } from '@/enums/font';
import { BreakPoint, ScreenSize } from '@/enums/screenSize';

import YButton from '@/components/YButton';
import YHeading from '@/components/YHeading';
import YLink from '@/components/YLink';
import YText from '@/components/YText';

import heroImages from './heroImages';

interface ButtonProps {
  text: string;
  link: string;
}

interface Props {
  title: string;
  description: string;
  buttonProps: ButtonProps;
  serviceLabel: string;
  service: Service;
}

const ServiceTop: React.FC<Props> = ({
  title,
  description,
  buttonProps,
  serviceLabel,
  service,
}) => {
  const screenSize =
    useWindowWidth() < BreakPoint.MD ? ScreenSize.SM : ScreenSize.MD;

  const hero = heroImages[service];

  const illustration = hero[screenSize] || hero;

  return (
    <section className="relative overflow-hidden w-full border-b border-soft">
      <div className="container md:px-0">
        <div className="relative w-full mb-10 pt-80 md:pt-0 md:my-37.5 md:w-150 md:h-125 md:ml-auto md:mr-0">
          <div className="absolute top-11.5 w-105 h-80 md:static md:h-full md:w-full">
            {illustration}
          </div>
          <div className="md:w-100 md:absolute md:top-1/2 md:transform md:-translate-x-120 md:-translate-y-1/2">
            <YHeading
              className="text-primary mb-2 md:mb-3"
              {...serviceLabelProps[screenSize]}
            >
              {serviceLabel}
            </YHeading>
            <YHeading
              className="w-37.5 mb-2 md:mb-3 md:w-full"
              {...titleProps[screenSize]}
            >
              {title}
            </YHeading>
            <YText
              className="text-gray-300 mb-5 md:mb-6 md:w-94.6"
              {...descriptionProps[screenSize]}
            >
              {description}
            </YText>
            <YLink href={buttonProps.link}>
              <YButton
                shadow
                buttonSize={
                  screenSize == ScreenSize.SM ? ButtonSize.MD : ButtonSize.LG
                }
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

const serviceLabelProps = {
  [ScreenSize.SM]: {
    fontSize: FontSize.XS,
    fontWeight: FontWeight.Regular,
    as: 'h2',
  },
  [ScreenSize.MD]: {
    fontSize: FontSize.MD,
    fontWeight: FontWeight.Regular,
    as: 'h2',
  },
} as Record<ScreenSize, Parameters<typeof YHeading>[0]>;

const titleProps = {
  [ScreenSize.SM]: {
    fontSize: FontSize.XL,
    lineHeight: FontLineHeight.Relaxed,
    as: 'h1',
  },
  [ScreenSize.MD]: {
    fontSize: FontSize['4XL'],
    lineHeight: FontLineHeight.Relaxed,
    as: 'h1',
  },
} as Record<ScreenSize, Parameters<typeof YHeading>[0]>;

const descriptionProps = {
  [ScreenSize.SM]: {
    fontSize: FontSize.SM,
    lineHeight: FontLineHeight.Relaxed,
    as: 'p',
  },
  [ScreenSize.MD]: {
    lineHeight: FontLineHeight.Loose,
    as: 'p',
  },
} as Record<ScreenSize, Parameters<typeof YText>[0]>;

export default ServiceTop;
