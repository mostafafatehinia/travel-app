import { ReactNode } from "react";

import type { Metadata } from "next";

import "../styles/globals.css";

export const metadata: Metadata = {
  title: "Travel App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="fa-IR" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
