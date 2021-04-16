import React, { useCallback, useMemo, useState } from 'react';
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
    <div className="text-center lg:w-148 lg:h-full lg:text-left">
      <div className="max-w-md mx-auto lg:mx-0 lg:pr-12.5">
        <YHeading
          className="text-white mt-10 mb-3 lg:mt-0 lg:text-3xl lg:leading-18"
          fontSize={FontSize.XL}
          fontWeight={FontWeight.ExtraBold}
          as="p"
        >
          {title}
        </YHeading>
        <YText
          className="mb-5 lg:mb-0 text-gray-300 lg:text-base lg:leading-11"
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
    <div className="relative max-w-xs mx-auto px-4 lg:max-w-none lg:w-101.5 lg:h-full lg:px-0">
      <CardDeck
        className="relative h-80 sm:h-103.1 lg:h-100"
        services={rotate([...services].reverse())}
        active={active}
      />
      <div className="mt-10 w-full text-center lg:text-left lg:mt-8">
        <YText fontSize={FontSize.XS} className="text-white opacity-40" as="p">
          {partnersLabel}
        </YText>
        <div className="relative h-7 w-full overflow-x-auto no-scrollbar mt-3 lg:mt-4">
          <div className="h-full absolute scale-left-75 top-0 left-0 pl-0 flex lg:transform-none">
            {partners.map((partner) => {
              const Logo = useMemo(
                () =>
                  dynamic(() => import(`@/assets/icons/${partner.logo}.svg`), {
                    ssr: false,
                  }),
                []
              );

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
    <section className="w-full overflow-hidden border-soft border-b">
      <div className="pb-10 container lg:px-0 lg:h-195 lg:py-35 lg:w-full lg:flex lg:justify-between">
        {leftSection}
        {rightSection}
      </div>
    </section>
  );
};

export default OurServices;
