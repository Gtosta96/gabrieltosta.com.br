import React from 'react';

import Constants from '../../../config/constants';

const GoogleAnalyticsPixel = () => {
  if (!Constants.gaPixel || Constants.nodeEnv !== 'production') {
    return null;
  }

  return (
    <>
      {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
      <script async src={`https://www.googletagmanager.com/gtag/js?id=${Constants.gaPixel}`} />
      <script
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${Constants.gaPixel}',{page_path: window.location.pathname});`,
        }}
      />
    </>
  );
};

export default GoogleAnalyticsPixel;
