import type { Metadata } from "next";
import "./globals.css";
import { gabarito } from "./fonts";

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
      <body className={`${gabarito.className}  antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
