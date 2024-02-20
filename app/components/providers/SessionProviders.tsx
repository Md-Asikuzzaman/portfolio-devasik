"use client";

import { NextPage } from "next";
import { SessionProvider } from "next-auth/react";
import { Toaster } from "react-hot-toast";

interface Props {
  children: React.ReactNode;
}

const SessionProviders: NextPage<Props> = ({ children }) => {
  return (
    <SessionProvider>
      <Toaster />
      {children}
    </SessionProvider>
  );
};

export default SessionProviders;
