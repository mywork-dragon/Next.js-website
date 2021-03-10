import Header from './Header';

import { props } from './storiesData';

export default {
  title: 'Header',
  component: Header,
};

export const Default = (): JSX.Element => (
  <div className="absolute top-0 right-0 left-0">
    <Header {...props} />
  </div>
);

export const WithIcons = (): JSX.Element => (
  <div className="absolute top-0 right-0 left-0">
    <Header showIcons {...props} />
  </div>
);
