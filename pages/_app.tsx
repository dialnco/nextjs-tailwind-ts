import '../styles/globals.css';
import { SessionProvider } from 'next-auth/react';
import type { AppProps } from 'next/app';
import { Provider as UrqlProvider } from 'urql';
import urqlClient from '@/lib/urql';

function MyApp({ Component, pageProps: { session, ...pageProps } }: AppProps) {
  return (
    <SessionProvider session={session}>
      <UrqlProvider value={urqlClient}>
        <Component {...pageProps} />
      </UrqlProvider>
    </SessionProvider>
  );
}

export default MyApp;
