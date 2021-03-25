import Head from '../components/Head';
import Footer from '../components/Footer';
import { HTMLAttributes } from 'react';
import Header from '@/components/Header';

import { props } from '@/components/Header/storiesData';
import Facebook from '@/assets/icons/facebook.svg';
import LinkedIn from '@/assets/icons/linkedin.svg';
import Instagram from '@/assets/icons/instagram.svg';

const links = {
  first: [
    { text: 'Home', link: '/home' },
    { text: 'About', link: '/about' },
    { text: 'Services', link: '/services' },
    { text: 'Cases', link: '/cases' },
  ],
  second: [
    { text: 'Personalization', link: '/personalization' },
    { text: 'Data & Analytics', link: '/data-analytics' },
    { text: 'E-mail marketing', link: '/email-marketing' },
  ],
};

const contactDetails = {
  street: 'Transistorstraat 51D',
  postalCode: '1322CK',
  city: 'Almere',
  email: 'info@yeapersonalize.com',
  phoneNumber: {
    label: '+316 361 761 25',
    value: '+31636176125',
  },
};

const socialMedia = [
  { icon: <Facebook />, link: 'https://facebook.com/yeapersonalize' },
  {
    icon: <LinkedIn />,
    link: 'https://www.linkedin.com/company/yeapersonalize',
  },
  { icon: <Instagram />, link: 'https://instagram.com/yeapersonalize' },
];

const content = {
  heading: 'The Leading <br /> Data Platform',
  description:
    'Join 20,000+ businesses that use Segment software and APIs to collect, clean, and control their customer data.',
};

const contactButton = 'Contact us';

const Layout = ({ children }: HTMLAttributes<HTMLElement>): JSX.Element => (
  <div className="bg-blue-300 text-white">
    <Head title="test" description="description" />
    <Header {...props} showIcons />
    {children}
    <Footer
      links={links}
      contactDetails={contactDetails}
      content={content}
      socialMedia={socialMedia}
      contactButton={contactButton}
    />
  </div>
);

export default Layout;
