import React from "react";

export const PricingSection = () => {
  return (
    <div className="bg-white py-24 sm:py-32">
      {/* seance section */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
          <div className="p-8 sm:p-10 lg:flex-auto">
            <h3 className="text-2xl font-bold tracking-tight text-gray-900">
              Déroulé d’une séance
            </h3>
            <p className="mt-6 text-base leading-7 text-gray-600">
              Un programme spécifique est elabré suite au bilan pour
              l&apos;enfant avec des exercices progressifs pour améliorer la
              coordination, la fluidité et la lisibilité. On travaille sur le
              mouvement avec des petits jeux spécifiques. Ensuite on va aborder
              les lettres, puis sur les mots et les techniques pour bien les
              réaliser. Rapidement on travailler sur les techniques de copie,
              puis à la fin viendra la vitesse. Lors des séances on apprend la
              révision, c’est à dire la relecture, aussi bien dans le sens de
              l’orthographe mais aussi de la correction de lettres ambiguës. Le
              but de la remédiation est d’obtenir une écriture rapide et
              efficace avec le minimum de tension. Le geste de l&apos;écriture
              doit devenir inconscient. Une fois l’automatisation obtenue,
              l’élève peut se lancer dans l’orthographe, puis la rédaction et la
              planification de textes.
            </p>
            <div className="mt-10 flex items-center gap-x-4">
              <h4 className="flex-none text-sm font-semibold leading-6 text-pink">
                Prix de la séance
              </h4>
              <div className="h-px flex-auto bg-gray-100" />
              <span className="text-sm font-semibold leading-6 text-pink">
                50€
              </span>
            </div>
          </div>
          <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
            <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
              <div className="mx-auto max-w-xs px-8"></div>
            </div>
          </div>
        </div>
      </div>
      {/* bilan section */}
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
          <div className="p-8 sm:p-10 lg:flex-auto">
            <h3 className="text-2xl font-bold tracking-tight text-gray-900">
              Déroulé du bilan
            </h3>
            <p className="mt-6 text-base leading-7 text-gray-600">
              Le bilan est un “état des lieux” de l&apos;écriture : une
              observation de l’écriture dans différentes situation, de la
              vitesse d’écriture, de la tenue du stylo, de la posture, de la
              pression et de la régularité du mouvement, ainsi que de tout ce
              qui est nécessaire pour bien écrire. On évalue les problèmes
              spécifiques et les causes possibles sous-jacentes comme la
              concentration, la motricité fine ou la vision. Ce processus vise à
              identifier précisément les difficultés d&apos;écriture et à mettre
              en place des stratégies efficaces pour les surmonter. Un petit
              plus : Le bilan permet aussi de préconiser une aide spécifique
              pour l’enfant à l’école, comme un plan d’accompagnement ou un
              tiers temps pour les examens pour les plus grands.
            </p>
            <div className="mt-10 flex items-center gap-x-4">
              <h4 className="flex-none text-sm font-semibold leading-6 text-pink">
                Prix du bilan primaire ou collège
              </h4>
              <div className="h-px flex-auto bg-gray-100" />
              <span className="text-sm font-semibold leading-6 text-pink">
                150€
              </span>
            </div>
            <div className="mt-5 flex items-center gap-x-4">
              <h4 className="flex-none text-sm font-semibold leading-6 text-pink">
                Prix du bilan lycée
              </h4>
              <div className="h-px flex-auto bg-gray-100" />
              <span className="text-sm font-semibold leading-6 text-pink">
                160€
              </span>
            </div>
          </div>
          <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
            <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
              <div className="mx-auto max-w-xs px-8"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
