import '../styles/tailwind.css';
import { AppProps } from 'next/app';
import { SSRProvider } from '@react-aria/ssr';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <SSRProvider>
      <Component {...pageProps} />
    </SSRProvider>
  );
}

export default MyApp;
