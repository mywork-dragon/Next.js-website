import Card from '@/components/YCard/YCardBasic';
import { ScreenSize } from '@/enums/screenSize';

export const cardBaseClasses =
  'relative top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2';

const transparentCardClasses = [cardBaseClasses, 'opacity-40'].join(' ');

export const cardAppearances = [
  {
    component: (
      <Card
        className={[transparentCardClasses, 'scale-86'].join(' ')}
        cardClasses="card-blue-transparent"
      />
    ),
    appearances: {
      [ScreenSize.SM]: [3, 5, 13, 49], // these are the ordered positions in which element appears in final array of all cards
      [ScreenSize.MD]: [3, 17], // these are the ordered positions in which element appears in final array of all cards
    },
  },
  {
    component: (
      <Card
        className={[transparentCardClasses, 'scale-92'].join(' ')}
        cardClasses="card-blue-transparent"
      />
    ),
    appearances: {
      [ScreenSize.SM]: [38],
    },
  },
  {
    component: (
      <Card
        className={[transparentCardClasses, 'scale-94'].join(' ')}
        cardClasses="card-blue-transparent"
        empty
      />
    ),
    appearances: {
      [ScreenSize.MD]: [11],
      [ScreenSize.SM]: [11, 15],
    },
  },
  {
    component: (
      <Card
        className={[transparentCardClasses, 'scale-92'].join(' ')}
        cardClasses="card-blue-transparent"
        empty
      />
    ),
    appearances: {
      [ScreenSize.MD]: [19, 32],
      [ScreenSize.SM]: [19, 25, 42],
    },
  },
  {
    component: (
      <Card
        className={[transparentCardClasses, 'scale-85'].join(' ')}
        cardClasses="card-blue-transparent"
        empty
      />
    ),
    appearances: {
      [ScreenSize.MD]: [27],
      [ScreenSize.SM]: [27, 35],
    },
  },
  {
    component: (
      <Card
        className={[transparentCardClasses, 'scale-86'].join(' ')}
        cardClasses="card-green-transparent"
      />
    ),
    appearances: {
      [ScreenSize.SM]: [20, 24],
      [ScreenSize.MD]: [18],
    },
  },
  {
    component: (
      <Card
        className={[transparentCardClasses, 'scale-92'].join(' ')}
        cardClasses="card-green-transparent"
      />
    ),
    appearances: {
      [ScreenSize.SM]: [28, 34],
      [ScreenSize.MD]: [26],
    },
  },
  {
    component: (
      <Card
        className={[transparentCardClasses, 'scale-79'].join(' ')}
        cardClasses="card-green-transparent"
      />
    ),
    appearances: {
      [ScreenSize.SM]: [41],
      [ScreenSize.MD]: [31],
    },
  },
  {
    component: (
      <Card
        className={[transparentCardClasses, 'scale-93'].join(' ')}
        cardClasses="card-green-transparent"
      />
    ),
    appearances: {
      [ScreenSize.SM]: [47, 51],
      [ScreenSize.MD]: [39],
    },
  },
  {
    component: (
      <Card
        className={[transparentCardClasses, 'scale-86'].join(' ')}
        cardClasses="card-green-transparent"
        empty
      />
    ),
    appearances: {
      [ScreenSize.SM]: [12, 14],
      [ScreenSize.MD]: [10],
    },
  },
  {
    component: (
      <Card
        className={[transparentCardClasses, 'scale-86'].join(' ')}
        cardClasses="card-white-transparent"
      />
    ),
    appearances: {
      [ScreenSize.SM]: [29, 33],
      [ScreenSize.MD]: [25],
    },
  },
  {
    component: (
      <Card
        className={[transparentCardClasses, 'scale-79'].join(' ')}
        cardClasses="card-white-transparent"
      />
    ),
    appearances: {
      [ScreenSize.SM]: [37, 43],
      [ScreenSize.MD]: [33],
    },
  },
  {
    component: (
      <Card
        className={[transparentCardClasses, 'scale-85'].join(' ')}
        cardClasses="card-white-transparent"
        empty
      />
    ),
    appearances: {
      [ScreenSize.SM]: [48, 50],
      [ScreenSize.MD]: [38],
    },
  },
  {
    // places in grid where cards from props should appear
    component: 'interactiveCard',
    appearances: {
      [ScreenSize.SM]: [21, 22, 23, 30, 31, 32, 39, 40],
      [ScreenSize.MD]: [16, 22, 23, 24, 30],
    },
  },
];
