import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import { NavBar } from "./components/common/NavBar";
import { Footer } from "./components/common/Footer";
import { Cursor } from "./components/common/cursor/Cursor";

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
      <body className={"${urbanist.className} bg-white "}>
        <Cursor />
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
