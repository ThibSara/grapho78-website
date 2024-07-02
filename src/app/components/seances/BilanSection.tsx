"use client";
import React from "react";

export const BilanSection = () => {
  return (
    <div className="relative mx-auto max-w-7xl px-6 lg:flex lg:px-8 mb-12">
      {/* Left Polygon */}
      <div
        className="absolute inset-x-0 top-0 h-full -z-10 transform-gpu overflow-hidden blur-3xl"
        aria-hidden="true"
      >
        <div
          className="relative w-full h-full bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20"
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
        />
      </div>

      <div className="lg:sticky lg:top-4 lg:self-start lg:block hidden">
        <img
          src="/images/seances/1.jpg"
          alt=""
          className="aspect-[7/5] w-[37rem] max-w-none rounded-2xl bg-gray-50 object-cover"
        />
      </div>
      <div className="lg:flex lg:items-start lg:gap-x-12 ">
        <div className="lg:ml-8 mt-10 lg:mt-0">
          <h2 className="text-2xl font-bold tracking-tight text-blue">
            Déroulé d&apos;un bilan
          </h2>
          <p className="mt-6 text-base leading-7 text-gray-600">
            Le bilan est un état des lieux de l&apos;écriture : une observation
            de l’écriture dans différentes situations, de la vitesse d’écriture,
            de la tenue du stylo, de la posture, de la pression et de la
            régularité du mouvement, ainsi que de tout ce qui est nécessaire
            pour bien écrire.
          </p>
          <p className="mt-6 text-base leading-7 text-gray-600">
            On évalue les problèmes spécifiques et les causes possibles
            sous-jacentes comme la concentration, la motricité fine ou la
            vision. Ce processus vise à identifier précisément les difficultés
            d&apos;écriture et à mettre en place des stratégies efficaces pour
            les surmonter.
          </p>
          <p className="mt-6 text-base leading-7 text-gray-600">
            <strong>Un petit plus :</strong> Le bilan permet aussi de préconiser
            une aide spécifique pour l’enfant à l’école, comme un plan
            d’accompagnement ou un tiers temps pour les examens pour les plus
            grands.
          </p>
          <div className="mt-10 flex items-center gap-x-4">
            <h4 className="flex-none text-sm font-semibold leading-6 text-pink">
              Prix du bilan
            </h4>
            <div className="h-px flex-auto bg-gray-100" />
            <span className="text-sm font-semibold leading-6 text-pink">
              120 à 150€
            </span>
          </div>
          <div className="lg:sticky mt-8 lg:top-4 lg:self-start  lg:hidden items-center flex justify-center">
            <img
              src="/images/seances/1.jpg"
              alt=""
              className="aspect-[7/5] w-full max-w-[37rem] rounded-2xl bg-gray-50 object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
