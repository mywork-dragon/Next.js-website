import Header from './Header';
import { IntegrationImplementation } from '@/components/ServiceTop/ServiceTop.stories';

import { props } from './storiesData';

export default {
  title: 'Header',
  component: Header,
};

export const Default = (): JSX.Element => <Header {...props} />;

export const ServicesHeader = (): JSX.Element => (
  <>
    <Header {...props} />
    <div className="absolute top-0 left-0 right-0">
      <IntegrationImplementation />
    </div>
  </>
);
