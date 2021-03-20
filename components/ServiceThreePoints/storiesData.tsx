import { ThreePoints } from '@/enums/components';

import { ArticlesProps, OrderedProps } from './ServiceThreePoints';

import Integration1 from '@/assets/services-points-images/integration-implementation-1-1.svg';
import Integration2 from '@/assets/services-points-images/integration-implementation-1-2.svg';
import Integration3 from '@/assets/services-points-images/integration-implementation-1-3.svg';

import Conversion1 from '@/assets/services-points-images/conversion-optimization-2-1.svg';
import Conversion2 from '@/assets/services-points-images/conversion-optimization-2-2.svg';
import Conversion3 from '@/assets/services-points-images/conversion-optimization-2-3.svg';

import Affiliate1 from '@/assets/services-points-images/affiliate-marketing-1.svg';

const heading = 'Lowered bounce rate';
const text =
  'When using personalization you keep in mind the needs and preferences of your audience so that you market the right product to the right person at the right time.';

const integrationPoints = [
  {
    heading,
    text,
    image: <Integration1 />,
  },
  {
    heading,
    text,
    image: <Integration2 />,
  },
  {
    heading,
    text,
    image: <Integration3 />,
  },
];

const conversionPoints = [
  {
    heading,
    text,
    image: <Conversion1 />,
  },
  {
    heading,
    text,
    image: <Conversion2 />,
  },
  {
    heading,
    text,
    image: <Conversion3 />,
  },
];

const affiliatePoints = [
  {
    text: 'Circumatances that should trigger a send',
  },
  {
    text: 'Segments of your contacts you want to target',
  },
  {
    text: 'Messages to send you did yesterday',
  },
];

export const integration1 = {
  title: 'Integration / Implementation',
  subtitle: 'What are the pros?',
  type: ThreePoints.Articles,
  points: integrationPoints,
} as ArticlesProps;

export const conversion2 = {
  title: 'Integration / Implementation',
  subtitle: 'What are the pros?',
  type: ThreePoints.Articles,
  points: conversionPoints,
} as ArticlesProps;

export const affiliate1 = {
  title: 'Affiliate Marketing',
  subtitle: 'What are the pros?',
  points: affiliatePoints,
  description: text,
  type: ThreePoints.OrderedList,
  cover: <Affiliate1 />,
} as OrderedProps;
