import React from 'react';

import { Default as Header } from '@/components/Header/Header.stories';
import { Default as ContactSection } from '@/components/ContactSection/ContactSection.stories';
import { Default as Footer } from '@/components/Footer/Footer.stories';

const Contact: React.FC = () => {
  return (
    <div className="w-full bg-secondary">
      <Header />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Contact;
