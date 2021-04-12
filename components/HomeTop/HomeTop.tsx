import React, { AriaAttributes, HTMLAttributes } from 'react';

import { FontSize, FontWeight, FontLineHeight } from '@/enums/font';
import { ScreenSize } from '@/enums/screenSize';
import { ButtonSize } from '@/enums/components';

import useBreakpoint from '@/hooks/useBreakpoint';

import BackgroundGrid, { Card } from './BackgroundGrid';

import YHeading from '@/components/YHeading';
import YText from '@/components/YText';
import YLink from '@/components/YLink';
import YButton from '@/components/YButton';
import YInputButton from '@/components/YInputButton';
import YOutLink from '@/components/YOutLink';

type ButtonProps = AriaAttributes & {
  text: string;
  link: string;
};

export interface Company {
  logo: string;
  link: string;
  title: string;
}

interface Props extends HTMLAttributes<HTMLElement> {
  title: string;
  description: string;
  buttonProps: ButtonProps;
  showCompanies?: boolean;
  companies?: Company[];
  cards?: Card[];
}

const HomeTop: React.FC<Props> = ({
  title,
  description,
  buttonProps,
  showCompanies = false,
  companies,
  cards,
  ...props
}) => {
  const { screenSize, screenReady } = useBreakpoint();

  const renderCompanies = showCompanies && companies && (
    <div
      className={[
        'relative',
        'z-20',
        'w-full',
        'h-6.5',
        'md:mx-auto mb-20.1',
        'overflow-y-hidden',
        'overflow-x-auto',
        'whitespace-nowrap',
        'md:flex',
        'md:justify-center',
        'md:overflow-hidden',
        'no-scrollbar',
      ].join(' ')}
    >
      {companies.map((company) => (
        <YOutLink
          key={company.title}
          href={company.link}
          className="outline-none mr-15 inline-block"
          aria-label={`${company.title} website`}
        >
          {company.logo}
        </YOutLink>
      ))}
    </div>
  );

  const renderButton =
    screenSize == ScreenSize.SM ? (
      <YLink href={buttonProps.link}>
        <YButton className="mb-10" buttonSize={ButtonSize.LG} shadow>
          {buttonProps.text}
        </YButton>
      </YLink>
    ) : (
      <YInputButton className="mb-36" />
    );

  console.log('screen size: ', screenSize);

  return (
    <section {...props} className="overflow-hidden">
      <div className="container relative pt-88.1 md:px-0 md:pt-48.5">
        {screenReady && (
          <BackgroundGrid screenSize={screenSize} cards={cards} />
        )}

        <div className="relative z-20 md:w-100">
          <YHeading
            fontSize={
              screenSize == ScreenSize.SM ? FontSize.XXL : FontSize['4XL']
            }
            fontWeight={FontWeight.ExtraBold}
            lineHeight={
              screenSize == ScreenSize.SM
                ? FontLineHeight.Tight
                : FontLineHeight.Relaxed
            }
            className="mb-2 w-65 md:mb-5 md:w-full"
            as="h1"
          >
            {title} <br />
          </YHeading>
          <YText
            fontSize={screenSize == ScreenSize.SM ? FontSize.SM : FontSize.MD}
            lineHeight={
              screenSize == ScreenSize.SM
                ? FontLineHeight.Relaxed
                : FontLineHeight.Loose
            }
            className="text-gray-300 mb-5 md:mb-8 bg-secondary bg-opacity-80 text-shadow rounded-20"
            as="p"
          >
            {description} <br />
          </YText>
          {renderButton}
        </div>
        {renderCompanies}
      </div>
      <br />
    </section>
  );
};

export default HomeTop;
