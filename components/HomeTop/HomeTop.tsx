import React, { AriaAttributes, HTMLAttributes } from 'react';
import { useWindowWidth } from '@react-hook/window-size';

import { FontSize, FontWeight, FontLineHeight } from '@/enums/font';
import { ButtonSize } from '@/enums/components';

import style from './HomeTop.module.css';

import YHeading from '../YHeading';
import YText from '../YText';
import YButton from '../YButton';
import YLink from '../YLink';
import BackgroundGrid, { Card } from './BackgroundGrid';
import YInputButton from '../YInputButton';

type ButtonProps = AriaAttributes & {
  text: string;
  link: string;
};

interface Company {
  logo: any;
  link: string;
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
  const smallScreen = useWindowWidth() < 768;

  const renderCompanies = showCompanies && companies && (
    <div
      className={[
        'relative z-20 w-full h-6.5 md:flex md:justify-center md:mx-auto mb-20.1',
        style.scrollIcons,
      ].join(' ')}
    >
      {companies.map((company) => (
        <a href={company.link} className="mr-15 inline-block">
          {company.logo}
        </a>
      ))}
    </div>
  );

  const renderButton = smallScreen ? (
    <YLink href={buttonProps.link}>
      <YButton className="mb-10" buttonSize={ButtonSize.LG} shadow>
        {buttonProps.text}
      </YButton>
    </YLink>
  ) : (
    <YInputButton className="mb-36" />
  );

  return (
    <section {...props} className="overflow-hidden">
      <div className="container relative pt-88.1 md:px-0 md:pt-48.5">
        <BackgroundGrid cards={cards} />

        <div className="relative z-20 md:w-100">
          <YHeading
            fontSize={smallScreen ? FontSize.XLL : FontSize['4XL']}
            fontWeight={FontWeight.ExtraBold}
            lineHeight={
              smallScreen ? FontLineHeight.Tight : FontLineHeight.Relaxed
            }
            className="mb-2 w-65 md:mb-5 md:w-full"
            as="h1"
          >
            {title} <br />
          </YHeading>
          <YText
            fontSize={smallScreen ? FontSize.SM : FontSize.MD}
            lineHeight={
              smallScreen ? FontLineHeight.Relaxed : FontLineHeight.Loose
            }
            className={['text-gray-300 mb-5 md:mb-8', style.bgShadow].join(' ')}
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
