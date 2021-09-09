import React, { useEffect } from 'react';

import { AppProps } from 'next/app';
import { useRouter } from 'next/router';

import '../styles/main.css';
import '../styles/prism-a11y-dark.css';
import analytics from '../config/analytics';

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

  // eslint-disable-next-line react/jsx-props-no-spreading
  return <Component {...pageProps} />;
};

export default MyApp;
