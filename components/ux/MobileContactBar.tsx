"use client";

import { Phone, MessageCircle, Mail } from "lucide-react";

const ACTIONS = [
  { icon: Phone, label: "Call", href: "tel:+919902067179" },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    href: "https://wa.me/919902067179",
    external: true,
  },
  { icon: Mail, label: "Email", href: "mailto:shiva130122@gmail.com" },
] as const;

export default function MobileContactBar() {
  return (
    <nav
      aria-label="Quick contact"
      className="fixed inset-x-0 bottom-0 z-50 flex border-t border-white/10 bg-[#050D1B]/95 backdrop-blur-md sm:hidden"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      {ACTIONS.map((action) => (
        <a
          key={action.label}
          href={action.href}
          target={action.external ? "_blank" : undefined}
          rel={action.external ? "noopener noreferrer" : undefined}
          className="flex flex-1 flex-col items-center gap-1 py-3 text-[#AEBBCE] transition-colors duration-200 hover:text-[#E8C77E] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#C6A15B]/60"
        >
          <action.icon className="h-5 w-5" strokeWidth={1.8} />
          <span className="font-mono text-[10px] uppercase tracking-[0.1em]">
            {action.label}
          </span>
        </a>
      ))}
    </nav>
  );
}
