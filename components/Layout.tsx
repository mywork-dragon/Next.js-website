import Head from '../components/Head';

import SbEditable from 'storyblok-react';
import DynamicComponent from './DynamicComponent';
import { PostComponent } from '@/types/storyblok';

interface Props {
  headerContent?: PostComponent | undefined;
  footerContent?: PostComponent | undefined;
}
const Layout: React.FC<Props> = ({
  children,
  headerContent,
  footerContent,
}) => {
  return (
    <div className="bg-blue-300 text-white">
      <Head title="test" description="description" />

      {headerContent && (
        <SbEditable content={headerContent}>
          <header>{<DynamicComponent blok={headerContent} />}</header>
        </SbEditable>
      )}

      {children}

      {footerContent && (
        <SbEditable content={footerContent}>
          <footer>
            <DynamicComponent blok={footerContent} />
          </footer>
        </SbEditable>
      )}
    </div>
  );
};

export default Layout;
