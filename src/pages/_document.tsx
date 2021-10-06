import React from 'react';

import Document, {
  Html, Head, Main, NextScript,
} from 'next/document';

import Constants from '../config/constants';
import { FacebookCommentsScript } from '../layout/Main/Facebook';
import GoogleAnalyticsPixel from '../layout/Main/GoogleAnalyticsPixel';

class MyDocument extends Document {
  render() {
    return (
      <Html lang={Constants.locale}>
        <Head />

        <meta
          name="google-site-verification"
          content="gIEt9k0XAeDiry2kGSmPPdVMR9B7HWsSuD4oMB65Rro"
        />
        <GoogleAnalyticsPixel />
        <body>
          <FacebookCommentsScript />

          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
