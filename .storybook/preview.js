import { addDecorator } from '@storybook/react';
import { withPerformance } from 'storybook-addon-performance';
import Layout from './Layout';

addDecorator(withPerformance);
addDecorator((storyFn) => <Layout>{storyFn()}</Layout>);

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};
