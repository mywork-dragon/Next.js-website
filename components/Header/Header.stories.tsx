import Header from './Header';

import { props } from './StoriesData';

export default {
  title: 'Header',
  component: Header,
};

export const Default = (): JSX.Element => {
  return <Header {...props} />;
};
