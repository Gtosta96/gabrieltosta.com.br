/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect } from 'react';

import { AppProps } from 'next/app';
import { useRouter } from 'next/router';

import '../styles/main.css';
import '../styles/prism-a11y-dark.css';
import SubscribeDialog from '../components/SubscribeDialog';
import analytics from '../config/analytics';
import UIContextProvider from '../context/UIContextProvider';

const MyApp = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChangeComplete = (url: string) => {
      analytics.pageview(url);
    };

    router.events.on('routeChangeComplete', handleRouteChangeComplete);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChangeComplete);
    };
  }, [router.events]);

  return (
    <UIContextProvider>
      <Component {...pageProps} />
      <SubscribeDialog />
    </UIContextProvider>
  );
};

export default MyApp;
