import { useState, useEffect, useRef } from "react";
import { firm } from "@/content/firm";
import { Phone, Mail, X } from "lucide-react";
import { useT, ui } from "@/lib/i18n";

export function WhatsAppFab() {
  const t = useT();
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  const whatsappHref = `https://wa.me/${firm.contact.whatsapp}?text=${encodeURIComponent(
    "Hello, I'd like to book a consultation.",
  )}`;

  return (
    <div ref={containerRef} className="fixed bottom-5 right-5 z-50 flex flex-col items-end sm:bottom-8 sm:right-8">
      {/* Secondary Buttons Menu */}
      <div
        className={`mb-4 flex flex-col items-end gap-3 transition-all duration-300 ease-out ${
          isOpen
            ? "translate-y-0 opacity-100 pointer-events-auto"
            : "translate-y-4 opacity-0 pointer-events-none"
        }`}
      >
        {/* Email Option */}
        <a
          href={`mailto:${firm.contact.email}`}
          className="group relative flex h-12 w-12 items-center justify-center rounded-full bg-primary text-gold border border-gold/30 shadow-[0_4px_12px_rgba(11,30,63,0.3)] hover:scale-110 active:scale-95 transition-all"
          aria-label="Send Email"
        >
          <span className="absolute right-14 scale-90 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200 pointer-events-none rounded bg-primary border border-gold/20 px-2.5 py-1 text-xs font-semibold text-gold shadow-md">
            Email Us
          </span>
          <Mail className="h-5 w-5" />
        </a>

        {/* Call Option */}
        <a
          href={`tel:${firm.contact.phoneHref}`}
          className="group relative flex h-12 w-12 items-center justify-center rounded-full bg-primary text-gold border border-gold/30 shadow-[0_4px_12px_rgba(11,30,63,0.3)] hover:scale-110 active:scale-95 transition-all"
          aria-label="Call Office"
        >
          <span className="absolute right-14 scale-90 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200 pointer-events-none rounded bg-primary border border-gold/20 px-2.5 py-1 text-xs font-semibold text-gold shadow-md">
            Call Us
          </span>
          <Phone className="h-5 w-5" />
        </a>

        {/* WhatsApp Option */}
        <a
          href={whatsappHref}
          target="_blank"
          rel="noopener noreferrer"
          className="group relative flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_4px_12px_rgba(37,211,102,0.3)] hover:scale-110 active:scale-95 transition-all"
          aria-label={t(ui.cta.whatsapp)}
        >
          <span className="absolute right-14 scale-90 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-200 pointer-events-none rounded bg-[#25D366] px-2.5 py-1 text-xs font-semibold text-white shadow-md">
            WhatsApp
          </span>
          <svg viewBox="0 0 32 32" className="h-6 w-6" fill="currentColor" aria-hidden="true">
            <path d="M19.11 17.21c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.66.15-.2.3-.76.96-.93 1.16-.17.2-.34.22-.64.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.74-1.64-2.04-.17-.3-.02-.46.13-.61.13-.13.3-.34.45-.51.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.66-1.6-.9-2.19-.24-.57-.48-.49-.66-.5l-.56-.01c-.2 0-.5.07-.77.37-.27.3-1.02 1-1.02 2.44s1.05 2.83 1.2 3.03c.15.2 2.07 3.17 5.02 4.44.7.3 1.25.48 1.68.62.7.22 1.34.19 1.85.12.56-.08 1.75-.71 2-1.4.25-.7.25-1.29.17-1.4-.07-.12-.27-.2-.57-.35zM16.02 5.33c-5.9 0-10.7 4.8-10.7 10.7 0 1.88.5 3.72 1.43 5.34L5 27l5.79-1.71a10.65 10.65 0 0 0 5.23 1.36h.01c5.9 0 10.7-4.8 10.7-10.7s-4.8-10.7-10.71-10.7z" />
          </svg>
        </a>
      </div>

      {/* Main Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-label="Connect options"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_-8px_rgba(37,211,102,0.6)] ring-2 ring-white/40 hover:scale-105 active:scale-95 transition-all duration-300 focus:outline-none"
      >
        <span className="relative h-7 w-7 flex items-center justify-center">
          {/* WhatsApp Icon */}
          <svg
            viewBox="0 0 32 32"
            className={`absolute h-7 w-7 fill-currentColor transition-all duration-300 ${
              isOpen ? "rotate-90 scale-0 opacity-0" : "rotate-0 scale-100 opacity-100"
            }`}
            aria-hidden="true"
          >
            <path d="M19.11 17.21c-.3-.15-1.75-.86-2.02-.96-.27-.1-.47-.15-.66.15-.2.3-.76.96-.93 1.16-.17.2-.34.22-.64.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.74-1.64-2.04-.17-.3-.02-.46.13-.61.13-.13.3-.34.45-.51.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.66-1.6-.9-2.19-.24-.57-.48-.49-.66-.5l-.56-.01c-.2 0-.5.07-.77.37-.27.3-1.02 1-1.02 2.44s1.05 2.83 1.2 3.03c.15.2 2.07 3.17 5.02 4.44.7.3 1.25.48 1.68.62.7.22 1.34.19 1.85.12.56-.08 1.75-.71 2-1.4.25-.7.25-1.29.17-1.4-.07-.12-.27-.2-.57-.35zM16.02 5.33c-5.9 0-10.7 4.8-10.7 10.7 0 1.88.5 3.72 1.43 5.34L5 27l5.79-1.71a10.65 10.65 0 0 0 5.23 1.36h.01c5.9 0 10.7-4.8 10.7-10.7s-4.8-10.7-10.71-10.7z" />
          </svg>
          {/* X Close Icon */}
          <X
            className={`absolute h-7 w-7 transition-all duration-300 ${
              isOpen ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-0 opacity-0"
            }`}
            aria-hidden="true"
          />
        </span>
      </button>
    </div>
  );
}
