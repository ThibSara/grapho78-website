"use client";
import React from "react";
import Spline from "@splinetool/react-spline";
import Image from "next/image";
import dynamic from "next/dynamic";
import { cn } from "@/app/lib/utils";
import DotPattern from "@/components/magicui/dot-pattern";
import { motion } from "framer-motion";
import NumberTicker from "@/components/magicui/number-ticker";

interface HeroSectionProps {
  onSplineLoad: () => void;
}

const stats = [
  { label: "diplomée en", value: "2008" },
  { label: "pratique", value: "16", postfix: " ans" },
  { label: "élèves", value: "1000", prefix: "+" },
];

export const HeroSection: React.FC<HeroSectionProps> = ({ onSplineLoad }) => {
  return (
    <div className="py-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* about me content */}
        <div className="items-center justify-center min-h-screen flex">
          <div className="mx-auto grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-16 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pr-4">
              <div className="relative overflow-hidden rounded-3xl w-full h-auto lg:h-[500px]">
                <div className="absolute inset-0 z-0">
                  <DotPattern
                    className={cn(
                      "[mask-image:radial-gradient(350px_circle_at_center,white,transparent)]"
                    )}
                  />
                </div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1 }}
                >
                  <Spline
                    scene="https://prod.spline.design/SNniUrXIrTCv2qHa/scene.splinecode"
                    className="relative z-10 w-full h-full"
                    onLoad={onSplineLoad}
                  />
                </motion.div>
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
                    Je suis graphothérapeute, installée au Chesnay, et
                    passionnée par la calligraphie, l&apos;écriture et l’encre.
                    Depuis 2008, je rééduque l&apos;écriture et le geste
                    graphique des enfants et des adolescents, les aidant à
                    améliorer leur écriture tout en leur transmettant ma passion
                    pour l&apos;art de l&apos;écriture sous toutes ses formes.
                  </p>
                  <p className="mt-8">
                    Avant de me reconvertir, j&apos;ai travaillé pendant 15 ans
                    en tant qu&apos;ingénieur dans le domaine des télécoms. La
                    naissance de mon troisième enfant a été le déclencheur de ce
                    changement de carrière. Pour aider mon fils dyslexique, je
                    me suis intéressée aux métiers dédiés à
                    l&apos;accompagnement des enfants dans leurs apprentissages.
                    J&apos;ai repris des études en psychologie, caractérologie
                    et graphologie.
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
                      {stat.label != "élèves" && (
                        <dd className="text-4xl font-bold leading-10 tracking-tight text-gray-900">
                          {parseInt(stat.value)}
                        </dd>
                      )}
                      {stat.label === "élèves" && (
                        <dd className="text-4xl font-bold leading-10 tracking-tight text-gray-900">
                          <NumberTicker value={parseInt(stat.value)} />
                        </dd>
                      )}

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
              <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]">
                <div
                  className="relative left-[-3rem] aspect-[1155/678] w-[20rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[-6rem] sm:w-[40rem]"
                  style={{
                    clipPath:
                      "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                  }}
                />
              </div>
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
            <div className="relative overflow-hidden px-6 pb-9 pt-10 flex flex-col items-center sm:px-12 lg:max-w-lg lg:px-8 lg:pb-8 xl:px-10 xl:pb-10">
              <DotPattern
                className={cn(
                  "[mask-image:radial-gradient(350px_circle_at_center,white,transparent)]"
                )}
              />
              <Image
                src="/images/agge-logo.png"
                alt="Associations"
                width={200}
                height={200}
                className=" relative z-10 mb-5"
              />
              <Image
                src="/images/grafem-logo.png"
                alt="Associations"
                width={250}
                height={250}
                className="relative z-10 mt-5"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
