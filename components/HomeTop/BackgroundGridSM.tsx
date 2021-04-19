import React, { useMemo, useState } from 'react';

import { ScreenSize } from '@/enums/screenSize';

import style from './BackgroundGrid.module.css';

import { cardAppearances, cardBaseClasses } from './gridElements';

import YCard from '@/components/YCard';

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

  const populateGrid = useMemo(() => {
    const grid = createGridArr();

    return grid.map((gridElement, i) => (
      <div
        key={`trans-card-${i}`}
        className={[
          baseGridClasses,
          fadeGridline(i),
          grid[i - 1] == 'interactiveCard' ? 'drop-shadow' : '',
        ].join(' ')}
      >
        {gridElement == 'interactiveCard' ? null : gridElement}
      </div>
    ));
  }, []);

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
    <div
      className={[
        'absolute top-0 bg-blue-100 bg-opacity-50 md:right-0',
        style.bgGrid,
      ].join(' ')}
    >
      {populateGrid}
      {interactiveCards}
    </div>
  );
};

/** utils and helper constants */
const baseGridClasses = 'relative bg-secondary opacity-50';

// rows, columns dimensions for grid
const gridDimensions = [6, 9];

// creates array of items to be rendered to grid
const createGridArr = (): Array<null | JSX.Element | 'interactiveCard'> => {
  const numItemsInGrid = gridDimensions.reduce((curr, prev) => curr * prev);

  const returnArray = Array(numItemsInGrid).fill(null);

  cardAppearances.forEach((card) => {
    card.appearances[ScreenSize.SM]?.forEach(
      (index) => (returnArray[index] = card.component)
    );
  });

  return returnArray;
};

// adds no-x-gridline class to appropriate elements which creates shadows in both ways to cover grid spacing
const fadeGridline = (index: number) =>
  index < 9 || index % 9 < 3 ? 'no-x-gridline' : '';

// adds mirrored first three cards to the end of cards for mobile display
const mirrorForMobile = (cards: Card[]) =>
  [...cards].concat([...cards].splice(0, 3).reverse());

export default BackgroundGrid;
