import LogoMain from '@/assets/icons/logo-main.svg';

const logo = {
  Icon: <LogoMain />,
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
    icon: '',
  },
  {
    text: 'Data & Analitics',
    link: '',
    icon: '',
  },
  {
    text: 'Email Marketing',
    link: '',
    icon: '',
  },
  {
    text: 'Affiliate Marketing',
    link: '',
    icon: '',
  },
  {
    text: 'Conversion Optimization',
    link: '',
    icon: '',
  },
  {
    text: 'Marketing Automatization',
    link: '',
    icon: '',
  },
  {
    text: 'Online Advertising',
    link: '',
    icon: '',
  },
  {
    text: 'Integration/Implementation',
    link: '',
    icon: '',
  },
  {
    text: '',
    link: '',
    icon: '',
  },
];

const navItems = [
  {
    text: 'Home',
    link: '#',
  },
  {
    text: 'Services',
    link: '#',
    subItems,
  },
  {
    text: 'About',
    link: '#',
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
