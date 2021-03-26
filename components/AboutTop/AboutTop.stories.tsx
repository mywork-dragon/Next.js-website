import AboutTop from './AboutTop';

export default {
  title: 'About Top',
  component: AboutTop,
};

const props = {
  title: 'Who We Are',
  description:
    'YEA is up and running since 2020 with a young team. While we are small in size, we are strong in doing and thinking.',
};

export const Default = (): JSX.Element => (
  <div className="border-b border-primary">
    <AboutTop {...props} />
  </div>
);
