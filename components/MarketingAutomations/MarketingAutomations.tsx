import React from 'react';

import { FontLineHeight, FontSize, FontWeight } from '@/enums/font';

import YHeading from '@/components/YHeading';
import YOutLink from '@/components/YOutLink';
import YText from '@/components/YText';

import Pipeline, { Action } from './Pipeline';
import dynamic from 'next/dynamic';

interface Company {
  logo: string;
  link: string;
  title: string;
}

interface Props {
  title: string;
  description: string;
  partnersLabel: string;
  partners: Company[];
  actions: Action[];
}

const MarketingAutomations: React.FC<Props> = ({
  title,
  description,
  partners,
  partnersLabel,
  actions,
}) => {
  const partnersElement = (
    <>
      <YText
        fontSize={FontSize.XS}
        className="text-white opacity-40 mb-3 lg:mb-4"
        as="p"
      >
        {partnersLabel}
      </YText>
      <div className="relative h-7 w-full overflow-x-auto no-scrollbar">
        <div className="h-full absolute scale-left-75 top-0 left-0 pl-0 flex lg:transform-none">
          {partners.map(({ logo, title, link }) => {
            const Icon = dynamic(() => import(`@/assets/icons/${logo}.svg`), {
              ssr: false,
            });

            return (
              <YOutLink
                key={title}
                className="outline-none mr-7.5 inline-block"
                href={link}
              >
                <Icon />
              </YOutLink>
            );
          })}
        </div>
      </div>
    </>
  );

  const textBox = (
    <div className="max-w-lg lg:w-100">
      <YHeading
        fontSize={FontSize.XL}
        fontWeight={FontWeight.ExtraBold}
        className="text-white w-76.6 mb-3 lg:text-3xl lg:font-bold lg:leading-18"
        as="h1"
      >
        {title}
      </YHeading>
      <YText
        fontSize={FontSize.SM}
        lineHeight={FontLineHeight.Loose}
        className="text-gray-300 mb-7.5 lg:text-base lg:leading-11 lg:mb-12.5"
        as="p"
      >
        {description}
      </YText>
      {partnersElement}
    </div>
  );

  return (
    <section className="relative w-full overflow-hidden border-soft border-b">
      <div className="relative container pt-80 pb-10 lg:pt-65 lg:pb-50">
        <Pipeline actions={actions} />
        {textBox}
      </div>
    </section>
  );
};

export default MarketingAutomations;
