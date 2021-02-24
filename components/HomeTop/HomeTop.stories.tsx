import HomeTop from './HomeTop';

// import default data from spec
import { defaultProps } from './storiesData';

export default {
  title: 'Home Top',
  component: HomeTop,
};

export const Default = (): JSX.Element => (
  <HomeTop showCompanies {...defaultProps} />
);
