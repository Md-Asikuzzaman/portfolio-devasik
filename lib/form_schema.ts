import { z } from "zod";

export const schema = z.object({
  email: z
    .string()
    .min(1, { message: "Email is required" })
    .email("Invalid email address"),

  message: z
    .string()
    .min(1, { message: "Messsage is required" })
    .max(100, { message: "Messsage at most 100 char." }),
});
