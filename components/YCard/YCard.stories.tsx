import YCard from './YCard';

const description = 'Personalized suggestion';
const title = 'Cart Suggestion';

export default {
  title: 'Card',
  component: YCard,
};

export const Default = (): JSX.Element => (
  <YCard title={title} description={description} />
);
