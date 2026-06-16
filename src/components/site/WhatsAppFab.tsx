import { firm } from "@/content/firm";
import { useT, ui } from "@/lib/i18n";

export function WhatsAppFab() {
  const t = useT();
  const href = `https://wa.me/${firm.contact.whatsapp}?text=${encodeURIComponent(
    "Hello, I'd like to book a consultation.",
  )}`;
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t(ui.cta.whatsapp)}
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_-8px_rgba(37,211,102,0.6)] ring-2 ring-white/40 transition hover:scale-105 sm:bottom-8 sm:right-8"
    >
      <svg viewBox="0 0 32 32" className="h-7 w-7" fill="currentColor" aria-hidden="true">
        <path d="M19.11 17.21c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.66.15-.2.3-.76.96-.93 1.16-.17.2-.34.22-.64.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.74-1.64-2.04-.17-.3-.02-.46.13-.61.13-.13.3-.34.45-.51.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.66-1.6-.9-2.19-.24-.57-.48-.49-.66-.5l-.56-.01c-.2 0-.5.07-.77.37-.27.3-1.02 1-1.02 2.44s1.05 2.83 1.2 3.03c.15.2 2.07 3.17 5.02 4.44.7.3 1.25.48 1.68.62.7.22 1.34.19 1.85.12.56-.08 1.75-.71 2-1.4.25-.7.25-1.29.17-1.4-.07-.12-.27-.2-.57-.35zM16.02 5.33c-5.9 0-10.7 4.8-10.7 10.7 0 1.88.5 3.72 1.43 5.34L5 27l5.79-1.71a10.65 10.65 0 0 0 5.23 1.36h.01c5.9 0 10.7-4.8 10.7-10.7s-4.8-10.7-10.71-10.7z" />
      </svg>
    </a>
  );
}
