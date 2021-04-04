import BenefitsOfPersonalization from './BenefitsOfPersonalization';

import { ScreenSize } from '@/enums/screenSize';

import style from './waveAnimations.module.scss';
import Wave from '@/assets/other/wave-md.svg';

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
    icon: 'target.svg',
    title: loremIpsumTitle,
    description: loremIpsumDescription,
  },
  {
    icon: 'sandbox.svg',
    title: loremIpsumTitle,
    description: loremIpsumDescription,
  },
  {
    icon: 'directions.svg',
    title: loremIpsumTitle,
    description: loremIpsumDescription,
  },
  {
    icon: 'code.svg',
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

export const BackgroundWave = (): JSX.Element => (
  <div
    style={{
      height: 768,
      width: 1680,
    }}
    className={[
      'absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2',
      style.wave,
    ].join(' ')}
  >
    <Wave />
  </div>
);
