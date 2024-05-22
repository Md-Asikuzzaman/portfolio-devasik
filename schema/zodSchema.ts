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
