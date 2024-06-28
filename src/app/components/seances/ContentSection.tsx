import React from "react";

export const ContentSection = () => {
  return (
    <div className="mt-32 overflow-hidden sm:mt-40">
      <div className="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:min-w-full lg:max-w-none lg:flex-none lg:gap-y-8">
          <div className="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
            <h2 className="text-2xl font-bold tracking-tight text-blue">
              En quoi consiste les séances ?
            </h2>
            <p className="mt-6 text-base leading-7 text-gray-600">
              Un programme spécifique est elabré suite au bilan pour l’enfant
              avec des exercices progressifs pour améliorer la coordination, la
              fluidité et la lisibilité. On travaille sur le mouvement avec des
              petits jeux spécifiques. Ensuite on va aborder les lettres, puis
              sur les mots et les techniques pour bien les réaliser. Rapidement
              on travailler sur les techniques de copie, puis à la fin viendra
              la vitesse. Lors des séances on apprend la révision, c’est à dire
              la relecture, aussi bien dans le sens de l’orthographe mais aussi
              de la correction de lettres ambiguës. Le but de la remédiation est
              d’obtenir une écriture rapide et efficace avec le minimum de
              tension. Le geste de l'écriture doit devenir inconscient. Une fois
              l’automatisation obtenue, l’élève peut se lancer dans
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
          <div className="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents">
            <div className="w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
              <img
                src="https://images.unsplash.com/photo-1670272502246-768d249768ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1152&q=80"
                alt=""
                className="aspect-[7/5] w-[37rem] max-w-none rounded-2xl bg-gray-50 object-cover"
              />
            </div>
            <div className="contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-[37rem] lg:items-start lg:justify-end lg:gap-x-8">
              <div className="order-first flex w-64 flex-none justify-end self-end lg:w-auto">
                <img
                  src="https://images.unsplash.com/photo-1605656816944-971cd5c1407f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=768&h=604&q=80"
                  alt=""
                  className="aspect-[4/3] w-[24rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
                />
              </div>

              <div className="hidden sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none">
                <img
                  src="https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=768&h=604&q=80"
                  alt=""
                  className="aspect-[4/3] w-[24rem] max-w-none rounded-2xl bg-gray-50 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* bilan section */}
      <div className="mx-auto max-w-7xl px-6 lg:flex lg:px-8 mt-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 mt-32 lg:flex lg:items-center">
          <div className="lg:flex lg:items-start lg:gap-x-12">
            <img
              src="https://images.unsplash.com/photo-1670272502246-768d249768ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1152&q=80"
              alt=""
              className="aspect-[7/5] w-[37rem] max-w-none rounded-2xl bg-gray-50 object-cover"
            />
            <div className="lg:ml-8">
              <h2 className="text-2xl font-bold tracking-tight text-blue">
                Déroulé d'un bilan
              </h2>
              <p className="mt-6 text-base leading-7 text-gray-600">
                Le bilan est un “état des lieux” de l'écriture : une observation
                de l’écriture dans différentes situations, de la vitesse
                d’écriture, de la tenue du stylo, de la posture, de la pression
                et de la régularité du mouvement, ainsi que de tout ce qui est
                nécessaire pour bien écrire. On évalue les problèmes spécifiques
                et les causes possibles sous-jacentes comme la concentration, la
                motricité fine ou la vision. Ce processus vise à identifier
                précisément les difficultés d'écriture et à mettre en place des
                stratégies efficaces pour les surmonter. Un petit plus : Le
                bilan permet aussi de préconiser une aide spécifique pour
                l’enfant à l’école, comme un plan d’accompagnement ou un tiers
                temps pour les examens pour les plus grands.
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
          </div>
        </div>
      </div>
    </div>
  );
};
