export interface SiteConfig {
  brandName: string;
  tagline: string;
  showPricingSection: boolean;
  /**
   * Optional external or app URLs. Leave undefined to open the
   * built-in early-access / preview dialog instead of navigating away.
   */
  getStartedUrl?: string;
  loginUrl?: string;
  /**
   * Optional POST endpoint for live newsletter subscriptions.
   * When undefined, the form validates email format and clearly informs
   * the visitor that live newsletter delivery is not yet connected.
   */
  newsletterEndpoint?: string;
}

export const siteConfig: SiteConfig = {
  brandName: 'BuildLog',
  tagline: 'Plan. Create. Distribute. Grow.',
  showPricingSection: true,
  getStartedUrl: undefined,
  loginUrl: undefined,
  newsletterEndpoint: undefined,
};

export type ModalTopic =
  | 'get-started'
  | 'login'
  | 'demo'
  | 'early-access'
  | 'contact'
  | 'privacy'
  | 'terms'
  | 'cookies'
  | null;
