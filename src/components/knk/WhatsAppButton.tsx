import { MessageCircle } from "lucide-react";

/**
 * Floating WhatsApp button, mounted once site-wide. UI-complete per the reference layout, but
 * intentionally non-functional (no href) until the client provides a real WhatsApp number —
 * a fake wa.me link would look real and go nowhere.
 */
const WhatsAppButton = () => (
  <div
    role="button"
    aria-disabled="true"
    title="WhatsApp — number pending"
    className="fixed bottom-6 right-6 z-40 flex h-12 w-12 cursor-not-allowed items-center justify-center rounded-full bg-[#25D366]/60 text-white shadow-lg"
  >
    <MessageCircle className="h-5 w-5" aria-hidden />
    <span className="sr-only">WhatsApp — number pending</span>
  </div>
);

export default WhatsAppButton;
