"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import Logo from "@/components/ui/Logo";

const EASE = [0.16, 1, 0.3, 1] as const;

/**
 * LoadingScreen
 * -----------------------------------------------------------------------
 * Shows once on initial mount, then fades out — either once the window
 * finishes loading or after a minimum display time, whichever is later,
 * so the animation never feels like a flash on fast connections.
 */
export default function LoadingScreen() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const minTimer = new Promise<void>((resolve) => setTimeout(resolve, 1400));
    const windowLoad = new Promise<void>((resolve) => {
      if (document.readyState === "complete") {
        resolve();
      } else {
        window.addEventListener("load", () => resolve(), { once: true });
      }
    });

    Promise.all([minTimer, windowLoad]).then(() => setVisible(false));
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: EASE }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-[#050D1B]"
        >
          {/* Blueprint grid draw-in */}
          <svg
            className="absolute inset-0 h-full w-full opacity-[0.14]"
            aria-hidden="true"
          >
            <defs>
              <pattern id="loading-grid" width="48" height="48" patternUnits="userSpaceOnUse">
                <path d="M 48 0 L 0 0 0 48" fill="none" stroke="#3E5C7E" strokeWidth="0.6" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#loading-grid)" />
          </svg>

          <motion.div
            className="absolute h-64 w-64 rounded-full bg-[#C6A15B]/[0.08] blur-[100px]"
            animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
            transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          />

          <div className="relative flex flex-col items-center gap-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, ease: EASE, delay: 0.15 }}
            >
              <Logo />
            </motion.div>

            <div className="relative h-px w-40 overflow-hidden bg-white/10">
              <motion.span
                className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-transparent via-[#C6A15B] to-transparent"
                animate={{ x: ["-100%", "200%"] }}
                transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>

            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="font-mono text-[11px] uppercase tracking-[0.24em] text-[#8EA3C2]"
            >
              Surveying Ground Truth
            </motion.span>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
