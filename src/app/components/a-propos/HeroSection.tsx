import React from "react";
import Spline from "@splinetool/react-spline";
import Image from "next/image";

const stats = [
  { label: "diplomée en", value: "2008" },
  { label: "pratique", value: "16 ans" },
  { label: "élèves", value: "+1000" },
];

export const HeroSection = () => {
  return (
    <div className="bg-white py-10 ">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* about me content */}
        <div className="items-center justify-center min-h-screen flex">
          <div className=" mx-auto grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-16 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pr-4">
              <div className="relative overflow-hidden rounded-3xl  w-full h-auto lg:h-[500px]">
                <div className="absolute inset-0 z-0">
                  <Image
                    src="/images/grid.png"
                    alt="Grid background"
                    layout="fill"
                    objectFit="cover"
                    className="pointer-events-none"
                  />
                </div>

                <Spline
                  scene="https://prod.spline.design/SNniUrXIrTCv2qHa/scene.splinecode"
                  className=" relative z-10 w-full h-full"
                />
              </div>
            </div>
            <div>
              <div className="text-base leading-7 text-gray-700 lg:max-w-lg">
                <p className="text-base font-semibold leading-7 text-pink">
                  Sandrine Thibierge
                </p>
                <h1 className="mt-2 text-3xl font-bold tracking-tight text-blue sm:text-4xl">
                  A propos de moi
                </h1>
                <div className="max-w-xl">
                  <p className="mt-6">
                    Je suis graphothérapeute, installée au Chesnay. Passionnée
                    par la caligraphie, l’écriture, l’encre, je rééduque
                    l’écriture et le geste graphique chez les enfants et les
                    adolescents depuis 2010. Je les aide à améliorer leur
                    écriture et j’en profite pour leur transmettre ma passion
                    pour l’écriture au sens le plus général du terme.
                  </p>
                  <p className="mt-8">
                    Après avoir travaillé pendant 15 ans en entreprise en tant
                    qu’ingénieur dans les télécoms, j’ai changé d’orientation à
                    la naissance de mon troisième enfant. Afin d’aider mon
                    fils dyslexique, j’ai découvert les métiers autour des
                    enfants pour les aider dans leurs apprentissages. J’ai
                    repris des études en psychologie, caractérologie et
                    graphologie, et je suis devenue Graphothérapeute depuis
                    2008.
                  </p>
                </div>
              </div>
              <dl className="mt-10 grid grid-cols-2 gap-8 border-t border-gray-900/10 pt-10 sm:grid-cols-4">
                {stats.map((stat, statIdx) => (
                  <div key={statIdx}>
                    <dt className="text-sm font-semibold leading-6 text-gray-600">
                      {stat.label}
                    </dt>
                    <dd className="mt-2 text-3xl font-bold leading-10 tracking-tight text-gray-900">
                      {stat.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
        {/* about my associations content */}
        <div className="mx-auto mt-24 grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-16 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div>
            <div className="text-base leading-7 text-gray-700 lg:max-w-lg">
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-blue sm:text-4xl">
                Mes associations
              </h1>
              <div className="max-w-xl">
                <p className="mt-6">
                  Je suis membre de l’association de graphothérapie AGGE Label
                  certifiant de l’Association pour une Graphothérapie Globale
                  et Evolutive . Je fais partie de la fédération des
                  graphothérapeutes Grafem.
                </p>
                <p className="mt-8">
                  Je me forme régulièrement afin de pouvoir aider au mieux les
                  enfants : L’EFT (Emotional Freedom Technique), Tipi, Le
                  crayonnage en miroir, La méthode neuropsychomotrice de Mesker
                  , L’écriture avec Nicole Fraselle, Les Reflexes Archaïques, La
                  Posturologie, Les neurosciences avec Tatiana de Barelli … et
                  je suis co-créatrice des sous-main en plastique
                  éco-responsable pour une méthode de ré-éducation de
                  l’écriture.
                </p>
              </div>
            </div>
          </div>
          <div className="lg:pr-4">
            <div className="relative overflow-hidden px-6 pb-9 pt-10 flex sm:px-12 lg:max-w-lg lg:px-8 lg:pb-8 xl:px-10 xl:pb-10 items-center">
              <Image
                src="/images/agge-logo.png"
                alt="Associations"
                width={200}
                height={200}
              />
              <Image
                src="/images/grafem-logo.png"
                alt="Associations"
                width={250}
                height={250}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
