import Footer from './Footer';

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
    { text: 'Partners', link: '/partners' },
    { text: 'Blog', link: '/blog' },
    { text: 'Contact', link: '/contact' },
  ],
  second: [
    { text: 'Personalization', link: '/personalization' },
    { text: 'Data & Analytics', link: '/data-analytics' },
    { text: 'E-mail marketing', link: '/email-marketing' },
    { text: 'Affiliate marketing', link: '/affiliate-marketing' },
    { text: 'Conversion optimisation', link: '/conversion-optimisation' },
    { text: 'Marketing automation', link: '/marketing-automation' },
    { text: 'Social media advertising', link: '/social-media-advertising' },
    { text: 'Integration/Implementation', link: '/integration-implementation' },
  ],
};

const content = {
  heading: 'The Leading <br /> Data Platform',
  description:
    'Join 20,000+ businesses that use Segment software and APIs to collect, clean, and control their customer data.',
};

const contactDetails = {
  street: 'Transistorstraat 51D',
  postalCode: '1322CK',
  city: 'Almere',
  email: 'info@yeapersonalize.com',
  phoneNumber: {
    label: '+31 6 36 17 61 25',
    value: '0031636176125',
  },
};

const socialMedia = [
  {
    icon: 'linkedin',
    link: 'https://www.linkedin.com/company/yeapersonalize',
  },
  { icon: 'facebook', link: 'https://facebook.com/yeapersonalize' },
  { icon: 'instagram', link: 'https://instagram.com/yeapersonalize' },
  { icon: 'twitter', link: 'https://twitter.com/yeapersonalize' },
];

const contactButton = 'Contact us';

export const Default = (): JSX.Element => (
  <Footer
    links={links}
    contactDetails={contactDetails}
    content={content}
    socialMedia={socialMedia}
    contactButton={contactButton}
  />
);
