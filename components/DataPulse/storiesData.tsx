import Content from '@/assets/icons/content.svg';
import Cart from '@/assets/icons/cart.svg';
import Carousel from '@/assets/icons/carousel.svg';
import Email from '@/assets/icons/email.svg';
import Directions from '@/assets/icons/directions.svg';

const title = 'The leading Customer Data';

const description =
  "Join 20,000+ businesses that use Segment's software and APIs to collect, clean and control their customer data";

const buttonProps = {
  text: 'Contact us',
  link: '',
};

const cards = [
  {
    Icon: <Content />,
    title: 'Structure',
    description: 'Another client - another story',
  },
  {
    Icon: <Cart />,
    title: 'Cart Upsell',
    description: 'Personalised suggestion',
  },
  {
    Icon: <Carousel />,
    title: 'Content',
    description: 'Adaptive content per user',
  },
  {
    Icon: <Email />,
    title: 'Email',
    description: 'Personalized follow-up email',
  },
  {
    Icon: <Carousel />,
    title: 'Content',
    description: 'Adaptive content per user',
  },
  {
    Icon: <Carousel />,
    title: 'Content',
    description: 'Adaptive content per user',
  },
  {
    Icon: <Directions />,
    title: 'Navigation',
    description: 'Custom navigation patterns',
  },
];

export const props = {
  title,
  description,
  buttonProps,
  cards,
};
