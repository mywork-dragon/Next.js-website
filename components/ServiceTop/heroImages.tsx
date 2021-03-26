import { Service } from '@/enums/components';
import { ScreenSize } from '@/enums/screenSize';

import AffiliateMarketing from '@/assets/services-hero/affiliate-marketing.svg';
import AffiliateMarketingSM from '@/assets/services-hero/affiliate-marketing-mobile.svg';

import IntegrationImplementation from '@/assets/services-hero/integration-implementation.svg';
import IntegrationImplementationSM from '@/assets/services-hero/integration-implementation-mobile.svg';

import OnlineAdvertising from '@/assets/services-hero/online-advertising.svg';
import OnlineAdvertisingSM from '@/assets/services-hero/online-advertising-mobile.svg';

import EmailMarketing from '@/assets/services-hero/email-marketing.svg';
import EmailMarketingSM from '@/assets/services-hero/email-marketing-mobile.svg';

import Personalization from '@/assets/services-hero/personalization.svg';
import PersonalizationSM from '@/assets/services-hero/personalization-mobile.svg';

import MarketingAutomation from '@/assets/services-hero/marketing-automation.svg';

import DataAnalytics from '@/assets/services-hero/data-analytics.svg';
import DataAnalyticsSM from '@/assets/services-hero/data-analytics-mobile.svg';

import ConversionOptimization from '@/assets/services-hero/conversion-optimization.svg';
import ConversionOptimizationSM from '@/assets/services-hero/conversion-optimization-mobile.svg';

import style from './heroStyles.module.css';

interface HeroVariants {
  [ScreenSize.SM]: JSX.Element;
  [ScreenSize.MD]: JSX.Element;
}

const affiliateMarketing = (
  <div className="absolute -left-31.6 -top-6">
    <AffiliateMarketing />
  </div>
);
const affiliateMarketingSM = (
  <div className="absolute -top-4 -left-20">
    <AffiliateMarketingSM />
  </div>
);

const integrationImplementation = (
  <div className="absolute -left-23 top-7.5">
    <IntegrationImplementation />
  </div>
);
const integrationImplementationSM = (
  <div className="absolute -top-22 -left-19">
    <IntegrationImplementationSM />
  </div>
);

const onlineAdvertising = (
  <div className="absolute -left-42.5 top-0">
    <OnlineAdvertising />
  </div>
);
const onlineAdvertisingSM = (
  <div className="absolute -top-5 -left-30">
    <OnlineAdvertisingSM />
  </div>
);

const emailMarketing = (
  <div className="absolute -left-20.5 -top-2.5">
    <EmailMarketing />
  </div>
);

const emailMarketingSM = (
  <div className={style.emailMarketingMobile}>
    <EmailMarketingSM />
  </div>
);

const personalization = (
  <div className="absolute left-7.5 -top-1">
    <Personalization />
  </div>
);
const personalizationSM = (
  <div className={style.personalizationMobile}>
    <PersonalizationSM />
  </div>
);

const marketingAutomation = (
  <div className="absolute left-15 top-7.5">
    <MarketingAutomation />
  </div>
);
const marketingAutomationSM = (
  <div className={style.marketingAutomationMobile}>
    <MarketingAutomation />
  </div>
);

const dataAnalytics = (
  <div className="absolute -left-48.5 -top-8.5">
    <DataAnalytics />
  </div>
);
const dataAnalyticsSM = (
  <div className={style.dataAnalyticsMobile}>
    <DataAnalyticsSM />
  </div>
);

const conversionOptimization = (
  <div>
    <ConversionOptimization />
  </div>
);
const conversionOptimizationSM = (
  <div className={style.conversionOptimizationMobile}>
    <ConversionOptimizationSM />
  </div>
);

export default {
  [Service.AffiliateMarketing]: {
    [ScreenSize.SM]: affiliateMarketingSM,
    [ScreenSize.MD]: affiliateMarketing,
  },
  [Service.IntegrationImplementation]: {
    [ScreenSize.SM]: integrationImplementationSM,
    [ScreenSize.MD]: integrationImplementation,
  },
  [Service.OnlineAdvertising]: {
    [ScreenSize.SM]: onlineAdvertisingSM,
    [ScreenSize.MD]: onlineAdvertising,
  },
  [Service.EmailMarketing]: {
    [ScreenSize.SM]: emailMarketingSM,
    [ScreenSize.MD]: emailMarketing,
  },
  [Service.Personalization]: {
    [ScreenSize.SM]: personalizationSM,
    [ScreenSize.MD]: personalization,
  },
  [Service.MarketingAutomation]: {
    [ScreenSize.SM]: marketingAutomationSM,
    [ScreenSize.MD]: marketingAutomation,
  },
  [Service.DataAnalytics]: {
    [ScreenSize.SM]: dataAnalyticsSM,
    [ScreenSize.MD]: dataAnalytics,
  },
  [Service.ConversionOptimization]: {
    [ScreenSize.SM]: conversionOptimizationSM,
    [ScreenSize.MD]: conversionOptimization,
  },
} as Record<Service, JSX.Element | HeroVariants>;
