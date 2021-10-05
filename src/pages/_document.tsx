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
