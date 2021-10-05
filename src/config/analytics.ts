import Constants from './constants';

const pageview = (url: string): void => {
  if (Constants.nodeEnv === 'production' && !window.gtag) {
    throw Error('Gtag não carregou (async fail)...');
  }

  window.gtag?.('config', Constants.gaPixel, {
    page_path: url,
  });
};

const event = (
  action: string,
  eventParams: Gtag.ControlParams | Gtag.EventParams | Gtag.CustomParams,
): void => {
  window.gtag?.('event', action, eventParams);
};

const analytics = {
  pageview,
  event,
};

export default analytics;
