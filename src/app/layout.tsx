import type { Metadata } from "next";
import { Urbanist } from "next/font/google";
import "./globals.css";
import { NavBar } from "./sections/common/NavBar";
import { Footer } from "./sections/common/Footer";
import { Cursor } from "./sections/common/cursor/Cursor";
import Script from "next/script";

const urbanist = Urbanist({ subsets: ["latin"] });

const siteUrl = "https://grapho78.com";
const siteName = "La Graphothérapie - Sandrine Thibierge";
const defaultDescription =
  "Sandrine Thibierge, graphothérapeute au Chesnay (Yvelines), accompagne les enfants et adolescents dans la rééducation de l'écriture.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteName,
    template: `%s | ${siteName}`,
  },
  description: defaultDescription,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName,
    title: siteName,
    description: defaultDescription,
    url: siteUrl,
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 801,
        alt: "Sandrine Thibierge, graphothérapeute",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteName,
    description: defaultDescription,
    images: ["/images/og-image.jpg"],
  },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "MedicalBusiness",
  name: "La Graphothérapie - Sandrine Thibierge",
  description: defaultDescription,
  url: siteUrl,
  image: `${siteUrl}/images/og-image.jpg`,
  telephone: "+33609992288",
  email: "st.grapho@gmail.com",
  address: {
    "@type": "PostalAddress",
    streetAddress: "8 rue des deux cousins",
    addressLocality: "Le Chesnay",
    postalCode: "78150",
    addressRegion: "Yvelines",
    addressCountry: "FR",
  },
  founder: {
    "@type": "Person",
    name: "Sandrine Thibierge",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
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
        <Script id="local-business-jsonld" type="application/ld+json">
          {JSON.stringify(localBusinessJsonLd)}
        </Script>
      </head>
      <body className={`${urbanist.className} bg-white`}>
        <div className="hidden md:block">
          <Cursor />
        </div>
        <NavBar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
