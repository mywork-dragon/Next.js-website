import React, { useState } from 'react';

import style from './BackgroundGrid.module.css';

import { cardAppearances, cardBaseClasses } from './gridElements';

import YCard from '@/components/YCard';
import { ScreenSize } from '@/enums/screenSize';

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
  return (
    <div
      className={['absolute top-0 bg-blue-100 md:right-0', style.bgGrid].join(
        ' '
      )}
    >
      {populateGrid(cardsForDisplay)}
    </div>
  );
};

/** utils and helper constants */
const baseGridClasses = 'relative bg-secondary';

const gridDimensions = [6, 9];
// rows, columns dimensions for grids

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
