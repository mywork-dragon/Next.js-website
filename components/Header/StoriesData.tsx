import LogoMain from '@/assets/icons/logo-main.svg';

import Personalization from '@/assets/header-icons/personalization.svg';
import AffiliateMarketing from '@/assets/header-icons/affiliate-marketing.svg';
import ConversionOptimization from '@/assets/header-icons/conversion-optimization.svg';
import DataAnalitics from '@/assets/header-icons/data-analytics.svg';
import EmailMarketing from '@/assets/header-icons/email-marketing.svg';
import IntegrationImplementation from '@/assets/header-icons/integration-implementation.svg';
import MarketingAutomation from '@/assets/header-icons/marketing-automation.svg';
import OnlineAdvertising from '@/assets/header-icons/online-advertising.svg';

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
    icon: <Personalization />,
  },
  {
    text: 'Data & Analitics',
    link: '',
    icon: <DataAnalitics />,
  },
  {
    text: 'Email Marketing',
    link: '',
    icon: <EmailMarketing />,
  },
  {
    text: 'Affiliate Marketing',
    link: '',
    icon: <AffiliateMarketing />,
  },
  {
    text: 'Conversion Optimization',
    link: '',
    icon: <ConversionOptimization />,
  },
  {
    text: 'Marketing Automatization',
    link: '',
    icon: <MarketingAutomation />,
  },
  {
    text: 'Online Advertising',
    link: '',
    icon: <OnlineAdvertising />,
  },
  {
    text: 'Integration/Implementation',
    link: '',
    icon: <IntegrationImplementation />,
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
