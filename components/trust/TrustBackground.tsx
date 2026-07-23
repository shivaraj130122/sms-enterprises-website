"use client";

import { motion, useReducedMotion } from "framer-motion";

/**
 * TrustBackground
 * -----------------------------------------------------------------------
 * A quieter cousin of HeroBackground — same visual vocabulary (survey
 * grid, topographic contours) but restrained, since this section carries
 * a lot of dense content and needs to stay legible.
 */
export default function TrustBackground() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(90%_60%_at_50%_0%,#0E2543_0%,#071426_55%,#050D1B_100%)]" />

      <svg className="absolute inset-0 h-full w-full opacity-[0.08]">
        <defs>
          <pattern id="sms-trust-grid" width="120" height="120" patternUnits="userSpaceOnUse">
            <path d="M 120 0 L 0 0 0 120" fill="none" stroke="#3E5C7E" strokeWidth="0.6" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#sms-trust-grid)" />
      </svg>

      <motion.svg
        className="absolute -left-[10%] top-[10%] h-[80%] w-[120%] opacity-[0.12]"
        viewBox="0 0 1200 700"
        fill="none"
        animate={prefersReducedMotion ? undefined : { x: [0, 12, 0] }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
      >
        <path
          d="M-50,480 C170,430 330,540 510,500 C700,460 790,360 970,400 C1110,430 1200,380 1290,330"
          stroke="#C6A15B"
          strokeWidth="1"
        />
        <path
          d="M-50,560 C170,510 320,630 500,580 C680,530 780,410 960,450 C1100,480 1200,420 1280,370"
          stroke="#3E5C7E"
          strokeWidth="1"
        />
      </motion.svg>

      <div className="absolute left-1/2 top-0 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-[#C6A15B]/[0.05] blur-[120px]" />

      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,13,27,0.1)_0%,rgba(5,13,27,0.02)_25%,rgba(5,13,27,0.4)_100%)]" />
    </div>
  );
}
