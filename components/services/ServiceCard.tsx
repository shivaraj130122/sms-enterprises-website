"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

import Card from "@/components/ui/Card";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index?: number;
}

const EASE = [0.16, 1, 0.3, 1] as const;

export default function ServiceCard({
  icon: Icon,
  title,
  description,
  index = 0,
}: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: EASE, delay: index * 0.08 }}
      whileHover={{ y: -8 }}
      className="h-full"
    >
      <Card className="group relative h-full overflow-hidden border border-white/10 bg-[#0B2340]/50 p-7 backdrop-blur-md transition-colors duration-300 hover:border-[#C6A15B]/35 hover:bg-[#0B2340]/80 sm:p-8">
        {/* Gold hover glow */}
        <div className="pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#C6A15B]/0 blur-2xl transition-colors duration-500 group-hover:bg-[#C6A15B]/10" />

        <div className="relative flex h-12 w-12 items-center justify-center rounded-full border border-[#C6A15B]/25 bg-[#0E2543] transition-colors duration-300 group-hover:border-[#C6A15B]/50">
          <Icon className="h-5 w-5 text-[#C6A15B]" strokeWidth={1.6} />
        </div>

        <h3 className="relative mt-6 font-display text-lg font-semibold text-[#F5F3EC] sm:text-xl">
          {title}
        </h3>

        <p className="relative mt-3 text-sm leading-relaxed text-[#AEBBCE] sm:text-[15px]">
          {description}
        </p>
      </Card>
    </motion.div>
  );
}