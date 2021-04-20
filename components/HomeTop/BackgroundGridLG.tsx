import React, { useMemo, useState } from 'react';
import Image from 'next/image';

import style from './BackgroundGrid.module.css';

import useBreakpoint from '@/hooks/useBreakpoint';

import YCard from '@/components/YCard';

import Gridlines from '@/assets/other/HomeTopGridlineLG.svg';

export interface Card {
  icon?: string;
  title: string;
  description: string;
}

interface Props {
  cards: Card[];
}

const BackgroundGrid: React.FC<Props> = ({ cards }) => {
  // screen size section
  const { screenReady } = useBreakpoint();

  const cardsForDisplay = rearrangeForDesktop(cards);

  // shared hover control section
  const [hoveredCard, setHoveredCard] = useState(2);

  // calculates absolute coordinates for interactive cards
  const cardCoordinates = useMemo(() => {
    const baseStyles = {
      height: 246,
      width: 206,
    };
    // top increment for each row
    const topIncrement = baseStyles.height;
    // left increment for each card (column)
    const leftIncrement = baseStyles.width;

    // top left of the box, the cards appear in
    const startingPoint = {
      top: baseStyles.height * 2,
      left: baseStyles.width,
    };

    return cardsForDisplay.map((_, index) =>
      [0, 4].includes(index)
        ? {
            ...baseStyles,
            // first and last card, positioned in middle column
            top: startingPoint.top + (index == 4 && topIncrement * 2),
            left: startingPoint.left + leftIncrement,
          }
        : {
            ...baseStyles,
            // middle row cards, positioned throught the row in order they appear in
            top: startingPoint.top + topIncrement,
            left:
              startingPoint.left + Math.floor((index - 1) % 3) * leftIncrement,
          }
    );
  }, []);

  // add interactive cards to the grid
  const interactiveCards = cardsForDisplay.map((card, index) => (
    <div
      key={`card-${index}`}
      className="absolute"
      style={cardCoordinates[index]}
    >
      <YCard
        className={cardBaseClasses}
        cardClasses="ml-4"
        {...card}
        hovered={hoveredCard == index}
        onHover={() => setHoveredCard(index)}
      />
    </div>
  ));

  // return grid
  return screenReady ? (
    <div className={['absolute top-0', style.bgGrid, style.gradient].join(' ')}>
      <div className="absolute top-6.5 left-1.5">
        <Gridlines />
      </div>
      <div className="absolute w-404 h-385.5 top-6.5 left-1.5">
        <Image
          src="https://yeaimages.s3.eu-central-1.amazonaws.com/HomeTopGridLG.png"
          className="object-contain"
          layout="fill"
        />
      </div>
      {interactiveCards}
    </div>
  ) : null;
};

const cardBaseClasses =
  'relative top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2';

// rearrange cards from props for desktop size display
// 0, 1, 2, 3, 4 => 1, 3, 4, 2, 0
const rearrangeForDesktop = (cards: Card[]) => {
  const safeCards = [...cards];
  const middle = safeCards.splice(2, 1);
  const first = safeCards.shift();
  return safeCards.concat([...middle, first]);
};

export default BackgroundGrid;
