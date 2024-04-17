import { Metadata } from "next";

import "./globals.css";
import "slick-carousel/slick/slick.css";

import ReactQueryProvider from "./components/providers/ReactQueryProvider";
import SessionProviders from "@/app/components/providers/SessionProviders";
import NextTopLoader from "nextjs-toploader";

export const metadata: Metadata = {
  title:
    "Md Asikuzzaman | MERN Stack Web Developer - such as (MongoDB, Express, React & Next, Node)",
  description: "something",
  icons: [
    {
      rel: "icon",
      type: "image/png",
      sizes: "32x32",
      url: "/images/dev.jpg",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html className="scroll-pt-10 md:scroll-pt-8 scroll-smooth dark" lang="en">
      <body
        className="dark:bg-[#0d1224] bg-[#fafafa]"
        suppressHydrationWarning={true}
      >
        <NextTopLoader color="#7c3aed" showSpinner={false} />
        <ReactQueryProvider>
          <SessionProviders>{children}</SessionProviders>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
