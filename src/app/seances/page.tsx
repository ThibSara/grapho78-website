import type { Metadata } from "next";
import PageClient from "./PageClient";

export const metadata: Metadata = {
  title: "Les séances de graphothérapie",
  description:
    "Découvrez le déroulement des séances de graphothérapie : bilan graphomoteur, rééducation de l'écriture et suivi personnalisé au Chesnay (Yvelines).",
  alternates: {
    canonical: "/seances",
  },
  openGraph: {
    title: "Les séances de graphothérapie | La Graphothérapie",
    description:
      "Découvrez le déroulement des séances de graphothérapie : bilan graphomoteur, rééducation de l'écriture et suivi personnalisé au Chesnay (Yvelines).",
    url: "/seances",
  },
};

export default function Page() {
  return <PageClient />;
}
