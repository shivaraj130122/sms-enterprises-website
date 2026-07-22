"use client";

import { useEffect } from "react";

/** Locks body scroll while `locked` is true — used for the mobile menu overlay. */
export function useLockBodyScroll(locked: boolean) {
  useEffect(() => {
    const original = document.body.style.overflow;
    document.body.style.overflow = locked ? "hidden" : original;
    return () => {
      document.body.style.overflow = original;
    };
  }, [locked]);
}