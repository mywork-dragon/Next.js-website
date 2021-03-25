import Teaser from './Teaser';
import Feature from './Feature';
import Grid from './Grid';
import Placeholder from './Placeholder';
import AboutContact from '@/components/AboutContact';
import AboutDifferent from '@/components/AboutDifferent';
import AboutTeam from '@/components/AboutTeam';
import AboutTop from '@/components/AboutTop';
import HomeTop from '@/components/HomeTop';
import { PageComponent, PostComponent } from '@/types/storyblok';
import { mapStoryblokProps } from '@/utils/storyblok';

const Components = {
  teaser: Teaser,
  grid: Grid,
  feature: Feature,
  AboutContact,
  AboutDifferent,
  AboutTeam,
  AboutTop,
  HomeTop,
};

interface Props {
  blok: PostComponent | PageComponent;
}

const DynamicComponent = ({ blok }: Props): JSX.Element => {
  if (typeof Components[blok.component] !== 'undefined') {
    const Component = Components[blok.component];
    return <Component blok={blok} {...mapStoryblokProps(blok)} />;
  }
  return <Placeholder componentName={blok.component} />;
};

export default DynamicComponent;
