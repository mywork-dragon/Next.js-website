import React, { useMemo, useState } from 'react';

import PulseBackground from './PulseBackground';
import YCardStack from '@/components/YCardStack';
import YHeading from '@/components/YHeading';
import YText from '@/components/YText';

import PhonePerspective from '@/assets/other/phone-perspective.svg';

import style from './DataPulse.module.css';
import { FontLineHeight } from '@/enums/font';

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
  return (
    <div className="relative border border-primary h-210 w-420 rounded-2.5xl overflow-hidden mx-auto">
      <div className="absolute top-0 right-0">
        <PhonePerspective />
      </div>
      <div className="absolute left-75 top-45 w-97.5 z-10">
        <YHeading className="mb-3" as="p" lineHeight={FontLineHeight.Relaxed}>
          {title}
        </YHeading>
        <YText
          className="text-gray-300 mb-5"
          lineHeight={FontLineHeight.Loose}
          as="p"
        >
          {description}
        </YText>
      </div>
      <Background cards={cards} />
    </div>
  );
};

export const Background: React.FC<{
  cards: Props['cards'];
  className?: string;
}> = ({ cards, className }) => {
  return (
    <>
      <div
        style={{
          transform: `matrix(0.75, -0.46, 0.79, 0.46, 124, -480)`,
        }}
        className={[
          'absolute',
          '-z-10',
          'h-500',
          'pl-40',
          style.bgGradient,
          // className,
        ].join(' ')}
      >
        <div className="relative h-full w-224.1 inline-block">
          <div className="absolute bottom-65 h-223.6 w-224.1">
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
            width: 175,
            transform: 'translateY(12.5%) skewY(-45deg)',
            background: `linear-gradient(
              97deg,
              rgba(14, 52, 75, 0.15) 50%,
              rgba(8, 32, 46, 1) 74%,
    rgba(6, 34, 51, 0.88) 122%
    )`,
          }}
          className={['relative inline-block h-500'].join(' ')}
        />
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
