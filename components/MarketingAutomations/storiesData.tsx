import Cart from '@/assets/icons/cart.svg';
import Envelope from '@/assets/icons/contact/envelope.svg';
import Facebook from '@/assets/icons/facebook-simple.svg';

import { Elapsed } from '@/enums/components';

export const partners = [
  {
    logo: 'companies/mixpanel.svg',
    link: 'https://mixpanel.com',
    title: 'Mixpanel',
  },
  {
    logo: 'companies/customer-io.svg',
    link: 'https://customer.io',
    title: 'Customer IO',
  },
  {
    logo: 'companies/segment.svg',
    link: 'https://segment.com',
    title: 'Segment',
  },
];

export const actions = [
  { action: '' },
  { action: '' },
  { logo: <Cart />, action: 'User has abandoned the cart.' },
  {
    logo: <Envelope />,
    action: 'Send "abandoned cart" email.',
    followUp: 'Send a remainder email after some time.',
  },
  {
    logo: <Facebook />,
    action: 'If the email is opened, retarget him with Facebook ads.',
  },
  { action: '' },
];
