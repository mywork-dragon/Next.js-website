import Google from '@/assets/icons/temp/google.svg';
import Segment from '@/assets/icons/temp/segment.svg';
import Boldking from '@/assets/icons/temp/boldking.svg';
import Nike from '@/assets/icons/temp/nike.svg';
import Deloitte from '@/assets/icons/temp/deloitte.svg';

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
  },
  {
    logo: <Segment />,
    link: 'https://segment.com',
  },
  {
    logo: <Boldking />,
    link: 'https://boldking.com',
  },
  {
    logo: <Nike />,
    link: 'https://nike.com',
  },
  {
    logo: <Deloitte />,
    link: 'https://deloitte.com',
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
    cardClasses: 'hover:card-blue',
    Icon: <Content />,
  },
  {
    title: 'Cart Upsell',
    description: 'Personalized Suggestion',
    cardClasses: 'hover:card-blue',
    Icon: <Cart />,
  },
  {
    title: 'Navigation',
    description: 'Custom navigation patterns',
    cardClasses: 'hover:card-blue',
    Icon: <Directions />,
  },
  {
    title: 'Email',
    description: 'Personalized follow up email',
    cardClasses: 'hover:card-blue',
    Icon: <Email />,
  },
  {
    title: 'Content',
    description: 'Adaptive content per user',
    cardClasses: 'card-blue hover:card-white',
    Icon: <Carousel />,
  },
];
