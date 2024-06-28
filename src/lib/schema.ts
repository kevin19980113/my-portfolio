import { z } from "zod";

export const contactFormSchema = z.object({
  senderEmail: z
    .string()
    .email({
      message: "Please enter a valid email address",
    })
    .min(1, {
      message: "Email is required",
    }),
  contactMessage: z
    .string()
    .min(1, {
      message: "Message is required",
    })
    .max(5000, {
      message: "Message must be less than 5000 characters",
    }),
});

export type ContactFormSchemaType = z.infer<typeof contactFormSchema>;
