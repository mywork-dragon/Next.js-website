import DynamicComponent from './DynamicComponent';
import SbEditable from 'storyblok-react';

const Page = ({ content }): JSX.Element => (
  <SbEditable content={content}>
    {content.body.map((blok) => (
      <DynamicComponent blok={blok} key={blok._uid} />
    ))}
  </SbEditable>
);

export default Page;
