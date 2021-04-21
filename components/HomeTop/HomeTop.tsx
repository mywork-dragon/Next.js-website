import React, { AriaAttributes, HTMLAttributes, useMemo } from 'react';
import dynamic from 'next/dynamic';

import { FontSize, FontWeight, FontLineHeight } from '@/enums/font';
import { ScreenSize } from '@/enums/screenSize';
import { ButtonSize } from '@/enums/components';

import useBreakpoint from '@/hooks/useBreakpoint';

import { Card } from './BackgroundGridLG';

import YHeading from '@/components/YHeading';
import YText from '@/components/YText';
import YLink from '@/components/YLink';
import YButton from '@/components/YButton';
import YInputButton from '@/components/YInputButton';
import YOutLink from '@/components/YOutLink';

import style from './BackgroundGrid.module.css';

type ButtonProps = AriaAttributes & {
  text: string;
  link: string;
};

export interface PartnerCompany {
  logo: string;
  link: string;
  title: string;
}

interface Props extends HTMLAttributes<HTMLElement> {
  title: string;
  description: string;
  buttonProps: ButtonProps;
  showCompanies?: boolean;
  partners?: PartnerCompany[];
  cards?: Card[];
}

const HomeTop: React.FC<Props> = ({
  title,
  description,
  buttonProps,
  showCompanies = false,
  partners,
  cards,
  ...props
}) => {
  const { screenSize, screenReady } = useBreakpoint();

  const renderCompanies = partners.map(({ logo, title, link }) => {
    const PartnerLogo = useMemo(
      () => dynamic(() => import(`@/assets/icons/${logo}.svg`), { ssr: false }),
      []
    );
    return (
      <YOutLink
        key={title}
        href={link}
        className="outline-none mr-15 inline-block"
        aria-label={`${title} website`}
      >
        <PartnerLogo />
      </YOutLink>
    );
  });

  const renderButton =
    screenSize == ScreenSize.SM ? (
      <YLink href={buttonProps.link}>
        <YButton buttonSize={ButtonSize.LG} className="mb-10" shadow>
          {buttonProps.text}
        </YButton>
      </YLink>
    ) : (
      <YInputButton className="mb-36" />
    );

  const BackgroundGrid = useMemo(
    () =>
      dynamic(
        () =>
          screenSize == ScreenSize.LG
            ? import('./BackgroundGridLG')
            : import('./BackgroundGridSM'),
        { ssr: false }
      ) as React.FC<{
        cards: typeof cards;
      }>,
    [screenSize]
  );

  return (
    <section {...props} className="relative overflow-hidden">
      <div className="container relative pt-88.1 lg:px-0 lg:pt-48.5">
        {screenReady && <BackgroundGrid cards={cards} />}
        <div className="relative z-20 max-w-md lg:w-100">
          <YHeading
            fontSize={FontSize.XXL}
            fontWeight={FontWeight.ExtraBold}
            lineHeight={FontLineHeight.Tight}
            className="text-white mb-2 w-65 lg:mb-5 lg:text-4xl lg:leading-20 lg:w-full"
            as="h1"
          >
            {title} <br />
          </YHeading>
          <YText
            fontSize={FontSize.SM}
            lineHeight={FontLineHeight.Relaxed}
            className="text-gray-300 mb-5 lg:mb-8 lg:text-md lg:leading-11"
            as="p"
          >
            {description} <br />
          </YText>
          {screenReady && renderButton}
        </div>
        <div
          className={[
            'relative',
            'z-20',
            'w-full',
            'h-6.5',
            'mb-20.1',
            'lg:mx-auto',
            'overflow-y-hidden',
            'overflow-x-auto',
            'whitespace-nowrap',
            'lg:flex',
            'lg:justify-center',
            'lg:overflow-hidden',
            'no-scrollbar',
          ].join(' ')}
        >
          {showCompanies && partners && renderCompanies}
        </div>
      </div>
      <br />
    </section>
  );
};

export default HomeTop;
