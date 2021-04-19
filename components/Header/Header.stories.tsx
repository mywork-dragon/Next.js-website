import Header from './Header';
import { Default as HomeTop } from '@/components/HomeTop/HomeTop.stories';

import { props } from './storiesData';

export default {
  title: 'Header',
  component: Header,
};

export const Default = (): JSX.Element => <Header {...props} />;

export const WithContent = (): JSX.Element => (
  <>
    <Header {...props} />
    <HomeTop />
  </>
);
