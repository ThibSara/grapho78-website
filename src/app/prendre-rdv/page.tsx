import type { Metadata } from "next";
import PageClient from "./PageClient";

export const metadata: Metadata = {
  title: "Prendre rendez-vous",
  description:
    "Contactez Sandrine Thibierge pour prendre rendez-vous : téléphone, email ou formulaire. Cabinet de graphothérapie situé au Chesnay (Yvelines).",
  alternates: {
    canonical: "/prendre-rdv",
  },
  openGraph: {
    title: "Prendre rendez-vous | La Graphothérapie",
    description:
      "Contactez Sandrine Thibierge pour prendre rendez-vous : téléphone, email ou formulaire. Cabinet de graphothérapie situé au Chesnay (Yvelines).",
    url: "/prendre-rdv",
  },
};

export default function Page() {
  return <PageClient />;
}
