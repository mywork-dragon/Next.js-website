import Teaser from './Teaser';
import Feature from './Feature';
import Grid from './Grid';

import HomeTop from '@/components/HomeTop';
import DataPulse from '@/components/DataPulse';
import OurServices from '@/components/OurServices';
import BenefitsOfPersonalization from '@/components/BenefitsOfPersonalization';
import MarketingAutomations from '@/components/MarketingAutomations';
import Reviews from '@/components/Reviews';

import AboutTop from '@/components/AboutTop';
import AboutDifferent from '@/components/AboutDifferent';
import AboutTeam from '@/components/AboutTeam';
import AboutContact from '@/components/AboutContact';

import ServiceTop from '@/components/ServiceTop';
import ServiceSimple from '@/components/ServiceSimple';
import ServiceSimpleImage from '@/components/ServiceSimpleImage';
import ServiceThreePoints from '@/components/ServiceThreePoints';
import ServiceFourPoints from '@/components/ServiceFourPoints';

import Placeholder from './Placeholder';
import { PageComponent, PostComponent } from '@/types/storyblok';
import { mapStoryblokProps } from '@/utils/storyblok';

const Components = {
  teaser: Teaser,
  grid: Grid,
  feature: Feature,
  HomeTop,
  DataPulse,
  OurServices,
  BenefitsOfPersonalization,
  MarketingAutomations,
  Reviews,
  AboutTop,
  AboutDifferent,
  AboutTeam,
  AboutContact,
  ServiceTop,
  ServiceSimple,
  ServiceSimpleImage,
  ServiceThreePoints,
  ServiceFourPoints,
};

interface Props {
  blok: PostComponent | PageComponent;
}

const DynamicComponent = ({ blok }: Props): JSX.Element => {
  if (typeof Components[blok.component] !== 'undefined') {
    const Component = Components[blok.component];
    return <Component {...mapStoryblokProps(blok)} />;
  }
  return <Placeholder componentName={blok.component} />;
};

export default DynamicComponent;
