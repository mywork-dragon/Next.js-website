import Google from '@/assets/icons/companies/google.svg';
import Segment from '@/assets/icons/companies/segment.svg';
import Boldking from '@/assets/icons/companies/boldking.svg';
import Nike from '@/assets/icons/companies/nike.svg';
import Deloitte from '@/assets/icons/companies/deloitte.svg';

import Cart from '@/assets/icons/cart.svg';
import Carousel from '@/assets/icons/carousel.svg';
import Content from '@/assets/icons/content.svg';
import Email from '@/assets/icons/email.svg';
import Directions from '@/assets/icons/directions.svg';

// default data from spec, to be used with stories
const companies = [
  {
    logo: <Google />,
    link: 'https://google.com',
    title: 'google',
  },
  {
    logo: <Segment />,
    link: 'https://segment.com',
    title: 'segment',
  },
  {
    logo: <Boldking />,
    link: 'https://boldking.com',
    title: 'boldking',
  },
  {
    logo: <Nike />,
    link: 'https://nike.com',
    title: 'nike',
  },
  {
    logo: <Deloitte />,
    link: 'https://deloitte.com',
    title: 'deloitte',
  },
];

export const defaultProps = {
  title: 'The leading Customer Data Platform',
  description:
    "Join 20000+ businesses that use Segment's software and APIs to collect, clean, and control their customer data.",
  buttonProps: {
    text: 'Learn More',
    link: '#',
  },
  companies,
};

export const cards = [
  {
    title: 'Structure',
    description: 'Another client - another story',
    Icon: <Content />,
  },
  {
    title: 'Cart Upsell',
    description: 'Personalized Suggestion',
    Icon: <Cart />,
  },
  {
    title: 'Navigation',
    description: 'Custom navigation patterns',
    Icon: <Directions />,
  },
  {
    title: 'Email',
    description: 'Personalized follow up email',
    Icon: <Email />,
  },
  {
    title: 'Content',
    description: 'Adaptive content per user',
    Icon: <Carousel />,
  },
];
