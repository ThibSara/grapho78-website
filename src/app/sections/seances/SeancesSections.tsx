import React from "react";

export const SeancesSection = () => {
  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-36">
      <div className="lg:flex lg:items-start lg:gap-x-12">
        <div className="lg:flex-1">
          <h2 className="text-2xl font-bold tracking-tight text-blue">
            Déroulé d&apos;une séance
          </h2>
          <p className="mt-6 text-base leading-7 text-gray-600">
            Un programme spécifique est élaboré suite au bilan pour l’enfant
            avec des exercices progressifs pour améliorer la coordination, la
            fluidité et la lisibilité.
          </p>
          <p className="mt-6 text-base leading-7 text-gray-600">
            On travaille sur le mouvement avec des petits jeux spécifiques.
            Ensuite, on aborde les lettres, puis les mots et les techniques pour
            bien les réaliser.
          </p>
          <p className="mt-6 text-base leading-7 text-gray-600">
            Rapidement, on travaille sur les techniques de copie, puis à la fin
            vient la vitesse. Lors des séances, on apprend la révision,
            c’est-à-dire la relecture, aussi bien dans le sens de l’orthographe
            que de la correction de lettres ambiguës.
          </p>
          <p className="mt-6 text-base leading-7 text-gray-600">
            Le but de la remédiation est d’obtenir une écriture rapide et
            efficace avec le minimum de tension. Le geste de l&apos;écriture
            doit devenir inconscient.
          </p>
          <p className="mt-6 text-base leading-7 text-gray-600">
            Une fois l’automatisation obtenue, l’élève peut se lancer dans
            l’orthographe, puis la rédaction et la planification de textes.
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
        <div className="lg:flex-1 lg:sticky lg:top-4 lg:self-start items-center">
          <img
            src="/images/seances/6.jpg"
            alt=""
            className="aspect-[7/5] w-[20rem] mt-8 lg:mt-0 lg:w-[28rem] max-w-none rounded-2xl bg-gray-50 object-cover"
          />
          <div className="flex">
            <img
              src="/images/seances/5.jpg"
              alt=""
              className="aspect-[4/3] w-[12rem]  lg:w-[16rem] mt-5  max-w-none flex-none rounded-2xl bg-gray-50 object-cover hidden sm:block"
            />
            <img
              src="/images/seances/3.jpg"
              alt=""
              className="aspect-[4/3] w-[20rem] lg:w-[20rem] mt-5  sm:ml-5 ml-0 max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
