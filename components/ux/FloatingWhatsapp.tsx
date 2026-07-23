"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { MessageCircle } from "lucide-react";

export default function FloatingWhatsapp() {
  const [hovered, setHovered] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  return (
    <div className="fixed bottom-6 right-6 z-50 sm:bottom-8 sm:right-24">
      <div className="relative flex items-center">
        <AnimatePresence>
          {hovered && (
            <motion.span
              initial={{ opacity: 0, x: 8 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 8 }}
              transition={{ duration: 0.2 }}
              className="absolute right-full mr-3 whitespace-nowrap rounded-full border border-[#C6A15B]/25 bg-[#0B2340]/90 px-3.5 py-2 font-mono text-[11px] tracking-[0.08em] text-[#F5F3EC] shadow-lg backdrop-blur-md"
            >
              Chat with us on WhatsApp
            </motion.span>
          )}
        </AnimatePresence>

        <a
          href="https://wa.me/919902067179"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with SMS Enterprises on WhatsApp"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          onFocus={() => setHovered(true)}
          onBlur={() => setHovered(false)}
          className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#1FAF52] text-white shadow-lg shadow-black/30 transition-transform duration-300 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C6A15B]/60"
        >
          {!prefersReducedMotion && (
            <motion.span
              className="absolute inset-0 rounded-full bg-[#1FAF52]"
              animate={{ scale: [1, 1.6, 1], opacity: [0.5, 0, 0.5] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
            />
          )}
          <MessageCircle className="relative h-6 w-6" strokeWidth={2} />
        </a>
      </div>
    </div>
  );
}
