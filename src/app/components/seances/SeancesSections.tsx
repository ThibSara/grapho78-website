"use client";
import React, { useState, useEffect } from "react";

export const SeancesSection = () => {
  return (
    <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-32">
      <div
        className="absolute inset-y-0 left-0 -z-10 transform-gpu overflow-hidden blur-3xl"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%-18rem)] aspect-[1155/678] w-[18.0625rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-36rem)] sm:w-[36.09375rem]"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>
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
            className="aspect-[7/5] w-[28rem] max-w-none rounded-2xl bg-gray-50 object-cover"
          />
          <div className="flex">
            <img
              src="/images/seances/5.jpg"
              alt=""
              className="aspect-[4/3] w-[16rem] mt-5  max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
            />
            <img
              src="/images/seances/3.jpg"
              alt=""
              className="aspect-[4/3] w-[20rem] mt-5 ml-5 max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
