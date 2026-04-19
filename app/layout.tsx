import type { Metadata } from "next";
import "./globals.css";
import { gabarito, helveticaNowDisplay, publicSans } from "./fonts";
import { FORCE_LIGHT_MODE } from "./config";

export const metadata: Metadata = {
  title: "Anthony Ham",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${helveticaNowDisplay.className}  antialiased`}>
        <script
          dangerouslySetInnerHTML={{
            __html:
              `(function(){try{var forced=${FORCE_LIGHT_MODE ? "true" : "false"};if(forced){document.documentElement.classList.remove('dark');document.documentElement.setAttribute('data-force-light','1');try{localStorage.setItem('theme','light');}catch(e){}}else{document.documentElement.setAttribute('data-force-light','0');var t=localStorage.getItem('theme');if(t==='light'){document.documentElement.classList.remove('dark');try{localStorage.setItem('theme','light');}catch(e){}}else{document.documentElement.classList.add('dark');try{localStorage.setItem('theme','dark');}catch(e){}}}}catch(e){}})();`,
          }}
        />
        {children}
      </body>
    </html>
  );
}
