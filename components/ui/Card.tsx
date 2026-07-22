"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import CornerFrame from "./CornerFrame";

export default function Card({
  children,
  className,
  framed = true,
}: {
  children: ReactNode;
  className?: string;
  framed?: boolean;
}) {
  const inner = (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        "glass-panel rounded-sm p-6 transition-shadow duration-300",
        "hover:shadow-[0_0_0_1px_rgba(201,162,39,0.35),0_20px_40px_-20px_rgba(0,0,0,0.65)]",
        className
      )}
    >
      {children}
    </motion.div>
  );

  return framed ? <CornerFrame size={14}>{inner}</CornerFrame> : inner;
}