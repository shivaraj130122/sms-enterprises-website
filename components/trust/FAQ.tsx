"use client";

import { useState } from "react";

import Reveal from "@/components/ui/Reveal";
import SectionHeading from "@/components/ui/SectionHeading";
import CornerFrame from "@/components/ui/CornerFrame";

import FAQItem from "@/components/trust/FAQItem";

const FAQS = [
  {
    question: "What does a land survey with SMS Enterprises include?",
    answer:
      "A standard survey covers boundary identification, topographic and elevation data, and a coordinate-marked plot record, captured with RTK-corrected GPS and total station instruments and delivered as a signed report and drawing.",
  },
  {
    question: "How does layout planning and approval work?",
    answer:
      "We prepare plot subdivision and layout drawings that account for saleable area, road access, and setback norms, then package the documentation to match local municipal and RERA requirements before submission for sanction.",
  },
  {
    question: "How is pricing calculated for a survey or layout project?",
    answer:
      "Pricing depends on plot size, terrain, survey type, and turnaround required. We provide a transparent, project-based quote after an initial site and requirement discussion — there are no hidden re-survey charges.",
  },
  {
    question: "What is the typical timeline for a project?",
    answer:
      "A single-plot boundary survey is usually completed within a few working days. Larger layout, drone mapping, or civil projects are scheduled against your project timeline and confirmed upfront before work begins.",
  },
  {
    question: "When should I choose drone survey over a ground survey?",
    answer:
      "Drone survey is ideal for large-format sites — typically above a few acres — where aerial photogrammetry can capture contour and elevation data far faster than a manual ground survey, without sacrificing accuracy.",
  },
  {
    question: "Can SMS Enterprises help with government approvals?",
    answer:
      "Yes. Our survey and layout documentation is prepared to match local land-record, RERA, and municipal approval formats, which reduces back-and-forth and delays at the sanctioning stage.",
  },
  {
    question: "Do you handle construction survey and site setting-out?",
    answer:
      "Yes. We provide construction survey services including site setting-out, road and drainage alignment, and level checks during earthwork and building construction to keep on-site work matched to approved drawings.",
  },
  {
    question: "What documentation do I receive at the end of a project?",
    answer:
      "You receive a survey report, coordinate sheet, and drawing set appropriate to the service — clear enough for architects, lawyers, and civic authorities to act on directly, not raw field data.",
  },
] as const;

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div>
      <Reveal>
        <SectionHeading
          eyebrow="FAQ"
          title="Answers before you ask."
          description="Common questions about how we scope, price, and deliver survey and civil engineering work."
        />
      </Reveal>

      <Reveal delay={0.1}>
        <CornerFrame className="mt-14 border border-white/10 bg-[#0B2340]/40 px-6 backdrop-blur-md sm:px-10 lg:mt-16">
          {FAQS.map((faq, i) => (
            <FAQItem
              key={faq.question}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </CornerFrame>
      </Reveal>
    </div>
  );
}
