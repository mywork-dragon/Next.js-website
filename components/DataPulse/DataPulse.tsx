import React, { useMemo, useState } from 'react';
import { useWindowWidth } from '@react-hook/window-size';

import { FontLineHeight, FontSize, FontWeight } from '@/enums/font';
import { ScreenSize, BreakPoint } from '@/enums/screenSize';

import PulseBackground from './PulseBackground';
import YCardStack from '@/components/YCardStack';
import YHeading from '@/components/YHeading';
import YText from '@/components/YText';
import YLink from '@/components/YLink';
import YButton from '@/components/YButton';

import PhonePerspective from '@/assets/other/phone-perspective.svg';
import PhonePerspectiveSM from '@/assets/other/phone-perspective-sm.svg';

import style from './DataPulse.module.css';
import { ButtonShape, ButtonSize } from '@/enums/components';

interface ButtonProps {
  text: string;
  link: string;
}

interface Card {
  Icon: JSX.Element;
  title: string;
  description: string;
}

interface Props {
  title: string;
  description: string;
  buttonProps: ButtonProps;
  cards: Card[];
}

const DataPulse: React.FC<Props> = ({
  title,
  description,
  buttonProps,
  cards,
}) => {
  const screenSize =
    useWindowWidth() < BreakPoint.MD ? ScreenSize.SM : ScreenSize.MD;

  return (
    <>
      <div className="relative w-full overflow-hidden md:h-210">
        <div className="absolute overflow-hidden -z-10 top-0 bottom-0 w-full md:left-1/2 md:transform md:-translate-x-1/2 md:w-420 md:rounded-2.5xl">
          <div className="absolute top-0 z-10 right-0">
            {screenSize == ScreenSize.SM ? (
              <PhonePerspectiveSM />
            ) : (
              <PhonePerspective />
            )}
          </div>
          <Background cards={cards} />
        </div>
        <div className="container relative h-full mb-10">
          <div className="relative z-10 mt-111.1 w-full text-center md:mt-0 md:text-left md:top-45 md:w-97.5">
            <YHeading className="mb-3" as="p" {...titleProps[screenSize]}>
              {title}
            </YHeading>
            <YText
              {...textProps[screenSize]}
              className="text-gray-300 mb-4 md:mb-5"
              lineHeight={FontLineHeight.Loose}
              as="p"
            >
              {description}
            </YText>
            <YLink href={buttonProps.link}>
              <YButton
                shape={ButtonShape.Round}
                shadow
                buttonSize={buttonSize[screenSize]}
              >
                {buttonProps.text}
              </YButton>
            </YLink>
          </div>
        </div>
      </div>
    </>
  );
};

const buttonSize = {
  [ScreenSize.SM]: ButtonSize.SM,
  [ScreenSize.MD]: ButtonSize.MD,
};

const titleProps = {
  [ScreenSize.SM]: {
    fontSize: FontSize.XL,
    fontWeight: FontWeight.ExtraBold,
  },
  [ScreenSize.MD]: {
    lineHeight: FontLineHeight.Relaxed,
  },
};
const textProps = {
  [ScreenSize.SM]: {
    fontSize: FontSize.SM,
    lineHeight: FontLineHeight.Relaxed,
  },
  [ScreenSize.MD]: {
    lineHeight: FontLineHeight.Loose,
  },
} as Record<ScreenSize, Parameters<typeof YText>[0]>;

export const Background: React.FC<{
  cards: Props['cards'];
  className?: string;
}> = ({ cards }) => {
  return (
    <>
      <div
        className={[
          'absolute',
          '-z-10',
          'h-500 md:h-535',
          'pl-124.1 md:pl-40',
          'whitespace-nowrap',
          style.bgGradient,
          style.skew,
        ].join(' ')}
      >
        <div className="relative h-full w-224.1 inline-block">
          <div className="absolute bottom-200 h-223.6 w-224.1 whitespace-normal md:bottom-72">
            {useMemo(
              () =>
                cards.map((card, index) => (
                  <YCardStack {...getStackProps(card, index)} />
                )),
              [cards]
            )}
            <PulseBackground />
          </div>
        </div>
        <div
          style={{
            width: 210,
            transform: `skewY(-45deg)`,
            background: `linear-gradient(
              97deg,
              rgba(14, 52, 75, 0.15) 50%,
              rgba(8, 32, 46, 1) 74%,
              rgba(6, 34, 51, 0.88) 122%
              )`,
          }}
          className={['relative inline-block h-500 md:h-535'].join(' ')}
        />
        <div
          className={[
            'relative inline-block h-full w-185.5 md:w-156',
            style.bgGradient,
          ].join(' ')}
        ></div>
      </div>
    </>
  );
};

const grayCard = { cardClasses: 'card-gray' };
const blueCard = { cardClasses: 'card-blue' };

const getStackProps = (topCard: Card, index: number) => {
  const className = classesByStack[index];
  let cards = stackCards[index];
  cards.push({ ...topCard, cardClasses: topCardClasses[index] });

  return { className, cards };
};

// cards in each stack
const stackCards = [
  [grayCard, grayCard],
  [],
  [grayCard, grayCard, grayCard],
  [grayCard, blueCard],
  [grayCard],
  [grayCard],
  [grayCard, blueCard, grayCard],
];

// position classnames for each stack
const classesByStack = [
  '-left-8 top-7.5',
  'top-30.5 left-74.6',
  'left-auto -top-2 right-33',
  '-left-8 top-91.6',
  'top-114.1 left-74.6',
  'left-auto top-81.6 right-33',
  'left-auto bottom-1 right-33',
];

// cardCasses for each top card on stack (empty are default -> "card-white")
const topCardClasses = [
  '',
  '',
  'card-green',
  '',
  'card-orange',
  'card-blue',
  '',
];

export default DataPulse;
