import { NextResponse } from "next/server";

import { z } from "zod";
import nodemailer from "nodemailer";

const mailSchema = z.object({
  email: z
    .string({
      required_error: "Email is required",
    })
    .min(1, { message: "Email is required" })
    .max(255, { message: "Email Address too long" })
    .email({ message: "Invalid email address" })
    .trim(),
  message: z
    .string()
    .min(1, { message: "Message is required" })
    .max(255, { message: "Should be at most 20 char" })
    .trim(),
});

export async function POST(req: Request, res: Response) {
  try {
    const mailInfo: { email: string; message: string } = await req.json();
    const validation = mailSchema.safeParse(mailInfo);

    if (!validation.success) {
      return NextResponse.json(validation.error.errors, { status: 400 });
    }

    // mail function here...
    const to = "mdasikuzzaman.en@gmail.com";
    const subject = "Mail From Portfolio Site.";
    const message = mailInfo.message;
    const from = mailInfo.email;

    const generateEmailHtml = (message: string, subject: string) => `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Email Template</title>
  </head>
  <body style="background: purple; padding: 10px; border-radius: 5px;">
    <h1 style="text-align: center; color: white; font-size: 18px;">${subject}</h1>
    <p style="color: white; margin-top: 15px;">From: ${from}</p>
    <p style="color: white; margin-top: 5px;">Message: ${message}</p>
  </body>
  </html>
`;

    const html = generateEmailHtml(message, subject);

    // Create a nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "mdasikuzzaman.en@gmail.com",
        pass: process.env.APP_PASSWORD,
      },
    });

    // Define the email options
    const mailOptions = {
      from: mailInfo.email,
      to,
      subject,
      html,
    };

    // Send the email
    try {
      await transporter.sendMail(mailOptions);
      return NextResponse.json({ message: "Email sent successfully!!!" });
    } catch (error) {
      console.error(error);
      return NextResponse.json({ message: "Email not sent." });
    }
  } catch (error) {
    return NextResponse.json({ msg: error }, { status: 500 });
  }
}
