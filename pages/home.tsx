import React from 'react';

import { Default as Header } from '@/components/Header/Header.stories';
import { Default as HomeTop } from '@/components/HomeTop/HomeTop.stories';
import { Default as DataPulse } from '@/components/DataPulse/DataPulse.stories';
import { Default as OurServices } from '@/components/OurServices/OurServices.stories';
import { Default as BenefitsOfPersonalization } from '@/components/BenefitsOfPersonalization/BenefitsOfPersonalization.stories';
import { Default as MarketingAutomations } from '@/components/MarketingAutomations/MarketingAutomations.stories';
import { Default as Reviews } from '@/components/Reviews/Reviews.stories';
import { Default as Footer } from '@/components/Footer/Footer.stories';

const Test: React.FC = () => {
  return (
    <div className="bg-secondary">
      <Header />
      <HomeTop />
      <DataPulse />
      <OurServices />
      <BenefitsOfPersonalization />
      <MarketingAutomations />
      <Reviews />
      <Footer />
    </div>
  );
};

export default Test;
