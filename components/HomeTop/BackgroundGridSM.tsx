import React, { useMemo, useState } from 'react';
import Image from 'next/image';

import style from './BackgroundGrid.module.css';

import YCard from '@/components/YCard';

import Gridlines from '@/assets/other/HomeTopGridlineSM.svg';

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

  const cardsForDisplay = mirrorForMobile(cards);

  // shared hover control section
  const [hoveredCard, setHoveredCard] = useState(4);

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
      left: baseStyles.width * 3,
    };

    return cardsForDisplay.map((_, index) => ({
      ...baseStyles,
      top: startingPoint.top + Math.floor(index / 3) * topIncrement,
      left: startingPoint.left + Math.floor(index % 3) * leftIncrement,
    }));
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
  return (
    <div className={['absolute top-0 md:right-0', style.bgGrid].join(' ')}>
      <div className="absolute top-6.5 left-5.5 w-503.25 h-385.5">
        <Gridlines />
      </div>
      <div className="absolute top-6.5 left-5.5 w-503.25 h-385.5">
        <Image
          src="https://yeaimages.s3.eu-central-1.amazonaws.com/HomeTopGridSM.png"
          className="object-contain"
          layout="fill"
        />
      </div>
      {interactiveCards}
    </div>
  );
};

const cardBaseClasses =
  'relative top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2';

// adds mirrored first three cards to the end of cards for mobile display
const mirrorForMobile = (cards: Card[]) =>
  [...cards].concat([...cards].splice(0, 3).reverse());

export default BackgroundGrid;
