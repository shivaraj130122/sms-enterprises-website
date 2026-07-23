"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUp } from "lucide-react";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setVisible(window.scrollY > 480);
    }
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          onClick={scrollToTop}
          aria-label="Back to top"
          initial={{ opacity: 0, y: 16, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 16, scale: 0.9 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          whileHover={{ y: -3 }}
          whileTap={{ scale: 0.94 }}
          className="fixed bottom-24 right-6 z-50 flex h-11 w-11 items-center justify-center rounded-full border border-[#C6A15B]/30 bg-[#0B2340]/80 text-[#C6A15B] shadow-lg shadow-black/30 backdrop-blur-md transition-colors duration-300 hover:border-[#C6A15B]/60 hover:text-[#E8C77E] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C6A15B]/60 sm:bottom-8 sm:right-8"
        >
          <motion.span
            animate={{ y: [0, -3, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowUp className="h-4.5 w-4.5" strokeWidth={2} />
          </motion.span>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
