export const TRACKING_EVENTS = {
  CTA_CLICK: 'cta_click',
  FORM_SUBMIT: 'form_submit',
  ZALO_CLICK: 'zalo_click',
  HOTLINE_CLICK: 'hotline_click',
  EMAIL_CLICK: 'email_click',
  DEMO_CHAT_OPEN: 'demo_chat_open',
  QUICK_REPLY_CLICK: 'quick_reply_click',
  PRICING_PACKAGE_CLICK: 'pricing_package_click',
  CASE_STUDY_CLICK: 'case_study_click',
} as const;

export type TrackingEventName = (typeof TRACKING_EVENTS)[keyof typeof TRACKING_EVENTS];

type TrackEventParams = {
  eventName: TrackingEventName;
  eventParams?: Record<string, string | number | boolean | undefined>;
};

export function trackEvent({ eventName, eventParams = {} }: TrackEventParams) {
  if (typeof window === 'undefined') return;

  const gtag = (window as unknown as { gtag?: (...args: unknown[]) => void }).gtag;

  if (!gtag) return;

  gtag('event', eventName, eventParams);
}