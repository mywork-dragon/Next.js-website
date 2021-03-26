import React from 'react';
import { useWindowWidth } from '@react-hook/window-size';

import { BreakPoint, ScreenSize } from '@/enums/screenSize';

import YHeading from '@/components/YHeading';
import { FontLineHeight, FontSize, FontWeight } from '@/enums/font';

interface Props {
  heading: string;
  description: string;
}

const ServiceSimple: React.FC<Props> = ({ heading, description }) => {
  const screenSize =
    useWindowWidth() < BreakPoint.MD ? ScreenSize.SM : ScreenSize.MD;

  return (
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
  );
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
