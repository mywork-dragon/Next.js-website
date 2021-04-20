import React, { useMemo } from 'react';
import Image from 'next/image';

import PulseBackground from './PulseBackground';
import YCardStack from '@/components/YCardStack';

import Pulse7 from '@/assets/pulse/pulse-7.svg';
import Pulse3 from '@/assets/pulse/pulse-3.svg';

import style from './DataPulse.module.css';

import useBreakpoint from '@/hooks/useBreakpoint';

interface Card {
  icon: string;
  title: string;
  description: string;
}

export interface BackgroundProps {
  cards: Card[];
}

const Background: React.FC<BackgroundProps> = ({ cards }) => {
  const { screenSize, screenReady } = useBreakpoint();

  return (
    <div className="bg-secondary absolute -mx-5 overflow-hidden -z-10 top-0 bottom-0 w-full lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:w-420 lg:rounded-2.5xl">
      <div className="absolute top-0 z-10 right-0 h-59.6 w-68 lg:h-121.6 lg:w-146.6">
        {screenReady && (
          <Image
            src={`https://yeaimages.s3.eu-central-1.amazonaws.com/phone-perspective-${screenSize}.png`}
            className="object-contain"
            layout="fill"
          />
        )}
      </div>
      <div
        className={[
          'absolute',
          'top-0',
          'right-0',
          '-z-10',
          'h-500',
          'pl-124.1 lg:pl-40',
          'whitespace-nowrap',
          'lg:h-625',
          'lg:left-1/2',
          'lg:right-auto',
          'lg:translate',
          'lg:-transform-x-1/2',
          style.bgGradient,
          style.skew,
        ].join(' ')}
      >
        <div className="relative h-full w-224.1 inline-block">
          <div className="absolute bottom-200 h-223.6 w-224.1 whitespace-normal lg:bottom-75">
            {useMemo(
              () =>
                cards.map((card, index) => (
                  <YCardStack
                    key={`${card.title}-${index}`}
                    className="drop-shadow border"
                    {...getStackProps(card, index)}
                  />
                )),
              [cards.length]
            )}
            <PulseBackground />
          </div>
        </div>
        <div
          className={[
            'relative inline-block h-500 w-52.5 lg:h-625',
            style.sideWall,
          ].join(' ')}
        >
          <div className="relative top-70 lg:top-xl">
            <Pulse7 />
          </div>
        </div>
        <div
          className={[
            'relative inline-block h-full w-185.5 lg:w-156',
            style.bgGradient,
          ].join(' ')}
        >
          <div className="relative h-5 w-34 top-128.5 lg:top-377.5">
            <Pulse3 />
          </div>
        </div>
      </div>
    </div>
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

export default Background;
