/**
 * TEMPORARY PROMOTION CONFIG.
 * To end the promo later: set PROMO_ACTIVE to false (or delete this file's
 * usages). That alone hides the sitewide banner and reverts every price on
 * the Pricing page back to normal — nothing else needs to change.
 */
export const PROMO_ACTIVE = true;
export const PROMO_PERCENT = 15;
export const PROMO_MESSAGE = "Launch offer: 15% off everything, for a limited time.";

/** Parses a "$NN" price string and returns the discounted "$NN" string. */
export function discountedPrice(price: string): string {
  const match = price.match(/^\$(\d+(?:\.\d+)?)$/);
  if (!match) return price;
  const original = parseFloat(match[1]);
  const discounted = original * (1 - PROMO_PERCENT / 100);
  const rounded = Number.isInteger(discounted)
    ? discounted
    : Math.round(discounted * 100) / 100;
  return `$${rounded}`;
}
