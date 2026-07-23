"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring, useReducedMotion } from "framer-motion";

export default function PremiumCursor() {
  const [enabled, setEnabled] = useState(false);
  const prefersReducedMotion = useReducedMotion();

  const x = useMotionValue(-200);
  const y = useMotionValue(-200);
  const springX = useSpring(x, { stiffness: 260, damping: 32, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 260, damping: 32, mass: 0.4 });

  useEffect(() => {
    const isFinePointer = window.matchMedia("(pointer: fine)").matches;
    if (!isFinePointer || prefersReducedMotion) return;

    setEnabled(true);

    function handleMove(e: MouseEvent) {
      x.set(e.clientX);
      y.set(e.clientY);
    }

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [prefersReducedMotion, x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden="true"
      style={{ left: springX, top: springY }}
      className="pointer-events-none fixed z-[45] h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#C6A15B]/[0.06] blur-[70px] mix-blend-screen"
    />
  );
}
