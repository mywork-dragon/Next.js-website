import HomeTop from './HomeTop';

// import default data from spec
import { defaultProps } from './storiesData';

export default {
  title: 'Home Top',
  component: HomeTop,
};

const cards = [
  {
    title: 'Structure',
    description: 'Another client - another story',
    cardClasses: 'hover:card-blue',
  },
  {
    title: 'Structure',
    description: 'Another client - another story',
    cardClasses: 'hover:card-blue',
  },
  {
    title: 'Structure',
    description: 'Another client - another story',
    cardClasses: 'hover:card-blue',
  },
  {
    title: 'Structure',
    description: 'Another client - another story',
    cardClasses: 'card-blue hover:card-white',
  },
  {
    title: 'Structure',
    description: 'Another client - another story',
    cardClasses: 'hover:card-blue',
  },
  {
    title: 'Structure',
    description: 'Another client - another story',
    cardClasses: 'hover:card-blue',
  },
];

export const Default = (): JSX.Element => (
  <HomeTop
    gridStyle={{ zIndex: -10 }}
    showCompanies
    cards={cards}
    {...defaultProps}
  />
);
