"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowUpRight, Compass } from "lucide-react";

import Container from "@/components/ui/Container";
import Button from "@/components/ui/Button";
import CornerFrame from "@/components/ui/CornerFrame";
import Reveal from "@/components/ui/Reveal";

import HeroBackground from "../hero/HeroBackground";
import CoordinateTicker from "../hero/CoordinateTicker";

/**
 * NOTE ON ASSUMED COMPONENT APIS
 * -----------------------------------------------------------------------
 * Phase 1 components weren't available to inspect directly, so this file
 * assumes the following minimal, conventional shapes. If your actual
 * components differ, the fix is a one-line prop adjustment below —
 * nothing else in this file depends on their internals.
 *
 *   <Container>            children, className?
 *   <Button variant size>  variant: "primary" | "secondary" | "ghost"
 *                           size: "sm" | "md" | "lg"
 *                           asChild? (renders its child, e.g. a <Link>)
 *   <CornerFrame>           children, className?  — draws corner reticle
 *                           marks around its content (as its name implies)
 *   <Reveal delay?>         children — fades/slides children in on mount
 *                           or on scroll into view
 *
 * If any of these mismatch your real components, tell me and I'll adjust
 * this file only — the rest of the app stays untouched.
 */

const EASE = [0.16, 1, 0.3, 1] as const;

export default function Hero() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="hero"
      className="relative flex min-h-[100svh] w-full items-center overflow-hidden bg-[#071426] pt-24 sm:pt-28"
    >
      <HeroBackground />

      <Container className="relative z-10">
        <CornerFrame className="px-6 py-10 sm:px-10 sm:py-14 lg:px-14 lg:py-16">
          <div className="max-w-4xl">
            {/* Eyebrow */}
            <Reveal>
              <div className="mb-7 inline-flex items-center gap-2.5 rounded-full border border-[#C6A15B]/25 bg-[#0B2340]/60 px-4 py-1.5 backdrop-blur-sm">
                <Compass className="h-3.5 w-3.5 text-[#C6A15B]" strokeWidth={1.75} />
                <span className="font-mono text-[11px] tracking-[0.22em] text-[#C9B27C]">
                  LAND SURVEY &nbsp;·&nbsp; DEVELOPMENT &nbsp;·&nbsp; CIVIL ENGINEERING
                </span>
              </div>
            </Reveal>

            {/* Headline */}
            <motion.h1
              initial={prefersReducedMotion ? undefined : { opacity: 0, y: 28 }}
              animate={prefersReducedMotion ? undefined : { opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: EASE, delay: 0.1 }}
              className="font-display text-[13vw] font-semibold uppercase leading-[0.98] tracking-tight text-[#F5F3EC] sm:text-6xl md:text-7xl lg:text-[5.5rem]"
            >
              Mapping
              <br />
              <span className="text-[#C6A15B]">ground truth.</span>
              <br />
              Building what
              <br />
              lasts.
            </motion.h1>

            {/* Tagline */}
            <Reveal delay={0.25}>
              <p className="mt-8 max-w-xl text-base leading-relaxed text-[#AEBBCE] sm:text-lg">
                SMS Enterprises delivers the precision groundwork every
                development stands on — GPS and drone survey, layout
                planning, site demarcation, and construction survey,
                engineered to civil-grade accuracy.
              </p>
            </Reveal>

            {/* CTAs */}
            <Reveal delay={0.4}>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
                <Button
  href="/contact"
  variant="primary"
  size="lg"
>
  Request a Survey
</Button>

<Button
  href="/services"
  variant="secondary"
  size="lg"
>
  View Our Services
</Button>
              </div>
            </Reveal>
          </div>

          {/* Instrument readout strip */}
          <Reveal delay={0.55}>
            <div className="mt-16 lg:mt-20">
              <CoordinateTicker />
            </div>
          </Reveal>
        </CornerFrame>
      </Container>

      {/* Scroll indicator — a surveyor's plumb line, not a generic mouse icon */}
      <div className="pointer-events-none absolute inset-x-0 bottom-7 z-10 flex flex-col items-center gap-2.5">
        <span className="font-mono text-[10px] tracking-[0.3em] text-[#5B7CA3]">SCROLL</span>
        <div className="relative h-10 w-px overflow-hidden bg-white/10">
          {!prefersReducedMotion && (
            <motion.span
              className="absolute inset-x-0 top-0 h-4 bg-gradient-to-b from-transparent via-[#C6A15B] to-transparent"
              animate={{ y: ["-20%", "140%"] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            />
          )}
        </div>
      </div>
    </section>
  );
}
