import React, { useMemo, useState } from 'react';

import { ScreenSize } from '@/enums/screenSize';

import style from './BackgroundGrid.module.css';

import useBreakpoint from '@/hooks/useBreakpoint';

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
  const { screenReady } = useBreakpoint();

  const cardsForDisplay = rearrangeForDesktop(cards);

  // shared hover control section
  const [hoveredCard, setHoveredCard] = useState(2);

  // populates grid with element appearances and appropriate interactive cards from props
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
    <div
      className={[
        'absolute top-0 bg-blue-100 bg-opacity-50',
        style.bgGrid,
      ].join(' ')}
    >
      {populateGrid}
      {interactiveCards}
    </div>
  ) : null;
};

/** utils and helper constants */
const baseGridClasses = 'relative bg-secondary opacity-70';

// rows, columns dimensions for grid
const gridDimensions = [6, 7];

// creates array of items to be rendered to grid
const createGridArr = (): Array<null | JSX.Element | 'interactiveCard'> => {
  const numItemsInGrid = gridDimensions.reduce((curr, prev) => curr * prev);

  const returnArray = Array(numItemsInGrid).fill(null);

  cardAppearances.forEach((card) => {
    card.appearances[ScreenSize.MD]?.forEach(
      (index) => (returnArray[index] = card.component)
    );
  });

  return returnArray;
};

// adds no-x-gridline class to appropriate elements which creates shadows in both ways to cover grid spacing
const fadeGridline = (index: number) =>
  index < 7 || index % 7 == 0 ? 'no-x-gridline' : '';

// rearrange cards from props for desktop size display
// 0, 1, 2, 3, 4 => 1, 3, 4, 2, 0
const rearrangeForDesktop = (cards: Card[]) => {
  const safeCards = [...cards];
  const middle = safeCards.splice(2, 1);
  const first = safeCards.shift();
  return safeCards.concat([...middle, first]);
};

export default BackgroundGrid;
