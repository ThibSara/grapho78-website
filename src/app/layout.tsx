import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import { NavBar } from "./sections/common/NavBar";
import { Footer } from "./sections/common/Footer";
import { Cursor } from "./sections/common/cursor/Cursor";
import Script from "next/script";

const urbanist = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "La Graphothérapie",
  description: "découvrez la rééducation de l'écriture",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <Script
          async
          src="https://www.googletagmanager.com/gtag/js?id=G-1GCM6MWZS8"
        ></Script>
        <Script id="google-analytics">
          {`window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-1GCM6MWZS8');`}
        </Script>
      </head>
      <body className={"${urbanist.className} bg-white"}>
        <Cursor />
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
