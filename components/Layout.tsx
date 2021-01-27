import Head from '../components/Head';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { HTMLAttributes } from 'react';

const Layout = ({ children }: HTMLAttributes<HTMLElement>): JSX.Element => (
  <div className="bg-gray-300">
    <Head title="test" description="description" />
    <Navigation settings={{}} />
    {children}
    <Footer />
  </div>
);

export default Layout;
