import React, { AriaAttributes, HTMLAttributes } from 'react';
import { useWindowWidth } from '@react-hook/window-size';

import { FontSize, FontWeight, FontLineHeight } from '@/enums/font';
import { ButtonSize } from '@/enums/components';

import YHeading from '../YHeading';
import YText from '../YText';
import YButton from '../YButton';
import YLink from '../YLink';
import YCard from '../YCard';
import BackgroundGrid, { Card } from './BackgroundGrid';
import YInputButton from '../YInputButton';

/**
 * @TODO some sort of lazy loading logic, icons passed as Elements for now
 */

type ButtonProps = AriaAttributes & {
  text: string;
  link: string;
};

interface Company {
  logo: any; // temp
  link: string;
}

// interface Card {
//   icon?: string;
//   title: string;
//   description: string;
// }

interface Props extends HTMLAttributes<HTMLElement> {
  title: string;
  description: string;
  buttonProps: ButtonProps;
  showCompanies?: boolean;
  companies?: Company[];
  cards?: Card[];
  gridStyle?: React.CSSProperties; // temp
}

const HomeTop: React.FC<Props> = ({
  title,
  description,
  buttonProps,
  showCompanies = false,
  companies,
  cards,
  gridStyle, // temp
  ...props
}) => {
  const smallScreen = useWindowWidth() < 768;
  const xSmallScreen = useWindowWidth() < 414;

  const generateGrid = () => {
    let grid = [];
    let cardIndex = 0;
    for (let i = 0; i < 5; i++) {
      for (let j = 0; j < 5; j++) {
        const sum = i + j;
        grid.push(
          <div className="border border-primary p-auto">
            {i > 0 && j > 0 && sum > 1 && sum < 5 && (
              <YCard {...cards[cardIndex++]} />
            )}
          </div>
        );
      }
    }
    return grid;
  };

  const grid = (
    <div style={gridStyle} className="absolute top-0 skew grid grid-cols-5">
      {generateGrid()}
    </div>
  );

  const renderCompanies = showCompanies && companies && (
    <div className="mb-15 flex w-auto justify-between md:justify-center">
      {companies.map(
        (company, index) =>
          (!xSmallScreen || index < 2) &&
          (!smallScreen || index < 3) && (
            <a href={company.link} className="md:mx-7.5">
              <div className="w-full">{company.logo}</div>
            </a>
          )
      )}
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
    <section {...props} className="container pt-88.1 md:px-0 md:pt-48.5">
      {/* {grid} */}
      <BackgroundGrid gridStyle={gridStyle} cards={cards} />
      <div className="relative w-65 z-20 md:w-100">
        <YHeading
          fontSize={smallScreen ? FontSize.XLL : FontSize['4XL']}
          fontWeight={FontWeight.ExtraBold}
          lineHeight={
            smallScreen ? FontLineHeight.Tight : FontLineHeight.Relaxed
          }
          className="mb-2 md:mb-5"
          as="h1"
        >
          {title} <br />
        </YHeading>
        <YText
          fontSize={smallScreen ? FontSize.SM : FontSize.MD}
          lineHeight={
            smallScreen ? FontLineHeight.Relaxed : FontLineHeight.Loose
          }
          className="text-gray-300 mb-5 md:mb-8"
          as="p"
        >
          {description} <br />
        </YText>
        {renderButton}
      </div>
      {renderCompanies}
      <br />
    </section>
  );
};

export default HomeTop;
