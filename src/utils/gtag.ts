type GTagEvent = {
  action: string;
  value?: string;
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, value }: GTagEvent) => {
  window.gtag("event", action, {
    value: value,
  });
};
