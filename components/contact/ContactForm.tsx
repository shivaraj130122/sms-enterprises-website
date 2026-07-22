"use client";

import { useState, type FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2 } from "lucide-react";

import CornerFrame from "@/components/ui/CornerFrame";
import Button from "@/components/ui/Button";

const SERVICES = [
  "Land Survey",
  "Layout Development",
  "Earthwork",
  "Road Formation",
  "Drainage Construction",
  "GPS & Drone Survey",
  "Other",
];

interface FormState {
  name: string;
  phone: string;
  email: string;
  service: string;
  message: string;
}

type FormErrors = Partial<Record<keyof FormState, string>>;

const INITIAL_STATE: FormState = {
  name: "",
  phone: "",
  email: "",
  service: "",
  message: "",
};

const PHONE_PATTERN = /^[+]?[\d\s-]{10,15}$/;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const fieldClass =
  "w-full rounded-lg border bg-[#071426]/60 px-4 py-3 text-sm text-[#F5F3EC] placeholder:text-[#5B7CA3] outline-none transition-colors duration-300 focus:bg-[#071426]/80";

const labelClass =
  "mb-2 block font-mono text-[10px] uppercase tracking-[0.16em] text-[#8EA3C2]";

function validate(form: FormState): FormErrors {
  const errors: FormErrors = {};

  if (!form.name.trim() || form.name.trim().length < 2) {
    errors.name = "Enter your full name.";
  }
  if (!PHONE_PATTERN.test(form.phone.trim())) {
    errors.phone = "Enter a valid phone number.";
  }
  if (!EMAIL_PATTERN.test(form.email.trim())) {
    errors.email = "Enter a valid email address.";
  }
  if (!form.service) {
    errors.service = "Select the service you need.";
  }
  if (!form.message.trim() || form.message.trim().length < 10) {
    errors.message = "Tell us a little more about your project.";
  }

  return errors;
}

export default function ContactForm() {
  const [form, setForm] = useState<FormState>(INITIAL_STATE);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: undefined }));
  }

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const validationErrors = validate(form);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setSubmitted(true);
      setForm(INITIAL_STATE);
    }
  }

  function inputBorder(field: keyof FormState) {
    return errors[field] ? "border-red-400/50 focus:border-red-400/70" : "border-white/10 focus:border-[#C6A15B]/50";
  }

  return (
    <CornerFrame className="border border-white/10 bg-[#0B2340]/50 p-7 backdrop-blur-md sm:p-8">
      <AnimatePresence mode="wait">
        {submitted ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
            className="flex flex-col items-center justify-center gap-4 py-16 text-center"
          >
            <CheckCircle2 className="h-10 w-10 text-[#C6A15B]" strokeWidth={1.5} />
            <div>
              <p className="font-display text-lg font-semibold text-[#F5F3EC]">
                Message sent.
              </p>
              <p className="mt-2 max-w-xs text-sm leading-relaxed text-[#AEBBCE]">
                Thank you for reaching out to SMS Enterprises. Our team will
                contact you shortly to discuss your project.
              </p>
            </div>
            <Button
              variant="secondary"
              size="sm"
              type="button"
              onClick={() => setSubmitted(false)}
            >
              Send Another Message
            </Button>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onSubmit={handleSubmit}
            noValidate
            className="space-y-5"
          >
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <div>
                <label htmlFor="name" className={labelClass}>
                  Full Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  className={`${fieldClass} ${inputBorder("name")}`}
                  aria-invalid={Boolean(errors.name)}
                />
                {errors.name && (
                  <p className="mt-1.5 text-xs text-red-300">{errors.name}</p>
                )}
              </div>
              <div>
                <label htmlFor="phone" className={labelClass}>
                  Phone Number
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="+91 90000 00000"
                  className={`${fieldClass} ${inputBorder("phone")}`}
                  aria-invalid={Boolean(errors.phone)}
                />
                {errors.phone && (
                  <p className="mt-1.5 text-xs text-red-300">{errors.phone}</p>
                )}
              </div>
            </div>

            <div>
              <label htmlFor="email" className={labelClass}>
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={form.email}
                onChange={handleChange}
                placeholder="you@company.com"
                className={`${fieldClass} ${inputBorder("email")}`}
                aria-invalid={Boolean(errors.email)}
              />
              {errors.email && (
                <p className="mt-1.5 text-xs text-red-300">{errors.email}</p>
              )}
            </div>

            <div>
              <label htmlFor="service" className={labelClass}>
                Required Service
              </label>
              <select
                id="service"
                name="service"
                value={form.service}
                onChange={handleChange}
                className={`${fieldClass} ${inputBorder("service")} appearance-none`}
                aria-invalid={Boolean(errors.service)}
              >
                <option value="" disabled className="bg-[#0B2340]">
                  Select a service
                </option>
                {SERVICES.map((service) => (
                  <option key={service} value={service} className="bg-[#0B2340]">
                    {service}
                  </option>
                ))}
              </select>
              {errors.service && (
                <p className="mt-1.5 text-xs text-red-300">{errors.service}</p>
              )}
            </div>

            <div>
              <label htmlFor="message" className={labelClass}>
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={form.message}
                onChange={handleChange}
                placeholder="Tell us about your site and requirements"
                className={`${fieldClass} ${inputBorder("message")} resize-none`}
                aria-invalid={Boolean(errors.message)}
              />
              {errors.message && (
                <p className="mt-1.5 text-xs text-red-300">{errors.message}</p>
              )}
            </div>

            <Button variant="primary" size="lg" type="submit" className="w-full">
              <span className="inline-flex items-center justify-center gap-2">
                Send Message
                <Send className="h-4 w-4" strokeWidth={2} />
              </span>
            </Button>
          </motion.form>
        )}
      </AnimatePresence>
    </CornerFrame>
  );
}