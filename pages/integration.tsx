import React from 'react';

import { Default as Header } from '@/components/Header/Header.stories';
import { IntegrationImplementation as ServiceTop } from '@/components/ServiceTop/ServiceTop.stories';
import { IntegrationImplementationSection1 as ServiceThreePoints } from '@/components/ServiceThreePoints/ServiceThreePoints.stories';
import { Default as ServiceSimple } from '@/components/ServiceSimple/ServiceSimple.stories';
import { IntegrationImplementationSection3 as ServiceFourPoints } from '@/components/ServiceFourPoints/ServiceFourPoints.stories';
import { Default as Footer } from '@/components/Footer/Footer.stories';

const IntegrationImplementation: React.FC = () => {
  return (
    <div className="w-full bg-secondary">
      <Header />
      <ServiceTop />
      <ServiceThreePoints />
      <ServiceSimple />
      <ServiceFourPoints />
      <Footer />
    </div>
  );
};

export default IntegrationImplementation;
