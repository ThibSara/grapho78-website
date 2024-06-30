"use client";
import React from "react";
import Spline from "@splinetool/react-spline";
import Image from "next/image";
import dynamic from "next/dynamic";

const stats = [
  { label: "diplomée en", value: "2008" },
  { label: "pratique", value: "16", postfix: " ans" },
  { label: "élèves", value: "1000", prefix: "+" },
];

const AnimatedNumbers = dynamic(
  () => {
    return import("react-animated-numbers");
  },
  { ssr: false }
);

export const HeroSection = () => {
  return (
    <div className="bg-white py-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* about me content */}
        <div className="items-center justify-center min-h-screen flex">
          <div className="mx-auto grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-16 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pr-4">
              <div className="relative overflow-hidden rounded-3xl w-full h-auto lg:h-[500px]">
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
                  className="relative z-10 w-full h-full"
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
                    par la calligraphie, l’écriture, l’encre, je rééduque
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
              <dl className="mt-10 grid grid-cols-2 gap-8 border-t border-gray-900/10 pt-10 sm:grid-cols-3">
                {stats.map((stat, statIdx) => (
                  <div key={statIdx} className="flex flex-col items-start">
                    <dt className="text-sm font-semibold leading-6 text-gray-600">
                      {stat.label}
                    </dt>
                    <div className="flex items-baseline">
                      {stat.prefix && (
                        <span className="text-sm font-bold leading-6">
                          {stat.prefix}
                        </span>
                      )}
                      <dd className="text-4xl font-bold leading-10 tracking-tight text-gray-900">
                        <AnimatedNumbers
                          animateToNumber={parseInt(stat.value)}
                          locale="en-US"
                        />
                      </dd>
                      {stat.postfix && (
                        <span className="text-sm font-bold leading-6">
                          {stat.postfix}
                        </span>
                      )}
                    </div>
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
                  Je travaille activement à la GRAFEM, fédération des
                  graphothérapeutes, en tant que membre du Conseil
                  d’administration. La Grafem oeuvre pour garantir un haut
                  niveau d&apos;éthique et de pratiques professionnelles de ses
                  membres ainsi qu&apos;à la reconnaissance de notre métier.
                </p>
                <p className="mt-8">
                  Je fais également partie du bureau de l&apos;AGGE, association
                  de graphothérapie. Nous organisons des activités entre
                  graphothérapeutes et proposons des conférences pour promouvoir
                  et développer notre discipline.
                </p>
                <p className="mt-8">
                  Je me forme régulièrement afin de pouvoir aider au mieux les
                  enfants : L’EFT (Emotional Freedom Technique), Tipi, Le
                  crayonnage en miroir, La méthode neuropsychomotrice de Mesker
                  , L’écriture avec Nicole Fraselle, Les Reflexes Archaïques, La
                  Posturologie, Les neurosciences avec Tatiana de Barelli … et
                  je suis co-créatrice des sous-main en plastique
                  éco-responsable pour une méthode de rééducation de l’écriture.
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
