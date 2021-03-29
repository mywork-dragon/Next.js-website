import BenefitsOfPersonalization from './BenefitsOfPersonalization';

import { ScreenSize } from '@/enums/screenSize';

import Target from '@/assets/icons/target.svg';
import Sandbox from '@/assets/icons/sandbox.svg';
import Directions from '@/assets/icons/directions.svg';
import Code from '@/assets/icons/code.svg';

export default {
  title: 'Benefits Of Personalization',
  component: BenefitsOfPersonalization,
};

const buttons = [
  { [ScreenSize.MD]: 'Websites & Apps', [ScreenSize.SM]: 'Website' },
  { [ScreenSize.MD]: 'Social Ads', [ScreenSize.SM]: 'Mobile' },
  { [ScreenSize.MD]: 'Email Marketing', [ScreenSize.SM]: 'Email' },
];

const title = 'Benefits of Personalization';

const description =
  'Join over 20,000 companies that use Segments software and APIs to collect, clean and control their customer data.';

const loremIpsumTitle = 'Nam at facilisis sapien.';
const loremIpsumDescription =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Elit.';

const reviews = [
  {
    image: 'https://yeaimages.s3.eu-central-1.amazonaws.com/Alexey.jpg',
    name: 'Alexey',
    text: description,
  },
  {
    image: 'https://yeaimages.s3.eu-central-1.amazonaws.com/Jennifer.jpg',
    name: 'Jennifer',
    text: description,
  },
];

const articles = [
  {
    icon: <Target />,
    title: loremIpsumTitle,
    description: loremIpsumDescription,
  },
  {
    icon: <Sandbox />,
    title: loremIpsumTitle,
    description: loremIpsumDescription,
  },
  {
    icon: <Directions />,
    title: loremIpsumTitle,
    description: loremIpsumDescription,
  },
  {
    icon: <Code />,
    title: loremIpsumTitle,
    description: loremIpsumDescription,
  },
];

const frames = [{ reviews }, { articles }, { articles }];

const props = {
  buttons,
  title,
  description,
  frames,
} as Parameters<typeof BenefitsOfPersonalization>[0];

export const Default = (): JSX.Element => (
  <BenefitsOfPersonalization {...props} />
);
