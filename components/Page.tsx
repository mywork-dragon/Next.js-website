import DynamicComponent from './DynamicComponent';
import SbEditable from 'storyblok-react';

const Page = ({ content }): JSX.Element => (
  <SbEditable content={content}>
    <main>
      {content.body.map((blok) => (
        <DynamicComponent blok={blok} key={blok._uid} />
      ))}
    </main>
  </SbEditable>
);

export default Page;