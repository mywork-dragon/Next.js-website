const logo = {
  icon: 'logo-main',
  link: '#',
};

const button = {
  text: 'Contact us',
  link: '#',
};

const subItems = [
  {
    text: 'Personalization',
    link: '#',
    icon: 'https://yeaimages.s3.eu-central-1.amazonaws.com/personalization.png',
  },
  {
    text: 'Data & Analitics',
    link: '',
    icon: 'https://yeaimages.s3.eu-central-1.amazonaws.com/data-analytics.png',
  },
  {
    text: 'Email Marketing',
    link: '',
    icon: 'https://yeaimages.s3.eu-central-1.amazonaws.com/email-marketing.png',
  },
  {
    text: 'Affiliate Marketing',
    link: '/services/affiliate',
    icon:
      'https://yeaimages.s3.eu-central-1.amazonaws.com/affiliate-marketing.png',
  },
  {
    text: 'Conversion Optimization',
    link: '',
    icon:
      'https://yeaimages.s3.eu-central-1.amazonaws.com/conversion-optimization.png',
  },
  {
    text: 'Marketing Automatization',
    link: '',
    icon:
      'https://yeaimages.s3.eu-central-1.amazonaws.com/marketing-automation.png',
  },
  {
    text: 'Online Advertising',
    link: '',
    icon:
      'https://yeaimages.s3.eu-central-1.amazonaws.com/online-advertising.png',
  },
  {
    text: 'Integration/Implementation',
    link: 'services/integration',
    icon:
      'https://yeaimages.s3.eu-central-1.amazonaws.com/integration-implementation.png',
  },
];

const navItems = [
  {
    text: 'Home',
    link: '/home',
  },
  {
    text: 'Services',
    link: '#',
    subItems,
  },
  {
    text: 'About',
    link: '/about',
  },
  {
    text: 'Cases',
    link: '#',
  },
  {
    text: 'Partners',
    link: '#',
  },
  {
    text: 'Blog',
    link: '#',
  },
  {
    text: 'Contact',
    link: '#',
  },
];

export const props = {
  logo,
  navItems,
  button,
};
