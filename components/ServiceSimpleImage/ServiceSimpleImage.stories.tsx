import ServiceSimpleImage from './ServiceSimpleImage';

import Affiliate2 from '@/assets/services-body-images/affiliate-marketing-2.svg';
import Affiliate3 from '@/assets/services-body-images/affiliate-marketing-3.svg';
import Online3 from '@/assets/services-body-images/online-advertising-3.svg';
import Email3 from '@/assets/services-body-images/email-marketing-3.svg';
import Personalization3 from '@/assets/services-body-images/personalization-3.svg';
import ConversionOptimization1 from '@/assets/services-body-images/conversion-optimization-1.svg';

import { TextPosition } from '@/enums/components';

export default {
  title: 'Service: Simple Section with Image',
  component: ServiceSimpleImage,
};

const props = {
  title: 'Affiliate marketing',
  subtitle: 'What are the pros?',
  text:
    'When using personalization you keep in mind the needs and preferences of your audience so that you market the right product to the right person at the right time.',
};

export const AffiliateMarketingSection2 = (): JSX.Element => (
  <ServiceSimpleImage
    textPosition={TextPosition.Left}
    image={<Affiliate2 />}
    {...props}
  />
);

export const AffiliateMarketingSection3 = (): JSX.Element => (
  <ServiceSimpleImage image={<Affiliate3 />} {...props} />
);

export const OnlineAdvertisingSection3 = (): JSX.Element => (
  <ServiceSimpleImage image={<Online3 />} {...props} />
);

export const EmailMarketingSection3 = (): JSX.Element => (
  <ServiceSimpleImage image={<Email3 />} {...props} />
);

export const PersonalizationSection3 = (): JSX.Element => (
  <ServiceSimpleImage image={<Personalization3 />} {...props} />
);

export const ConversionOptimizationSection1 = (): JSX.Element => (
  <ServiceSimpleImage
    textPosition={TextPosition.Left}
    image={<ConversionOptimization1 />}
    {...props}
  />
);
