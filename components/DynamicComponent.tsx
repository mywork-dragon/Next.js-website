import Teaser from './Teaser';
import Feature from './Feature';
import Grid from './Grid';
import Placeholder from './Placeholder';
import { PageComponent, PostComponent } from '@/types/storyblok';

const Components = {
  teaser: Teaser,
  grid: Grid,
  feature: Feature,
};

interface Props {
  blok: PostComponent | PageComponent;
}

const DynamicComponent = ({ blok }: Props): JSX.Element => {
  if (typeof Components[blok.component] !== 'undefined') {
    const Component = Components[blok.component];
    return <Component blok={blok} />;
  }
  return <Placeholder componentName={blok.component} />;
};

export default DynamicComponent;
