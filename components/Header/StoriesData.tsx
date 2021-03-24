import LogoMain from '@/assets/icons/logo-main.svg';

import Personalization from '@/assets/icons/services/personalization.svg';
import AffiliateMarketing from '@/assets/icons/services/affiliate-marketing.svg';
import ConversionOptimization from '@/assets/icons/services/conversion-optimization.svg';
import DataAnalytics from '@/assets/icons/services/data-analytics.svg';
import EmailMarketing from '@/assets/icons/services/email-marketing.svg';
import IntegrationImplementation from '@/assets/icons/services/integration-implementation.svg';
import MarketingAutomation from '@/assets/icons/services/marketing-automation.svg';
import OnlineAdvertising from '@/assets/icons/services/online-advertising.svg';

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
    icon: <DataAnalytics />,
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
