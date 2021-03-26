import AboutContact from './AboutContact';

export default {
  title: 'About: Contact us',
  component: AboutContact,
};

const title = 'Benefits of personalization';
const description =
  "Join 20000+ businesses that use Segment's software and APIs to collect, clean, and control their customer data.";
const buttonProps = {
  text: 'Contact us',
  link: '',
};

const props = {
  title,
  description,
  buttonProps,
};

export const Default = (): JSX.Element => <AboutContact {...props} />;
