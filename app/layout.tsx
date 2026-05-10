import type { Metadata } from "next";

import "./globals.css";

import AppLoader from "@/components/providers/AppLoader";

export const metadata: Metadata = {
  title: "EELEVEN",
  description:
    "Premium immersive event experiences platform",

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

        <AppLoader>
          {children}
        </AppLoader>

      </body>

    </html>
  );
}