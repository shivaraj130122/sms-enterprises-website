"use client";

import { motion } from "framer-motion";
import type { LucideIcon } from "lucide-react";

import Card from "@/components/ui/Card";
import StatsCounter from "@/components/trust/StatsCounter";

interface AchievementCardProps {
  icon: LucideIcon;
  value: number;
  prefix?: string;
  suffix?: string;
  label: string;
  index?: number;
}

const EASE = [0.16, 1, 0.3, 1] as const;

export default function AchievementCard({
  icon: Icon,
  value,
  prefix = "",
  suffix = "",
  label,
  index = 0,
}: AchievementCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: EASE, delay: index * 0.08 }}
      whileHover={{ y: -6 }}
      className="h-full"
    >
      <Card className="flex h-full flex-col items-center gap-4 border border-white/10 bg-[#0B2340]/50 p-7 text-center backdrop-blur-md transition-colors duration-300 hover:border-[#C6A15B]/35 sm:p-8">
        <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#C6A15B]/25 bg-[#0E2543]">
          <Icon className="h-5 w-5 text-[#C6A15B]" strokeWidth={1.6} />
        </div>
        <span className="font-display text-3xl font-semibold tracking-tight text-[#F5F3EC] sm:text-4xl">
          <StatsCounter value={value} prefix={prefix} suffix={suffix} />
        </span>
        <span className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#8EA3C2] sm:text-[11px]">
          {label}
        </span>
      </Card>
    </motion.div>
  );
}
