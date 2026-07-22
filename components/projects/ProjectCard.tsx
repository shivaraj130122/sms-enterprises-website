"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { MapPin, ArrowUpRight } from "lucide-react";
import type { LucideIcon } from "lucide-react";

import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

interface ProjectCardProps {
  icon: LucideIcon;
  title: string;
  category: string;
  location: string;
  description: string;
  index?: number;
}

const EASE = [0.16, 1, 0.3, 1] as const;

export default function ProjectCard({
  icon: Icon,
  title,
  category,
  location,
  description,
  index = 0,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: EASE, delay: index * 0.08 }}
      whileHover={{ y: -8 }}
      className="h-full"
    >
      <Card className="group h-full overflow-hidden border border-white/10 bg-[#0B2340]/50 p-0 backdrop-blur-md transition-colors duration-300 hover:border-[#C6A15B]/35">
        {/* Stylized project visual — survey grid + category icon, standing in for an on-site photograph */}
        <div className="relative h-48 w-full overflow-hidden bg-[radial-gradient(120%_100%_at_30%_0%,#123159_0%,#0A1E3B_60%,#071426_100%)]">
          <svg className="absolute inset-0 h-full w-full opacity-[0.16]" aria-hidden="true">
            <defs>
              <pattern
                id={`project-grid-${index}`}
                width="26"
                height="26"
                patternUnits="userSpaceOnUse"
              >
                <path d="M 26 0 L 0 0 0 26" fill="none" stroke="#5B7CA3" strokeWidth="0.6" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill={`url(#project-grid-${index})`} />
          </svg>

          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.4, ease: EASE }}
          >
            <Icon
              className="h-14 w-14 text-[#C6A15B]/70 transition-colors duration-300 group-hover:text-[#E8C77E]"
              strokeWidth={1.2}
            />
          </motion.div>

          <span className="absolute left-4 top-4 rounded-full border border-[#C6A15B]/30 bg-[#071426]/70 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.14em] text-[#E8C77E] backdrop-blur-sm">
            {category}
          </span>

          <div className="absolute bottom-4 left-4 flex items-center gap-1.5 font-mono text-[11px] tracking-[0.08em] text-[#C7D1E0]">
            <MapPin className="h-3.5 w-3.5 text-[#8EA3C2]" strokeWidth={1.8} />
            {location}
          </div>
        </div>

        {/* Content */}
        <div className="p-7 sm:p-8">
          <h3 className="font-display text-lg font-semibold text-[#F5F3EC] sm:text-xl">
            {title}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-[#AEBBCE] sm:text-[15px]">
            {description}
          </p>

          <Link href="/contact" className="mt-6 inline-block">
            <Button variant="secondary" size="sm">
              <span className="inline-flex items-center gap-1.5">
                Discuss a Similar Project
                <ArrowUpRight
                  className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  strokeWidth={2}
                />
              </span>
            </Button>
          </Link>
        </div>
      </Card>
    </motion.div>
  );
}