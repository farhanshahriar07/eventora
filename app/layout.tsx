import type { Metadata } from "next";

import "./globals.css";

import AppLoader from "@/components/providers/AppLoader";
import ScrollProgress from "@/components/ui/ScrollProgress";

export const metadata: Metadata = {
  title: "EELEVEN - Turning Speed Into Experiences",
  description:
    "Bangladesh's leading automotive event and motorsport experience company. Premium car exhibitions, drift competitions, racing festivals, and automotive lifestyle experiences.",

  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="en">

      <body>

        <ScrollProgress />

        <AppLoader>
          {children}
        </AppLoader>

      </body>

    </html>
  );
}