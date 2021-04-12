import React, { useState } from 'react';

import { Elapsed } from '@/enums/components';
import { FontLineHeight, FontSize, FontWeight } from '@/enums/font';

import YHeading from '@/components/YHeading';
import YOutLink from '@/components/YOutLink';
import YText from '@/components/YText';

import Pipeline, { Action } from './Pipeline';

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
        className="text-white opacity-40 mb-3 md:mb-4"
        as="p"
      >
        {partnersLabel}
      </YText>
      <div className="relative h-7 w-full overflow-x-auto no-scrollbar">
        <div className="h-full absolute scale-left-75 top-0 left-0 pl-0 flex md:transform-none">
          {partners.map((partner) => (
            <YOutLink
              key={partner.title}
              className="outline-none mr-7.5 inline-block"
              href={partner.link}
            >
              {require(`@/assets/icons/${partner.logo}`).default()}
            </YOutLink>
          ))}
        </div>
      </div>
    </>
  );

  const textBox = (
    <div className="w-full md:w-100">
      <YHeading
        fontSize={FontSize.XL}
        fontWeight={FontWeight.ExtraBold}
        className="w-76.6 mb-3 md:text-3xl md:font-bold md:leading-18"
        as="h1"
      >
        {title}
      </YHeading>
      <YText
        fontSize={FontSize.SM}
        lineHeight={FontLineHeight.Loose}
        className="text-gray-300 mb-7.5 md:text-base md:leading-11 md:mb-12.5"
        as="p"
      >
        {description}
      </YText>
      {partnersElement}
    </div>
  );

  return (
    <section className="relative w-full overflow-hidden border-soft border-b">
      <div className="relative container pt-80 pb-10 md:pt-65 md:pb-50 md:px-0">
        <Pipeline actions={actions} />
        {textBox}
      </div>
    </section>
  );
};

export default MarketingAutomations;
