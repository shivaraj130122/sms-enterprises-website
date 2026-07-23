"use client";

import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import type { ReactNode } from "react";

interface PageTransitionProps {
  children: ReactNode;
}

const EASE = [0.16, 1, 0.3, 1] as const;

/**
 * PageTransition
 * -----------------------------------------------------------------------
 * Wrap {children} in app/layout.tsx with this component to get a smooth
 * fade/slide transition between routes:
 *
 *   <PageTransition>{children}</PageTransition>
 *
 * Not wired in automatically since layout.tsx is off-limits for this
 * phase — this file is ready to drop in when you choose to.
 */
export default function PageTransition({ children }: PageTransitionProps) {
  const pathname = usePathname();

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={pathname}
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -12 }}
        transition={{ duration: 0.45, ease: EASE }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
