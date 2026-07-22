"use client";

import { motion, useReducedMotion } from "framer-motion";

/**
 * HeroBackground
 * -----------------------------------------------------------------------
 * The hero's visual "signature": a blueprint-style survey grid with
 * drifting topographic contour lines and a total-station laser sweep.
 * Every element here is drawn from the subject (surveying instruments,
 * elevation contours, GPS grids) rather than generic gradient/blob decor.
 *
 * Pure decoration — aria-hidden, no interactive content.
 */
export default function HeroBackground() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div aria-hidden="true" className="absolute inset-0 overflow-hidden">
      {/* Base gradient — deep navy, slightly lighter toward center */}
      <div className="absolute inset-0 bg-[radial-gradient(120%_100%_at_50%_0%,#0E2543_0%,#071426_55%,#050D1B_100%)]" />

      {/* Survey grid — fine coordinate lattice, like graph/blueprint paper */}
      <svg className="absolute inset-0 h-full w-full opacity-[0.14]">
        <defs>
          <pattern id="sms-grid-minor" width="28" height="28" patternUnits="userSpaceOnUse">
            <path d="M 28 0 L 0 0 0 28" fill="none" stroke="#3E5C7E" strokeWidth="0.5" />
          </pattern>
          <pattern id="sms-grid-major" width="140" height="140" patternUnits="userSpaceOnUse">
            <rect width="140" height="140" fill="url(#sms-grid-minor)" />
            <path d="M 140 0 L 0 0 0 140" fill="none" stroke="#5B7CA3" strokeWidth="0.8" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#sms-grid-major)" />
      </svg>

      {/* Topographic contour lines — slow ambient drift */}
      <motion.svg
        className="absolute -left-[10%] -top-[10%] h-[120%] w-[120%] opacity-[0.22]"
        viewBox="0 0 1200 900"
        fill="none"
        animate={
          prefersReducedMotion
            ? undefined
            : { x: [0, 14, 0], y: [0, -10, 0] }
        }
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
      >
        <path
          d="M-50,620 C150,560 300,700 480,640 C660,580 760,460 940,500 C1080,530 1180,470 1260,420"
          stroke="#C6A15B"
          strokeWidth="1"
        />
        <path
          d="M-50,560 C170,510 320,630 500,580 C680,530 780,410 960,450 C1100,480 1200,420 1280,370"
          stroke="#3E5C7E"
          strokeWidth="1"
        />
        <path
          d="M-50,700 C160,660 340,780 520,710 C700,640 800,540 980,570 C1120,595 1220,540 1300,500"
          stroke="#3E5C7E"
          strokeWidth="1"
        />
        <path
          d="M-50,480 C180,440 330,540 510,500 C700,460 790,360 970,400 C1110,430 1200,380 1290,330"
          stroke="#C6A15B"
          strokeWidth="0.75"
          opacity="0.6"
        />
      </motion.svg>

      {/* Total-station scan sweep */}
      {!prefersReducedMotion && (
        <motion.div
          className="absolute inset-x-0 h-40 bg-gradient-to-b from-transparent via-[#E8C77E]/[0.07] to-transparent mix-blend-screen"
          animate={{ top: ["-15%", "115%"] }}
          transition={{ duration: 7, repeat: Infinity, ease: "linear", repeatDelay: 1.5 }}
        />
      )}

      {/* Vignette to keep foreground text legible */}
      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,13,27,0.15)_0%,rgba(5,13,27,0.05)_35%,rgba(5,13,27,0.55)_100%)]" />
    </div>
  );
}
