import BackgroundGrid from './BackgroundGrid';
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
    title: 'Cart Upsell',
    description: 'Personalized Suggestion',
    cardClasses: 'hover:card-blue',
  },
  {
    title: 'Navigation',
    description: 'Custom navigation patterns',
    cardClasses: 'hover:card-blue',
  },
  {
    title: 'Email',
    description: 'Personalized follow up email',
    cardClasses: 'hover:card-blue',
  },
  {
    title: 'Content',
    description: 'Adaptive content per user',
    cardClasses: 'card-blue hover:card-white',
  },
];

export const Default = (): JSX.Element => (
  <HomeTop showCompanies cards={cards} {...defaultProps} />
);

// export const Grid = (): JSX.Element => <BackgroundGrid />;
