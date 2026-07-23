"use client";

import { motion } from "framer-motion";
import { Expand } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  icon: LucideIcon;
}

interface GalleryCardProps {
  item: GalleryItem;
  index?: number;
  onOpen: () => void;
}

const EASE = [0.16, 1, 0.3, 1] as const;

export default function GalleryCard({ item, index = 0, onOpen }: GalleryCardProps) {
  const Icon = item.icon;

  return (
    <motion.button
      type="button"
      onClick={onOpen}
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -12 }}
      transition={{ duration: 0.45, ease: EASE, delay: index * 0.04 }}
      className="group relative block aspect-[4/3] w-full overflow-hidden rounded-xl border border-white/10 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C6A15B]/60"
      aria-label={`Open ${item.title} in full screen`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(120%_100%_at_30%_0%,#123159_0%,#0A1E3B_60%,#071426_100%)] transition-transform duration-500 ease-out group-hover:scale-110">
        <svg className="absolute inset-0 h-full w-full opacity-[0.16]" aria-hidden="true">
          <defs>
            <pattern
              id={`gallery-grid-${item.id}`}
              width="24"
              height="24"
              patternUnits="userSpaceOnUse"
            >
              <path d="M 24 0 L 0 0 0 24" fill="none" stroke="#5B7CA3" strokeWidth="0.6" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill={`url(#gallery-grid-${item.id})`} />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <Icon
            className="h-12 w-12 text-[#C6A15B]/60 transition-colors duration-300 group-hover:text-[#E8C77E]"
            strokeWidth={1.2}
          />
        </div>
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-[#050D1B]/90 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

      <div className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-[#050D1B]/60 opacity-0 backdrop-blur-sm transition-opacity duration-300 group-hover:opacity-100">
        <Expand className="h-4 w-4 text-[#F5F3EC]" strokeWidth={1.8} />
      </div>

      <span className="absolute left-3 top-3 rounded-full border border-[#C6A15B]/30 bg-[#071426]/70 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.12em] text-[#E8C77E] backdrop-blur-sm">
        {item.category}
      </span>

      <p className="absolute inset-x-3 bottom-3 translate-y-2 text-sm font-medium text-[#F5F3EC] opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
        {item.title}
      </p>
    </motion.button>
  );
}
