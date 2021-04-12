import React, { useCallback, useState } from 'react';
import dynamic from 'next/dynamic';

import { FontLineHeight, FontSize, FontWeight } from '@/enums/font';

import { Service } from '@/components/YServiceCard/YServiceCard';
import YText from '@/components/YText';
import YHeading from '@/components/YHeading';
import YOutLink from '@/components/YOutLink';

import rotate from '@/libs/utils/rotate';

interface Props {
  title: string;
  description: string;
  services: Service[];
  partners: { logo: string; link: string }[];
  partnersLabel?: string;
}

const ServicesButtons = dynamic(() => import('./ServicesButtons'), {
  ssr: false,
});

const CardDeck = dynamic(() => import('@/components/YCardDeck'), {
  ssr: false,
});

const OurServices: React.FC<Props> = ({
  title,
  description,
  services,
  partners,
  partnersLabel = 'Proud to be official partners with',
}) => {
  const [active, setActive] = useState(services[0].title);

  const handleActiveChange = useCallback(
    (title: string) => setActive(title),
    []
  );

  const leftSection = (
    <div className="text-center md:w-148 md:h-full md:text-left">
      <div className="md:pr-12.5">
        <YHeading
          className="text-white mt-10 mb-3 md:mt-0 md:text-3xl md:leading-18"
          fontSize={FontSize.XL}
          fontWeight={FontWeight.ExtraBold}
          as="p"
        >
          {title}
        </YHeading>
        <YText
          className="mb-5 md:mb-0 text-gray-300 md:text-base md:leading-11"
          fontSize={FontSize.SM}
          lineHeight={FontLineHeight.Relaxed}
          as="p"
        >
          {description}
        </YText>
      </div>
      <ServicesButtons
        services={services}
        active={active}
        onChange={handleActiveChange}
      />
    </div>
  );

  // card deck and partners
  const rightSection = (
    <div className="relative w-full px-4 md:w-101.5 md:h-full md:px-0">
      <CardDeck
        className="relative h-80 sm:h-103.1 md:h-100"
        services={rotate([...services].reverse())}
        active={active}
      />
      <div className="mt-10 w-full text-center md:text-left md:mt-8">
        <YText fontSize={FontSize.XS} className="text-white opacity-40" as="p">
          {partnersLabel}
        </YText>
        <div className="relative h-7 w-full overflow-x-auto no-scrollbar mt-3 md:mt-4">
          <div className="h-full absolute scale-left-75 top-0 left-0 pl-0 flex md:transform-none">
            {partners.map((partner) => {
              let Logo: () => JSX.Element;
              try {
                Logo = require(`@/assets/icons/${partner.logo}.svg`).default;
              } catch {
                Logo = () => null;
              }

              return (
                <YOutLink
                  key={partner.link}
                  className="outline-none mr-7.5 inline-block"
                  href={partner.link}
                >
                  <Logo />
                </YOutLink>
              );
            })}
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

export default OurServices;
