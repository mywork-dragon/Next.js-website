import Footer from './Footer';
import Facebook from '@/assets/icons/facebook.svg';
import LinkedIn from '@/assets/icons/linkedin.svg';
import Instagram from '@/assets/icons/instagram.svg';

export default {
  title: 'Footer',
  component: Footer,
};

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
  phoneNumber: '+316 361 761 25',
};

const socialMedia = [
  { icon: <Facebook />, link: 'https://facebook.com/yeapersonalize' },
  {
    icon: <LinkedIn />,
    link: 'https://www.linkedin.com/company/yeapersonalize',
  },
  { icon: <Instagram />, link: 'https://instagram.com/yeapersonalize' },
];

export const Default = (): JSX.Element => (
  <>
    <h1 className="text-red-600 text-xxl text-center py-5">
      Under Construction
    </h1>
    <Footer
      links={links}
      contactDetails={contactDetails}
      socialMedia={socialMedia}
    >
      Test
    </Footer>
  </>
);
