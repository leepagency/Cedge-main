import { z } from "zod";

export const mailSubscriptionSchema = z.object({
  email: z.string().email(),
});
