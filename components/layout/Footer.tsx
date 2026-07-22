import Link from "next/link";
import { Mail, MapPin, Phone } from "lucide-react";
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp, FaYoutube } from "react-icons/fa";
import Logo from "@/components/ui/Logo";
import Container from "@/components/ui/Container";
import { COMPANY, FOOTER_SERVICES, NAV_LINKS } from "@/lib/constants";

const SOCIALS = [
  { label: "Facebook", href: "https://facebook.com", Icon: FaFacebookF },
  { label: "Instagram", href: "https://instagram.com", Icon: FaInstagram },
  { label: "LinkedIn", href: "https://linkedin.com", Icon: FaLinkedinIn },
  { label: "YouTube", href: "https://youtube.com", Icon: FaYoutube },
  { label: "WhatsApp", href: `https://wa.me/${COMPANY.whatsapp}`, Icon: FaWhatsapp },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-gold-500/10 bg-navy-950">
      <div className="blueprint-grid pointer-events-none absolute inset-0 opacity-60" aria-hidden="true" />

      <Container className="relative py-20">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.4fr_0.8fr_1fr_1.1fr]">
          <div>
            <Logo />
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-slate-400">
              {COMPANY.subtitle} — {COMPANY.name} delivers complete residential layout
              infrastructure development for developers, builders and government projects
              across Karnataka.
            </p>
            <div className="mt-6 flex items-center gap-3">
             {SOCIALS.map(({ label, href, Icon }) => (
  <a
    key={label}
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    aria-label={label}
    className="flex h-10 w-10 items-center justify-center rounded-full border border-slate-700 text-slate-400 transition-colors duration-300 hover:border-gold-500 hover:text-gold-500"
  >
    <Icon size={15} />
  </a>
))}
               
            </div>
          </div>

          <div>
            <h3 className="font-mono text-xs uppercase tracking-[0.25em] text-gold-500">Quick Links</h3>
            <ul className="mt-6 space-y-3">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-slate-400 transition-colors hover:text-ivory">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-mono text-xs uppercase tracking-[0.25em] text-gold-500">Services</h3>
            <ul className="mt-6 space-y-3">
              {FOOTER_SERVICES.map((service) => (
                <li key={service} className="text-sm text-slate-400">
                  {service}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-mono text-xs uppercase tracking-[0.25em] text-gold-500">Contact</h3>
            <ul className="mt-6 space-y-4 text-sm text-slate-400">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="mt-0.5 shrink-0 text-gold-500" />
                {COMPANY.address}
              </li>
              <li className="flex items-center gap-3">
                <Phone size={16} className="shrink-0 text-gold-500" />
                <a href={COMPANY.phoneHref} className="hover:text-ivory">
                  {COMPANY.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={16} className="shrink-0 text-gold-500" />
                <a href={`mailto:${COMPANY.email}`} className="hover:text-ivory">
                  {COMPANY.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-slate-800 pt-8 text-xs text-slate-600 sm:flex-row">
          <p className="font-mono">
            © {new Date().getFullYear()} {COMPANY.name}. All rights reserved.
          </p>
          <p className="font-mono uppercase tracking-[0.2em] text-slate-600">{COMPANY.tagline}</p>
        </div>
      </Container>
    </footer>
  );
}