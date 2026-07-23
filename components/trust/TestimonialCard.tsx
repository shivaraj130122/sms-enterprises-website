"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

import Card from "@/components/ui/Card";

interface TestimonialCardProps {
  name: string;
  company: string;
  rating: number;
  quote: string;
  index?: number;
}

const EASE = [0.16, 1, 0.3, 1] as const;

function getInitials(name: string) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

export default function TestimonialCard({
  name,
  company,
  rating,
  quote,
  index = 0,
}: TestimonialCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, ease: EASE, delay: index * 0.08 }}
      whileHover={{ y: -6 }}
      className="h-full"
    >
      <Card className="flex h-full flex-col border border-white/10 bg-[#0B2340]/50 p-7 backdrop-blur-md transition-colors duration-300 hover:border-[#C6A15B]/30 sm:p-8">
        <Quote className="h-6 w-6 text-[#C6A15B]/50" strokeWidth={1.5} />

        <div className="mt-4 flex items-center gap-1">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`h-3.5 w-3.5 ${
                i < rating ? "fill-[#C6A15B] text-[#C6A15B]" : "text-[#3E5C7E]"
              }`}
              strokeWidth={1.5}
            />
          ))}
        </div>

        <p className="mt-4 flex-1 text-sm leading-relaxed text-[#C7D1E0] sm:text-[15px]">
          &ldquo;{quote}&rdquo;
        </p>

        <div className="mt-6 flex items-center gap-3 border-t border-white/10 pt-5">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#C6A15B]/25 bg-[#0E2543] font-mono text-xs font-semibold text-[#C6A15B]">
            {getInitials(name)}
          </div>
          <div>
            <p className="text-sm font-semibold text-[#F5F3EC]">{name}</p>
            <p className="font-mono text-[11px] tracking-wide text-[#8EA3C2]">
              {company}
            </p>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
