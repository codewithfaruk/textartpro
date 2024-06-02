import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque } from "next/font/google";

import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Toaster } from "react-hot-toast";

import ArtFaceCollectionContextProvider from "@/context";
import Saveditems from "@/components/saveditems";
import ScrollToTop from "@/components/scrolltotop";
import Script from "next/script";

const BricolageGrotesque = Bricolage_Grotesque({ subsets: ["latin"] });

export function metadata() {
  return {
    title: "1000+ Text Art ᐈ Copy and Paste ⚡ Ascii Art - TextArtPro",
    description: `textartpro.com provide lot of ASCII Art Unicode, Text Art, Logo, Vectors, Christmas & Birthday Ascii text art, Emoji, Happy New Year Text art, TikTok Comments Art, Whatsapp text art. ♫♪♬ ღ✰ ツ`,
  };
}

export const viewport: Viewport = {
  themeColor: "#833AB4",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${BricolageGrotesque.className} bg-neutral-100 `}>

        <ArtFaceCollectionContextProvider>
          <Header />
          {children}
          <Footer />
        </ArtFaceCollectionContextProvider>

        <Toaster position="top-right" />
        <Saveditems />
        <ScrollToTop/>
        <Script
          id="GA4-url"
          strategy="beforeInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-1DHJ5YQKJY"
        ></Script>
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                
                gtag('config', 'G-1DHJ5YQKJY', {
                    page_path: window.location.pathname,
                });
                `,
          }}
        />
      </body>
    </html>
  );
}
