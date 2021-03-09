import React, { useState } from 'react';
import { useWindowWidth } from '@react-hook/window-size';

import { BreakPoint, ScreenSize } from '@/enums/screenSize';
import { FontLineHeight, FontSize, FontWeight } from '@/enums/font';

import CardDeck from './CardDeck';
import { Service } from './ServiceCard';
import ServiceButton from './ServiceButton';

import YText from '@/components/YText';
import YHeading from '@/components/YHeading';
import YOutLink from '@/components/YOutLink';

import rotate from '@/libs/utils/rotate';

interface Props {
  title: string;
  description: string;
  services: Service[];
  partners: { logo: JSX.Element; link: string }[];
  partnersLabel?: string;
}

const OurServices: React.FC<Props> = ({
  title,
  description,
  services,
  partners,
  partnersLabel = 'Proud to be official partners with',
}) => {
  const [hovered, setHovered] = useState(0);
  const [active, setActive] = useState(null);

  const screenSize =
    useWindowWidth() < BreakPoint.MD ? ScreenSize.SM : ScreenSize.MD;

  // section title, description + services
  const servicesButtons = (
    <div className="w-full mt-8 grid grid-cols-2 grid-rows-4 gap-8">
      {services.map((service, index) => (
        <ServiceButton
          hovered={hovered == index}
          {...service}
          onClick={() => setActive(service.title)}
          onHover={() => setHovered(index)}
          className="rounded-lg h-15 flex items-center cursor-pointer"
        />
      ))}
    </div>
  );

  const leftSection = (
    <div className="text-center md:w-148 md:h-full md:text-left">
      <div className="md:pr-12.5">
        <YHeading
          className="mt-10 mb-3 md:mt-0"
          {...headingProps[screenSize]}
          as="p"
        >
          {title}
        </YHeading>
        <YText
          className="mb-5 md:mb-0 text-gray-300"
          {...textProps[screenSize]}
          as="p"
        >
          {description}
        </YText>
      </div>
      {screenSize == ScreenSize.MD && servicesButtons}
    </div>
  );

  // card deck and partners
  const rightSection = (
    <div className="relative w-full px-4 md:w-101.5 md:h-full md:px-0">
      <CardDeck
        className="relative h-103.1 md:h-100"
        services={rotate([...services].reverse())}
        active={active}
      />
      <div className="mt-10 w-full text-center md:text-left md:mt-8">
        <YText fontSize={FontSize.XS} className="text-white opacity-40" as="p">
          {partnersLabel}
        </YText>
        <div className="relative h-7 w-full overflow-x-auto scroll-icons mt-3 md:mt-4">
          <div className="h-full absolute scale-left-75 top-0 left-0 pl-0 flex md:transform-none">
            {partners.map((partner) => (
              <YOutLink
                className="outline-none mr-7.5 inline-block"
                href={partner.link}
              >
                {partner.logo}
              </YOutLink>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section className="container md:px-0 md:py-35">
      <div className="pb-10 md:px-0 md:h-124.1 md:w-full md:flex md:justify-between md:pb-0">
        {leftSection}
        {rightSection}
      </div>
    </section>
  );
};

// text props
const headingProps = {
  [ScreenSize.SM]: {
    fontSize: FontSize.XL,
    fontWeight: FontWeight.ExtraBold,
  },
  [ScreenSize.MD]: {
    fontSize: FontSize['3XL'],
    lineHeight: FontLineHeight.Relaxed,
  },
};

const textProps = {
  [ScreenSize.SM]: {
    fontSize: FontSize.SM,
    lineHeight: FontLineHeight.Relaxed,
  },
  [ScreenSize.MD]: {
    fontSize: FontSize.MD,
    lineHeight: FontLineHeight.Loose,
  },
} as Parameters<typeof YText>[0];

export default OurServices;
