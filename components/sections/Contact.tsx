"use client";

import Container from "@/components/ui/Container";
import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import Card from "@/components/ui/Card";

import ContactInfo from "@/components/contact/ContactInfo";
import ContactForm from "@/components/contact/ContactForm";

export default function Contact() {
  return (
    <section id="contact" className="relative bg-[#081832] py-24 sm:py-32">
      <Container className="relative z-10">
        <Reveal>
          <SectionHeading
            eyebrow="GET IN TOUCH"
            title="Let's Build Your Next Project."
            description="Tell us about your site and our team will help you scope the survey, layout, or civil work it needs — from a single boundary reading to full development groundwork."
            align="left"
          />
        </Reveal>

        <div className="mt-16 grid grid-cols-1 gap-10 lg:mt-20 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col gap-10">
            <Reveal delay={0.1}>
              <p className="max-w-lg text-base leading-relaxed text-[#AEBBCE] sm:text-lg">
                SMS Enterprises is a Bengaluru-based land surveying and
                development practice, delivering GPS and drone survey,
                layout planning, site demarcation, and civil engineering
                services from our office in Jigani. Reach out and our team
                will respond with next steps for your site.
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <ContactInfo />
            </Reveal>
          </div>

          <Reveal delay={0.15}>
            <ContactForm />
          </Reveal>
        </div>

        {/* Office location */}
        <Reveal delay={0.1}>
          <Card className="mt-10 overflow-hidden border border-white/10 bg-[#0B2340]/50 p-2 backdrop-blur-md">
            <div className="relative h-72 w-full overflow-hidden rounded-xl sm:h-96">
              <iframe
                title="SMS Enterprises office location — Jigani, Bengaluru, Karnataka"
                src="https://www.google.com/maps?q=Jigani,+Bengaluru,+Karnataka+560010&output=embed"
                className="absolute inset-0 h-full w-full grayscale-[35%] contrast-[1.05]"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Card>
        </Reveal>
      </Container>
    </section>
  );
}