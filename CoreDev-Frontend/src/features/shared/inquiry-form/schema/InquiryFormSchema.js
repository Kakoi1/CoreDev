import { z } from "zod";

export const inquiryFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().min(1, "Email is required").email("Invalid email format"),
  phone: z
    .string()
    .min(1, "Phone number is required")
    .regex(/^(09\d{9}|\+639\d{9})$/, "Phone must be 09XXXXXXXXX or +639XXXXXXXXX"),
  address: z.string().min(1, "Address is required"),
  message: z.string().min(1, "Message is required"),
  product: z.string().optional(),
  type: z.string().optional(),
});
