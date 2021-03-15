import ContactSection from './ContactSection';

import { props } from './storiesData';

export default {
  title: 'Contact Section',
  component: ContactSection,
};

export const Default = (): JSX.Element => <ContactSection {...props} />;
