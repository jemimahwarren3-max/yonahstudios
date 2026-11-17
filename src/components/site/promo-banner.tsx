/**
 * TEMPORARY PROMO BANNER.
 * To remove the promo entirely later: set PROMO_ACTIVE to false in
 * lib/promo.ts. That alone hides this banner, reverts the header to its
 * normal position, and reverts every price on the Pricing page.
 */
import { PROMO_ACTIVE, PROMO_MESSAGE } from "@/lib/promo";
import { whatsappLink } from "@/lib/site";

export function PromoBanner() {
  if (!PROMO_ACTIVE) return null;

  return (
    <a
      href={whatsappLink(
        "Hi Yonah Studios, I'd like to start a project with the 20% launch offer.",
      )}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed inset-x-0 top-0 z-[60] flex h-9 items-center justify-center bg-charcoal px-4 text-center text-xs font-medium text-ivory hover:bg-terracotta sm:text-sm"
    >
      {PROMO_MESSAGE}
    </a>
  );
}
