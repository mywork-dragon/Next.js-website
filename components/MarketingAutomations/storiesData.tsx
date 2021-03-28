import Mixpanel from '@/assets/icons/companies/mixpanel.svg';
import CustomerIO from '@/assets/icons/companies/customer-io.svg';
import Segment from '@/assets/icons/companies/segment.svg';

import Cart from '@/assets/icons/cart.svg';
import Envelope from '@/assets/icons/contact/envelope.svg';
import Facebook from '@/assets/icons/facebook-simple.svg';

import { Elapsed } from '@/enums/components';

export const partners = [
  {
    logo: <Mixpanel />,
    link: 'https://mixpanel.com',
    title: 'Mixpanel',
  },
  {
    logo: <CustomerIO />,
    link: 'https://customer.io',
    title: 'Customer IO',
  },
  {
    logo: <Segment />,
    link: 'https://segment.com',
    title: 'Segment',
  },
];

export const actions = {
  [Elapsed['0h']]: { action: '' },
  [Elapsed['12h']]: { action: '' },
  [Elapsed['24h']]: { logo: <Cart />, action: 'User has abandoned the cart.' },
  [Elapsed['48h']]: {
    logo: <Envelope />,
    action: 'Send "abandoned cart" email.',
    followUp: 'Send a remainder email after some time.',
  },
  [Elapsed['72h']]: {
    logo: <Facebook />,
    action: 'If the email is opened, retarget him with Facebook ads.',
  },
  [Elapsed['96h']]: { action: '' },
};
