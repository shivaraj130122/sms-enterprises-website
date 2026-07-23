"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import SkeletonCard from "@/components/ux/SkeletonCard";
import GalleryCard, { type GalleryItem } from "@/components/gallery/GalleryCard";

interface GalleryGridProps {
  items: GalleryItem[];
  onOpen: (index: number) => void;
}

export default function GalleryGrid({ items, onOpen }: GalleryGridProps) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 500);
    return () => clearTimeout(timer);
  }, [items]);

  if (loading) {
    return (
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <SkeletonCard key={i} className="aspect-[4/3]" />
        ))}
      </div>
    );
  }

  return (
    <motion.div layout className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
      <AnimatePresence mode="popLayout">
        {items.map((item, i) => (
          <GalleryCard key={item.id} item={item} index={i} onOpen={() => onOpen(i)} />
        ))}
      </AnimatePresence>
    </motion.div>
  );
}
