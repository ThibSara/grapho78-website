import React from "react";
import { Pencil, Eraser, NotebookPen } from "lucide-react";
import Spline from "@splinetool/react-spline";

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
                La rééducation de l&apos;écriture
              </h1>
              <p className="mt-6 text-xl leading-8 text-gray-700">
                Aliquet nec orci mattis amet quisque ullamcorper neque, nibh
                sem. At arcu, sit dui mi, nibh dui, diam eget aliquam. Quisque
                id at vitae feugiat egestas.
              </p>
            </div>
          </div>
        </div>
        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <Spline scene="https://prod.spline.design/0DxLm2vtCdk0kC8n/scene.splinecode" />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
              <p>
                Faucibus commodo massa rhoncus, volutpat. Dignissim sed eget
                risus enim. Mattis mauris semper sed amet vitae sed turpis id.
                Id dolor praesent donec est. Odio penatibus risus viverra tellus
                varius sit neque erat velit. Faucibus commodo massa rhoncus,
                volutpat. Dignissim sed eget risus enim. Mattis mauris semper
                sed amet vitae sed turpis id.
              </p>
              <ul role="list" className="mt-8 space-y-8 text-gray-600">
                <li className="flex gap-x-3">
                  <Pencil
                    className="mt-1 h-5 w-5 flex-none text-blue"
                    aria-hidden="true"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Des difficulté d&apos;écriture.
                      <br />
                    </strong>{" "}
                    Un enfant qui écrit mal, trop lentement ou avec difficulté
                    peut rencontrer des obstacles dans son parcours scolaire.
                    Par exemple, s&apos;il n&apos;arrive pas à copier assez
                    rapidement ses leçons ou s&apos;il se pose encore la
                    question de savoir comment former une lettre, il perd un
                    temps précieux et peut se retrouver en difficulté face à ses
                    camarades.
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <Eraser
                    className="mt-1 h-5 w-5 flex-none text-blue"
                    aria-hidden="true"
                  />
                  <span>
                    <strong className="font-semibold text-gray-900">
                      La graphothérapie comme solution. <br />
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
                      Un petit plus. <br />
                    </strong>{" "}
                    La graphothérapie ne se limite pas à corriger l’écriture;
                    elle vise aussi à améliorer la posture, renforcer la
                    motricité fine, acquérir l’automatisation du geste
                    contribuant ainsi à un mieux-être global dans ses activités
                    scolaires et quotidiennes.
                  </span>
                </li>
              </ul>
              <p className="mt-8">
                Et vitae blandit facilisi magna lacus commodo. Vitae sapien duis
                odio id et. Id blandit molestie auctor fermentum dignissim.
                Lacus diam tincidunt ac cursus in vel. Mauris varius vulputate
                et ultrices hac adipiscing egestas. Iaculis convallis ac tempor
                et ut. Ac lorem vel integer orci.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
