import React from 'react';

import { Default as Header } from '@/components/Header/Header.stories';
import { Default as AboutTop } from '@/components/AboutTop/AboutTop.stories';
import { Default as AboutDifferent } from '@/components/AboutDifferent/AboutDifferent.stories';
import { Default as AboutTeam } from '@/components/AboutTeam/AboutTeam.stories';
import { Default as AboutContact } from '@/components/AboutContact/AboutContact.stories';

const About: React.FC = () => (
  <div className="w-full bg-secondary">
    <Header />
    <AboutTop />
    <AboutDifferent />
    <AboutTeam />
    <AboutContact />
  </div>
);

export default About;
