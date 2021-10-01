import React from 'react';

import { Config } from '../../../utils/Config';

const GoogleAnalyticsPixel = () => {
  if (!Config.gaPixel || Config.nodeEnv !== 'production') {
    return null;
  }

  return (
    <>
      {/* <!-- Global site tag (gtag.js) - Google Analytics --> */}
      <script async src={`https://www.googletagmanager.com/gtag/js?id=${Config.gaPixel}`} />
      <script
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${Config.gaPixel}',{page_path: window.location.pathname});`,
        }}
      />
    </>
  );
};

export default GoogleAnalyticsPixel;
