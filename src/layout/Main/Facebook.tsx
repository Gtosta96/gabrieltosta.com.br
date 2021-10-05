import React, { useEffect } from 'react';

import Constants from '../../config/constants';

export const FacebookCommentsScript = () => (
  <>
    <div id="fb-root" />
    <script
      async
      defer
      crossOrigin="anonymous"
      src={`https://connect.facebook.net/pt_BR/sdk.js#xfbml=1&version=v11.0&appId=${Constants.fbAppId}&autoLogAppEvents=1`}
      nonce="1eJYGXOm"
    />
  </>
);

interface FacebookCommentsProps {
  path: string;
  slug: string;
}

const FacebookComments = ({ path, slug }: FacebookCommentsProps) => {
  // https://github.com/vercel/next.js/discussions/14614
  useEffect(() => {
    const { FB } = window as any;

    if (FB) {
      FB.XFBML.parse();
    }
  }, []);

  return (
    <div
      className="fb-comments"
      data-href={`${Constants.facebookCommentsUrl}/${path}/${slug}`}
      data-width="100%"
      data-numposts="10"
    />
  );
};

export default FacebookComments;
