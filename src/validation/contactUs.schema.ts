import { z } from "zod";

export const contactUsSchema = z.object({
  name: z.string().min(3).max(255),
  email: z.string().email(),
  phone: z.string(),
  subject: z.string().min(3).max(255),
  body: z.string().min(3).max(255),
});
