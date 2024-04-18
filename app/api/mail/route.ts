import { NextResponse } from "next/server";

import { z } from "zod";
import nodemailer from "nodemailer";

interface ApiResponse {
  message?: string;
}

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

export async function POST(
  req: Request,
  res: Response
): Promise<NextResponse<ApiResponse>> {
  try {
    const mailInfo: { email: string; message: string } = await req.json();
    const validation = mailSchema.safeParse(mailInfo);

    if (!validation.success) {
      return NextResponse.json(
        { message: "Validation errors!!!" },
        { status: 400 }
      );
    }

    // mail function here...
    const to = "mdasikuzzaman.en@gmail.com";
    const subject = "Mail From Portfolio Site.";
    const message = mailInfo.message;
    const from = mailInfo.email;

    const generateEmailHtml = (message: string, subject: string) => `
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Subject: [Ticket ID] Support Ticket Resolved</title>
    <!-- Include Hind font from Google Fonts  -->
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=Hind:wght@300;400;500;700&display=swap"
    />
  </head>
  <body style="margin: 0; background-color: #f0f3f5">
    <table width="100%">
      <tr>
        <td style="background-color: #f0f3f5" align="center" valign="top">
          <table
            width="640"
            cellpadding="0"
            cellspacing="0"
            bgcolor="#ffffff"
            style="
              border-radius: 24px;
              margin: 40px 0;
              font-family: 'Hind', sans-serif;
            "
          >
            <tr>
              <td style="padding: 40px" valign="top">
                <table width="100%" cellpadding="0" cellspacing="0">
                  <tr>
                    <td>
                      <h2
                        style="
                          color: #3e545e;
                          font-family: 'Hind', sans-serif;
                          font-size: 20px;
                          font-weight: 600;
                          line-height: 20px;
                          margin: 0;
                          margin-bottom: 24px;
                        "
                      >
                        Dear Asik,
                      </h2>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p
                        style="
                          color: #3e545e;
                          font-family: 'Hind', sans-serif;
                          font-size: 24px;
                          font-style: normal;
                          font-weight: 400;
                          line-height: 32px;
                          margin: 0;
                          margin-bottom: 24px;
                        "
                      >
                        ${message}
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <p
                        style="
                          color: #3e545e;
                          font-family: 'Hind', sans-serif;
                          font-size: 24px;
                          font-style: normal;
                          font-weight: 400;
                          line-height: 32px;
                          margin: 0;
                          margin-bottom: 24px;
                        "
                      >
                        From:
                        <a
                          style="
                            color: #12a188;
                            font-family: 'Hind', sans-serif;
                            font-size: 24px;
                            font-style: normal;
                            font-weight: 400;
                            line-height: 32px;
                          "
                          href="mailto:${from}"
                        >
                          <span style="color: #12a188">
                            ${from}
                          </span>
                        </a>
                      </p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td
                style="
                  background-color: #12a188;
                  padding: 20px 40px;
                  border-radius: 0 0 24px 24px;
                "
              >
                <h2
                  style="
                    color: #fff;
                    font-family: 'Hind', sans-serif;
                    font-size: 24px;
                    font-weight: 700;
                    line-height: 32px;
                    margin: 0;
                    margin-bottom: 8px;
                  "
                >
                  Portfolio Site.
                </h2>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
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
      return NextResponse.json(
        { message: "Email sent successfully!!!" },
        { status: 200 }
      );
    } catch (error) {
      return NextResponse.json({ message: "Email not sent." });
    }
  } catch (error) {
    return NextResponse.json(
      { message: "Something Went wrong!!!" },
      { status: 500 }
    );
  }
}
