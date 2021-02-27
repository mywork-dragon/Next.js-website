import HomeTop from './HomeTop';

// import default data from spec
import { defaultProps, cards } from './storiesData';

export default {
  title: 'Home Top',
  component: HomeTop,
};

export const Default = (): JSX.Element => {
  return <HomeTop showCompanies cards={cards} {...defaultProps} />;
};
