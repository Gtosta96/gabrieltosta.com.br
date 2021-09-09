import React from 'react';

import Document, {
  Html, Head, Main, NextScript,
} from 'next/document';

import { FacebookCommentsScript } from '../layout/Facebook';
import GoogleAnalyticsPixel from '../layout/GoogleAnalyticsPixel';
import { Config } from '../utils/Config';

class MyDocument extends Document {
  render() {
    return (
      <Html lang={Config.locale}>
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
