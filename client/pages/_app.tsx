import '../styles/globals.css';

import { SocketContextProvider } from 'modules/common/contexts/SocketContext';
import type { AppProps } from 'next/app';
import { IoProvider } from 'socket.io-react-hook';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <IoProvider>
      <SocketContextProvider>
        <Component {...pageProps} />
      </SocketContextProvider>
    </IoProvider>
  );
}

export default MyApp;
