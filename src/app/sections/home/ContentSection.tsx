import React from "react";
import { Pencil, Eraser, NotebookPen } from "lucide-react";
import Spline from "@splinetool/react-spline";
import Image from "next/image";

export const ContentSection = () => {
  return (
    <div className="relative isolate overflow-hidden px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <p className="text-base font-semibold leading-7 text-pink">
                La graphothérapie comme solution
              </p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-blue sm:text-4xl">
                L&apos;écriture
              </h1>
            </div>
          </div>
        </div>
        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden items-center flex">
          <Spline
            scene="https://prod.spline.design/ib3lLZKOTtzCM4BH/scene.splinecode"
            className="hidden sm:block"
          />
          <Image
            src="/images/3D/book.avif"
            alt="book-image"
            width={400}
            height={400}
            className="sm:hidden"
          />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
              <p>
                <strong>
                  Apprendre à écrire suit plusieurs étapes essentielles
                </strong>
                , débutant dès le plus jeune âge avec le développement de la
                motricité fine à travers des activités manuelles comme le
                coloriage et le découpage.
                <br /> Par la suite, l’enfant apprend à reconnaître les lettres
                et à faire le lien entre les lettres et les sons. Il commence à
                écrire les lettres en majuscules, car elles sont plus grandes et
                plus faciles à maîtriser, avant de passer aux minuscules.
                <br /> À l’école, il combine les lettres pour former des mots,
                puis des phrases, s’entraînant régulièrement pour améliorer ses
                compétences. Ces étapes progressives, soutenues par des
                exercices pratiques et constants, permettent de maîtriser
                l&apos;écriture de manière efficace.
              </p>
              <ul role="list" className="mt-8 space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                  <Pencil
                    className="mt-1 h-5 w-5 flex-none text-blue"
                    aria-hidden="true"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Des difficultés d&apos;écriture
                      <br />
                    </strong>{" "}
                    Un enfant qui écrit mal, trop lentement ou avec difficulté,
                    dont l’écriture n’est pas conforme à l’âge et à ses
                    possibilités peut rencontrer des obstacles dans son parcours
                    scolaire. Par exemple, s&apos;il n&apos;arrive pas à copier
                    assez rapidement ses leçons ou s&apos;il se pose encore la
                    question de savoir comment former une lettre, il perd un
                    temps précieux et peut se retrouver en difficulté.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <Eraser
                    className="mt-1 h-5 w-5 flex-none text-blue"
                    aria-hidden="true"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      La graphothérapie comme solution <br />
                    </strong>{" "}
                    C&apos;est là qu&apos;intervient la graphothérapeute.
                    Spécialiste de l&apos;écriture, elle évalue les besoins
                    spécifiques de chaque enfant et met en place des exercices
                    personnalisés pour améliorer la fluidité, la lisibilité et
                    la rapidité de l’écriture. Grâce à un suivi attentif et des
                    techniques adaptées, la graphothérapeute aide l&apos;enfant
                    à acquérir une écriture plus efficace et plus agréable, ce
                    qui peut significativement améliorer sa confiance en lui et
                    sa performance scolaire. Les sessions de graphothérapie
                    incluent des activités ludiques et motivantes pour rendre
                    l&apos;apprentissage agréable.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <NotebookPen
                    className="mt-1 h-5 w-5 flex-none text-blue"
                    aria-hidden="true"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Le petit plus <br />
                    </strong>{" "}
                    La graphothérapie ne se limite pas à corriger l’écriture;
                    elle vise aussi à améliorer la posture, renforcer la
                    motricité fine, acquérir l’automatisation du geste
                    contribuant ainsi à un mieux-être global dans ses activités
                    scolaires et quotidiennes.
                  </span>
                </li>
              </ul>
              <div
                className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
                aria-hidden="true"
              >
                <div
                  className="relative left-[-3rem] aspect-[1155/678] w-[20rem] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[-6rem] sm:w-[40rem]"
                  style={{
                    clipPath:
                      "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
