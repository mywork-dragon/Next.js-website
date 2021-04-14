import React from 'react';

import { Default as Header } from '@/components/Header/Header.stories';
import { AffiliateMarketing as ServiceTop } from '@/components/ServiceTop/ServiceTop.stories';
import { AffiliateMarketingSection1 as ServiceThreePoints } from '@/components/ServiceThreePoints/ServiceThreePoints.stories';
import { AffiliateMarketingSection2 as ServiceSimpleImage } from '@/components/ServiceSimpleImage/ServiceSimpleImage.stories';
import { OnlineAdvertisingSection3 as ServiceFourPoints } from '@/components/ServiceFourPoints/ServiceFourPoints.stories';
import { Default as Footer } from '@/components/Footer/Footer.stories';

const AffiliateMarketing: React.FC = () => {
  return (
    <div className="w-full bg-secondary">
      <Header />
      <ServiceTop />
      <ServiceThreePoints />
      <ServiceSimpleImage />
      <ServiceFourPoints />
      <Footer />
    </div>
  );
};

export default AffiliateMarketing;
