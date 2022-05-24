import '../styles/globals.css';

import { SocketContextProvider } from 'modules/common/contexts/SocketContext';
import { NextPage } from 'next';
import type { AppProps } from 'next/app';
import { ReactElement, ReactNode } from 'react';
import { IoProvider } from 'socket.io-react-hook';

type PageWithLayout = NextPage & {
  getLayout?: (page: ReactElement) => ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component: PageWithLayout;
};

function MyApp({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component.getLayout ?? ((page) => page);
  return (
    <IoProvider>
      <SocketContextProvider>{getLayout(<Component {...pageProps} />)}</SocketContextProvider>
    </IoProvider>
  );
}

export default MyApp;
