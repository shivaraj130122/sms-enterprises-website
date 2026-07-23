import { z } from "zod";

/**
 * Basic international-friendly phone validation.
 * Accepts digits, spaces, parentheses, dashes, and an optional leading +.
 * Requires between 7 and 15 digits overall (E.164 upper bound).
 */
const phoneRegex = /^\+?[0-9\s\-()]{7,20}$/;

export const enquirySchema = z.object({
  name: z
    .string({ required_error: "Name is required" })
    .trim()
    .min(2, "Name must be at least 2 characters")
    .max(100, "Name must be at most 100 characters"),

  phone: z
    .string({ required_error: "Phone number is required" })
    .trim()
    .min(7, "Phone number is too short")
    .max(20, "Phone number is too long")
    .regex(phoneRegex, "Enter a valid phone number"),

  email: z
    .string({ required_error: "Email is required" })
    .trim()
    .toLowerCase()
    .email("Enter a valid email address")
    .max(254, "Email must be at most 254 characters"),

  service: z
    .string({ required_error: "Service is required" })
    .trim()
    .min(2, "Service must be at least 2 characters")
    .max(150, "Service must be at most 150 characters"),

  message: z
    .string({ required_error: "Message is required" })
    .trim()
    .min(10, "Message must be at least 10 characters")
    .max(2000, "Message must be at most 2000 characters"),
});

export type EnquirySchemaType = z.infer<typeof enquirySchema>;

export const enquiryStatusSchema = z.enum(["new", "contacted", "closed"]);

/**
 * Validates unknown input data against the enquiry schema.
 * Returns a discriminated result so callers can branch without try/catch.
 */
export function validateEnquiry(data: unknown):
  | { success: true; data: EnquirySchemaType }
  | { success: false; errors: Record<string, string> } {
  const result = enquirySchema.safeParse(data);

  if (result.success) {
    return { success: true, data: result.data };
  }

  const errors: Record<string, string> = {};
  for (const issue of result.error.issues) {
    const field = issue.path.join(".") || "form";
    if (!errors[field]) {
      errors[field] = issue.message;
    }
  }

  return { success: false, errors };
}
