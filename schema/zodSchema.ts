import { z } from "zod";

export const mailSchema = z.object({
  email: z
    .string()
    .trim()
    .min(1, { message: "Email is required" })
    .email("Invalid email address"),

  message: z
    .string()
    .trim()
    .min(1, { message: "Message is required" })
    .max(300, { message: "Message at most 300 char." }),
});

export const projectSchema = z.object({
  title: z.string().trim().min(1, { message: "Title is required" }),
  features: z.string().min(1, { message: "Features is required" }),
  site_url: z.string().url().min(1, { message: "Live demo URL is required" }),
  repo_url: z.string().url().min(1, { message: "Github repo URL is required" }),
  technologys: z.object({
    react: z.optional(z.boolean()),
    next: z.optional(z.boolean()),
    ts: z.optional(z.boolean()),
    js: z.optional(z.boolean()),
    mongodb: z.optional(z.boolean()),
    mysql: z.optional(z.boolean()),
    prisma: z.optional(z.boolean()),
    rquery: z.optional(z.boolean()),
    zustand: z.optional(z.boolean()),
    tailwind: z.optional(z.boolean()),
    nextauth: z.optional(z.boolean()),
    zod: z.optional(z.boolean()),
    fmotion: z.optional(z.boolean()),
    graphgl: z.optional(z.boolean()),
    nmailer: z.optional(z.boolean()),
  }),
});

export const authSchema = z.object({
  email: z
    .string()
    .trim()
    .min(1, { message: "Email is required" })
    .email("Invalid email address"),

  password: z
    .string()
    .trim()
    .min(6, { message: "Password at list 6 char." })
    .max(30, { message: "Password at most 30 char." }),
});
