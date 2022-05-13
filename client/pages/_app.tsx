import '../styles/globals.css';

import type { AppProps } from 'next/app';
import { IoProvider } from 'socket.io-react-hook';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <IoProvider>
      <Component {...pageProps} />
    </IoProvider>
  );
}

export default MyApp;
