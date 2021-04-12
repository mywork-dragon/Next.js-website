import React from 'react';

import { BreakPoint, ScreenSize } from '@/enums/screenSize';
import { FontLineHeight, FontSize, FontWeight } from '@/enums/font';

import useBreakpoint from '@/hooks/useBreakpoint';

import YHeading from '@/components/YHeading';

interface Props {
  heading: string;
  description: string;
}

const ServiceSimple: React.FC<Props> = ({ heading, description }) => {
  const { screenSize } = useBreakpoint();

  return screenSize ? (
    <section className="w-full border-soft border-b py-15 md:py-40">
      <div className="container md:flex md:justify-between">
        <YHeading
          className="text-primary w-35 mb-5 md:w-54.5"
          {...headingProps[screenSize]}
        >
          {heading}
        </YHeading>
        <YHeading
          className="w-full mb-5 md:w-190"
          {...descriptionProps[screenSize]}
        >
          {description}
        </YHeading>
      </div>
    </section>
  ) : null;
};

const headingProps = {
  [ScreenSize.SM]: {
    fontSize: FontSize.XL,
    fontWeight: FontWeight.SemiBold,
    lineHeight: FontLineHeight.Relaxed,
    as: 'h1',
  },
  [ScreenSize.MD]: {
    fontSize: FontSize['4XL'],
    fontWeight: FontWeight.SemiBold,
    as: 'h1',
  },
} as Record<ScreenSize, Parameters<typeof YHeading>[0]>;

const descriptionProps = {
  [ScreenSize.SM]: {
    fontSize: FontSize.LG,
    lineHeight: FontLineHeight.Loose,
    fontWeight: FontWeight.SemiBold,
  },
  [ScreenSize.MD]: {
    fontSize: FontSize.XXL,
    lineHeight: FontLineHeight.Loose,
    fontWeight: FontWeight.SemiBold,
  },
} as Record<ScreenSize, Parameters<typeof YHeading>[0]>;

export default ServiceSimple;
