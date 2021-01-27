import YButton from './YButton';

export default {
  title: 'Button',
  component: YButton,
};

export const withText = (): JSX.Element => (
  <YButton title={'test'}>Test</YButton>
);

export const withEmoji = (): JSX.Element => <YButton>Test2</YButton>;
