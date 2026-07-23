"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie } from "lucide-react";

import Button from "@/components/ui/Button";

const STORAGE_KEY = "sms-cookie-consent";

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY);
    if (!stored) {
      const timer = setTimeout(() => setVisible(true), 900);
      return () => clearTimeout(timer);
    }
  }, []);

  function handleChoice(choice: "accepted" | "declined") {
    window.localStorage.setItem(STORAGE_KEY, choice);
    setVisible(false);
  }

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 40 }}
          transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
          role="dialog"
          aria-label="Cookie consent"
          className="fixed inset-x-4 bottom-4 z-[70] mx-auto max-w-2xl rounded-2xl border border-white/10 bg-[#0B2340]/95 p-5 shadow-xl shadow-black/40 backdrop-blur-md sm:inset-x-auto sm:bottom-6 sm:left-6 sm:p-6"
        >
          <div className="flex items-start gap-3">
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#C6A15B]/25 bg-[#0E2543]">
              <Cookie className="h-4 w-4 text-[#C6A15B]" strokeWidth={1.6} />
            </div>
            <p className="text-sm leading-relaxed text-[#C7D1E0]">
              We use cookies to improve your experience on this site and
              understand how it's used. You can accept or decline
              non-essential cookies at any time.
            </p>
          </div>

          <div className="mt-4 flex justify-end gap-3">
            <Button variant="secondary" size="sm" onClick={() => handleChoice("declined")}>
              Decline
            </Button>
            <Button variant="primary" size="sm" onClick={() => handleChoice("accepted")}>
              Accept
            </Button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
