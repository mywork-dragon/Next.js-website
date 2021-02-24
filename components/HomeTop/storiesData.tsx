import Google from '@/assets/icons/temp/google.svg';
import Segment from '@/assets/icons/temp/segment.svg';
import Boldking from '@/assets/icons/temp/boldking.svg';
import Nike from '@/assets/icons/temp/nike.svg';
import Deloitte from '@/assets/icons/temp/deloitte.svg';

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
  title: 'Let your marketing work for you',
  description:
    'With personalized brand experiences. Automated strategies. Well-targeted communication. And little effort from your end. So you can become greater at what you do best',
  buttonProps: {
    text: 'Learn More',
    link: '#',
  },
  companies,
};
