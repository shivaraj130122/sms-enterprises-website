"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

import type { GalleryItem } from "@/components/gallery/GalleryCard";

interface LightboxProps {
  items: GalleryItem[];
  activeIndex: number | null;
  onClose: () => void;
  onNavigate: (index: number) => void;
}

const EASE = [0.16, 1, 0.3, 1] as const;

export default function Lightbox({ items, activeIndex, onClose, onNavigate }: LightboxProps) {
  const isOpen = activeIndex !== null;
  const item = isOpen ? items[activeIndex] : null;

  useEffect(() => {
    if (!isOpen) return;

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight" && activeIndex !== null) {
        onNavigate((activeIndex + 1) % items.length);
      }
      if (e.key === "ArrowLeft" && activeIndex !== null) {
        onNavigate((activeIndex - 1 + items.length) % items.length);
      }
    }

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, activeIndex, items.length, onClose, onNavigate]);

  return (
    <AnimatePresence>
      {isOpen && item && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3, ease: EASE }}
          role="dialog"
          aria-modal="true"
          aria-label={`${item.title} preview`}
          className="fixed inset-0 z-[80] flex items-center justify-center bg-[#050D1B]/95 p-4 backdrop-blur-md"
          onClick={onClose}
        >
          <button
            type="button"
            onClick={onClose}
            aria-label="Close preview"
            className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-[#F5F3EC] transition-colors duration-200 hover:border-[#C6A15B]/50 hover:text-[#E8C77E] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C6A15B]/60"
          >
            <X className="h-5 w-5" strokeWidth={2} />
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onNavigate((activeIndex! - 1 + items.length) % items.length);
            }}
            aria-label="Previous image"
            className="absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 text-[#F5F3EC] transition-colors duration-200 hover:border-[#C6A15B]/50 hover:text-[#E8C77E] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C6A15B]/60 sm:left-6"
          >
            <ChevronLeft className="h-5 w-5" strokeWidth={2} />
          </button>

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onNavigate((activeIndex! + 1) % items.length);
            }}
            aria-label="Next image"
            className="absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/15 text-[#F5F3EC] transition-colors duration-200 hover:border-[#C6A15B]/50 hover:text-[#E8C77E] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C6A15B]/60 sm:right-6"
          >
            <ChevronRight className="h-5 w-5" strokeWidth={2} />
          </button>

          <motion.div
            key={item.id}
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.96 }}
            transition={{ duration: 0.3, ease: EASE }}
            onClick={(e) => e.stopPropagation()}
            className="relative flex aspect-[4/3] w-full max-w-3xl flex-col items-center justify-center overflow-hidden rounded-2xl border border-white/10 bg-[radial-gradient(120%_100%_at_30%_0%,#123159_0%,#0A1E3B_60%,#071426_100%)]"
          >
            <svg className="absolute inset-0 h-full w-full opacity-[0.14]" aria-hidden="true">
              <defs>
                <pattern id="lightbox-grid" width="30" height="30" patternUnits="userSpaceOnUse">
                  <path d="M 30 0 L 0 0 0 30" fill="none" stroke="#5B7CA3" strokeWidth="0.6" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#lightbox-grid)" />
            </svg>

            <item.icon className="relative h-20 w-20 text-[#C6A15B]/70" strokeWidth={1.1} />

            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#050D1B]/90 to-transparent p-6 text-center">
              <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#E8C77E]">
                {item.category}
              </p>
              <p className="mt-1.5 font-display text-lg font-semibold text-[#F5F3EC]">
                {item.title}
              </p>
            </div>
          </motion.div>

          <p className="absolute bottom-5 font-mono text-[11px] tracking-[0.1em] text-[#5B7CA3]">
            {activeIndex! + 1} / {items.length}
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
