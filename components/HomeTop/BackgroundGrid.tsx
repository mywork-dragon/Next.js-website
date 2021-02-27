import React from 'react';

import YCard from '../YCard/YCard';
import style from './BackgroundGrid.module.css';
import { useWindowWidth } from '@react-hook/window-size';

import { ScreenSize } from '@/enums/screenSize';
import { cardAppearances, cardBaseClasses } from './gridElements';

export interface Card {
  icon?: string;
  title: string;
  description: string;
}

interface Props {
  cards: Card[];
}

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

const baseGridClasses = 'relative bg-secondary';

// populates grid with element appearances and appropriate interactive cards from props
const populateGrid = (screenSize: ScreenSize, cards: Card[]) => {
  let currentCard = 0; // the index of current interactive card to be rendered

  return createGridArr(screenSize).map((gridElement, i) => (
    <div className={[baseGridClasses, fadeGridline(i, screenSize)].join(' ')}>
      {gridElement == 'interactiveCard' ? (
        <YCard className={cardBaseClasses} {...cards[currentCard++]} />
      ) : (
        gridElement
      )}
    </div>
  ));
};

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
  [...cards].concat([...cards].splice(0, 3).reverse());

const BackgroundGrid: React.FC<Props> = ({ cards }) => {
  const screenSize = useWindowWidth() < 768 ? ScreenSize.SM : ScreenSize.MD;

  const cardsForDisplay = {
    [ScreenSize.SM]: mirrorForMobile(cards),
    [ScreenSize.MD]: rearrangeForDesktop(cards),
  };

  const grid = (
    <div
      className={['absolute top-0 skew bg-blue-100', style.bgGrid].join(' ')}
    >
      {populateGrid(screenSize, cardsForDisplay[screenSize])}
    </div>
  );

  return grid;
};

export default BackgroundGrid;
