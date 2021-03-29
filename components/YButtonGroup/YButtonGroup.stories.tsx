import YButtonGroup from './YButtonGroup';

import { ScreenSize } from '@/enums/screenSize';

export default {
  title: 'Button Group',
  component: YButtonGroup,
};

const props = {
  buttons: [
    { [ScreenSize.MD]: 'Websites & Apps', [ScreenSize.SM]: 'Website' },
    { [ScreenSize.MD]: 'Social Ads', [ScreenSize.SM]: 'Mobile' },
    { [ScreenSize.MD]: 'Email Marketing', [ScreenSize.SM]: 'Email' },
  ],
};

export const Default = (): JSX.Element => <YButtonGroup {...props} />;
