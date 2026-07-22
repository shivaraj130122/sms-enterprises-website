"use client";

import { motion } from "framer-motion";
import { Phone, MessageCircle, Mail, MapPin, Clock } from "lucide-react";
import type { LucideIcon } from "lucide-react";

import Card from "@/components/ui/Card";

interface ContactItem {
  icon: LucideIcon;
  label: string;
  value: string;
  href?: string;
}

const CONTACT_ITEMS: ContactItem[] = [
  {
    icon: Phone,
    label: "Phone",
    value: "+91 99020 67179",
    href: "tel:+919902067179",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+91 99020 67179",
    href: "https://wa.me/919902067179",
  },
  {
    icon: Mail,
    label: "Email",
    value: "shiva130122@gmail.com",
    href: "mailto:shiva130122@gmail.com",
  },
  {
    icon: MapPin,
    label: "Office Address",
    value: "#10, Lions Club, Jigani, Bengaluru, Karnataka – 560010",
  },
  {
    icon: Clock,
    label: "Working Hours",
    value: "Monday – Saturday, 9:00 AM – 6:00 PM",
  },
];

const EASE = [0.16, 1, 0.3, 1] as const;

export default function ContactInfo() {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      {CONTACT_ITEMS.map((item, i) => {
        const content = (
          <Card className="flex h-full items-start gap-4 border border-white/10 bg-[#0B2340]/50 p-6 backdrop-blur-md transition-colors duration-300 hover:border-[#C6A15B]/30">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#C6A15B]/25 bg-[#0E2543]">
              <item.icon
                className="h-5 w-5 text-[#C6A15B]"
                strokeWidth={1.6}
              />
            </div>

            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-[#8EA3C2]">
                {item.label}
              </p>

              <p className="mt-2 text-sm leading-relaxed text-[#F5F3EC]">
                {item.value}
              </p>
            </div>
          </Card>
        );

        return (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.6,
              ease: EASE,
              delay: i * 0.08,
            }}
            className={
              item.label === "Office Address" ? "sm:col-span-2" : ""
            }
          >
            {item.href ? (
              <a
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={
                  item.href.startsWith("http")
                    ? "noopener noreferrer"
                    : undefined
                }
                className="block h-full"
              >
                {content}
              </a>
            ) : (
              content
            )}
          </motion.div>
        );
      })}
    </div>
  );
}