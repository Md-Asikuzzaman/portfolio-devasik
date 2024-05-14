import { Metadata } from "next";

import "./globals.css";
import "slick-carousel/slick/slick.css";

import ReactQueryProvider from "./components/providers/ReactQueryProvider";
import SessionProviders from "@/app/components/providers/SessionProviders";

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
    <html className="dark scroll-pt-10 scroll-smooth md:scroll-pt-8" lang="en">
      <body
        className="bg-[#fafafa] dark:bg-[#0d1224]"
        suppressHydrationWarning={true}
      >
        <ReactQueryProvider>
          <SessionProviders>{children}</SessionProviders>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
