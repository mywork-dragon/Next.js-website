import ServiceSimpleImage from './ServiceSimpleImage';

export default {
  title: 'Service: Simple Section with Image',
  component: ServiceSimpleImage,
};

const props = {
  title: 'Affiliate marketing',
  subtitle: 'What are the pros?',
  description:
    'When using personalization you keep in mind the needs and preferences of your audience so that you market the right product to the right person at the right time.',
};

export const Default = (): JSX.Element => <ServiceSimpleImage {...props} />;
