"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

interface TimelineItemProps {
  year: string;
  title: string;
  description: string;
  icon: LucideIcon;
  index: number;
  align: "left" | "right";
}

const EASE = [0.16, 1, 0.3, 1] as const;

export default function TimelineItem({
  year,
  title,
  description,
  icon: Icon,
  index,
  align,
}: TimelineItemProps) {
  return (
    <div className="relative flex items-start gap-6 pb-14 last:pb-0 lg:grid lg:grid-cols-2 lg:gap-0 lg:pb-20">
      {/* Node */}
      <div className="absolute left-[19px] top-1 z-10 flex h-9 w-9 -translate-x-1/2 items-center justify-center rounded-full border border-[#C6A15B]/40 bg-[#0B2340] lg:left-1/2">
        <motion.span
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.4, ease: EASE, delay: index * 0.1 }}
          className="flex h-full w-full items-center justify-center rounded-full"
        >
          <Icon className="h-4 w-4 text-[#C6A15B]" strokeWidth={1.8} />
        </motion.span>
      </div>

      {/* Mobile: single column, content right of the line */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.55, ease: EASE, delay: index * 0.1 }}
        className={`ml-10 lg:ml-0 ${
          align === "left"
            ? "lg:col-start-1 lg:pr-16 lg:text-right"
            : "lg:col-start-2 lg:pl-16"
        }`}
      >
        <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-[#C6A15B]">
          {year}
        </span>
        <h4 className="mt-2 font-display text-lg font-semibold text-[#F5F3EC] sm:text-xl">
          {title}
        </h4>
        <p className="mt-2 text-sm leading-relaxed text-[#AEBBCE] sm:text-[15px]">
          {description}
        </p>
      </motion.div>
    </div>
  );
}
