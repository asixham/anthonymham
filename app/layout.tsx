import type { Metadata } from "next";
import "./globals.css";
import { redHatDisplay } from "./fonts";

export const metadata: Metadata = {
  title: "Anthony Ham",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${redHatDisplay.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
