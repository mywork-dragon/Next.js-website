import React, { useState, useMemo } from 'react';

import YCard from '@/components/YCard';
import style from './BackgroundGrid.module.css';
import { useWindowWidth } from '@react-hook/window-size';

import { ScreenSize, BreakPoint } from '@/enums/screenSize';
import { cardAppearances, cardBaseClasses } from './gridElements';

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
  const screenSize =
    useWindowWidth() < BreakPoint.MD ? ScreenSize.SM : ScreenSize.MD;

  const cardsForDisplay = {
    [ScreenSize.SM]: mirrorForMobile(cards),
    [ScreenSize.MD]: rearrangeForDesktop(cards),
  };

  // shared hover control section
  const [hoveredCard, setHoveredCard] = useState(
    screenSize == ScreenSize.SM ? 4 : 2
  );

  // populates grid with element appearances and appropriate interactive cards from props
  const populateGrid = useMemo(() => {
    const grid = createGridArr(screenSize);

    return grid.map((gridElement, i) => (
      <div
        key={`trans-card-${i}`}
        className={[
          baseGridClasses,
          fadeGridline(i, screenSize),
          grid[i - 1] == 'interactiveCard' ? 'drop-shadow' : '',
        ].join(' ')}
      >
        {gridElement == 'interactiveCard' ? null : gridElement}
      </div>
    ));
  }, [screenSize]);

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
    if (screenSize == ScreenSize.SM) {
      // top left of the box, the cards appear in
      const startingPoint = {
        top: baseStyles.height * 2,
        left: baseStyles.width * 3,
      };

      return cardsForDisplay[screenSize].map((_, index) => ({
        ...baseStyles,
        top: startingPoint.top + Math.floor(index / 3) * topIncrement,
        left: startingPoint.left + Math.floor(index % 3) * leftIncrement,
      }));
    } else {
      // top left of the box, the cards appear in
      const startingPoint = {
        top: baseStyles.height * 2,
        left: baseStyles.width,
      };

      return cardsForDisplay[screenSize].map((_, index) =>
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
                startingPoint.left +
                Math.floor((index - 1) % 3) * leftIncrement,
            }
      );
    }
  }, [screenSize]);

  // add interactive cards to the grid
  const interactiveCards = cardsForDisplay[screenSize].map((card, index) => (
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
        // onHover={() => {}}
      />
    </div>
  ));

  // return grid
  return (
    <div className={['absolute top-0 bg-blue-100', style.bgGrid].join(' ')}>
      {populateGrid}
      {interactiveCards}
    </div>
  );
};

/** utils and helper constants */
const baseGridClasses = 'relative bg-secondary';

const gridDimensions = {
  // rows, columns dimensions for grids
  [ScreenSize.SM]: [6, 9],
  [ScreenSize.MD]: [6, 7],
};

// creates array of items to be rendered to grid
const createGridArr = (
  screenSize: ScreenSize
): Array<null | JSX.Element | 'interactiveCard'> => {
  const numItemsInGrid = gridDimensions[screenSize].reduce(
    (curr, prev) => curr * prev
  );

  let returnArray = Array(numItemsInGrid).fill(null);

  cardAppearances.forEach((card) => {
    card.appearances[screenSize]?.forEach(
      (index) => (returnArray[index] = card.component)
    );
  });

  return returnArray;
};

// adds no-x-gridline class to appropriate elements which creates shadows in both ways to cover grid spacing
const fadeGridline = (index: number, screenSize: ScreenSize) =>
  (screenSize == ScreenSize.MD && (index < 7 || index % 7 == 0)) ||
  (screenSize == ScreenSize.SM && (index < 9 || index % 9 < 3))
    ? 'no-x-gridline'
    : '';

// rearenge cards from props for desktop size display
// 0, 1, 2, 3, 4 => 1, 3, 4, 2, 0
const rearrangeForDesktop = (cards: Card[]) => {
  const safeCards = [...cards];
  const middle = safeCards.splice(2, 1);
  const first = safeCards.shift();
  return safeCards.concat([...middle, first]);
};

// adds mirrored first three cards to the end of cards for mobile display
const mirrorForMobile = (cards: Card[]) =>
  [...cards].concat(cards.slice(0, 3).reverse());

export default BackgroundGrid;
