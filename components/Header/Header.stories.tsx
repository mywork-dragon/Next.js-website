import Header from './Header';

import { props } from './storiesData';

export default {
  title: 'Header',
  component: Header,
};

export const Default = (): JSX.Element => (
    <Header {...props} />
);
