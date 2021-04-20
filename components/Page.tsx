import DynamicComponent from './DynamicComponent';
import SbEditable from 'storyblok-react';
import { PageItem, PostComponent } from '@/types/storyblok';

import { PageBackground } from '@/enums/components';
import dynamic from 'next/dynamic';

interface Props {
  content: PageItem['content'] & {
    backgroundGradient?: PageBackground;
    body: PostComponent[];
  };
}

const Background = dynamic(() => import('@/components/BackgroundGradient'), {
  ssr: false,
});

const Page = ({
  content: { backgroundGradient, ...content },
}: Props): JSX.Element => {
  return (
    <SbEditable content={content}>
      <main>
        {backgroundGradient && <Background page={backgroundGradient} />}
        {content.body.map((blok) => (
          <DynamicComponent blok={blok} key={blok._uid} />
        ))}
      </main>
    </SbEditable>
  );
};

export default Page;
