"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, Phone, X } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import Logo from "@/components/ui/Logo";
import Button from "@/components/ui/Button";
import { useScrolled } from "@/hooks/useScrolled";
import { useLockBodyScroll } from "@/hooks/useLockBodyScroll";
import { COMPANY, NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export default function Navbar() {
  const scrolled = useScrolled(24);
  const [open, setOpen] = useState(false);
  useLockBodyScroll(open);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        scrolled ? "glass-panel border-b border-gold-500/10 py-3" : "border-b border-transparent py-5"
      )}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 md:px-10 lg:px-16">
        <Logo />

        <nav className="hidden items-center gap-10 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group relative font-body text-sm font-medium text-slate-400 transition-colors duration-300 hover:text-ivory"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-gold-500 transition-all duration-300 group-hover:w-full" />
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-4 lg:flex">
          <a
  href={`https://wa.me/${COMPANY.whatsapp}`}
  target="_blank"
  rel="noopener noreferrer"
  aria-label="Chat on WhatsApp"
  className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-600/50 text-ivory transition-colors duration-300 hover:border-gold-500 hover:text-gold-500"
>
  <FaWhatsapp size={18} />
</a>
          <Button href={COMPANY.phoneHref}>
            <Phone size={16} />
            Call Now
          </Button>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          className="flex h-11 w-11 items-center justify-center text-ivory lg:hidden"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="glass-panel overflow-hidden border-t border-gold-500/10 lg:hidden"
          >
            <nav className="flex flex-col gap-1 px-6 py-6">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block border-b border-slate-800 py-3 font-display text-lg text-ivory"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <div className="mt-4 flex items-center gap-3">
                
                 <a
  href={`https://wa.me/${COMPANY.whatsapp}`}
  target="_blank"
  rel="noopener noreferrer"
  className="flex h-12 flex-1 items-center justify-center gap-2 rounded-sm border border-slate-600/50 text-ivory"
>
  <FaWhatsapp size={18} />
  WhatsApp
</a>
                <Button href={COMPANY.phoneHref} className="flex-1">
                  <Phone size={16} /> Call
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}