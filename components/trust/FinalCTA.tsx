"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";

import CornerFrame from "@/components/ui/CornerFrame";
import Button from "@/components/ui/Button";
import Reveal from "@/components/ui/Reveal";

export default function FinalCTA() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <Reveal>
      <CornerFrame className="relative overflow-hidden border border-[#C6A15B]/25 bg-[#0B2340]/60 px-6 py-16 text-center backdrop-blur-md sm:px-12 sm:py-20">
        {/* Animated glow backdrop */}
        <div aria-hidden="true" className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(70%_100%_at_50%_100%,#123159_0%,transparent_70%)]" />
          {!prefersReducedMotion && (
            <motion.div
              className="absolute left-1/2 top-1/2 h-[360px] w-[360px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C6A15B]/[0.08] blur-[100px]"
              animate={{ scale: [1, 1.15, 1], opacity: [0.6, 0.9, 0.6] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
          )}
        </div>

        <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-[#C6A15B]">
          Get Started
        </span>

        <h2 className="mx-auto mt-5 max-w-2xl font-display text-3xl font-semibold tracking-tight text-[#F5F3EC] sm:text-4xl lg:text-5xl">
          Ready to Build With Confidence?
        </h2>

        <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-[#AEBBCE] sm:text-lg">
          Contact SMS Enterprises today for accurate surveys, layout
          development, earthwork and infrastructure solutions.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a href="tel:+919902067179">
            <Button variant="primary" size="lg">
              <span className="inline-flex items-center gap-2">
                <Phone className="h-4 w-4" strokeWidth={2} />
                Call Now
              </span>
            </Button>
          </a>
          <a href="https://wa.me/919902067179" target="_blank" rel="noopener noreferrer">
            <Button variant="secondary" size="lg">
              <span className="inline-flex items-center gap-2">
                <MessageCircle className="h-4 w-4" strokeWidth={2} />
                WhatsApp
              </span>
            </Button>
          </a>
        </div>
      </CornerFrame>
    </Reveal>
  );
}
