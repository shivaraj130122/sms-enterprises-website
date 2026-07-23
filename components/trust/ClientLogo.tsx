"use client";

import { motion } from "framer-motion";

interface ClientLogoProps {
  name: string;
  index?: number;
}

const EASE = [0.16, 1, 0.3, 1] as const;

/**
 * ClientLogo
 * -----------------------------------------------------------------------
 * Renders a monochrome wordmark tile in place of an uploaded logo file.
 * Swap the `name` list in ClientsGrid for real client logo images
 * (next/image) once they're available.
 */
export default function ClientLogo({ name, index = 0 }: ClientLogoProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, ease: EASE, delay: index * 0.06 }}
      whileHover={{ scale: 1.04 }}
      className="group flex h-24 items-center justify-center rounded-xl border border-white/10 bg-[#0B2340]/40 px-6 backdrop-blur-md transition-colors duration-300 hover:border-[#C6A15B]/40"
    >
      <span className="font-display text-base font-semibold tracking-wide text-[#5B7CA3] grayscale transition-all duration-300 group-hover:text-[#E8C77E] sm:text-lg">
        {name}
      </span>
    </motion.div>
  );
}
