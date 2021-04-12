import React, { useState } from 'react';

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
  const { screenSize, screenReady } = useBreakpoint();

  const cardsForDisplay = rearrangeForDesktop(cards);

  // shared hover control section
  const [hoveredCard, setHoveredCard] = useState(2);

  // populates grid with element appearances and appropriate interactive cards from props
  const populateGrid = (cards: Card[]) => {
    let currentCard = 0; // the index of current interactive card to be rendered

    return createGridArr().map((gridElement, index) => {
      const currentCardIndex = currentCard;
      if (gridElement == 'interactiveCard') currentCard++;

      return (
        <div
          className={[baseGridClasses, fadeGridline(index)].join(' ')}
          key={`card-${index}`}
        >
          {gridElement == 'interactiveCard' ? (
            <YCard
              className={[cardBaseClasses, 'drop-shadow'].join(' ')}
              hovered={hoveredCard == currentCardIndex}
              onHover={() => setHoveredCard(currentCardIndex)}
              {...cards[currentCardIndex]}
            />
          ) : (
            gridElement
          )}
        </div>
      );
    });
  };

  // return grid
  return screenReady ? (
    <div className={['absolute top-0 bg-blue-100', style.bgGrid].join(' ')}>
      {populateGrid(cardsForDisplay)}
    </div>
  ) : null;
};

/** utils and helper constants */
const baseGridClasses = 'relative bg-secondary';

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
