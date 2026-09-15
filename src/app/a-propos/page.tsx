import type { Metadata } from "next";
import PageClient from "./PageClient";

export const metadata: Metadata = {
  title: "À propos de Sandrine Thibierge",
  description:
    "Graphothérapeute diplômée depuis 2011, Sandrine Thibierge accompagne les enfants et adolescents dans la rééducation de l'écriture au Chesnay (78).",
  alternates: {
    canonical: "/a-propos",
  },
  openGraph: {
    title: "À propos de Sandrine Thibierge | La Graphothérapie",
    description:
      "Graphothérapeute diplômée depuis 2011, Sandrine Thibierge accompagne les enfants et adolescents dans la rééducation de l'écriture au Chesnay (78).",
    url: "/a-propos",
  },
};

export default function Page() {
  return <PageClient />;
}
