import type { Metadata } from "next";

import "./globals.css";

import AppLoader from "@/components/providers/AppLoader";

export const metadata: Metadata = {
  title: "Eventora",
  description:
    "Premium cinematic event platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">

      <body>

        <AppLoader>
          {children}
        </AppLoader>

      </body>

    </html>
  );
}