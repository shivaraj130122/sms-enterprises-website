type ClassValue = string | number | null | undefined | boolean | ClassValue[];

/** Lightweight className combiner (no dependency on clsx/tailwind-merge). */
export function cn(...inputs: ClassValue[]): string {
  const flatten = (vals: ClassValue[]): string[] =>
    vals.flatMap((v) => (Array.isArray(v) ? flatten(v) : v ? [String(v)] : []));
  return flatten(inputs).join(" ");
}