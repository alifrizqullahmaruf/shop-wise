import { z } from "zod";

export const checkoutSchema = z.object({
  fullName: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  phone: z.string().min(8, "Phone number must be at least 8 digits"),
  address: z.string().min(5, "Address must be at least 5 characters"),
  city: z.string().min(2, "City must be at least 2 characters"),
  postalCode: z
    .string()
    .regex(/^\d{4,10}$/, "Please enter a valid postal code (4-10 digits)"),
});

export type CheckoutFormValues = z.infer<typeof checkoutSchema>;
