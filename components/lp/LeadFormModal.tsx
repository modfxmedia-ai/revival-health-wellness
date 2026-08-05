"use client";

import { useEffect } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";
import PLongLeadForm from "@/components/lp/PLongLeadForm";

/**
 * Popup dialog wrapping <PLongLeadForm />. Rendered via a portal to
 * document.body so `position: fixed` isn't constrained by any animated
 * (transformed) ancestor in the page tree.
 *
 * Always mounted once the component itself mounts client-side; visibility
 * is driven purely by CSS classes bound directly to the `open` prop (no
 * local open/close state or timers). This sidesteps framer-motion
 * AnimatePresence mount/unmount timing, which has proven unreliable in
 * this Next 16 + React 19 + Turbopack setup (multi-second delay before an
 * exit animation resolves and the element unmounts).
 */
export default function LeadFormModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKeyDown);
    const { overflow } = document.body.style;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = overflow;
    };
  }, [open, onClose]);

  if (typeof document === "undefined") return null;

  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Free consultation request form"
      aria-hidden={!open}
      inert={!open}
      className={`fixed inset-0 z-[100] flex min-h-full items-center justify-center overflow-y-auto p-4 py-10 transition-opacity duration-300 ease-out sm:p-6 ${
        open ? "opacity-100" : "pointer-events-none opacity-0"
      }`}
    >
      <button
        type="button"
        aria-label="Close"
        onClick={onClose}
        tabIndex={open ? 0 : -1}
        className="fixed inset-0 bg-revival-dark/85 backdrop-blur-sm"
      />

      <div
        className={`relative z-10 my-auto w-full max-w-md transition-all duration-300 ease-out ${
          open ? "translate-y-0 scale-100" : "translate-y-4 scale-[0.97]"
        }`}
      >
        <button
          type="button"
          onClick={onClose}
          tabIndex={open ? 0 : -1}
          aria-label="Close form"
          className="absolute -top-3 -right-3 z-20 flex h-9 w-9 items-center justify-center rounded-full bg-revival-gold text-revival-dark shadow-lg transition-transform duration-200 hover:scale-105"
        >
          <X className="h-4.5 w-4.5" />
        </button>
        <PLongLeadForm />
      </div>
    </div>,
    document.body,
  );
}
