import type { Metadata } from "next";
import PageClient from "./PageClient";

export const metadata: Metadata = {
  title: "Rééducation de l'écriture au Chesnay (78)",
  description:
    "Sandrine Thibierge, graphothérapeute au Chesnay (Yvelines), vous accompagne pour améliorer l'écriture des enfants et des adolescents.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "La Graphothérapie - Rééducation de l'écriture au Chesnay (78)",
    description:
      "Sandrine Thibierge, graphothérapeute au Chesnay (Yvelines), vous accompagne pour améliorer l'écriture des enfants et des adolescents.",
    url: "/",
  },
};

export default function Page() {
  return <PageClient />;
}
