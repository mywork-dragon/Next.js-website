import User from '@/assets/icons/user.svg';
import Analytics from '@/assets/icons/analytics.svg';
import Email from '@/assets/icons/email.svg';
import UserVoice from '@/assets/icons/user-voice.svg';
import Analise from '@/assets/icons/analise.svg';
import Chip from '@/assets/icons/chip.svg';
import Megaphone from '@/assets/icons/megaphone.svg';
import Code from '@/assets/icons/code.svg';

import CustomerIO from '@/assets/icons/companies/customer-io.svg';
import Segment from '@/assets/icons/companies/segment.svg';
import Mixpanel from '@/assets/icons/companies/mixpanel.svg';

const description =
  'Data & Analitics, Conversion Optimization, E-mail marketing, Social Media Advertising, Affiliate Marketing, Integration & Implementation, Something Else';
const button = {
  text: 'Contact us',
  link: '',
};

const services = [
  {
    title: 'Personalization',
    subtitle: 'PHP, Node.js',
    description,
    button,
    icon: <User />,
  },
  {
    title: 'Data & Analicits',
    subtitle: 'PHP, Node.js',
    description,
    button,
    icon: <Analytics />,
  },
  {
    title: 'E-mail marketing',
    subtitle: 'PHP, Node.js',
    description,
    button,
    icon: <Email />,
  },
  {
    title: 'Affiliate marketing',
    subtitle: 'PHP, Node.js',
    description,
    button,
    icon: <UserVoice />,
  },
  {
    title: 'Conversion optimization',
    subtitle: 'PHP, Node.js',
    description,
    button,
    icon: <Analise />,
  },
  {
    title: 'Marketing automation',
    subtitle: 'PHP, Node.js',
    description,
    button,
    icon: <Chip />,
  },
  {
    title: 'Social media advertising',
    subtitle: 'PHP, Node.js',
    description,
    button,
    icon: <Megaphone />,
  },
  {
    title: 'Integration & Implementation',
    subtitle: 'PHP, Node.js',
    description,
    button,
    icon: <Code />,
  },
];

const partners = [
  {
    logo: <Mixpanel />,
    link: 'https://mixpanel.com',
  },
  {
    logo: <CustomerIO />,
    link: 'https://customer.io',
  },
  {
    logo: <Segment />,
    link: 'https://segment.com',
  },
];

export const props = {
  title: 'Our Services',
  description:
    "Join 20,000+ businesses that use Segment's software and APIs to collect, clean and control their customer data",
  services,
  partners,
};
