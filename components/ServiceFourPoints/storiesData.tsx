import ServiceFourPoints from './ServiceFourPoints';

import { FourPoints } from '@/enums/components';

import Integration3 from '@/assets/services-points-images/integration-implementation-3.svg';
import Online2 from '@/assets/services-points-images/online-advertising-2.svg';
import Email1 from '@/assets/services-points-images/email-marketing-1.svg';
import Personalization2 from '@/assets/services-points-images/personalization-2.svg';

const description =
  'When using personalization you keep in mind the needs and preferences of your audience so that you market the right product to the right person at the right time.';

const integrationPoints = [
  {
    heading: 'Increased trust',
    text:
      'When using personalization, you keep in mind the needs and preferances of your.',
  },
  {
    heading: 'Increased trust',
    text:
      'When using personalization, you keep in mind the needs and preferances of your.',
  },
  {
    heading: 'Increased trust',
    text:
      'When using personalization, you keep in mind the needs and preferances of your.',
  },
  {
    heading: 'Increased trust',
    text:
      'When using personalization, you keep in mind the needs and preferances of your.',
  },
];

const advertisingPoints = [
  {
    stats: '74%',
    text:
      'get frustrated when offers/ads have nothing to do with their interests',
  },
  {
    stats: '57%',
    text:
      'would leave a site if they were married and shown an add for dataing service',
  },
  {
    stats: '74%',
    text: 'are ok providing personal infromation for their benefit',
  },
  {
    stats: '77%',
    text:
      'would trust companies more if they explained how they were using their information',
  },
];

export const integration3 = {
  title: 'Integration / Implementation',
  subtitle: 'What are the pros?',
  description,
  points: integrationPoints,
  cover: <Integration3 />,
} as Parameters<typeof ServiceFourPoints>[0];

export const online3 = {
  title: 'Online Advertsing',
  subtitle: 'What are the pros?',
  description,
  points: advertisingPoints,
  type: FourPoints.Stats,
  cover: <Online2 />,
} as Parameters<typeof ServiceFourPoints>[0];

export const email1 = {
  title: 'Email Marketing',
  subtitle: 'What are the pros?',
  description,
  points: integrationPoints,
  cover: <Email1 />,
} as Parameters<typeof ServiceFourPoints>[0];

export const personalization2 = {
  title: 'Email Marketing',
  subtitle: 'What are the pros?',
  description,
  points: advertisingPoints,
  type: FourPoints.Stats,
  cover: <Personalization2 />,
} as Parameters<typeof ServiceFourPoints>[0];
