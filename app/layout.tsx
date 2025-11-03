import type { Metadata } from "next";
import "./globals.css";
import { gabarito, helveticaNowDisplay, publicSans } from "./fonts";

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
      <body className={`${helveticaNowDisplay.className}  antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
